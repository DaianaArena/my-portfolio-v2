import { Inter } from 'next/font/google'
const inter = Inter({ subsets: ['latin'] })
import Image from 'next/image'
import repo1 from '../../../public/avatars/about.png'


const Projects = [
  {
    key: 0,
    title: "Titulo del proyecto",
    description: "aca va la descripcion",
    repo: "https://github.com/DaianaArena",
    deploy: "https://github.com/DaianaArena",
    img: repo1

  },
  {
    key: 1,
    title: "Titulo del proyecto",
    description: "aca va la descripcion",
    repo: "https://github.com/DaianaArena",
    deploy: "https://github.com/DaianaArena",
    img: repo1
  },
  {
    key: 2,
    title: "Titulo del proyecto",
    description: "aca va la descripcion",
    repo: "https://github.com/DaianaArena",
    deploy: "https://github.com/DaianaArena",
    img: repo1
  },
  {
    key: 3,
    title: "Titulo del proyecto",
    description: "aca va la descripcion",
    repo: "https://github.com/DaianaArena",
    deploy: "https://github.com/DaianaArena",
    img: repo1
  }
]

export default function About () {
 

  return (

    <div className="">

      <h1 className="py-10 px-12 text-3xl md:text-5xl lg:text-7xl font-bold mb-4 text-gray-900">My Projects</h1>
      <div className=" py-10 px-12 grid grid-flow-row gap-8 text-neutral-600 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
              
      {Projects.map(({ key, title, description, repo, deploy, img}) => (
        <div className="!z-5 relative flex flex-col rounded-[20px] max-w-[300px]  bg-clip-border shadow-3xl shadow-shadow-500  w-full !p-4 3xl:p-![18px] bg-gray-900 undefined animate-float">
            <div className="h-full w-full">
                <div className="relative w-full">
                    <Image src={img} alt="" />
                </div>
                <div className="mb-3 flex items-center justify-between px-1 md:items-start">
                    <div className="mb-2">
                        <p className="text-lg font-bold text-white"> {title} </p>
                        <p className="mt-1 text-sm font-medium text-white md:mt-2">{description} </p>
                    </div>
                    
                </div>
                <div className="flex items-center justify-between md:items-center lg:justify-between ">
                           <a
                            href={repo}
                            target="_blank"
                            rel="noopener noreferrer"
                            className='!mb-0 text-sm font-bold text-white'
                          >
                            Go to Github
                          </a>
                          <a
                            href={deploy}
                            target="_blank"
                            rel="noopener noreferrer"
                            className='relative inline-flex text-sm sm:text-base rounded-full font-medium border-2 border-transparent transition-colors outline-transparent focus:outline-transparent disabled:opacity-50 disabled:pointer-events-none disabled:opacity-40 disabled:hover:opacity-40 disabled:cursor-not-allowed disabled:shadow-none
                            text-white bg-[#4040F2] hover:bg-[#3333D1] focus:border-[#B3B3FD] focus:bg-[#4040F2] px-4 py-1 sm:py-1.5 sm:px-5'
                          >
                            Deploy
                          </a>
                    
                </div>
            </div>
        </div>

      ))}
              
            
              
      </div>
    </div>

    
  )
}
