import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MainLayout from '../layouts/MainLayout';
import HomePage from '../pages/HomePage/ItemListContainer';
import CategoryPage from '../pages/CategoryPage/ItemListContainer';
import DetailPage from '../pages/DetailPage/ItemDetailContainer';
import CartPage from '../pages/CartPage/CartPage';
import LoginPage from '../pages/LoginPage/LoginPage';
import ProtectedRoute from './ProtectedRoute';

const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<MainLayout />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/category/:categoryId" element={<CategoryPage />} />
          <Route path="/product/:productId" element={<DetailPage />} />
          <Route path="/login" element={<LoginPage />} />

          <Route element={<ProtectedRoute />}>
            <Route path="/cart" element={<CartPage />} />
          </Route>

          <Route path="*" element={<h1>404 - Página no encontrada</h1>} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default AppRouter;