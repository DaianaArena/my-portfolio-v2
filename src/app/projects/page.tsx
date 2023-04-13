import { Inter } from 'next/font/google'
const inter = Inter({ subsets: ['latin'] })

//Images 
import Image from 'next/image'
import travelImage from '../../../public/projects/travel.png'
import pokedexImage from '../../../public/projects/pokedex.png'
import todoImage from '../../../public/projects/todo.png'
import shopImage from '../../../public/projects/shop.png'
import memojiImage from '../../../public/projects/memoji.png'
import coffeeImage from '../../../public/projects/coffee.png'
import experiencesImage from '../../../public/projects/experiences.png'


//List of my projects
const Projects = [
  {
    key: 0,
    title: "Travel Journal",
    description: "This project is a responsive travel journal challenge from Scrimba, where I used React.js, SASS, and Bootstrap to create a dynamic and visually appealing travel journal web application.",
    repo: "https://github.com/DaianaArena/travel-journal",
    deploy: "https://travel-journal-sigma.vercel.app/",
    img: travelImage

  },
  {
    key: 1,
    title: "Airbnb experiences clone",
    description: "This project is a clone of the popular platform, AirBnB experiences, built using ReactJS. With this clone, users can easily explore and book unique experiences offered by local hosts in various destinations. The use of ReactJS also ensures fast rendering times, making the user experience seamless and enjoyable.",
    repo: "https://github.com/DaianaArena/airbnb-experiences-clone",
    deploy: "https://airbnb-experiences-clone-nu.vercel.app/",
    img: experiencesImage
  },
  {
    key: 2,
    title: "Coffee world experiences",
    description: "This JS vainilla project is designed to provide a seamless and intuitive user experience for exploring the world's best coffee destinations. So come on in, grab a cup of joe, and start exploring with me!",
    repo: "https://github.com/DaianaArena/coffee-world-experiences",
    deploy: "https://coffee-world-experiences.vercel.app/",
    img: coffeeImage
  },
  
  {
    key: 3,
    title: "To-Do List (C.R.U.D.)",
    description: "This is a Node.js CRUD app that allows you to create, read, update, and delete items of a list. With this app, you can easily add, view, update, and delete data, with a simple and intuitive CLI interface. Get started with managing your data today!",
    repo: "https://github.com/DaianaArena/to-do-list-crud",
    deploy: "https://github.com/DaianaArena/to-do-list-crud",
    img: todoImage
  },
  
  {
    key: 4,
    title: "Ollivander's shopping cart",
    description: "This project showcases a basic implementation of an online shopping cart for Harry Potter's Olivander's store using vanilla JavaScript. Users can add and remove items from the cart, adjust quantities, and view the total price. The goal of this project is to provide an easy-to-understand example of how to create a functional shopping cart.",
    repo: "https://github.com/DaianaArena/ollivanders-shopping-cart",
    deploy: "https://daianaarena.github.io/ollivanders-shopping-cart/",
    img: shopImage
  },
  {
    key: 5,
    title: "Memoji-Test",
    description: "MemoTest with Emojis is a fun and addictive game built entirely with vanilla JavaScript. The game challenges players to test their memory and pattern recognition skills by matching pairs of emojis hidden behind a grid of cards. With colorful and expressive emojis as the main visual element, this game offers a unique and engaging user experience.",
    repo: "https://github.com/DaianaArena/memoji-test",
    deploy: "https://daianaarena.github.io/memoji-test/",
    img: memojiImage
  },
  {
    key: 6,
    title: "Pokedex APP",
    description: "This project is a Pokedex, built using HTML, CSS, and JavaScript, and powered by the PokeAPI REST service. The Pokedex allows users to search for and view information about different Pokemon, including their name, type, stats, and evolution chain.",
    repo: "https://github.com/DaianaArena/pokedex-v2",
    deploy: "https://daianaarena.github.io/pokedex-v2/",
    img: pokedexImage
  }
  
]

export default function About () {
 

  // Render the content of the projects page
  return (

    <div className="">

      <h1 className="py-10 px-12 text-3xl md:text-5xl lg:text-7xl font-bold mb-4 text-orange-400">My Projects</h1>
      <div className=" py-10 px-12 grid grid-flow-row gap-8 text-neutral-600 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
              
      {/* Array map for the cards creation */}        
      {Projects.map(({ key, title, description, repo, deploy, img}) => (
        <div className="!z-5 relative flex flex-col rounded-[20px] max-w-[300px]  bg-clip-border shadow-3xl shadow-shadow-500  w-full !p-4 3xl:p-![18px] bg-gray-900 undefined animate-float">
            <div className="h-full w-full">
                <div className="relative w-full">
                    <Image src={img} alt="" />
                </div>
                <div className="mb-3 flex items-center justify-between px-1 md:items-start">
                    <div className="mb-2">
                        <p className="text-lg font-bold text-white"> {title} </p>
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
                            className='relative inline-flex text-sm sm:text-base rounded-full font-medium border-2 border-transparent transition-colors outline-transparent focus:outline-transparent disabled:opacity-50 disabled:pointer-events-none  disabled:hover:opacity-40 disabled:cursor-not-allowed disabled:shadow-none
                            text-white bg-[#FB3355] hover:bg-[#FF7067] focus:border-[#FF7067]  px-4 py-1 sm:py-1.5 sm:px-5'
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
