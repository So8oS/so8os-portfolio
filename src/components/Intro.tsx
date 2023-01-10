import React from 'react'

const Intro = () => {
  return (
    <div className='flex flex-col-reverse justify-center items-center 
    md:flex-row gap-12'>
        <div className='flex flex-col '>

            <span className='text-[1.75rem]'> Helloo, I&apos;m Ahmad </span>
            <div className='flex flex-col animate-pulse'>
                <span className='font-bold text-7xl  '>Front-end</span>
                <span className='font-bold text-7xl  '>Developer</span>
            </div> 
            <span className='text-[1.75rem] animate-bounce '>woooooooo</span>
            <button 
            className=' w-40 h-14 font-Poppins  bg-[#F5EE84] stripes border 
            hover:scale-110 transition-all duration-300 active:scale-75
            border-[#474306]  text-[#474306] font- shadow-2xl rounded-xl mt-6' >Resume</button>
        
        </div>     
        <div className=" w-96 border-2 border-white rounded-circle" style={{ clipPath: 'polygon(50% 0%, 80% 10%, 100% 1%, 96% 70%, 80% 90%, 50% 100%, 20% 90%, 0% 70%, 0% 35%, 20% 10%)' }} >
            <img className='' src="/pic.jpg" alt="ahmad" />
        </div>   
    </div>
  )
}

export default Intro