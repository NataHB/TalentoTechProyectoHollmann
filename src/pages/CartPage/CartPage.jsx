import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { CartContext } from '../../context/CartContext';
import CartItem from '../../components/Cart/Cart'; // Cambiado el nombre para evitar colisión

const CartPage = () => {
  const { cart, clearCart, totalPrice, totalItems } = useContext(CartContext);

  if (totalItems === 0) {
    return (
      <div style={{ textAlign: 'center', padding: '2rem' }}>
        <h1>Tu carrito está vacío</h1>
        <Link to="/" className="item-button">Volver a la tienda</Link>
      </div>
    );
  }

  return (
    <div style={{ padding: '2rem' }}>
      <h1>Tu Carrito</h1>
      {cart.map(item => (
        <CartItem key={item.id} item={item} />
      ))}
      <hr />
      <h2>Total: ${totalPrice.toFixed(2)}</h2>
      <button onClick={clearCart} className="add-to-cart-button" style={{ backgroundColor: '#dc3545' }}>
        Vaciar Carrito
      </button>
      {/* Botón para simular la compra */}
      <button className="add-to-cart-button" style={{ marginLeft: '1rem' }}>
        Finalizar Compra
      </button>
    </div>
  );
};

export default CartPage;