import Link from 'next/link'
import { LuMail,LuLinkedin,LuGithub,LuGlobe } from 'react-icons/lu'

const Contact = () => {
  return (
      <div className='text-white'>
          <div className='p-4 bg-neutral-900 rounded-bl-sm'>
                <h1 className='opacity-60 font-bold text-sm px-1'>INBOX</h1>
                <div className='rounded-2xl bg-gray-800  p-4'>
                    <h2 className='font-bold'>Gradi Puata</h2>
                    <p className='opacity-30'>New Opportunity?</p>
                    <p className='opacity-70'>Hi there! Thanks for Checking out my portfolio. Feel free to reach out..</p>
                </div>
          </div>
      
          <div className='flex flex-col items-center justify-center p-3 space-y-4'>
              <div className='text-center'>
                  <h1 className='font-bold text-2xl'>Contact Me</h1>
                <p className='opacity-50 '>I am currently available for new opportunities</p>
              </div>
              <div className='opacity-60 bg-gray-900 px-8 py-5 rounded-b-md rounded-t-md'>
                  <div className='flex justify-between items-center space-x-10 border-b my-2 '>
                      <p>Phone:</p>
                      <p className='font-bold '>+27 680 488 872</p>
                  </div>
                  <div className='flex justify-between items-center space-x-10 border-b  '>
                      <p>Location:</p>
                      <p className='font-bold '>Durban, South Africa</p>
                  </div>
              </div>
              <Link href={'mailto:gradipuata@mail.com'} target='_blank'>
              <p className='hover:opacity-100  cursor-pointer flex items-center justify-between space-x-2 bg-blue-400 opacity-80 rounded-b-md rounded-t-md py-2 px-28'>
                  <LuMail />
                  <span>Send Email</span>
              </p>
              </Link>
              
              <div className='flex justify-between space-x-11'>
                  <Link href={'https://www.linkedin.com/in/gradi-puata/'} target='_blank'>
                      <p className='hover:opacity-100  cursor-pointer flex items-center justify-between space-x-2 bg-blue-500 opacity-70 rounded-b-md rounded-t-md py-2 px-8'>
                          <LuLinkedin />
                          <span>LinkedIn</span></p></Link>
                  <Link href={'https://github.com/codewithgradi'}target='_blank'
                  >
                      <p
                  className='hover:opacity-100  cursor-pointerflex  items-center justify-between space-x-2 bg-gray-800 opacity-70 rounded-b-md rounded-t-md py-2 px-8'
                      >
                          <LuGithub />
                          <span>GitHub</span>
                      </p>
                  </Link>
              </div>
              <Link href={'https://gradipuata.vercel.app'} target='_blank'
              className='hover:opacity-100 opacity-70 cursor-pointer flex justify-between items-center space-x-6 bg-gray-700 rounded-b-md rounded-t-md px-18 py-1 '
              >
                  <LuGlobe />
                  <p>gradipuata.vercel.app</p>
              </Link>
          </div>
    </div>
  )
}

export default Contact
