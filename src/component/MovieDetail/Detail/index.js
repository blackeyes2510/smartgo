import React, { useEffect, useState } from "react";
import { API_KEY } from "../../../App";
import { useParams } from "react-router-dom";

const getMovieDetail = async (movieId) => {
    const response = await fetch(
        `https://imdb-api.com/en/API/Title/${API_KEY}/${movieId}`
    );
    return await response.json();
};

const Detail = () => {
    const { movieId } = useParams();
    const [movieDetail, setMovieDetail] = useState(null);
    useEffect(() => {
        (async () => {
            const detail = await getMovieDetail(movieId);
            setMovieDetail(detail);
        })();
    }, [movieId]);

    return (
        movieDetail && (
            <div className="movie-list-bg">
                <div className="movie-list">
                    {movieDetail.errorMessage && movieDetail.errorMessage.length ? (
                        <h3>API key expired please update the same</h3>
                    ) : (
                        <div className="details">
                            <div className="details-left">
                                <h3>{movieDetail.title}</h3>
                                <p>{movieDetail.plot}</p>
                                <div>Duration: {movieDetail.runtimeStr}</div>
                                {/* <div>Genres: {movieDetail.keywordList.join(", ")}</div> */}
                                <div>Year: {movieDetail.year}</div>
                                <div>
                                    Certification: <span>{movieDetail.contentRating}</span>
                                </div>
                                <div>Audio Languages: {movieDetail.languages}</div>
                                <div>Subtitles: {movieDetail.languages}</div>
                            </div>
                            <div className="details-right"><img src={movieDetail.image} id={movieDetail.title} alt="" /></div>
                        </div>
                    )}
                </div>
            </div>
        )
    );
};

export default Detail;
