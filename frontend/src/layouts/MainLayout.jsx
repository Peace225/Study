import { Outlet } from "react-router-dom"
import Navbar from "../components/Navbar"

export default function MainLayout({ children }) {
  return (
    <div className="flex flex-col min-h-screen">
      
      {/* Navbar fixe */}
      <Navbar />

      {/* Contenu principal */}
      <main className="flex-1 mt-16">
        {children ? children : <Outlet />}
      </main>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-12 mt-12">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-3 gap-8">
          
          {/* À propos */}
          <div>
            <h3 className="font-bold text-lg mb-4">Study Experience</h3>
            <p className="text-gray-300 text-sm">
              Nous accompagnons les étudiants dans leur projet d’études à l’étranger.
            </p>
          </div>

          {/* Liens */}
          <div>
            <h3 className="font-bold text-lg mb-4">Liens utiles</h3>
            <ul className="text-gray-300 text-sm space-y-2">
              <li><a href="/" className="hover:text-white transition">Accueil</a></li>
              <li><a href="/about" className="hover:text-white transition">À propos</a></li>
              <li><a href="/destinations" className="hover:text-white transition">Destinations</a></li>
              <li><a href="/services" className="hover:text-white transition">Services</a></li>
              <li><a href="/contact" className="hover:text-white transition">Contact</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-bold text-lg mb-4">Contact</h3>
            <p className="text-gray-300 text-sm">Email : contact@studyexperience.fr</p>
            <p className="text-gray-300 text-sm mt-2">Téléphone : +33 1 23 45 67 89</p>
            <div className="flex space-x-4 mt-4">
              <a href="#" className="hover:text-blue-500 transition">Facebook</a>
              <a href="#" className="hover:text-blue-400 transition">Twitter</a>
              <a href="#" className="hover:text-pink-500 transition">Instagram</a>
              <a href="#" className="hover:text-blue-600 transition">LinkedIn</a>
            </div>
          </div>

        </div>

        <div className="text-center text-gray-400 text-sm mt-8">
          © {new Date().getFullYear()} Study Experience. Tous droits réservés.
        </div>
      </footer>
    </div>
  )
}