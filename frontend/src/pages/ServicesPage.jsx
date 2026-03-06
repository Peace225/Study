import { useState, useEffect } from "react"

// Exemple de données mock pour les services
const mockServices = [
  {
    id: 1,
    title: "Orientation universitaire",
    description:
      "Nous vous aidons à choisir la meilleure université et le programme adapté à votre projet.",
    icon: "/services/orientation.png"
  },
  {
    id: 2,
    title: "Dossier et admission",
    description:
      "Accompagnement complet pour la constitution de votre dossier et votre admission à l’étranger.",
    icon: "/services/dossier.png"
  },
  {
    id: 3,
    title: "Bourses et financement",
    description:
      "Nous vous guidons dans la recherche de bourses et financements pour vos études.",
    icon: "/services/bourses.png"
  },
  {
    id: 4,
    title: "Visa et démarches",
    description:
      "Assistance pour l’obtention de votre visa et les démarches administratives.",
    icon: "/services/visa.png"
  },
  {
    id: 5,
    title: "Logement étudiant",
    description:
      "Conseils et accompagnement pour trouver un logement sécurisé dans votre pays d’accueil.",
    icon: "/services/logement.png"
  },
  {
    id: 6,
    title: "Préparation linguistique",
    description:
      "Cours et tests pour améliorer vos compétences linguistiques avant le départ.",
    icon: "/services/langue.png"
  }
]

export default function ServicesPage() {
  const [services, setServices] = useState([])

  useEffect(() => {
    // Ici tu peux récupérer depuis Firebase Firestore si nécessaire
    setServices(mockServices)
  }, [])

  return (
    <div className="max-w-7xl mx-auto px-6 py-20">
      <h1 className="text-4xl font-bold text-center mb-12">Nos Services</h1>

      <div className="grid md:grid-cols-3 gap-8">
        {services.map(service => (
          <div
            key={service.id}
            className="bg-white rounded-lg shadow hover:shadow-lg transition p-6 flex flex-col items-center text-center"
          >
            <img
              src={service.icon}
              alt={service.title}
              className="w-20 h-20 object-contain mb-4"
            />
            <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
            <p className="text-gray-600">{service.description}</p>
          </div>
        ))}
      </div>
    </div>
  )
}