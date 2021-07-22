import './CartWidget.css';
import carts from '../../assets/images/carts.png';
import { CartContext } from '../../context/cartContext';
import { useContext } from 'react';
import { Link } from 'react-router-dom';


export function CartWidget() {
  const { counter } = useContext(CartContext)
  console.log(`counter es ${counter}`)

  return (
    <Link to="/cart">
      <div className="nav__cart">
        <img src={carts} alt="Cart" />
        <span className="cart__circle">{counter}</span>
      </div>
    </Link>
  );
}

