import firebase from 'firebase/compat/app';
import { initializeApp } from "firebase/compat/app";
import { getFirestore } from "firebase/compat/firestore";

// import "firebase/compat/auth";


const firebaseConfig = {
  apiKey: "AIzaSyB6ffZrRKQs1W0rNeYmZc6jwyiKO3lDJ1w",
  authDomain: "foodapp-ce008.firebaseapp.com",
  projectId: "foodapp-ce008",
  storageBucket: "foodapp-ce008.appspot.com",
  messagingSenderId: "129668730521",
  appId: "1:129668730521:web:e5480f5bb8e7069913f208"
};

if (!firebase.apps.length){
  firebase.initializeApp(firebaseConfig);
}

export {firebase};
