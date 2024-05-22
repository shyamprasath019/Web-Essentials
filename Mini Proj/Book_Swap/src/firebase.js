// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCoC1UiVjedTy5howGAg6Imkw0twnUQBBw",
  authDomain: "bookswap-sp19.firebaseapp.com",
  projectId: "bookswap-sp19",
  storageBucket: "bookswap-sp19.appspot.com",
  messagingSenderId: "704916107333",
  appId: "1:704916107333:web:8f24b9194079b6c953732c",
  measurementId: "G-ZETT66VEHY"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const db=getFirestore(app)
