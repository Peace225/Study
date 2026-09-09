import { Link } from "react-router-dom";
import { GraduationCap, BookOpen, Heart, Building, CheckCircle2 } from "lucide-react";

export default function FrancePage() {
  return (
    <div className="pt-24 min-h-screen bg-white font-sans">
      
      {/* HERO SECTION */}
      <section 
        className="relative py-32 px-6 text-center bg-cover bg-center"
        style={{ backgroundImage: "url('https://images.unsplash.com/photo-1502602898657-3e91760cbb34?q=80&w=1920&auto=format&fit=crop')" }}
      >
        <div className="absolute inset-0 bg-[#1a365d]/80 backdrop-blur-[2px]" />
        <div className="relative z-10 max-w-[1000px] mx-auto text-white">
          <span className="text-[#eab308] font-bold tracking-[0.2em] uppercase text-sm mb-4 block">
            Étudier en
          </span>
          <h1 className="text-5xl md:text-7xl font-black uppercase tracking-tight mb-6">
            France
          </h1>
          <p className="text-lg md:text-xl text-gray-200 font-light max-w-2xl mx-auto">
            Intégrez les Grandes Écoles et universités prestigieuses. Une tradition d'excellence académique et un cadre de vie exceptionnel au cœur de l'Europe.
          </p>
        </div>
      </section>

      {/* POURQUOI CHOISIR */}
      <section className="py-20 px-6 max-w-[1200px] mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-[#1a365d] mb-4">Pourquoi choisir la France ?</h2>
          <div className="w-24 h-1 bg-[#eab308] mx-auto mb-8"></div>
        </div>

        <div className="grid md:grid-cols-3 gap-10">
          <div className="text-center">
            <div className="w-16 h-16 bg-gray-50 rounded-full flex items-center justify-center text-[#1a365d] mx-auto mb-6">
              <GraduationCap size={32} />
            </div>
            <h3 className="text-xl font-bold mb-3">Excellence & Grandes Écoles</h3>
            <p className="text-gray-600">Avec un système unique de Grandes Écoles (Commerce, Ingénierie) et des universités de renommée mondiale, les diplômes français sont très valorisés.</p>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 bg-gray-50 rounded-full flex items-center justify-center text-[#1a365d] mx-auto mb-6">
              <BookOpen size={32} />
            </div>
            <h3 className="text-xl font-bold mb-3">Système LMD & Accessibilité</h3>
            <p className="text-gray-600">Des parcours clairs (Licence en 3 ans, Master en 2 ans) et des frais de scolarité dans le public parmi les plus abordables au monde pour une telle qualité.</p>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 bg-gray-50 rounded-full flex items-center justify-center text-[#1a365d] mx-auto mb-6">
              <Heart size={32} />
            </div>
            <h3 className="text-xl font-bold mb-3">Aides & Qualité de Vie</h3>
            <p className="text-gray-600">Les étudiants internationaux bénéficient des mêmes avantages que les Français : aides au logement (CAF), santé couverte et tarifs réduits partout.</p>
          </div>
        </div>
      </section>

      {/* SYSTEME & PARTENAIRES */}
      <section className="bg-gray-50 py-20 px-6">
        <div className="max-w-[1200px] mx-auto grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-3xl font-bold text-[#1a365d] mb-6">Le système d'admission (Campus France)</h2>
            <p className="text-gray-600 mb-6">La majorité des candidatures pour les étudiants internationaux passent par la plateforme centralisée <strong>Études en France</strong>. La préparation du dossier et l'entretien de motivation y sont cruciaux.</p>
            <ul className="space-y-4">
              <li className="flex items-start">
                <CheckCircle2 className="text-[#eab308] mr-4 mt-1 flex-shrink-0" size={24} />
                <p className="text-gray-700"><strong className="text-gray-900">Licence / Bachelor (Bac+3) :</strong> Fondations solides en université ou formations professionnalisantes en école privée.</p>
              </li>
              <li className="flex items-start">
                <CheckCircle2 className="text-[#eab308] mr-4 mt-1 flex-shrink-0" size={24} />
                <p className="text-gray-700"><strong className="text-gray-900">Master / PGE (Bac+5) :</strong> Spécialisation pointue, souvent accompagnée de stages longs ou d'alternance pour l'insertion pro.</p>
              </li>
            </ul>
          </div>
          
          <div className="bg-white p-8 border-t-4 border-[#1a365d] shadow-xl rounded-b-xl">
            <div className="flex items-center mb-6">
              <Building className="text-[#1a365d] mr-3" size={28} />
              <h3 className="text-2xl font-bold text-gray-900">Quelques types d'institutions</h3>
            </div>
            <ul className="list-disc pl-5 space-y-2 text-gray-700 font-medium">
              <li>Universités Publiques (Sorbonne, Panthéon-Assas...)</li>
              <li>Business Schools (HEC, SKEMA, KEDGE, INSEEC...)</li>
              <li>Écoles d'Ingénieurs (Polytechnique, INSA, EPITA...)</li>
              <li>Écoles d'Art et de Design appliqués</li>
              <li>Instituts d'Études Politiques (Sciences Po)</li>
            </ul>
            <Link to="/universites" className="inline-block mt-8 text-[#1a365d] font-bold text-sm uppercase tracking-wider hover:text-[#eab308] transition-colors">
              Voir tous nos établissements partenaires &rarr;
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#eab308] py-16 text-center">
        <h2 className="text-3xl font-black text-[#1a365d] uppercase tracking-tight mb-6">Prêt à étudier en France ?</h2>
        <Link to="/contact" className="inline-block bg-[#1a365d] text-white px-8 py-4 text-[13px] font-bold uppercase tracking-[0.15em] hover:bg-white hover:text-[#1a365d] shadow-xl transition-all duration-300">
          Préparer mon dossier Campus France
        </Link>
      </section>
    </div>
  );
}