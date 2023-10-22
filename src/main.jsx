import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDdqucrPECctdbTvzWJ8dMuvBMgm45E9iE",
  authDomain: "proyecto-rect-juanpablobravo.firebaseapp.com",
  projectId: "proyecto-rect-juanpablobravo",
  storageBucket: "proyecto-rect-juanpablobravo.appspot.com",
  messagingSenderId: "962843167166",
  appId: "1:962843167166:web:f2b43f2dceedb77dff91ef",
  measurementId: "G-S09M2DG938"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
  <React.StrictMode>
      <App />
  </React.StrictMode>
  </BrowserRouter>,
)
