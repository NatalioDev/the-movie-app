export interface Movie {
    id: number;
    title: string;
    overview: string;
    poster_path: string | null;
    backdrop_path: string | null;
    release_date: string;
    vote_average: number;
    vote_count: number;
    popularity: number;
    genre_ids: number[];
  }
  
  export interface MovieListResponse {
    page: number;
    results: Movie[];
    total_pages: number;
    total_results: number;
  }
  
  export interface Genre {
    id: number;
    name: string;
  }
  
  export interface MovieDetails extends Movie {
    genres: Genre[];
    runtime: number;
    status: string;
    tagline: string;
    revenue: number;
    budget: number;
    homepage: string;
  }