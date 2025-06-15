import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="flex justify-between items-center py-4 px-6 shadow-md bg-white dark:bg-gray-900">
      <Link to="/" className="text-2xl font-bold text-red-600">QuickEats</Link>
      <div className="flex items-center gap-4">
        <Link to="/about" className="text-sm hover:underline">About</Link>
        <Link to="/blog" className="text-sm hover:underline">Blog</Link>
        <Link to="/cart" className="text-sm hover:underline">Cart</Link>
      </div>
    </nav>
  );
};

export default Navbar;