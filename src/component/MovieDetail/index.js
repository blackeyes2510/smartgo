import Themes from './Themes'
import Detail from './Detail'
import './style.scss'

const MovieDetail = () => {
    return (
        <div className='movie-detail d-none'>
            <Themes />
            <Detail />
        </div>
    )
}

export default MovieDetail