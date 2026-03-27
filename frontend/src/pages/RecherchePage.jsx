import { useState } from "react";
import { Search, MapPin, GraduationCap, Filter, ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";

export default function RecherchePage() {
  const [searchTerm, setSearchTerm] = useState("");

  return (
    <div className="pt-24 min-h-screen bg-gray-50 font-sans pb-20">
      {/* En-tête simple */}
      <div className="bg-[#1a365d] text-white py-16 px-6 text-center">
        <h1 className="text-3xl md:text-5xl font-black uppercase tracking-tight mb-4">Recherchez votre formation</h1>
        <p className="text-gray-300 max-w-2xl mx-auto">Trouvez le programme idéal parmi des milliers de cursus à l'international.</p>
      </div>

      <div className="max-w-[1200px] mx-auto px-6 mt-10 flex flex-col lg:flex-row gap-8">
        {/* Sidebar des filtres */}
        <div className="lg:w-1/4">
          <div className="bg-white p-6 shadow-sm border-t-4 border-[#eab308] sticky top-32">
            <div className="flex items-center mb-6 text-[#1a365d] font-bold">
              <Filter size={20} className="mr-2" /> Filtres
            </div>
            
            <div className="mb-6">
              <h3 className="text-sm font-bold text-gray-900 uppercase mb-3">Niveau d'études</h3>
              <div className="space-y-2 text-sm text-gray-600">
                <label className="flex items-center"><input type="checkbox" className="mr-2 accent-[#1a365d]" /> Foundation Year</label>
                <label className="flex items-center"><input type="checkbox" className="mr-2 accent-[#1a365d]" /> Bachelor (Licence)</label>
                <label className="flex items-center"><input type="checkbox" className="mr-2 accent-[#1a365d]" /> Master</label>
              </div>
            </div>

            <div className="mb-6">
              <h3 className="text-sm font-bold text-gray-900 uppercase mb-3">Destination</h3>
              <select className="w-full border border-gray-200 p-2 text-sm text-gray-600 outline-none focus:border-[#eab308]">
                <option>Toutes les destinations</option>
                <option>Royaume-Uni</option>
                <option>Canada</option>
                <option>Espagne</option>
                <option>États-Unis</option>
              </select>
            </div>
          </div>
        </div>

        {/* Zone de résultats */}
        <div className="lg:w-3/4">
          {/* Barre de recherche */}
          <div className="bg-white p-2 flex items-center shadow-sm mb-8 border border-gray-100">
            <Search size={20} className="text-gray-400 ml-4" />
            <input 
              type="text" 
              placeholder="Ex: Business, Engineering, Computer Science..." 
              className="w-full py-3 px-4 outline-none text-gray-800 bg-transparent"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <button className="bg-[#1a365d] text-white px-8 py-3 text-[13px] font-bold uppercase hover:bg-[#eab308] hover:text-[#1a365d] transition-colors">
              Chercher
            </button>
          </div>

          {/* Liste des résultats (Mockups) */}
          <div className="space-y-4">
            {[1, 2, 3].map((item) => (
              <div key={item} className="bg-white p-6 shadow-sm border border-gray-100 flex flex-col md:flex-row justify-between items-start md:items-center hover:shadow-md transition-shadow group">
                <div>
                  <h3 className="text-xl font-bold text-[#1a365d] mb-2 group-hover:text-[#eab308] transition-colors">BSc (Hons) International Business</h3>
                  <div className="flex flex-wrap items-center gap-4 text-sm text-gray-500">
                    <span className="flex items-center"><MapPin size={16} className="mr-1" /> Université de Westminster, UK</span>
                    <span className="flex items-center"><GraduationCap size={16} className="mr-1" /> Bachelor (3 ans)</span>
                  </div>
                </div>
                <Link to="/contact" className="mt-4 md:mt-0 flex items-center text-[#1a365d] font-bold text-sm uppercase hover:text-[#eab308] transition-colors">
                  Détails <ChevronRight size={18} className="ml-1" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}