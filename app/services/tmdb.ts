import axios from "axios";

const tmdbApi = axios.create({
    baseURL: process.env.NEXT_PUBLIC_TMDB_BASE_URL,
    params:{
        api_key: process.env.NEXT_PUBLIC_TMDB_API_KEY,
        language: 'es-ES',
    },
});

export default tmdbApi;