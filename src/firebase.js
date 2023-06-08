import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = 
{
  apiKey: "AIzaSyCRbRVf5xh8f04n6y93mbhds8rJeJUnsh4",
  authDomain: "mohit-23715.firebaseapp.com",
  projectId: "mohit-23715",
  storageBucket: "mohit-23715.appspot.com",
  messagingSenderId: "554059167538",
  appId: "1:554059167538:web:ad392fb3f43a230f5c092b",
  measurementId: "G-QWKEKJCY2E"
};

export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore()
