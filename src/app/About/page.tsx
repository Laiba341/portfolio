"use client";
import React from "react";
import "animate.css"; // Ensure Animate.css is installed

const About = () => {
  return (
    <div className="container mx-auto px-6 py-12 bg-gradient-to-r from-gray-900 via-black to-gray-900 text-white">
      <h1 className="text-4xl font-bold text-center mb-8 animate__animated animate__fadeIn animate__delay-1s">
        About Me
      </h1>
      <div className="lg:flex items-center justify-between">
        {/* Left Side: Text with Animation and Border */}
        <div className="lg:w-1/2 text-cyan-300 space-y-6">
          <p
            className="text-lg leading-relaxed animate__animated animate__fadeIn animate__delay-1s p-4 border-4 border-cyan-300 rounded-lg"
            style={{ animationDelay: "1s" }}
          >
            Hi, I'm Muhammad Shoukat, a Senior GGT Pattern Master with over 15 years of experience in the textile industry.
            Throughout my career, I have specialized in pattern making, sampling, and technical advising.
            I am passionate about precision and always strive to improve the efficiency of production processes.
          </p>
          <p
            className="text-lg leading-relaxed animate__animated animate__fadeIn animate__delay-2s p-4 border-4 border-cyan-300 rounded-lg"
            style={{ animationDelay: "2s" }}
          >
            I have worked with leading organizations like Akhtar Garment, Soorty Enterprises, and Gul Ahmed, where I have
            developed key skills in pattern grading, production feasibility, and team management.
            My goal is to contribute to the continued growth of the textile industry by refining processes and mentoring future leaders.
          </p>
          <p
            className="text-lg leading-relaxed animate__animated animate__fadeIn animate__delay-3s p-4 border-4 border-cyan-300 rounded-lg"
            style={{ animationDelay: "3s" }}
          >
            I believe in dedication, continuous learning, and attention to detail to achieve excellence in every project.
          </p>
          <p
            className="text-lg leading-relaxed animate__animated animate__fadeIn animate__delay-3s p-4 border-4 border-cyan-300 rounded-lg"
            style={{ animationDelay: "3s" }}
          >
         Intermediate in Computer Science (ICS) – [punjab collage]
        </p>

        <p
            className="text-lg leading-relaxed animate__animated animate__fadeIn animate__delay-3s p-4 border-4 border-cyan-300 rounded-lg"
            style={{ animationDelay: "3s" }}
          >
          recieved Awarded <strong>" Best Master Certificate"</strong> for outstanding performance in pattern making and production management at <strong>Akhtar Garment, Soorty Enterprises, and Gul Ahmed</strong>.
        </p>
        </div>

        {/* Right Side: Profile Image with Animation */}
        <div className="lg:w-1/2 flex justify-center">
          <div className="w-80 h-80 rounded-full bg-cyan-500 flex items-center justify-center shadow-xl border-4 border-cyan-300">
            <img
              src="\images\WhatsApp Image 2022-03-07 at 12.19.11 PM.jpeg" // Add your profile image here
              alt="Muhammad Shoukat"
              className="w-72 h-72 object-cover rounded-full shadow-2xl animate__animated animate__zoomIn animate__delay-2s"
            />
          </div>
        </div>
      </div>

    </div>
  );
};

export default About;
