import React, { useState, useEffect } from 'react';
import next from '../../Assets/Mentor/right_arrow.svg';
import previous from '../../Assets/Mentor/left_arrow.svg';
import { mentorsData } from './data';

const Mentors = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [cardsToShow, setCardsToShow] = useState(1);

  useEffect(() => {
    const updateCardsToShow = () => {
      if (window.innerWidth >= 1024) {
        setCardsToShow(3); // Show 3 cards on large screens
      } else if (window.innerWidth >= 768) {
        setCardsToShow(2); // Show 2 cards on medium screens
      } else {
        setCardsToShow(1); // Show 1 card on small screens
      }
    };

    updateCardsToShow();
    window.addEventListener('resize', updateCardsToShow);
    return () => window.removeEventListener('resize', updateCardsToShow);
  }, []);

  const nextMentor = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % mentorsData.length);
  };

  const prevMentor = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? mentorsData.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="container mx-auto py-10 px-6 md:px-16 lg:px-24 w-full overflow-hidden" id="mentors">
      <h1 className="text-3xl sm:text-4xl font-bold text-center mb-2">
        Meet Our <span className="underline underline-offset-4 font-light">Mentors</span>
      </h1>
      <p className="text-center text-gray-600 mb-8 max-w-xl mx-auto">
        Industry experts guiding students through <span className="text-blue-600 font-semibold">Generative AI</span> workshops and sessions.
      </p>

      {/* Navigation Buttons */}
      <div className="flex justify-end items-center mb-6">
        <button
          onClick={prevMentor}
          className="p-3 bg-gray-200 rounded-lg shadow-md hover:bg-gray-300 transition-all mr-2"
          aria-label="Previous Mentor"
        >
          <img src={previous} alt="Previous" className="w-6 h-6" />
        </button>
        <button
          onClick={nextMentor}
          className="p-3 bg-gray-200 rounded-lg shadow-md hover:bg-gray-300 transition-all"
          aria-label="Next Mentor"
        >
          <img src={next} alt="Next" className="w-6 h-6" />
        </button>
      </div>

      {/* Mentors Carousel */}
      <div className="overflow-hidden">
        <div
          className="flex gap-6 transition-transform duration-500 ease-in-out"
          style={{ transform: `translateX(-${(currentIndex * 100) / cardsToShow}%)` }}
        >
          {mentorsData.map((mentor, index) => (
            <div key={index} className="relative flex-shrink-0 w-full sm:w-1/2 md:w-1/3">
              <img
                src={mentor.image}
                alt={mentor.name}
                className="w-full h-auto rounded-lg shadow-lg object-cover mb-10"
              />
              <div className="absolute left-0 right-0 bottom-5 flex justify-center">
                <div className="bg-white px-5 py-3 shadow-md text-center rounded-lg w-4/5">
                  <h2 className="text-lg font-semibold text-gray-800">{mentor.name}</h2>
                  <p className="text-gray-500 text-sm">
                    {mentor.qualification} | {mentor.company}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Mentors;
