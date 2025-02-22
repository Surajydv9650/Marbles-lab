import React from "react";
import "./App.css";
import ScrollToTop from "./ScrollToTop";
import AOS from "aos";
import "aos/dist/aos.css";
import { Routes, Route } from "react-router-dom";
import Hero from "./Components/Hero/Hero";
import Services from "./Components/Services/Services";
import About from "./Components/About/About";
import Testimonials from "./Components/Testimonials/Testimonials";
import Subscribe from "./Components/Subscribe/Subscribe";

// Other Pages
import Aboutus from "./Components/OtherPages/Aboutus/Aboutus";
import Service from "./Components/OtherPages/Service/Service";
import Contact from "./Components/OtherPages/Contact/Contact";
import Mentors from "./Components/Mentors/Mentors";

const App = () => {
  React.useEffect(() => {
    AOS.init({
      offset: 100,
      duration: 800,
      easing: "ease-in-sine",
      delay: 100,
    });
    AOS.refresh();
  }, []);

  return (
    <div className="bg-white text-gray-900">
      {/* Auto Scroll to Top on Route Change */}
      <ScrollToTop />

      <Routes>
        <Route
          path="/Marbles-lab/"
          element={
            <>
              <Hero />
              <About />
              <Services />
              <Mentors/>
              <Testimonials />
              <Subscribe />
            </>
          }
        />
        <Route path="/Aboutus" element={<Aboutus />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/Service" element={<Service />} />
      </Routes>
    </div>
  );
};

export default App;
