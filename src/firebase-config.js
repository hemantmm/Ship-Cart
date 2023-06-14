import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore'
import {getAuth,GoogleAuthProvider} from 'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyByyQSlWrJq8VZ5EPsnOkEPd0n3GC_bMT4",
  authDomain: "ecommerceproject-2bab2.firebaseapp.com",
  projectId: "ecommerceproject-2bab2",
  storageBucket: "ecommerceproject-2bab2.appspot.com",
  messagingSenderId: "592485957152",
  appId: "1:592485957152:web:66c41bd617c0d1f3dec645"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// export const db=getFirestore(db)
export const auth=getAuth(app)
export const provider=new GoogleAuthProvider()