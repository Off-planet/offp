import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs } from "firebase/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyCLqeDvkPBrc_TVVJ5w4XZiCH4hqhm4jBE",
  authDomain: "offplanet-fd759.firebaseapp.com",
  projectId: "offplanet-fd759",
  storageBucket: "offplanet-fd759.appspot.com",
  messagingSenderId: "876318545437",
  appId: "1:876318545437:web:343741d407602250efd8f4",
  measurementId: "G-YDNW3DHTCC",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
export default db;
