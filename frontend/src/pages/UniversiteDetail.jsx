// src/pages/UniversiteDetail.jsx
import { useParams } from "react-router-dom";

export default function UniversiteDetail() {
  const { slug } = useParams();

  return (
    <div className="max-w-7xl mx-auto px-6 py-20">
      <h1 className="text-3xl font-bold mb-4">Université : {slug}</h1>
      <p>Détails de l’université {slug}...</p>
    </div>
  );
}