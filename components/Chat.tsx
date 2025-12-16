import { LuSend } from 'react-icons/lu';

const Chat = () => {
  return (
    <div className='p-3 text-white space-y-3'>
          <div className='rounded-br-2xl rounded-t-2xl bg-gray-700 p-3 w-fit'>
              Hi There! I am Gradi's AI Assistant. Ask me anything about his experience, skills, or projects
          </div>
          <div className='rounded-br-2xl rounded-t-2xl bg-gray-700 p-3 w-fit'>
              Gradi is familiar withe following programming languages:
              <ul className='font-bold py-2 italic'>
                  <li>Python</li>
                  <li>Typescript and Javascript</li>
                  <li>C# on a beginner level</li>
              </ul>
          </div>
        
          <div className='rounded-br-2xl rounded-t-2xl bg-gray-700 p-3 w-fit'>
              Gradi's development tools:
              <ul className='font-bold py-2 italic'>
                  <li>VSCode</li>
                  <li>PyCharm</li>
                  <li>Git</li>
                  <li>Prisma</li>
              </ul>
          </div>
          <div className='rounded-br-2xl rounded-t-2xl bg-gray-700 p-3 w-fit'>
             Gradi's long term goals:
              <ul className='font-bold py-2 italic'>
                  <li>Software Engineer</li>
                  <li>Aspiring AI/ML Enginner in the long run</li>
              </ul>
          </div>
          <div className='p-4 border-t border-gray-500 flex items-center justify-between'>
              <input
                  disabled
                  placeholder={`Ask about Gradi's skills`}
                  type="text"
                  className='w-11/12 rounded-2xl border px-2 py-1 border-gray-500'
              />
              <div className='bg-blue-600 opacity-60 rounded-2xl p-2 font-bold'>
                  <LuSend/>
              </div>
          </div>
    </div>
  )
}

export default Chat
