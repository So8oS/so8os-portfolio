/* eslint-disable @next/next/no-img-element */
import React from "react";
import { AiFillGithub } from "react-icons/ai";

interface projectCardProps {
  name: string;
  image: string;
  description: string;
  status: string;
  link: string;
  github: string;
}

export const ProjectCard = (props: projectCardProps) => {
  return (
    <div
      className="flex h-[25rem]  w-[20rem] flex-col items-center  justify-center gap-3 rounded-md transition-all duration-500 md:w-[23rem] md:hover:scale-110"
      data-aos="fade-up"
      data-aos-offset="200"
      data-aos-delay="50"
      data-aos-duration="1100"
      data-aos-easing="ease-in-out"
      data-aos-mirror="false"
      data-aos-once="false"
      data-aos-anchor-placement="top-bottom"
    >
      <div>
        <img className="h-48 w-80 rounded-md " src={props.image} alt="" />
      </div>

      <span className="">{`Status: ${props.status}`}</span>

      <div className="mb-12 flex h-10 flex-col items-center text-center">
        <span className="text-lg font-bold ">{props.name}</span>
        <span className="w-[20.2rem] ">{props.description}</span>
      </div>

      <div className="flex items-center justify-center gap-2">
        {props.github && (
          <a
            className="hover:text-gray-500 "
            href={props.github}
            target="_blank"
            rel="noreferrer"
          >
            <AiFillGithub className="cursor-pointer  " />
          </a>
        )}
        {props.github && props.link && <span>|</span>}
        {props.link && (
          <a className="" href={props.link} target="_blank" rel="noreferrer">
            <span className="font-extrabold hover:text-gray-500">browse</span>
          </a>
        )}
      </div>
    </div>
  );
};
