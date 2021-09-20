import React, { useContext } from 'react';
import './CartWidget.css';
import { Link } from 'react-router-dom';
import carts from '../../assets/images/carts.png';
import { CartContext } from '../../context/cartContext';

const CartWidget = () => {
  const { counter } = useContext(CartContext);

  return (
    <Link to='/cart'>
      <div className='nav__cart'>
        <img src={carts} alt='Cart' />
        <span className='cart__circle'>{counter}</span>
      </div>
    </Link>
  );
};

export default CartWidget;

