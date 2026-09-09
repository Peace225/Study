import { Link } from "react-router-dom";
import { GraduationCap, Heart, Briefcase, Building, CheckCircle2 } from "lucide-react";

export default function SenegalPage() {
  return (
    <div className="pt-24 min-h-screen bg-white font-sans">
      
      {/* HERO SECTION */}
      <section 
        className="relative py-32 px-6 text-center bg-cover bg-center"
        style={{ backgroundImage: "url('https://images.unsplash.com/photo-1572252821143-02f35492d3b2?q=80&w=1920&auto=format&fit=crop')" }}
      >
        <div className="absolute inset-0 bg-[#1a365d]/80 backdrop-blur-[2px]" />
        <div className="relative z-10 max-w-[1000px] mx-auto text-white">
          <span className="text-[#eab308] font-bold tracking-[0.2em] uppercase text-sm mb-4 block">
            Étudier au
          </span>
          <h1 className="text-5xl md:text-7xl font-black uppercase tracking-tight mb-6">
            Sénégal
          </h1>
          <p className="text-lg md:text-xl text-gray-200 font-light max-w-2xl mx-auto">
            Un hub universitaire de référence en Afrique de l'Ouest. Profitez d'écoles réputées, d'une intégration chaleureuse et d'un environnement d'études très dynamique.
          </p>
        </div>
      </section>

      {/* POURQUOI CHOISIR */}
      <section className="py-20 px-6 max-w-[1200px] mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-[#1a365d] mb-4">Pourquoi choisir le Sénégal ?</h2>
          <div className="w-24 h-1 bg-[#eab308] mx-auto mb-8"></div>
        </div>

        <div className="grid md:grid-cols-3 gap-10">
          <div className="text-center">
            <div className="w-16 h-16 bg-gray-50 rounded-full flex items-center justify-center text-[#1a365d] mx-auto mb-6">
              <GraduationCap size={32} />
            </div>
            <h3 className="text-xl font-bold mb-3">Hub Académique Régional</h3>
            <p className="text-gray-600">Dakar rassemble plusieurs des meilleures Business Schools et instituts spécialisés d'Afrique de l'Ouest, formant l'élite continentale.</p>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 bg-gray-50 rounded-full flex items-center justify-center text-[#1a365d] mx-auto mb-6">
              <Heart size={32} />
            </div>
            <h3 className="text-xl font-bold mb-3">La Légendaire Teranga</h3>
            <p className="text-gray-600">Reconnu mondialement pour le sens de l'accueil sénégalais (Teranga), le pays offre un cadre d'études chaleureux, paisible et sécurisé.</p>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 bg-gray-50 rounded-full flex items-center justify-center text-[#1a365d] mx-auto mb-6">
              <Briefcase size={32} />
            </div>
            <h3 className="text-xl font-bold mb-3">Écosystème & Emploi</h3>
            <p className="text-gray-600">Un marché économique en pleine expansion avec une présence massive de multinationales, d'ONG et de startups innovantes.</p>
          </div>
        </div>
      </section>

      {/* SYSTEME & PARTENAIRES */}
      <section className="bg-gray-50 py-20 px-6">
        <div className="max-w-[1200px] mx-auto grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-3xl font-bold text-[#1a365d] mb-6">Le système universitaire sénégalais</h2>
            <p className="text-gray-600 mb-6">Aligné sur les standards internationaux (LMD), l'enseignement supérieur associe universités publiques prestigieuses et grandes écoles privées accréditées CAMES.</p>
            <ul className="space-y-4">
              <li className="flex items-start">
                <CheckCircle2 className="text-[#eab308] mr-4 mt-1 flex-shrink-0" size={24} />
                <p className="text-gray-700"><strong className="text-gray-900">Licence (Bac+3) :</strong> Formation généraliste ou professionnelle axée sur la maîtrise des fondamentaux de la filière choisie.</p>
              </li>
              <li className="flex items-start">
                <CheckCircle2 className="text-[#eab308] mr-4 mt-1 flex-shrink-0" size={24} />
                <p className="text-gray-700"><strong className="text-gray-900">Master (Bac+5) :</strong> Spécialisation poussée en Management, Audit, Logistique, Droit des Affaires ou Informatique.</p>
              </li>
              <li className="flex items-start">
                <CheckCircle2 className="text-[#eab308] mr-4 mt-1 flex-shrink-0" size={24} />
                <p className="text-gray-700"><strong className="text-gray-900">Accréditation CAMES :</strong> Garantie de reconnaissance des diplômes à l'échelle africaine et internationale.</p>
              </li>
            </ul>
          </div>
          
          <div className="bg-white p-8 border-t-4 border-[#1a365d] shadow-xl rounded-b-xl">
            <div className="flex items-center mb-6">
              <Building className="text-[#1a365d] mr-3" size={28} />
              <h3 className="text-2xl font-bold text-gray-900">Exemples d'établissements</h3>
            </div>
            <ul className="list-disc pl-5 space-y-2 text-gray-700 font-medium">
              <li>Groupe ISM (Institut Supérieur de Management)</li>
              <li>BEM Dakar (Bordeaux Management School)</li>
              <li>CESAG (Centre Africain d'Études Supérieures en Gestion)</li>
              <li>IAM (Institut Africain de Management)</li>
              <li>Université Cheikh Anta Diop de Dakar (UCAD)</li>
              <li>ESP (École Supérieure Polytechnique)</li>
            </ul>
            <Link to="/universites" className="inline-block mt-8 text-[#1a365d] font-bold text-sm uppercase tracking-wider hover:text-[#eab308] transition-colors">
              Voir tous nos établissements partenaires &rarr;
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#eab308] py-16 text-center">
        <h2 className="text-3xl font-black text-[#1a365d] uppercase tracking-tight mb-6">Le Sénégal vous attend !</h2>
        <Link to="/contact" className="inline-block bg-[#1a365d] text-white px-8 py-4 text-[13px] font-bold uppercase tracking-[0.15em] hover:bg-white hover:text-[#1a365d] shadow-xl transition-all duration-300">
          Construire mon dossier pour le Sénégal
        </Link>
      </section>
    </div>
  );
}