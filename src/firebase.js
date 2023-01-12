import { initializeApp } from "firebase/app";
import {
    getAuth
} from 'firebase/auth';
import {
    getFirestore
} from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyD_OuxxbebcdYDvAGkVz5_uC1mobbR6p-o",
  authDomain: "fashion--shop.firebaseapp.com",
  projectId: "fashion--shop",
  storageBucket: "fashion--shop.appspot.com",
  messagingSenderId: "372759481580",
  appId: "1:372759481580:web:324cc41e24ec71d5ef69c9"
};

initializeApp(firebaseConfig);

const db = getFirestore();
const auth = getAuth();

export { db, auth };