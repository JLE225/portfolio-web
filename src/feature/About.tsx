import React from "react";

const About = () => {
  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-6 text-white">
      <div className="flex flex-col sm:flex-row items-center gap-6 sm:gap-8 mb-12">
        <div className="flex-shrink-0">
          <div className="w-20 h-20 sm:w-28 sm:h-28 rounded-full bg-slate-600 overflow-hidden border-2 border-slate-600 shadow-lg">
            <img
              src="/images/FOTO.jpeg"
              alt="Jared Lewis"
              className="w-full h-full object-cover rounded-full"
            />
          </div>
        </div>

        <div className="flex flex-col justify-center text-center sm:text-left">
          <h1 className="text-3xl sm:text-4xl font-extrabold text-blue-400 leading-tight">
            Jared Lewis Ezekiel White
          </h1>
          <p className="mt-1 text-lg sm:text-xl text-slate-300 font-light tracking-wide">
            Full Stack & Mobile Developer
          </p>
        </div>
      </div>

      <div className="space-y-8">
        <section className="bg-slate-700/50 p-6 rounded-lg border border-slate-600 shadow-md hover:shadow-lg transition-shadow duration-300">
          <h2 className="text-xl sm:text-2xl font-semibold mb-3">About Me</h2>
          <p className="text-slate-300 leading-relaxed text-base sm:text-lg">
            Hello! I'm Jared, a passionate developer with over 4 years of
            experience crafting beautiful and functional digital experiences.
            I specialize in React, TypeScript, and modern web technologies, and
            I also have strong expertise in mobile development using React Native
            and Swift.
          </p>
        </section>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <section className="bg-slate-700/50 p-6 rounded-lg border border-slate-600 shadow-md hover:shadow-lg transition-shadow duration-300">
            <h3 className="font-semibold mb-3 text-lg sm:text-xl">Skills</h3>
            <ul className="space-y-4 text-base text-slate-300">
              <li>
                <strong>Frontend Development:</strong>
                <ul className="list-disc list-inside ml-4 space-y-1">
                  <li>React & Next.js</li>
                  <li>TypeScript & JavaScript</li>
                  <li>HTML, CSS, Tailwind</li>
                </ul>
              </li>
              <li>
                <strong>Backend Development:</strong>
                <ul className="list-disc list-inside ml-4 space-y-1">
                  <li>Node.js</li>
                  <li>PHP</li>
                  <li>Python</li>
                  <li>Java</li>
                </ul>
              </li>
              <li>
                <strong>Mobile Development:</strong>
                <ul className="list-disc list-inside ml-4 space-y-1">
                  <li>React Native</li>
                  <li>Swift (iOS)</li>
                </ul>
              </li>
              <li>
                <strong>Tools & Technologies:</strong>
                <ul className="list-disc list-inside ml-4 space-y-1">
                  <li>Git & GitHub</li>
                  <li>REST API, GraphQL</li>
                  <li>Firebase, Supabase</li>
                  <li>MySQL, MongoDB</li>
                </ul>
              </li>
            </ul>
          </section>

          <section className="bg-slate-700/50 p-6 rounded-lg border border-slate-600 shadow-md hover:shadow-lg transition-shadow duration-300">
            <h3 className="font-semibold mb-3 text-lg sm:text-xl">Experience</h3>
            <ul className="space-y-4 text-base text-slate-300">
              <li>
                <div className="font-semibold">Fullstack Developer</div>
                <div className="text-sm sm:text-base text-slate-400">
                  Roleplay Game Server • 2020 – 2022
                </div>
              </li>
              <li>
                <div className="font-semibold">Fullstack Developer</div>
                <div className="text-sm sm:text-base text-slate-400">
                  Buy and Sell Forum • 2022 – 2023
                </div>
              </li>
            </ul>
          </section>
        </div>
      </div>
    </div>
  );
};

export default About;
