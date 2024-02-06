import React from "react";

function Newsletter(){
    return(
        <div className="bg-[#720455] w-full py-16 text-white px-4">
            <div className="max-w-[1240px] mx-auto grid lg:grid-cols-3">
                <div className="lg:col-span-2 my-4">
                    <h1 className="md:text-4xl sm:text-3xl text-2xl font-bold py-2">Unlock Exclusive Financial Insights: Subscribe Now!</h1>
                    <p className="px-2">Sign up to our newsletter and stay ahead of the financial curve with exclusive insights, expert tips, and the latest updates delivered straight to your inbox!</p>
                </div>
                <div className="my-4">
                    <div className="flex flex-col sm:flex-row items-center justify-between w-full">
                        <input className="p-3 flex w-full rounded-md text-white" type="email" placeholder="Enter Email" />
                        <button className="bg-[#3C0753] w-[200px] rounded-md font-medium ml-4 my-6 mx-auto py-3 text-white">Subscribe</button>
                        
                    </div>
                    <p>We care bout the protection of your data. Read our <span className="text-[#030637]">Privacy Policy</span>.</p>
                </div>

            </div>

        </div>
    )
}

export default Newsletter