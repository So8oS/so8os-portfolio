import React from 'react'

const Intro = () => {
  return (
    <div className='flex flex-col-reverse justify-center items-center mb-10 
    md:flex-row gap-16 md:mb-20 '
    data-aos="fade-up"
     data-aos-offset="200"
     data-aos-delay="50"
     data-aos-duration="1000"
     data-aos-easing=" ease-in-out"
     data-aos-mirror="true"
     data-aos-once="true"
     data-aos-anchor-placement="top-bottom"
     
    >
        <div className='flex flex-col '>

            <span className=' text-[1.5rem] md:text-[1.75rem]'> Helloo, I&apos;m Ahmad </span>
            <div className='flex flex-col animate-pulse'>
                <span className='text-6xl font-bold md:text-7xl  '>Front-end</span>
                <span className='text-6xl font-bold md:text-7xl  '>Developer</span>
            </div> 
            <span className=' animate-bounce text-[1.5rem] md:text-[1.75rem] '>woooooooo</span>
            <button 
            className=' w-40 h-14 font-Poppins  bg-darkYellow stripes border 
            hover:scale-110 transition-all duration-300 active:scale-75
            border-darkBrown  text-darkBrown font- shadow-2xl rounded-xl mt-6
            dark:stripes-dark dark:text-lightYellow
            ' >Resume</button>
        
        </div>     
        <div className="  w-72 border-white md:w-[22rem] " style={{ clipPath: 
          // 'polygon(50% 0%, 80% 10%, 100% 1%, 96% 70%, 80% 90%, 50% 100%, 20% 90%, 0% 70%, 0% 35%, 20% 10%)'
          'polygon(50% 0, 80% 10%, 100% 0, 100% 75%, 50% 100%, 0 75%, 0% 25%, 0 0, 20% 10%)'
          
          }} >
            <img className='' src="/pic.jpg" alt="ahmad" />
        </div>   
    </div>
  )
}

export default Intro