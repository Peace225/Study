// Import Firebase
import { db, storage } from "../firebase"
import { collection, addDoc, Timestamp } from "firebase/firestore"
import { ref, uploadBytes, getDownloadURL } from "firebase/storage"

/**
 * Enregistre une nouvelle candidature dans Firestore.
 * @param {Object} application - Objet contenant les informations du candidat
 * @param {string} application.fullName - Nom complet du candidat
 * @param {string} application.email - Email
 * @param {string} application.phone - Téléphone
 * @param {string} application.destination - Destination choisie
 * @param {File} [application.document] - Document optionnel (CV, lettre)
 * @returns {Promise<Object>} - Retourne l'objet enregistré avec ID
 */
export async function submitApplication(application) {
  try {
    let documentUrl = ""

    // Upload du document si fourni
    if (application.document) {
      const storageRef = ref(storage, `applications/${Date.now()}_${application.document.name}`)
      const snapshot = await uploadBytes(storageRef, application.document)
      documentUrl = await getDownloadURL(snapshot.ref)
    }

    // Création de la candidature dans Firestore
    const docRef = await addDoc(collection(db, "applications"), {
      fullName: application.fullName,
      email: application.email,
      phone: application.phone,
      destination: application.destination,
      documentUrl,
      status: "pending", // statut initial
      createdAt: Timestamp.now()
    })

    return { id: docRef.id, ...application, documentUrl, status: "pending" }
  } catch (error) {
    console.error("Erreur lors de la soumission de la candidature :", error)
    throw error
  }
}

/**
 * Exemple : récupérer toutes les candidatures
 * @returns {Promise<Array>} - Liste des candidatures
 */
export async function getApplications() {
  try {
    const querySnapshot = await db.collection("applications").get()
    const applications = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }))
    return applications
  } catch (error) {
    console.error("Erreur lors de la récupération des candidatures :", error)
    throw error
  }
}