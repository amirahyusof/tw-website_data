import React from "react"; 
import {RiMenu3Fill, RiCloseFill } from 'react-icons/ri';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Home from './Hero';
import About from "./About";
import Subscribe from "./Newsletter";
import Services from "./Cards";
import Contact from "./Footer";


const Navbar = () => {
    const [nav, setNav] = React.useState(false)

    const handleNav =() => {
    setNav(!nav)
    }

    return (
    <Router>
    <div className="flex justify-between items-center h-24 max-w-[1240px] mx-auto px-3 text-white">
        <h1 className="w-full text-2xl font-bold text-[#3C0753]">DataFinance</h1>
        <ul className="hidden md:flex">
        <li className="p-3">
                <Link to="/home">Home</Link>
              </li>
              <li className="p-3">
                <Link to="/about">About</Link>
              </li>
              <li className="p-3">
                <Link to="/subscribe">Subscribe</Link>
              </li>
              <li className="p-3">
                <Link to="/services">Servicesr</Link>
              </li>
              <li className="p-3">
                <Link to="/contact">Contact</Link>
              </li>
        </ul>
        <div onClick={handleNav} className="block md:hidden">
            {nav ? <RiCloseFill size={23} /> : <RiMenu3Fill size={23} /> }
            
        </div>
        <div className= {nav ? "fixed left-0 top-0 w-[50%] h-full border-r border-r-white-900 bg-[#3C0753]" : "fixed left-[-100%]"} >
        <h1 className="w-full text-2xl font-bold text-white m-8">DataFinance</h1>
            <ul className="p-2 uppercase ">
              <li className="p-3">
                <Link to="/home">Home</Link>
              </li>
              <li className="p-3">
                <Link to="/about">About</Link>
              </li>
              <li className="p-3">
                <Link to="/subscribe">Subscribe</Link>
              </li>
              <li className="p-3">
                <Link to="/services">Services</Link>
              </li>
              <li className="p-3">
                <Link to="/contact">Contact</Link>
              </li>
            </ul>
        </div>

        
       
    </div>
    <Route path="/home" Component={Home} />
    <Route path="/about" Component={About} />
    <Route path="/subscribe" Component={Subscribe} />
    <Route path="/offer" Component={Services} />
    <Route path="/contact" Component={Contact} />
    </Router>
    )
}

export default Navbar