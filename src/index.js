import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import bootstrap from 'bootstrap/dist/css/bootstrap.min.css'

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAz7OxSDoE-ZKqKwJTNMBuzMnmNxBoMRRs",
  authDomain: "xgame-shop.firebaseapp.com",
  projectId: "xgame-shop",
  storageBucket: "xgame-shop.appspot.com",
  messagingSenderId: "55952561300",
  appId: "1:55952561300:web:2ac5ee4348a6dff7e0d081"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <App />
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
