import './NavBar.css';
import { CartWidget } from '../CartWidget/CartWidget';

import logo from '../../assets/images/logo.jpg';

export function NavBar() {
  return (
    <div className="App">
      <nav className="App__nav">
        <img className="logo" src= {logo} alt="logo"/>
        <lu>
            <li>Mountain Bikes</li>
            <li>Plegables</li>
            <li>Electricas</li>
            <li>Monopatines</li>
        </lu>
        <CartWidget />
      </nav>

    </div>
  );
}
