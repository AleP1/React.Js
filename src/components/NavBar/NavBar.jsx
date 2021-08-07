import './NavBar.css';
import { CartWidget } from '../CartWidget/CartWidget';
import logo from '../../assets/images/logo.jpg';
import { CartContext } from '../../context/cartContext';
import { Link, NavLink } from 'react-router-dom'
import { useContext, useState, useEffect } from 'react';

export function NavBar() {
  const { cart } = useContext(CartContext)
  const [change, setChange] = useState(false)

  useEffect(() => {
    if (cart.length > 0) {
      setChange(true)
    } else {
      setChange(false)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [cart])

  return (
      <nav className="App__nav">
        <Link className="logo__link" to='/'>
          <img className="logo" src={logo} alt="logo" />
        </Link>
        <ul className="nav__bar">
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
        <div className="nav__bar">
          <NavLink activeClassName='nav__link' to='/login'>
            <li>Login</li>
          </NavLink>
          {change && <CartWidget />}
          {!change && <> </>}
        </div>
      </nav>
  );
}
