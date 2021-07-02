import './NavBar.css';
import { CartWidget } from '../CartWidget/CartWidget';
import logo from '../../assets/images/logo.jpg';
import {Link, NavLink} from 'react-router-dom'

export function NavBar() {

  return (
   <>
      <nav className="App__nav">
      <Link to='/'>
        <img className="logo" src= {logo} alt="logo"/>
      </Link>
        <ul>
            <NavLink to='/category/Bicicletas'>
            <li>Bicicletas</li>
            </NavLink>
            <NavLink to='category/Monopatines'>
            <li>Monopatines</li>
            </NavLink>
            <NavLink to='category/MotosElectricas'>
            <li>motos electricas</li>
            </NavLink>
            <NavLink to='category/Accesorios'>
            <li>Accesorios</li>
            </NavLink>
        </ul>
        <CartWidget />
      </nav>
      </>
  );
}
