import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center text-center px-4 py-8">
      <h1 className="text-3xl font-bold mb-4">404 - Page Not Found</h1>
      <p className="text-gray-700 mb-6">Sorry, the page you are looking for doesn't exist.</p>
      <Link to="/" className="px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700">
        Go to Home
      </Link>
    </div>
  );
};

export default NotFound;
