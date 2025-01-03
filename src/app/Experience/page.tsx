"use client";
import React from "react";
import "animate.css"; // Import Animate.css for animations

const Experience = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 via-black to-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-center mb-8 animate__animated animate__fadeInDown">
          Experience
        </h1>

        <div className="space-y-12">
          {/* Experience Entry for Rajby Industries */}
          <div className="bg-gray-800 p-6 rounded-lg shadow-lg shadow-cyan-300 animate__animated animate__fadeInLeft flex flex-col lg:flex-row items-center">
            <div className="lg:w-1/3 flex justify-center mb-4 lg:mb-0">
              <div className="w-32 h-32 rounded-full bg-cyan-500 shadow-xl">
                {/* Replace this placeholder with an actual image */}
                <img
                  src="/images/rajby.jpeg" // Add image for Rajby Industries
                  alt="Rajby Industries"
                  className="w-full h-full object-cover rounded-full"
                />
              </div>
            </div>
            <div className="lg:w-2/3 text-cyan-300">
              <h3 className="text-xl font-bold text-gold-500">Rajby Industries</h3>
              <p className="text-lg leading-relaxed">
                5 Years of Experience as a Sampling Master and Technical Advisor for Production Feasibility. Worked on production feasibility and technical support for garment sampling.
              </p>
            </div>
          </div>

          {/* Experience Entry for Soorty Enterprises */}
          <div className="bg-gray-800 p-6 rounded-lg shadow-lg shadow-cyan-300 animate__animated animate__fadeInRight flex flex-col lg:flex-row items-center">
            <div className="lg:w-1/3 flex justify-center mb-4 lg:mb-0">
              <div className="w-32 h-32 rounded-full bg-cyan-500 shadow-xl">
                {/* Replace this placeholder with an actual image */}
                <img
                  src="/images/soorty.jpeg" // Add image for Soorty Enterprises
                  alt="Soorty Enterprises"
                  className="w-full h-full object-cover rounded-full"
                />
              </div>
            </div>
            <div className="lg:w-2/3 text-cyan-300">
              <h3 className="text-xl font-bold text-gold-500">Soorty Enterprises Pvt. Ltd</h3>
              <p className="text-lg leading-relaxed">
                Currently working as a Senior GGT Pattern Master, leading pattern creation and ensuring quality production feasibility.
              </p>
            </div>
          </div>

          {/* Existing Experience Entries */}
          <div className="bg-gray-800 p-6 rounded-lg shadow-lg shadow-cyan-300 animate__animated animate__fadeInUp flex flex-col lg:flex-row items-center">
            <div className="lg:w-1/3 flex justify-center mb-4 lg:mb-0">
              <div className="w-32 h-32 rounded-full bg-cyan-500 shadow-xl">
                {/* Replace this placeholder with an actual image */}
                <img
                  src="/images/novena.jpeg"
                  alt="Experience Placeholder"
                  className="w-full h-full object-cover rounded-full"
                />
              </div>
            </div>
            <div className="lg:w-2/3 text-cyan-300">
              <h3 className="text-xl font-bold text-gold-500">Novena Garment (Pvt) Ltd</h3>
              <p className="text-lg leading-relaxed">
                4 Years of Experience as a Template Maker. Created accurate templates for garment production, ensuring quality and precision.
              </p>
            </div>
          </div>

          <div className="bg-gray-800 p-6 rounded-lg shadow-lg shadow-cyan-300 animate__animated animate__fadeInUp flex flex-col lg:flex-row items-center">
            <div className="lg:w-1/3 flex justify-center mb-4 lg:mb-0">
              <div className="w-32 h-32 rounded-full bg-cyan-500 shadow-xl">
                {/* Replace this placeholder with an actual image */}
                <img
                  src="/images/akhtar.jpeg"
                  alt="Report Making"
                  className="w-full h-full object-cover rounded-full"
                />
              </div>
            </div>
            <div className="lg:w-2/3 text-cyan-300">
              <h3 className="text-xl font-bold text-gold-500">Akhtar Garment (Pvt) Ltd</h3>
              <p className="text-lg leading-relaxed">
                5 Years of Experience including:
              </p>
              <ul className="list-disc list-inside text-lg text-cyan-300">
                <li>2 Years as a Report Maker (before and after wash reports in Excel).</li>
                <li>2 Years in Marker Making.</li>
                <li>1 Year as a Laser Machine Template Cutter.</li>
                <li>1 Year as a GGT Pattern Grader.</li>
              </ul>
            </div>
          </div>

          <div className="bg-gray-800 p-6 rounded-lg shadow-lg shadow-cyan-300 animate__animated animate__fadeInUp flex flex-col lg:flex-row items-center">
            <div className="lg:w-1/3 flex justify-center mb-4 lg:mb-0">
              <div className="w-32 h-32 rounded-full bg-cyan-500 shadow-xl">
                {/* Replace this placeholder with an actual image */}
                <img
                  src="/images/gul ahmed.jpeg"
                  alt="Sampling Master"
                  className="w-80 h-full object-cover rounded-full"
                />
              </div>
            </div>
            <div className="lg:w-2/3 text-cyan-300">
              <h3 className="text-xl font-bold text-gold-500">Gul Ahmed (Pvt) Ltd</h3>
              <p className="text-lg leading-relaxed">
                2 Years as Sampling & Production Master. Managed entire departments and ensured seamless team coordination.
              </p>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Experience;
