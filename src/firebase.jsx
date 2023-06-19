// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.FIREBASE_KEY,
  authDomain: "admin-panel-7e8f9.firebaseapp.com",
  projectId: "admin-panel-7e8f9",
  storageBucket: "admin-panel-7e8f9.appspot.com",
  messagingSenderId: "64898476874",
  appId: "1:64898476874:web:07edda71e59b7b883d2fb3",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const storage = getStorage(app);
export const auth = getAuth();
