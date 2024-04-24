// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-state-5649b.firebaseapp.com",
  projectId: "mern-state-5649b",
  storageBucket: "mern-state-5649b.appspot.com",
  messagingSenderId: "780265744630",
  appId: "1:780265744630:web:de80e554b7cf51c200e4d7"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
