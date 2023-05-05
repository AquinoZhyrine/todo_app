import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD0_kyTVujGjcM13gwEMI5ChgUpaexGpgM",
  authDomain: "crud-firebase-d73b5.firebaseapp.com",
  projectId: "crud-firebase-d73b5",
  storageBucket: "crud-firebase-d73b5.appspot.com",
  messagingSenderId: "995578579104",
  appId: "1:995578579104:web:d2f88605eec478672b21c5"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };