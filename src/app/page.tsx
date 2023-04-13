import Image from 'next/image'
import HomeImage from '../../public/avatars/home.png'
import { Inter } from 'next/font/google'
// Load the 'Inter' font from Google Fonts with only the 'latin' subset
const inter = Inter({ subsets: ['latin'] })



export default function Home() {
  
   
 // Render the main content of the Home page
  return (
    <div className="md:h-screen  animate-gradient-x flex flex-col justify-center items-center">
            
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-2 gap-8">
      
       {/* Left column with main text */}
        <div className="py-10 px-12  flex flex-col justify-center ">
          <h1 className="text-3xl text-center lg:text-left md:text-4xl lg:text-5xl font-bold mb-4 text-orange-400">
            <span className='block md:inline md:mr-2'>Hi!</span>
            I'm Daiana Arena
          </h1>
          <p className="text-2xl text-center lg:text-left md:text-2xl lg:text-3xl mb-8 text-gray-900">
          Frontend Developer.
          </p>
          <div className="flex flex-col  sm:flex-row items-center justify-between md:items-center lg:justify-between ">
            {/* Link to download resume */}
            <a
              href="/CV-2023-DAIANA-ARENA.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className='  text-md font-bold text-gray-900 mb-2'
              
            >
              DOWNLOAD MY RESUME
            </a>
            {/* Link to contact page */}
            <a
              href="/contact"
              rel="noopener noreferrer"
              className='mb-2 relative inline-flex text-sm sm:text-base rounded-full font-medium border-2 border-transparent transition-colors outline-transparent focus:outline-transparent disabled:opacity-50 disabled:pointer-events-none disabled:opacity-40 disabled:hover:opacity-40 disabled:cursor-not-allowed disabled:shadow-none
              text-white bg-[#FB3355] hover:bg-[#FF7067] focus:border-[#FF7067] px-4 py-1 sm:py-1.5 sm:px-5'
            >
              CONTACT ME
            </a>
                    
          </div>

        </div>

        {/* Right column with image */}
        <div className="py-10 px-12  flex flex-col justify-center order-first lg:order-last">
            <Image src={HomeImage} alt=""  className='animate-float'/>
        </div>
      
      </div>
      
    </div>
  )
}
