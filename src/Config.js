import { initializeApp } from "firebase/app";
import { getFirestore} from 'firebase/firestore/lite';

export const FIREBASE_URL = 'https://contact-manager-bea8c-default-rtdb.firebaseio.com/';

// Import the functions you need from the SDKs you need
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAuVrZSlSz8MaRjxgayeGW9OaUGW8NZAAU",
  authDomain: "contact-manager-bea8c.firebaseapp.com",
  databaseURL: "https://contact-manager-bea8c-default-rtdb.firebaseio.com",
  projectId: "contact-manager-bea8c",
  storageBucket: "contact-manager-bea8c.appspot.com",
  messagingSenderId: "244665647064",
  appId: "1:244665647064:web:65b96e35ff6ee7ce4dbcad"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);