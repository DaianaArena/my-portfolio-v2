"use client"
import { useTheme } from 'next-themes'
import { useState, useEffect } from 'react'
import { IoIosMoon } from "react-icons/io";
import { IoIosSunny } from "react-icons/io";


const ThemeSwitcher = () => {
    const [mounted, setMounted] = useState(false)
    const { theme, setTheme } = useTheme()
  
    useEffect(() => {
      setMounted(true)
    }, [])

    const handleToggleChange = () => {
      
        theme == "dark" ? setTheme("light") : setTheme("dark");
    };
  
    if (!mounted) {
      return null
    }
  
    return (
      <button  onClick={handleToggleChange}>
        {theme == "dark" &&
          <IoIosSunny className="text-white"/>
        }
        {theme != "dark" &&
          <IoIosMoon  />
        }
      </button>
    )
}

export default ThemeSwitcher

