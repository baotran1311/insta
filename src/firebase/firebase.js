// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";

import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDFE_E8kIxFpZRKaFSelpRA79xvl_yYfiw",
  authDomain: "insta-clone-48dad.firebaseapp.com",
  projectId: "insta-clone-48dad",
  storageBucket: "insta-clone-48dad.appspot.com",
  messagingSenderId: "577411173081",
  appId: "1:577411173081:web:155e8494d567aea3ebccc8",
  measurementId: "G-64W7WKBNQG",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

const auth = getAuth(app);
const firestore = getFirestore(app);
const storage = getStorage(app);

export { app, auth, firestore, storage };
