import { useState } from "react"
import { collection, addDoc, Timestamp } from "firebase/firestore"
import { db } from "../firebase" // Assure-toi que firebase est configuré

export default function Appointment() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    destination: "",
    date: ""
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
      await addDoc(collection(db, "appointments"), {
        ...form,
        createdAt: Timestamp.now()
      })
      setSuccess(true)
      setForm({ name: "", email: "", phone: "", destination: "", date: "" })
    } catch (error) {
      console.error("Erreur lors de l'enregistrement : ", error)
    } finally {
      setLoading(false)
      setTimeout(() => setSuccess(false), 5000)
    }
  }

  return (
    <div className="max-w-4xl mx-auto px-6 py-20">
      <h1 className="text-4xl font-bold text-center mb-12">
        Prendre rendez-vous
      </h1>

      <form
        onSubmit={handleSubmit}
        className="bg-white p-10 rounded-lg shadow-md space-y-6"
      >
        {success && (
          <p className="text-green-600 text-center font-semibold">
            Votre rendez-vous a été enregistré avec succès !
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

        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <label className="block mb-2 font-semibold">Téléphone</label>
            <input
              type="tel"
              name="phone"
              value={form.phone}
              onChange={handleChange}
              required
              className="w-full border border-gray-300 p-3 rounded focus:outline-none focus:ring-2 focus:ring-blue-600"
            />
          </div>

          <div>
            <label className="block mb-2 font-semibold">Destination</label>
            <select
              name="destination"
              value={form.destination}
              onChange={handleChange}
              required
              className="w-full border border-gray-300 p-3 rounded focus:outline-none focus:ring-2 focus:ring-blue-600"
            >
              <option value="">Sélectionnez une destination</option>
              <option value="Canada">Canada</option>
              <option value="France">France</option>
              <option value="Royaume-Uni">Royaume-Uni</option>
              <option value="États-Unis">États-Unis</option>
              <option value="Espagne">Espagne</option>
              <option value="Australie">Australie</option>
            </select>
          </div>
        </div>

        <div>
          <label className="block mb-2 font-semibold">Date souhaitée</label>
          <input
            type="date"
            name="date"
            value={form.date}
            onChange={handleChange}
            required
            className="w-full border border-gray-300 p-3 rounded focus:outline-none focus:ring-2 focus:ring-blue-600"
          />
        </div>

        <button
          type="submit"
          disabled={loading}
          className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition"
        >
          {loading ? "Enregistrement..." : "Prendre rendez-vous"}
        </button>
      </form>
    </div>
  )
}