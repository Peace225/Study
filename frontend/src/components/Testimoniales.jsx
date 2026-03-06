import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"

const testimonials = [
  {
    name: "Alice Dupont",
    role: "Étudiante en Master",
    text: "Study Experience m'a aidée à intégrer mon université de rêve au Canada. L'accompagnement est très professionnel.",
    avatar: "/avatars/alice.jpg"
  },
  {
    name: "Mohamed Traoré",
    role: "Étudiant en Licence",
    text: "Grâce à Study Experience, j'ai pu préparer mon dossier et ma lettre de motivation. Résultat : admission confirmée !",
    avatar: "/avatars/mohamed.jpg"
  },
  {
    name: "Fatoumata Coulibaly",
    role: "Étudiante en Bachelor",
    text: "Le suivi personnalisé et les conseils pratiques m'ont vraiment fait gagner du temps et m'ont rassurée.",
    avatar: "/avatars/fatoumata.jpg"
  }
]

export default function Testimonials() {
  const [index, setIndex] = useState(0)

  // Changement automatique toutes les 5 secondes
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex(prev => (prev + 1) % testimonials.length)
    }, 5000)
    return () => clearInterval(interval)
  }, [])

  const prev = () => setIndex((index - 1 + testimonials.length) % testimonials.length)
  const next = () => setIndex((index + 1) % testimonials.length)

  const testimonial = testimonials[index]

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold mb-12">Témoignages d'étudiants</h2>

        <div className="relative bg-white p-10 rounded-lg shadow overflow-hidden">
          <AnimatePresence mode="wait">
            <motion.div
              key={index}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.6 }}
            >
              <p className="text-gray-700 italic mb-6">"{testimonial.text}"</p>

              <div className="flex items-center justify-center gap-4">
                <img
                  src={testimonial.avatar}
                  alt={testimonial.name}
                  className="w-16 h-16 rounded-full object-cover"
                />
                <div className="text-left">
                  <p className="font-semibold">{testimonial.name}</p>
                  <p className="text-gray-500 text-sm">{testimonial.role}</p>
                </div>
              </div>
            </motion.div>
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

        {/* Indicateurs */}
        <div className="flex justify-center gap-3 mt-6">
          {testimonials.map((_, i) => (
            <span
              key={i}
              className={`w-3 h-3 rounded-full cursor-pointer ${
                i === index ? "bg-blue-600" : "bg-gray-300"
              }`}
              onClick={() => setIndex(i)}
            />
          ))}
        </div>
      </div>
    </section>
  )
}