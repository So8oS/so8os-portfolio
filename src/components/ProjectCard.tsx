/* eslint-disable @next/next/no-img-element */
import React from 'react'
import { AiFillGithub } from 'react-icons/ai';

interface projectCardProps{
  name: string;
  image: string;
  description: string;
  status: string;
  link : string;
  github : string;
}



export const ProjectCard = ( props:projectCardProps) => {
  return (
    <div className=' flex flex-col  w-[20rem] justify-center items-center  h-[25rem] rounded-md gap-3 
     md:w-[23rem]
     md:hover:scale-110 transition-all duration-500 
     '
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
            <img className='rounded-md w-80 h-48' src={props.image} alt="" />
        </div>

        <span className=''>{`Status: ${props.status}`}</span>

        <div className='flex flex-col items-center text-center h-10 mb-12'>
            <span className='font-bold text-lg '>{props.name}</span>
            <span className='w-[20.2rem] '>{props.description}</span>
        </div>

        <div className='flex justify-center items-center gap-2'>
          <a className='hover:text-gray-500 ' href={props.github} target='_blank' rel="noreferrer"><AiFillGithub className='cursor-pointer  ' /></a>
          <span>|</span>
          <a className='' href={props.link} target='_blank' rel="noreferrer" >
          <span className='font-extrabold hover:text-gray-500' >browse</span>
        </a>
        </div>
        
    </div>
  )
}
