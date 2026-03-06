import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"

const mockEvents = [
  {
    id: 1,
    title: "Webinaire Études au Canada",
    date: "2026-03-15",
    location: "En ligne",
    image: "/events/canada-webinar.jpg",
    type: "upcoming"
  },
  {
    id: 2,
    title: "Salon des Universités Françaises",
    date: "2026-04-05",
    location: "Paris, France",
    image: "/events/france-salon.jpg",
    type: "upcoming"
  },
  {
    id: 3,
    title: "Conférence sur les bourses d'études",
    date: "2026-01-20",
    location: "Lyon, France",
    image: "/events/bourses.jpg",
    type: "recent"
  },
  {
    id: 4,
    title: "Atelier préparation dossier universitaire",
    date: "2026-02-10",
    location: "En ligne",
    image: "/events/dossier.jpg",
    type: "recent"
  }
]

export default function Events() {
  const [upcoming, setUpcoming] = useState([])
  const [recent, setRecent] = useState([])
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    const upcomingEvents = mockEvents.filter(e => e.type === "upcoming")
    const recentEvents = mockEvents.filter(e => e.type === "recent")
    setUpcoming(upcomingEvents)
    setRecent(recentEvents)
  }, [])

  // Carrousel automatique
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex(prev => (prev + 1) % upcoming.length)
    }, 5000)
    return () => clearInterval(interval)
  }, [upcoming])

  const prev = () => setCurrentIndex((currentIndex - 1 + upcoming.length) % upcoming.length)
  const next = () => setCurrentIndex((currentIndex + 1) % upcoming.length)

  return (
    <div className="max-w-7xl mx-auto px-6 py-20">
      <h1 className="text-4xl font-bold text-center mb-12">Événements</h1>

      {/* Événements à venir */}
      <section className="mb-16">
        <h2 className="text-2xl font-semibold mb-6">À venir</h2>
        <div className="relative bg-gray-50 p-6 rounded-lg shadow">
          <AnimatePresence mode="wait">
            {upcoming.length > 0 && (
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                transition={{ duration: 0.6 }}
              >
                <img
                  src={upcoming[currentIndex].image}
                  alt={upcoming[currentIndex].title}
                  className="w-full h-64 object-cover rounded mb-4"
                />
                <h3 className="text-xl font-semibold mb-2">{upcoming[currentIndex].title}</h3>
                <p className="text-gray-600">{upcoming[currentIndex].date} - {upcoming[currentIndex].location}</p>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Navigation flèches */}
          <div className="absolute top-1/2 -translate-y-1/2 left-4 right-4 flex justify-between">
            <button
              onClick={prev}
              className="bg-blue-600 text-white p-2 rounded-full hover:bg-blue-700 transition"
            >
              &#8592;
            </button>
            <button
              onClick={next}
              className="bg-blue-600 text-white p-2 rounded-full hover:bg-blue-700 transition"
            >
              &#8594;
            </button>
          </div>
        </div>
      </section>

      {/* Événements récents */}
      <section>
        <h2 className="text-2xl font-semibold mb-6">Récents</h2>
        <div className="grid md:grid-cols-2 gap-8">
          {recent.map(event => (
            <div
              key={event.id}
              className="bg-white rounded-lg shadow hover:shadow-lg transition overflow-hidden"
            >
              <img
                src={event.image}
                alt={event.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{event.title}</h3>
                <p className="text-gray-600">{event.date} - {event.location}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}