import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';

const Navbar = () => {
  const { totalItems } = useCart();

  return (
    <nav className="flex justify-between items-center py-4 px-6 shadow-md bg-white dark:bg-gray-900">
      <Link to="/" className="text-2xl font-bold text-red-600">
        QuickEats
      </Link>
      <div className="flex items-center gap-4">
        <Link to="/browse" className="text-sm font-medium hover:text-red-500">
          Browse
        </Link>
        <Link
          to="/cart"
          aria-label="Cart"
          className="relative text-gray-700 hover:text-red-500 dark:text-gray-300"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M2.25 3h1.386a2.25 2.25 0 0 1 2.149 1.62l.347 1.158m0 0l1.273 4.243m-.99-5.401h13.83a.75.75 0 0 1 .733.92l-1.47 6.615a2.25 2.25 0 0 1-2.196 1.78H8.114m-3.981-8.315l-1.4 6.349a2.25 2.25 0 0 0 2.196 2.72h12.017M8.25 21a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Zm9 0a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Z"
            />
          </svg>
          {totalItems > 0 && (
            <span
              className="absolute -top-2 -right-2 flex h-5 w-5 items-center justify-center rounded-full bg-red-600 text-xs text-white"
            >
              {totalItems}
            </span>
          )}
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;