import { projectList } from "../constants/constants";
import ProjectCard from "./ProjectCard";

const Projects = () => {
  return (
    <section id="Project">
      <h1 className="  text-4xl md:text-5xl lg:text-7xl my-5 md:my-10 lg:px-10 lg:py-10 text-center py-3">
        Project&apos;s <br /> completed so far
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3 md:gap-6 px-4 md:px-6 lg:px-10">
        {projectList.map((project) => (
          <ProjectCard
            key={project.gitLink}
            icon={project.icon}
            name={project.name}
            description={project.deiscription}
            gitLink={project.gitLink}
            tech={project.tech}
            invert={project.invert_img}
          />
        ))}
      </div>
    </section>
  );
};

export default Projects;
