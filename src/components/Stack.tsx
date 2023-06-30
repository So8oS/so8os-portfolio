/* eslint-disable @next/next/no-img-element */
import React from "react";

const Stack = () => {
  return (
    <div
      className="mb-16 flex flex-col items-center justify-center"
      data-aos="fade-up"
      data-aos-offset="200"
      data-aos-delay="50"
      data-aos-duration="1000"
      data-aos-easing=" ease-in-out"
      data-aos-mirror="true"
      data-aos-once="false"
      data-aos-anchor-placement="top-bottom"
    >
      <span className="text-6xl font-bold md:text-7xl ">Tech</span>
      {/* <div className='mt-16 grid grid-cols-2  justify-center items-center  gap-2 
        md:flex-row md:grid-cols-4 content-center' > */}
      <div
        className="md: mt-16 flex   flex-wrap items-center  justify-center 
        gap-2 "
      >
        <img className=" w-32 md:w-44" src="/Icons/react.svg" alt="React JS" />
        <img className=" w-32 md:w-44" src="/Icons/next.svg" alt="Next JS" />
        <img className=" w-32 md:w-44" src="/Icons/css.svg" alt="CSS" />
        <img
          className=" w-32 md:w-44"
          src="/Icons/tailwind.svg"
          alt="Tailwind CSS"
        />
        <img
          className=" w-32 md:w-44"
          src="/Icons/javascript.svg"
          alt="Javascript"
        />
        <img
          className=" w-32 md:w-44"
          src="/Icons/typescript.svg"
          alt="Typescript"
        />
        <img className=" w-32 md:w-44" src="/Icons/prisma.svg" alt="prisma" />
        <img className=" w-32 md:w-44" src="/Icons/vercel.svg" alt="vercel" />
        <img className=" w-32 md:w-44" src="/Icons/csharp.svg" alt="C#" />
      </div>
    </div>
  );
};

export default Stack;
