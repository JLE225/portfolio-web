import React from "react";

const About = () => {
  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-6 text-white">
      <div className="flex flex-col sm:flex-row items-center sm:items-center gap-6 sm:gap-8 mb-12">
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
          <h1 className="text-3xl sm:text-4xl font-extrabold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent leading-tight">
            Jared Lewis
          </h1>
          <p className="mt-1 text-lg sm:text-xl text-slate-300 font-light tracking-wide">
            Front End Developer & Back End Enthusiast
          </p>
        </div>
      </div>

      {/* About Me Section */}
      <div className="space-y-8">
        <section className="bg-slate-700/50 p-6 rounded-lg border border-slate-600 shadow-md hover:shadow-lg transition-shadow duration-300">
          <h2 className="text-xl sm:text-2xl font-semibold mb-3">About Me</h2>
          <p className="text-slate-300 leading-relaxed text-base sm:text-lg">
            Hello! I'm Jared, a passionate developer with 4+ years of experience
            creating beautiful, functional digital experiences. I specialize in
            React, TypeScript, and modern web technologies that bring ideas to
            life.
          </p>
        </section>

        {/* Skills & Experience Side by Side */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <section className="bg-slate-700/50 p-6 rounded-lg border border-slate-600 shadow-md hover:shadow-lg transition-shadow duration-300">
            <h3 className="font-semibold mb-3 text-lg sm:text-xl">Skills</h3>
            <ul className="space-y-2 text-base text-slate-300 list-disc list-inside">
              <li>React & Next.js</li>
              <li>TypeScript/JavaScript</li>
              <li>Node.js</li>
              <li>PHP</li>
              <li>Python</li>
              <li>Java</li>
            </ul>
          </section>

          <section className="bg-slate-700/50 p-6 rounded-lg border border-slate-600 shadow-md hover:shadow-lg transition-shadow duration-300">
            <h3 className="font-semibold mb-3 text-lg sm:text-xl">
              Experience
            </h3>
            <ul className="space-y-4 text-base text-slate-300">
              <li>
                <div className="font-semibold">Fullstack Developer</div>
                <div className="text-sm sm:text-base text-slate-400">
                  {" "}
                  Roleplay Game Server • 2020-2022
                </div>
              </li>
              <li>
                <div className="font-semibold">Fullstack Developer</div>
                <div className="text-sm sm:text-base text-slate-400">
                  Buy And Sell Forum • 2022 - 2023
                </div>
              </li>
            </ul>
          </section>
        </div>

        {/*
        <section className="bg-slate-700/50 p-6 rounded-lg border border-slate-600 shadow-md hover:shadow-lg transition-shadow duration-300">
          <h3 className="font-semibold mb-3 text-lg sm:text-xl">When I'm Not Coding</h3>
          <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
            I enjoy photography, hiking, and contributing to open source projects.
            I believe in continuous learning and sharing knowledge with the community.
          </p>
        </section> */}
      </div>
    </div>
  );
};

export default About;
