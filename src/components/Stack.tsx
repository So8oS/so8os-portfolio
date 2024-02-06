/* eslint-disable @next/next/no-img-element */
import React from "react";
import { techStack } from "./data";
const Stack = () => {
  return (
    <div
      className="mb-16 flex flex-col items-center justify-center"
      data-aos="fade-up"
      data-aos-offset="200"
      data-aos-delay="50"
      data-aos-duration="1000"
      data-aos-easing="ease-in-out"
      data-aos-mirror="true"
      data-aos-once="false"
      data-aos-anchor-placement="top-bottom"
    >
      <span className="text-6xl font-bold md:text-7xl">Tech</span>
      <div className="mt-16 flex flex-wrap items-center justify-center gap-2">
        {techStack?.map((tech, index) => (
          <img
            key={index}
            className="w-32 md:w-44"
            src={tech.src}
            alt={tech.name}
          />
        ))}
      </div>
    </div>
  );
};

export default Stack;
