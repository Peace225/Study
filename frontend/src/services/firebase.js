import { initializeApp } from "firebase/app"
import { getFirestore } from "firebase/firestore"
import { getStorage } from "firebase/storage"
import { getAuth } from "firebase/auth" // 👈 1. Ajoute cet import

const firebaseConfig = {
  apiKey: "AIzaSyDRqm776nrpugfANSU0xG71NArk6MQX0rc",
  authDomain: "study-experience.firebaseapp.com",
  projectId: "study-experience",
  storageBucket: "study-experience.appspot.com",
  messagingSenderId: "1065269197897",
  appId: "1:1065269197898:web:0c8aac580a85c4a1bc9398"
}

const app = initializeApp(firebaseConfig)

export const db = getFirestore(app)
export const storage = getStorage(app)
export const auth = getAuth(app) // 👈 2. Ajoute cet export