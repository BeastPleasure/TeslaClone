import React from 'react';
import './Header.css';
import {Link} from 'react-router-dom';
import CloseIcon from '@mui/icons-material/Close';
import MenuIcon from '@mui/icons-material/Menu';


function Header({isMenuOpen, setIsMenuOpen}) {

  return (
    <div className='header'>
        
        <div className='header__logo'>
            
            <Link to = '/'>
                <img
                    className='header__logoImg' 
                    src='/images/Logo1.svg'
                    alt=''
                />
            </Link>

        </div>

        <div className='header__links'>
            
            <Link to='/'> Model S </Link>
            <Link to='/'> Model 3 </Link>
            <Link to='/'> Model X </Link>
            <Link to='/ModelY'> Model Y </Link>
            <Link to='/'> Solar Roof </Link>
            <Link to='/'> Solar Panels </Link>

        </div>

        <div className='header__right'>
            
            <Link 
                to='/'
                className={isMenuOpen && 'header__link--hidden'}
            > 
                Shop 
            </Link>

            <Link 
                to='/Login2'
                className={isMenuOpen && 'header__link--hidden'}
            > 
                Account
            </Link>
            
            <div 
                className='header__menu'
                onClick={() => setIsMenuOpen(!isMenuOpen)}
            >

                {isMenuOpen ? <CloseIcon/> : <MenuIcon/>}

            </div>
        </div>

    </div>
  )
}

export default Header;