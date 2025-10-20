import { Link, NavLink } from 'react-router-dom';
import { useContext } from 'react';
import { CartContext } from '../../context/CartContext';
import { AuthContext } from '../../context/AuthContext';
import './NavBar.css';

const NavBar = () => {
  const { totalItems } = useContext(CartContext);
  const { user, isAuthenticated, logout } = useContext(AuthContext);

  return (
    <nav className="navbar">
      <Link to="/" className="navbar-brand">
        Mi Tienda
      </Link>
      <div className="navbar-links">
        <NavLink to="/" className={({ isActive }) => (isActive ? 'active-link' : '')}>Todos</NavLink>
        <NavLink to="/category/electronics" className={({ isActive }) => (isActive ? 'active-link' : '')}>Electrónica</NavLink>
        <NavLink to="/category/jewelery" className={({ isActive }) => (isActive ? 'active-link' : '')}>Joyería</NavLink>
      </div>

      <div className="navbar-user">
        {isAuthenticated ? (
          <>
            <span className="user-greeting">Hola, {user.name}</span>
            <button onClick={logout} className="logout-button">Salir</button>
          </>
        ) : (
          <NavLink to="/login" className="login-button">Ingresar</NavLink>
        )}
        <Link to="/cart" className="navbar-cart">
          🛒 {totalItems > 0 && <span className="cart-count">{totalItems}</span>}
        </Link>
      </div>
    </nav>
  );
};

export default NavBar;