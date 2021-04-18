import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

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
export const firestore = firebase.firestore();

export const generateUserDocument = async (user, additionalData) => {
    if (!user) return;
    const userRef = firestore.doc(`users/${user.uid}`);
    const snapshot = await userRef.get();
    if (!snapshot.exists) {
      const { email, displayName, photoURL } = user;
      try {
        await userRef.set({
          displayName,
          email,
          photoURL,
          ...additionalData
        });
      } catch (error) {
        console.error("Error creating user document", error);
      }
    }
    return getUserDocument(user.uid);
  };
  const getUserDocument = async uid => {
    if (!uid) return null;
    try {
      const userDocument = await firestore.doc(`users/${uid}`).get();
      return {
        uid,
        ...userDocument.data()
      };
    } catch (error) {
      console.error("Error fetching user", error);
    }
  };