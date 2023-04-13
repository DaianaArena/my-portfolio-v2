import { Inter } from 'next/font/google'
const inter = Inter({ subsets: ['latin'] })
import { FaLinkedinIn, FaGithubAlt, FaMailBulk } from 'react-icons/fa';



export default function About () {
 

  return (
    <div className="md:h-screen  animate-gradient-x flex flex-col justify-center items-center">
      
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 gap-8">
      
        <div className="py-10 px-12  flex flex-col justify-center ">
          <h1 className="text-xl text-center sm:text-left md:text-4xl lg:text-5xl font-bold mb-4 text-orange-400">
          Let's Build Something Great Together
          </h1>
          <p className="text-lg text-center sm:text-left md:text-2xl lg:text-3xl mb-8 text-gray-900">
          Don't wait any longer, let's work together to bring your ideas to life! Contact me today and let's get started on your next project.
          </p>
          <div className="flex  sm:flex-row items-center justify-between md:items-center lg:justify-start ">
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

        <div className="py-10 px-12  flex flex-col justify-center ">
          <form className=" flex flex-col items-center justify-between mb-2 relative inline-flex text-sm sm:text-base rounded-md font-medium transition-colors outline-none focus:border-blue-300 disabled:opacity-50 disabled:pointer-events-none disabled:opacity-40 disabled:hover:opacity-40 disabled:cursor-not-allowed disabled:shadow-none
               px-4 py-1 sm:py-1.5 sm:px-5 " action="https://formspree.io/f/xayknoae" method="POST">
          <div className='self-start flex items-center mb-5'>
          <FaMailBulk className='font-medium  text-[#FB3355]'/>
          <h3 className=" text-xl font-medium mx-5 text-[#FB3355]">Email me now...</h3>
          </div>
          
          <label className="flex flex-col w-full">
              <span className='mb-5 '>Your Mail</span>
              <input  type="email" 
              className=" rounded-md  px-3 py-2  focus:outline-none focus:ring-2 focus:ring-[#FB3355] text-gray-900"
          
              name="_replyto"/>
          </label>
          <label className="flex flex-col w-full">
              <span className='mb-5 '>Message</span>
              <textarea 
              className=" rounded-md h-40 px-3 py-2  focus:outline-none focus:ring-2 focus:ring-[#FB3355] text-gray-900"
              name="message"/>
          </label>
          <button  className='self-end mt-10 mb-2 relative inline-flex text-sm sm:text-base rounded-full font-medium border-2 border-transparent transition-colors outline-transparent focus:outline-transparent disabled:opacity-50 disabled:pointer-events-none disabled:opacity-40 disabled:hover:opacity-40 disabled:cursor-not-allowed disabled:shadow-none
              text-white bg-[#FB3355] hover:bg-[#FF7067] focus:border-[#FF7067] px-4 py-1 sm:py-1.5 sm:px-5 ' type="submit">ENVIAR</button>
          </form>
        </div>
      
      </div>
      
    </div>
  )
}
