import React from "react";
import "animate.css"; // Ensure Animate.css is installed

const Projects = () => {
  const projects = [
    {
      title: "Special Skill: 3D Modeling",
      duration: "Ongoing",
      description: "Specialized in 3D modeling for complex designs and prototypes.",
      image: "/images/3d.jpg", // Special skill image
    },
    {
      title: "Wash Reports Automation",
      duration: "Akhtar Garments (2 Years)",
      description: "Automated the creation of before and after wash reports using Excel, improving data accuracy.",
      image:"/images/Automation.jpg" , // Add the image path here
    },
    {
      title: "Laser-Cut Templates",
      duration: "Akhtar Garments (1 Year)",
      description: "Pioneered the use of laser machines for cutting templates, ensuring precision and speed.",
      image:"/images/Cutting-Head-11-2.jpg" , // Add the image path here
    },
    {
      title: "Pattern Grading Innovations",
      duration: "Akhtar Garments (1 Year)",
      description: "Graded patterns to improve size consistency across various garments.",
      image:"/images/grading.jpg" , // Add the image path here
    },
    {
      title: "Sampling and production",
      duration: "Gul Ahmed (2 Years)",
      description: "Improved sampling processes to ensure seamless integration with production workflows.",
      image:"/images/Fabric-Cutting-Tools-.webp"
    },
    {
      title: "Production Feasibility Projects",
      duration: "Rajby Industries (5 Years)",
      description: "Provided technical guidance and implemented production feasibility studies.",
      image: "/images/computers-12-00224-g001.webp", // Add the image path here
    },
    {
      title: "Advanced Pattern Mastery",
      duration: "Soorty Enterprises (Ongoing)",
      description: "Developing innovative pattern-making techniques for modern garment designs.",
      image: "/images/master.jpg", // Add the image path here
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-r from-gray-900 via-black to-gray-900 text-white py-12 px-6 border-4 border-cyan-300">
      <h1 className="text-4xl font-bold text-center mb-12 animate__animated animate__fadeInDown">
       My  Skills
      </h1>
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
        {projects.map((project, index) => (
          <div
            key={index}
            className={`bg-gray-800 p-6 rounded-lg shadow-xl transform transition-all duration-300 hover:translate-y-[-8px] hover:bg-gray-600 hover:shadow-cyan-500/50 hover:text-cyan-300 border-4 border-cyan-300 animate__animated animate__fadeInUp ${
              index === projects.length - 1 ? "col-span-full lg:col-span-1 lg:mx-auto" : ""
            }`}
          >
            {/* Project Image */}
            <div className="mb-6">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-32 object-cover rounded-lg shadow-lg"
              />
            </div>

            {/* Project Title */}
            <h2 className="text-xl font-bold mb-3 text-cyan-300 hover:text-cyan-500 transition-colors duration-300">
              {project.title}
            </h2>

            {/* Duration */}
            <p className="text-sm text-cyan-500 mb-4">{project.duration}</p>

            {/* Description */}
            <p className="text-gray-300 leading-relaxed">{project.description}</p>

          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
