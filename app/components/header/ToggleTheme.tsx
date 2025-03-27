'use client';

import { useTheme } from "@/app/utilites/context/useTheme";
import { MoonIcon, SunIcon } from "@heroicons/react/24/solid"

const ToggleTheme = () => {
    const { theme, toggleTheme } = useTheme()
  return (
    <>
        <button 
            aria-pressed={theme.name === "dark"}
            onClick={toggleTheme}
            className="p-2 rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 dark:focus:ring-offset-gray-800"
            aria-label={`Switch to ${theme.name === 'dark' ? 'light' : 'dark'} mode`}
        >
            {theme.name === "dark" ? (
                <MoonIcon className="h-6 w-6 text-cyan-600"/>
            ):(
                <SunIcon className="h-6 w-6 text-amber-400"/>
            )}
        </button>
    </>
  )
}

export default ToggleTheme
