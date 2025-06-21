import { cuisines } from "../data/cuisines";

const CuisineChips = () => {
  return (
    <div className="overflow-x-auto w-full mt-4 px-4">
      <div className="flex gap-2 sm:gap-4 overflow-x-auto whitespace-nowrap px-4 pb-2">
        {cuisines.map((item, index) => (
          <button
            key={index}
            className="px-4 py-2 bg-gray-200 dark:bg-gray-800 text-gray-700 dark:text-gray-200 rounded-full hover:bg-red-600 hover:text-white transition-all"
          >
            {item}
          </button>
        ))}
      </div>
    </div>
  );
};

export default CuisineChips;
