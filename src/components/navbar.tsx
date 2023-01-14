import React from 'react'
import {AiOutlineInstagram, AiOutlineLinkedin, AiFillGithub} from 'react-icons/ai'
import { MdDarkMode } from "react-icons/md";



const Navbar = (props) => {
  return (
    <div className='flex justify-between font-Poppins w-full mb-12  md:mb-24'>
        <span className='font-semibold' >Ahmad Othman</span>
        <MdDarkMode className='w-6 h-6 text-darkBlue   dark:text-[#FDECFB] ' onClick={props.handleThemeSwitch}  />
        <div className='flex items-center gap-2'>
            <a href="https://github.com/So8oS" className='text-darkBlue dark:text-[#FDECFB]' rel="noreferrer" target="_blank" ><AiFillGithub  className=' w-6 h-6' /></a>
            <a href="https://www.instagram.com/don_so8os/" className='text-darkBlue dark:text-[#FDECFB] ' rel="noreferrer" target="_blank"><AiOutlineInstagram className=' w-6 h-6' /></a>
            <a href="https://www.linkedin.com/in/ahmad-othman-422117172/" className='text-darkBlue dark:text-[#FDECFB] ' rel="noreferrer" target="_blank"><AiOutlineLinkedin className=' w-6 h-6'/></a>

        </div>


        

    </div>
  )
}

export default Navbar