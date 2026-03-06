import React, { createContext, useContext, useState, useEffect } from 'react';
import { 
  createUserWithEmailAndPassword, 
  signInWithEmailAndPassword, 
  signOut, 
  onAuthStateChanged 
} from 'firebase/auth';
import { auth } from '../services/firebase'; // Assure-toi que auth est bien exporté de ce fichier

// 1. Création du contexte
const AuthContext = createContext();

// 2. Hook personnalisé pour utiliser le contexte facilement
export function useAuth() {
  return useContext(AuthContext);
}

// 3. Le Provider qui va englober l'application
export function AuthProvider({ children }) {
  const [currentUser, setCurrentUser] = useState(null);
  const [loading, setLoading] = useState(true);

  // Fonction pour inscrire un nouvel étudiant
  function signup(email, password) {
    return createUserWithEmailAndPassword(auth, email, password);
  }

  // Fonction pour connecter un étudiant existant
  function login(email, password) {
    return signInWithEmailAndPassword(auth, email, password);
  }

  // Fonction pour déconnecter l'étudiant
  function logout() {
    return signOut(auth);
  }

  // useEffect pour écouter les changements d'état de connexion via Firebase
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setCurrentUser(user);
      setLoading(false); // On arrête le chargement une fois que Firebase a répondu
    });

    // Nettoyage de l'écouteur quand le composant est démonté
    return unsubscribe;
  }, []);

  // Les valeurs et fonctions exposées à toute l'application
  const value = {
    currentUser,
    login,
    signup,
    logout
  };

  return (
    <AuthContext.Provider value={value}>
      {/* On n'affiche les enfants que si Firebase a fini de charger l'état initial */}
      {!loading && children}
    </AuthContext.Provider>
  );
}