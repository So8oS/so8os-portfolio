import React from 'react'
import { ProjectCard } from './ProjectCard'
import { projects } from './projects'

const ProjectList = () => {
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
          ))
        }
      </div>
    </div>
  )
}

export default ProjectList