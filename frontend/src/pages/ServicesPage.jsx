import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { 
  Compass, 
  FileText, 
  Landmark, 
  Plane, 
  Home, 
  Languages, 
  ArrowRight,
  Loader2
} from "lucide-react";

// Remplacement des images par les composants d'icônes Lucide pour un rendu vectoriel parfait
const mockServices = [
  {
    id: 1,
    title: "Orientation universitaire",
    description: "Nous vous aidons à choisir la meilleure université et le programme adapté à votre projet professionnel.",
    icon: Compass,
    path: "/services/conseil"
  },
  {
    id: 2,
    title: "Dossier et admission",
    description: "Accompagnement complet pour la constitution de votre dossier (lettre, CV) et votre admission à l’étranger.",
    icon: FileText,
    path: "/services/elite"
  },
  {
    id: 3,
    title: "Bourses et financement",
    description: "Nous vous guidons dans la recherche de bourses au mérite et de financements pour vos études.",
    icon: Landmark,
    path: "/contact"
  },
  {
    id: 4,
    title: "Visa et démarches",
    description: "Assistance personnalisée pour l’obtention de votre visa étudiant et les démarches administratives complexes.",
    icon: Plane,
    path: "/contact"
  },
  {
    id: 5,
    title: "Logement étudiant",
    description: "Conseils et accompagnement pour trouver un logement sécurisé et abordable dans votre pays d’accueil.",
    icon: Home,
    path: "/contact"
  },
  {
    id: 6,
    title: "Préparation linguistique",
    description: "Cours, ressources et tests (IELTS, TOEFL) pour valider vos compétences linguistiques avant le départ.",
    icon: Languages,
    path: "/services/ielts"
  }
];

export default function ServicesPage() {
  const [services, setServices] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulation d'un appel réseau (Firestore) avec un petit délai
    const fetchServices = async () => {
      try {
        await new Promise(resolve => setTimeout(resolve, 600)); // Faux délai
        setServices(mockServices);
      } catch (error) {
        console.error("Erreur lors de la récupération des services :", error);
      } finally {
        setLoading(false);
      }
    };

    fetchServices();
  }, []);

  return (
    <div className="pt-24 min-h-screen bg-gray-50 font-sans pb-20">
      
      {/* EN-TÊTE HERO */}
      <div className="bg-[#1a365d] py-16 px-6 text-center text-white">
        <span className="text-[#eab308] font-bold tracking-[0.2em] uppercase text-sm mb-4 block">
          Notre Expertise
        </span>
        <h1 className="text-3xl md:text-5xl font-black uppercase tracking-tight mb-4">
          Nos Services
        </h1>
        <p className="text-gray-300 max-w-2xl mx-auto text-lg">
          Un accompagnement complet et sur-mesure à chaque étape de votre projet d'études à l'international.
        </p>
      </div>

      {/* GRILLE DES SERVICES */}
      <div className="max-w-[1200px] mx-auto px-6 mt-16">
        {loading ? (
          <div className="flex flex-col items-center justify-center py-20 text-[#1a365d]">
            <Loader2 size={40} className="animate-spin mb-4" />
            <p className="font-bold uppercase tracking-widest text-sm">Chargement de nos services...</p>
          </div>
        ) : (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service) => {
              const IconComponent = service.icon; // On récupère le composant icône
              
              return (
                <div
                  key={service.id}
                  className="bg-white p-8 shadow-md border-t-4 border-transparent hover:border-[#eab308] hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group flex flex-col h-full"
                >
                  <div className="w-16 h-16 bg-[#1a365d]/5 rounded-full flex items-center justify-center text-[#1a365d] mb-6 group-hover:bg-[#1a365d] group-hover:text-white transition-colors duration-300">
                    <IconComponent size={28} />
                  </div>
                  
                  <h3 className="text-xl font-bold text-[#1a365d] mb-3">
                    {service.title}
                  </h3>
                  
                  <p className="text-gray-600 mb-8 flex-grow leading-relaxed">
                    {service.description}
                  </p>
                  
                  <Link 
                    to={service.path} 
                    className="mt-auto inline-flex items-center text-[12px] font-bold uppercase tracking-wider text-[#eab308] group-hover:text-[#1a365d] transition-colors"
                  >
                    En savoir plus <ArrowRight size={16} className="ml-2 transform group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              );
            })}
          </div>
        )}
      </div>

      {/* CALL TO ACTION BAS DE PAGE */}
      <div className="max-w-[1200px] mx-auto px-6 mt-20">
        <div className="bg-[#eab308] p-10 md:p-14 text-center">
          <h2 className="text-2xl md:text-3xl font-black text-[#1a365d] uppercase tracking-tight mb-4">
            Besoin d'un accompagnement personnalisé ?
          </h2>
          <p className="text-[#1a365d] font-medium mb-8 max-w-2xl mx-auto">
            Discutez de votre projet avec l'un de nos conseillers lors d'un premier entretien d'orientation totalement gratuit.
          </p>
          <Link 
            to="/rdv" 
            className="inline-block bg-[#1a365d] text-white px-8 py-4 text-[13px] font-bold uppercase tracking-widest hover:bg-white hover:text-[#1a365d] transition-all shadow-xl"
          >
            Prendre un rendez-vous
          </Link>
        </div>
      </div>

    </div>
  );
}