
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA7JlUvGBqA7kGEvqLSsWs9kdfufMvJw4U",
  authDomain: "teslaclone-b61cc.firebaseapp.com",
  projectId: "teslaclone-b61cc",
  storageBucket: "teslaclone-b61cc.appspot.com",
  messagingSenderId: "938981674626",
  appId: "1:938981674626:web:59262207c001c577236e9b",
  measurementId: "G-TWPZ2229F3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);



