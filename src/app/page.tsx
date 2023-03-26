import Image from 'next/image'
import HomeImage from '../../public/avatars/home.png'
import { Inter } from 'next/font/google'
const inter = Inter({ subsets: ['latin'] })
import Link from 'next/link';



export default function Home() {
  
   

  return (
    <div className="h-screen  animate-gradient-x flex flex-col justify-center items-center">
      
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-2 gap-8">
      
        <div className="py-10 px-12  flex flex-col justify-center">
          <h1 className="text-5xl md:text-4xl lg:text-5xl font-bold mb-4 text-orange-400">
            Hi! I'm Daiana Arena
          </h1>
          <p className="text-lg md:text-2xl lg:text-3xl mb-8 text-gray-900">
          Frontend Developer.
          </p>
          <div className="flex items-center justify-between md:items-center lg:justify-between ">
          
                           <a
                            href="/CV-2023-DAIANA-ARENA.pdf"
                            target="_blank"
                            rel="noopener noreferrer"
                            className='!mb-0 text-sm font-bold text-gray-900'
                            
                          >
                            DOWNLOAD MY RESUME
                          </a>
                          <a
                            href=""
                            target="_blank"
                            rel="noopener noreferrer"
                            className='relative inline-flex text-sm sm:text-base rounded-full font-medium border-2 border-transparent transition-colors outline-transparent focus:outline-transparent disabled:opacity-50 disabled:pointer-events-none disabled:opacity-40 disabled:hover:opacity-40 disabled:cursor-not-allowed disabled:shadow-none
                            text-white bg-[#FB3355] hover:bg-[#FF7067] focus:border-[#FF7067] px-4 py-1 sm:py-1.5 sm:px-5'
                          >
                            CONTACT ME
                          </a>
                    
                </div>

        </div>

        <div className="py-10 px-12  flex flex-col justify-center">
            <Image src={HomeImage} alt=""  className='animate-float'/>
        </div>
      
      </div>
      
    </div>
  )
}
