
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCOsq0fNdFAkwdK7-5-nrjiQrZdN6V1TGo",
  authDomain: "prepa-rationnelle.firebaseapp.com",
  projectId: "prepa-rationnelle",
  storageBucket: "prepa-rationnelle.firebasestorage.app",
  messagingSenderId: "98642168839",
  appId: "1:98642168839:web:fae4cd7474705d7fd92ea2",
  measurementId: "G-DRCREW4HTZ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

export { auth, db };
