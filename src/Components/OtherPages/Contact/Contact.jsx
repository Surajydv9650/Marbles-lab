import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { Mail, Linkedin, Twitter } from "lucide-react"; // Importing Lucide icons
import ContactImage from "../../../Assets/contact/contact.jpg";

const ContactUs = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <div className="mt-12 min-h-screen flex justify-center items-center px-6 sm:px-12 py-12 bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-white">
      <div className="max-w-6xl w-full bg-white dark:bg-gray-800 shadow-lg rounded-xl overflow-hidden grid grid-cols-1 sm:grid-cols-2 gap-6">
        {/* Left Section - Image */}
        <div className="relative flex items-center justify-center p-6" data-aos="fade-right">
          <img src={ContactImage} alt="Contact Us" className="max-w-full h-auto rounded-lg shadow-xl" />
        </div>

        {/* Right Section - Contact Form */}
        <div className="p-6 sm:p-12" data-aos="fade-left">
          <h2 className="text-3xl font-bold text-primary mb-4">Get in Touch</h2>
          <p className="text-gray-600 dark:text-gray-300 mb-6">
            Reach out to us for seminars and workshops on Generative AI. We’ll get back to you soon!
          </p>

          <form>
            <div className="mb-4">
              <label className="block text-sm font-semibold">Full Name</label>
              <input type="text" className="w-full p-2 border rounded-lg dark:bg-gray-700 dark:border-gray-600" placeholder="Your Name" required />
            </div>

            <div className="mb-4">
              <label className="block text-sm font-semibold">Email</label>
              <input type="email" className="w-full p-2 border rounded-lg dark:bg-gray-700 dark:border-gray-600" placeholder="Your Email" required />
            </div>

            <div className="mb-4">
              <label className="block text-sm font-semibold">Message</label>
              <textarea className="w-full p-2 border rounded-lg dark:bg-gray-700 dark:border-gray-600" rows="4" placeholder="Your Message" required></textarea>
            </div>

            <button type="submit" className="w-full bg-primary text-white py-2 px-4 rounded-lg hover:bg-secondary transition-all">
              Send Message
            </button>
          </form>

          {/* Social Media Links */}
          <div className="mt-6 text-center">
            <h3 className="text-lg font-bold text-primary">Follow Us</h3>
            <div className="flex justify-center gap-6 mt-2">
              <a href="#" className="text-gray-600 dark:text-gray-400 text-xl hover:text-primary transition-all flex items-center gap-2">
                <Mail size={24} /> Gmail
              </a>
              <a href="#" className="text-gray-600 dark:text-gray-400 text-xl hover:text-primary transition-all flex items-center gap-2">
                <Linkedin size={24} /> LinkedIn
              </a>
              <a href="#" className="text-gray-600 dark:text-gray-400 text-xl hover:text-primary transition-all flex items-center gap-2">
                <Twitter size={24} /> Twitter
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
