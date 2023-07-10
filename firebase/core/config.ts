import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCXP4R00IbxGhNwL5P1J6Z9Z67jn9rw5bM",
  authDomain: "mobile-apps-fair.firebaseapp.com",
  projectId: "mobile-apps-fair",
  storageBucket: "mobile-apps-fair.appspot.com",
  messagingSenderId: "417123189700",
  appId: "1:417123189700:web:5f49b3d11f7e1eedbada91"
};

export const app = initializeApp(firebaseConfig);
