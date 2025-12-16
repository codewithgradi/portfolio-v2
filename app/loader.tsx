
const PulsingDotLoader = () => {
  return (
    <div className="flex items-center justify-center">
      <div 
        className="
          w-4 h-4 rounded-full bg-blue-500 
          animate-pulse 
          duration-700 
          ease-in-out
        "
      ></div>
    </div>
  );
};

export default PulsingDotLoader;