"use client";
import React, { useState } from "react";
import { AboutSection, ProjectsSection, ContactSection, CalculatorSection } from "./Sections";
import { User, Briefcase, Mail, Calculator as CalculatorIcon, X } from "lucide-react";

const Menu = () => {
  const [activeItem, setActiveItem] = useState<number | null>(null);
  const [clickedItem, setClickedItem] = useState<number | null>(null);
  const [openSection, setOpenSection] = useState<number | null>(null);

  const menuItems = [
    { id: 1, label: "About", icon: <User size={20} /> },
    { id: 2, label: "Projects", icon: <Briefcase size={20} /> },
    { id: 3, label: "Contact", icon: <Mail size={20} /> },
  ];

  const handleClick = (id: number) => {
    setClickedItem(id);
    setOpenSection(openSection === id ? null : id);
    setTimeout(() => setClickedItem(null), 300);
  };

  return (
    <>
      {openSection === 1 && (
        <AboutSection onClose={() => setOpenSection(null)} />
      )}
      {openSection === 2 && (
        <ProjectsSection onClose={() => setOpenSection(null)} />
      )}
      {openSection === 3 && (
        <ContactSection onClose={() => setOpenSection(null)} />
      )}
      {openSection === 4 && (
        <CalculatorSection onClose={() => setOpenSection(null)} />
      )}

      <div className="fixed bottom-5 left-1/2 transform -translate-x-1/2 py-2 px-4 bg-slate-800/90 backdrop-blur-lg flex justify-center items-center gap-4 rounded-full border border-slate-700/50 shadow-lg shadow-slate-900/30">
        {menuItems.map((item) => (
          <div
            key={item.id}
            className="relative flex flex-col items-center group"
            onMouseEnter={() => setActiveItem(item.id)}
            onMouseLeave={() => setActiveItem(null)}
          >
            <div
              className={`absolute -top-9 px-2.5 py-1 bg-slate-700 text-slate-200 text-xs font-medium rounded-md transition-all duration-200 opacity-0 pointer-events-none 
              ${
                activeItem === item.id
                  ? "opacity-100 -translate-y-1"
                  : "translate-y-2"
              }`}
            >
              {item.label}
              <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1 w-2 h-2 bg-slate-700 rotate-45" />
            </div>

            <button
              onClick={() => handleClick(item.id)}
              className={`w-12 h-12 flex items-center justify-center rounded-full transition-all duration-300 ease-out-back ${
                openSection === item.id
                  ? "bg-blue-500/90 text-white scale-110 shadow-md shadow-blue-500/30"
                  : activeItem === item.id
                  ? "bg-slate-700/70 text-slate-200 scale-105"
                  : "bg-slate-700/50 text-slate-300 hover:bg-slate-700/60 scale-100"
              } ${clickedItem === item.id ? "animate-ping-once" : ""}`}
            >
              <span
                className={`transition-transform duration-300 ${
                  activeItem === item.id || openSection === item.id
                    ? "scale-110"
                    : "scale-100"
                }`}
              >
                {openSection === item.id ? <X size={20} /> : item.icon}
              </span>
            </button>
          </div>
        ))}
      </div>
    </>
  );
};

export default Menu;