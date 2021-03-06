import React from 'react';
import {ReactComponent as Logo} from '../../assests/crown.svg';
import {Link} from 'react-router-dom';
import {auth} from "../../firebase/firebase.utils";
import { selectCurrentUser } from "../../redux/user/user.selector";
import { selectCartHidden } from "../../redux/cart/cart.selector";
import {connect} from "react-redux";
import { createStructuredSelector } from "reselect";
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

const mapStateToProps = createStructuredSelector({
    currentUser: selectCurrentUser,
    hidden: selectCartHidden
})

export default connect(mapStateToProps)(Header);