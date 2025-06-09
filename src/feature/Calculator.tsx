"use client";
import React, { useState } from "react";

const Calculator = () => {
  const [input, setInput] = useState("");
  const [result, setResult] = useState("");

  const handleButtonClick = (value: string) => {
    if (value === "=") {
      try {
        setResult(eval(input).toString());
      } catch (error) {
        setResult("Error");
      }
    } else if (value === "C") {
      setInput("");
      setResult("");
    } else if (value === "⌫") {
      setInput(input.slice(0, -1));
    } else {
      setInput(input + value);
    }
  };

  const buttons = [
    "7", "8", "9", "/",
    "4", "5", "6", "*",
    "1", "2", "3", "-",
    "0", ".", "=", "+",
    "C", "⌫"
  ];

  return (
    <div className="w-full max-w-md mx-auto p-4 bg-slate-800 rounded-lg">
      <div className="bg-slate-700 p-4 rounded mb-4">
        <div className="text-right text-slate-400 text-sm h-6">{input || "0"}</div>
        <div className="text-right text-white text-2xl font-medium h-8">
          {result || "0"}
        </div>
      </div>
      <div className="grid grid-cols-4 gap-3">
        {buttons.map((btn) => (
          <button
            key={btn}
            onClick={() => handleButtonClick(btn)}
            className={`p-3 rounded-lg text-lg font-medium transition-colors ${
              btn === "="
                ? "bg-blue-500 hover:bg-blue-600"
                : btn === "C" || btn === "⌫"
                ? "bg-red-500/90 hover:bg-red-600/90"
                : "bg-slate-700 hover:bg-slate-600"
            }`}
          >
            {btn}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Calculator;