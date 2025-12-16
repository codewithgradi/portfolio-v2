import Link from 'next/link'
import React from 'react'
import{motion} from 'framer-motion'
import { LuGithub, LuSearch } from 'react-icons/lu'

const Projects = () => {
    const data = [
        {
            id: 1,
            tools: ['Typscript', 'NextJs', 'Prisma', 'Neon', 'JWT', 'RestAPI', 'Vercel'],
            title:'Fitla Hoops',
            description: 'This web application serves as a dynamic, real-time content management and display platform designed specifically for a professional or amateur basketball organization. The primary goal is to ensure the public-facing website always reflects the most current information regarding  schedules,and news, managed efficiently through a dedicated administrative dashboard.',
            gitHubLink: 'https://github.com/codewithgradi/fitlahoops-nextjs',
            live:'https://fitlahoops-nextjs.vercel.app/'
        },
        {
            id: 2,
            tools: ['NextJS', 'React-To-Print', 'Vercel'],
            title:'OG Resume',
            description: 'A resume builder that formats your CV in a way that is fully optimized for applicant tracking systems, ensuring your resume gets noticed by hiring managers. With a live preview, easy-to-use interface, and one-click download, you can create a professional, polished resume in minutes.',
            gitHubLink: 'https://github.com/codewithgradi/ogresume',
            live:'https://ogresume.vercel.app/'
        },
        {
            id: 3,
            tools: ['Framer-Motion', 'Nextjs'],
            title:'Grant Family Church',
            description: 'A website for a local church.',
            gitHubLink: 'https://github.com/codewithgradi/grantfamily',
            live:'https://grantfamily.vercel.app/'
        },
        {
            id: 4,
            tools: ['PyQt5', 'SQLite3'],
            title:'Python NotesAPP',
            description: 'A modern, lightweight, and fully functional desktop Notes App built using Python (PyQt5) and SQLite. The application allows users to add, update, delete, and search notes, all stored in a local database. Each note includes a title, content, and timestamp, providing a clean and organized way to manage personal or project notes.',
            gitHubLink: 'https://github.com/codewithgradi/Python-Notes-APP',
            live:''
        },
    ]
  return (
      <div className='text-white  w-screen'>
          <div className='flex bg-neutral-700 opacity-60 p-3 justify-between'>
              <div className='bg-neutral-900 rounded-b-md rounded-t-md w-full'>
                  <div className='flex items-center justify-center space-x-5'>
                      <LuSearch/>
                  <p>gradipuata.vercel.app/projects</p>
                  </div>
                  
              </div>
          </div>
          <div className='p-6'>
               <h1 className='opacity-70 font-bold'>FEATURED PROJECTS</h1>
              <div className='md:grid md:grid-cols-2 gap-4 sm:flex sm:flex-col '>
                  {
              data.map(d => (
                  <div key={d.id}
                  className='border-blue-950 border shadow-2xl rounded-2xl p-2 bg-neutral-700 opacity-65 my-2'
                  >
                      <div className='flex justify-between'>
                          <h1 className='text-sky-600 font-bold'>{d.title}</h1>
                          <Link
                              href={d.gitHubLink}
                              target='_blank'
                              className='font-bold text-lg hover:-translate-y-1'
                          ><LuGithub /></Link>
                      </div>
                      <div key={Math.random()} className='flex justify-between flex-wrap  w-fit space-x-2 text-sm'>
                       {d.tools.map(t => (
                             <p key={Math.random()} className='border rounded-2xl px-2 text-sm py-1 bg-black opacity-95  my-2'>{t}</p>
                      ))}   
                      </div>
                      
                      <p className=''>{d.description}</p>
                      {d.live !== '' &&
                          <Link
                              className='hover:opacity-100 '
                              target='_blank'
                              href={d.live}>
                              <motion.div
                                  animate={{ opacity: [0.5, 1, 0.5] }}
                                  transition={{
                                      duration: 1.5,
                                      ease: 'easeInOut',
                                      times: [0, 0.5, 1],
                                      repeat: Infinity,
                                      repeatType: 'loop',
                                  }}
                                  className='my-3 text-green-700 font-bold text-md'
                              >
                                  Live Demo
                              </motion.div>
                          </Link>}
                  </div>
              ))
          }
          </div>
         </div>
    </div>
  )
}

export default Projects
