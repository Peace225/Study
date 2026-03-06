import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

export default function AccreditationsSection() {
  const accreditations = [
    { id: 1, name: "ICEF", url: "/images/icef.png" },
    { id: 2, name: "UCAS", url: "/images/ucas.png" },
    { id: 3, name: "British Council IELTS", url: "/images/ielts.png" },
    { id: 4, name: "UK Agent Quality Framework", url: "/images/australia.jpg" },
    { id: 5, name: "PIER", url: "/images/pier.png" },
    { id: 6, name: "UK SPACE", url: "/images/uk space.jpg" },
    { id: 7, name: "IMAGINE", url: "/images/imagine.png" }
  ];

  // =========================================================
  // LOGIQUE DU CARROUSEL (Auto-Slide + Flèches)
  // =========================================================
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  // Combien d'éléments afficher en fonction de la taille de l'écran (Responsive)
  const getItemsToShow = () => {
    if (typeof window !== 'undefined') {
      if (window.innerWidth < 640) return 2; // Mobile : 2 logos
      if (window.innerWidth < 1024) return 3; // Tablette : 3 logos
      return 4; // Desktop : 4 logos max visibles en même temps (pour qu'ils soient grands)
    }
    return 4;
  };

  const itemsToShow = getItemsToShow();
  const maxIndex = Math.max(0, accreditations.length - itemsToShow);

  // Auto-slide toutes les 3 secondes (pause on hover)
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
    <div className="w-full bg-white font-sans overflow-hidden">
      
      {/* ========================================================= */}
      {/* SECTION 1 : ACCRÉDITATIONS (Style Éditorial)              */}
      {/* ========================================================= */}
      <section className="max-w-7xl mx-auto px-6 py-28 border-t border-gray-100/60">
        
        {/* En-tête : Titre et Description */}
        <div className="max-w-6xl mx-auto mb-20 relative">
          
          <div className="mb-8">
            <h2 className="text-[30px] md:text-[38px] font-black uppercase text-gray-900 tracking-tighter mb-4">
              NOS ACCRÉDITATIONS
            </h2>
            <div className="h-[3px] w-20 bg-[#eab308] opacity-90"></div>
          </div>
          
          <p className="text-[16.5px] font-light leading-[2] text-gray-600 max-w-5xl text-justify md:text-left">
            Chez <strong className="font-semibold text-gray-900">LM Global Education</strong>, nous portons fièrement le titre d'agence française la plus accréditée du secteur. Notre mission ? Défendre vos intérêts avec une rigueur et une éthique sans faille. Notre engagement envers l'excellence est reconnu et régulièrement validé par des organisations de renom telles que le <span className="italic text-gray-800">British Council</span> et <span className="italic text-gray-800">ICEF</span>. Notre équipe, composée de conseillers experts, est le gage d'un service d'une qualité exceptionnelle, toujours en quête de votre réussite.
          </p>
        </div>

        {/* ========================================================= */}
        {/* CARROUSEL DES LOGOS (Actif et Fluide)                     */}
        {/* ========================================================= */}
        <div 
          className="flex items-center justify-between w-full max-w-7xl mx-auto group/slider mt-12 relative px-0 md:px-4"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          
          {/* Flèche Gauche */}
          <button 
            onClick={handlePrev}
            className="absolute left-0 z-20 p-3 md:p-4 bg-white/80 backdrop-blur-sm shadow-md rounded-full text-[#1a365d] opacity-50 hover:opacity-100 hover:bg-gray-50 hover:-translate-x-1 transition-all duration-300 -translate-x-2 md:-translate-x-6"
          >
            <ChevronLeft size={36} strokeWidth={1.5} />
          </button>
          
          {/* Fenêtre visible du Carrousel */}
          <div className="overflow-hidden w-full px-8 md:px-12">
            
            {/* La piste qui coulisse (Train de logos) */}
            <div 
              className="flex transition-transform duration-700 ease-in-out items-center"
              style={{ transform: `translateX(-${currentIndex * (100 / itemsToShow)}%)` }}
            >
              {accreditations.map((logo) => (
                <div 
                  key={logo.id} 
                  // La largeur dynamique permet d'afficher 2, 3 ou 4 logos selon l'écran
                  className="flex-shrink-0 flex items-center justify-center px-4"
                  style={{ width: `${100 / itemsToShow}%` }} 
                >
                  <div className="group/logo relative flex items-center justify-center h-24 md:h-32 lg:h-36 w-full">
                    <img 
                      src={logo.url} 
                      alt={logo.name} 
                      // Logos agrandis : max-h-full garantit qu'ils prennent toute la hauteur dispo
                      className="max-h-[80%] md:max-h-[90%] max-w-full object-contain transition-all duration-500 ease-out cursor-pointer group-hover/logo:-translate-y-2 group-hover/logo:scale-110 group-hover/logo:drop-shadow-[0_15px_25px_rgba(26,54,93,0.15)]" 
                    />
                  </div>
                </div>
              ))}
            </div>

          </div>

          {/* Flèche Droite */}
          <button 
            onClick={handleNext}
            className="absolute right-0 z-20 p-3 md:p-4 bg-white/80 backdrop-blur-sm shadow-md rounded-full text-[#1a365d] opacity-50 hover:opacity-100 hover:bg-gray-50 hover:translate-x-1 transition-all duration-300 translate-x-2 md:translate-x-6"
          >
            <ChevronRight size={36} strokeWidth={1.5} />
          </button>

        </div>

      </section>

      {/* ========================================================= */}
      {/* SECTION 2 : CALL TO ACTION (CTA) FINAL                    */}
      {/* ========================================================= */}
      <section className="relative max-w-7xl mx-auto px-6 pb-32 pt-16 text-center">
        
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/3 h-[1px] bg-gradient-to-r from-transparent via-gray-200 to-transparent"></div>

        <h2 className="text-[26px] md:text-[36px] font-black uppercase text-gray-900 tracking-tight mb-14 drop-shadow-sm">
          PRÊT(E) POUR PARTIR FAIRE VOS ÉTUDES À L'ÉTRANGER ?
        </h2>

        <Link 
          to="/contact" 
          className="group relative inline-flex items-center justify-center bg-[#1a365d] text-white px-12 py-6 text-[13px] font-black uppercase tracking-[0.2em] overflow-hidden transition-all duration-500 hover:bg-[#eab308] hover:text-[#1a365d] hover:shadow-[0_20px_50px_rgba(234,179,8,0.35)] hover:-translate-y-1 rounded-sm"
        >
          <div className="absolute inset-0 w-1/2 h-full bg-white/20 skew-x-[-25deg] -translate-x-[150%] group-hover:translate-x-[250%] transition-transform duration-1000 ease-in-out"></div>
          
          <span className="relative z-10 flex items-center">
            CONTACTEZ VOTRE CONSEILLER
            <ArrowRight className="ml-3 w-5 h-5 opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-500 ease-out" />
          </span>
        </Link>

      </section>

    </div>
  );
}