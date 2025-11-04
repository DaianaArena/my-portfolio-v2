'use client'

import { useState, useEffect, useRef } from 'react'
import Link from 'next/link'

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

export default function MobileMenu() {
  const [isOpen, setIsOpen] = useState(false)
  const menuRef = useRef<HTMLDivElement>(null)
  const buttonRef = useRef<HTMLButtonElement>(null)

  useEffect(() => {
    function handleClickOutside(event: MouseEvent | TouchEvent) {
      const target = event.target as Node
      if (
        isOpen &&
        menuRef.current &&
        buttonRef.current &&
        !menuRef.current.contains(target) &&
        !buttonRef.current.contains(target)
      ) {
        setIsOpen(false)
      }
    }

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside as EventListener)
      document.addEventListener('touchstart', handleClickOutside as EventListener)
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside as EventListener)
      document.removeEventListener('touchstart', handleClickOutside as EventListener)
    }
  }, [isOpen])

  const toggleMenu = () => {
    setIsOpen(!isOpen)
  }

  const closeMenu = () => {
    setIsOpen(false)
  }

  return (
    <>
      <button 
        ref={buttonRef}
        onClick={toggleMenu}
        className='block md:hidden py-3 pt-5 rounded focus:outline-none hover:bg-gray-200'
        aria-label="Toggle menu"
        aria-expanded={isOpen}
      >
        <div className=' w-8 h-1 bg-[#FB3355] rounded mb-1'></div>
        <div className='w-8 h-1 bg-[#FB3355] rounded mb-1'></div>
        <div className='w-8 h-1 bg-[#FB3355] rounded mb-1'></div>
      </button>

      <div 
        ref={menuRef}
        className={`absolute top-0 z-10 right-0 h-screen w-8/12 bg-[#FB3355] border transition-all duration-300 ${
          isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}
      >
        <ul className='flex flex-col items-center justify-evenly w-full text-base cursor-pointer pt-16'>
          {Links.map(({ label, route}) => (
            <li key={route} className="whitespace-nowrap mb-8 text-2xl text-white">
              <Link href={route} onClick={closeMenu}>{label}</Link>
            </li>
          ))}
        </ul>
      </div>
    </>
  )
}

