import { Link } from "react-router-dom";
import { Sun, Briefcase, GraduationCap, Building, CheckCircle2 } from "lucide-react";

export default function AustraliePage() {
  return (
    <div className="pt-24 min-h-screen bg-white font-sans">
      <section 
        className="relative py-32 px-6 text-center bg-cover bg-center"
        style={{ backgroundImage: "url('https://images.unsplash.com/photo-1523482580672-f109ba8cb9be?q=80&w=1920&auto=format&fit=crop')" }}
      >
        <div className="absolute inset-0 bg-[#1a365d]/80 backdrop-blur-[2px]" />
        <div className="relative z-10 max-w-[1000px] mx-auto text-white">
          <span className="text-[#eab308] font-bold tracking-[0.2em] uppercase text-sm mb-4 block">
            Étudier en
          </span>
          <h1 className="text-5xl md:text-7xl font-black uppercase tracking-tight mb-6">Australie</h1>
          <p className="text-lg md:text-xl text-gray-200 font-light max-w-2xl mx-auto">
            Visez l'excellence à l'autre bout du monde. Des universités d'élite, une culture du travail innovante et un cadre de vie idyllique.
          </p>
        </div>
      </section>

      <section className="py-20 px-6 max-w-[1200px] mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-[#1a365d] mb-4">Pourquoi partir aux antipodes ?</h2>
          <div className="w-24 h-1 bg-[#eab308] mx-auto mb-8"></div>
        </div>

        <div className="grid md:grid-cols-3 gap-10">
          <div className="text-center">
            <div className="w-16 h-16 bg-gray-50 rounded-full flex items-center justify-center text-[#1a365d] mx-auto mb-6">
              <GraduationCap size={32} />
            </div>
            <h3 className="text-xl font-bold mb-3">Le "Group of Eight"</h3>
            <p className="text-gray-600">L'équivalent de la Ivy League américaine : 8 universités australiennes figurent parmi le Top 100 mondial en recherche et employabilité.</p>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 bg-gray-50 rounded-full flex items-center justify-center text-[#1a365d] mx-auto mb-6">
              <Briefcase size={32} />
            </div>
            <h3 className="text-xl font-bold mb-3">Travail & Visa</h3>
            <p className="text-gray-600">Possibilité de travailler légalement pendant vos études. Après le diplôme, le "Post-Study Work Visa" vous permet de rester entre 2 et 4 ans !</p>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 bg-gray-50 rounded-full flex items-center justify-center text-[#1a365d] mx-auto mb-6">
              <Sun size={32} />
            </div>
            <h3 className="text-xl font-bold mb-3">Cadre de Vie</h3>
            <p className="text-gray-600">Des villes régulièrement élues "plus agréables du monde" (Melbourne, Sydney, Brisbane) et une mentalité "no worries" très appréciée.</p>
          </div>
        </div>
      </section>

      <section className="bg-gray-50 py-20 px-6">
        <div className="max-w-[1200px] mx-auto grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-3xl font-bold text-[#1a365d] mb-6">Une pédagogie pragmatique</h2>
            <ul className="space-y-4">
              <li className="flex items-start">
                <CheckCircle2 className="text-[#eab308] mr-4 mt-1 flex-shrink-0" size={24} />
                <p className="text-gray-700"><strong className="text-gray-900">Le Bachelor :</strong> Dure généralement 3 ans (4 ans pour les "Honours"). Très centré sur le travail en groupe et les présentations orales.</p>
              </li>
              <li className="flex items-start">
                <CheckCircle2 className="text-[#eab308] mr-4 mt-1 flex-shrink-0" size={24} />
                <p className="text-gray-700"><strong className="text-gray-900">Le Master :</strong> En 1,5 à 2 ans. Très connecté à l'industrie avec de nombreux intervenants professionnels.</p>
              </li>
              <li className="flex items-start">
                <CheckCircle2 className="text-[#eab308] mr-4 mt-1 flex-shrink-0" size={24} />
                <p className="text-gray-700"><strong className="text-gray-900">Le calendrier :</strong> Les saisons sont inversées ! La rentrée principale est en Février, avec une deuxième rentrée souvent possible en Juillet.</p>
              </li>
            </ul>
          </div>
          
          <div className="bg-white p-8 border-t-4 border-[#1a365d] shadow-xl rounded-b-xl">
            <div className="flex items-center mb-6">
              <Building className="text-[#1a365d] mr-3" size={28} />
              <h3 className="text-2xl font-bold text-gray-900">Quelques campus</h3>
            </div>
            <ul className="list-disc pl-5 space-y-2 text-gray-700 font-medium">
              <li>University of Sydney</li>
              <li>Monash University (Melbourne)</li>
              <li>University of Queensland (Brisbane)</li>
              <li>UNSW Sydney</li>
              <li>Macquarie University</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="bg-[#eab308] py-16 text-center">
        <h2 className="text-3xl font-black text-[#1a365d] uppercase tracking-tight mb-6">Cap sur l'Australie ?</h2>
        <Link to="/contact" className="inline-block bg-[#1a365d] text-white px-8 py-4 text-[13px] font-bold uppercase tracking-[0.15em] hover:bg-white hover:text-[#1a365d] shadow-xl">
          Parler à un conseiller
        </Link>
      </section>
    </div>
  );
}