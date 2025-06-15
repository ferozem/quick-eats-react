import { Outlet } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const Layout = () => {
  return (
    <div className="min-h-screen flex flex-col bg-white text-gray-900 dark:bg-gray-950 dark:text-white">
      {/* Navbar will go here */}
     <header className="sticky top-0 z-50">
  <Navbar />
</header>

      {/* Main content */}
      <main className="flex-1 px-4 py-6">
        <Outlet />
      </main>

      {/* Footer will go here */}
      <Footer />
    </div>
  );
};

export default Layout;