import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyAI_Yi7HYIpCjsDvDuhEJb8CTJnCf3dp4U",
  authDomain: "eletronicx-eca7a.firebaseapp.com",
  projectId: "eletronicx-eca7a",
  storageBucket: "eletronicx-eca7a.firebasestorage.app",
  messagingSenderId: "529795880478",
  appId: "1:529795880478:web:c3e0ff2c60a7230751c00f",
  measurementId: "G-JCNKQ5JH5F"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

export { auth, db };