import React from "react"; 
import {RiMenu3Fill, RiCloseFill } from 'react-icons/ri';
import { Link } from "react-router-dom";


const Navbar = () => {
    const [nav, setNav] = React.useState(false)

    const handleNav =() => {
    setNav(!nav)
    }

    return (
        <div className="flex justify-between items-center h-24 max-w-[1240px] mx-auto px-3 text-white">
        <h1 className="w-full text-2xl font-bold text-[#3C0753]">DataFinance</h1>
        <ul className="hidden md:flex">
           <li className="p-3">
                <a href="#home">Home</a>
            </li>
            <li className="p-3">
                <a href="#about">About</a>
            </li>
            <li className="p-3">
                <a href="#subscribe">Subscribe</a>
            </li>
            <li className="p-3">
                <a href="#services">Services</a>
            </li>
            <li className="p-3">
                <a href="#contact">Contact</a>
            </li>
        </ul>
        <div onClick={handleNav} className="block md:hidden">
            {nav ? <RiCloseFill size={23} /> : <RiMenu3Fill size={23} /> }
            
        </div>
        <div className= {nav ? "fixed left-0 top-0 w-[50%] h-full border-r border-r-white-900 bg-[#3C0753]" : "fixed left-[-100%]"} >
        <h1 className="w-full text-2xl font-bold text-white m-8">DataFinance</h1>
            <ul className="p-2 uppercase ">
            <li className="p-3">
                <a href="#home">Home</a>
            </li>
            <li className="p-3">
                <a href="#about">About</a>
            </li>
            <li className="p-3">
                <a href="#subscribe">Subscribe</a>
            </li>
            <li className="p-3">
                <a href="#services">Services</a>
            </li>
            <li className="p-3">
                <a href="#contact">Contact</a>
            </li>
            </ul>
        </div>
        </div>
    )
}

export default Navbar