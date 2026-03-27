import { useState, useEffect } from "react"
import { Link } from "react-router-dom"
import { useAuth } from "../context/AuthContext";
import PartnerSection from "../components/PartnerSection";
import AdvisorSection from "../components/AdvisorSection";
import ServicesSection from "../components/ServicesSection";
import AccreditationsSection from "../components/AccreditationsSection";
import AboutSection from "../components/AboutSection";

export default function Home() {
  const { currentUser } = useAuth();

  // 1. Configuration des slides avec réglage de position pour l'image 3
  const slides = [
    { id: 1, url: "/images/hero-1.jpg", alt: "Étudiant sur le campus", position: "center" },
    { id: 2, url: "/images/hero-2.jpg", alt: "Groupe d'études international", position: "center" },
    { id: 3, url: "/images/hero-3.jpg", alt: "Architecture université prestigieuse", position: "center 20%" }, // Ajusté pour ne pas couper les têtes
  ];

  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [slides.length]);

  return (
    <div className="flex flex-col w-full bg-white">
      {/* ========================================================= */}
      {/* SECTION 1 : HERO BANNER (Full Screen)                     */}
      {/* ========================================================= */}
     <section className="relative h-screen w-full flex items-center overflow-hidden font-sans bg-[#050505]">
        
        {/* CARROUSEL D'ARRIÈRE-PLAN */}
        <div className="absolute inset-0 z-0">
          {slides.map((slide, index) => (
            <div
              key={slide.id}
              className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
                index === currentSlide ? "opacity-100" : "opacity-0"
              }`}
            >
              <div 
                className="absolute inset-0 scale-105 animate-[ken-burns_20s_ease-in-out_infinite]"
                style={{
                  backgroundImage: `url('${slide.url}')`,
                  backgroundSize: 'cover',
                  backgroundPosition: slide.position, 
                  backgroundRepeat: 'no-repeat'
                }}
              />
              
              {/* Overlays pour le contraste pro */}
              <div className="absolute inset-0 bg-black/40"></div>
              <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/20 to-transparent"></div>
            </div>
          ))}
        </div>

        {/* CONTENU TEXTUEL DU HERO */}
        <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-16 w-full">
          <div className="max-w-4xl space-y-8 animate-in fade-in slide-in-from-left duration-1000">
            
            {/* Surtitre avec touches de Jaune Or */}
            <div className="flex items-center space-x-4 mb-2">
              <span className="h-[2px] w-12 bg-[#eab308]"></span>
              <span className="text-[#eab308] text-[10px] font-black uppercase tracking-[0.5em]">
                Expertise & Ambition Académique
              </span>
            </div>

            <h1 className="text-white text-5xl md:text-7xl lg:text-[80px] font-black uppercase tracking-tighter leading-[0.9] drop-shadow-2xl">
              Votre conseiller de <br />
              référence pour les <br />
              études à l’étranger
            </h1>
            
            {/* Paragraphe avec bordure gauche Jaune Or */}
            <p className="text-white/90 text-lg md:text-xl font-light max-w-2xl leading-relaxed border-l-[3px] border-[#eab308] pl-8 py-2">
              Nous vous accompagnons dans toutes vos démarches pour partir étudier à 
              l'étranger en toute sérénité.
            </p>

            <div className="flex flex-col sm:flex-row gap-6 pt-4">
              {/* Bouton Principal : Bleu Marine qui devient Jaune Or au survol */}
              <Link
                to="/universites/recherche"
                className="bg-[#1a365d] text-white px-10 py-4 text-xs font-bold uppercase tracking-widest hover:bg-[#eab308] hover:text-[#1a365d] transition-all duration-300 shadow-2xl text-center"
              >
                Rechercher une formation
              </Link>

              {/* Bouton Secondaire : Blanc qui s'accorde à la charte au survol */}
              <Link
                to={currentUser ? "/apply" : "/services/page"}
                className="bg-white text-gray-900 px-10 py-4 text-xs font-bold uppercase tracking-widest hover:bg-[#eab308] hover:text-[#1a365d] transition-all duration-300 shadow-2xl text-center"
              >
                {currentUser ? "Suivre mon dossier" : "Nos services d'accompagnement"}
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================= */}
      {/* SECTION 2 : PARTENAIRES & CARTES (Overlap sur le Hero)    */}
      <PartnerSection />
      {/* SECTION 3 : CONSEILLER (Bande Turquoise) */}
      <AdvisorSection />
      {/*  4. NOUVELLE SECTION : SERVICES ET TÉMOIGNAGES */}
      <ServicesSection />
      {/*  5. NOUVELLE SECTION : ACCRÉDITATIONS & CTA */}
      <AccreditationsSection />
      {/* 👇 6. NOUVELLE SECTION : À PROPOS (Pré-Footer) */}
      <AboutSection />

    </div>
  )
}