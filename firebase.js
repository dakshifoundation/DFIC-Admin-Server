// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDWR1LsenF_03serPrgssTKV4ZAhk2k7qQ",
  authDomain: "dfic-notification.firebaseapp.com",
  projectId: "dfic-notification",
  storageBucket: "dfic-notification.firebasestorage.app",
  messagingSenderId: "602963226315",
  appId: "1:602963226315:web:83a9f0d60379cf17a8354e",
  measurementId: "G-9TQQXWF2G4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);