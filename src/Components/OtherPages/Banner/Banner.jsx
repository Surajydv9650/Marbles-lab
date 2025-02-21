import React from "react";
import { motion } from "framer-motion";
import { SlideUp } from "../../utility/animation";

const Banner = ({ image, title, subtitle, link, tag, reverse }) => {
  return (
    <div className="bg-[#f9f9f9] pb-14 pt-10 md:pt-16">
      <div className="container mx-auto px-5">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 items-center">
          {/* Banner Image Section */}
          <div
            className={`flex justify-center md:justify-start ${
              reverse && "md:order-last md:justify-end"
            }`}
          >
            <motion.img
              initial={{ opacity: 0, scale: 0.5 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ type: "spring", stiffness: 100, delay: 0.2 }}
              src={image}
              alt="Banner"
              className="w-full max-w-[400px] h-auto rounded-lg shadow-lg"
            />
          </div>
          {/* Banner Text Section */}
          <div className="flex flex-col justify-center text-center md:text-left space-y-4 lg:max-w-[500px]">
            <motion.p
              variants={SlideUp(0.5)}
              initial="hidden"
              whileInView={"visible"}
              className="text-sm text-orange-600 font-semibold uppercase tracking-wide"
            >
              {tag}
            </motion.p>
            <motion.p
              variants={SlideUp(0.7)}
              initial="hidden"
              whileInView={"visible"}
              className="text-xl lg:text-3xl font-bold capitalize text-gray-800 leading-snug"
            >
              {title}
            </motion.p>
            <motion.p
              variants={SlideUp(0.9)}
              initial="hidden"
              whileInView={"visible"}
              className="text-sm lg:text-base text-gray-600 leading-relaxed"
            >
              {subtitle}
            </motion.p>
            <motion.div
              variants={SlideUp(1.1)}
              initial="hidden"
              whileInView={"visible"}
              className="flex justify-center md:justify-start"
            >
              <a
                href={link}
                className="bg-orange-600 text-white px-6 py-2 rounded-md text-sm lg:text-base font-semibold shadow-md hover:bg-orange-700 transition-all duration-300"
              >
                Learn More
              </a>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
