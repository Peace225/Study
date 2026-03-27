import { Link } from "react-router-dom";
import { GraduationCap, Clock, Train, Building, CheckCircle2 } from "lucide-react";

export default function RoyaumeUniPage() {
  return (
    <div className="pt-24 min-h-screen bg-white font-sans">
      
      {/* HERO SECTION */}
      <section 
        className="relative py-32 px-6 text-center bg-cover bg-center"
        style={{ backgroundImage: "url('https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?q=80&w=1920&auto=format&fit=crop')" }}
      >
        <div className="absolute inset-0 bg-[#1a365d]/80 backdrop-blur-[2px]" />
        <div className="relative z-10 max-w-[1000px] mx-auto text-white">
          <span className="text-[#eab308] font-bold tracking-[0.2em] uppercase text-sm mb-4 block">
            Étudier au
          </span>
          <h1 className="text-5xl md:text-7xl font-black uppercase tracking-tight mb-6">
            Royaume-Uni
          </h1>
          <p className="text-lg md:text-xl text-gray-200 font-light max-w-2xl mx-auto">
            Intégrez les universités les plus prestigieuses d'Europe. L'excellence académique britannique n'a pas son pareil pour propulser une carrière internationale.
          </p>
        </div>
      </section>

      {/* POURQUOI CHOISIR */}
      <section className="py-20 px-6 max-w-[1200px] mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-[#1a365d] mb-4">Pourquoi choisir le Royaume-Uni ?</h2>
          <div className="w-24 h-1 bg-[#eab308] mx-auto mb-8"></div>
        </div>

        <div className="grid md:grid-cols-3 gap-10">
          <div className="text-center">
            <div className="w-16 h-16 bg-gray-50 rounded-full flex items-center justify-center text-[#1a365d] mx-auto mb-6">
              <GraduationCap size={32} />
            </div>
            <h3 className="text-xl font-bold mb-3">Prestige Mondial</h3>
            <p className="text-gray-600">Avec des institutions comme Oxford, Cambridge ou le Russell Group, un diplôme britannique est un passeport pour l'emploi mondial.</p>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 bg-gray-50 rounded-full flex items-center justify-center text-[#1a365d] mx-auto mb-6">
              <Clock size={32} />
            </div>
            <h3 className="text-xl font-bold mb-3">Études plus courtes</h3>
            <p className="text-gray-600">Le Bachelor s'obtient généralement en 3 ans et le Master en 1 an, ce qui permet d'entrer plus vite sur le marché du travail.</p>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 bg-gray-50 rounded-full flex items-center justify-center text-[#1a365d] mx-auto mb-6">
              <Train size={32} />
            </div>
            <h3 className="text-xl font-bold mb-3">Proximité</h3>
            <p className="text-gray-600">À seulement quelques heures de train (Eurostar) ou d'avion, c're l'immersion anglophone la plus proche de chez vous.</p>
          </div>
        </div>
      </section>

      {/* SYSTEME & PARTENAIRES */}
      <section className="bg-gray-50 py-20 px-6">
        <div className="max-w-[1200px] mx-auto grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-3xl font-bold text-[#1a365d] mb-6">Le système universitaire (UCAS)</h2>
            <p className="text-gray-600 mb-6">Toutes les candidatures en premier cycle (Bachelor) passent par la plateforme centralisée UCAS. La clé du succès est le "Personal Statement" (lettre de motivation).</p>
            <ul className="space-y-4">
              <li className="flex items-start">
                <CheckCircle2 className="text-[#eab308] mr-4 mt-1 flex-shrink-0" size={24} />
                <p className="text-gray-700"><strong className="text-gray-900">Bachelor Degree (BA/BSc) :</strong> 3 ans (4 ans en Écosse). Très spécialisé dès la première année.</p>
              </li>
              <li className="flex items-start">
                <CheckCircle2 className="text-[#eab308] mr-4 mt-1 flex-shrink-0" size={24} />
                <p className="text-gray-700"><strong className="text-gray-900">Master Degree (MA/MSc) :</strong> 1 an intensif. Idéal pour se spécialiser sans perdre de temps.</p>
              </li>
            </ul>
          </div>
          
          <div className="bg-white p-8 border-t-4 border-[#1a365d] shadow-xl rounded-b-xl">
            <div className="flex items-center mb-6">
              <Building className="text-[#1a365d] mr-3" size={28} />
              <h3 className="text-2xl font-bold text-gray-900">Quelques partenaires clés</h3>
            </div>
            <ul className="list-disc pl-5 space-y-2 text-gray-700 font-medium">
              <li>King's College London</li>
              <li>University of Edinburgh</li>
              <li>University of Manchester</li>
              <li>University of Warwick</li>
              <li>City, University of London</li>
            </ul>
            <Link to="/universites" className="inline-block mt-8 text-[#1a365d] font-bold text-sm uppercase tracking-wider hover:text-[#eab308] transition-colors">
              Voir tous nos partenaires &rarr;
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#eab308] py-16 text-center">
        <h2 className="text-3xl font-black text-[#1a365d] uppercase tracking-tight mb-6">Prêt à étudier au Royaume-Uni ?</h2>
        <Link to="/contact" className="inline-block bg-[#1a365d] text-white px-8 py-4 text-[13px] font-bold uppercase tracking-[0.15em] hover:bg-white hover:text-[#1a365d] shadow-xl">
          Construire mon dossier UCAS
        </Link>
      </section>
    </div>
  );
}