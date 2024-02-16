import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBGmAOV7yhc9Gwh-7_wYj286NFgnaJkxkM",
  authDomain: "chatapp-4df03.firebaseapp.com",
  projectId: "chatapp-4df03",
  storageBucket: "chatapp-4df03.appspot.com",
  messagingSenderId: "434045800625",
  appId: "1:434045800625:web:96934f51616577ddd25290",
  measurementId: "G-XG4FKZBQL8"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth()
const db = getFirestore(app);
export { app, auth, db }