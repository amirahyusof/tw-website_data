import React from "react";
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Newsletter from "./components/Newsletter";

function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <About />
      <Newsletter />
    </div>
  );
}

export default App;
