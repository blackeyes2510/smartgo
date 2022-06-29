import React from 'react'
import Video1 from '../../videos/sex-education-season-3.mp4';
import Video2 from '../../videos/joker-trailer.mp4';
import Video3 from '../../videos/tenet-trailer.mp4';
import Video from '../../component/MuteButton';
import Detail from "../../component/MovieDetail/Detail"
import AwesomeSlider from 'react-awesome-slider';
import 'react-awesome-slider/dist/styles.css';
import './style.scss'

const Trailer = () => {
    return (
        <div className="trailer">

            <AwesomeSlider>
                <div>
                    <Video src={Video1} />
                    
                    <Detail
                        movieName ="Sex Education Season 3"
                        duration = '2 h 30 mins'
                        genres = 'Action, Romantic'
                        year = '2018'
                        certification = 'A, 18+'
                        audioLanguage = 'English, French'
                        subtitles = ''
                        movieStory = 'Peter Parker becomes one with a symbiotic alien that bolsters his Spider-Man avatar and affects his psyche. He also has to deal with Sandman and maintain a fragmented relationship with Mary Jane.'
                    />
                </div>
                <div>
                    <Video src={Video2} />
                    <Detail
                        movieName ="Joker"
                        duration = '2 h '
                        genres = 'Action, Drama'
                        year = '2020'
                        certification = 'U, 13+'
                        audioLanguage = 'English, Spanish'
                        subtitles = ''
                        movieStory = 'Peter Parker becomes one with a symbiotic alien that bolsters his Spider-Man avatar and affects his psyche. He also has to deal with Sandman and maintain a fragmented relationship with Mary Jane.'
                    />
                </div>
                <div>
                    <Video src={Video3} />
                    <Detail
                        movieName ="Tenet"
                        duration = '2 h 50 mins'
                        genres = 'Action, Thriller'
                        year = '2017'
                        certification = 'U/A, 16+'
                        audioLanguage = 'English, German'
                        subtitles = ''
                        movieStory = 'Peter Parker becomes one with a symbiotic alien that bolsters his Spider-Man avatar and affects his psyche. He also has to deal with Sandman and maintain a fragmented relationship with Mary Jane.'
                    />
                </div>
            </AwesomeSlider>

        </div>
    );
}

export default Trailer