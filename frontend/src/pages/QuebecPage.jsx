import { Link } from "react-router-dom";
import { Languages, PiggyBank, TreePine, Building, CheckCircle2 } from "lucide-react";

export default function QuebecPage() {
  return (
    <div className="pt-24 min-h-screen bg-white font-sans">
      <section 
        className="relative py-32 px-6 text-center bg-cover bg-center"
        style={{ backgroundImage: "url('https://images.unsplash.com/photo-1519655648831-29177197b11d?q=80&w=1920&auto=format&fit=crop')" }}
      >
        <div className="absolute inset-0 bg-[#1a365d]/80 backdrop-blur-[2px]" />
        <div className="relative z-10 max-w-[1000px] mx-auto text-white">
          <span className="text-[#eab308] font-bold tracking-[0.2em] uppercase text-sm mb-4 block">
            Étudier au
          </span>
          <h1 className="text-5xl md:text-7xl font-black uppercase tracking-tight mb-6">Québec</h1>
          <p className="text-lg md:text-xl text-gray-200 font-light max-w-2xl mx-auto">
            Le rêve nord-américain en français ! Une province accueillante, étudiante et innovante avec des avantages financiers uniques.
          </p>
        </div>
      </section>

      <section className="py-20 px-6 max-w-[1200px] mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-[#1a365d] mb-4">Pourquoi choisir la Belle Province ?</h2>
          <div className="w-24 h-1 bg-[#eab308] mx-auto mb-8"></div>
        </div>

        <div className="grid md:grid-cols-3 gap-10">
          <div className="text-center">
            <div className="w-16 h-16 bg-gray-50 rounded-full flex items-center justify-center text-[#1a365d] mx-auto mb-6">
              <Languages size={32} />
            </div>
            <h3 className="text-xl font-bold mb-3">En Français ou Bilingue</h3>
            <p className="text-gray-600">Étudiez dans votre langue maternelle ou perfectionnez votre anglais dans les établissements anglophones montréalais (McGill, Concordia).</p>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 bg-gray-50 rounded-full flex items-center justify-center text-[#1a365d] mx-auto mb-6">
              <PiggyBank size={32} />
            </div>
            <h3 className="text-xl font-bold mb-3">Avantages Financiers</h3>
            <p className="text-gray-600">Grâce à des accords bilatéraux, les étudiants français et belges bénéficient de tarifs universitaires fortement réduits par rapport au reste de l'Amérique du Nord.</p>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 bg-gray-50 rounded-full flex items-center justify-center text-[#1a365d] mx-auto mb-6">
              <TreePine size={32} />
            </div>
            <h3 className="text-xl font-bold mb-3">Qualité de vie & Nature</h3>
            <p className="text-gray-600">Entre l'effervescence culturelle de Montréal et les grands espaces naturels à perte de vue, la qualité de vie est exceptionnelle.</p>
          </div>
        </div>
      </section>

      <section className="bg-gray-50 py-20 px-6">
        <div className="max-w-[1200px] mx-auto grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-3xl font-bold text-[#1a365d] mb-6">Un système éducatif distinct</h2>
            <ul className="space-y-4">
              <li className="flex items-start">
                <CheckCircle2 className="text-[#eab308] mr-4 mt-1 flex-shrink-0" size={24} />
                <p className="text-gray-700"><strong className="text-gray-900">Le Baccalauréat (Bachelor) :</strong> Attention, au Québec, le Bac désigne le diplôme universitaire (Licence). Il dure 3 ans (pour les diplômés du Bac français) ou 4 ans.</p>
              </li>
              <li className="flex items-start">
                <CheckCircle2 className="text-[#eab308] mr-4 mt-1 flex-shrink-0" size={24} />
                <p className="text-gray-700"><strong className="text-gray-900">La Maîtrise (Master) :</strong> Dure 1,5 à 2 ans. Très axée sur la pratique ou la recherche selon le profil.</p>
              </li>
              <li className="flex items-start">
                <CheckCircle2 className="text-[#eab308] mr-4 mt-1 flex-shrink-0" size={24} />
                <p className="text-gray-700"><strong className="text-gray-900">Le Cégep :</strong> Étape post-lycée obligatoire pour les Québécois, mais les étudiants internationaux peuvent souvent entrer directement à l'université après leur terminale.</p>
              </li>
            </ul>
          </div>
          
          <div className="bg-white p-8 border-t-4 border-[#1a365d] shadow-xl rounded-b-xl">
            <div className="flex items-center mb-6">
              <Building className="text-[#1a365d] mr-3" size={28} />
              <h3 className="text-2xl font-bold text-gray-900">Universités d'exception</h3>
            </div>
            <ul className="list-disc pl-5 space-y-2 text-gray-700 font-medium">
              <li>Université de Montréal (UdeM)</li>
              <li>McGill University (Anglophone)</li>
              <li>Concordia University (Anglophone)</li>
              <li>Université Laval (Québec ville)</li>
              <li>UQAM</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="bg-[#eab308] py-16 text-center">
        <h2 className="text-3xl font-black text-[#1a365d] uppercase tracking-tight mb-6">Envie de partir au Québec ?</h2>
        <Link to="/contact" className="inline-block bg-[#1a365d] text-white px-8 py-4 text-[13px] font-bold uppercase tracking-[0.15em] hover:bg-white hover:text-[#1a365d] shadow-xl">
          Débuter mon inscription
        </Link>
      </section>
    </div>
  );
}