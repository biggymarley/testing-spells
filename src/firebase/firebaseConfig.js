import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getDatabase } from "firebase/database";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyAuNmCYB4sxxFLIrqipPEGDCJ1kijFekf4",
  authDomain: "gift-5dbc6.firebaseapp.com",
  projectId: "gift-5dbc6",
  storageBucket: "gift-5dbc6.appspot.com",
  messagingSenderId: "184118411664",
  appId: "1:184118411664:web:cd90e4503525f72cd87315"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
const database = getDatabase(app);
const storage = getStorage(app);
export { auth, db, database, storage };
