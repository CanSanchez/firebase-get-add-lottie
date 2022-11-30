// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
import { getFirestore } from "@firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAi_EI8m14Chvoy0Uod5TuX92OMTXPO4ao",
  authDomain: "fir-acfca.firebaseapp.com",
  projectId: "fir-acfca",
  storageBucket: "fir-acfca.appspot.com",
  messagingSenderId: "483132700249",
  appId: "1:483132700249:web:56d5d7be067773b28e6348"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app)
export const db = getFirestore(app);