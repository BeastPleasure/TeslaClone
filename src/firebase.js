
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX",
  authDomain: "teslaclone-b61cc.firebaseapp.com",
  projectId: "teslaclone-b61cc",
  storageBucket: "teslaclone-b61cc.appspot.com",
  messagingSenderId: "XXXXXXXXXXXXXX",
  appId: "1:938981674626:web:59262207c001c577236e9b",
  measurementId: "XXXXXXXXXXXXX"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);



