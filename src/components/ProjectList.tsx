import React from 'react'
import { ProjectCard } from './ProjectCard'
import { projects } from './projects'

const ProjectList = () => {
  const [showMore, setShowMore] = React.useState({num: 4,text: 'Show More'})
  return (
    <div className='flex flex-col justify-center items-center mb-12 '>
      <span className='text-6xl font-bold md:text-7xl '>Projects</span>
      <div className='mt-16 flex flex-col justify-center items-center gap-5  md:flex-row md:flex-wrap'>
        {
          projects.map((project) => (
            <>
            <ProjectCard 
            key={project.id} 
            name={project.title} 
            image={project.image} 
            description={project.description} 
            status={project.status} 
            link={project.link}
            github={project.github}
             />
            </>
          )).reverse().slice(0,showMore.num)
        }
      </div>
      <div onClick={() => { 
        if(showMore.num === 4){
          setShowMore({num: projects.length, text: 'Show Less'})
        }else{
          setShowMore({num: 4, text: 'Show More'})
        }
      }} className=' mt-10 font-semibold font-Poppins cursor-pointer text-[#03045E] dark:text-[#FDECFB] hover:text-gray-500'>{showMore.text}</div>
    </div>
  )
}

export default ProjectList