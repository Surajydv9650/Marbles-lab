import React, { useEffect } from "react";
import "../Hero/Hero.css";
import Image1 from "../../Assets/hero/front.png"
import Image2 from "../../Assets/hero/2.png";
import Image3 from "../../Assets/hero/3.png";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { motion } from "framer-motion";

const ImageList = [
  {
    id: 1,
    img: Image1,
    title: "AI-Powered Creativity",
    description: "Unlocks new artistic possibilities with machine learning",
  },
  {
    id: 2,
    img: Image2,
    title: "Smart Automation",
    description: "Enhances efficiency through intelligent decision-making",
  },
  {
    id: 3,
    img: Image3,
    title: "Future of Innovation",
    description: "Drives groundbreaking advancements across industries",
  },
];

const Hero = () => {
  var settings = {
    dots: true,
    arrows: false,
    infinite: true,
    speed: 800,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    cssEase: "ease-in-out",
    pauseOnHover: false,
    pauseOnFocus: false,
  };

  return (
    <div className="relative overflow-hidden min-h-[550px] sm:min-h-[650px] bg-gray-100 flex justify-center items-center dark:bg-gray-950 dark:text-white duration-200">
      {/* Background Pattern */}
      <motion.div
        className="absolute h-[700px] w-[700px] bg-[#fea928] opacity-40 top-0 right-0 rounded-3xl rotate-45 z-0"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 0.4, scale: 1 }}
        transition={{ duration: 1.2, ease: "easeInOut" }}
      ></motion.div>

      {/* Hero Section */}
      <div className="relative z-10 w-full max-w-7xl px-6 sm:px-12">
        <Slider {...settings}>
          {ImageList.map((data) => (
            <div key={data.id}>
              <div className="grid grid-cols-1 sm:grid-cols-2 items-center gap-8">
                {/* Text Content */}
                <motion.div
                  className="flex flex-col justify-center items-center sm:items-start gap-4 text-center sm:text-left"
                  initial={{ opacity: 0, x: -50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 1, ease: "easeOut" }}
                >
                  <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold">
                    {data.title}
                  </h1>
                  <p className="text-base sm:text-lg">{data.description}</p>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="bg-gradient-to-r from-orange-500 to-yellow-400 text-white py-2 px-6 rounded-full"
                  >
                    Know More!
                  </motion.button>
                </motion.div>

                {/* Image Section */}
                <motion.div
                  className="flex justify-center"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 1, ease: "easeOut" }}
                >
                  <img
                    src={data.img}
                    alt={data.title}
                    className="w-full max-w-[250px] sm:max-w-[400px] h-auto object-contain"
                  />
                </motion.div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Hero;
