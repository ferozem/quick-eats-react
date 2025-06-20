import RestaurantCard from '../components/RestaurantCard';
import { useState } from "react";
import { Link } from 'react-router-dom';

const restaurants = [
  {
    id:1,
    name: 'Spicy Biryani',
    cuisine: 'Indian',
    rating: 4.5,
    price: '$$',
    time: 30,
    image: 'https://source.unsplash.com/400x300/?biryani'
  },
  {id:2,
    name: 'Pizza Paradise',
    cuisine: 'Italian',
    rating: 4.3,
    price: '$$$',
    time: 25,
    image: 'https://source.unsplash.com/400x300/?pizza'
  },
 {
    id:1,
    name: 'Spicy Biryani',
    cuisine: 'Indian',
    rating: 4.5,
    price: '$$',
    time: 30,
    image: 'https://source.unsplash.com/400x300/?biryani'
  },
  {id:2,
    name: 'Pizza Paradise',
    cuisine: 'Italian',
    rating: 4.3,
    price: '$$$',
    time: 25,
    image: 'https://source.unsplash.com/400x300/?pizza'
  },{
    id:1,
    name: 'Spicy Biryani',
    cuisine: 'Indian',
    rating: 4.5,
    price: '$$',
    time: 30,
    image: 'https://source.unsplash.com/400x300/?biryani'
  },
  {id:2,
    name: 'Pizza Paradise',
    cuisine: 'Italian',
    rating: 4.3,
    price: '$$$',
    time: 25,
    image: 'https://source.unsplash.com/400x300/?pizza'
  },{
    id:1,
    name: 'Spicy Biryani',
    cuisine: 'Indian',
    rating: 4.5,
    price: '$$',
    time: 30,
    image: 'https://source.unsplash.com/400x300/?biryani'
  },
  {id:2,
    name: 'Pizza Paradise',
    cuisine: 'Italian',
    rating: 4.3,
    price: '$$$',
    time: 25,
    image: 'https://source.unsplash.com/400x300/?pizza'
  }
];

const Browse = () => {
  const [selectedCuisine, setSelectedCuisine] = useState('All');
const [minRating, setMinRating] = useState(0);
  const [selectedPrice, setSelectedPrice] = useState('All');
  
  const [searchQuery, setSearchQuery] = useState('');
  const [sortBy, setSortBy] = useState('');
  const [visibleCount, setVisibleCount] = useState(8);

const filteredRestaurants = restaurants.filter(r =>
  (selectedCuisine === 'All' || r.cuisine === selectedCuisine) &&
  r.rating >= minRating &&
  (selectedPrice === 'All' || r.price === selectedPrice) &&
  r.name.toLowerCase().includes(searchQuery.toLowerCase())
  );
  const sortedRestaurants = [...filteredRestaurants].sort((a, b) => {
  if (sortBy === 'rating') return b.rating - a.rating;
  if (sortBy === 'time') return a.time - b.time;
  return 0;
});
  return (
    <div className="min-h-screen px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Browse Restaurants</h1>
      <input
  type="text"
  placeholder="Search restaurants..."
  value={searchQuery}
  onChange={e => setSearchQuery(e.target.value)}
  className="mb-4 w-full max-w-md p-2 border border-gray-300 rounded"
      />
      <select
  value={sortBy}
  onChange={e => setSortBy(e.target.value)}
  className="mb-4 w-full max-w-xs p-2 border rounded sm:w-auto"
>
  <option value="">Sort By</option>
  <option value="rating">Rating (High to Low)</option>
  <option value="time">Delivery Time (Fastest First)</option>
</select>
      <div className="mb-6 flex flex-wrap gap-4">
  <select value={selectedCuisine} onChange={e => setSelectedCuisine(e.target.value)} className="p-2 border rounded w-full sm:w-auto">
    <option value="All">All Cuisines</option>
    <option value="Indian">Indian</option>
    <option value="Chinese">Chinese</option>
    <option value="Italian">Italian</option>
  </select>
  <select value={minRating} onChange={e => setMinRating(Number(e.target.value))} className="p-2 border rounded w-full sm:w-auto">
    <option value="0">All Ratings</option>
    <option value="4">4+</option>
    <option value="4.5">4.5+</option>
  </select>
  <select value={selectedPrice} onChange={e => setSelectedPrice(e.target.value)} className="p-2 border rounded w-full sm:w-auto">
    <option value="All">All Prices</option>
    <option value="$">$</option>
    <option value="$$">$$</option>
    <option value="$$$">$$$</option>
  </select>
</div>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {sortedRestaurants.slice(0, visibleCount).map((rest, idx) => (
        <Link key={rest.id} to={`/restaurant/${rest.id}`}>
  <RestaurantCard key={idx} {...rest} />
        </Link>
))}
      </div>
      {visibleCount < sortedRestaurants.length && (
  <div className="text-center mt-6">
    <button
      onClick={() => setVisibleCount(prev => prev + 4)}
      className="bg-tomato text-red-600 px-4 py-2 rounded shadow hover:bg-red-600 hover:text-white"
    >
      Load More
    </button>
  </div>
)}
    </div>
  );
};

export default Browse;