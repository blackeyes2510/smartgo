import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlay, faPlus } from '@fortawesome/free-solid-svg-icons'
import './style.scss'

const BannerMovieList = () => {
    // const movieName = 'Spider Man 3';
    // const duration = '2 h 30 mins'
    // const genres = 'Action, Movies';
    // const year = '2022';
    // const certification = 'U/A, 13+';
    // const audioLanguage = 'English';
    // const Subtitles = 'English, French'
    // const movieStory = 'Peter Parker becomes one with a symbiotic alien that bolsters his Spider-Man avatar and affects his psyche. He also has to deal with Sandman and maintain a fragmented relationship with Mary Jane.'
    return (
        <div className='movie-list-bg'>
        <div className='movie-list'>
            <h3>{movieName}</h3>
            <p>{movieStory}</p>
            <div>Duration: {duration}</div>
            <div>Genres: {genres}</div>
            <div>
                <span>Year: {year}</span>
                <span>certification: {certification}</span>
            </div>
            <div>Audio Languages: {audioLanguage}</div>
            <div>Subtitles: {Subtitles}</div>
            <div className='play-add-btns'>
                <span><FontAwesomeIcon icon={faPlay} /></span>
                <span><FontAwesomeIcon icon={faPlus} /></span>
            </div>
        </div>
        </div>
    )
}

export default BannerMovieList