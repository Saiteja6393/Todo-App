import { initializeApp } from "firebase/app";
import {getAuth, GoogleAuthProvider} from 'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyAchOjZWtweJgH3UrZzGRzzkTZPsEjP5X8",
  authDomain: "userauth-ea0f8.firebaseapp.com",
  projectId: "userauth-ea0f8",
  storageBucket: "userauth-ea0f8.appspot.com",
  messagingSenderId: "228805725398",
  appId: "1:228805725398:web:10ea429038262111090d77",
  measurementId: "G-NQC00HXPKL"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();
export {auth};