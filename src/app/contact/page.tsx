import { Inter } from 'next/font/google'
const inter = Inter({ subsets: ['latin'] })
import { FaLinkedinIn, FaGithubAlt } from 'react-icons/fa';



export default function About () {
 

  return (
    <div className="h-screen  animate-gradient-x flex flex-col justify-center items-center">
      
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 gap-8">
      
        <div className="py-10 px-12  flex flex-col justify-center ">
          <h1 className="text-xl text-center sm:text-left md:text-4xl lg:text-5xl font-bold mb-4 text-orange-400">
          Let's Build Something Great Together
          </h1>
          <p className="text-lg text-center sm:text-left md:text-2xl lg:text-3xl mb-8 text-gray-900">
          Don't wait any longer, let's work together to bring your ideas to life! Contact me today and let's get started on your next project.
          </p>
          <div className="flex flex-col  sm:flex-row items-center justify-between md:items-center lg:justify-start ">
          <a
              href="https://www.linkedin.com/in/arenadaiana/"
              target="_blank"
              rel="noopener noreferrer"
              className='mb-2 relative inline-flex text-sm sm:text-base rounded-full font-medium border-2 border-transparent transition-colors outline-transparent focus:outline-transparent disabled:opacity-50 disabled:pointer-events-none disabled:opacity-40 disabled:hover:opacity-40 disabled:cursor-not-allowed disabled:shadow-none
              text-white bg-[#FB3355] hover:bg-[#FF7067] focus:border-[#FF7067] px-4 py-1 sm:py-1.5 sm:px-5 lg:mr-6'
            >
              <FaLinkedinIn className='font-medium text-white' />
            </a>
            <a
              href="https://github.com/DaianaArena"
              target="_blank"
              rel="noopener noreferrer"
              className='mb-2 relative inline-flex text-sm sm:text-base rounded-full font-medium border-2 border-transparent transition-colors outline-transparent focus:outline-transparent disabled:opacity-50 disabled:pointer-events-none disabled:opacity-40 disabled:hover:opacity-40 disabled:cursor-not-allowed disabled:shadow-none
              text-white bg-[#FB3355] hover:bg-[#FF7067] focus:border-[#FF7067] px-4 py-1 sm:py-1.5 sm:px-5'
            >
              <FaGithubAlt className='font-medium text-white'/>
            </a>
          </div>

        </div>

        <div className="py-10 px-12  flex flex-col justify-center order-first md:order-last">
            <p>aca va el form</p>
        </div>
      
      </div>
      
    </div>
  )
}
