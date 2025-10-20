import { useContext } from 'react';
import { CartContext } from '../../context/CartContext';
import './Cart.css';

const Cart = ({ item }) => {
  const { removeItem } = useContext(CartContext);

  return (
    <div className="cart-item">
      <img src={item.image} alt={item.title} className="cart-item-image" />
      <div className="cart-item-details">
        <h4>{item.title}</h4>
        <p>Cantidad: {item.quantity}</p>
        <p>Precio Unitario: ${item.price}</p>
        <p>Subtotal: ${ (item.price * item.quantity).toFixed(2) }</p>
      </div>
      <button onClick={() => removeItem(item.id)} className="cart-item-remove">
        &times;
      </button>
    </div>
  );
};

export default Cart;