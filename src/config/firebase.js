import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore/lite';

const firebaseConfig = {
  apiKey: "AIzaSyBm4H8ilJE9xWplH0eQog4PTdJw8XQCdxo",
  authDomain: "tiktok---jornada-65f93.firebaseapp.com",
  projectId: "tiktok---jornada-65f93",
  storageBucket: "tiktok---jornada-65f93.appspot.com",
  messagingSenderId: "790483459383",
  appId: "1:790483459383:web:146038812167a444540eb2"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default db;