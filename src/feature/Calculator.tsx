"use client";
import { Delete } from "lucide-react";
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
    } else if (value === "AC") {
      setInput("");
      setResult("");
    } else if (value === "remove") {
      setInput(input.slice(0, -1));
    } else if (value === "±") {
      if (input) {
        if (input.startsWith("-")) {
          setInput(input.slice(1));
        } else {
          setInput("-" + input);
        }
      }
    } else if (value === "%") {
      try {
        const calculated = (eval(input) / 100).toString();
        setResult(calculated);
      } catch {
        setResult("Error");
      }
    } else {
      setInput(input + value);
    }
  };

  const buttons = [
    "AC",
    "±",
    "%",
    "remove",
    "7",
    "8",
    "9",
    "/",
    "4",
    "5",
    "6",
    "*",
    "1",
    "2",
    "3",
    "-",
    "0",
    ".",
    "=",
    "+",
  ];

  return (
    <div className="w-full max-w-sm mx-auto bg-slate-800 rounded-xl">
      <div className="bg-slate-700 p-4 mb-4">
        <div className="text-right text-slate-400 text-sm h-6 overflow-x-auto">
          {input || "0"}
        </div>
        <div className="text-right text-white text-3xl font-semibold h-10">
          {result || "0"}
        </div>
      </div>
      <div className="grid grid-cols-4 gap-3 px-4">
        {buttons.map((btn) => (
          <button
            key={btn}
            onClick={() => handleButtonClick(btn)}
            className={`p-4 rounded-lg text-xl font-semibold transition-colors flex items-center justify-center ${
              btn === "="
                ? "bg-orange-500 text-white hover:bg-orange-600"
                : ["/", "*", "-", "+"].includes(btn)
                  ? "bg-orange-400 text-white hover:bg-orange-500"
                  : btn === "AC"
                    ? "bg-red-500 text-white hover:bg-red-600"
                    : ["±", "%"].includes(btn)
                      ? "bg-slate-500 text-white hover:bg-slate-600"
                      : "bg-slate-700 text-white hover:bg-slate-600"
            }`}
          >
            {btn === "remove" ? <Delete size={24} /> : btn}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Calculator;
