import React from "react";
import {
    FaFacebookSquare,
    FaInstagramSquare,
    FaTwitterSquare,
    FaWhatsappSquare
} from "react-icons/fa"

const Footer = () => {
    return (
        <div className="max-w-[1240px] mx-auto py-16 px-4 bg-[#720455] text-white grid lg:grid-cols-3 gap-8" id="contact">
            <div>
            <h1 className="w-full text-2xl font-bold text-[#030637]">DataFinance</h1>
            <p className="py-4 text-justify">We are committed to empowering individuals and businesses with innovative data-driven solutions for 
            financial success. With a passion for excellence and a dedication to serving our community, we strive to make a meaningful 
            impact in the world of finance. Join us on this journey as we navigate the ever-evolving landscape of finance together</p>
            <div className="flex justify-between md:w-[75%] my-2">
                <FaFacebookSquare size={30} />
                <FaInstagramSquare size={30} />
                <FaTwitterSquare size={30} />
                <FaWhatsappSquare size={30} />
            </div>
            </div>
            <div className="lg:col-span-2 lg:ml-8 flex justify-between mt-8">
                <div>
                    <h6 className="font-medium text-gray-400">Solutions</h6>
                    <ul>
                        <li className="py-2 text-sm">Analytics</li>
                        <li className="py-2 text-sm">Marketing</li>
                        <li className="py-2 text-sm">Commerce</li>
                        <li className="py-2 text-sm">Insights</li>
                    </ul>
                </div>

                <div>
                    <h6 className="font-medium text-gray-400">Support</h6>
                    <ul>
                        <li className="py-2 text-sm">Pricing</li>
                        <li className="py-2 text-sm">Documentation</li>
                        <li className="py-2 text-sm">Guides</li>
                        <li className="py-2 text-sm">API Status</li>
                    </ul>
                </div>

                <div>
                    <h6 className="font-medium text-gray-400">Company</h6>
                    <ul>
                        <li className="py-2 text-sm">About</li>
                        <li className="py-2 text-sm">Blog</li>
                        <li className="py-2 text-sm">Press Kit</li>
                        <li className="py-2 text-sm">Careers</li>
                    </ul>
                </div>

                <div>
                    <h6 className="font-medium text-gray-400">Legal</h6>
                    <ul>
                        <li className="py-2 text-sm">Claim</li>
                        <li className="py-2 text-sm">Policy</li>
                        <li className="py-2 text-sm">Terms</li>
                        <li className="py-2 text-sm">FAQ</li>
                    </ul>
                </div>

            </div>


        </div>
    )
}

export default Footer