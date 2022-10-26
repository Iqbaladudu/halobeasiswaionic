// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCCuy9FUoWq6RB4FU6fmghXz0DuIBlIrXc",
  authDomain: "halo-beasiswa.firebaseapp.com",
  databaseURL: "https://halo-beasiswa-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "halo-beasiswa",
  storageBucket: "halo-beasiswa.appspot.com",
  messagingSenderId: "858535401987",
  appId: "1:858535401987:web:ad30eac371365d5c858c36"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);