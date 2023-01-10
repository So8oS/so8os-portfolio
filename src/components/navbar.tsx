import React from 'react'
import {AiOutlineTwitter, AiOutlineInstagram, AiOutlineLinkedin} from 'react-icons/ai'

const Navbar = () => {
  return (
    <div className='flex justify-between font-Poppins mb-12  md:mb-24'>
        <span className='font-semibold' >Ahmad Othman</span>
        <div className='flex gap-4 font-Poppins '>
            <a className='text-[#03045E]' href="#">Home</a>
            <a className='text-[#03045E]' href="#">About</a>
        </div>
        <div className='flex items-center gap-2'>
            <a href="#" className='text-[#03045E]'><AiOutlineTwitter  className=' w-6 h-6' /></a>
            <a href="#" className='text-[#03045E]'><AiOutlineInstagram className=' w-6 h-6' /></a>
            <a href="#" className='text-[#03045E]'><AiOutlineLinkedin className=' w-6 h-6'/></a>
        </div>


        

    </div>
  )
}

export default Navbar