import React from "react";
import aboutImage from "../assets/about-img.png"

function About() {
    return(
        <div className="w-full bg-[#030637] py-16 px-4">
            <div className="max-w-[1240px] mx-auto grid md:grid-cols-2">
                <img className="w-[600px] mx-auto my-4" src={aboutImage} alt="/" />
                <div className="text-white flex flex-col justify-center px-4">
                    <p className="text-[#910A67] uppercase my-2 font-bold">transformative power of data in the realm of finance</p>
                    <h1 className="md:text-4xl sm:text-3xl text-2xl font-bold py-2">Empowering Financial Futures Through Data Excellence</h1>
                    <p className="my-4 text-justify">
                       We're passionate about empowering individuals and businesses to navigate the complexities of finance with confidence. 
                       Through our innovative platform, we harness the potential of data to provide actionable insights that drive financial success.
                       Our team of experts is dedicated to delivering cutting-edge solutions that simplify financial decision-making. Whether you're a seasoned investor or just beginning your financial journey, we're here to support you every step of the way.
                       Join us as we revolutionize the world of finance through data-driven strategies, unlocking new opportunities and shaping a brighter financial future for all. Discover the difference data can make with us.
                    </p>
                    <button className="bg-[#910A67] w-[200px] rounded-md font-medium my-6 mx-auto md:mx-0 py-3 text-white">Get Started</button>
                </div>

            </div>
        </div>
    )
}

export default About