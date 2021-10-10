// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import {getAuth} from 'firebase/auth'

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD4waWDcCpxxhhtPcYH5o-J29tClEa_B44",
  authDomain: "loan-project-ce3ff.firebaseapp.com",
  projectId: "loan-project-ce3ff",
  storageBucket: "loan-project-ce3ff.appspot.com",
  messagingSenderId: "411007446524",
  appId: "1:411007446524:web:eee8af21774a001cacd679",
  measurementId: "G-L83NQB7C5K",
};

// Initialize Firebase
export const firebaseApp = initializeApp(firebaseConfig);
export const firebaseDb = getFirestore(firebaseApp);
export const firebaseAuth =  getAuth(firebaseApp);

