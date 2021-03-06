import React from 'react'
import { useState } from 'react'
import Banner from '../../component/Banner'
// import MovieDetail from '../../component/MovieDetail'
// import MoviesBanner from '../../component/MoviesBanner'
import Poster from '../../component/MoviePoster'
import './style.scss'

const Home = () => {

    const [hidden, setHidden] = useState(true);

    return (
        <div>
            <Banner />
            {/* <MovieDetail /> */}
            <div className='movie-poster-splitted'>
                <div className='movie-poster-left'>
                    <Poster />
                </div>
                <div className='movie-poster-right'>
                    <div className='button-toggle'>
                        <button onClick={() => setHidden(s => !s)}>
                            Based on search recommendations
                        </button>
                    </div>
                    {!hidden ? <Poster /> : null}
                </div>
            </div>
        </div>
    )
}

export default Home