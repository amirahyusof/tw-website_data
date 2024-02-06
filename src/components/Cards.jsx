import React from "react";
import Explorer from '../assets/primary.png';
import Advance from '../assets/advance.png';
import Executive from '../assets/executive.png';

function Cards(){
    return(
        <div className="w-full py-[10rem] px-4 bg-[#030637]">
            <div className="max-w-[1240px] mx-auto grid md:grid-cols-3 gap-8">
                <div className="w-full shadow-lg text-white border flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300 ">
                    <img className="w-24 mx-auto mt-[-3rem] bg-white rounded-3xl" src={Explorer} alt="/" />
                    <h2 className="text-2xl font-bold text-center py-8">Explorer's Bundle</h2>
                    <p className="text-center text-4xl font-bold">$40</p>
                    <div className="text-center font-medium">
                        <li className="py-2 border-b mx-8 mt-8">Monthly access to our data analytics platform</li>
                        <li className="py-2 border-b mx-8">Real-time market trends and insights</li>
                        <li className="py-2 border-b mx-8">Personalized financial dashboards</li>
                        <li className="py-2 border-b mx-8">Basic risk management solutions</li>
                        <li className="py-2 border-b mx-8">Newsletter subscription for curated updates</li>
                        <li className="py-2 border-b mx-8">Access to educational resources</li>
                    </div>
                    <button className="bg-[#910A67] w-[200px] rounded-md font-medium my-6 mx-auto py-3 text-white">Start Trial</button>
                </div>

                <div className="w-full shadow-lg text-white border flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300 ">
                    <img className="w-28 mx-auto mt-[-3rem] bg-white rounded-2xl" src={Advance} alt="/" />
                    <h2 className="text-2xl font-bold text-center py-8">Pro Analyst </h2>
                    <p className="text-center text-4xl font-bold">$80</p>
                    <div className="text-center font-medium">
                        <li className="py-2 border-b mx-8 mt-8">All features from the Explorer's Bundle</li>
                        <li className="py-2 border-b mx-8">Advanced predictive analytics tools</li>
                        <li className="py-2 border-b mx-8">Enhanced risk management solutions</li>
                        <li className="py-2 border-b mx-8">Priority customer support</li>
                        <li className="py-2 border-b mx-8">Dedicated account manager for personalized assistance</li>
                        <li className="py-2 border-b mx-8">Exclusive webinars and workshops</li>
                        
                        <li className="py-2 border-b mx-8">Customizable reports and in-depth analysis</li>
                    </div>
                    <button className="bg-[#910A67] w-[200px] rounded-md font-medium my-6 mx-auto py-3 text-white">Start Trial</button>

                </div>

                <div className="w-full shadow-lg text-white border flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300 ">
                    <img className="w-28 mx-auto mt-[-3rem] bg-white rounded-2xl" src={Executive} alt="/" />
                    <h2 className="text-2xl font-bold text-center py-8">Executive Suite</h2>
                    <p className="text-center text-4xl font-bold">$120</p>
                    <div className="text-center font-medium">
                        <li className="py-2 border-b mx-8 mt-8">All features from the Pro Analyst Package</li>
                        <li className="py-2 border-b mx-8">Dedicated account manager for personalized assistance</li>
                        <li className="py-2 border-b mx-8">Early access to new features and updates</li>
                        <li className="py-2 border-b mx-8">Tailored data integration solutions</li>
                        <li className="py-2 border-b mx-8">Strategic financial consulting sessions</li>
                        <li className="py-2 border-b mx-8">Premium access to industry reports and whitepapers</li>
                    </div>
                    <button className="bg-[#910A67] w-[200px] rounded-md font-medium my-6 mx-auto py-3 text-white">Start Trial</button>

                </div>
            </div>
        </div>
    )
}

export default Cards