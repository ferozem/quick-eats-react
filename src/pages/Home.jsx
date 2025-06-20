import CuisineChips from "../components/CuisineChips";
import RestaurantCard from "../components/RestaurantCard";
import PromoBanner from "../components/PromoBanner";
import TestimonialCard from "../components/TestimonialCard";
import { useState, useEffect } from "react";
import RestaurantSkeleton from "../components/RestaurantSkeleton";
import { motion } from "framer-motion";

const testimonials = [
  {
    name: "Aisha K.",
    quote:
      "Super quick delivery! I was surprised how hot and fresh the food was.",
    avatar: "https://randomuser.me/api/portraits/women/65.jpg",
  },
  {
    name: "Ravi T.",
    quote: "Easy to use, fast, and great restaurant selection. My go-to app!",
    avatar: "https://randomuser.me/api/portraits/men/32.jpg",
  },
  {
    name: "Fatima S.",
    quote: "Love the offers and the simple interface. 10/10 experience!",
    avatar: "https://randomuser.me/api/portraits/women/45.jpg",
  },
];

const promoBanners = [
  {
    title: "Flat 50% OFF!",
    code: "QUICKEATS50",
    bg: "bg-gradient-to-r from-red-500 to-orange-400",
  },
  {
    title: "Free Delivery",
    code: "FREEDEL",
    bg: "bg-gradient-to-r from-green-500 to-teal-400",
  },
  {
    title: "20% Cashback",
    code: "CASHBACK20",
    bg: "bg-gradient-to-r from-indigo-500 to-purple-500",
  },
];


const Home = () => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [featuredRestaurants, setFeaturedRestaurants] = useState([]);

  useEffect(() => {
    // Simulated fetch with try/catch
    const fetchData = async () => {
      try {
        setLoading(true);
        // Replace with real fetch if needed
        const res = await fetch("https://dummyjson.com/posts");
        if (!res.ok) throw new Error("Failed to fetch");
        await res.json();

        // Simulate restaurant objects
        setFeaturedRestaurants([
          {
            name: "Spicy Biryani",
            rating: 4.5,
            time: 30,
            image: "https://source.unsplash.com/400x300/?biryani",
          },
          {
            name: "Chow Mein Express",
            rating: 4.2,
            time: 25,
            image: "https://source.unsplash.com/400x300/?noodles",
          },
          {
            name: "Pizza Paradise",
            rating: 4.7,
            time: 20,
            image: "https://source.unsplash.com/400x300/?pizza",
          },
        ]);
        setError(null);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);
  return (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
      >
        <section className="min-h-[80vh] flex flex-col justify-center items-center px-4 text-center bg-gray-50 dark:bg-gray-950">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold leading-tight text-red-600 mb-4">
            Delight Delivered Fast 🍔
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-300 mb-6 max-w-xl">
            Discover delicious food from top restaurants near you. Fast, fresh,
            and right at your doorstep.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 w-full max-w-md">
            <input
              type="text"
              placeholder="Enter your location"
              className="flex-1 px-4 py-3 rounded-md border border-gray-300 dark:border-gray-700 focus:outline-none focus:ring-2 focus:ring-red-500"
            />
            <button className="bg-red-600 text-white px-6 py-3 rounded-md hover:bg-red-700 transition-all">
              Find Restaurants
            </button>
          </div>
        </section>
        <CuisineChips />
        <section className="mt-8 px-4">
          <h2 className="text-2xl font-bold mb-4">Featured Restaurants</h2>
          <div className="bg-white flex gap-4 overflow-x-auto pb-2 md:grid md:grid-cols-3 md:gap-6 md:overflow-visible">
            {error ? (
              <div className="text-red-500 font-medium">⚠️ {error}</div>
            ) : loading ? (
              [...Array(3)].map((_, i) => <RestaurantSkeleton key={i} />)
            ) : (
              featuredRestaurants.map((rest, idx) => (
                <RestaurantCard key={idx} {...rest} />
              ))
            )}
          </div>
        </section>
        <section className="mt-10 px-4">
          <h2 className="text-2xl font-bold mb-4">Special Offers</h2>
          <motion.div
              initial="hidden"
              animate="show"
              variants={{
                hidden: {},
                show: {
                  transition: { staggerChildren: 0.2 },
                },
              }}
            >
          <div className="flex gap-4 overflow-x-auto pb-2 md:grid md:grid-cols-3 md:gap-6 md:overflow-visible">
            
              {promoBanners.map((item, idx) => (
                <motion.div
                  key={idx}
                  variants={{
                    hidden: { opacity: 0, y: 10 },
                    show: { opacity: 1, y: 0 },
                  }}
                >
                  <PromoBanner key={idx} {...item} />
                </motion.div>
              ))}
          </div>
            </motion.div>
        </section>
        <section className="mt-10 px-4">
          <h2 className="text-2xl font-bold mb-4">What Our Users Say</h2>
          <div className="flex gap-4 overflow-x-auto pb-2 md:grid md:grid-cols-3 md:gap-6 md:overflow-visible">
            {testimonials.map((item, idx) => (
              <TestimonialCard key={idx} {...item} />
            ))}
          </div>
        </section>
        <section className="mt-12 px-4 text-center">
          <h2 className="text-2xl font-bold mb-2">Get the App</h2>
          <p className="text-gray-600 dark:text-gray-300 mb-4">
            Order food on the go with our mobile app.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4 items-center">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg"
              alt="Get it on Google Play"
              className="h-10 sm:h-12"
            />
            <img
              src="https://developer.apple.com/assets/elements/badges/download-on-the-app-store.svg"
              alt="Download on the App Store"
              className="h-10 sm:h-12"
            />
          </div>
        </section>
      </motion.div>
    </>
  );
};

export default Home;
