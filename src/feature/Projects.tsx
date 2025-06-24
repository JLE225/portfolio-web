"use client";
import React from "react";

const projects = [
  {
    title: "Zupa Chat App",
    description: "A modern chat app with real-time messaging.",
    image: "/images/zupa.png",
    link: "#",
    inProgress: true,
  },
  {
    title: "Portfolio Website",
    description: "A macOS-inspired portfolio with draggable windows.",
    image: "/images/portfolio.png",
    link: "https://jaredlewis-portfolio.vercel.app/",
    inProgress: false,
  },
];

const Projects = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 px-8 py-4 select-none">
      {projects.map((project, index) => {
        const isDisabled = project.inProgress;

        const CardContent = (
          <div
            className={`relative rounded-2xl overflow-hidden shadow-lg bg-neutral-800 border border-neutral-700 transition-transform duration-300 ${
              isDisabled
                ? "cursor-not-allowed pointer-events-none"
                : "cursor-pointer hover:scale-105 active:scale-95"
            }`}
          >
            {/* Gambar + Overlay */}
            <div className="relative w-full h-48">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover"
              />
              {isDisabled && (
                <div className="absolute inset-0 bg-black bg-opacity-60 flex items-center justify-center">
                  <span className="text-white font-bold text-lg">
                    WORK IN PROGRESS
                  </span>
                </div>
              )}
            </div>

            {/* Konten */}
            <div className="p-4">
              <h3 className="text-lg font-semibold text-white">
                {project.title}
              </h3>
              <p className="text-sm text-neutral-300 mt-1">
                {project.description}
              </p>
            </div>
          </div>
        );

        return isDisabled ? (
          <div key={index}>{CardContent}</div>
        ) : (
          <a
            key={index}
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
          >
            {CardContent}
          </a>
        );
      })}
    </div>
  );
};

export default Projects;
