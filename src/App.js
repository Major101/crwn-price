import './App.css';
import React from 'react';
import HomePage from "./pages/homepage/homepage.component";
import {Switch, Route, Redirect} from "react-router-dom";
import { createStructuredSelector } from "reselect";
import ShopPage from "./pages/shop/shop.component";
import Header from "./components/header/header.component";
import SignInAndSignUp from "./pages/sign-in-and-sign-up/sign-in-and-sign-up.component";
import {auth, createUserProfileDocument} from "./firebase/firebase.utils";
import CheckoutPage from "./pages/checkout/checkout.component";
import {connect} from "react-redux";
import {setCurrentUser} from "./redux/user/user.actions";
import { selectCurrentUser } from './redux/user/user.selector';


class App extends React.Component {
    unsubscribeFromAuth = null

    componentDidMount() {
        const {setCurrentUser} = this.props;
        this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
            if(userAuth){
                const userRef = await createUserProfileDocument(userAuth);

                userRef.onSnapshot(snapshot => {
                    setCurrentUser({
                        id: snapshot.id,
                        ...snapshot.data()
                    });
                });
            } else {
                setCurrentUser(userAuth);
            }
        })
    }

    componentWillUnmount() {
        this.unsubscribeFromAuth();
    }

    render() {
      return <div>
            <Header/>
            <Switch>
                <Route exact path='/' component={HomePage}></Route>
                <Route path='/shop' component={ShopPage}></Route>
                <Route path='/checkout' component={CheckoutPage}></Route>

                <Route exact path='/sign-in'
                       render={() => this.props.currentUser ? (<Redirect to='/' />) : (<SignInAndSignUp/>)}></Route>
            </Switch>
        </div>
    }
}

const mapStateToProps = createStructuredSelector({
    currentUser: selectCurrentUser
})

const mapDispatchToProps = dispatch => ({
    setCurrentUser: user => dispatch(setCurrentUser(user))
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
