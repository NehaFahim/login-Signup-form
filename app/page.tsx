// page.tsx

import Image from "next/image";
import React from "react";

const LandingPage = () => {
  return (
   
    // <div className="min-h-screen  bg-gradient-to-r from-orange-400 via-yellow-300 to-orange-300 ">
          <div className="min-h-screen bg-white">
      <div className="relative max-w-4xl w-full text-center p-8">
        {/* Background Elements */}
        <div className="absolute top-0 left-0 w-40 h-40 bg-yellow-400 rounded-full blur-3xl opacity-40"></div>
        <div className="absolute bottom-0 right-0 w-40 h-40 bg-orange-500 rounded-full blur-3xl opacity-40"></div>

        {/* Main Content */}
        <div className="relative z-10 p-32 mr-32">
          <h1 className="text-3xl md:text-5xl font-extrabold text-purple-700 ">
           Hello!Welcome to our page
          </h1>
          <p className="text-xl md:text-3xl text-black mt-5">
          Login/Sign up Forms
          </p>

          {/* Illustration */}
          <div className="flex justify-center mt-8">
            <div className="relative w-72 h-40 bg-slate-300 rounded-3xl shadow-lg border border-blue-200">
              <div className="absolute top-2 left-3 w-16 h-16 bg-purple-700 rounded-full flex items-center justify-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-8 w-8 text-white"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 11c1.4 0 2.625-.625 3.428-1.571C16.25 8.088 17 6.605 17 5c0-2.5-2.25-4-5-4S7 2.5 7 5c0 1.605.75 3.088 1.572 4.429C9.375 10.375 10.6 11 12 11zM4 20h16v-3c0-3.308-2.692-6-6-6H10c-3.308 0-6 2.692-6 6v3z"
                  />
                </svg>
              </div>
              <div className="absolute bottom-5 left-12">
               <a href="/user">
               <button className="bg-purple-500 w-52 h-12 rounded-lg text-2xl border border-black hover:bg-purple-400 ">Click Here!</button></a> 
                {/* <div className="bg-gray-300 w-48 h-6 rounded-lg mt-2"></div> */}
              </div>
            </div>
          </div>
        </div>
        <div className="absolute top-12 -right-96 mix-blend-multiply opacity-100">
        <Image src={"/vector.avif"} alt="person image" width={600} height={500}></Image>
      </div>
    </div>
    
    </div>
    
  );
};

export default LandingPage;
