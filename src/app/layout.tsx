import './globals.css'
import Link from 'next/link'
import Image from 'next/image'
import NavLogo from '../../public/logos/logo-chico.png'

const Links = [
  {
    label: "Home",
    route: "/"
  },
  {
    label: "About",
    route: "/about"
  }
]

export const metadata = {
  title: 'Daiana Arena - Portfolio',
  description: "Hi! I'm a Frontend Developer",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      


      <body>
        <nav className="bg-gray-100 rounded-lg shadow-lg">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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

                  <li key={route} className="whitespace-nowrap text-base font-medium text-gray-500 hover:text-gray-900  ">
                    <Link href={route}>{label}</Link>
                  </li>
                
                ))}

                
              </ul>
            </div>
          </div>
        </nav>

        {children}
        
      </body>
    </html>
  )
}
