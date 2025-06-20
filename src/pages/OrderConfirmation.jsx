import { Link, useLocation } from 'react-router-dom';

const OrderConfirmation = () => {
  const { state } = useLocation();
  const address = state?.address || '';
  const totalPrice = state?.totalPrice || 0;

  return (
    <div className="min-h-screen flex flex-col items-center justify-center text-center px-4 py-8">
      <h1 className="text-3xl font-bold mb-4">Thank you for your order!</h1>
      <p className="text-gray-700 mb-2">Your food will be delivered to:</p>
      <p className="font-medium mb-4 whitespace-pre-line">{address}</p>
      <p className="text-lg font-semibold mb-6">Total Paid: ₹{totalPrice}</p>
      <Link
        to="/"
        className="px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700"
      >
        Return Home
      </Link>
    </div>
  );
};

export default OrderConfirmation;
