// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAarNlYZRLJePUn47PoPpkIVo5THIRVsMw",
  authDomain: "indeed-auth.firebaseapp.com",
  projectId: "indeed-auth",
  storageBucket: "indeed-auth.appspot.com",
  messagingSenderId: "984119382982",
  appId: "1:984119382982:web:07728e37daf86c4c0598c7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);