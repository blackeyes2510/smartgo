import DetailImg from './../../../images/Once_Upon_a_Time_in_Hollywood_poster.png'
import MovieList from '../../MovieList';
import './style.scss'

const Detail = () => {

    const Synopsis = 'A faded television actor and his stunt double strive to achieve fame and success in the final years of Hollywood Golden Age in 1969 Los Angels';

    return (
        <div className='detail-wrapper'>
            <div className='detail-left'>
                <img src={DetailImg} alt={DetailImg} />
            </div>
            <div className='detail-right'>
                <div>Synopsis: {Synopsis}</div>
                <MovieList className="movie-list" />
            </div>
        </div>
    )
}

export default Detail