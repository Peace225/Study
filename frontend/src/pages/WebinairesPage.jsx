import { Calendar, Clock, Video, ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";

export default function WebinairesPage() {
  const webinaires = [
    { id: 1, date: "15 Avril", heure: "18:00 (Paris)", titre: "Étudier au Canada : Les démarches pas à pas", intervenant: "Marie Dubois, Experte Canada" },
    { id: 2, date: "22 Avril", heure: "17:30 (Paris)", titre: "Comment rédiger un Personal Statement percutant (UK)", intervenant: "John Smith, Consultant UK" },
    { id: 3, date: "05 Mai", heure: "18:00 (Paris)", titre: "Les études de Médecine en Europe (Espagne, Irlande)", intervenant: "Dr. Elena Garcia" },
  ];

  return (
    <div className="pt-24 min-h-screen bg-white font-sans pb-20">
      <div className="bg-[#1a365d] py-16 px-6 text-center text-white">
        <Video size={48} className="mx-auto text-[#eab308] mb-6" />
        <h1 className="text-3xl md:text-5xl font-black uppercase tracking-tight mb-4">Nos Webinaires</h1>
        <p className="text-gray-300 max-w-2xl mx-auto">Assistez à nos sessions d'information gratuites en ligne pour préparer votre avenir.</p>
      </div>

      <div className="max-w-[800px] mx-auto px-6 mt-16 space-y-6">
        {webinaires.map((webinaire) => (
          <div key={webinaire.id} className="bg-white border border-gray-100 shadow-sm hover:shadow-md transition-shadow p-6 flex flex-col md:flex-row gap-6 md:items-center group border-l-4 border-l-transparent hover:border-l-[#eab308]">
            {/* Date block */}
            <div className="bg-gray-50 p-4 text-center min-w-[120px] rounded">
              <span className="block text-[#eab308] font-black text-xl">{webinaire.date}</span>
              <span className="flex items-center justify-center text-gray-500 text-xs mt-1 font-medium uppercase">
                <Clock size={12} className="mr-1" /> {webinaire.heure}
              </span>
            </div>
            
            {/* Info block */}
            <div className="flex-1">
              <h3 className="text-xl font-bold text-[#1a365d] mb-2 group-hover:text-[#eab308] transition-colors">{webinaire.titre}</h3>
              <p className="text-gray-500 text-sm">Intervenant(e) : {webinaire.intervenant}</p>
            </div>

            {/* CTA */}
            <div>
              <button className="w-full md:w-auto bg-[#1a365d] text-white px-6 py-3 text-[11px] font-bold uppercase tracking-widest hover:bg-[#eab308] hover:text-[#1a365d] transition-all">
                S'inscrire
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}