import { Quote, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

export default function MotDeLaDirection() {
  return (
    <div className="w-full bg-white font-sans pt-24 md:pt-28">
      {/* BANNIÈRE HAUT DE PAGE */}
      <section className="bg-[#1a365d] text-white py-16 md:py-20 px-6 relative overflow-hidden">
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="flex items-center space-x-3 mb-4">
            <span className="h-[2px] w-8 bg-[#eab308]"></span>
            <span className="text-[#eab308] text-xs font-black uppercase tracking-[0.3em]">
              À Propos
            </span>
          </div>
          <h1 className="text-3xl md:text-5xl font-black uppercase tracking-tight">
            Mot de la Direction
          </h1>
        </div>
      </section>

      {/* CONTENU PRINCIPAL */}
      <section className="max-w-7xl mx-auto px-6 py-16 md:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* PHOTO ET PROFIL DE LA DIRECTRICE */}
          <div className="lg:col-span-5 relative">
            <div className="sticky top-28">
              <div className="relative rounded-sm overflow-hidden shadow-2xl border-b-4 border-[#eab308]">
                <img 
                  src="/images/director.jpg" 
                  alt="Khady Diabaté - Directrice Générale" 
                  className="w-full h-auto object-cover"
                  onError={(e) => {
                    e.currentTarget.src = "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=800";
                  }}
                />
              </div>
              
              <div className="bg-gray-50 p-6 border-x border-b border-gray-100 mt-0">
                <h3 className="text-xl font-black text-[#1a365d] uppercase">
                  Khady Diabaté
                </h3>
                <p className="text-sm font-bold text-[#eab308] uppercase tracking-wider mt-1">
                  Fondatrice & Directrice Générale
                </p>
                <p className="text-xs text-gray-500 mt-2">
                  LM Global Education
                </p>
              </div>
            </div>
          </div>

          {/* TEXTE DU MOT DE LA DIRECTION */}
          <div className="lg:col-span-7 space-y-6 text-gray-700 leading-relaxed text-base md:text-lg">
            
            <div className="relative pl-8 border-l-4 border-[#eab308] italic text-xl md:text-2xl font-serif text-[#1a365d] my-4">
              <Quote className="absolute -top-3 -left-3 text-[#eab308]/30 w-8 h-8" />
              "Se former, c’est préparer son avenir. Se perfectionner, c’est donner une nouvelle dimension à son parcours."
            </div>

            <p className="font-bold text-[#1a365d]">
              Chers étudiants, chers professionnels, chers partenaires,
            </p>

            <p>
              Dans un monde en constante évolution, la formation constitue plus que jamais un levier essentiel de réussite, d’employabilité et de transformation.
            </p>

            <p>
              Notre ambition est de proposer à chaque apprenant un accompagnement adapté à son parcours, à ses aspirations et aux exigences du monde professionnel.
            </p>

            <p>
              À travers nos programmes de formation, nous souhaitons favoriser l’acquisition de compétences concrètes, développer les talents et accompagner chacun dans la construction de son projet académique et professionnel.
            </p>

            <p>
              Nous accordons une importance particulière à la qualité des contenus, à l’expertise de nos intervenants et à l’adéquation de nos formations avec les besoins des entreprises et les évolutions du marché.
            </p>

            <p>
              Nous vous souhaitons la bienvenue et vous invitons à découvrir notre offre de formations.
            </p>

            <div className="pt-8 mt-8 border-t border-gray-200 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
              <div>
                <p className="font-black text-[#1a365d] uppercase">Khady Diabaté</p>
                <p className="text-xs text-gray-500">Directrice Générale - LM Global Education</p>
              </div>

              <Link
                to="/universites"
                className="inline-flex items-center bg-[#1a365d] text-white px-6 py-3 text-xs font-bold uppercase tracking-widest hover:bg-[#eab308] hover:text-[#1a365d] transition-all shadow-md"
              >
                Découvrir nos formations <ArrowRight size={14} className="ml-2" />
              </Link>
            </div>

          </div>

        </div>
      </section>
    </div>
  );
}