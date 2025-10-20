import { Link } from 'react-router-dom';
import './Item.css';

const Item = ({ product }) => {
  return (
    <div className="item-card">
      <img src={product.image} alt={product.title} className="item-image" />
      <div className="item-content">
        <h3 className="item-title">{product.title}</h3>
        <p className="item-price">${product.price}</p>
        <Link to={`/product/${product.id}`} className="item-button">
          Ver detalle
        </Link>
      </div>
    </div>
  );
};

export default Item;