import React from 'react';
import { NavLink } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus } from '@fortawesome/free-solid-svg-icons'
import Profile1 from '../../images/login-profile-01.jpg'
import Profile2 from '../../images/login-profile-02.jpg'
import './style.scss'

// const Button = styled.button

const LoginComp = (props) => {

    const hiddenFileInput = React.useRef(null);

    const handleClick = event => {
        hiddenFileInput.current.click();
    };

    const handleChange = event => {
        const fileUploaded = event.target.files[0];
        props.handleFile(fileUploaded);
    };

    return (
        <div className='login-wrapper'>
            <div className='login-img'>
                <ul>
                    <li>
                        <NavLink exact to="/"><img src={Profile1} alt={Profile1} /></NavLink>
                    </li>
                    <li>
                        <NavLink exact to="/"><img src={Profile2} alt={Profile2} /></NavLink>
                    </li>
                    <li>
                        <button onClick={handleClick}>
                            <FontAwesomeIcon icon={faPlus} />
                        </button>
                        <input type="file"
                            ref={hiddenFileInput}
                            onChange={handleChange}
                            style={{ display: 'none' }}
                        />
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default LoginComp