import { FilmIcon, HomeIcon, TvIcon } from "@heroicons/react/24/solid"
import Link from "next/link"

const NavBar = () => {
  return (
    <nav className="bg-gray-100 dark:bg-gray-800 dark:text-white p-4 shadow-md transition-colors duration-300">
        <div className="flex justify-around items-center gap-6">
            <Link href="/"
                className="flex flex-col items-center gap-1 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
            >
                <HomeIcon className="h-6 w-6"/>
                <span className="text-sm">Home</span>
            </Link>
            <Link href="/movies"
                className="flex flex-col items-center gap-1 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
            >
                <FilmIcon className="h-6 w-6"/>
                <span className="text-sm">Movies</span>
            </Link>
            <Link href="/tvshows"
                className="flex flex-col items-center gap-1 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
            >
                <TvIcon className="h-6 w-6"/>
                <span className="text-sm">Series</span>
            </Link>
        </div>
    </nav>
  )
}

export default NavBar
