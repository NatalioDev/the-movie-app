import Link from "next/link";
import { Movie } from "../types/movie"
import Image from "next/image";
import { StarIcon } from "@heroicons/react/24/solid";

const MovieCard = ({ movie } : { movie: Movie } ) => {
    
    const imageUrl = movie.poster_path
        ? `${process.env.NEXT_PUBLIC_IMAGE_BASE_URL}/w500${movie.poster_path}`
        : '/no-image.jpg';

    return (
    <Link href={`/movie/${movie.id}`} className="group:">
        <div className="bg-gray-800 rounded-lg overflow-hidden shadow-lg transition-transform duration-300 group-hover:scale-105">
            <div className="relative h-80">
                <Image
                    src={imageUrl}
                    alt={movie.title}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
            </div>
            <div className="p-4">
                <h3 className="text-lg font-semibold text-white truncate">
                    {movie.title}
                </h3>
                <div className="flex items-center mt-2">
                    <StarIcon className="ml-1 w-5 text-yellow-400"/>
                    <span className="ml-1 text-gray-300">
                        {movie.vote_average.toFixed(1)}
                    </span>
                    <span className="ml-2 text-gray-400 text-sm">
                        {new Date(movie.release_date).getFullYear()}
                    </span>
                </div>
            </div>
        </div>
    </Link>
  )
}

export default MovieCard
