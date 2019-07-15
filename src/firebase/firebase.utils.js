import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

const config = {
    apiKey: "AIzaSyABOH_fmiFNfikttQUD316ptn9ScA5FnaM",
    authDomain: "crwn-db-90df8.firebaseapp.com",
    databaseURL: "https://crwn-db-90df8.firebaseio.com",
    projectId: "crwn-db-90df8",
    storageBucket: "",
    messagingSenderId: "640884551911",
    appId: "1:640884551911:web:e0f6e59348eb4061"
}

firebase.initializeApp(config)

export const auth = firebase.auth()
export const firestore = firebase.firestore()

const provider = new firebase.auth.GoogleAuthProvider()
provider.setCustomParameters({ prompt: 'select_account' })
export const signInWithGoogle = () => auth.signInWithPopup(provider)

export default firebase