import { Outlet } from 'react-router-dom';
import NavBar from '../components/NavBar/NavBar';

const MainLayout = () => {
  return (
    <div>
      {/* El Navbar es fijo para todas las páginas dentro de este layout */}
      <NavBar />
      <main className="container">
        {/* Outlet renderiza el componente de la ruta actual (HomePage, DetailPage, etc.) */}
        <Outlet />
      </main>
      {/* Podrías agregar un Footer aquí si quisieras */}
    </div>
  );
};

export default MainLayout;