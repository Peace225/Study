import { Link } from "react-router-dom";
import { MapPin, GraduationCap, PiggyBank, Building, CheckCircle2 } from "lucide-react";

export default function BelgiquePage() {
  return (
    <div className="pt-24 min-h-screen bg-white font-sans">
      
      {/* HERO SECTION */}
      <section 
        className="relative py-32 px-6 text-center bg-cover bg-center"
        style={{ backgroundImage: "url('https://images.unsplash.com/photo-1543419515-560411a0d8e4?q=80&w=1920&auto=format&fit=crop')" }}
      >
        <div className="absolute inset-0 bg-[#1a365d]/80 backdrop-blur-[2px]" />
        <div className="relative z-10 max-w-[1000px] mx-auto text-white">
          <span className="text-[#eab308] font-bold tracking-[0.2em] uppercase text-sm mb-4 block">
            Étudier en
          </span>
          <h1 className="text-5xl md:text-7xl font-black uppercase tracking-tight mb-6">
            Belgique
          </h1>
          <p className="text-lg md:text-xl text-gray-200 font-light max-w-2xl mx-auto">
            Le cœur de l'Europe. Un enseignement supérieur de très haut niveau, un cadre de vie multiculturel et des frais de scolarité accessibles.
          </p>
        </div>
      </section>

      {/* POURQUOI CHOISIR */}
      <section className="py-20 px-6 max-w-[1200px] mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-[#1a365d] mb-4">Pourquoi choisir la Belgique ?</h2>
          <div className="w-24 h-1 bg-[#eab308] mx-auto mb-8"></div>
        </div>

        <div className="grid md:grid-cols-3 gap-10">
          <div className="text-center">
            <div className="w-16 h-16 bg-gray-50 rounded-full flex items-center justify-center text-[#1a365d] mx-auto mb-6">
              <MapPin size={32} />
            </div>
            <h3 className="text-xl font-bold mb-3">Au Cœur de l'Europe</h3>
            <p className="text-gray-600">Siège de l'Union Européenne et de l'OTAN, Bruxelles et la Belgique offrent un tremplin idéal pour une carrière internationale.</p>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 bg-gray-50 rounded-full flex items-center justify-center text-[#1a365d] mx-auto mb-6">
              <GraduationCap size={32} />
            </div>
            <h3 className="text-xl font-bold mb-3">Excellence Académique</h3>
            <p className="text-gray-600">Des universités régulièrement classées parmi les meilleures mondiales et des Hautes Écoles réputées pour leur pragmatisme.</p>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 bg-gray-50 rounded-full flex items-center justify-center text-[#1a365d] mx-auto mb-6">
              <PiggyBank size={32} />
            </div>
            <h3 className="text-xl font-bold mb-3">Études Abordables</h3>
            <p className="text-gray-600">Des frais d'inscription universitaires très avantageux et un coût de la vie maîtrisé par rapport aux autres capitales européennes.</p>
          </div>
        </div>
      </section>

      {/* SYSTEME & PARTENAIRES */}
      <section className="bg-gray-50 py-20 px-6">
        <div className="max-w-[1200px] mx-auto grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-3xl font-bold text-[#1a365d] mb-6">Le système éducatif belge</h2>
            <p className="text-gray-600 mb-6">Parfaitement arrimé au processus de Bologne (LMD), le système belge se distingue par sa division entre l'enseignement universitaire et non-universitaire (Hautes Écoles).</p>
            <ul className="space-y-4">
              <li className="flex items-start">
                <CheckCircle2 className="text-[#eab308] mr-4 mt-1 flex-shrink-0" size={24} />
                <p className="text-gray-700"><strong className="text-gray-900">Universités vs Hautes Écoles :</strong> L'université privilégie la théorie et la recherche, tandis que les Hautes Écoles offrent des formations très pratiques liées au monde professionnel.</p>
              </li>
              <li className="flex items-start">
                <CheckCircle2 className="text-[#eab308] mr-4 mt-1 flex-shrink-0" size={24} />
                <p className="text-gray-700"><strong className="text-gray-900">Bachelier & Master :</strong> Le cycle de transition (Bachelier) dure 3 ans (180 ECTS). Le Master dure 1 à 2 ans (60 à 120 ECTS) selon la spécialisation.</p>
              </li>
              <li className="flex items-start">
                <CheckCircle2 className="text-[#eab308] mr-4 mt-1 flex-shrink-0" size={24} />
                <p className="text-gray-700"><strong className="text-gray-900">L'Équivalence du Diplôme :</strong> Étape cruciale et obligatoire, tout diplôme de fin d'études secondaires étranger doit recevoir une équivalence de la Fédération Wallonie-Bruxelles avant l'inscription.</p>
              </li>
            </ul>
          </div>
          
          <div className="bg-white p-8 border-t-4 border-[#1a365d] shadow-xl rounded-b-xl">
            <div className="flex items-center mb-6">
              <Building className="text-[#1a365d] mr-3" size={28} />
              <h3 className="text-2xl font-bold text-gray-900">Institutions de premier plan</h3>
            </div>
            <ul className="list-disc pl-5 space-y-2 text-gray-700 font-medium">
              <li>KU Leuven (KUL)</li>
              <li>Université libre de Bruxelles (ULB)</li>
              <li>UCLouvain</li>
              <li>Université de Liège (ULiège)</li>
              <li>Vrije Universiteit Brussel (VUB)</li>
              <li>HEC Liège (Management School)</li>
            </ul>
            <Link to="/universites" className="inline-block mt-8 text-[#1a365d] font-bold text-sm uppercase tracking-wider hover:text-[#eab308] transition-colors">
              Voir tous nos établissements partenaires &rarr;
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#eab308] py-16 text-center">
        <h2 className="text-3xl font-black text-[#1a365d] uppercase tracking-tight mb-6">Prêt à étudier en Belgique ?</h2>
        <Link to="/contact" className="inline-block bg-[#1a365d] text-white px-8 py-4 text-[13px] font-bold uppercase tracking-[0.15em] hover:bg-white hover:text-[#1a365d] shadow-xl transition-all duration-300">
          Préparer ma demande d'équivalence
        </Link>
      </section>
    </div>
  );
}