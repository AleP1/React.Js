import firebase from "firebase";
import 'firebase/firestore'

var firebaseConfig = {
    apiKey: "AIzaSyADcLXUPWAj_aEp-ej9HMCw34nqSfepUWg",
    authDomain: "alejop-21d45.firebaseapp.com",
    projectId: "alejop-21d45",
    storageBucket: "alejop-21d45.appspot.com",
    messagingSenderId: "950419277641",
    appId: "1:950419277641:web:5cebed8cf649422b447c98",
    measurementId: "G-G9E3LQ0KCF"
}

const fb = firebase.initializeApp(firebaseConfig)

export const dataBase = fb.firestore()