export interface Movie {
    id: number;
    title: string;
    overview: string;
    poster_path: string;
    vote_average: number;
    genre_ids: number[];
    release_date: string;

    backdrop_path: string;
    genres: object[];
    homepage: string;
    tagline: string;
}
