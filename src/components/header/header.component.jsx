import React from 'react';
import {ReactComponent as Logo} from '../../assests/crown.svg';
import {Link} from 'react-router-dom';
import './header.styles.scss';

const Header = () => {
    return <div className='header'>
        <Logo className='logo-container'/>

        <div className='options'>
            <Link className='option' to='/shop'>SHOP</Link>
            <Link className='option'>CONTACT</Link>
        </div>
    </div>
}

export default Header;