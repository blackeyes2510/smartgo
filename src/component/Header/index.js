import { NavLink } from 'react-router-dom'
import './style.scss'

const Header = () => {

    const user = true;

    return (
        <div className='header-wrapper'>
            <div className='header-left'>

                {user ? (

                    <h2><NavLink to="/login">SmartGo</NavLink></h2>

                ) : (

                    <nav>
                        <NavLink exact to="/">Home</NavLink>
                        <NavLink to="/tv-shows">Tv Shows</NavLink>
                        <NavLink to="/movies">Movies</NavLink>
                        <NavLink to="/categories">Categories</NavLink>
                    </nav>

                )}
            </div>

            <div className='header-right'>
                <div className='input'>
                    <input placeholder='search movies, tv shows'></input>
                </div>
            </div>
        </div>
    )
}

export default Header