import { Link } from "react-router-dom";
import { GraduationCap, Globe, Sun, Building, CheckCircle2 } from "lucide-react";

export default function EspagnePage() {
  return (
    <div className="pt-24 min-h-screen bg-white font-sans">
      
      {/* HERO SECTION */}
      <section 
        className="relative py-32 px-6 text-center bg-cover bg-center"
        style={{ backgroundImage: "url('https://images.unsplash.com/photo-1543783207-ec64e4d95325?q=80&w=1920&auto=format&fit=crop')" }}
      >
        <div className="absolute inset-0 bg-[#1a365d]/80 backdrop-blur-[2px]" />
        <div className="relative z-10 max-w-[1000px] mx-auto text-white">
          <span className="text-[#eab308] font-bold tracking-[0.2em] uppercase text-sm mb-4 block">
            Étudier en
          </span>
          <h1 className="text-5xl md:text-7xl font-black uppercase tracking-tight mb-6">Espagne</h1>
          <p className="text-lg md:text-xl text-gray-200 font-light max-w-2xl mx-auto">
            Des Business Schools de classe mondiale, une culture vibrante et des diplômes européens d'excellence au cœur de la Méditerranée.
          </p>
        </div>
      </section>

      {/* POURQUOI CHOISIR */}
      <section className="py-20 px-6 max-w-[1200px] mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-[#1a365d] mb-4">Pourquoi choisir l'Espagne ?</h2>
          <div className="w-24 h-1 bg-[#eab308] mx-auto mb-8"></div>
        </div>

        <div className="grid md:grid-cols-3 gap-10">
          <div className="text-center">
            <div className="w-16 h-16 bg-gray-50 rounded-full flex items-center justify-center text-[#1a365d] mx-auto mb-6">
              <GraduationCap size={32} />
            </div>
            <h3 className="text-xl font-bold mb-3">Business Schools d'Élite</h3>
            <p className="text-gray-600">L'Espagne abrite plusieurs des meilleures écoles de commerce mondiales (IE, ESADE, IESE), garantissant un réseau professionnel international.</p>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 bg-gray-50 rounded-full flex items-center justify-center text-[#1a365d] mx-auto mb-6">
              <Globe size={32} />
            </div>
            <h3 className="text-xl font-bold mb-3">Programmes Bilingues & Anglais</h3>
            <p className="text-gray-600">Possibilité de suivre des cursus 100% en anglais ou d'acquérir une parfaite maîtrise de l'espagnol, 2e langue la plus parlée au monde.</p>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 bg-gray-50 rounded-full flex items-center justify-center text-[#1a365d] mx-auto mb-6">
              <Sun size={32} />
            </div>
            <h3 className="text-xl font-bold mb-3">Cadre de Vie & Dynamisme</h3>
            <p className="text-gray-600">Un coût de la vie abordable, un climat ensoleillé et un environnement dynamique qui facilite l'intégration des étudiants internationaux.</p>
          </div>
        </div>
      </section>

      {/* SYSTEME & PARTENAIRES */}
      <section className="bg-gray-50 py-20 px-6">
        <div className="max-w-[1200px] mx-auto grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-3xl font-bold text-[#1a365d] mb-6">Le système universitaire espagnol</h2>
            <p className="text-gray-600 mb-6">Parfaitement intégré dans l'espace européen de l'enseignement supérieur (LMD / ECTS), le système espagnol combine rigueur académique et ouverture pratique.</p>
            <ul className="space-y-4">
              <li className="flex items-start">
                <CheckCircle2 className="text-[#eab308] mr-4 mt-1 flex-shrink-0" size={24} />
                <p className="text-gray-700"><strong className="text-gray-900">Grado (Bachelor) :</strong> Formation en 4 ans (240 crédits ECTS). Accessible après homologation du diplôme de fin d'études secondaires.</p>
              </li>
              <li className="flex items-start">
                <CheckCircle2 className="text-[#eab308] mr-4 mt-1 flex-shrink-0" size={24} />
                <p className="text-gray-700"><strong className="text-gray-900">Máster :</strong> En 1 ou 2 ans (60 à 120 ECTS). Idéal pour se spécialiser dans le management, l'ingénierie, la santé ou le design.</p>
              </li>
              <li className="flex items-start">
                <CheckCircle2 className="text-[#eab308] mr-4 mt-1 flex-shrink-0" size={24} />
                <p className="text-gray-700"><strong className="text-gray-900">Reconnaissance Européenne :</strong> Diplômes d'État et titres propres (Títulos Propios) reconnus sur le marché international.</p>
              </li>
            </ul>
          </div>
          
          <div className="bg-white p-8 border-t-4 border-[#1a365d] shadow-xl rounded-b-xl">
            <div className="flex items-center mb-6">
              <Building className="text-[#1a365d] mr-3" size={28} />
              <h3 className="text-2xl font-bold text-gray-900">Exemples d'établissements</h3>
            </div>
            <ul className="list-disc pl-5 space-y-2 text-gray-700 font-medium">
              <li>IE University (Madrid & Ségovie)</li>
              <li>Universidad Complutense de Madrid</li>
              <li>Universitat de Barcelona (UB)</li>
              <li>Universidad Autónoma de Madrid</li>
              <li>ESADE Business School</li>
              <li>UCAM (Universidad Católica de Murcia)</li>
            </ul>
            <Link to="/universites" className="inline-block mt-8 text-[#1a365d] font-bold text-sm uppercase tracking-wider hover:text-[#eab308] transition-colors">
              Voir tous nos établissements partenaires &rarr;
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#eab308] py-16 text-center">
        <h2 className="text-3xl font-black text-[#1a365d] uppercase tracking-tight mb-6">L'Espagne vous tente ?</h2>
        <Link to="/contact" className="inline-block bg-[#1a365d] text-white px-8 py-4 text-[13px] font-bold uppercase tracking-[0.15em] hover:bg-white hover:text-[#1a365d] shadow-xl transition-all duration-300">
          Construire mon dossier pour l'Espagne
        </Link>
      </section>
    </div>
  );
}