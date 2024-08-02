import React from "react";

const RevenueCard = ({ title, orderCount, amount }) => {
  return (
    <div className="bg-white rounded shadow-sm p-6 hover:bg-red-200">
      <div className="text-gray-700 flex">
        <div className=" pr-2">{title}</div>
        <div className="flex justify-center flex-col">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="size-4"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m11.25 11.25.041-.02a.75.75 0 0 1 1.063.852l-.708 2.836a.75.75 0 0 0 1.063.853l.041-.021M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9-3.75h.008v.008H12V8.25Z"
            />
          </svg>
        </div>
      </div>

      <div className="flex justify-between pt-2">
        <div className="text-2xl font-semibold">₹{amount}</div>
        {orderCount ? (
          <div className="flex cursor-pointer font-medium text-blue-700 underline flex-col justify-center">
            <div className="flex justify-center">
              <div>{orderCount} order(s) </div>
              <div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="size-4"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="m8.25 4.5 7.5 7.5-7.5 7.5"
                  />
                </svg>
              </div>
            </div>
          </div>
        ) : null}
      </div>
    </div>
  );
};

export default RevenueCard;
