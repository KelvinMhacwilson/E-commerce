// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDpxsAmlyeCfLXeNcQ-c8GgCQ4LrAswlxw",
  authDomain: "e-shop-4dbc5.firebaseapp.com",
  projectId: "e-shop-4dbc5",
  storageBucket: "e-shop-4dbc5.appspot.com",
  messagingSenderId: "959287360399",
  appId: "1:959287360399:web:904d818fd215ffb6a7a9fa"
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

export default firebaseApp