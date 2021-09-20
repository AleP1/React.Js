import React, { useContext, useState } from 'react';
import './ItemDetail.css';
import { Link } from 'react-router-dom';
import ItemCount from '../itemCount/ItemCount';
import { CartContext } from '../../context/cartContext';

const ItemDetail = ({ item }) => {
  const [change, setChange] = useState(false);
  const { setItemSelected, setQuantity, addItem } = useContext(CartContext);

  const handlerAdd = (e) => {
    const quantityToAdd = parseInt(e.target.value, 10);
    setQuantity(quantityToAdd);
    setItemSelected(item);
    setChange(true);
  };

  return (
    <article className='d__card' key={item.id}>
      <div className='d__card__sec1'>
        <img className='d__card__img' src={item.pictureUrl} alt='fotito' />
        <p className='d__card__title'>{item.title}</p>
        <p className='d__card__price'>
          $
          {item.price}
        </p>
      </div>
      <div className='d__card__sec2'>
        <p className='d__card__des'>{item.description}</p>
        {!change && <ItemCount stock={item.stock} inicial={1} onAdd={handlerAdd} />}
        {change && (
          <Link to='/cart' className='d__card__finish'>
            <button type='submit' className='d__count__button' onClick={addItem}>Termina tu compra</button>
          </Link>
        )}
      </div>
    </article>
  );
};

export default ItemDetail;
