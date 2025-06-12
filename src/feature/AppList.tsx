"use client";
import React, { useState, useEffect } from "react";
import { Calculator, NotebookPen } from "lucide-react";
import { motion } from "framer-motion";
import { CalculatorSection, NotesSection } from "../components/Sections";
import Notes from "./Notes";

const AppList = () => {
  const [openCalculator, setOpenCalculator] = useState(false);
  const [openNotes, setOpenNotes] = useState(false);
  const [iconSize, setIconSize] = useState(30);

  useEffect(() => {
    const updateIconSize = () => {
      const width = window.innerWidth;
      if (width >= 1024) setIconSize(36);
      else if (width >= 768) setIconSize(32);
      else setIconSize(30);
    };

    updateIconSize();
    window.addEventListener("resize", updateIconSize);
    return () => window.removeEventListener("resize", updateIconSize);
  }, []);

  const apps = [
    {
      name: "Calculator",
      icon: <Calculator />,
      action: () => setOpenCalculator(true),
    },
    {
      name: "Notes",
      icon: <NotebookPen />,
      action: () => setOpenNotes(true),
    },
  ];

  return (
    <>
      {openCalculator && (
        <CalculatorSection onClose={() => setOpenCalculator(false)} />
      )}
      {openNotes && (
        <NotesSection onClose={() => setOpenNotes(false)} />
      )}

      <div
        className="
          fixed top-8 right-2 p-4 z-30
          grid
          grid-row-1 sm:grid-row-2 md:grid-row-3 lg:grid-row-4
          gap-6 w-max
        "
        aria-label="Desktop Application List"
      >
        {apps.map((app, index) => (
          <div key={index} className="flex flex-col items-center">
            <motion.button
              onClick={app.action}
              whileHover={{
                scale: 1.1,
                boxShadow: "0 8px 15px rgba(0,0,0,0.3)",
              }}
              whileTap={{ scale: 0.95 }}
              className="
                flex items-center justify-center
                w-16 h-16 rounded-lg
                bg-slate-700 hover:bg-slate-600
                text-white shadow-md hover:shadow-xl
                focus:outline-none focus:ring-2 focus:ring-blue-500
              "
              title={app.name}
              aria-label={app.name}
            >
              {React.cloneElement(app.icon, { size: iconSize })}
            </motion.button>
            <div className="mt-2 text-xs sm:text-sm font-light text-center text-white select-none">
              {app.name}
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default AppList;
