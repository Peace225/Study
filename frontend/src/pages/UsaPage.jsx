import { Link } from "react-router-dom";
import { Award, Globe, Briefcase, Building, CheckCircle2 } from "lucide-react";

export default function SuissePage() {
  return (
    <div className="pt-24 min-h-screen bg-white font-sans">
      
      {/* HERO SECTION */}
      <section 
        className="relative py-32 px-6 text-center bg-cover bg-center"
        style={{ backgroundImage: "url('https://images.unsplash.com/photo-1530122037265-a5f1f91d3b99?q=80&w=1920&auto=format&fit=crop')" }}
      >
        <div className="absolute inset-0 bg-[#1a365d]/80 backdrop-blur-[2px]" />
        <div className="relative z-10 max-w-[1000px] mx-auto text-white">
          <span className="text-[#eab308] font-bold tracking-[0.2em] uppercase text-sm mb-4 block">
            Étudier en
          </span>
          <h1 className="text-5xl md:text-7xl font-black uppercase tracking-tight mb-6">Suisse</h1>
          <p className="text-lg md:text-xl text-gray-200 font-light max-w-2xl mx-auto">
            Excellence hôtelière, finance internationale et recherche de pointe. Un cadre de vie d'exception et des diplômes prestigieux au cœur de l'Europe.
          </p>
        </div>
      </section>

      {/* POURQUOI CHOISIR */}
      <section className="py-20 px-6 max-w-[1200px] mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-[#1a365d] mb-4">Pourquoi choisir la Suisse ?</h2>
          <div className="w-24 h-1 bg-[#eab308] mx-auto mb-8"></div>
        </div>

        <div className="grid md:grid-cols-3 gap-10">
          <div className="text-center">
            <div className="w-16 h-16 bg-gray-50 rounded-full flex items-center justify-center text-[#1a365d] mx-auto mb-6">
              <Award size={32} />
            </div>
            <h3 className="text-xl font-bold mb-3">Leader Mondial du Hospitality</h3>
            <p className="text-gray-600">La Suisse abrite les meilleures écoles de gestion hôtelière au monde (EHL, Glion, Les Roches), formant l'élite mondiale du luxe et du management.</p>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 bg-gray-50 rounded-full flex items-center justify-center text-[#1a365d] mx-auto mb-6">
              <Globe size={32} />
            </div>
            <h3 className="text-xl font-bold mb-3">Carrefour International</h3>
            <p className="text-gray-600">Siège de l'ONU, de l'OMC et de multinationales majeures. Un environnement multilingue stimulant ouvrant sur un réseau mondial d'exception.</p>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 bg-gray-50 rounded-full flex items-center justify-center text-[#1a365d] mx-auto mb-6">
              <Briefcase size={32} />
            </div>
            <h3 className="text-xl font-bold mb-3">Stages Rémunérés & Insertion</h3>
            <p className="text-gray-600">Les cursus intègrent des stages obligatoires et très bien rémunérés dans des établissements de prestige et des entreprises internationales.</p>
          </div>
        </div>
      </section>

      {/* SYSTEME & PARTENAIRES */}
      <section className="bg-gray-50 py-20 px-6">
        <div className="max-w-[1200px] mx-auto grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-3xl font-bold text-[#1a365d] mb-6">Le système universitaire suisse</h2>
            <p className="text-gray-600 mb-6">Aussi bien réputée pour ses Hautes Écoles spécialisées que pour ses universités publiques d'élite, la Suisse privilégie la rigueur, l'innovation et la pratique.</p>
            <ul className="space-y-4">
              <li className="flex items-start">
                <CheckCircle2 className="text-[#eab308] mr-4 mt-1 flex-shrink-0" size={24} />
                <p className="text-gray-700"><strong className="text-gray-900">Écoles de Gestion Hôtelière & Luxury :</strong> Formations Bachelor (3 à 3,5 ans) alternant cours théoriques exigeants et stages pratiques en hôtels 5 étoiles.</p>
              </li>
              <li className="flex items-start">
                <CheckCircle2 className="text-[#eab308] mr-4 mt-1 flex-shrink-0" size={24} />
                <p className="text-gray-700"><strong className="text-gray-900">Bachelor & Master en Business/Finance :</strong> Programmes dispensés en français ou en anglais axés sur la banque, la gestion de fortune et le commerce international.</p>
              </li>
              <li className="flex items-start">
                <CheckCircle2 className="text-[#eab308] mr-4 mt-1 flex-shrink-0" size={24} />
                <p className="text-gray-700"><strong className="text-gray-900">Excellence Académique :</strong> Diplômes reconnus internationalement garantissant une très forte employabilité.</p>
              </li>
            </ul>
          </div>
          
          <div className="bg-white p-8 border-t-4 border-[#1a365d] shadow-xl rounded-b-xl">
            <div className="flex items-center mb-6">
              <Building className="text-[#1a365d] mr-3" size={28} />
              <h3 className="text-2xl font-bold text-gray-900">Exemples d'établissements</h3>
            </div>
            <ul className="list-disc pl-5 space-y-2 text-gray-700 font-medium">
              <li>EHL Hospitality Business School (Lausanne)</li>
              <li>Glion Institute of Higher Education</li>
              <li>Les Roches Global Hospitality Education</li>
              <li>EU Business School (Genève / Montreux)</li>
              <li>Université de Genève (UNIGE)</li>
              <li>BHMS Business & Hotel Management School (Lucerne)</li>
            </ul>
            <Link to="/universites" className="inline-block mt-8 text-[#1a365d] font-bold text-sm uppercase tracking-wider hover:text-[#eab308] transition-colors">
              Voir tous nos établissements partenaires &rarr;
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#eab308] py-16 text-center">
        <h2 className="text-3xl font-black text-[#1a365d] uppercase tracking-tight mb-6">La Suisse vous attend !</h2>
        <Link to="/contact" className="inline-block bg-[#1a365d] text-white px-8 py-4 text-[13px] font-bold uppercase tracking-[0.15em] hover:bg-white hover:text-[#1a365d] shadow-xl transition-all duration-300">
          Construire mon dossier pour la Suisse
        </Link>
      </section>
    </div>
  );
}