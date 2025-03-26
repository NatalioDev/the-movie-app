'use client';

import { useEffect, useState } from "react";
import { Movie, MovieListResponse } from "../types/movie";
import tmdbApi from "../services/tmdb";


export const useMovies = (endpoint: string, query?: string) => {
    const [movies, setMovies] = useState<Movie[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);
    const [totalPages, setTotalPages] = useState(1)

    useEffect(() => {
        const fetchMovies = async () =>{
            try {
                setLoading(true);
                const response = await tmdbApi.get<MovieListResponse>(endpoint, {
                    params: {query},
                });
                setMovies(response.data.results);
                setTotalPages(response.data.total_pages);
            } catch (err) {
                setError('Error al cargar las películas');
                console.error(err)
            }finally{
                setLoading(false)
            }
        };
        fetchMovies();
    },[endpoint, query]);

    return { movies, loading, error, totalPages}

}