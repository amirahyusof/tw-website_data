import React from "react";

const Navbar = () => {
    return (
        <div className="flex justify-between items-center h-24 max-w-[1240px] mx-auto px-3 text-white">
            <h1 className="w-full text-2xl font-bold text-[#030637]">DataFinance</h1>
            <ul className="flex">
                <li className="p-3">Home</li>
                <li className="p-3">Company</li>
                <li className="p-3">Resources</li>
                <li className="p-3">About</li>
                <li className="p-3">Contact</li>
            </ul>
        </div>
    )
}

export default Navbar