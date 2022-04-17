// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyALJfTIUjwkABGkM-7AA74-j7mwM77wybc",
  authDomain: "wedding-events-2e625.firebaseapp.com",
  projectId: "wedding-events-2e625",
  storageBucket: "wedding-events-2e625.appspot.com",
  messagingSenderId: "798988396885",
  appId: "1:798988396885:web:347139e83107cf6839e7dc",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;
