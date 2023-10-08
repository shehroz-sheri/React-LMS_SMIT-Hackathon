// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from 'firebase/firestore'

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyABOOfOvD3Q3m-Q-Iz5yCeKsdi_2m7MWdw",
    authDomain: "student-lms-hackathon.firebaseapp.com",
    projectId: "student-lms-hackathon",
    storageBucket: "student-lms-hackathon.appspot.com",
    messagingSenderId: "838524059853",
    appId: "1:838524059853:web:84a9c5c1c26d0ff6a86984"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const database = getFirestore(app);