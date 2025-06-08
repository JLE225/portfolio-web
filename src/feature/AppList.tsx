"use client";
import React from "react";
import { Calculator, Gamepad, Cpu } from "lucide-react";
import { motion } from "framer-motion";

const apps = [
  {
    name: "Calculator",
    icon: <Calculator size={32} />,
    action: () => alert("Open Calculator"),
  },
  // {
  //   name: "Tebak Angka",
  //   icon: <Gamepad size={32} />,
  //   action: () => alert("Open Tebak Angka Game"),
  // },
  // {
  //   name: "Snake Game",
  //   icon: <Cpu size={32} />,
  //   action: () => alert("Open Snake Game"),
  // },
];

const AppList = () => {
  return (
    <div
      className="
        fixed top-8 left-2 p-4
        grid
        grid-cols-1
        sm:grid-cols-2
        md:grid-cols-3
        lg:grid-cols-4
        gap-6
        w-max
      "
      aria-label="Desktop Application List"
    >
      {apps.map((app, index) => (
        <div
          key={index}
          className="flex flex-col items-center"
        >
          <motion.button
            onClick={app.action}
            whileHover={{ scale: 1.1, boxShadow: "0 8px 15px rgba(0,0,0,0.3)" }}
            whileTap={{ scale: 0.95 }}
            className="
              flex items-center justify-center
              w-16 h-16
              rounded-lg
              bg-slate-700 hover:bg-slate-600
              text-white
              shadow-md hover:shadow-xl
              focus:outline-none focus:ring-2 focus:ring-blue-500
            "
            title={app.name}
            aria-label={app.name}
          >
            {React.cloneElement(app.icon, {
              size: window.innerWidth >= 768 ? (window.innerWidth >= 1024 ? 40 : 36) : 32,
            })}
          </motion.button>
          <div
            className="
              mt-2
              text-xs
              sm:text-sm
              font-light
              text-center
              text-white
              select-none
            "
          >
            {app.name}
          </div>
        </div>
      ))}
    </div>
  );
};

export default AppList;
