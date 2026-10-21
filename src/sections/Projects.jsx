import React from 'react';
import { myProjects } from '../constants/index.js';

const Projects = () => {
  return (
    <section className="c-space my-20" id="projects">
      <p className="head-text text-2xl text-center font-bold mb-10">My Projects</p>
      <div className="grid md:grid-cols-2 grid-cols-1 gap-5 h-full">
        {myProjects.map((project, index) => (
          <div key={index} className="grid-container relative bg-black-200 rounded-lg p-6 shadow-lg">
            {/* Project Spotlight Background */}
            <img src={project.spotlight} alt="Project spotlight" className="absolute inset-0 w-full h-full object-cover opacity-30" />

            {/* Logo */}
            <div className="relative p-3 w-20 h-20 backdrop-filter backdrop-blur-lg rounded-lg z-10" style={project.logoStyle}>
              <img className="w-full h-full mx-auto" src={project.logo} alt="Project logo" />
            </div>

            {/* Project Content */}
            <div className="relative z-10 text-white">
              <p className="grid-headtext text-xl font-bold">{project.title}</p>
              <p className="grid-subtext">{project.desc}</p>

              {/* View source / Archived project Logic */}
              <div className="flex items-center my-3 py-4 gap-x-2">
                {project.isLive ? (
                  <a href={project.href} className="text-grey-400 hover:text-white transition duration-300" target="_blank" rel="noopener noreferrer">
                    View source
                  </a>
                ) : (
                  <p className="text-gray-400">Archived project</p>
                )}
                {project.isLive && <img src="/assets/arrow-up.png" alt="arrow" className="w-3 h-3" />}
              </div>

              {/* Tags */}
              <div className="flex space-x-2">
                {project.tags.map(tag => (
                  <img key={tag.id} src={tag.path} alt={tag.name} className="w-6 h-6" />
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
