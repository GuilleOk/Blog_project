// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth/web-extension";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBf2ZC68VwhNUSo3OLRADXia2M0U-Dwna4",
  authDomain: "blogpersonal-f6136.firebaseapp.com",
  projectId: "blogpersonal-f6136",
  storageBucket: "blogpersonal-f6136.firebasestorage.app",
  messagingSenderId: "934975169208",
  appId: "1:934975169208:web:7689f35697696bea754a4d",
  measurementId: "G-ZJLER42E26"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
export const auth = getAuth(app)