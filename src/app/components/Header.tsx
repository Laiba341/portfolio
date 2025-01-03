"use client"
import React from "react";
import Link from "next/link";
import { FaUserAlt, FaTools, FaBriefcase, FaEnvelope } from "react-icons/fa";

const Header = () => {
  return (
    <div className="bg-gradient-to-r from-black via-gray-900 to-black text-cyan-300">
      {/* Main Header Section */}
      <div className="flex justify-between items-center px-10 font-extrabold border-b-2 border-cyan-300 py-4">
        <div className="flex items-center space-x-4">
          <img
            src="/images/WhatsApp Image 2022-03-07 at 12.19.11 PM.jpeg" // Ensure the image path is correct
            alt="Muhammad Shoukat's Profile Icon"
            className="object-cover w-20 h-20 rounded-full border-4 border-cyan-300 bg-cyan-300"
          />
          <div>
            <h1 className="text-xl md:text-2xl text-gold-500 hover:text-gray-50">Muhammad Shoukat</h1>
            <p className="text-sm text-cyan-400 hover:text-gray-50">Senior GGT Pattern Master</p>
          </div>
        </div>
        <nav className="flex space-x-6 text-base">
          <Link href="/About" className="flex items-center space-x-2 hover:text-gray-50">
            <FaUserAlt />
            <span>About Me</span>
          </Link>
          <Link href="/Experience" className="flex items-center space-x-2 hover:text-gray-50">
            <FaBriefcase />
            <span>Experience</span>
          </Link>
          <Link href="/Skills" className="flex items-center space-x-2  hover:text-gray-50">
            <FaTools />
            <span>Skills</span>
          </Link>
          <Link href="/contact" className="flex items-center space-x-2 hover:text-gray-50">
            <FaEnvelope />
            <span>Contact</span>
          </Link>
        </nav>
      </div>
    </div>
  );
};

export default Header;
