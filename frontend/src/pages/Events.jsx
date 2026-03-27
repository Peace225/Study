import { Link } from "react-router-dom";
import { Calendar, Video, Users, ArrowRight } from "lucide-react";

export default function Events() {
  return (
    <div className="pt-24 min-h-screen bg-gray-50 font-sans pb-20">
      
      {/* HERO SECTION */}
      <section 
        className="relative py-28 px-6 text-center bg-cover bg-center"
        style={{ backgroundImage: "url('https://images.unsplash.com/photo-1540575467063-178a50c2df87?q=80&w=1920&auto=format&fit=crop')" }}
      >
        <div className="absolute inset-0 bg-[#1a365d]/85 backdrop-blur-[2px]" />
        <div className="relative z-10 max-w-[900px] mx-auto text-white">
          <span className="text-[#eab308] font-bold tracking-[0.2em] uppercase text-sm mb-4 block">
            Rencontrons-nous
          </span>
          <h1 className="text-4xl md:text-6xl font-black uppercase tracking-tight mb-6">
            Nos Événements
          </h1>
          <p className="text-lg text-gray-200 font-light max-w-2xl mx-auto mb-10">
            Participez à nos webinaires en ligne ou venez nous rencontrer en personne lors de nos salons exclusifs pour préparer votre projet d'études à l'étranger.
          </p>
        </div>
      </section>

      {/* LES 2 PILIERS */}
      <section className="py-20 px-6 max-w-[1000px] mx-auto -mt-16 relative z-20">
        <div className="grid md:grid-cols-2 gap-8">
          
          {/* Card 1 : Webinaires */}
          <div className="bg-white p-10 shadow-xl border-t-4 border-[#eab308] hover:-translate-y-2 transition-transform duration-300 flex flex-col h-full">
            <div className="w-16 h-16 bg-[#1a365d]/10 rounded-full flex items-center justify-center text-[#1a365d] mb-6">
              <Video size={32} />
            </div>
            <h3 className="text-2xl font-bold text-[#1a365d] mb-4">Webinaires en ligne</h3>
            <p className="text-gray-600 mb-8 flex-grow">
              Suivez nos conférences thématiques depuis chez vous. Apprenez-en plus sur les destinations, les processus d'admission et posez vos questions en direct à nos experts.
            </p>
            <Link to="/events/webinaires" className="inline-flex items-center text-[#eab308] font-bold uppercase text-sm tracking-wider hover:text-[#1a365d] transition-colors">
              Voir les webinaires <ArrowRight size={18} className="ml-2" />
            </Link>
          </div>

          {/* Card 2 : Salons Elevate */}
          <div className="bg-[#1a365d] p-10 shadow-xl hover:-translate-y-2 transition-transform duration-300 flex flex-col h-full text-white">
            <div className="w-16 h-16 bg-white/10 rounded-full flex items-center justify-center text-[#eab308] mb-6">
              <Users size={32} />
            </div>
            <h3 className="text-2xl font-bold mb-4">Salons Elevate</h3>
            <p className="text-gray-300 mb-8 flex-grow">
              L'événement incontournable pour rencontrer les représentants des meilleures universités internationales. Des entretiens individuels et personnalisés.
            </p>
            <Link to="/events/salons" className="inline-flex items-center text-[#eab308] font-bold uppercase text-sm tracking-wider hover:text-white transition-colors">
              Découvrir les salons <ArrowRight size={18} className="ml-2" />
            </Link>
          </div>

        </div>
      </section>
    </div>
  );
}