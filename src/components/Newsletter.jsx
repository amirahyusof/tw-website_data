import React from "react";

function Newsletter(){
    return(
        <div className="bg-[#720455] w-full py-16 text-white px-4">
            <div className="max-w-[1240px] mx-auto grid lg:grid-cols-3">
                <div className="lg:col-span-2">
                    <h1 className="md:text-4xl sm:text-3xl text-2xl font-bold py-2"></h1>
                    <p>Sign up to our newsletter and stay up to date</p>
                </div>
                <div className="my-4">
                    <div className="flex flex-col sm:flex-row justify-between w-full">
                        <input className="p-3 w-full rounded-md text-white" type="email" placeholder="Enter Email" />
                        <button className="bg-[#3C0753] w-[200px] rounded-md font-medium ml-4 my-6 mx-auto py-3 text-white">Get Started</button>
                    </div>
                </div>

            </div>

        </div>
    )
}

export default Newsletter