import { useState, useEffect } from "react"
import { Link } from "react-router-dom"
// import { collection, getDocs } from "firebase/firestore"
// import { db } from "../firebase"

const mockDestinations = [
  {
    id: 1,
    name: "Canada",
    description:
      "Étudiez au Canada, bénéficiez d’un système éducatif reconnu et découvrez un pays accueillant et multiculturel.",
    image: "/destinations/canada.jpg",
    slug: "canada"
  },
  {
    id: 2,
    name: "France",
    description:
      "La France offre des universités prestigieuses et un environnement culturel riche pour vos études supérieures.",
    image: "/destinations/france.jpg",
    slug: "france"
  },
  {
    id: 3,
    name: "Royaume-Uni",
    description:
      "Découvrez des programmes d’excellence au Royaume-Uni, avec des diplômes reconnus internationalement.",
    image: "/destinations/royaume-uni.jpg",
    slug: "royaume-uni"
  },
  {
    id: 4,
    name: "États-Unis",
    description:
      "Étudier aux États-Unis, c’est profiter d’une diversité d’universités et d’opportunités uniques.",
    image: "/destinations/usa.jpg",
    slug: "etats-unis"
  },
  {
    id: 5,
    name: "Espagne",
    description:
      "L’Espagne combine qualité des études et style de vie agréable, parfait pour les étudiants internationaux.",
    image: "/destinations/espagne.jpg",
    slug: "espagne"
  },
  {
    id: 6,
    name: "Australie",
    description:
      "Étudiez en Australie pour un enseignement de qualité et une expérience culturelle enrichissante.",
    image: "/destinations/australie.jpg",
    slug: "australie"
  }
]

export default function DestinationsPages() {
  const [destinations, setDestinations] = useState([])

  useEffect(() => {
    // Pour récupérer dynamiquement depuis Firebase :
    // const fetchDestinations = async () => {
    //   const querySnapshot = await getDocs(collection(db, "destinations"))
    //   const data = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }))
    //   setDestinations(data)
    // }
    // fetchDestinations()

    // Pour l'instant on utilise les mock
    setDestinations(mockDestinations)
  }, [])

  return (
    <div className="max-w-7xl mx-auto px-6 py-20">
      <h1 className="text-4xl font-bold text-center mb-12">Destinations Étudiantes</h1>

      <div className="grid md:grid-cols-3 gap-8">
        {destinations.map(dest => (
          <div
            key={dest.id}
            className="bg-white rounded-lg shadow hover:shadow-lg transition overflow-hidden"
          >
            <img
              src={dest.image}
              alt={dest.name}
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-2">{dest.name}</h3>
              <p className="text-gray-600 mb-4">{dest.description}</p>
              <Link
                to={`/destinations/${dest.slug}`}
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