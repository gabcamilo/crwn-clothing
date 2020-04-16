import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth'

const config = {
	apiKey: "AIzaSyBfr3RkHXY5Cj9gBHsH9r97jgyjmRx_atc",
	authDomain: "crwn-db-14909.firebaseapp.com",
	databaseURL: "https://crwn-db-14909.firebaseio.com",
	projectId: "crwn-db-14909",
	storageBucket: "crwn-db-14909.appspot.com",
	messagingSenderId: "42984804827",
	appId: "1:42984804827:web:925e14de5eb9fbf08717fe",
	measurementId: "G-3QM06ZR2CQ"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt: 'select_account'});
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;