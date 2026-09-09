import { Link } from "react-router-dom";
import { Landmark, Euro, Heart, Building, CheckCircle2 } from "lucide-react";

export default function ItaliePage() {
  return (
    <div className="pt-24 min-h-screen bg-white font-sans">
      
      {/* HERO SECTION */}
      <section 
        className="relative py-32 px-6 text-center bg-cover bg-center"
        style={{ backgroundImage: "url('https://images.unsplash.com/photo-1529154036614-a60975f5c760?q=80&w=1920&auto=format&fit=crop')" }}
      >
        <div className="absolute inset-0 bg-[#1a365d]/80 backdrop-blur-[2px]" />
        <div className="relative z-10 max-w-[1000px] mx-auto text-white">
          <span className="text-[#eab308] font-bold tracking-[0.2em] uppercase text-sm mb-4 block">
            Étudier en
          </span>
          <h1 className="text-5xl md:text-7xl font-black uppercase tracking-tight mb-6">Italie</h1>
          <p className="text-lg md:text-xl text-gray-200 font-light max-w-2xl mx-auto">
            L'alliance parfaite entre patrimoine historique, dolce vita et excellence académique, avec des pôles de renommée mondiale en design, ingénierie, architecture et commerce.
          </p>
        </div>
      </section>

      {/* POURQUOI CHOISIR */}
      <section className="py-20 px-6 max-w-[1200px] mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-[#1a365d] mb-4">Pourquoi choisir la péninsule italienne ?</h2>
          <div className="w-24 h-1 bg-[#eab308] mx-auto mb-8"></div>
        </div>

        <div className="grid md:grid-cols-3 gap-10">
          <div className="text-center">
            <div className="w-16 h-16 bg-gray-50 rounded-full flex items-center justify-center text-[#1a365d] mx-auto mb-6">
              <Landmark size={32} />
            </div>
            <h3 className="text-xl font-bold mb-3">Richesse Culturelle</h3>
            <p className="text-gray-600">Berceau de la plus ancienne université du monde occidental (Bologne), l'Italie offre un cadre d'études entouré d'histoire, d'art et de beauté.</p>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 bg-gray-50 rounded-full flex items-center justify-center text-[#1a365d] mx-auto mb-6">
              <Euro size={32} />
            </div>
            <h3 className="text-xl font-bold mb-3">Frais Accessibles</h3>
            <p className="text-gray-600">Dans le public, les frais de scolarité sont souvent proportionnels aux revenus familiaux (système ISEE), rendant les études de très haut niveau abordables.</p>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 bg-gray-50 rounded-full flex items-center justify-center text-[#1a365d] mx-auto mb-6">
              <Heart size={32} />
            </div>
            <h3 className="text-xl font-bold mb-3">La Dolce Vita</h3>
            <p className="text-gray-600">Un climat méditerranéen, une gastronomie mondialement célèbre et une culture chaleureuse qui transforment l'expérience étudiante.</p>
          </div>
        </div>
      </section>

      {/* SYSTEME & PARTENAIRES */}
      <section className="bg-gray-50 py-20 px-6">
        <div className="max-w-[1200px] mx-auto grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-3xl font-bold text-[#1a365d] mb-6">Le système universitaire italien</h2>
            <p className="text-gray-600 mb-6">Le pays à l'origine du Processus de Bologne propose un système européen classique (LMD), avec un nombre croissant de cursus 100% en anglais.</p>
            <ul className="space-y-4">
              <li className="flex items-start">
                <CheckCircle2 className="text-[#eab308] mr-4 mt-1 flex-shrink-0" size={24} />
                <p className="text-gray-700"><strong className="text-gray-900">Laurea (Bachelor) :</strong> Dure 3 ans (180 crédits ECTS). Formation fondamentale qui prépare à l'entrée sur le marché du travail ou à la poursuite d'études.</p>
              </li>
              <li className="flex items-start">
                <CheckCircle2 className="text-[#eab308] mr-4 mt-1 flex-shrink-0" size={24} />
                <p className="text-gray-700"><strong className="text-gray-900">Laurea Magistrale (Master) :</strong> Dure 2 ans (120 crédits ECTS). Une spécialisation poussée offrant une véritable expertise professionnelle.</p>
              </li>
              <li className="flex items-start">
                <CheckCircle2 className="text-[#eab308] mr-4 mt-1 flex-shrink-0" size={24} />
                <p className="text-gray-700"><strong className="text-gray-900">Ciclo Unico :</strong> Certains cursus (Médecine, Architecture, Droit, Pharmacie) se font en un cycle unique et indivisible de 5 ou 6 ans.</p>
              </li>
            </ul>
          </div>
          
          <div className="bg-white p-8 border-t-4 border-[#1a365d] shadow-xl rounded-b-xl">
            <div className="flex items-center mb-6">
              <Building className="text-[#1a365d] mr-3" size={28} />
              <h3 className="text-2xl font-bold text-gray-900">Institutions de premier plan</h3>
            </div>
            <ul className="list-disc pl-5 space-y-2 text-gray-700 font-medium">
              <li>Politecnico di Milano (PoliMi)</li>
              <li>Università di Bologna (UNIBO)</li>
              <li>Università Bocconi (Milan)</li>
              <li>Sapienza Università di Roma</li>
              <li>Politecnico di Torino</li>
              <li>LUISS Guido Carli (Rome)</li>
            </ul>
            <Link to="/universites" className="inline-block mt-8 text-[#1a365d] font-bold text-sm uppercase tracking-wider hover:text-[#eab308] transition-colors">
              Voir tous nos établissements partenaires &rarr;
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#eab308] py-16 text-center">
        <h2 className="text-3xl font-black text-[#1a365d] uppercase tracking-tight mb-6">Envie de vivre la Dolce Vita étudiante ?</h2>
        <Link to="/contact" className="inline-block bg-[#1a365d] text-white px-8 py-4 text-[13px] font-bold uppercase tracking-[0.15em] hover:bg-white hover:text-[#1a365d] shadow-xl transition-all duration-300">
          Construire mon dossier pour l'Italie
        </Link>
      </section>
    </div>
  );
}