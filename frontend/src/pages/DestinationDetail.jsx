// src/pages/DestinationDetail.jsx
import { useParams } from "react-router-dom"

export default function DestinationDetail() {
  const { slug } = useParams()

  return (
    <div className="max-w-7xl mx-auto px-6 py-20">
      <h1 className="text-3xl font-bold mb-4">Destination : {slug}</h1>
      <p>Détails de la destination {slug}...</p>
    </div>
  )
}