import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

export default function AdvisorSection() {
  return (
    // Fond Bleu Marine au lieu de turquoise
    <section className="relative w-full bg-[#1a365d] py-20 md:py-32 font-sans overflow-hidden">
      
      {/* ========================================================= */}
      {/* 1. EFFETS DE PROFONDEUR ET D'ÉCLAIRAGE (Background)       */}
      {/* ========================================================= */}
      {/* Gradient radial pour simuler un éclairage luxueux depuis le centre */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.08)_0%,transparent_70%)] pointer-events-none"></div>
      
      {/* Formes géométriques floutées pour casser le côté "plat" de la couleur unie */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3 pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-black/10 rounded-full blur-3xl translate-y-1/2 -translate-x-1/3 pointer-events-none"></div>

      {/* ========================================================= */}
      {/* 2. CONTENU PRINCIPAL                                      */}
      {/* ========================================================= */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-16 flex flex-col md:flex-row items-center gap-16 lg:gap-24">
        
        {/* COLONNE GAUCHE : L'icône avec effet de flottaison */}
        <div className="w-full md:w-5/12 flex justify-center md:justify-end">
          <div className="relative group cursor-default">
            {/* Lueur d'arrière-plan DORÉE derrière l'icône au survol pour l'effet Prestige */}
            <div className="absolute inset-0 bg-[#eab308]/20 blur-2xl rounded-full scale-0 group-hover:scale-125 transition-transform duration-700 ease-out"></div>
            
            {/* L'icône SVG avec animation "Float" et ombre portée massive */}
            <svg 
              width="220" 
              height="220" 
              viewBox="0 0 24 24" 
              fill="none" 
              stroke="white" 
              strokeWidth="1.2" 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              className="relative z-10 drop-shadow-[0_20px_30px_rgba(0,0,0,0.2)] transition-all duration-700 ease-in-out group-hover:-translate-y-4 group-hover:drop-shadow-[0_30px_40px_rgba(0,0,0,0.3)]"
            >
              {/* Corps principal */}
              <circle cx="10" cy="9" r="4" />
              <path d="M16 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
              {/* Bulles de discussion */}
              <path d="M15 10h4a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2h-1.5l-2.5 2.5v-2.5H15a2 2 0 0 1-2-2v-4a2 2 0 0 1 2-2z" />
              {/* Petit utilisateur intérieur */}
              <circle cx="17" cy="13.5" r="1.5" />
            </svg>
          </div>
        </div>

        {/* COLONNE DROITE : Typographie et Bouton Premium */}
        <div className="w-full md:w-7/12 text-white">
          
          {/* Ligne décorative institutionnelle (Passée en Jaune Or) */}
          <div className="flex items-center space-x-4 mb-6 opacity-90">
            <span className="h-[2px] w-12 bg-[#eab308]"></span>
            <span className="text-[#eab308] text-[11px] font-black uppercase tracking-[0.4em]">
              Expertise
            </span>
          </div>

          <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold uppercase tracking-tight leading-[1.1] mb-8 drop-shadow-md">
            Votre conseiller pour les études à l'étranger
          </h2>
          
          <p className="text-[16px] md:text-[18px] leading-[1.9] text-white/90 mb-12 max-w-2xl font-light border-l-[2px] border-[#eab308]/50 pl-6">
            En tant que cabinet spécialisé dans l'enseignement supérieur à l'étranger, nos conseillers vous accompagnent dans le choix et la définition de votre projet d'études à l'étranger. Que vous optiez pour l'un de nos établissements partenaires ou pour un parcours totalement personnalisé, nous sommes là pour tracer avec vous la route vers votre succès, <span className="font-bold text-white underline underline-offset-4 decoration-[#eab308]/70">de A à Z.</span>
          </p>

          {/* Bouton Interactif Premium : Blanc texte Bleu Marine -> Jaune Or au survol */}
          <Link 
            to="/services" 
            className="group relative inline-flex items-center justify-center bg-white text-[#1a365d] px-10 py-5 text-[13px] font-black uppercase tracking-[0.2em] shadow-[0_15px_30px_rgba(0,0,0,0.15)] overflow-hidden transition-all duration-500 hover:shadow-[0_20px_40px_rgba(0,0,0,0.25)] hover:-translate-y-1"
          >
            {/* Arrière-plan coloré (Jaune Or) qui glisse au survol */}
            <div className="absolute inset-0 bg-[#eab308] translate-y-[100%] group-hover:translate-y-0 transition-transform duration-500 ease-in-out"></div>
            
            {/* Le texte reste Bleu Marine au survol pour un contraste parfait avec le Jaune Or */}
            <span className="relative z-10 transition-colors duration-500 group-hover:text-[#1a365d] flex items-center">
              Découvrez nos services
              {/* Flèche qui apparaît au survol */}
              <ArrowRight className="ml-3 w-4 h-4 opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-500 ease-out" />
            </span>
          </Link>

        </div>
      </div>
    </section>
  );
}