// Import the functions you need from the SDKs you need

import { initializeApp } from "firebase/app";

import { getAnalytics } from "firebase/analytics";

// TODO: Add SDKs for Firebase products that you want to use

// https://firebase.google.com/docs/web/setup#available-libraries


// Your web app's Firebase configuration

// For Firebase JS SDK v7.20.0 and later, measurementId is optional

const firebaseConfig = {

  apiKey: "AIzaSyCBzgx8aHBLvFOKfDMNQj3jtg0Bt0jo-Sc",

  authDomain: "armageddon-chess.firebaseapp.com",

  projectId: "armageddon-chess",

  storageBucket: "armageddon-chess.firebasestorage.app",

  messagingSenderId: "231626664440",

  appId: "1:231626664440:web:eeca4b5eaabf2e54914e0d",

  measurementId: "G-4PNQX6JDTB"

};


// Initialize Firebase

const app = initializeApp(firebaseConfig);

//const analytics = getAnalytics(app);