import React from "react";
import { ProjectCard } from "./ProjectCard";
import { projects } from "./data";

const ProjectList = () => {
  const [showMore, setShowMore] = React.useState({ num: 4, text: "Show More" });
  return (
    <div className="mb-12 flex flex-col items-center justify-center">
      <span className="text-6xl font-bold md:text-7xl">Projects</span>
      <div className="mt-16 flex flex-col items-center justify-center gap-5 md:flex-row md:flex-wrap">
        {projects
          .map((project) => (
            <ProjectCard
              key={project.id} // Key is provided here directly to ProjectCard
              name={project.title}
              image={project.image}
              description={project.description}
              status={project.status}
              link={project.link}
              github={project.github}
            />
          ))
          .reverse()
          .slice(0, showMore.num)}
      </div>
      <div
        onClick={() => {
          if (showMore.num === 4) {
            setShowMore({ num: projects.length, text: "Show Less" });
          } else {
            setShowMore({ num: 4, text: "Show More" });
          }
        }}
        className="mt-10 cursor-pointer font-Poppins font-semibold text-[#03045E] hover:text-gray-500 dark:text-[#FDECFB]"
      >
        {showMore.text}
      </div>
    </div>
  );
};

export default ProjectList;
