import { createContext, useState } from 'react';

// 1. Crear el contexto
export const CartContext = createContext();

// 2. Crear el proveedor del contexto
export const CartProvider = ({ children }) => {
  // Estado para el carrito. Cumple Requerimiento #1.2 (useState)
  const [cart, setCart] = useState([]);

  // Función para agregar un item al carrito. Cumple Requerimiento #1.3 (evento de clic)
  const addItem = (item, quantity) => {
    if (isInCart(item.id)) {
      // Si ya está, actualizamos la cantidad
      const updatedCart = cart.map((prod) => {
        if (prod.id === item.id) {
          return { ...prod, quantity: prod.quantity + quantity };
        }
        return prod;
      });
      setCart(updatedCart);
    } else {
      // Si no está, lo agregamos
      setCart([...cart, { ...item, quantity }]);
    }
  };

  // Función para saber si un item ya está en el carrito
  const isInCart = (id) => {
    return cart.some((prod) => prod.id === id);
  };

  // Función para remover un item
  const removeItem = (id) => {
    setCart(cart.filter((prod) => prod.id !== id));
  };
    
  // Función para limpiar el carrito
  const clearCart = () => {
    setCart([]);
  };

  // Calculamos el total de items para el widget del Navbar
  const totalItems = cart.reduce((acc, item) => acc + item.quantity, 0);

  // Calculamos el precio total
  const totalPrice = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);


  return (
    <CartContext.Provider value={{ cart, addItem, removeItem, clearCart, totalItems, totalPrice }}>
      {children}
    </CartContext.Provider>
  );
};