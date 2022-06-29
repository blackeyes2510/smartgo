import React, { useEffect, useState } from "react";
// import MovieList from "../MovieList";
// import DetailImg from '../../images/Once_Upon_a_Time_in_Hollywood_poster.png'
// import DetailImg from "../../images"
// import { Link } from "react-router-dom";
import Detail from "../../component/MovieDetail/Detail"
import { useNavigate } from "react-router-dom";
// import { useNavigate } from "react-router-dom";
import { API_KEY } from "../../App"
import './style.scss'

const movies = [
    "tt2599716",
    "tt0069620",
    "tt0089374",
    "tt0104558",
    "tt5748448"
];

const getMoviePosters = async (movies) => {
    return movies.map(async (movie) => {
        const moviePoster = await fetch(
            `https://imdb-api.com/en/API/Posters/${API_KEY}/${movie}`
        );
        return await moviePoster.json();
    });
};

const Poster = () => {
    const navigate = useNavigate();
    const routePath = (path) => navigate(path, { replace: true });
    const [postersData, setPosters] = useState();
    const [movieDetail, setMovieDetail] = useState(null);
    useEffect(() => {
        (async () => {
            const postersPromise = await getMoviePosters(movies);
            const posters = await Promise.all(postersPromise);
            setPosters(posters);
        })();
    }, []);
    return (
        <div>
            <div className="movies-poster">
                <h3>Top Movies / TV Shows watched</h3>
                <ul>
                    {postersData &&
                        !movieDetail &&
                        postersData.map((poster) => {
                            const { errorMessage } = poster;
                            if (errorMessage.length) {
                                return <h3>API key expired please update the same</h3>;
                            }
                            return (
                                <li
                                    key={poster.imDbId}
                                    onClick={async () => {
                                        routePath(`/Detail/${poster.imDbId}`);
                                    }}
                                >
                                    <img src={poster.posters[0].link} id={poster.imDbId} alt={poster.imDbId} />
                                </li>
                            );
                        })}
                </ul>
                <div className="movie-detail">
                    {movieDetail && (
                        <Detail
                            movieDetail={movieDetail}
                            close={() => setMovieDetail(null)}
                        />
                    )}
                </div>
            </div>
        </div>
    );
}

export default Poster;
