import { Link } from "react-router-dom"

export default function CTASection() {
  return (
    <section className="py-20 bg-blue-600 text-white text-center">
      <h2 className="text-3xl font-bold">
        Prêt à commencer votre projet d’études ?
      </h2>
      <p className="mt-4">
        Contactez nos conseillers pour vous accompagner dans votre admission.
      </p>
      <Link
        to="/appointment"
        className="inline-block mt-6 bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100"
      >
        Prendre rendez-vous
      </Link>
    </section>
  )
}