import React from "react";
import { ReactTyped } from "react-typed";

const Hero =() => {
    return(
        <div className="text-white">
            <div className="max-w-[800px] mt-[-96px] w-full h-screen mx-auto text-center flex flex-col justify-center">
                <p className="text-[#3C0753] font-bold p-2">Transform your financial journey with our data-driven insights</p>
                <h1 className="md:text-7xl sm:text-6xl text-4xl font-bold md:py-6">Unleash the Power of Data for Financial Mastery</h1>
                <div className="flex justify-center items-center">
                    <p className="md:text-5xl sm:text-4sml text-xl font-bold pt-4">Fast, flexible financing for</p>
                    <ReactTyped 
                     className="md:text-5xl sm:text-4xl text-xl font-bold pt-4 pl-2"
                    strings={[
                        'PA',
                        'PFD',
                        'RMS'
                    ]}
                    typeSpeed={120}
                    backSpeed={140} 
                    loop/>

                </div>
                <p className="md:text-xl text-l font-bold text-gray-400 pt-4" >Join the data revolution and transform your financial landscape today. Explore our platform and discover how data can revolutionize your financial future.</p>
                <button className="bg-[#3C0753] w-[200px] rounded-md font-medium my-6 mx-auto py-3 text-white">Get Started</button>
            </div>

        </div>
    )
}

export default Hero