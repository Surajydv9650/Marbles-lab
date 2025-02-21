import React, { useEffect } from "react";
import { motion } from "framer-motion";
import AOS from "aos";
import "aos/dist/aos.css";
import {
  FaChalkboardTeacher,
  FaLaptopCode,
  FaUsers,
  FaProjectDiagram,
  FaChartLine,
} from "react-icons/fa";

const content = [
  {
    id: 1,
    icon: <FaChalkboardTeacher className="text-4xl text-orange-600" />,
    title: "Engaging Workshops",
    description:
      "Hands-on workshops to bridge the gap between theory and real-world applications.",
  },
  {
    id: 2,
    icon: <FaUsers className="text-4xl text-blue-600" />,
    title: "Cross-Campus Seminars",
    description:
      "Expert-led seminars in multiple colleges covering AI innovations and future tech trends.",
  },
  {
    id: 3,
    icon: <FaLaptopCode className="text-4xl text-green-600" />,
    title: "Interactive Learning Modules",
    description:
      "Live coding, case studies, and simulations to deepen AI understanding.",
  },
  {
    id: 4,
    icon: <FaProjectDiagram className="text-4xl text-purple-600" />,
    title: "Collaborative Projects",
    description:
      "Work with students from different institutions on AI-driven real-world projects.",
  },
  {
    id: 5,
    icon: <FaChartLine className="text-4xl text-red-600" />,
    title: "Insightful Analytics & Feedback",
    description:
      "Personalized feedback to track progress and refine learning strategies.",
  },
  {
    id: 6,
    icon: <FaChartLine className="text-4xl text-yellow-600" />,
    title: "AI-Driven Career Guidance",
    description:
      "Get mentorship and insights from AI professionals to shape your career path.",
  },
];

const Service = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <div className="bg-gray-100 mt-10">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-indigo-500 to-teal-400 text-white py-16 text-center">
        <motion.h1
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-5xl font-bold"
        >
          Empower Your Learning with Practical Experience
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-lg mt-4 max-w-2xl mx-auto"
        >
          Participate in hands-on workshops, real-world projects, and
          interactive learning experiences to master Generative AI.
        </motion.p>
        <motion.button
          whileHover={{ scale: 1.1 }}
          className="mt-6 px-6 py-3 bg-white text-indigo-600 font-semibold rounded-lg shadow-md hover:bg-indigo-200 transition duration-300"
        >
          Get Started
        </motion.button>
      </section>

      {/* Services Section */}
      <section className="py-16 px-5 md:px-16">
        <h2 className="text-3xl font-bold text-center text-gray-800">
          Our Services
        </h2>
        <p className="text-center text-gray-600 mt-2 max-w-xl mx-auto">
          Explore our AI-powered programs designed to make learning engaging and
          industry-relevant.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-10">
          {content.map((service) => (
            <motion.div
              key={service.id}
              data-aos="fade-up"
              whileHover={{ scale: 1.05 }}
              className="bg-white p-6 rounded-lg shadow-lg text-center flex flex-col items-center space-y-4 hover:shadow-xl transition"
            >
              {service.icon}
              <h3 className="text-xl font-semibold text-gray-800">
                {service.title}
              </h3>
              <p className="text-gray-600">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="bg-indigo-600 text-white py-16 text-center">
        <h2 className="text-3xl font-bold">Ready to Join Our AI Revolution?</h2>
        <p className="mt-2 text-lg max-w-xl mx-auto">
          Learn from industry experts and gain hands-on experience in AI-powered
          innovation.
        </p>
        <motion.button
          whileHover={{ scale: 1.1 }}
          className="mt-6 px-6 py-3 bg-white text-indigo-600 font-semibold rounded-lg shadow-md hover:bg-indigo-200 transition duration-300"
        >
          Join Now
        </motion.button>
      </section>
    </div>
  );
};

export default Service;
