import { useState, useEffect } from "react";
import { Compass, Trophy, FileCheck, Star, ChevronLeft, ChevronRight } from "lucide-react";

export default function ServicesSection() {
  // =========================================================
  // DONNÉES
  // =========================================================
  const services = [
    {
      icon: <Compass size={56} strokeWidth={1.2} />, 
      title: "ACCOMPAGNEMENT SPÉCIALISÉ EN ÉTUDES À L'ÉTRANGER",
      desc: "Plus de 4000 étudiants ont bénéficié de notre accompagnement depuis 2009 et ont ainsi optimisé leurs candidatures !",
      btnText: "EN SAVOIR PLUS"
    },
    {
      icon: <Trophy size={56} strokeWidth={1.2} />, 
      title: "ETUDES D'ÉLITE",
      desc: "Pour intégrer une université du Top 50 mondial, une préparation spécifique et individuelle s'impose sur la durée.",
      btnText: "EN SAVOIR PLUS"
    },
    {
      icon: <FileCheck size={56} strokeWidth={1.2} />, 
      title: "AUTRES SERVICES",
      desc: "Nous vous préparons aux tests d'admissions (IELTS, TOEFL, SAT, GMAT...) et assurons la traduction officielle de vos relevés de notes et diplômes.",
      btnText: "CONTACTEZ-NOUS"
    }
  ];

  const testimonials = [
    {
      id: 1,
      letter: "G",
      color: "bg-[#115e59]", // Vert foncé
      text: "J'ai eu une excellente expérience avec LM Global Education ! Un grand merci à l'équipe pour m'avoir accompagné du début à la fin dans mon projet d'études à l'étranger.",
      name: "Gabin G."
    },
    {
      id: 2,
      letter: "V",
      color: "bg-[#c2410c]", // Orange/Rouille
      text: "Un grand merci pour la gentillesse et le professionnalisme. Ils nous ont renseigné, conseillé et aidé dans toutes les étapes de l'inscription.",
      name: "Virginie A."
    },
    {
      id: 3,
      letter: "M",
      color: "bg-[#be185d]", // Rose/Framboise
      text: "Un grand merci à LM Global Education qui m'a suivie à chaque étape de mon année de terminale pour accomplir mon but d'étudier au Canada.",
      name: "Mélissa F."
    },
    {
      id: 4,
      letter: "A",
      color: "bg-[#eab308]", // Jaune Or pour varier
      text: "Une équipe à l'écoute et très réactive. Grâce à leurs conseils précieux, j'ai pu intégrer l'université de mes rêves à Londres. Je recommande à 100% !",
      name: "Antoine D."
    }
  ];

  // =========================================================
  // LOGIQUE DU CARROUSEL DE TÉMOIGNAGES
  // =========================================================
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  const itemsToShow = typeof window !== 'undefined' && window.innerWidth < 768 ? 1 : 3;
  const maxIndex = Math.max(0, testimonials.length - itemsToShow);

  useEffect(() => {
    if (isHovered) return;
    
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
    }, 4000);
    
    return () => clearInterval(interval);
  }, [isHovered, maxIndex]);

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? maxIndex : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
  };

  return (
    <div className="w-full bg-[#fafafa] font-sans overflow-hidden">
      
      {/* ========================================================= */}
      {/* SECTION 1 : LES SERVICES (Cartes Premium)                 */}
      {/* ========================================================= */}
      <section className="max-w-7xl mx-auto px-6 py-28 relative">
        
        <div className="flex flex-col items-center mb-20 text-center relative z-10">
          <h2 className="text-[28px] md:text-[34px] font-extrabold uppercase text-gray-900 tracking-tight">
            DES SERVICES POUR AUGMENTER VOS CHANCES DE RÉUSSITE
          </h2>
          {/* Ligne Jaune Or */}
          <div className="h-[3px] w-24 bg-[#eab308] mt-6 opacity-80"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative z-10">
          {services.map((service, idx) => (
            <div 
              key={idx} 
              // Ombre teintée Bleu Marine au survol
              className="group relative bg-white p-12 flex flex-col items-center text-center transition-all duration-700 ease-out hover:-translate-y-5 hover:shadow-[0_40px_80px_-20px_rgba(26,54,93,0.15)] border border-gray-100 rounded-sm"
            >
              {/* Ligne d'accentuation en haut Jaune Or */}
              <div className="absolute top-0 left-0 w-full h-[3px] bg-gradient-to-r from-transparent via-[#eab308] to-transparent scale-x-0 group-hover:scale-x-100 transition-transform duration-700 ease-out origin-center"></div>

              {/* Icône devient Bleu Marine au survol */}
              <div className="text-gray-900 mb-8 transition-all duration-700 group-hover:scale-110 group-hover:text-[#1a365d] group-hover:drop-shadow-[0_10px_10px_rgba(26,54,93,0.2)]">
                {service.icon}
              </div>
              
              <h3 className="text-[14px] font-bold uppercase tracking-[0.15em] leading-[1.6] text-gray-900 mb-6 min-h-[44px]">
                {service.title}
              </h3>
              
              <p className="text-[15px] font-light leading-[1.8] text-gray-500 mb-10 flex-grow">
                {service.desc}
              </p>

              <div className="mt-auto w-full">
                <button className="relative group/btn inline-block w-full sm:w-auto">
                  <div className="absolute -inset-1 bg-[#1a365d] blur opacity-10 group-hover/btn:opacity-30 transition duration-500 rounded-sm"></div>
                  {/* Bouton Bleu Marine qui devient Jaune Or au survol */}
                  <div className="relative bg-[#1a365d] text-white px-10 py-5 text-[12px] font-bold uppercase tracking-[0.2em] transition-all duration-500 group-hover/btn:bg-[#eab308] group-hover/btn:text-[#1a365d] w-full border border-transparent">
                    {service.btnText}
                  </div>
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ========================================================= */}
      {/* SECTION 2 : TÉMOIGNAGES (Carrousel Slide)                 */}
      {/* ========================================================= */}
      {/* Arrière-plan Bleu Marine institutionnel */}
      <section className="relative bg-[#1a365d] py-24">
        
        <div className="absolute inset-0 opacity-[0.03] bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] pointer-events-none"></div>

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          
          <div className="flex flex-col md:flex-row items-center justify-between mb-16">
            <h2 className="text-[28px] md:text-[32px] font-extrabold uppercase text-white tracking-tight text-center md:text-left drop-shadow-sm">
              UN SERVICE PLÉBISCITÉ PAR LES ÉTUDIANTS
            </h2>
            
            <div className="hidden md:flex space-x-4">
              {/* Flèches : Blanc au repos, texte Bleu Marine au survol */}
              <button onClick={handlePrev} className="p-3 border border-white/30 text-white hover:bg-white hover:text-[#1a365d] transition-all rounded-full backdrop-blur-sm">
                <ChevronLeft size={24} />
              </button>
              <button onClick={handleNext} className="p-3 border border-white/30 text-white hover:bg-white hover:text-[#1a365d] transition-all rounded-full backdrop-blur-sm">
                <ChevronRight size={24} />
              </button>
            </div>
          </div>

          <div 
            className="overflow-hidden"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            <div 
              className="flex transition-transform duration-700 ease-in-out"
              style={{ transform: `translateX(-${currentIndex * (100 / itemsToShow)}%)` }}
            >
              {testimonials.map((testi) => (
                <div 
                  key={testi.id} 
                  className="w-full md:w-1/3 flex-shrink-0 px-2" 
                >
                  <div className="h-full bg-white/10 backdrop-blur-md p-10 flex flex-col items-center text-center transition-all duration-300 hover:bg-white/20 hover:-translate-y-2 border border-white/10 rounded-sm shadow-xl">
                    
                    <div className={`w-16 h-16 rounded-full ${testi.color} flex items-center justify-center text-white text-3xl font-light mb-8 shadow-lg ring-4 ring-white/10`}>
                      {testi.letter}
                    </div>
                    
                    <p className="text-[15px] font-light leading-relaxed text-white/95 mb-6 flex-grow italic">
                      "{testi.text}"
                    </p>

                    {/* Étoiles en Jaune Or */}
                    <div className="flex items-center gap-1 mb-4 text-[#eab308]">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} size={16} fill="currentColor" strokeWidth={0} />
                      ))}
                    </div>

                    <span className="text-white text-[14px] font-bold tracking-[0.1em] uppercase">
                      {testi.name}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </section>

    </div>
  );
}