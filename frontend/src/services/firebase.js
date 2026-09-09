import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore"; // Importez ceci
import { getStorage } from "firebase/storage";       // Importez ceci
import { getAuth } from "firebase/auth";             // Importez ceci

const firebaseConfig = {
  apiKey: "AIzaSyDRqm776nrpugfANSU0xG71NArk6MQX0rc",
  authDomain: "study-experience.firebaseapp.com",
  projectId: "study-experience",
  storageBucket: "study-experience.appspot.com", // Note: Corrigé selon standard Firebase
  messagingSenderId: "1065269197897",
  appId: "1:1065269197897:web:11b148a1f1acda3abc9398",
  measurementId: "G-FDGQPHQKX1"
};

// Initialisation
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

// EXPORTS : Ces lignes permettent à vos autres fichiers d'utiliser Firebase
export const db = getFirestore(app);
export const storage = getStorage(app);
export const auth = getAuth(app);