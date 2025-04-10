// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAXsNZ-b8W0ocRkyMAuHwmwyb8ImynRga0",
  authDomain: "netflixgpt-4a098.firebaseapp.com",
  projectId: "netflixgpt-4a098",
  storageBucket: "netflixgpt-4a098.firebasestorage.app",
  messagingSenderId: "874201409693",
  appId: "1:874201409693:web:1b9f6122f046e50c584c74",
  measurementId: "G-MRB0TF55C6",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();
