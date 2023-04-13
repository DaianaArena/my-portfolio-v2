import { Inter } from 'next/font/google'
// Define the Inter font with the Latin subset
const inter = Inter({ subsets: ['latin'] })
import Image from 'next/image'
import AboutImage from '../../../public/avatars/about.png'


export default function About () {
 

  return (
    <div className="min-h-screen  flex flex-col justify-center items-center">
      
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-2 gap-8">
      
        {/* Left column with main text */}
        <div className="py-10 px-12  flex flex-col justify-center ">
          <h1 className="text-xl text-center lg:text-left md:text-3xl lg:text-4xl font-bold mb-4 text-orange-400">
          Get to Know Me Better
          </h1>
          <p className="text-sm text-center lg:text-left md:text-sm lg:text-lg mb-8 text-gray-900">
          I am a passionate and committed Front-End Developer with extensive experience in agile methodologies and a proactive approach that allows me to work effectively in teams and find creative solutions to the challenges that arise in project development. Currently, I work as a React Developer at Cloud Solutions LATAM while continuing my studies in the Bachelor of Computer Science (S21). I love planning and organization, but I also enjoy adding a fun and accessible touch to my work. I am always looking for new opportunities and challenges, which has led me to constantly commit to my career and be in constant learning and improvement. If you are looking for a proactive, analytical, and creative person to work on your project, do not hesitate to contact me to learn more about my experience and skills. I am ready to help you take your ideas to the next level!
          </p>
          

        </div>

        {/* Right column with image */}
        <div className="py-10 px-12  flex flex-col justify-center align-center order-first lg:order-last">
            <Image src={AboutImage} alt=""  className='animate-float m-auto'/>
        </div>
      
      </div>
      
    </div>
  )
}
