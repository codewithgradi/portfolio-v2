import Image from 'next/image'
import { FaSearch, FaShoppingBag} from 'react-icons/fa'
import {MdPerson } from 'react-icons/md'

const About = () => {
  return (
      <section className='lg:flex justify-between lg:w-fit overflow-x-hidden md:flex md:w-7xl ' >
          <div className='p-3 space-y-3 bg-gray-900 border-r border-r-white opacity-50'>
              <h1 className='text-xs text-white font-semibold'>FAVOURITES</h1>
              <div className='space-y-3 sm:flex sm:justify-evenly md:flex-col'>
                  <div className=' flex items-center  space-x-1 rounded-t-md rounded-b-md  px-3 py-1 font-bold bg-blue-950  text-blue-400  '
                    >
                      <MdPerson/>
                      <p className='text-nowrap'>About me</p> 
                  </div>
                  <div className='flex items-center space-x-1 text-white opacity-90 rounded-t-md rounded-b-md  px-3 py-1 hover:cursor-help hover:bg-amber-50 hover:text-gray-700 '>
                      <FaShoppingBag/>
                      <p>Documents</p> 
                  </div>
                  <div className='flex items-center space-x-1 text-white opacity-90 rounded-t-md rounded-b-md  px-3 py-1 hover:cursor-help hover:bg-amber-50 hover:text-gray-700'>
                      <FaSearch/>
                      <p>Recent</p> 
                  </div>
              </div>
          </div>
          
          <div className='text-white p-6'>
              <div className='p-3 flex flex-col items-center justify-center'>
                      <MdPerson className='m-auto font-bold text-8xl text-white opacity-50'/>
                <h1 className='text-3xl font-bold opacity-80'>Gradi Puata</h1>
                <p className='opacity-30 text-nowrap sm:px-1'>Software Engineer</p>
                <p className='opacity-60'>Durban, South Africa</p>
          </div>
          <div className='p-3'>
                  <h1 className='opacity-50 font-bold my-3 border-b'>OVERVIEW</h1>
                  <p>An agile Software Engineering ethusiast
                      building intuitive, high-performance web apps
                      and thrive on turning ideas into reality.
                      Always learning, always coding, always creating
                      solutions that make an impact</p>
          </div>
          <div className='p-3'>
              <h1 className='opacity-50 font-bold my-3 border-b'>EDUCATION</h1>
              <h1 className='font-bold'>Bsc Information Technology</h1>
              <p className='opacity-30'>Richfield Institute of Technology</p>
              <p className='opacity-60 italic'>Relevant Coursework: Linear Algebra,
                  Calculus, Probability and Statistics,
                  Data Structures, Microsoft Office, Computer Network and Architecture, Web development </p>
          </div>
          <div className='p-3'>
              <h1 className='opacity-50 font-bold my-3 border-b'>ARCHIEVEMENTS</h1>
              <ul className='list-disc px-5'>
                  <li >Semester One Top Archiver - 2021</li>
              </ul>
              </div>
          </div>
    </section>
  )
}

export default About
