import Link from "next/link"

const NavBar = () => {
  return (
    <nav className="bg-gray-900 text-white p-4 shadow-lg">
        <div className="container mx-auto flex justify-between items-center">
            <Link href="/" className="text-2xl font-bold">
                MovieDB
            </Link>
            <div className="flex space-x-4">
                <Link href="/movies" className="hover:text-yellow-400">
                    Películas
                </Link>
                <Link href="#" className="hover:text-yellow-400">
                    Series
                </Link>
                <Link href="#" className="hover:text-yellow-400">
                    Favoritos
                </Link>
            </div>
        </div>
    </nav>
  )
}

export default NavBar
