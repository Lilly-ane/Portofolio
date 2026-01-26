import React from "react";
import { projectDetails } from "../Details";

function Projects() {
  return (
    <main className="container mx-auto max-width pt-20 mb-20">
      <section>
        <h1 className="text-2xl md:text-4xl font-bold mb-12">Projects</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projectDetails.map((project, index) => (  // ✅ index ca key temporar
            <div key={index} className="bg-white dark:bg-slate-800 p-6 rounded-xl shadow-lg hover:shadow-xl transition-all">
              <img src={project.image} alt={project.title} className="w-full h-48 object-cover rounded-lg mb-4" />
              <h3 className="text-xl font-bold mb-2">{project.title}</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4 line-clamp-3">{project.description}</p>
              <div className="flex gap-3">
                <a href={project.githubLink} className="px-4 py-2 bg-slate-200 hover:bg-slate-300 dark:bg-slate-700 dark:hover:bg-slate-600 rounded-lg text-sm transition-colors">
                  GitHub
                </a>
                <a href={project.previewLink} className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg text-sm transition-colors">
                  Live Demo
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}

export default Projects;

