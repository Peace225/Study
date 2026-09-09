import { useState } from "react";
import { Link } from "react-router-dom";
import { 
  UserCheck, 
  Building2, 
  Settings, 
  Presentation, 
  Sparkles, 
  ArrowRight,
  GraduationCap,
  MessagesSquare
} from "lucide-react";

// Import du composant Modale de prise de rendez-vous
import DemandeEntretienModal from "../components/DemandeEntretienModal";

export default function ElitePage() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Liste des programmes et prestations
  const offerings = [
    {
      title: "Coaching & Accompagnement professionnel",
      desc: "Un accompagnement individualisé pour développer son potentiel, préparer son évolution professionnelle et atteindre ses objectifs.",
      icon: <UserCheck className="w-8 h-8 text-[#eab308]" />
    },
    {
      title: "Formation des entreprises & Institutions",
      desc: "Des programmes adaptés aux besoins des organisations : management, leadership, RH, communication, digital, gestion de projet et autres compétences clés.",
      icon: <Building2 className="w-8 h-8 text-[#eab308]" />
    },
    {
      title: "Formations sur mesure",
      desc: "Nous concevons des programmes personnalisés en fonction des objectifs, du public et des enjeux spécifiques de chaque organisation.",
      icon: <Settings className="w-8 h-8 text-[#eab308]" />
    },
    {
      title: "Séminaires, ateliers & conférences",
      desc: "Des formats interactifs favorisant l’apprentissage, l’échange d’expériences et le développement des compétences.",
      icon: <Presentation className="w-8 h-8 text-[#eab308]" />
    }
  ];

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
              Développement des Talents & Exécutif
            </span>
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black uppercase tracking-tight leading-tight mb-6">
            Formation & <span className="text-[#eab308]">Développement</span> des compétences
          </h1>

          <p className="text-base sm:text-lg md:text-xl text-gray-200 max-w-3xl mx-auto font-light leading-relaxed mb-8">
            Des formations académiques et professionnelles pour acquérir de nouvelles compétences et renforcer son expertise.
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-4 max-w-md mx-auto">
            <button
              onClick={() => setIsModalOpen(true)}
              className="bg-[#eab308] text-[#1a365d] px-8 py-4 text-xs font-bold uppercase tracking-widest hover:bg-white transition-all duration-300 shadow-xl"
            >
              Demander un entretien
            </button>
            <Link
              to="/contact"
              className="border border-white/30 bg-white/5 text-white px-8 py-4 text-xs font-bold uppercase tracking-widest hover:bg-white hover:text-[#1a365d] transition-all duration-300"
            >
              Nous contacter
            </Link>
          </div>
        </div>
      </section>

      {/* ========================================================= */}
      {/* 2. PROGRAMMES & SOLUTIONS                                 */}
      {/* ========================================================= */}
      <section className="py-16 md:py-24 px-6 max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-black uppercase text-[#1a365d] tracking-tight mb-4">
            Nos Domaines d'Intervention
          </h2>
          <div className="h-1 w-20 bg-[#eab308] mx-auto mb-6"></div>
          <p className="text-gray-600 max-w-2xl mx-auto text-base md:text-lg">
            Des formules flexibles et adaptées aussi bien aux professionnels qu'aux institutions et entreprises.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {offerings.map((item, idx) => (
            <div 
              key={idx}
              className="bg-white p-8 rounded-sm shadow-md border border-gray-100 flex flex-col justify-between hover:-translate-y-1 hover:shadow-xl transition-all duration-300 border-l-4 border-l-[#1a365d]"
            >
              <div>
                <div className="flex items-center space-x-4 mb-4">
                  <div className="p-3 bg-gray-50 rounded-sm">
                    {item.icon}
                  </div>
                  <h3 className="text-lg font-black text-[#1a365d] uppercase tracking-tight">
                    {item.title}
                  </h3>
                </div>
                <p className="text-gray-600 text-sm md:text-base leading-relaxed pl-1">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ========================================================= */}
      {/* 3. SECTION BESOIN SPÉCIFIQUE (CTA)                       */}
      {/* ========================================================= */}
      <section className="bg-gray-50 py-16 md:py-24 px-6 border-t border-gray-200">
        <div className="max-w-5xl mx-auto text-center space-y-6">
          <div className="inline-flex items-center space-x-2 text-[#1a365d] font-bold uppercase text-xs tracking-widest bg-white px-4 py-2 border border-gray-200 rounded-full">
            <MessagesSquare size={16} className="text-[#eab308]" />
            <span>Accompagnement Sur-Mesure</span>
          </div>

          <h2 className="text-2xl sm:text-3xl md:text-4xl font-black uppercase text-[#1a365d] tracking-tight">
            Un besoin spécifique ?
          </h2>

          <p className="text-gray-600 max-w-2xl mx-auto text-base sm:text-lg leading-relaxed">
            Parlons de votre projet et construisons ensemble la solution la plus adaptée.
          </p>

          <div className="flex flex-col sm:flex-row justify-center items-center gap-4 pt-6">
            <button
              onClick={() => setIsModalOpen(true)}
              className="w-full sm:w-auto bg-[#1a365d] text-white px-8 py-4 text-xs font-bold uppercase tracking-widest hover:bg-[#eab308] hover:text-[#1a365d] transition-all duration-300 shadow-lg"
            >
              Demander un entretien
            </button>

            <Link
              to="/contact"
              className="w-full sm:w-auto bg-white border border-gray-300 text-[#1a365d] px-8 py-4 text-xs font-bold uppercase tracking-widest hover:border-[#1a365d] transition-all duration-300 shadow-sm"
            >
              Nous contacter
            </Link>
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