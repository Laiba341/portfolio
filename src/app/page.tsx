
import React from "react";
import 'animate.css'; // Import Animate.css

const HomePage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-r from-gray-900 via-black to-gray-900 text-white flex items-center justify-center">
      <div className="max-w-6xl mx-auto bg-gray-800 p-8 rounded-3xl shadow-2xl shadow-cyan-300 flex flex-col lg:flex-row items-center space-y-8 lg:space-y-0 lg:space-x-12">
        
        {/* Left Side: Introduction Section */}
        <div className="text-center lg:text-left text-cyan-300 space-y-4 lg:w-1/2 animate__animated animate__fadeInLeft animate__delay-1s">
          <h1 className="text-4xl font-extrabold text-gold-500 mb-4">
            Hi, I'm Muhammad Shoukat
          </h1>
          <p className="text-lg lg:text-xl leading-relaxed max-w-md mx-auto lg:mx-0">
            A passionate and experienced Senior GGT Pattern Master with a strong
            background in the textile industry. I strive to deliver high-quality
            results with precision, attention to detail, and a commitment to
            excellence.
          </p>
         
        </div>
        </div>
        {/* Right Side: Profile Image */}
        <div className="lg:w-1/2 flex justify-center animate__animated animate__fadeInRight animate__delay-2s">
          <div className="w-96 h-96 rounded-full bg-cyan-500 flex items-center justify-center shadow-xl border-2 border-cyan-400 transform hover:scale-105 transition-all duration-500">
            <img
              src="\images\WhatsApp Image 2022-03-07 at 12.19.11 PM.jpeg" // Replace with the correct image path
              alt="Muhammad Shoukat"
              className="w-80 h-80 object-cover rounded-full shadow-2xl shadow-cyan-400 transform hover:rotate-6 transition-all duration-500"
            />
          </div>
        </div>
        
      </div>
    
  );
};

export default HomePage;
