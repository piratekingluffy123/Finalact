// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";
import {getFirestore} from 'firebase/firestore';
const firebaseConfig = {
  apiKey: "AIzaSyCXUOlSnrqv_QLENlZTXs6_3jHE2gVHXyA",
  authDomain: "test-auth-bfcff.firebaseapp.com",
  projectId: "test-auth-bfcff",
  storageBucket: "test-auth-bfcff.appspot.com",
  messagingSenderId: "372602823515",
  appId: "1:372602823515:web:a8e7b29a4b34301858b07e"
};

// Initialize Firebase
export const FIREBASE_APP = initializeApp(firebaseConfig);
export const FIREBASE_AUTH = getAuth(FIREBASE_APP);
export const FIRESTORE_DB = getFirestore(FIREBASE_APP);