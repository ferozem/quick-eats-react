const TestimonialCard = ({ name, quote, avatar }) => {
  return (
    <div className="bg-white dark:bg-gray-800 shadow rounded-lg p-6 min-w-[260px] sm:min-w-[300px] md:min-w-[320px] lg:min-w-0">
      <div className="flex items-center mb-4">
        <img src={avatar} alt={name} className="w-12 h-12 rounded-full mr-4" />
        <h4 className="text-lg font-semibold text-gray-800 dark:text-white">
          {name}
        </h4>
      </div>
      <p className="text-gray-600 dark:text-gray-300 text-sm">“{quote}”</p>
    </div>
  );
};

export default TestimonialCard;
