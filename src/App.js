import React, {useEffect} from "react";
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Newsletter from "./components/Newsletter";
import Cards from "./components/Cards";
import Footer from "./components/Footer";

function App() {
  useEffect(() => {
    const smoothScroll = () => {
      const links = document.querySelectorAll('a[href^="#"]');
      links.forEach(link => {
        link.addEventListener('click', function(e){
          e.preventDefault();
          const targetId = this.getAttribute('href').substring(1);
          const targetElement = document.getElementById(targetId);

          if(targetElement){
            window.scrollTo({
              top: targetElement.offsetTop,
              behavior: 'smooth'
            })
          }
        })
      })
    }
  })

  return (
    <div>
      <Navbar />
      <Hero />
      <About />
      <Newsletter />
      <Cards />
      <Footer />
    </div>
    
  );
}

export default App;
