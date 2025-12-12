import { AuthProvider } from './context/AuthContext';
import { CartProvider } from './context/CartContext';
import { ProductProvider } from './context/ProductContext'; // 1. Importar
import { ToastContainer } from 'react-toastify'; // 2. Importar Toastify
import 'react-toastify/dist/ReactToastify.css'; // 3. Importar CSS de Toastify
import AppRouter from './router/AppRouter';

function App() {
  return (
    <AuthProvider>
      <CartProvider>
        <ProductProvider>
          <AppRouter />
          <ToastContainer position="bottom-right" /> {/* Contenedor de notificaciones */}
        </ProductProvider>
      </CartProvider>
    </AuthProvider>
  );
}

export default App;