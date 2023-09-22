/* eslint-disable @typescript-eslint/ban-ts-comment */
import React from "react";
import { useRef } from "react";
import emailjs from "@emailjs/browser";
import { toast } from "react-toastify";

export const Contactus = () => {
  const form = useRef();
  const notify = () =>
    toast("Your message has been sent", {
      position: "top-center",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    emailjs
      // @ts-ignore
      .sendForm("gmail", "template_3nth5o9", form.current, "gCcVEYirrfV4fhGRt")
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    // @ts-ignore
    e.target.reset();
    notify();
  };

  return (
    <div
      className=" mt-10 mb-24 flex h-full w-80 flex-col items-center justify-center md:w-[45.9375rem] "
      data-aos="fade-up"
      data-aos-offset="200"
      data-aos-delay="50"
      data-aos-duration="1000"
      data-aos-easing=" ease-in-out"
      data-aos-mirror="true"
      data-aos-once="false"
      data-aos-anchor-placement="top-bottom"
    >
      <span className=" mb-10 text-5xl font-bold ">Contact me</span>
      {/* @ts-ignore */}
      <form
        className="flex flex-col  items-center gap-12 "
        // @ts-ignore
        ref={form}
        onSubmit={sendEmail}
      >
        <input
          className="  h-[3.375rem] w-[18rem] rounded-[0.625rem]  border border-gray-600 p-2 dark:bg-[#3B3B3B] dark:text-white md:w-[27.25rem] "
          type="text"
          name="user_name"
          placeholder="Name"
          required
        />
        <input
          className=" h-[3.375rem] w-[18rem] rounded-[0.625rem] border border-gray-600 p-2 dark:bg-[#3B3B3B]  dark:text-white md:w-[27.25rem]  "
          type="email"
          name="user_email"
          placeholder="Email"
          required
        />
        <textarea
          className="h-[13.25rem] w-[18rem] resize-none items-start rounded-[0.625rem] border  border-gray-600
                p-2
                dark:bg-[#3B3B3B]
                dark:text-white
                md:w-[27.25rem]"
          name="message"
          placeholder="Message"
          required
        />

        <input
          className="stripes font- dark:stripes-dark h-10 w-36 cursor-pointer rounded-xl border border-darkBrown bg-darkYellow font-Poppins font-semibold text-darkBrown shadow-2xl transition-all duration-300 
            hover:scale-110 active:scale-75 dark:text-lightYellow
            "
          type="submit"
          value="Send"
        />
      </form>
    </div>
  );
};
