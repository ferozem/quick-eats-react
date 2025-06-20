import React from 'react';
import { useAppContext } from '../context/AppContext';

const Cart = () => {
  const { cartItems } = useAppContext();

  const total = cartItems.reduce(
    (sum, item) => sum + item.price * (item.quantity || 1),
    0
  );

  return (
    <div className="min-h-screen px-4 py-8">
      <h1 className="text-3xl font-bold mb-4">Your Cart</h1>
      {cartItems.length === 0 ? (
        <p className="text-gray-600">Your cart is empty.</p>
      ) : (
        <>
          <div className="overflow-x-auto">
            <table className="min-w-full text-left text-sm">
              <thead>
                <tr className="border-b">
                  <th className="py-2 font-medium">Item</th>
                  <th className="py-2 font-medium">Qty</th>
                  <th className="py-2 font-medium">Price</th>
                  <th className="py-2 font-medium">Subtotal</th>
                </tr>
              </thead>
              <tbody>
                {cartItems.map((item, idx) => (
                  <tr key={idx} className="border-b">
                    <td className="py-2">{item.name}</td>
                    <td className="py-2 text-center">{item.quantity || 1}</td>
                    <td className="py-2">₹{item.price}</td>
                    <td className="py-2">
                      ₹{item.price * (item.quantity || 1)}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="mt-4 text-lg font-semibold">Total: ₹{total}</p>
        </>
      )}
    </div>
  );
};

export default Cart;
