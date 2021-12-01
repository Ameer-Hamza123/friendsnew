import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth';
import { Firestore, getFirestore } from "@firebase/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyCu45i31bD6wCeT0Gg-GZ9cFTPYsyB1kyo",
  authDomain: "friendssocial-b44fd.firebaseapp.com",
  projectId: "friendssocial-b44fd",
  storageBucket: "friendssocial-b44fd.appspot.com",
  messagingSenderId: "947574587608",
  appId: "1:947574587608:web:c1d92f08c772bd186c97ad",
  measurementId: "G-8D5JTHRLSG"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore();
export {auth, app , db};