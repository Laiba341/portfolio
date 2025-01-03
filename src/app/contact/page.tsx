"use client";
import React, { useState } from "react";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa"; // Importing icons

const Contact = () => {
  const [message, setMessage] = useState<string | null>(null); // State to show the message

  const handleClick = () => {
    setMessage("Thanks for Watching!"); // Event handler for the button click
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 via-black to-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-center mb-8 animate__animated animate__fadeInDown">
          Contact Muhammad Shoukat
        </h1>

        {/* Contact Information */}
        <div className="space-y-8">

          {/* Address */}
          <div className="flex items-center space-x-4 justify-center">
            <FaMapMarkerAlt className="text-cyan-500 text-2xl" />
            <span className="text-lg text-cyan-300">
              House No. 1025, Street No. 10, Sector 8/B, Hazrat Bilal Colony, Korangi Industrial Area, Karachi.
            </span>
          </div>

          {/* Phone */}
          <div className="flex items-center space-x-4 justify-center">
            <FaPhoneAlt className="text-green-400 text-2xl" />
            <span className="text-lg text-cyan-300">+92 301-2317723</span>
          </div>

          {/* Email */}
          <div className="flex items-center space-x-4 justify-center">
            <FaEnvelope className="text-red-400 text-2xl" />
            <span className="text-lg text-cyan-300">shoukats217@Gmail.com</span>
          </div>

        </div>

        {/* Button to trigger "Thanks for Watching" */}
        <div className="flex justify-center mt-8">
          <button
            onClick={handleClick}
            className="bg-cyan-500 text-white font-bold py-2 px-6 rounded-full hover:bg-cyan-400 transition-all duration-300"
          >
            Click Me!
          </button>
        </div>

        {/* Display the message after clicking the button */}
        {message && (
          <div className="text-center mt-4 text-lg text-green-400 animate__animated animate__fadeIn">
            {message}
          </div>
        )}
      </div>
    </div>
  );
};

export default Contact;
