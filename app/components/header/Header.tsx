import Link from "next/link"
import NavBar from "./NavBar"
import ToggleTheme from "./ToggleTheme"


const Header = () => {
  return (
    <header className="bg-white dark:bg-gray-900 shadow-md transition-colors duration-300">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
            <h1 className="text-2xl font-bold text-gray-800 dark:text-white">
                <Link 
                    href="/"
                    className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                >
                    The MovieDB
                </Link>
            </h1>
            <div className="hidden md:flex flex-1 justify-center">
                <NavBar/>
            </div>
            <div className="flex items-center gap-4">
                <div className="md:hidden">
                    {/* Menú Hamburg */}
                </div>
                <ToggleTheme/>
            </div>
        </div>
    </header>
  )
}

export default Header
