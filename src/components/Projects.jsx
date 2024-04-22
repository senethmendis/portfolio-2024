import { useState } from "react";
import { projectList } from "../constants/constants";
import ProjectCard from "./ProjectCard";
import { BiSearchAlt } from "react-icons/bi";
import { ScrollParallax } from "react-just-parallax";

const Projects = () => {
  const [search, setSearch] = useState("");

  return (
    <section id="Project">
      <ScrollParallax>
        <h1 className="  text-4xl md:text-5xl lg:text-7xl my-5 md:my-10 lg:px-10 lg:py-10 text-center py-3">
          Project&apos;s <br /> completed so far
        </h1>
      </ScrollParallax>
      <div className="w-full flex justify-center pb-10 ">
        <form
          action=""
          className=" h-full flex  items-center bg-blue-600 rounded-lg"
        >
          <input
            type="search"
            className="h-10 w-[250px] px-3 rounded-lg text-black font-semibold capitalize"
            placeholder="Search Here...."
            onChange={(e) => setSearch(e.target.value)}
          />
          <button type="submit" className="h-full bg-blue-600 rounded-lg px-2">
            <BiSearchAlt size={40} className="py-1" />
          </button>
        </form>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3 md:gap-6 px-4 md:px-6 lg:px-10">
        {projectList
          .filter((project) => {
            return search.toLowerCase() === ""
              ? project
              : project.name.toLowerCase().includes(search);
          })
          .map((project) => (
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
