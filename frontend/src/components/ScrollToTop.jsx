import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    // Remonte tout en haut de la page à chaque changement de chemin (URL)
    window.scrollTo(0, 0);
  }, [pathname]);

  return null; // Ce composant ne rend rien visuellement
}