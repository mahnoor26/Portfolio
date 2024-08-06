import React from "react";
import { projects } from "../constants";

function Projects() {
  return (
    <div
      className="bg-cyan-900 text-white py-9 lg:py-16 px-8 lg:px-16"
      id="project"
    >
      <div className="mx-auto mb-14 text-center">
        <h2 className="text-4xl sm:text-5xl font-bold mt-2">Projects</h2>
      </div>
      <div className=" grid lg:grid-cols-2 xl:grid-cols-3 lg:gap-8 lg:px-16">
        {projects?.map((project, index) => (
          <div
            key={index}
            className="mb-10 p-3 flex flex-col justify-center border-2 drop-shadow-xl rounded-xl bg-slate-200 text-gray-950"
          >
            <h3 className="text-2xl font-semibold my-2">{project?.title}</h3>
            <p>{project?.description}</p>
            <div className="flex flex-wrap">
              {project?.technologies.map((tech, techIndex) => (
                <span
                  key={techIndex}
                  className="mr-2 mt-3 bg-cyan-800 text-slate-200 rounded-full px-3 py-1 text-sm font-medium"
                >
                  {tech}
                </span>
              ))}
            </div>
            <div className="flex justify-end mt-6 mb-2">
              <a
                href={project.git}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white text-cyan-900 font-semibold py-2 px-5 rounded-full drop-shadow-lg"
              >
                View on Github
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Projects;
