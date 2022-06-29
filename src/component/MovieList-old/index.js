import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlay, faPlus } from '@fortawesome/free-solid-svg-icons'
// import './style.scss'

const MovieList = ({ movieDetail, close }) => {

    const { title, plot, runtimeStr, year, keywordList, contentRating, languages, image } = movieDetail || {};

    return (
        <div className='movie-list-bg'>
            <input type="button" onClick={close} value="X" />
            <div> <img src={image} id={title} alt={image} /></div>
            <div className='movie-list'>
                <h3>{title}</h3>
                <p>{plot}</p>
                <div>Duration: {runtimeStr}</div>
                <div>Genres: {keywordList}</div>
                <div>Year: {year}</div>
                <div>
                    Certification: <span>{contentRating}</span>
                </div>
                <div>Audio Languages: {languages}</div>
                <div>Subtitles: {languages}</div>
                <div className='play-add-btns'>
                    <span><FontAwesomeIcon icon={faPlay} /></span>
                    <span><FontAwesomeIcon icon={faPlus} /></span>
                </div>
            </div>
        </div>
    )

}

export default MovieList