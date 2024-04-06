import React from "react";
import { projectList } from "../constants/constants";
import ProjectCard from "./ProjectCard";

const Projects = () => {
  return (
    <section id="Project">
      <h1 className="md:text-5xl my-10 lg:px-10">Projects Completed So Far</h1>

      <div className="grid grid-cols md:grid-cols-2 lg:grid-cols-4 gap-3 md:gap-6 px-4 md:px-6 lg:px-10">
        {projectList.map((project) => (
          <ProjectCard
            key={project.gitLink}
            icon={project.icon}
            name={project.name}
            description={project.deiscription}
            gitLink={project.gitLink}
            tech={project.tech}
          />
        ))}
      </div>
    </section>
  );
};

export default Projects;
