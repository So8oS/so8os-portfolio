import React from 'react'

export const ProjectCard = () => {
  return (
    <div className=' flex flex-col w-80 h-96 border border-gray-500 p-4 rounded-md gap-3'>
        
        <div>
            <img src="https://images.unsplash.com/photo-1519052537078-e6302a4968d4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" alt="" />
        </div>
        <div className='flex flex-col justify-center items-center'>
            <span className='font-semibold'>Image Uploader</span>
            <span className='text-center'>A tool for uploading and copying images to clipboard.</span>
        </div>
    </div>
  )
}
