import './globals.css'
import Link from 'next/link'

//Import images
import Image from 'next/image'
import NavLogo from '../../public/logos/logo-chico.png'
import MobileMenu from './components/MobileMenu'

//List of pages in this project
const Links = [
  {
    label: "Home",
    route: "/"
  },
  {
    label: "About",
    route: "/about"
  },
  {
    label: "Projects",
    route: "/projects"
  },
  {
    label: "CV",
    route: "/cv"
  },
  {
    label: "Contact me",
    route: "/contact"
  }

]

//Tab info
export const metadata = {
  title: 'Daiana Arena - Portfolio',
  description: "Hi! I'm a Frontend Developer",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {

  //Render the main content and the nav bar
  return (
    <html lang="en" className="md:h-screen">
      
      {/*Head meta data for social media*/}
      <head>
      
      <meta name="viewport" content="initial-scale=1.0, width=device-width"/>

      <meta name="title" content="Daiana Arena"/>
      <meta name="description" content="Hi, I'm Daiana, a Frontend Developer based in Argentina. Visit my portfolio and let's work together!"/>


      <meta property="og:type" content="website"/>
      <meta property="og:url" content="https://daianaarena.vercel.app/"/>
      <meta property="og:title" content="Daiana Arena"/>
      <meta property="og:description" content="Hi, I'm Daiana, a Frontend Developer based in Argentina. Visit my portfolio and let's work together!"/>
      <meta property="og:image" content="https://i.imgur.com/tkgZDxf.png"/>


      <meta property="twitter:card" content="summary_large_image"/>
      <meta property="twitter:url" content="https://daianaarena.vercel.app/"/>
      <meta property="twitter:title" content="Daiana Arena"/>
      <meta property="twitter:description" content="Hi, I'm Daiana, a Frontend Developer based in Argentina. Visit my portfolio and let's work together!"/>
      <meta property="twitter:image" content="https://i.imgur.com/tkgZDxf.png"/>


      </head>

      <body className='bg-gray-100 max-w-7xl mx-auto md:h-screen md:flex md:flex-col md:overflow-hidden'>

        {/* Tb and Dt navbar*/}
        <nav className="bg-gray-200 rounded-lg shadow-lg md:flex-shrink-0">
          <div className=" mx-auto px-12 sm:px-6 lg:px-8">
            <div className="flex justify-between h-16">
              <div className=" flex justify-center items-center" >
                  <Image
                    src={NavLogo}
                    alt="Logo Daiana Arena"
                    
                    width={50}
                    height={50}
                  />
              </div>
              
              <ul className="hidden md:flex items-center justify-end  md:flex-1 lg:w-0  space-x-4">

                {Links.map(({ label, route}) => (

                  <li key={route} className="whitespace-nowrap text-base font-medium text-gray-900 hover:text-orange-400  ">
                    <Link href={route}>{label}</Link>
                  </li>
                
                ))}

                
              </ul>

              {/* Mb navbar */}
              <MobileMenu />
            </div>
          </div>
                    </nav>

        <div className="md:flex-1 md:overflow-hidden">
          {children}
        </div>
        
      </body>
    </html>
  )
}
