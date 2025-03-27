import NavBar from "../header/NavBar"
import { useMovies } from "../../utilites/hooks/useMovies"

const MoviesPage = () => {

    const { loading, error } = useMovies('/movie/popular')

    if (loading) return <div>Cargando...</div>
    if (error) return <div>Error: {error}</div>

  return (
    <div className="">
        <NavBar/>

    </div>
  )
}

export default MoviesPage
