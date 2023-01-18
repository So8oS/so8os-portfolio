import React from 'react'
import { useRef } from 'react';
import emailjs from '@emailjs/browser';


export const Contactus = () => {
    const form = useRef();
    const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      // @ts-ignore
      emailjs.sendForm('gmail', 'template_3nth5o9', form.current, 'gCcVEYirrfV4fhGRt')
        .then((result) => {
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        });
        // @ts-ignore
        e.target.reset();
        alert("the email has been sent");
    };
  
    return (
     <div className=" flex flex-col justify-center items-center w-80 h-full md:w-[45.9375rem] mt-10 mb-24 "
     data-aos="fade-up"
     data-aos-offset="200"
     data-aos-delay="50"
     data-aos-duration="1000"
     data-aos-easing=" ease-in-out"
     data-aos-mirror="true"
     data-aos-once="false"
     data-aos-anchor-placement="top-bottom"
     >
        <span  className=" text-5xl font-bold mb-10 ">Contact me</span>
         {/* @ts-ignore */}
        <form className="flex flex-col  items-center gap-12 " ref={form} onSubmit={sendEmail}>
            
                <input className="border border-gray-600 rounded-[0.625rem]  w-[18rem] h-[3.375rem] md:w-[27.25rem] p-2 dark:bg-[#3B3B3B] " type="text" name="user_name" placeholder='Name' required />
                <input className=" border border-gray-600 rounded-[0.625rem] w-[18rem] h-[3.375rem] md:w-[27.25rem] p-2  dark:bg-[#3B3B3B] " type="email" name="user_email" placeholder='Email' required />
                <textarea className="border border-gray-600 items-start h-[13.25rem] rounded-[0.625rem] w-[18rem]  p-2
                md:w-[27.25rem]
                dark:bg-[#3B3B3B]
                resize-none"
                name="message" placeholder='Message' required />
            
            <input className="w-36 h-10 font-Poppins font-semibold bg-darkYellow stripes border hover:scale-110 transition-all duration-300 active:scale-75 border-darkBrown text-darkBrown font- shadow-2xl rounded-xl 
            dark:stripes-dark dark:text-lightYellow
            " 
            type="submit" 
            value="Send" />
        </form>
     </div>   
    );
  };