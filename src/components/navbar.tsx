import React from 'react'
import {AiOutlineInstagram, AiOutlineLinkedin, AiFillGithub} from 'react-icons/ai'
import { MdDarkMode } from "react-icons/md";
import { BsFillSunFill } from "react-icons/bs";

interface NavbarProps{
  handleThemeSwitch: () => void;
  theme: string; 
}

const Navbar = (props:NavbarProps) => {
  return (
    <div className='flex justify-between font-Poppins w-full mb-12  md:mb-24'>
        <span className='font-semibold' >Ahmad Othman</span>
        {
          props.theme === 'dark' ?
          <BsFillSunFill className=' cursor-pointer w-6 h-6 text-darkBlue  dark:text-[#FDECFB]' onClick={props.handleThemeSwitch} />
          :
          <MdDarkMode className='cursor-pointer w-6 h-6 text-darkBlue  dark:text-[#FDECFB]' onClick={props.handleThemeSwitch} />
          
        }
        
        <div className='flex items-center gap-2'>
            <a href="https://github.com/So8oS" className='text-darkBlue dark:text-[#FDECFB] hover:text-gray-500' rel="noreferrer" target="_blank" ><AiFillGithub  className=' w-6 h-6' /></a>
            <a href="https://www.instagram.com/don_so8os/" className='text-darkBlue dark:text-[#FDECFB] hover:text-gray-500' rel="noreferrer" target="_blank"><AiOutlineInstagram className=' w-6 h-6' /></a>
            <a href="https://www.linkedin.com/in/ahmad-othman-422117172/" className='text-darkBlue dark:text-[#FDECFB] hover:text-gray-500' rel="noreferrer" target="_blank"><AiOutlineLinkedin className=' w-6 h-6'/></a>
        </div>


        

    </div>
  )
}

export default Navbar