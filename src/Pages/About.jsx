import React from "react";
import { workDetails, eduDetails, personalDetails } from "../Details";

const About = () => {
  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 dark:from-slate-900 dark:to-slate-800 pt-32 px-6 md:px-12 lg:px-24">
      {/* Hero/About Intro */}
      <section className="max-w-4xl mx-auto text-center mb-24 py-20">
        <img 
          src={personalDetails.img} 
          alt={personalDetails.name}
          className="w-48 h-48 md:w-64 md:h-64 mx-auto rounded-3xl shadow-2xl mb-8 border-8 border-white/50 dark:border-slate-800/50 hover:scale-105 transition-all duration-500"
        />
        <h1 className="text-5xl md:text-7xl font-black bg-gradient-to-r from-gray-900 to-slate-700 dark:from-blue-400 dark:to-purple-400 bg-clip-text text-transparent mb-6">
          {personalDetails.name}
        </h1>
        <p className="text-xl md:text-2xl text-slate-600 dark:text-slate-300 max-w-2xl mx-auto leading-relaxed mb-12">
          {personalDetails.about}
        </p>
        <p className="text-2xl md:text-3xl font-bold text-emerald-600 dark:text-emerald-400">
        </p>
      </section>

      {/* Stats Row */}
      <section className="max-w-6xl mx-auto mb-24 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
        <div className="p-8 bg-white/70 dark:bg-slate-800/70 backdrop-blur-xl rounded-3xl shadow-xl border border-white/50 dark:border-slate-700/50 hover:shadow-2xl hover:-translate-y-2 transition-all duration-500">
          <div className="text-4xl md:text-5xl font-black text-emerald-600 mb-4">6+</div>
          <div className="text-lg font-semibold text-slate-700 dark:text-slate-300">Projects</div>
        </div>
        <div className="p-8 bg-white/70 dark:bg-slate-800/70 backdrop-blur-xl rounded-3xl shadow-xl border border-white/50 dark:border-slate-700/50 hover:shadow-2xl hover:-translate-y-2 transition-all duration-500">
          <div className="text-4xl md:text-5xl font-black text-blue-600 mb-4">3+</div>
          <div className="text-lg font-semibold text-slate-700 dark:text-slate-300">Bootcamps</div>
        </div>
        <div className="p-8 bg-white/70 dark:bg-slate-800/70 backdrop-blur-xl rounded-3xl shadow-xl border border-white/50 dark:border-slate-700/50 hover:shadow-2xl hover:-translate-y-2 transition-all duration-500">
          <div className="text-4xl md:text-5xl font-black text-purple-600 mb-4">React</div>
          <div className="text-lg font-semibold text-slate-700 dark:text-slate-300">Expertise</div>
        </div>
        <div className="p-8 bg-white/70 dark:bg-slate-800/70 backdrop-blur-xl rounded-3xl shadow-xl border border-white/50 dark:border-slate-700/50 hover:shadow-2xl hover:-translate-y-2 transition-all duration-500">
          <div className="text-4xl md:text-5xl font-black text-orange-600 mb-4">UK</div>
          <div className="text-lg font-semibold text-slate-700 dark:text-slate-300">Based</div>
        </div>
      </section>

      {/* Work Experience */}
      <section className="max-w-6xl mx-auto mb-32">
        <h2 className="text-4xl md:text-5xl font-black text-center text-dark-heading dark:text-light-heading mb-20 bg-gradient-to-r from-gray-900 to-slate-700 dark:from-blue-400 dark:to-purple-400 bg-clip-text text-transparent">
          Work Experience
        </h2>
        <div className="grid md:grid-cols-2 gap-8">
          {workDetails.map((work, index) => (
            <div 
              key={index} 
              className="group relative bg-white dark:bg-slate-800 backdrop-blur-xl p-10 rounded-3xl shadow-2xl border border-slate-200/50 dark:border-slate-700/50 hover:shadow-3xl hover:-translate-y-4 transition-all duration-700 overflow-hidden"
            >
              {/* Badge */}
              <span className="absolute -top-4 -right-4 px-6 py-3 bg-emerald-500 text-white text-lg font-bold rounded-2xl shadow-lg transform rotate-3 group-hover:rotate-0 transition-all duration-500">
                {work.Type}
              </span>
              
              <h3 className="text-2xl md:text-3xl font-black text-dark-heading dark:text-light-heading mb-6 group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors">
                {work.Position}
              </h3>
              <div className="space-y-2 mb-8">
                <p className="text-xl font-semibold text-slate-700 dark:text-slate-200">{work.Company}</p>
                <p className="text-lg text-slate-500 dark:text-slate-400">{work.Location}</p>
              </div>
              <p className="text-2xl font-bold text-slate-900 dark:text-slate-100 absolute bottom-6 left-10 group-hover:text-emerald-600 transition-colors">
                {work.Duration}
              </p>
              
              {/* Hover Effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/0 via-emerald-500/20 to-emerald-500/0 opacity-0 group-hover:opacity-100 transition-all duration-700" />
            </div>
          ))}
        </div>
      </section>

      {/* Education */}
      <section className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-black text-center text-dark-heading dark:text-light-heading mb-20 bg-gradient-to-r from-gray-900 to-slate-700 dark:from-blue-400 dark:to-purple-400 bg-clip-text text-transparent">
          Education
        </h2>
        <div className="grid md:grid-cols-2 gap-8">
          {eduDetails.map((edu, index) => (
            <div 
              key={index}
              className="group relative bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-slate-800 dark:to-slate-900 backdrop-blur-xl p-10 rounded-3xl shadow-2xl border-2 border-blue-100/50 dark:border-blue-900/50 hover:shadow-3xl hover:-translate-y-4 hover:border-blue-200 dark:hover:border-blue-800 transition-all duration-700 overflow-hidden"
            >
              {/* Badge */}
              <span className="absolute -top-4 -right-4 px-6 py-3 bg-blue-500 text-white text-lg font-bold rounded-2xl shadow-lg transform rotate-3 group-hover:rotate-0 transition-all duration-500">
                {edu.Type}
              </span>
              
              <h3 className="text-2xl md:text-3xl font-black text-dark-heading dark:text-light-heading mb-6 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                {edu.Position}
              </h3>
              <div className="space-y-2 mb-8">
                <p className="text-xl font-semibold text-slate-700 dark:text-slate-200">{edu.Company}</p>
                <p className="text-lg text-slate-500 dark:text-slate-400">{edu.Location}</p>
              </div>
              <p className="text-2xl font-bold text-slate-900 dark:text-slate-100 absolute bottom-6 left-10 group-hover:text-blue-600 transition-colors">
                {edu.Duration}
              </p>
              
              {/* Hover Effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/0 via-blue-500/20 to-blue-500/0 opacity-0 group-hover:opacity-100 transition-all duration-700" />
            </div>
          ))}
        </div>
      </section>
    </main>
  );
};

export default About;
