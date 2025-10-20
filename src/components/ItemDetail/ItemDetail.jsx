import { useContext } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { CartContext } from '../../context/CartContext';
import { AuthContext } from '../../context/AuthContext';
import './ItemDetail.css';

const ItemDetail = ({ product }) => {
  const { addItem } = useContext(CartContext);
  const { isAuthenticated } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();

  const handleAddToCart = () => {
    if (isAuthenticated) {
      addItem(product, 1);
    } else {
      navigate('/login', { 
        state: { 
          message: 'Debes iniciar sesión para agregar productos.',
          from: location 
        } 
      });
    }
  };

  return (
    <div className="item-detail">
      <img src={product.image} alt={product.title} className="item-detail-image" />
      <div className="item-detail-info">
        <h1 className="item-detail-title">{product.title}</h1>
        <p className="item-detail-category">{product.category}</p>
        <p className="item-detail-description">{product.description}</p>
        <p className="item-detail-price">${product.price}</p>
        <button onClick={handleAddToCart} className="add-to-cart-button">
          Agregar al Carrito
        </button>
      </div>
    </div>
  );
};

export default ItemDetail;