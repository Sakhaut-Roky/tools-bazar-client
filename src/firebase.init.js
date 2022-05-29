// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAej1E_VzLmcSTnT3cTNUmjn-HX4xaYyVA",
  authDomain: "tools-bazar.firebaseapp.com",
  projectId: "tools-bazar",
  storageBucket: "tools-bazar.appspot.com",
  messagingSenderId: "967370273752",
  appId: "1:967370273752:web:b59faa9ac57380ef64f8ad"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default (auth);