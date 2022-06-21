// import React, { useState } from 'react';
import Video1 from '../../videos/sex-education-season-3.mp4';
import Video2 from '../../videos/joker-trailer.mp4';
import Video3 from '../../videos/tenet-trailer.mp4';
import Video from '../../component/MuteButton';
import MovieList from '../MovieList'
import AwesomeSlider from 'react-awesome-slider';
import 'react-awesome-slider/dist/styles.css';
import './style.scss'

const Trailer = () => {
    return (
        <div className="trailer">

            <AwesomeSlider>
                <div>
                    <Video src={Video1} />
                    <MovieList />
                </div>
                <div>
                    <Video src={Video2} />
                    <MovieList />
                </div>
                <div>
                    <Video src={Video3} />
                    <MovieList />
                </div>
            </AwesomeSlider>

        </div>
    );
}

export default Trailer