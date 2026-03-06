import { Link } from "react-router-dom"

export default function Hero() {
  return (
    <section className="relative min-h-[85vh] flex items-center pt-20 overflow-hidden">
      
      {/* Image de fond (Style Campus/Nature comme sur la photo) */}
      <div className="absolute inset-0">
        <img
          src="/hero-campus.jpg" // Remplace par une belle image de campus ou cerisiers
          alt="Étudier à l'étranger"
          className="w-full h-full object-cover"
        />
        {/* Overlay sombre pour faire ressortir le texte blanc */}
        <div className="absolute inset-0 bg-black/30"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 w-full">
        {/* Conteneur de texte aligné à gauche */}
        <div className="max-w-3xl">
          <h1 className="text-4xl md:text-6xl font-bold leading-[1.1] text-white uppercase tracking-tight">
            Votre conseiller de <br />
            référence pour les études à <br />
            l'étranger
          </h1>
          
          <p className="mt-6 text-lg md:text-xl text-white font-medium max-w-2xl leading-relaxed">
            Nous vous accompagnons dans toutes vos démarches pour partir étudier à 
            l'étranger en toute sérénité.
          </p>

          <div className="mt-10 flex flex-col sm:flex-row gap-4">
            {/* Bouton Violet (Rechercher une formation) */}
            <Link
              to="/universites"
              className="bg-[#832d72] text-white px-8 py-4 text-sm font-bold uppercase tracking-wider hover:bg-[#6a245c] transition-all text-center"
            >
              Rechercher une formation
            </Link>

            {/* Bouton Blanc (Services) */}
            <Link
              to="/services"
              className="bg-white text-gray-900 px-8 py-4 text-sm font-bold uppercase tracking-wider hover:bg-gray-100 transition-all text-center"
            >
              Nos services d'accompagnement
            </Link>
          </div>
        </div>
      </div>

      {/* Les blocs blancs qui dépassent en bas (optionnel, pour le réalisme) */}
      <div className="absolute -bottom-1 left-0 w-full flex justify-center gap-4 px-6 md:px-20 translate-y-1/2">
          <div className="hidden md:block bg-white h-24 w-1/3 shadow-xl"></div>
          <div className="hidden md:block bg-white h-24 w-1/3 shadow-xl border-x border-gray-100"></div>
          <div className="hidden md:block bg-white h-24 w-1/3 shadow-xl"></div>
      </div>
    </section>
  )
}