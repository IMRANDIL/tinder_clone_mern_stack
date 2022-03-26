import React from 'react'

import './Header.css'
import PersonIcon from '@mui/icons-material/Person';
import { IconButton } from '@mui/material';






const Header = () => {
    return (
        <div className='header'>
            <IconButton>
                <PersonIcon fontSize='large' className='header__icon' />
            </IconButton>

            <img draggable='false' src="https://1000logos.net/wp-content/uploads/2018/07/Tinder-icon.png" className='header__logo' alt="tinder-img" />


        </div>
    )
}

export default Header