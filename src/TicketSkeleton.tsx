import React from "react"

const TicketSkeleton: React.FC = () => {
  return (
    <div className="space-y-4">
      {Array.from({ length: 5 }).map((_, index) => (
        <div
          key={index}
          className="flex items-center border rounded-lg shadow-md bg-white p-6 min-w-[560px] mx-auto mb-4 animate-pulse"
          style={{ height: "171px" }}
        >
          <div className="flex flex-col items-center w-1/4">
            <div className="w-20 h-12 bg-gray-300 rounded"></div>
            <div className="mt-4 w-24 h-8 bg-gray-300 rounded"></div>
          </div>

          <div className="flex flex-col justify-center w-1/2 px-4">
            <div className="w-16 h-6 bg-gray-300 rounded mb-2"></div>
            <div className="w-32 h-4 bg-gray-300 rounded mb-2"></div>
            <div className="w-24 h-4 bg-gray-300 rounded mb-2"></div>
            <div className="w-20 h-4 bg-gray-300 rounded mt-2"></div>
          </div>

          <div className="flex flex-col justify-center w-1/4 text-right">
            <div className="w-16 h-6 bg-gray-300 rounded mb-2"></div>
            <div className="w-32 h-4 bg-gray-300 rounded mb-2"></div>
            <div className="w-24 h-4 bg-gray-300 rounded"></div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default TicketSkeleton;
