import './CartWidget.css';
import carts from '../../assets/images/carts.png';

export function CartWidget() {
  return (
    <div className="nav__cart">
        <img src= {carts} alt="Cart"/>
    </div>
  );
}

