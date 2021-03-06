import React, { useContext } from 'react';
import './cartPage.css';
import { Link } from 'react-router-dom';
import { CartContext } from '../../context/cartContext';

const CartPage = () => {

  const { getOrder, cart, total, clear, removeItem } = useContext(CartContext);

  return (
    cart.length ? (
      <div className='Cart__div'>
        <div>
          {cart.map((product) => {
            return (
              <div key={product.itemSelected.id} className='Cart__List'>
                <h3>{product.itemSelected.title}</h3>
                <div className='Cart__List__info'>
                  <span>
                    Subtotal: $
                    {parseInt(product.itemSelected.price, 10) * product.quantity}
                  </span>
                  <br />
                  <span>
                    Cantidad:
                    {product.quantity}
                  </span>
                  <button type='button' onClick={() => removeItem(product.itemSelected.id)}>
                    <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ-MhZay3qbjk274mA5pzqP6Ag39R67dlAsUjCuZhEyfkv_ng_gArPgHuTfBi1EF_io0J0&usqp=CAU' alt='trash can' />
                  </button>
                </div>
              </div>
            );

          })}
        </div>
        <div className='Cart__Footer'>
          <h3>
            Total: $
            {total}
          </h3>
          <button type='button' className='buy' onClick={getOrder}>COMPRAR</button>
          <button type='button' onClick={clear}>Vaciar carrito</button>
        </div>
      </div>
    ) : (
      <div className='Cart__null'>
        <h1>Nada por aqui!</h1>
        <Link to='/'>IR AL INICIO</Link>
      </div>
    ));
};

export default CartPage;
