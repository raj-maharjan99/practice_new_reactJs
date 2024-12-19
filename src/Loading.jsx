import React from "react";

const Loading = () => {
  return (
    <div className="flex items-center justify-center w-full h-screen bg-gray-100">
      <div className="animate-spin rounded-full h-24 w-24 border-t-4 border-gray-500 border-solid"></div>
    </div>
  );
};

export default Loading;
