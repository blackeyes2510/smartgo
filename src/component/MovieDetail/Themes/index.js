import React from 'react'
import './style.scss'

const Themes = () => {

    const themes = ['Racial Equality', 'Ageism', 'Mental Health', 'Multiculturalism', 'Body Positivity', 'Climate Change', 'Fear of Intimacy', 'Gender Naturality', 'Gender Parity', 'LGBTQ Rights', 'Women in Power'];
    const listTheme = themes.map((theme) =>
        <li key={theme}>{theme}</li>
    )

    return (
        <div className='themes-wrapper'>
            <h3>Themes now</h3>
            <ul>{listTheme}</ul>
        </div>
    )
}

export default Themes