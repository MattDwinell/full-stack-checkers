import firebase from "firebase/app";
import "firebase/auth";

const dotenv = require('dotenv');
dotenv.config();
const firebaseConfig = {
    apiKey: "AIzaSyBa6KoxDdgymaNzD822dqL4gNGdKw_K0fU",
    authDomain: "full-stack-checkers.firebaseapp.com",
    projectId: "full-stack-checkers",
    storageBucket: "full-stack-checkers.appspot.com",
    messagingSenderId: "497212367040",
    appId: "1:497212367040:web:2bb3e2824ad3f795ff8d25"
  };
firebase.initializeApp(firebaseConfig);
const provider = new firebase.auth.GoogleAuthProvider();
export const  signInWithGoogle = ()=>{
    auth.signInWithPopup(provider);
}
export const auth = firebase.auth();