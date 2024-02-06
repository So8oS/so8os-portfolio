/* eslint-disable @next/next/no-img-element */
import React from "react";
import Link from "next/link";

const Intro = () => {
  return (
    <div
      className="mb-10 flex flex-col-reverse items-center justify-center gap-16 md:mb-24 md:flex-row "
      data-aos="fade-up"
      data-aos-offset="500"
      data-aos-delay="50"
      data-aos-duration="1000"
      data-aos-easing=" ease-in-out"
      data-aos-mirror="true"
      data-aos-once="true"
      data-aos-anchor-placement="top-bottom"
    >
      <div className="flex flex-col ">
        <span className=" text-[1.5rem] md:text-[1.75rem]">
          {" "}
          Helloo, I&apos;m Ahmad{" "}
        </span>
        <div className="flex animate-pulse flex-col">
          <span className="text-6xl font-bold md:text-7xl">Full Stack</span>
          <span className="text-6xl font-bold md:text-7xl">Developer</span>
        </div>

        <Link href="/resume.pdf" download>
          <button
            className=" stripes font- dark:stripes-dark mt-6 h-14  w-full rounded-xl border
              border-darkBrown bg-darkYellow font-Poppins text-darkBrown
              shadow-2xl  transition-all duration-300 hover:scale-110 focus:outline-none active:scale-75
              dark:text-lightYellow md:w-40
              "
          >
            Resume
          </button>
        </Link>
      </div>
      <div
        className="  w-72 border-white md:w-[22rem] "
        style={{
          clipPath:
            "polygon(50% 0, 80% 10%, 100% 0, 100% 75%, 50% 100%, 0 75%, 0% 25%, 0 0, 20% 10%)",
        }}
      >
        <img className="" src="/pic.jpg" alt="ahmad" />
      </div>
    </div>
  );
};

export default Intro;
