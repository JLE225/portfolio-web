"use client";
import Calculator from "@/feature/Calculator";
import About from "../feature/About";
import Contact from "../feature/Contact";
import Window from "./Window";
import Notes from "@/feature/Notes";
import Projects from "@/feature/Projects";

export const AboutSection = ({ onClose }: { onClose: () => void }) => (
  <Window title="About" onClose={onClose}>
    <About />
  </Window>
);

export const ProjectsSection = ({ onClose }: { onClose: () => void }) => (
  <Window title="Projects" onClose={onClose}>
    <Projects />
  </Window>
);

export const ContactSection = ({ onClose }: { onClose: () => void }) => (
  <Window title="Contact" onClose={onClose}>
    <Contact />
  </Window>
);

export const CalculatorSection = ({ onClose }: { onClose: () => void }) => (
  <Window
    title="Calculator"
    width="300px"
    height="515px"
    onClose={onClose}
    disableFullscreen
  >
    <Calculator />
  </Window>
);

export const NotesSection = ({ onClose }: { onClose: () => void }) => (
  <Window
    title="Notes"
    onClose={onClose}
    key={`notes-${Date.now()}`}
    headerClassName="bg-gradient-to-b from-yellow-500 to-yellow-600 "
  >
    <Notes />
  </Window>
);
