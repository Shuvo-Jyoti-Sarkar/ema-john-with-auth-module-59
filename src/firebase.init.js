// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDeZM6SzSypU-M0vyH4rkBHTJKE_jeOQ9M",
    authDomain: "ema-john-simple-ea16c.firebaseapp.com",
    projectId: "ema-john-simple-ea16c",
    storageBucket: "ema-john-simple-ea16c.appspot.com",
    messagingSenderId: "669998102784",
    appId: "1:669998102784:web:d48c468e0984ac3bcadbe5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;