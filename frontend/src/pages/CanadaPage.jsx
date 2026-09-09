import { Link } from "react-router-dom";
import { GraduationCap, Briefcase, Heart, Building, CheckCircle2 } from "lucide-react";

export default function MarocPage() {
  return (
    <div className="pt-24 min-h-screen bg-white font-sans">
      
      {/* HERO SECTION */}
      <section 
        className="relative py-32 px-6 text-center bg-cover bg-center"
        style={{ backgroundImage: "url('https://images.unsplash.com/photo-1539020140153-e479b8c22e70?q=80&w=1920&auto=format&fit=crop')" }}
      >
        <div className="absolute inset-0 bg-[#1a365d]/80 backdrop-blur-[2px]" />
        <div className="relative z-10 max-w-[1000px] mx-auto text-white">
          <span className="text-[#eab308] font-bold tracking-[0.2em] uppercase text-sm mb-4 block">
            Étudier au
          </span>
          <h1 className="text-5xl md:text-7xl font-black uppercase tracking-tight mb-6">
            Maroc
          </h1>
          <p className="text-lg md:text-xl text-gray-200 font-light max-w-2xl mx-auto">
            Un pôle académique majeur en Afrique du Nord. Bénéficiez de grandes écoles internationales, de doubles diplômes prestigieux et d'un cadre de vie dynamique.
          </p>
        </div>
      </section>

      {/* POURQUOI CHOISIR */}
      <section className="py-20 px-6 max-w-[1200px] mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-[#1a365d] mb-4">Pourquoi choisir le Maroc ?</h2>
          <div className="w-24 h-1 bg-[#eab308] mx-auto mb-8"></div>
        </div>

        <div className="grid md:grid-cols-3 gap-10">
          <div className="text-center">
            <div className="w-16 h-16 bg-gray-50 rounded-full flex items-center justify-center text-[#1a365d] mx-auto mb-6">
              <GraduationCap size={32} />
            </div>
            <h3 className="text-xl font-bold mb-3">Enseignement de Renommée</h3>
            <p className="text-gray-600">Des grandes écoles et universités de premier rang reconnues pour la qualité de leurs programmes en Management, Ingénierie et Finance.</p>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 bg-gray-50 rounded-full flex items-center justify-center text-[#1a365d] mx-auto mb-6">
              <Briefcase size={32} />
            </div>
            <h3 className="text-xl font-bold mb-3">Doubles Diplômes Internationaux</h3>
            <p className="text-gray-600">De nombreux partenariats stratégiques avec des établissements européens et nord-américains permettant l'obtention de doubles diplômes.</p>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 bg-gray-50 rounded-full flex items-center justify-center text-[#1a365d] mx-auto mb-6">
              <Heart size={32} />
            </div>
            <h3 className="text-xl font-bold mb-3">Proximité & Intégration</h3>
            <p className="text-gray-600">Un environnement francophone stimulant, une culture accueillante, un coût de la vie maîtrisé et des démarches de visa très fluides.</p>
          </div>
        </div>
      </section>

      {/* SYSTEME & PARTENAIRES */}
      <section className="bg-gray-50 py-20 px-6">
        <div className="max-w-[1200px] mx-auto grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-3xl font-bold text-[#1a365d] mb-6">Le système universitaire marocain</h2>
            <ul className="space-y-4">
              <li className="flex items-start">
                <CheckCircle2 className="text-[#eab308] mr-4 mt-1 flex-shrink-0" size={24} />
                <p className="text-gray-700"><strong className="text-gray-900">Le Bachelor / Licence :</strong> Cursus en 3 à 4 ans combinant formation théorique, projets de groupe et stages d'immersion professionnelle.</p>
              </li>
              <li className="flex items-start">
                <CheckCircle2 className="text-[#eab308] mr-4 mt-1 flex-shrink-0" size={24} />
                <p className="text-gray-700"><strong className="text-gray-900">Master & Grande École :</strong> En 1 à 2 ans, axé sur les métiers d'avenir (Digital, Finance, Supply Chain, Management international).</p>
              </li>
              <li className="flex items-start">
                <CheckCircle2 className="text-[#eab308] mr-4 mt-1 flex-shrink-0" size={24} />
                <p className="text-gray-700"><strong className="text-gray-900">Cycles d'Ingénieurs :</strong> Formation hautement sélective en 5 ans (ou 3 ans post-prépa) très recherchée par les recruteurs internationaux.</p>
              </li>
            </ul>
          </div>
          
          <div className="bg-white p-8 border-t-4 border-[#1a365d] shadow-xl rounded-b-xl">
            <div className="flex items-center mb-6">
              <Building className="text-[#1a365d] mr-3" size={28} />
              <h3 className="text-2xl font-bold text-gray-900">Quelques établissements phares</h3>
            </div>
            <ul className="list-disc pl-5 space-y-2 text-gray-700 font-medium">
              <li>Université Internationale de Rabat (UIR)</li>
              <li>Université Mohammed VI Polytechnique (UM6P)</li>
              <li>ESCA École de Management (Casablanca)</li>
              <li>HEM Business School (Rabat, Casablanca, Fès)</li>
              <li>EIGSI Casablanca (École d'Ingénieurs)</li>
              <li>EMLyon Business School - Campus Casablanca</li>
            </ul>
            <Link to="/universites" className="inline-block mt-8 text-[#1a365d] font-bold text-sm uppercase tracking-wider hover:text-[#eab308] transition-colors">
              Voir tous nos établissements partenaires &rarr;
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#eab308] py-16 text-center">
        <h2 className="text-3xl font-black text-[#1a365d] uppercase tracking-tight mb-6">Le Maroc vous attend !</h2>
        <Link to="/contact" className="inline-block bg-[#1a365d] text-white px-8 py-4 text-[13px] font-bold uppercase tracking-[0.15em] hover:bg-white hover:text-[#1a365d] shadow-xl transition-all duration-300">
          Construire mon dossier pour le Maroc
        </Link>
      </section>
    </div>
  );
}