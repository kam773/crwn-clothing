import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyDhLQ-l4vgjXhM31CPZDt5g4XGssnc3hbk",
  authDomain: "crwn-db-bc6bc.firebaseapp.com",
  databaseURL: "https://crwn-db-bc6bc.firebaseio.com",
  projectId: "crwn-db-bc6bc",
  storageBucket: "crwn-db-bc6bc.appspot.com",
  messagingSenderId: "439932897469",
  appId: "1:439932897469:web:d80a4ad018be23cd334fd4",
  measurementId: "G-SDK529B65R"
};


firebase.initializeApp(firebaseConfig)

export const auth = firebase.auth()
export const firestore = firebase.firestore()

const provider = new firebase.auth.GoogleAuthProvider()
provider.setCustomParameters({prompt: 'select_account'})
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;