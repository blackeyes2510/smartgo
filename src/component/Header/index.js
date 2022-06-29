import React from 'react'
import { NavLink } from 'react-router-dom'
// import {useState} from 'react'
import './style.scss'

const Header = () => {

    // const user = false;
    // const [isLoggedIn, setIsLoggedIn] = useState(false)


    return (
        <div className='header-wrapper'>
            <div className='header-left'>

                {/* {isLoggedIn ? */}
                <h2><NavLink to="/login">SmartGo</NavLink></h2>
                <nav>
                    <NavLink exact to="/">Home</NavLink>
                    <NavLink to="/tv-shows">Tv Shows</NavLink>
                    <NavLink to="/movies">Movies</NavLink>
                    <NavLink to="/categories">Categories</NavLink>
                </nav>
                {/* : */}

                {/* } */}

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