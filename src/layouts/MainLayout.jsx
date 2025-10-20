import { Outlet } from 'react-router-dom';
import NavBar from '../components/NavBar/NavBar';

const MainLayout = () => {
  return (
    <div>
      <NavBar />
      <main className="container">
        <Outlet />
      </main>
    </div>
  );
};

export default MainLayout;