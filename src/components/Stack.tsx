import React from 'react'

const Stack = () => {



  return (
    <div className='flex flex-col justify-center items-center mb-12'
    data-aos="fade-up"
    data-aos-offset="200"
    data-aos-delay="50"
    data-aos-duration="1000"
    data-aos-easing=" ease-in-out"
    data-aos-mirror="true"
    data-aos-once="false"
    data-aos-anchor-placement="top-bottom"
    >
        <span className='text-6xl font-bold md:text-7xl '>Tech</span>
        {/* <div className='mt-16 grid grid-cols-2  justify-center items-center  gap-2 
        md:flex-row md:grid-cols-4 content-center' > */}
        <div className='mt-16 flex flex-wrap   justify-center items-center  gap-2 
        md: ' >
        
            <img className=' w-32 md:w-44' src="/icons/react.svg" alt="React JS" />
            <img className=' w-32 md:w-44' src="/icons/next.svg" alt="Next JS" />
            <img className=' w-32 md:w-44' src="/icons/css.svg" alt="CSS" />
            <img className=' w-32 md:w-44' src="/icons/tailwind.svg" alt="Tailwind CSS" />
            <img className=' w-32 md:w-44' src="/icons/javascript.svg" alt="Javascript" />
            <img className=' w-32 md:w-44' src="/icons/typescript.svg" alt="Typescript" />
            <img className=' w-32 md:w-44' src="/icons/csharp.svg" alt="C#" />
        </div>
    </div>
  )
}

export default Stack