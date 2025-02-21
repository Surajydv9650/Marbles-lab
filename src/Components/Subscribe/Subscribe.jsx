import React from 'react';
import Banner from '../../Assets/banner.jpg';

const Subscribe = () => {
  return (
    <div
      data-aos="zoom-in"
      className="mb-20 bg-gray-100 dark:bg-gray-800"
      style={{
        backgroundImage: `url(${Banner})`,
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
    >
      <div className="container py-10 flex justify-center">
        <div className="space-y-6 max-w-xl w-full bg-black/50 p-6 rounded-lg text-white">
          <h1 className="text-2xl text-center sm:text-left sm:text-4xl font-semibold">
            Get Notified About the Upcoming Seminars
          </h1>
          <input
            data-aos="fade-up"
            type="text"
            placeholder="Enter your email"
            className="w-full p-3 bg-white text-black rounded-md"
          />
        </div>
      </div>
    </div>
  );
};

export default Subscribe;
