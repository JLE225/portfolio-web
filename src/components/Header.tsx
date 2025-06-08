import React from "react";
import Clock from "./Clock";

const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-slate-800/90 backdrop-blur-lg border-b border-slate-700/50">
      <div className=" mx-auto flex items-center justify-between h-6 px-4 select-none">
        <h1 className="text-white text-sm font-thin tracking-wide">
          JaredDev
        </h1>
        <div>
          <Clock />
        </div>
      </div>
    </header>
  );
};

export default Header;
