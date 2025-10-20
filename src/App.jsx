import { CartProvider } from './context/CartContext';
import AppRouter from './router/AppRouter';

function App() {
  // Aquí se envuelve toda la aplicación con los contextos necesarios
  // y el sistema de rutas.
  return (
    <CartProvider>
      <AppRouter />
    </CartProvider>
  );
}

export default App;