import React from 'react';
import {ReactComponent as Logo} from '../../assests/crown.svg';
import {Link} from 'react-router-dom';
import {auth} from "../../firebase/firebase.utils";
import {connect} from "react-redux";
import CartDropdown from "../cart-dropdown/cart-dropdown.component";
import CartIcon from "../cart-icon/cart-icon.component";
import './header.styles.scss';


const Header = ({currentUser, hidden}) => {
    return <div className='header'>
        <Logo className='logo-container'/>

        <div className='options'>
            <Link className='option' to='/shop'>SHOP</Link>
            <Link className='option' to=''>CONTACT</Link>
            {currentUser ? (
             <div className='option' onClick={() => auth.signOut()}>SIGN OUT</div>
            )
            :
            <Link className='option' to='/sign-in'>SIGN IN</Link>
            }
            <CartIcon/>
        </div>
        {hidden ? null : <CartDropdown/>}
    </div>
}

const mapStateToProps = ({user: {currentUser}, cart: {hidden} }) =>({
    currentUser,
    hidden
})

export default connect(mapStateToProps)(Header);