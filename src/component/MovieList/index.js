import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlay, faPlus } from '@fortawesome/free-solid-svg-icons'
import './style.scss'

const MovieList = () => {
    const movieName = 'Spider Man 3';
    const Duration = '2 h 30 mins'
    const Genres = 'Action, Movies';
    const Year = '2022';
    const Certification = 'U/A, 13+';
    const AudioLanguage = 'English';
    const Subtitles = 'English, French'
    const movieStory = 'Peter Parker becomes one with a symbiotic alien that bolsters his Spider-Man avatar and affects his psyche. He also has to deal with Sandman and maintain a fragmented relationship with Mary Jane.'
    return (
        <div className='movie-list-bg'>
        <div className='movie-list'>
            <h3>{movieName}</h3>
            <p>{movieStory}</p>
            <div>Duration: {Duration}</div>
            <div>Genres: {Genres}</div>
            <div>
                <span>Year: {Year}</span>
                <span>{Certification}</span>
            </div>
            <div>Audio Languages: {AudioLanguage}</div>
            <div>Subtitles: {Subtitles}</div>
            <div className='play-add-btns'>
                <span><FontAwesomeIcon icon={faPlay} /></span>
                <span><FontAwesomeIcon icon={faPlus} /></span>
            </div>
        </div>
        </div>
    )
}

export default MovieList