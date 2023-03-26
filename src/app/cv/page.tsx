import { Inter } from 'next/font/google'
const inter = Inter({ subsets: ['latin'] })
import Image from 'next/image'
import CVImage from '../../../public/avatars/cv.png'


export default function About () {
 

  return (
    <div className="min-h-screen  animate-gradient-x flex flex-col justify-center items-center">
      
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 gap-8">
      
        <div className="py-10 px-12  flex flex-col justify-center ">
          <h1 className="text-xl text-center sm:text-left md:text-3xl lg:text-4xl font-bold mb-4 text-orange-400">
          Explore My Experience
          </h1>
          <p className="text-lg text-center sm:text-left md:text-sm lg:text-xl mb-8 text-gray-900">
          Don't miss the chance to learn more about my experience and skills! Click the download button below to access my latest CV and discover how I can contribute to your project or team.

          Whether you are looking for a talented Front-End Developer to join your company, a consultant to improve your website's performance, or a collaborator to bring your ideas to life, my CV will provide you with valuable insights into my background, achievements, and goals.

          So what are you waiting for? Download my CV now and let's start a conversation about how we can work together!
          </p>
          <div className="flex flex-col  sm:flex-row items-center justify-between md:items-center lg:justify-between ">
          
            <a
              href="/CV-2023-DAIANA-ARENA.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className='mb-2 relative inline-flex text-sm sm:text-base rounded-full font-medium border-2 border-transparent transition-colors outline-transparent focus:outline-transparent disabled:opacity-50 disabled:pointer-events-none disabled:opacity-40 disabled:hover:opacity-40 disabled:cursor-not-allowed disabled:shadow-none
              text-white bg-[#FB3355] hover:bg-[#FF7067] focus:border-[#FF7067] px-4 py-1 sm:py-1.5 sm:px-5'
              
            >
              DOWNLOAD MY RESUME
            </a>                    
          </div>

        </div>

        <div className="py-10 px-12  flex flex-col justify-center order-first md:order-last">
            <Image src={CVImage} alt=""  className='animate-float'/>
        </div>
      
      </div>
      
    </div>
  )
}
