import { useState } from "react"
import { collection, addDoc, Timestamp } from "firebase/firestore"
import { db } from "../services/firebase" // Assure-toi que firebase est configuré

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  })

  const [loading, setLoading] = useState(false)
  const [success, setSuccess] = useState(false)

  const handleChange = e => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = async e => {
    e.preventDefault()
    setLoading(true)

    try {
      await addDoc(collection(db, "contacts"), {
        ...form,
        createdAt: Timestamp.now()
      })
      setSuccess(true)
      setForm({ name: "", email: "", subject: "", message: "" })
    } catch (error) {
      console.error("Erreur lors de l'enregistrement : ", error)
    } finally {
      setLoading(false)
      setTimeout(() => setSuccess(false), 5000)
    }
  }

  return (
    <div className="max-w-4xl mx-auto px-6 py-20">
      <h1 className="text-4xl font-bold text-center mb-12">Contactez-nous</h1>

      <form
        onSubmit={handleSubmit}
        className="bg-white p-10 rounded-lg shadow-md space-y-6"
      >
        {success && (
          <p className="text-green-600 text-center font-semibold">
            Votre message a été envoyé avec succès !
          </p>
        )}

        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <label className="block mb-2 font-semibold">Nom complet</label>
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              required
              className="w-full border border-gray-300 p-3 rounded focus:outline-none focus:ring-2 focus:ring-blue-600"
            />
          </div>

          <div>
            <label className="block mb-2 font-semibold">Email</label>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              required
              className="w-full border border-gray-300 p-3 rounded focus:outline-none focus:ring-2 focus:ring-blue-600"
            />
          </div>
        </div>

        <div>
          <label className="block mb-2 font-semibold">Sujet</label>
          <input
            type="text"
            name="subject"
            value={form.subject}
            onChange={handleChange}
            required
            className="w-full border border-gray-300 p-3 rounded focus:outline-none focus:ring-2 focus:ring-blue-600"
          />
        </div>

        <div>
          <label className="block mb-2 font-semibold">Message</label>
          <textarea
            name="message"
            value={form.message}
            onChange={handleChange}
            required
            rows={6}
            className="w-full border border-gray-300 p-3 rounded focus:outline-none focus:ring-2 focus:ring-blue-600"
          />
        </div>

        <button
          type="submit"
          disabled={loading}
          className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition"
        >
          {loading ? "Envoi..." : "Envoyer le message"}
        </button>
      </form>

      {/* Infos contact */}
      <div className="mt-12 text-center text-gray-700">
        <p>Email : contact@studyexperience.fr</p>
        <p>Téléphone : +33 1 23 45 67 89</p>
        <p>Adresse : 12 Rue de l’Éducation, Paris, France</p>
      </div>
    </div>
  )
}