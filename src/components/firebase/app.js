// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDnWIjjRV8H76nwjd1jNZzjep0bBrZUyEQ",
  authDomain: "boty-nacho.firebaseapp.com",
  databaseURL: "https://boty-nacho-default-rtdb.firebaseio.com",
  projectId: "boty-nacho",
  storageBucket: "boty-nacho.appspot.com",
  messagingSenderId: "214116006055",
  appId: "1:214116006055:web:cbefb8615a15e867308382",
  measurementId: "G-1R5GGCXZMV"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;