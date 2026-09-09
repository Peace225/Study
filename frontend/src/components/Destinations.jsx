import { useState } from "react";
import { Link } from "react-router-dom";
import { 
  Globe, 
  MapPin, 
  GraduationCap, 
  ArrowRight, 
  Sparkles, 
  CheckCircle2, 
  Building2,
  Compass
} from "lucide-react";

// Import du composant Modale de prise de rendez-vous
import DemandeEntretienModal from "../components/DemandeEntretienModal";

export default function Destinations() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState("tous");

  // Vos 7 destinations officielles
  const countries = [
    {
      id: "france",
      name: "France",
      flag: "🇫🇷",
      region: "Europe",
      tagline: "Tradition d'excellence et diplômes reconnus à l'international",
      description: "Grandes Écoles de Commerce et d'Ingénieurs, universités publiques prestigieuses et accompagnement Campus France.",
      highlights: ["Procédure Campus France intégrée", "Aides au logement (CAF)", "Diplômes d'État (Licence, Master, Doctorat)"],
      popularPrograms: ["Commerce & Management", "Ingénierie", "Santé & Droit"]
    },
    {
      id: "espagne",
      name: "Espagne",
      flag: "🇪🇸",
      region: "Europe",
      tagline: "Écoles de commerce de premier plan et ouverture européenne",
      description: "Qualité de vie exceptionnelle, programmes dispensés en espagnol ou en anglais et diplômes européens hautement valorisés.",
      highlights: ["Coût de la vie accessible", "Programmes 100% en Anglais disponibles", "Diplômes reconnus dans toute l'UE"],
      popularPrograms: ["Management & Tourisme", "Business & Tech", "Architecture"]
    },
    {
      id: "belgique",
      name: "Belgique",
      flag: "🇧🇪",
      region: "Europe",
      tagline: "Cœur de l'Europe et universités de très haut niveau académique",
      description: "Enseignement supérieur francophone d'excellence (Universités et Hautes Écoles), frais de scolarité abordables et positionnement stratégique.",
      highlights: ["Procédure d'équivalence (FWB)", "Cadre multiculturel au cœur de l'UE", "Frais universitaires avantageux"],
      popularPrograms: ["Médecine & Santé", "Sciences Économiques", "Ingénierie"]
    },
    {
      id: "maroc",
      name: "Maroc",
      flag: "🇲🇦",
      region: "Afrique",
      tagline: "Pôle académique régional majeur et universités privées de renom",
      description: "Écoles de commerce, d'ingénieurs et universités de premier ordre, environnement familier et diplômes avec équivalence internationale.",
      highlights: ["Cadre d'études moderne", "Proximité géographique et culturelle", "Partenariats avec de grandes écoles européennes"],
      popularPrograms: ["Finance & Audit", "Génie Informatique", "Management de Projets"]
    },
    {
      id: "senegal",
      name: "Sénégal",
      flag: "🇸🇳",
      region: "Afrique",
      tagline: "Hub universitaire de référence en Afrique de l'Ouest",
      description: "Établissements supérieurs réputés, instituts de gestion performants et environnement dynamique reconnu pour la qualité de ses formations.",
      highlights: ["Proximité régionale", "Business Schools certifiées", "Intégration fluide et rapide"],
      popularPrograms: ["Management", "Transit & Logistique", "Informatique & Réseaux"]
    },
    {
      id: "suisse",
      name: "Suisse",
      flag: "🇨🇭",
      region: "Europe",
      tagline: "Excellence hôtelière, finance internationale et recherche de pointe",
      description: "Écoles de haute gestion hôtelière classées n°1 mondiales, universités d'élite et écosystème axé sur l'innovation et la rigueur.",
      highlights: ["Leader mondial du Hospitality Management", "Qualité de vie et sécurité optimales", "Environnement multilingue de prestige"],
      popularPrograms: ["Gestion Hôtelière & Luxury", "Finance & Banque", "Microtechnique"]
    },
    {
      id: "italie",
      name: "Italie",
      flag: "🇮🇹",
      region: "Europe",
      tagline: "Berceau de l'art, du design, de la mode et de l'ingénierie",
      description: "Universités historiques de premier rang, formations d'excellence en anglais et opportunités uniques dans les secteurs créatifs et industriels.",
      highlights: ["Bourses d'études régionales attractives", "Formations 100% en Anglais disponibles", "Réputation mondiale en Design et Ingénierie"],
      popularPrograms: ["Design & Mode", "Architecture", "Automotive Engineering"]
    }
  ];

  // Filtrage dynamique
  const filteredCountries = selectedCategory === "tous" 
    ? countries 
    : countries.filter(c => c.region.toLowerCase() === selectedCategory.toLowerCase());

  return (
    <div className="w-full bg-white font-sans pt-20 md:pt-24 relative">

      {/* ========================================================= */}
      {/* 1. HERO SECTION                                           */}
      {/* ========================================================= */}
      <section className="relative bg-[#1a365d] text-white py-20 lg:py-28 px-6 overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#eab308]/10 rounded-full blur-3xl pointer-events-none"></div>
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-white/5 rounded-full blur-2xl pointer-events-none"></div>

        <div className="max-w-7xl mx-auto relative z-10 text-center">
          <div className="inline-flex items-center space-x-2 bg-white/10 px-4 py-2 rounded-full border border-white/15 mb-6">
            <Sparkles className="w-4 h-4 text-[#eab308]" />
            <span className="text-xs uppercase font-bold tracking-widest text-[#eab308]">
              Opportunités d'Études Internationales
            </span>
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black uppercase tracking-tight leading-tight mb-6">
            Nos Destinations <span className="text-[#eab308]">Incontournables</span>
          </h1>

          <p className="text-base sm:text-lg md:text-xl text-gray-200 max-w-3xl mx-auto font-light leading-relaxed mb-8">
            Explorez nos destinations d'études partenaires en Europe et en Afrique. Nous vous accompagnons pas à pas vers l'établissement idéal pour votre projet.
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-4 max-w-md mx-auto">
            <button
              onClick={() => setIsModalOpen(true)}
              className="bg-[#eab308] text-[#1a365d] px-8 py-4 text-xs font-bold uppercase tracking-widest hover:bg-white transition-all duration-300 shadow-xl"
            >
              Prendre un RDV d'Orientation
            </button>
            <Link
              to="/services"
              className="border border-white/30 bg-white/5 text-white px-8 py-4 text-xs font-bold uppercase tracking-widest hover:bg-white hover:text-[#1a365d] transition-all duration-300"
            >
              Nos Services
            </Link>
          </div>
        </div>
      </section>

      {/* ========================================================= */}
      {/* 2. SECTION CARTE DES DESTINATIONS                         */}
      {/* ========================================================= */}
      <section className="py-16 md:py-24 px-6 max-w-7xl mx-auto bg-gray-50/50">
        
        {/* Filtres par continent */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {[
            { label: "Toutes les destinations (7)", value: "tous" },
            { label: "Europe (5)", value: "europe" },
            { label: "Afrique (2)", value: "afrique" }
          ].map((btn, idx) => (
            <button
              key={idx}
              onClick={() => setSelectedCategory(btn.value)}
              className={`px-6 py-2.5 text-xs font-bold uppercase tracking-wider rounded-full transition-all duration-300 ${
                selectedCategory === btn.value
                  ? "bg-[#1a365d] text-white shadow-md border border-[#1a365d]"
                  : "bg-white text-gray-700 hover:bg-gray-100 border border-gray-200"
              }`}
            >
              {btn.label}
            </button>
          ))}
        </div>

        {/* Grille des cartes des pays */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredCountries.map((country) => (
            <div
              key={country.id}
              className="bg-white rounded-sm border border-gray-200 shadow-md hover:shadow-2xl transition-all duration-500 overflow-hidden flex flex-col justify-between group border-t-4 border-t-[#eab308] hover:-translate-y-2"
            >
              <div className="p-8">
                {/* En-tête de la carte */}
                <div className="flex items-center justify-between mb-4">
                  <span className="text-4xl drop-shadow-sm">{country.flag}</span>
                  <span className="text-[10px] font-black uppercase tracking-widest bg-[#1a365d]/10 text-[#1a365d] px-3 py-1 rounded-full">
                    {country.region}
                  </span>
                </div>

                <h3 className="text-2xl font-black text-[#1a365d] uppercase tracking-tight mb-2 group-hover:text-[#eab308] transition-colors">
                  {country.name}
                </h3>

                <p className="text-xs font-bold text-[#eab308] uppercase tracking-wider mb-4">
                  {country.tagline}
                </p>

                <p className="text-gray-600 text-sm leading-relaxed mb-6">
                  {country.description}
                </p>

                {/* Points forts */}
                <div className="border-t border-gray-100 pt-4 mb-6">
                  <h4 className="text-xs font-black text-gray-800 uppercase tracking-wider mb-3 flex items-center">
                    <CheckCircle2 size={14} className="text-[#eab308] mr-2" />
                    Points Forts :
                  </h4>
                  <ul className="space-y-2">
                    {country.highlights.map((h, i) => (
                      <li key={i} className="text-xs text-gray-600 flex items-start">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#1a365d] mr-2 mt-1.5 shrink-0"></span>
                        <span>{h}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Filières populaires */}
                <div className="bg-gray-50 p-3 rounded-sm border border-gray-100">
                  <span className="text-[11px] font-bold text-[#1a365d] block mb-1 uppercase tracking-wider">
                    Filières Phares :
                  </span>
                  <p className="text-xs text-gray-600">
                    {country.popularPrograms.join(" • ")}
                  </p>
                </div>
              </div>

              {/* Bouton d'action bas de carte */}
              <div className="p-6 bg-gray-50 border-t border-gray-100">
                <button
                  onClick={() => setIsModalOpen(true)}
                  className="w-full inline-flex items-center justify-center bg-[#1a365d] text-white py-3.5 px-4 text-xs font-bold uppercase tracking-widest hover:bg-[#eab308] hover:text-[#1a365d] transition-all duration-300 shadow-md group/btn"
                >
                  Postuler pour le {country.name}
                  <ArrowRight size={14} className="ml-2 group-hover/btn:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ========================================================= */}
      {/* 3. BANNIÈRE DE CONTACT & ORIENTATION                     */}
      {/* ========================================================= */}
      <section className="bg-[#1a365d] text-white py-16 px-6 relative overflow-hidden">
        <div className="max-w-4xl mx-auto text-center relative z-10 space-y-6">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-black uppercase tracking-tight">
            Vous ne savez pas quelle destination choisir ?
          </h2>
          <p className="text-gray-300 text-base sm:text-lg font-light leading-relaxed max-w-2xl mx-auto">
            Nos conseillers étudient gratuitement votre profil académique et financier pour vous guider vers le pays le plus adapté à vos ambitions.
          </p>
          <div className="pt-4">
            <button
              onClick={() => setIsModalOpen(true)}
              className="bg-[#eab308] text-[#1a365d] px-10 py-4 text-xs md:text-sm font-bold uppercase tracking-widest hover:bg-white transition-all duration-300 shadow-2xl"
            >
              Demander un entretien gratuit
            </button>
          </div>
        </div>
      </section>

      {/* ========================================================= */}
      {/* MODALE DE PRISE DE RENDEZ-VOUS                            */}
      {/* ========================================================= */}
      <DemandeEntretienModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
      />

    </div>
  );
}