// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getAuth,GoogleAuthProvider} from "firebase/auth"
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyC6kLR7FabnmMFHUlC2nMnqze_mPNe11cU",
  authDomain: "blogweb-494bd.firebaseapp.com",
  projectId: "blogweb-494bd",
  storageBucket: "blogweb-494bd.appspot.com",
  messagingSenderId: "32992736640",
  appId: "1:32992736640:web:8851fb50084fca06167d65",
  measurementId: "G-XJ9XMCTQE0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth =getAuth(app)
export  const Provider =new GoogleAuthProvider()
export const db= getFirestore(app)
