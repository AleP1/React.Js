import './NavBar.css';
import { CartWidget } from '../CartWidget/CartWidget';
import logo from '../../assets/images/logo.jpg';
import { Link, NavLink } from 'react-router-dom'

export function NavBar() {



  return (
    <header>
      <nav className="App__nav">
        <Link to='/'>
          <img className="logo" src={logo} alt="logo" />
        </Link>
        <ul>
          <NavLink activeClassName='nav__link' to='/category/bicicletas'>
            <li>Bicicletas</li>
          </NavLink>
          <NavLink activeClassName='nav__link' to='/category/monopatines'>
            <li>Monopatines</li>
          </NavLink>
          <NavLink activeClassName='nav__link' to='/category/motoselectricas'>
            <li>motos electricas</li>
          </NavLink>
          <NavLink activeClassName='nav__link' to='/category/accesorios'>
            <li>Accesorios</li>
          </NavLink>
        </ul>
        <CartWidget />
      </nav>
    </header>
  );
}
