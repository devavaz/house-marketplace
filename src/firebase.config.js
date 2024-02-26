import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB4PqerAIfSOfYPYPFuMufRVoufd-P10e8",
  authDomain: "house-marketplace-app-9fbc4.firebaseapp.com",
  projectId: "house-marketplace-app-9fbc4",
  storageBucket: "house-marketplace-app-9fbc4.appspot.com",
  messagingSenderId: "466069814918",
  appId: "1:466069814918:web:cf6e43230a106edd539b07"
};

// Initialize Firebase
initializeApp(firebaseConfig)
export const db = getFirestore()