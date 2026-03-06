import { useState, useEffect } from "react";
import { Users, Globe, GraduationCap, ChevronLeft, ChevronRight } from "lucide-react";

export default function PartnerSection() {
  const features = [
    {
      icon: <Users size={64} strokeWidth={1.2} />,
      title: "CONSEIL ET ACCOMPAGNEMENT SUR MESURE"
    },
    {
      icon: <Globe size={64} strokeWidth={1.2} />,
      title: "RÉSEAU DE 200+ UNIVERSITÉS PARTENAIRES"
    },
    {
      icon: <GraduationCap size={64} strokeWidth={1.2} />,
      title: "4000+ ÉTUDIANTS PARTIS GRÂCE À LM GLOBAL EDUCATION"
    }
  ];

  // Liste des logos partenaires pour le carrousel
  const partners = [
    { id: 1, name: "Warwick", url: "/images/Warwick.png" },
    { id: 2, name: "Bath", url: "/images/bath.png" },
    { id: 3, name: "ANU", url: "/images/anu.jpg" },
    { id: 4, name: "George Mason", url: "/images/gmu.png" },
    { id: 5, name: "Chan", url: "/images/chan.jpg" },
    { id: 6, name: "Queen University", url: "/images/queen.png" }
  ];

  // =========================================================
  // LOGIQUE DU CARROUSEL DES PARTENAIRES
  // =========================================================
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  // Responsive : Combien de logos afficher simultanément
  const getItemsToShow = () => {
    if (typeof window !== 'undefined') {
      if (window.innerWidth < 640) return 2; // Mobile
      if (window.innerWidth < 1024) return 4; // Tablette
      return 5; // Desktop
    }
    return 5;
  };

  const itemsToShow = getItemsToShow();
  const maxIndex = Math.max(0, partners.length - itemsToShow);

  // Défilement automatique
  useEffect(() => {
    if (isHovered) return;
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
    }, 3000);
    return () => clearInterval(interval);
  }, [isHovered, maxIndex]);

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? maxIndex : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
  };

  return (
    <section className="relative bg-white pb-32 font-sans">
      
      {/* ========================================================= */}
      {/* 1. LES TROIS CARTES FLOTTANTES (Premium Elevation)        */}
      {/* ========================================================= */}
      <div className="max-w-7xl mx-auto px-6 -translate-y-28 z-30 relative">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((item, idx) => (
            <div 
              key={idx} 
              className="group relative bg-white shadow-[0_15px_40px_-10px_rgba(0,0,0,0.15)] p-12 min-h-[300px] flex flex-col items-center justify-center text-center transition-all duration-700 ease-out hover:-translate-y-6 hover:shadow-[0_40px_80px_-20px_rgba(26,54,93,0.25)] cursor-pointer border border-gray-100 rounded-sm"
            >
              <div className="absolute top-0 left-0 w-full h-[3px] bg-gradient-to-r from-transparent via-[#eab308] to-transparent scale-x-0 group-hover:scale-x-100 transition-transform duration-700 ease-out origin-center"></div>

              <div className="text-gray-900 mb-8 transition-all duration-700 ease-out group-hover:scale-110 group-hover:text-[#1a365d] group-hover:drop-shadow-[0_10px_10px_rgba(26,54,93,0.2)]">
                {item.icon}
              </div>
              
              <h3 className="text-[13px] font-bold uppercase tracking-[0.15em] leading-[1.8] text-gray-900 group-hover:text-black transition-colors duration-500">
                {item.title}
              </h3>
            </div>
          ))}
        </div>
      </div>

      {/* ========================================================= */}
      {/* 2. SECTION RÉSEAU UNIVERSITÉS                             */}
      {/* ========================================================= */}
      <div className="max-w-7xl mx-auto px-6 mt-4 text-center relative z-20">
        
        {/* TITRE H2 */}
        <div className="flex flex-col items-center mb-16">
           <h2 className="text-[28px] md:text-[34px] font-extrabold uppercase text-gray-900 tracking-tight">
             UN RÉSEAU DE PLUS DE 200 UNIVERSITÉS PARTENAIRES
           </h2>
           <div className="h-[3px] w-24 bg-[#eab308] mt-6 opacity-80"></div>
        </div>

        {/* ========================================================= */}
        {/* CARROUSEL DES LOGOS PARTENAIRES                           */}
        {/* ========================================================= */}
        <div 
          className="flex items-center justify-between w-full max-w-6xl mx-auto mb-16 relative px-0 md:px-4"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          
          {/* Flèche Gauche */}
          <button 
            onClick={handlePrev}
            className="absolute left-0 z-20 p-2 md:p-3 bg-white/80 backdrop-blur-sm shadow-sm rounded-full text-[#1a365d] opacity-60 hover:opacity-100 hover:bg-gray-50 hover:-translate-x-1 transition-all duration-300 -translate-x-2 md:-translate-x-6"
          >
            <ChevronLeft size={40} strokeWidth={2} />
          </button>
          
          {/* Zone de défilement des logos */}
          <div className="overflow-hidden w-full px-8 md:px-12">
            <div 
              className="flex transition-transform duration-700 ease-in-out items-center"
              style={{ transform: `translateX(-${currentIndex * (100 / itemsToShow)}%)` }}
            >
              {partners.map((logo) => (
                <div 
                  key={logo.id} 
                  className="flex-shrink-0 flex items-center justify-center px-4"
                  style={{ width: `${100 / itemsToShow}%` }} 
                >
                  <div className="group/logo relative flex items-center justify-center h-20 md:h-28 w-full">
                    <img 
                      src={logo.url} 
                      alt={logo.name} 
                      // Couleurs éclatantes par défaut, effet de zoom et ombre au survol
                      className="max-h-[70%] md:max-h-[85%] max-w-full object-contain transition-all duration-500 ease-out cursor-pointer group-hover/logo:-translate-y-2 group-hover/logo:scale-110 group-hover/logo:drop-shadow-[0_15px_25px_rgba(26,54,93,0.15)]" 
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Flèche Droite */}
          <button 
            onClick={handleNext}
            className="absolute right-0 z-20 p-2 md:p-3 bg-white/80 backdrop-blur-sm shadow-sm rounded-full text-[#1a365d] opacity-60 hover:opacity-100 hover:bg-gray-50 hover:translate-x-1 transition-all duration-300 translate-x-2 md:translate-x-6"
          >
            <ChevronRight size={40} strokeWidth={2} />
          </button>
        </div>

        {/* Paragraphe descriptif */}
        <p className="text-[16px] font-light leading-[1.9] text-gray-600 mb-14 text-center max-w-5xl mx-auto px-4">
          <strong className="font-semibold text-gray-900">LM Global Education</strong> est votre partenaire privilégié pour accéder à un réseau en expansion constante de plus de <strong className="font-semibold text-gray-900">200 universités étrangères de premier plan</strong>. Représentant officiel en France de ces établissements, nous développons sans cesse nos partenariats, assurant ainsi une offre éducative de haute qualité, reconnue internationalement et en phase avec les exigences du marché français.
        </p>

        {/* Bouton Premium avec Effet Glow */}
        <button className="relative group inline-block mt-4">
          <div className="absolute -inset-1 bg-[#1a365d] blur opacity-20 group-hover:opacity-40 transition duration-500 rounded-sm"></div>
          <div className="relative bg-[#1a365d] text-white px-12 py-5 text-[13px] font-bold uppercase tracking-[0.2em] transition-all duration-500 group-hover:bg-[#eab308] group-hover:text-[#1a365d] border border-transparent">
            VOIR LES UNIVERSITÉS
          </div>
        </button>

      </div>
    </section>
  );
}