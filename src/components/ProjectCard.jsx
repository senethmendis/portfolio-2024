import React from "react";
import { FaLink } from "react-icons/fa6";

const ProjectCard = ({ icon, name, description, gitLink, tech, invert }) => {
  return (
    <div className="flex flex-col  justify-between items-start w-full h-auto border border-white/15 rounded-lg bg-black/15 hover:scale-105 transition-all duration-50 backdrop-blur-3xl px-4 py-3 ">
      <div className="flex justify-between items-center">
        <div className="w-[40px] h-[40px] m-2  ">
          {/* invert-img */}
          <img
            src={icon}
            className={`${invert ? "invert-img" : "bg-contain rounded-full"}  `}
          />
        </div>
        <h1 className="md:text-xl capitalize">{name}</h1>
      </div>
      <p className="text-start">
        {/* {description.slice(0, 145) + " . . ."} */}
        {description}
        <span>more</span>
      </p>
      <div className="my-2">
        <strong className="text-blue-500"> {tech + " "}</strong>
      </div>
      <a
        href={gitLink}
        target="_blank"
        className="my-2 flex gap-4 items-center hover:bg-slate-950/15 border border-white/15 rounded-md backdrop-blur-lg px-2 hover:rounded-md"
      >
        <FaLink /> Go to github
      </a>
    </div>
  );
};

export default ProjectCard;
