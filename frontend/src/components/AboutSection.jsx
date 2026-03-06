import { GraduationCap, Globe } from "lucide-react";

export default function AboutSection() {
  return (
    <section className="w-full font-sans">
      
      {/* ========================================================= */}
      {/* SECTION PRINCIPALE : NOIR PUR (Ultra Premium)             */}
      {/* ========================================================= */}
      <div className="bg-black text-white py-24 md:py-32 px-6 relative overflow-hidden">
        
        {/* Effet de lueur subtile en arrière-plan (Premium Touch) */}
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-white/5 rounded-full blur-[100px] pointer-events-none"></div>

        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center md:items-start gap-16 md:gap-24 relative z-10">
          
          {/* ========================================================= */}
          {/* COLONNE GAUCHE : L'Icône Composite (Globe + Toque)        */}
          {/* ========================================================= */}
          <div className="w-full md:w-1/3 flex justify-center md:justify-end">
            <div className="relative group flex items-center justify-center p-4 cursor-default">
              
              {/* Le Globe en arrière-plan (Rotation très lente au survol) */}
              <Globe 
                size={160} 
                strokeWidth={0.5} 
                className="text-white/30 transition-transform duration-[2000ms] ease-out group-hover:rotate-180" 
              />
              
              {/* La Toque de diplômé au centre (Zoom léger au survol) */}
              <div className="absolute inset-0 flex items-center justify-center">
                <GraduationCap 
                  size={80} 
                  strokeWidth={1.5} 
                  className="text-white drop-shadow-[0_10px_20px_rgba(255,255,255,0.15)] transition-transform duration-700 ease-out group-hover:scale-110" 
                />
              </div>

              {/* Cercle d'accentuation dynamique */}
              <div className="absolute inset-2 border border-white/0 rounded-full group-hover:border-white/20 transition-colors duration-700"></div>
            </div>
          </div>

          {/* ========================================================= */}
          {/* COLONNE DROITE : Le Texte Descriptif                      */}
          {/* ========================================================= */}
          <div className="w-full md:w-2/3 flex flex-col text-center md:text-left">
            
            <h2 className="text-[22px] md:text-[26px] font-bold uppercase tracking-[0.05em] mb-8 drop-shadow-sm text-white">
              A PROPOS DE STUDY EXPERIENCE
            </h2>
            
            <p className="text-[15.5px] md:text-[16.5px] leading-[1.8] text-white/95 mb-8 font-light">
              Study Experience est un organisme de conseil en études à l'étranger. <strong className="font-bold text-white">Notre vocation est de promouvoir les études à l'étranger et d'aider les étudiants à concrétiser leur projet.</strong>
            </p>
            
            <p className="text-[14.5px] md:text-[15px] font-light leading-[2] text-white/60 text-justify md:text-left">
              Nos conseillers ont tous étudié ou vécu à l'étranger et sont formés pour vous aider à faire le bon choix. Leur rôle est de vous coacher dans toutes vos démarches, depuis l'orientation initiale, en passant par l'optimisation de votre dossier et jusqu'à votre inscription finale. Ils seront vos alliés de choix, pour vous aider à choisir les programmes qui vous correspondent le mieux, et pour augmenter vos chances d'admission au sein des universités étrangères choisies.
            </p>

          </div>

        </div>
      </div>

      {/* ========================================================= */}
      {/* BANDE GRISE INFÉRIEURE (Identique à la maquette)          */}
      {/* ========================================================= */}
      <div className="w-full h-24 bg-[#808080]"></div>

    </section>
  );
}