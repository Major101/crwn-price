import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";


const config = {
    apiKey: "AIzaSyDtzcn1uXqQTijxzIkVuU66jnRkwtd-YRs",
    authDomain: "crwn-db-18073.firebaseapp.com",
    projectId: "crwn-db-18073",
    storageBucket: "crwn-db-18073.appspot.com",
    messagingSenderId: "961275380729",
    appId: "1:961275380729:web:c78c07aac17c9ade5bf328",
    measurementId: "G-9T016MBJB3"
}

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt: 'select_account'});

export const signInWithGoogle = () => auth.signInWithPopup(provider);
export default firebase;