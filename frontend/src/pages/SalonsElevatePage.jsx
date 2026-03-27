import { MapPin, CalendarDays, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

export default function SalonsElevatePage() {
  const salons = [
    { ville: "Paris", date: "Samedi 12 Octobre", lieu: "Hôtel Marriott Champs-Élysées" },
    { ville: "Lyon", date: "Mercredi 16 Octobre", lieu: "Palais de la Bourse" },
    { ville: "Bordeaux", date: "Samedi 19 Octobre", lieu: "InterContinental Bordeaux" },
  ];

  return (
    <div className="pt-24 min-h-screen bg-gray-50 font-sans pb-20">
      <div className="bg-[#eab308] py-16 px-6 text-center text-[#1a365d]">
        <CalendarDays size={48} className="mx-auto mb-6" />
        <h1 className="text-3xl md:text-5xl font-black uppercase tracking-tight mb-4">Salons Elevate</h1>
        <p className="max-w-2xl mx-auto font-medium text-lg">Le rendez-vous premium de l'éducation internationale.</p>
      </div>

      <div className="max-w-[1000px] mx-auto px-6 mt-16 flex flex-col md:flex-row gap-12 items-center">
        <div className="md:w-1/2">
          <h2 className="text-3xl font-black text-[#1a365d] uppercase tracking-tight mb-6">Pourquoi participer ?</h2>
          <p className="text-gray-600 mb-4 leading-relaxed">
            Les Salons Elevate sont des événements à taille humaine conçus pour faciliter les échanges de qualité. Finis les grands halls d'exposition bruyants, place à des entretiens privilégiés.
          </p>
          <ul className="space-y-3 text-gray-700 font-medium mb-8">
            <li className="flex items-center"><MapPin className="text-[#eab308] mr-3" size={20} /> Rencontrez les directeurs d'admission en personne.</li>
            <li className="flex items-center"><MapPin className="text-[#eab308] mr-3" size={20} /> Obtenez des évaluations de profil sur place.</li>
            <li className="flex items-center"><MapPin className="text-[#eab308] mr-3" size={20} /> Assistez à des masterclasses exclusives.</li>
          </ul>
        </div>
        
        <div className="md:w-1/2 w-full">
          <div className="bg-white p-8 shadow-xl border-t-4 border-[#1a365d]">
            <h3 className="text-xl font-bold text-[#1a365d] mb-6 border-b pb-4">Prochaines dates (Tournée Automne)</h3>
            <div className="space-y-6">
              {salons.map((salon, idx) => (
                <div key={idx} className="flex items-start">
                  <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center text-[#1a365d] font-bold text-sm mr-4 flex-shrink-0">
                    {salon.ville.substring(0, 3).toUpperCase()}
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900">{salon.ville} - {salon.date}</h4>
                    <p className="text-sm text-gray-500">{salon.lieu}</p>
                  </div>
                </div>
              ))}
            </div>
            <button className="w-full mt-8 bg-[#1a365d] text-white py-4 text-[13px] font-bold uppercase tracking-widest hover:bg-[#eab308] hover:text-[#1a365d] transition-all">
              Réserver mon invitation gratuite
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}