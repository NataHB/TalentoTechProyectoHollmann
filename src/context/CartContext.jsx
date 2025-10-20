import { createContext, useState, useContext, useEffect } from 'react';
import { AuthContext } from './AuthContext';

export const CartContext = createContext();

const getAllCarts = () => {
  const cartsString = localStorage.getItem('userCarts');
  return cartsString ? JSON.parse(cartsString) : {};
};

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const { user } = useContext(AuthContext);

  useEffect(() => {
    if (user) {
      const allCarts = getAllCarts();
      const userCart = allCarts[user.email] || [];
      setCart(userCart);
    } else {
      setCart([]);
    }
  }, [user]);

  const saveCart = (currentCart) => {
    if (user) {
      const allCarts = getAllCarts();
      allCarts[user.email] = currentCart;
      localStorage.setItem('userCarts', JSON.stringify(allCarts));
    }
  };

  const addItem = (item, quantity) => {
    const newCart = [...cart];
    const itemIndex = newCart.findIndex(prod => prod.id === item.id);

    if (itemIndex > -1) {
      newCart[itemIndex].quantity += quantity;
    } else {
      newCart.push({ ...item, quantity });
    }
    setCart(newCart);
    saveCart(newCart);
  };

  const removeItem = (id) => {
    const newCart = cart.filter(prod => prod.id !== id);
    setCart(newCart);
    saveCart(newCart);
  };
    
  const clearCart = () => {
    setCart([]);
    saveCart([]);
  };

  const totalItems = cart.reduce((acc, item) => acc + item.quantity, 0);
  const totalPrice = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);

  return (
    <CartContext.Provider value={{ cart, addItem, removeItem, clearCart, totalItems, totalPrice }}>
      {children}
    </CartContext.Provider>
  );
};