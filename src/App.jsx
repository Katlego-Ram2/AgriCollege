import React from "react";
import Navbar from "./components/Navbar.jsx";
import Hero from "./components/Hero.jsx";
import Features from "./components/Features.jsx";
import Products from "./components/Products.jsx";
import About from "./components/About.jsx";
import HowItWorks from "./components/HowItWorks.jsx";
import Testimonial from "./components/Testimonial.jsx";
import Footer from "./components/Footer.jsx";

const App = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <Features />
      <Products />
      <About />
      <HowItWorks />
      <Testimonial />
      <Footer />
    </>
  );
};

export default App;
