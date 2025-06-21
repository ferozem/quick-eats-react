import { useParams } from 'react-router-dom';
import { useState } from "react";
import { useCart } from '../context/CartContext';
import { motion } from "framer-motion";
import { restaurants } from '../data/restaurants';


const Restaurant = () => {
  const { id } = useParams();
  const restaurant = restaurants.find((r) => r.id === Number(id));
  const [selectedCategory, setSelectedCategory] = useState("Starters");
  const { cart, addItem, totalPrice } = useCart();

  if (!restaurant) return <div className="p-6">Restaurant not found.</div>;

  return (
    <div className="min-h-screen">
      {/* Banner Image */}
      <div className="w-full h-64 md:h-80 overflow-hidden">
        <img
          src={restaurant.image}
          alt={restaurant.name}
          className="w-full h-full object-cover"
        />
      </div>

      {/* Overview Section */}
      <div className="p-6 max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold mb-2">{restaurant.name}</h1>
        <p className="text-gray-600 mb-1">Cuisine: {restaurant.cuisine}</p>
        <p className="text-gray-600 mb-1">Rating: ⭐ {restaurant.rating}</p>
        <p className="text-gray-600 mb-4">
          Avg Delivery Time: ⏱ {restaurant.time} mins
        </p>
        <p className="text-gray-700 text-sm">{restaurant.description}</p>
        <div className="flex flex-wrap gap-4 mt-8">
          {Object.keys(restaurant.menu).map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-4 py-2 rounded-md text-sm font-medium border ${
                selectedCategory === category
                  ? "bg-red-500 text-white"
                  : "bg-white text-gray-700"
              }`}
            >
              {category}
            </button>
          ))}
        </div>
        <motion.div
          key={selectedCategory}
          initial="hidden"
          animate="show"
          variants={{
            hidden: {},
            show: {
              transition: { staggerChildren: 0.1 },
            },
          }}
          className="pt-6 max-w-4xl mx-auto grid gap-4 sm:grid-cols-2"
        >
          {restaurant.menu[selectedCategory].map((dish, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
              className="p-4 border rounded-md shadow-sm bg-white hover:scale-[1.02] transition-transform duration-200 ease-in-out"
            >
              <h4 className="font-semibold text-gray-800">{dish.name}</h4>
              <p className="text-sm text-gray-500">₹ {dish.price}</p>
              <button
                onClick={() =>
                  addItem({
                    id: `${id}-${dish.name}`,
                    name: dish.name,
                    price: dish.price,
                  })
                }
                className="mt-2 text-sm px-3 py-1 bg-green-600 text-white rounded hover:bg-green-700"
              >
                Add to Cart
              </button>
            </motion.div>
          ))}
        </motion.div>
        <div className=" pt-10 max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold mb-4">Customer Reviews</h2>
          <div className="grid gap-4 sm:grid-cols-2">
            {restaurant.reviews?.map((review, idx) => (
              <div
                key={idx}
                className="border rounded-lg p-4 bg-white shadow-sm"
              >
                <div className="font-semibold text-gray-800 mb-1">
                  {review.name}
                </div>
                <div className="text-yellow-500 mb-2">
                  {"⭐".repeat(review.rating)}
                </div>
                <p className="text-gray-600 text-sm">{review.text}</p>
              </div>
            ))}
          </div>
        </div>
        {cart.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="fixed bottom-4 right-4 bg-white shadow-lg rounded-lg px-6 py-3 border"
          >
            <h3 className="font-semibold text-gray-800 mb-2">🛒 Cart</h3>
            <ul className="text-sm text-gray-700 space-y-1">
              {cart.map((item, i) => (
                <li key={i}>
                  {item.name} - ₹{item.price} x {item.quantity}
                </li>
              ))}
            </ul>
            <p className="mt-2 font-bold">Total: ₹{totalPrice}</p>
          </motion.div>
        )}
      </div>
    </div>
  );
};

export default Restaurant;