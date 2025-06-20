const RestaurantSkeleton = () => {
  return (
    <div className="animate-pulse bg-white dark:bg-gray-800 rounded-lg shadow-md w-60 h-60 shrink-0 sm:w-64 md:w-full">
      <div className="h-40 bg-gray-300 dark:bg-gray-700"></div>
      <div className="p-4 space-y-2">
        <div className="h-4 bg-gray-300 dark:bg-gray-700 rounded w-3/4"></div>
        <div className="h-4 bg-gray-300 dark:bg-gray-700 rounded w-1/2"></div>
      </div>
    </div>
  );
};

export default RestaurantSkeleton;