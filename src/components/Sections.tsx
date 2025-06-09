"use client";
import Calculator from "@/feature/Calculator";
import About from "../feature/About";
import Contact from "../feature/Contact";
import Window from "./Window";

export const AboutSection = ({ onClose }: { onClose: () => void }) => (
  <Window title="About Me" onClose={onClose}>
    <About />
  </Window>
);

export const ProjectsSection = ({ onClose }: { onClose: () => void }) => (
  <Window title="My Projects" width="900px" onClose={onClose}>
    <div className="grid grid-cols-2 gap-4">
      {[1, 2, 3].map((project) => (
        <div key={project} className="bg-slate-700/50 p-4 rounded-lg">
          <h3 className="font-medium">Project {project}</h3>
          <p className="text-sm text-slate-400 mt-2">Description...</p>
        </div>
      ))}
    </div>
  </Window>
);

export const ContactSection = ({ onClose }: { onClose: () => void }) => (
  <Window title="Contact Me" onClose={onClose}>
    <Contact />
  </Window>
);

export const CalculatorSection = ({ onClose }: { onClose: () => void }) => (
  <Window title="Calculator" width="400px" onClose={onClose}>
    <Calculator />
  </Window>
);