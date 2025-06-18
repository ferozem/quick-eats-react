const RestaurantCard = ({ image, name, rating, time }) => {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden w-64 shrink-0">
      <img src={image} alt={name} className="h-40 w-full object-cover" />
      <div className="p-4">
        <h3 className="text-lg font-semibold text-gray-800 dark:text-white">{name}</h3>
        <div className="text-sm text-gray-600 dark:text-gray-300">
          ⭐ {rating} · ⏱️ {time} mins
        </div>
      </div>
    </div>
  );
};

export default RestaurantCard;