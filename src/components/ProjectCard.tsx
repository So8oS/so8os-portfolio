import React from 'react'

interface projectCardProps{
  name: string;
  image: string;
  description: string;
  status: string;
}



export const ProjectCard = ( props:projectCardProps) => {
  return (
    <div className=' flex flex-col w-[23rem] h-96 rounded-md gap-3 hover:scale-110 transition-all duration-500  '>
        <div>
            <img className='rounded-md w-80 h-48' src={props.image} alt="" />
        </div>
            <span className=''>{`Status: ${props.status}`}</span>
        <div className='flex flex-col '>
            <span className='font-bold text-lg '>{props.name}</span>
            <span className=''>{props.description}</span>
        </div>
    </div>
  )
}
