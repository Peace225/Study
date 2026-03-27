import { Link } from "react-router-dom";
import { Award, Target, Users } from "lucide-react";

export default function ElitePage() {
  return (
    <div className="pt-24 min-h-screen bg-gray-50 font-sans">
      <section className="bg-[#1a365d] text-white py-20 px-6 text-center">
        <h1 className="text-4xl md:text-5xl font-black uppercase tracking-tight mb-6">
          Les Études <span className="text-[#eab308]">D'Élite</span>
        </h1>
        <p className="text-lg text-gray-300 max-w-2xl mx-auto font-light">
          Intégrez le Top 1% mondial. Un coaching exclusif pour les universités les plus prestigieuses (Oxbridge, Russell Group, Ivy League).
        </p>
      </section>

      <section className="py-20 px-6 max-w-[1200px] mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">L'Excellence demande une préparation spécifique</h2>
            <p className="text-gray-600 text-lg mb-6 leading-relaxed">
              Les universités d'élite ne cherchent pas seulement d'excellentes notes. Elles recherchent des leaders, des penseurs critiques et des profils uniques. Notre programme "Élite" est conçu pour révéler votre potentiel.
            </p>
            <ul className="space-y-4 mb-8">
              <li className="flex items-center text-gray-700">
                <Target className="text-[#eab308] mr-4" size={24} /> Préparation aux entretiens d'admission (Mock Interviews)
              </li>
              <li className="flex items-center text-gray-700">
                <Award className="text-[#eab308] mr-4" size={24} /> Coaching pour les tests d'aptitude (UCAT, LNAT, GMAT...)
              </li>
              <li className="flex items-center text-gray-700">
                <Users className="text-[#eab308] mr-4" size={24} /> Mentoring par des diplômés de ces mêmes universités
              </li>
            </ul>
          </div>
          <div className="bg-white p-8 shadow-xl rounded-xl border-l-4 border-[#1a365d]">
             <h3 className="text-2xl font-bold text-[#1a365d] mb-4">Profils Recherchés</h3>
             <p className="text-gray-600 mb-4">Ce programme s'adresse aux étudiants ayant :</p>
             <ul className="list-disc pl-5 text-gray-600 space-y-2">
               <li>Une moyenne générale supérieure à 16/20.</li>
               <li>Un niveau d'anglais excellent (IELTS 7.0+).</li>
               <li>Des activités extra-scolaires significatives.</li>
               <li>Une grande capacité de travail et d'adaptation.</li>
             </ul>
             <div className="mt-8 text-center">
              <Link to="/contact" className="block w-full bg-[#1a365d] text-white px-6 py-4 text-[12px] font-bold uppercase tracking-widest hover:bg-[#eab308] hover:text-[#1a365d] transition-colors">
                Évaluer mon admissibilité
              </Link>
             </div>
          </div>
        </div>
      </section>
    </div>
  );
}