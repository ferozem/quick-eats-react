const PromoBanner = ({ title, code, bg }) => {
  return (
    <div
      className={`min-w-[280px] md:min-w-0 px-4 py-6 rounded-lg text-white font-semibold ${bg}`}
    >
      <h3 className="text-xl mb-2">{title}</h3>
      <p className="text-sm">
        Use Code: <span className="font-bold">{code}</span>
      </p>
    </div>
  );
};

export default PromoBanner;
