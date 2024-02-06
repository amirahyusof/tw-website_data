import React from "react";
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Newsletter from "./components/Newsletter";
import Cards from "./components/Cards";

function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <About />
      <Newsletter />
      <Cards />
    </div>
  );
}

export default App;
