import { useContext } from 'react';
import { CartContext } from '../../context/CartContext';
import './ItemDetail.css';

const ItemDetail = ({ product }) => {
  const { addItem } = useContext(CartContext);
  
  // Lógica simple para manejar la cantidad, se puede mejorar con un estado
  const handleAddToCart = () => {
    addItem(product, 1); // Agregamos 1 unidad
    alert(`Agregaste "${product.title}" al carrito.`);
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