// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyChzp1gGVXHNxq7G7QdX5rPBPurV1emOE",
  authDomain: "trackit-expense-tracker-df6db.firebaseapp.com",
  projectId: "trackit-expense-tracker-df6db",
  storageBucket: "trackit-expense-tracker-df6db.firebasestorage.app",
  messagingSenderId: "8410588308",
  appId: "1:8410588308:web:a93bb996149da432163333",
  measurementId: "G-SXPEMKXQFV"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;
