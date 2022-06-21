import { useState } from 'react'
import Banner from '../../component/Banner'
import MovieDetail from '../../component/MovieDetail'
import MoviesBanner from '../../component/MoviesBanner'
import './style.scss'

const Home = () => {

    const [hidden, setHidden] = useState(true);

    return (
        <div>
            <Banner />
            <MovieDetail />
            <div className='movie-poster-splitted'>
                <div className='movie-poster-left'>
                    <MoviesBanner />
                </div>
                <div className='movie-poster-right'>
                    <div className='button-toggle'>
                        <button onClick={() => setHidden(s => !s)}>
                            Based on search recommendations
                        </button>
                    </div>
                    {!hidden ? <MoviesBanner /> : null}
                </div>
            </div>
        </div>
    )
}

export default Home