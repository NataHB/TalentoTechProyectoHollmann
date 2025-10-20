import { Link, NavLink } from 'react-router-dom';
import { useContext } from 'react';
import { CartContext } from '../../context/CartContext';
import './NavBar.css';

const NavBar = () => {
  const { totalItems } = useContext(CartContext);

  return (
    <nav className="navbar">
      <Link to="/" className="navbar-brand">
        Mi Tienda
      </Link>
      <div className="navbar-links">
        <NavLink to="/" className={({isActive}) => isActive ? 'active-link' : ''}>Todos</NavLink>
        <NavLink to="/category/electronics" className={({isActive}) => isActive ? 'active-link' : ''}>Electrónica</NavLink>
        <NavLink to="/category/jewelery" className={({isActive}) => isActive ? 'active-link' : ''}>Joyería</NavLink>
      </div>
      <Link to="/cart" className="navbar-cart">
        🛒 {totalItems > 0 && <span className="cart-count">{totalItems}</span>}
      </Link>
    </nav>
  );
};

export default NavBar;