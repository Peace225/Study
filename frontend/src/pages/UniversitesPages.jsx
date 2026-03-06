import { useState, useEffect } from "react"
import { Link } from "react-router-dom"

// Exemple de données mock pour les universités
const mockUniversities = [
  {
    id: 1,
    name: "Université de Toronto",
    country: "Canada",
    description:
      "Une des meilleures universités au Canada avec des programmes variés pour les étudiants internationaux.",
    image: "/universities/toronto.jpg",
    slug: "universite-toronto"
  },
  {
    id: 2,
    name: "Sorbonne Université",
    country: "France",
    description:
      "Université prestigieuse à Paris offrant un large choix de programmes académiques.",
    image: "/universities/sorbonne.jpg",
    slug: "sorbonne-universite"
  },
  {
    id: 3,
    name: "University of Oxford",
    country: "Royaume-Uni",
    description:
      "Université renommée mondialement, offrant des formations d’excellence.",
    image: "/universities/oxford.jpg",
    slug: "university-oxford"
  },
  {
    id: 4,
    name: "Harvard University",
    country: "États-Unis",
    description:
      "Une des universités les plus prestigieuses au monde, reconnue pour la qualité de ses programmes.",
    image: "/universities/harvard.jpg",
    slug: "harvard-university"
  },
  {
    id: 5,
    name: "Universidad de Barcelona",
    country: "Espagne",
    description:
      "Offre un large éventail de programmes et accueille de nombreux étudiants internationaux.",
    image: "/universities/barcelona.jpg",
    slug: "universidad-barcelona"
  },
  {
    id: 6,
    name: "University of Melbourne",
    country: "Australie",
    description:
      "Université réputée pour ses recherches et son enseignement de qualité.",
    image: "/universities/melbourne.jpg",
    slug: "university-melbourne"
  }
]

export default function UniversitesPages() {
  const [universities, setUniversities] = useState([])

  useEffect(() => {
    // Ici tu peux récupérer depuis Firebase Firestore si nécessaire
    setUniversities(mockUniversities)
  }, [])

  return (
    <div className="max-w-7xl mx-auto px-6 py-20">
      <h1 className="text-4xl font-bold text-center mb-12">Universités</h1>

      <div className="grid md:grid-cols-3 gap-8">
        {universities.map(uni => (
          <div
            key={uni.id}
            className="bg-white rounded-lg shadow hover:shadow-lg transition overflow-hidden"
          >
            <img
              src={uni.image}
              alt={uni.name}
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-2">{uni.name}</h3>
              <p className="text-gray-500 mb-2">{uni.country}</p>
              <p className="text-gray-600 mb-4">{uni.description}</p>
              <Link
                to={`/universites/${uni.slug}`}
                className="text-blue-600 font-semibold hover:underline"
              >
                En savoir plus
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}