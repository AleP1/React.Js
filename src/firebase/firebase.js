import firebase from 'firebase/app';
import 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyDYdU0dpUW0TuB_IdPjJzYICyDtxfPHtBU",
    authDomain: "ecommerce-con-react.firebaseapp.com",
    projectId: "ecommerce-con-react",
    storageBucket: "ecommerce-con-react.appspot.com",
    messagingSenderId: "173676379213",
    appId: "1:173676379213:web:0523be82899416f4f4f004"
}

firebase.initializeApp(firebaseConfig)

export const projectFirestore = firebase.firestore()