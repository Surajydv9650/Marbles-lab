import React from 'react';
import { features } from '../Constants';

const Services = () => {
    return (
        <div className="relative mt-20 border-b border-gray-300 min-h-[800px] bg-white">
          <div className="text-center">
            <span className="bg-gray-200 text-black-600 h-6 text-sm font-large px-3 py-1 uppercase">
              Services
            </span>
            <h2 className="text-3xl sm:text-5xl lg:text-6xl mt-10 lg:mt-20 tracking-wide text-gray-800">
              Empower Your Learning{" "}
              <span className="bg-gradient-to-r from-orange-500 to-orange-700 text-transparent bg-clip-text">
                with Practical Experience
              </span>
            </h2>
          </div>

          <div className="flex flex-wrap mt-10 lg:mt-20">
            {features.map((feature, index) => (
              <div key={index} className="w-full sm:w-1/2 lg:w-1/3 p-4">
                <div className="flex">
                  {/* Icon Container */}
                  <div className="flex mx-6 h-12 w-30 p-2 justify-center items-center rounded-full">
                    <img src={feature.icon} alt={feature.text} className="h-6 w-6" />
                  </div>
                  
                  {/* Content Section */}
                  <div>
                    <h5 className="mt-1 mb-4 text-xl font-semibold text-gray-900">
                      {feature.text}
                    </h5>
                    <p className="text-md p-2 text-gray-700 leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
    );
};

export default Services;
