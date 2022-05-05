// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA8HnmV-fOVn1nRysOMEqMlPRJFUA1wk3E",
  authDomain: "bicycle-warehouse-1aad9.firebaseapp.com",
  projectId: "bicycle-warehouse-1aad9",
  storageBucket: "bicycle-warehouse-1aad9.appspot.com",
  messagingSenderId: "864771447718",
  appId: "1:864771447718:web:e4425bbfaf970058fe8d67"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;