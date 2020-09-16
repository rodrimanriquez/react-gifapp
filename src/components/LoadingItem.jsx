import React from "react";

const LoadingItem = () => {
  return (
    <div className="border border-gray-300 shadow rounded-lg max-w-sm w-full mx-auto col-span-1">
      <div className="animate-pulse space-x-4 text-center">
        <div className="img-full bg-gray-400 h-64 w-full rounded-t-lg"></div>  
        <div className="h-4 bg-gray-400 rounded mt-5 m-5 w-3/4"></div>
      </div>
    </div>
  );
};

export default LoadingItem;
