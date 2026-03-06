// src/pages/BlogDetail.jsx
import { useParams } from "react-router-dom"

export default function BlogDetail() {
  const { slug } = useParams()

  return (
    <div className="max-w-7xl mx-auto px-6 py-20">
      <h1 className="text-3xl font-bold mb-4">Article : {slug}</h1>
      <p>Contenu du blog pour {slug}...</p>
    </div>
  )
}