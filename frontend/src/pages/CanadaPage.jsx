import { Link } from "react-router-dom";
import { GraduationCap, Briefcase, Heart, Building, CheckCircle2 } from "lucide-react";

export default function CanadaPage() {
  return (
    <div className="pt-24 min-h-screen bg-white font-sans">
      <section 
        className="relative py-32 px-6 text-center bg-cover bg-center"
        style={{ backgroundImage: "url('https://images.unsplash.com/photo-1503614472-8c93d56e92ce?q=80&w=1920&auto=format&fit=crop')" }}
      >
        <div className="absolute inset-0 bg-[#1a365d]/80 backdrop-blur-[2px]" />
        <div className="relative z-10 max-w-[1000px] mx-auto text-white">
          <span className="text-[#eab308] font-bold tracking-[0.2em] uppercase text-sm mb-4 block">
            Étudier au
          </span>
          <h1 className="text-5xl md:text-7xl font-black uppercase tracking-tight mb-6">
            Canada <span className="text-3xl md:text-5xl block mt-2 font-light">(hors Québec)</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-200 font-light max-w-2xl mx-auto">
            Vivez l'expérience nord-américaine dans l'un des pays les plus accueillants et sûrs au monde, avec un système anglophone reconnu mondialement.
          </p>
        </div>
      </section>

      <section className="py-20 px-6 max-w-[1200px] mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-[#1a365d] mb-4">Pourquoi choisir le Canada anglophone ?</h2>
          <div className="w-24 h-1 bg-[#eab308] mx-auto mb-8"></div>
        </div>

        <div className="grid md:grid-cols-3 gap-10">
          <div className="text-center">
            <div className="w-16 h-16 bg-gray-50 rounded-full flex items-center justify-center text-[#1a365d] mx-auto mb-6">
              <GraduationCap size={32} />
            </div>
            <h3 className="text-xl font-bold mb-3">Excellence Académique</h3>
            <p className="text-gray-600">Des universités comme Toronto ou UBC dominent régulièrement les classements mondiaux, avec des diplômes hautement valorisés.</p>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 bg-gray-50 rounded-full flex items-center justify-center text-[#1a365d] mx-auto mb-6">
              <Briefcase size={32} />
            </div>
            <h3 className="text-xl font-bold mb-3">Opportunités d'Immigration</h3>
            <p className="text-gray-600">Grâce au PGWP (Post-Graduation Work Permit), vous pouvez travailler jusqu'à 3 ans après vos études, facilitant l'accès à la résidence permanente.</p>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 bg-gray-50 rounded-full flex items-center justify-center text-[#1a365d] mx-auto mb-6">
              <Heart size={32} />
            </div>
            <h3 className="text-xl font-bold mb-3">Qualité de Vie</h3>
            <p className="text-gray-600">Des villes cosmopolites incroyables (Vancouver, Toronto, Calgary) entourées d'une nature spectaculaire.</p>
          </div>
        </div>
      </section>

      <section className="bg-gray-50 py-20 px-6">
        <div className="max-w-[1200px] mx-auto grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-3xl font-bold text-[#1a365d] mb-6">Le système universitaire canadien</h2>
            <ul className="space-y-4">
              <li className="flex items-start">
                <CheckCircle2 className="text-[#eab308] mr-4 mt-1 flex-shrink-0" size={24} />
                <p className="text-gray-700"><strong className="text-gray-900">Le Bachelor :</strong> Dure 4 ans. Modèle flexible à l'américaine permettant de choisir une "Major" et une "Minor".</p>
              </li>
              <li className="flex items-start">
                <CheckCircle2 className="text-[#eab308] mr-4 mt-1 flex-shrink-0" size={24} />
                <p className="text-gray-700"><strong className="text-gray-900">Le Master :</strong> Dure 1 à 2 ans, axé recherche ou professionnel avec très souvent des programmes "Co-op" (alternance).</p>
              </li>
              <li className="flex items-start">
                <CheckCircle2 className="text-[#eab308] mr-4 mt-1 flex-shrink-0" size={24} />
                <p className="text-gray-700"><strong className="text-gray-900">Les Colleges :</strong> Proposent des formations techniques et pratiques en 2/3 ans pour une insertion rapide sur le marché du travail.</p>
              </li>
            </ul>
          </div>
          
          <div className="bg-white p-8 border-t-4 border-[#1a365d] shadow-xl rounded-b-xl">
            <div className="flex items-center mb-6">
              <Building className="text-[#1a365d] mr-3" size={28} />
              <h3 className="text-2xl font-bold text-gray-900">Quelques universités</h3>
            </div>
            <ul className="list-disc pl-5 space-y-2 text-gray-700 font-medium">
              <li>University of Toronto (Ontario)</li>
              <li>University of British Columbia (Colombie-Britannique)</li>
              <li>Simon Fraser University (Colombie-Britannique)</li>
              <li>University of Victoria (Colombie-Britannique)</li>
              <li>Toronto Metropolitan University - TMU (Ontario)</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="bg-[#eab308] py-16 text-center">
        <h2 className="text-3xl font-black text-[#1a365d] uppercase tracking-tight mb-6">Le Canada vous attend</h2>
        <Link to="/contact" className="inline-block bg-[#1a365d] text-white px-8 py-4 text-[13px] font-bold uppercase tracking-[0.15em] hover:bg-white hover:text-[#1a365d] shadow-xl">
          Évaluer mon profil
        </Link>
      </section>
    </div>
  );
}