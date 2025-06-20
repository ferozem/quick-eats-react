import React from 'react';
import { useCart } from '../context/CartContext';

const Cart = () => {
  const { cart, totalItems, totalPrice, updateItemQuantity, removeItem } = useCart();

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
                <input
                  type="number"
                  min="1"
                  value={item.quantity}
                  onChange={(e) =>
                    updateItemQuantity(item.id, parseInt(e.target.value, 10))
                  }
                  className="w-16 border rounded p-1"
                />
                <button
                  onClick={() => removeItem(item.id)}
                  className="text-red-600"
                >
                  Remove
                </button>
              </div>
            </div>
          ))}
          <div className="font-bold text-lg">
            Total Price ({totalItems} items): ₹{totalPrice}
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;
