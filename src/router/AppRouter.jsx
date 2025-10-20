import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MainLayout from '../layouts/MainLayout';
import HomePage from '../pages/HomePage/ItemListContainer';
import CategoryPage from '../pages/CategoryPage/ItemListContainer';
import DetailPage from '../pages/DetailPage/ItemDetailContainer';
import CartPage from '../pages/CartPage/CartPage';

// Cumple Requerimiento #3.1: Implementación de rutas
const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        {/* Usamos un Layout para las rutas que comparten NavBar y Footer */}
        <Route element={<MainLayout />}>
          {/* Ruta principal con la lista de todos los productos */}
          <Route path="/" element={<HomePage />} />
          
          {/* Ruta dinámica para categorías. Cumple Req #4.1 */}
          <Route path="/category/:categoryId" element={<CategoryPage />} />
          
          {/* Ruta dinámica para el detalle de un producto. Cumple Req #4.1 */}
          <Route path="/product/:productId" element={<DetailPage />} />
          
          {/* Ruta para el carrito */}
          <Route path="/cart" element={<CartPage />} />

          {/* Ruta para cualquier otra URL no definida */}
          <Route path="*" element={<h1>404 - Página no encontrada</h1>} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default AppRouter;