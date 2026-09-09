import { useState } from "react";
import { Link } from "react-router-dom";
import { 
  Building2, 
  Settings, 
  TrendingUp, 
  Crown, 
  BarChart3, 
  Presentation, 
  Landmark, 
  Sparkles, 
  Search, 
  FileText, 
  GraduationCap, 
  Award,
  ArrowRight,
  ChevronRight
} from "lucide-react";

// Import du composant Modale de prise de rendez-vous
import DemandeEntretienModal from "../components/DemandeEntretienModal";

export default function RetourPage() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Liste des solutions pour entreprises et institutions
  const solutions = [
    {
      title: "Formations sur mesure",
      desc: "Des programmes conçus selon vos besoins, votre secteur d’activité et les compétences à développer.",
      icon: <Settings className="w-8 h-8 text-[#eab308]" />
    },
    {
      title: "Développement des compétences",
      desc: "Renforcez les savoir-faire et les compétences professionnelles de vos collaborateurs.",
      icon: <TrendingUp className="w-8 h-8 text-[#eab308]" />
    },
    {
      title: "Management & Leadership",
      desc: "Développez les capacités managériales et le leadership de vos équipes.",
      icon: <Crown className="w-8 h-8 text-[#eab308]" />
    },
    {
      title: "Performance & Gestion",
      desc: "Accompagnez vos collaborateurs dans l’amélioration de leur efficacité et de leur performance.",
      icon: <BarChart3 className="w-8 h-8 text-[#eab308]" />
    },
    {
      title: "Séminaires & Ateliers",
      desc: "Des formats interactifs pour former, sensibiliser et mobiliser vos équipes.",
      icon: <Presentation className="w-8 h-8 text-[#eab308]" />
    },
    {
      title: "Accompagnement institutionnel",
      desc: "Des solutions adaptées aux écoles, administrations, ONG et institutions.",
      icon: <Landmark className="w-8 h-8 text-[#eab308]" />
    }
  ];

  // Processus d'accompagnement
  const processSteps = [
    { number: "01", title: "Analyse des besoins", icon: <Search size={26} /> },
    { number: "02", title: "Conception du programme", icon: <FileText size={26} /> },
    { number: "03", title: "Formation", icon: <GraduationCap size={26} /> },
    { number: "04", title: "Évaluation", icon: <Award size={26} /> }
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
              Entreprises & Institutions
            </span>
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black uppercase tracking-tight leading-tight mb-4">
            ENTREPRISES & <span className="text-[#eab308]">INSTITUTIONS</span>
          </h1>

          <p className="text-lg md:text-2xl font-semibold text-[#eab308] max-w-3xl mx-auto mb-6">
            Développez les compétences qui font la différence
          </p>

          <div className="max-w-3xl mx-auto space-y-4 text-base sm:text-lg text-gray-200 font-light leading-relaxed mb-8">
            <p>
              Nous accompagnons les entreprises, administrations, établissements d’enseignement et institutions dans le développement des compétences de leurs équipes.
            </p>
            <p>
              Nos solutions de formation sont conçues pour répondre aux enjeux réels de chaque organisation, avec des programmes pratiques, flexibles et adaptés à vos objectifs.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row justify-center gap-4 max-w-md mx-auto">
            <button
              onClick={() => setIsModalOpen(true)}
              className="bg-[#eab308] text-[#1a365d] px-8 py-4 text-xs font-bold uppercase tracking-widest hover:bg-white transition-all duration-300 shadow-xl"
            >
              Demander une formation sur mesure
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
      {/* 2. NOS SOLUTIONS (GRID 6 CARTES)                          */}
      {/* ========================================================= */}
      <section className="py-16 md:py-24 px-6 max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-black uppercase text-[#1a365d] tracking-tight mb-4">
            Nos Solutions
          </h2>
          <div className="h-1 w-20 bg-[#eab308] mx-auto mb-6"></div>
          <p className="text-gray-600 max-w-2xl mx-auto text-base md:text-lg">
            Des formules conçues pour renforcer l'efficacité opérationnelle et la performance globale de vos collaborateurs.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {solutions.map((item, idx) => (
            <div 
              key={idx}
              className="bg-white p-8 rounded-sm shadow-md border border-gray-100 flex flex-col justify-between hover:-translate-y-2 hover:shadow-xl transition-all duration-300 border-l-4 border-l-[#1a365d] group"
            >
              <div>
                <div className="p-3 bg-gray-50 rounded-sm w-fit mb-6 group-hover:scale-110 transition-transform">
                  {item.icon}
                </div>
                <h3 className="text-lg font-black text-[#1a365d] uppercase tracking-tight mb-3">
                  {item.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ========================================================= */}
      {/* 3. PROCESSUS : UNE FORMATION ADAPTÉE À VOS ENJEUX        */}
      {/* ========================================================= */}
      <section className="bg-gray-50 py-16 md:py-24 px-6 border-y border-gray-200">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-black uppercase text-[#1a365d] tracking-tight mb-4">
            Une Formation Adaptée à Vos Enjeux
          </h2>
          <div className="h-1 w-20 bg-[#eab308] mx-auto mb-12"></div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {processSteps.map((step, idx) => (
              <div 
                key={idx}
                className="bg-white p-8 border border-gray-200 rounded-sm shadow-sm relative flex flex-col items-center text-center"
              >
                <span className="text-xs font-black text-[#1a365d] bg-[#eab308]/20 px-3 py-1 rounded-full mb-4">
                  ÉTAPE {step.number}
                </span>
                <div className="text-[#1a365d] mb-4">
                  {step.icon}
                </div>
                <h3 className="text-base font-bold text-gray-900 uppercase">
                  {step.title}
                </h3>

                {idx < processSteps.length - 1 && (
                  <ChevronRight className="hidden lg:block absolute -right-4 top-1/2 -translate-y-1/2 text-[#eab308] z-10 w-8 h-8" />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ========================================================= */}
      {/* 4. CALL TO ACTION BANNER                                  */}
      {/* ========================================================= */}
      <section className="bg-[#1a365d] text-white py-16 md:py-20 px-6 relative overflow-hidden">
        <div className="max-w-4xl mx-auto text-center relative z-10 space-y-6">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-black uppercase tracking-tight">
            Vous avez un besoin spécifique ou souhaitez former vos équipes ?
          </h2>

          <p className="text-gray-300 text-base sm:text-lg font-light leading-relaxed max-w-2xl mx-auto">
            Notre équipe est à votre écoute pour construire avec vous un programme adapté à vos objectifs.
          </p>

          <div className="pt-4 flex flex-col sm:flex-row justify-center gap-4">
            <button
              onClick={() => setIsModalOpen(true)}
              className="bg-[#eab308] text-[#1a365d] px-8 py-4 text-xs md:text-sm font-bold uppercase tracking-widest hover:bg-white transition-all duration-300 shadow-2xl"
            >
              Demander une formation sur mesure
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