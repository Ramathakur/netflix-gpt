// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBgT4VmkqauxrysI_lyCQxCMCubCqSswj4",
    authDomain: "netflixgpt-71e17.firebaseapp.com",
    projectId: "netflixgpt-71e17",
    storageBucket: "netflixgpt-71e17.appspot.com",
    messagingSenderId: "997052511342",
    appId: "1:997052511342:web:6060a9baae1323e40fe27f",
    measurementId: "G-N3KP02X6VF"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();
