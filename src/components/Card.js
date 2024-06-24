import React, { useState, useEffect } from "react";

const Card = ({ title, description, image, tag }) => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

  const getTag = (tag) => {
    if (tag === "Ads")
      return (
        <span className="absolute top-2 right-2 bg-black text-xs text-white font-semibold py-1 px-2 rounded-md">
          Ads
        </span>
      );
    else if (tag === "Trending")
      return (
        <span className="absolute top-2 right-2 bg-green-400 text-xs text-gray-800 font-semibold py-1 px-2 rounded-md">
          Trending
        </span>
      );
    else if (tag === "Recommended")
      return (
        <span className="absolute top-2 right-2 bg-orange-600 text-xs text-gray-800 font-semibold py-1 px-2 rounded-md">
          Recommended
        </span>
      );
    else
      return (
        <div className="absolute top-2 right-2 text-[8px] bg-yellow-400 border-[1px] border-white text-gray-800 px-2 py-1 rounded-full font-semibold">
          ₹8,999/- Onwards
        </div>
      );
  };
  return (
    <>
      {isLoading ? (
        <div className="animate-pulse flex-1 w-80 h-96 rounded-lg bg-gray-300 inline-block ml-10"></div>
      ) : (
        <div className="max-md:m-4 ml-4 sm:w-1/2 md:w-1/3 lg:w-1/4 bg-white shadow-md p-3 inline-block">
          <div className="relative aspect-[4/3]">
            <img
              className="object-cover rounded-lg"
              src={image}
              alt="Trip Image "
            />
            {getTag(tag)}
            <div className="absolute w-full bottom-0 left-0 bg-gradient-to-t from-black to-[#00000033] p-4 text-white rounded-b-lg transition-all duration-300 group">
              <div className="transition-all duration-300">
                <h3 className="text-lg  m-4 font-bold transition-all duration-300">
                  {title} : {description}
                </h3>
                <div className="flex items-center justify-between text-sm m-3">
                  <div className="flex">
                    <svg
                      className="w-4 h-4 fill-current text-sky-400"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 1C5.925 1 1 5.925 1 12s4.925 11 11 11 11-4.925 11-11S18.075 1 12 1zm0 20c-4.963 0-9-4.037-9-9s4.037-9 9-9 9 4.037 9 9-4.037 9-9 9zm-.5-12V7h-1v6h6v-1h-5z" />
                    </svg>
                    <span className="ml-1 font-bold">2N/3D</span>
                  </div>
                  <div className="flex">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      class="w-4 h-4 fill-current text-sky-400"
                    >
                      <path d="M12 2C8.134 2 5 5.134 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.866-3.134-7-7-7zm0 9.5c-1.379 0-2.5-1.121-2.5-2.5s1.121-2.5 2.5-2.5 2.5 1.121 2.5 2.5-1.121 2.5-2.5 2.5z" />
                    </svg>
                    <span className="ml-1 font-bold">Delhi</span>
                  </div>
                </div>
                <div className="text-sm flex items-center m-3">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    class="w-4 h-4 fill-current text-sky-400"
                  >
                    <path d="M19 4h-1V2h-2v2H8V2H6v2H5C3.9 4 3.01 4.9 3.01 6L3 20c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 16H5V10h14v10zm0-12H5V6h14v2zm-7 6h-2v2h2v-2zm4 0h-2v2h2v-2zm-8 0H6v2h2v-2z" />
                  </svg>
                  <span className="ml-1 font-bold">30 May</span>
                </div>
                <div className="flex justify-evenly opacity-0 group-hover:opacity-100 transition-all duration-300">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 512 512"
                    class="w-5 h-5 fill-current cursor-pointer text-sky-400"
                  >
                    <path d="M503.7 189.8L327.7 37.9C312.3 24.5 288 35.3 288 56v80.1C127.4 137.9 0 170.1 0 322.3c0 61.4 39.6 122.3 83.3 154.1 13.7 9.9 33.1-2.5 28.1-18.6C66.1 312.8 132.9 274.3 288 272.1V360c0 20.7 24.3 31.5 39.7 18.2l176-152c11.1-9.6 11.1-26.8 0-36.3z" />
                  </svg>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-5 h-5 cursor-pointer text-sky-400"
                    viewBox="0 0 16 16"
                  >
                    <path
                      fill="currentColor"
                      d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314"
                    />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Card;
