import React from 'react';
import './Header2.css';
import {Link} from 'react-router-dom';
import LanguageIcon from '@mui/icons-material/Language';

function Header2() {
  return (
    <div className='header2'>

        <div className='header2__logo'>

            <Link to = '/'>
                <img
                    className='header2__logoImg' 
                    src='/images/Logo1.svg'
                    alt=''
                />
            </Link>

        </div>

        <div className='header2__right'>

            <LanguageIcon/> <span> en-US </span>

        </div>

    </div>
  )
}

export default Header2;