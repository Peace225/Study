import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Sparkles, MapPin, ArrowRight, CheckCircle2 } from "lucide-react";

// Import du composant Modale de prise de rendez-vous
import DemandeEntretienModal from "../components/DemandeEntretienModal";

// --- Configuration de Firebase (actuellement en commentaire) ---
// import { collection, getDocs } from "firebase/firestore";
// import { db } from "../firebase";

const mockDestinations = [
  {
    id: 1,
    name: "France",
    slug: "france",
    image: "/destinations/france.jpg",
    flag: "🇫🇷",
    region: "Europe",
    tagline: "Tradition d'excellence et diplômes reconnus",
    description: "Grandes Écoles de Commerce et d'Ingénieurs, universités prestigieuses et accompagnement Campus France."
  },
  {
    id: 2,
    name: "Espagne",
    slug: "espagne",
    image: "/destinations/espagne.jpg",
    flag: "🇪🇸",
    region: "Europe",
    tagline: "Écoles de premier plan et ouverture européenne",
    description: "Qualité de vie exceptionnelle, programmes en espagnol ou en anglais et diplômes européens hautement valorisés."
  },
  {
    id: 3,
    name: "Belgique",
    slug: "belgique",
    image: "/destinations/belgique.jpg",
    flag: "🇧🇪",
    region: "Europe",
    tagline: "Cœur de l'Europe et universités de haut niveau",
    description: "Enseignement supérieur francophone d'excellence, frais de scolarité abordables et positionnement stratégique."
  },
  {
    id: 4,
    name: "Maroc",
    slug: "maroc",
    image: "/destinations/maroc.jpg",
    flag: "🇲🇦",
    region: "Afrique",
    tagline: "Pôle académique majeur et écoles de renom",
    description: "Écoles de commerce et d'ingénieurs de premier ordre, environnement familier et diplômes avec équivalence."
  },
  {
    id: 5,
    name: "Sénégal",
    slug: "senegal",
    image: "/destinations/senegal.jpg",
    flag: "🇸🇳",
    region: "Afrique",
    tagline: "Hub universitaire de référence en Afrique de l'Ouest",
    description: "Établissements supérieurs réputés, instituts de gestion performants et environnement très dynamique."
  },
  {
    id: 6,
    name: "Suisse",
    slug: "suisse",
    image: "/destinations/suisse.jpg",
    flag: "🇨🇭",
    region: "Europe",
    tagline: "Excellence hôtelière et recherche de pointe",
    description: "Écoles de gestion classées n°1 mondiales, universités d'élite et écosystème axé sur l'innovation."
  },
  {
    id: 7,
    name: "Italie",
    slug: "italie",
    image: "/destinations/italie.jpg",
    flag: "🇮🇹",
    region: "Europe",
    tagline: "Berceau de l'art, du design et de l'ingénierie",
    description: "Universités historiques, formations d'excellence en anglais et opportunités dans les secteurs créatifs."
  }
];

export default function DestinationsPages() {
  const [destinations, setDestinations] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    // Pour récupérer dynamiquement depuis Firebase :
    // const fetchDestinations = async () => {
    //   try {
    //     const querySnapshot = await getDocs(collection(db, "destinations"));
    //     const data = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
    //     setDestinations(data);
    //   } catch (error) {
    //     console.error("Erreur lors de la récupération :", error);
    //   }
    // };
    // fetchDestinations();

    // Pour l'instant on utilise le mock
    setDestinations(mockDestinations);
  }, []);

  return (
    <div className="w-full bg-gray-50 font-sans pt-20 md:pt-24 min-h-screen relative">
      
      {/* ========================================================= */}
      {/* 1. HERO SECTION                                           */}
      {/* ========================================================= */}
      <section className="relative bg-[#1a365d] text-white py-20 px-6 overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#eab308]/10 rounded-full blur-3xl pointer-events-none"></div>
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-white/5 rounded-full blur-2xl pointer-events-none"></div>

        <div className="max-w-7xl mx-auto relative z-10 text-center">
          <div className="inline-flex items-center space-x-2 bg-white/10 px-4 py-2 rounded-full border border-white/15 mb-6">
            <Sparkles className="w-4 h-4 text-[#eab308]" />
            <span className="text-xs uppercase font-bold tracking-widest text-[#eab308]">
              Le Monde s'ouvre à vous
            </span>
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black uppercase tracking-tight leading-tight mb-6">
            Destinations <span className="text-[#eab308]">Étudiantes</span>
          </h1>

          <p className="text-base sm:text-lg md:text-xl text-gray-200 max-w-2xl mx-auto font-light leading-relaxed mb-8">
            Explorez nos pays partenaires. De l'Europe à l'Afrique, nous vous accompagnons vers l'établissement idéal pour votre réussite académique.
          </p>

          <button
            onClick={() => setIsModalOpen(true)}
            className="bg-[#eab308] text-[#1a365d] px-8 py-4 text-xs font-bold uppercase tracking-widest hover:bg-white transition-all duration-300 shadow-xl"
          >
            Prendre un RDV d'Orientation
          </button>
        </div>
      </section>

      {/* ========================================================= */}
      {/* 2. GRILLE DES DESTINATIONS                                */}
      {/* ========================================================= */}
      <section className="max-w-7xl mx-auto px-6 py-16 md:py-24">
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {destinations.map(dest => (
            <div
              key={dest.id}
              className="bg-white rounded-sm border border-gray-200 shadow-sm hover:shadow-xl transition-all duration-500 overflow-hidden flex flex-col group"
            >
              {/* Image de la destination */}
              <div className="relative h-56 overflow-hidden">
                <div className="absolute inset-0 bg-[#1a365d]/20 group-hover:bg-transparent transition-colors duration-500 z-10"></div>
                <img
                  src={dest.image}
                  alt={dest.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  onError={(e) => { 
                    e.currentTarget.src = "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?q=80&w=800&auto=format&fit=crop"; 
                  }}
                />
                <div className="absolute top-4 left-4 z-20 flex items-center space-x-2">
                  <span className="text-3xl drop-shadow-md">{dest.flag}</span>
                  <span className="text-[10px] font-black uppercase tracking-widest bg-white text-[#1a365d] px-3 py-1 rounded-sm shadow-md">
                    {dest.region}
                  </span>
                </div>
              </div>

              {/* Contenu de la carte */}
              <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-2xl font-black text-[#1a365d] uppercase tracking-tight mb-2 group-hover:text-[#eab308] transition-colors">
                  {dest.name}
                </h3>
                
                <p className="text-xs font-bold text-[#eab308] uppercase tracking-wider mb-4">
                  {dest.tagline}
                </p>

                <p className="text-gray-600 text-sm leading-relaxed flex-grow mb-6">
                  {dest.description}
                </p>

                {/* Lien / Bouton */}
                <Link
                  to={`/destinations/${dest.slug}`}
                  className="inline-flex items-center text-xs font-black text-[#1a365d] uppercase tracking-widest hover:text-[#eab308] transition-colors mt-auto group/link"
                >
                  Découvrir le pays
                  <ArrowRight size={16} className="ml-2 group-hover/link:translate-x-2 transition-transform" />
                </Link>
              </div>
            </div>
          ))}
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