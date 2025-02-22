import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import aboutImage from '../../Assets/aboutus/seminar.jpg'
import { motion } from "framer-motion";
import { GrUserExpert } from "react-icons/gr";
import { FaChalkboardTeacher } from "react-icons/fa";
import { GiOpenBook, GiNetworkBars } from "react-icons/gi";

const WhyChooseData = [
  { id: 1, title: "Expert-Led Sessions", desc: "Our industry professionals bring real-world insights to students.", icon: <GrUserExpert />, bgColor: "#1e1e1e" },
  { id: 2, title: "Interactive Workshops", desc: "We offer hands-on learning experiences to bridge academic gaps.", icon: <FaChalkboardTeacher />, bgColor: "#2b2b2b" },
  { id: 3, title: "Cutting-Edge Curriculum", desc: "Stay ahead with the latest AI trends and industry standards.", icon: <GiOpenBook />, bgColor: "#333333" },
  { id: 4, title: "Strong Mentor Network", desc: "Connect with professionals who guide you toward success.", icon: <GiNetworkBars />, bgColor: "#444444" },
];

const About = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <div className="bg-gray-100 text-gray-900 dark:text-white p-6 sm:p-12">
      <section>
      <div id="about" className="container mx-auto px-6 py-16 lg:py-24">
      <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
        {/* Left: Image Section */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="lg:w-1/2 w-full"
        >
          <img
            src={aboutImage}
            alt="About MarbleSlab"
            className="rounded-2xl shadow-lg w-full h-auto object-cover"
          />
        </motion.div>

        {/* Right: Content Section */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="lg:w-1/2 w-full text-center lg:text-left"
        >
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900">
            About <span className="text-blue-600">MarbleSlab</span>
          </h2>
          <p className="text-gray-600 mt-4 text-lg leading-relaxed">
            MarbleSlab is an innovative organization dedicated to empowering
            college students through insightful **Generative AI** workshops and
            sessions. We collaborate with different colleges to foster a deeper
            understanding of cutting-edge AI technologies.
          </p>
          <p className="text-gray-600 mt-4 text-lg leading-relaxed">
            Our expert mentors bring industry experience, making learning more
            engaging and practical. Join us in shaping the future of AI-driven
            creativity!
          </p>
          
          {/* Call to Action Buttons */}
          <div className="mt-6 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="#workshops"
              className="px-6 py-3 bg-blue-600 text-white rounded-lg shadow-md hover:bg-blue-700 transition"
            >
              Join a Workshop
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="#contact"
              className="px-6 py-3 bg-gray-200 text-gray-900 rounded-lg shadow-md hover:bg-gray-300 transition"
            >
              Contact Us
            </motion.a>
          </div>
        </motion.div>
      </div>
    </div>


      </section>
      {/* Mission Statement */}
      <section className="text-center mb-12" data-aos="fade-up">
        <h2 className="text-4xl font-bold bg-gradient-to-r from-black via-gray-700 to-black text-transparent bg-clip-text">
          Our Mission
        </h2>
        <p className="text-lg mt-4 max-w-3xl mx-auto">
          Empowering students through expert-led seminars and workshops, bridging the gap between academia and the industry.
        </p>
      </section>

      {/* Who We Are */}
      <section className="mb-12 text-center" data-aos="fade-up">
        <h2 className="text-4xl font-bold bg-gradient-to-r from-black via-gray-700 to-black text-transparent bg-clip-text">
          Who We Are
        </h2>
        <p className="mt-4 text-lg max-w-3xl mx-auto">
          MarbleSlab.ai is a team of industry professionals, educators, and mentors dedicated to preparing students for the future.
        </p>
      </section>

      {/* Our Vision & Goals */}
      <section className="mb-12">
        <h2 className="text-4xl font-bold text-center bg-gradient-to-r from-black via-gray-700 to-black text-transparent bg-clip-text" data-aos="fade-up">
          Our Vision & Goals
        </h2>
        <div className="grid md:grid-cols-3 gap-6 mt-6 max-w-5xl mx-auto">
          {["Bridging Academia & Industry", "Enhancing Practical Skills", "Building Future Leaders"].map((title, index) => (
            <div key={index} className="p-6 bg-gray-800 text-white rounded-xl shadow-lg text-center" data-aos="fade-up" data-aos-delay={`${index * 200}`}>
              <h3 className="text-xl font-semibold">{title}</h3>
            </div>
          ))}
        </div>
      </section>

      {/* What We Do */}
      <section className="mb-12">
        <h2 className="text-4xl font-bold text-center bg-gradient-to-r from-black via-gray-700 to-black text-transparent bg-clip-text" data-aos="fade-up">
          What We Do
        </h2>
        <p className="text-lg text-center mt-4 max-w-3xl mx-auto" data-aos="fade-up">
          We collaborate with colleges to offer seminars, workshops, and mentorship programs tailored to industry needs.
        </p>
      </section>

      {/* Why Choose Us */}
      <section className="bg-gray-200 dark:bg-gray-800 py-16">
        <div className="text-center max-w-lg mx-auto mb-8" data-aos="fade-up">
          <h2 className="text-4xl font-bold bg-gradient-to-r from-black via-gray-700 to-black text-transparent bg-clip-text">
            Why Choose Us?
          </h2>
          <p className="mt-2 text-lg">Experience the best learning with our structured programs.</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {WhyChooseData.map((item) => (
            <div key={item.id} className="p-6 bg-white dark:bg-gray-900 rounded-xl shadow-lg text-center" data-aos="zoom-in">
              <div style={{ backgroundColor: item.bgColor }} className="w-14 h-14 rounded-lg flex justify-center items-center text-white mx-auto text-2xl">
                {item.icon}
              </div>
              <p className="font-semibold mt-4">{item.title}</p>
              <p className="text-sm text-gray-600 dark:text-gray-300 mt-2">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Call to Action */}
      <section className="text-center mt-16" data-aos="fade-up">
        <h2 className="text-4xl font-bold bg-gradient-to-r from-black via-gray-700 to-black text-transparent bg-clip-text">
          Bring Our Workshops to Your College
        </h2>
        <p className="text-lg mt-4">Partner with us for insightful, hands-on learning experiences.</p>
        <button className="mt-6 px-6 py-3 text-lg font-semibold bg-gray-900 hover:bg-gray-700 text-white rounded-full shadow-lg transition-all duration-200">
          Contact Us
        </button>
      </section>
    </div>
  );
};

export default About;
