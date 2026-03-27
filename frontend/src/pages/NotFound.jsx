import React from 'react'; // Optionnel avec les versions récentes de React
import { Link } from "react-router-dom";

// ⚠️ BIEN VÉRIFIER CETTE LIGNE : "export default function..."
export default function NotFound() {
  return (
    <div style={{ textAlign: "center", padding: "100px 20px" }}>
      <h1>404 - Page non trouvée</h1>
      <p>Oups ! La page que vous cherchez n'est pas ici.</p>
      <Link 
        to="/" 
        style={{ 
          color: "#007bff", 
          textDecoration: "underline",
          fontWeight: "bold" 
        }}
      >
        Retourner à l'accueil
      </Link>
    </div>
  );
}