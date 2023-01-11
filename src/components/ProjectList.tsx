import React from 'react'
import { ProjectCard } from './ProjectCard'
import { projects } from './projects'

const ProjectList = () => {
  return (
    <>
    <span className='text-darkBlue text-7xl font-extrabold'>
      Projects
    </span>
      <div className='mt-16 flex flex-col justify-center items-center gap-5  md:flex-row flex-wrap '>
        {
          projects.map((project) => (
            <>
            <ProjectCard key={project.id} name={project.title} image={project.image} description={project.description} status={project.status} />
            </>
          ))
        }
      </div>
    </>
  )
}

export default ProjectList