import React, { useState } from 'react';
import { useCart } from '../context/CartContext';

const Cart = () => {
  const { cart, totalItems, totalPrice, updateItemQuantity, removeItem } = useCart();
  const [address, setAddress] = useState('');
  const [instructions, setInstructions] = useState('');

  const handleCheckout = () => {
    // Placeholder action for proceeding to payment
    alert(`Proceeding to payment with address: ${address}\nInstructions: ${instructions}`);
  };

  return (
    <div className="min-h-screen px-4 py-8">
      <h1 className="text-3xl font-bold mb-4">Your Cart</h1>
      {cart.length === 0 ? (
        <p className="text-gray-600">Your cart is empty.</p>
      ) : (
        <div className="space-y-4">
          {cart.map((item) => (
            <div
              key={item.id}
              className="flex justify-between items-center border p-2 rounded"
            >
              <div>
                <p className="font-medium">{item.name}</p>
                <p className="text-sm text-gray-500">Price: ₹{item.price}</p>
                <p className="text-sm text-gray-500">
                  Subtotal: ₹{item.price * item.quantity}
                </p>
              </div>
              <div className="flex items-center gap-2">
                <button
                  aria-label="Decrease quantity"
                  onClick={() =>
                    updateItemQuantity(item.id, Math.max(1, item.quantity - 1))
                  }
                  className="px-2 py-1 border rounded"
                >
                  -
                </button>
                <span className="px-2">{item.quantity}</span>
                <button
                  aria-label="Increase quantity"
                  onClick={() => updateItemQuantity(item.id, item.quantity + 1)}
                  className="px-2 py-1 border rounded"
                >
                  +
                </button>
                <button
                  onClick={() => removeItem(item.id)}
                  className="text-red-600 ml-2"
                >
                  Remove
                </button>
              </div>
            </div>
          ))}
          <div className="font-bold text-lg">
            Total Price ({totalItems} items): ₹{totalPrice}
          </div>
          <div className="flex flex-col gap-4 pt-4">
            <label className="block">
              <span className="font-medium">Delivery Address</span>
              <textarea
                value={address}
                onChange={(e) => setAddress(e.target.value)}
                className="mt-1 w-full p-2 border rounded"
                required
              />
            </label>
            <label className="block">
              <span className="font-medium">Special Instructions (optional)</span>
              <textarea
                value={instructions}
                onChange={(e) => setInstructions(e.target.value)}
                className="mt-1 w-full p-2 border rounded"
              />
            </label>
            <button
              onClick={handleCheckout}
              disabled={!address.trim()}
              className={`mt-2 px-4 py-2 rounded text-white ${address.trim() ? 'bg-green-600 hover:bg-green-700' : 'bg-gray-400 cursor-not-allowed'}`}
            >
              Proceed to Payment
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;
