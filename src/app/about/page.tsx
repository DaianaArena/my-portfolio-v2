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
            I’m a Front-End Developer with over 5 years of experience building dynamic and user-friendly web applications. Passionate about turning ideas into interactive digital experiences with React JS and modern web technologies.
            <br />
            I have a strong product improvement mindset and experience working with multidisciplinary teams, as well as directly with clients and users to create solutions that truly make an impact. My background includes testing, troubleshooting, and microfrontend development, allowing me to deliver scalable and maintainable products.
            <br />
            I’m proactive, analytical, and always eager to learn — combining structure and creativity to craft clean, accessible, and engaging interfaces. Let’s connect and build something amazing together! 🚀
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
