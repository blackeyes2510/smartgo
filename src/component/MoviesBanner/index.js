import Poster1 from '../../images/Once_Upon_a_Time_in_Hollywood_poster.png'
import Poster2 from '../../images/220px-The_Crown_season_2.jpeg'
import Poster3 from '../../images/Avengers_Endgame_poster.jpg'
import Poster4 from '../../images/Big-Sky.jpg'
import Poster5 from '../../images/Billions-KeyArt.jpg'
import Poster6 from '../../images/Blade_Runner_2049_poster.png'
import Poster7 from '../../images/Candyman_2021_film.png'
import Poster8 from '../../images/Clickbait.jpg'
import Poster9 from '../../images/Copshop.jpg'
import Poster10 from '../../images/Cry_Macho_film_poster.png'
import Poster11 from '../../images/Dear-evan-hansen_film_poster.jpg'
import Poster12 from '../../images/Doom-Patrol.jpg'
import Poster13 from '../../images/Dune_2021_film.jpg'
import Poster14 from '../../images/Foundation.jpg'
import Poster15 from '../../images/Free_Guy_2021_Poster.jpg'
import Poster16 from '../../images/Ghosts.jpg'
import './style.scss'

const MoviesBanner = () => {
    return (
        <div className='movies-poster'>
            <h3>Top Movies / TV Shows watched</h3>
            <ul>
                <li><img src={Poster1} alt={Poster1} /></li>
                <li><img src={Poster2} alt={Poster2} /></li>
                <li><img src={Poster3} alt={Poster3} /></li>
                <li><img src={Poster4} alt={Poster4} /></li>
            </ul>
            <h3>Continue Watching</h3>
            <ul>
                <li><img src={Poster5} alt={Poster5} /></li>
                <li><img src={Poster6} alt={Poster6} /></li>
                <li><img src={Poster7} alt={Poster7} /></li>
                <li><img src={Poster8} alt={Poster8} /></li>
            </ul>
            <h3>Crime-Drama Movies/TV Shows</h3>
            <ul>
                <li><img src={Poster9} alt={Poster9} /></li>
                <li><img src={Poster10} alt={Poster10} /></li>
                <li><img src={Poster11} alt={Poster11} /></li>
                <li><img src={Poster12} alt={Poster12} /></li>
            </ul>
            <h3>Comedy Movies / TV Shows</h3>
            <ul>
                <li><img src={Poster13} alt={Poster13} /></li>
                <li><img src={Poster14} alt={Poster14} /></li>
                <li><img src={Poster15} alt={Poster15} /></li>
                <li><img src={Poster16} alt={Poster16} /></li>
            </ul>
            {/* <h3>Sci-Fi Movies / TV Shows</h3>
            <ul>
                <li><img src={Poster} alt={Poster} /></li>
                <li><img src={Poster} alt={Poster} /></li>
                <li><img src={Poster} alt={Poster} /></li>
                <li><img src={Poster} alt={Poster} /></li>
            </ul>
            <h3>Horror Movies / TV Shows watched</h3>
            <ul>
                <li><img src={Poster} alt={Poster} /></li>
                <li><img src={Poster} alt={Poster} /></li>
                <li><img src={Poster} alt={Poster} /></li>
                <li><img src={Poster} alt={Poster} /></li>
            </ul> */}
        </div>
    )
}

export default MoviesBanner