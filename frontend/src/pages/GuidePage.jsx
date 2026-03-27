import { BookOpen, Award, ShieldCheck, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

export default function GuidePage() {
  return (
    <div className="pt-24 min-h-screen bg-white font-sans pb-20">
      <div className="bg-[#eab308] py-16 px-6 text-center">
        <h1 className="text-3xl md:text-5xl font-black uppercase tracking-tight text-[#1a365d] mb-4">Guide des Formations</h1>
        <p className="text-[#1a365d] max-w-2xl mx-auto font-medium">Décryptez les systèmes éducatifs internationaux et trouvez l'équivalence de votre diplôme.</p>
      </div>

      <div className="max-w-[1000px] mx-auto px-6 mt-16 space-y-16">
        
        {/* Section Post-Bac */}
        <div className="flex flex-col md:flex-row gap-10 items-start">
          <div className="md:w-1/3">
            <div className="w-16 h-16 bg-[#1a365d]/10 flex items-center justify-center rounded-full mb-4 text-[#1a365d]">
              <ShieldCheck size={32} />
            </div>
            <h2 className="text-2xl font-bold text-[#1a365d] uppercase mb-2">L'accès Post-Bac</h2>
            <p className="text-gray-500 text-sm">Les parcours pour les bacheliers ou équivalents.</p>
          </div>
          <div className="md:w-2/3 space-y-6">
            <div className="bg-gray-50 p-6 border-l-4 border-[#1a365d]">
              <h3 className="text-xl font-bold text-gray-900 mb-2">Foundation Year (1 an)</h3>
              <p className="text-gray-600">Une année préparatoire conçue pour les étudiants internationaux. Elle permet de se mettre à niveau en anglais et dans les matières fondamentales avant d'intégrer un Bachelor.</p>
            </div>
            <div className="bg-gray-50 p-6 border-l-4 border-[#eab308]">
              <h3 className="text-xl font-bold text-gray-900 mb-2">Bachelor's Degree (3 à 4 ans)</h3>
              <p className="text-gray-600">L'équivalent de la Licence européenne (LMD). Il dure généralement 3 ans au Royaume-Uni (sauf Écosse) et en Océanie, et 4 ans en Amérique du Nord ou en Espagne.</p>
            </div>
          </div>
        </div>

        {/* Section Post-Licence */}
        <div className="flex flex-col md:flex-row gap-10 items-start border-t border-gray-100 pt-16">
          <div className="md:w-1/3">
            <div className="w-16 h-16 bg-[#1a365d]/10 flex items-center justify-center rounded-full mb-4 text-[#1a365d]">
              <Award size={32} />
            </div>
            <h2 className="text-2xl font-bold text-[#1a365d] uppercase mb-2">Études Supérieures</h2>
            <p className="text-gray-500 text-sm">Spécialisations après un niveau Bac+3/4.</p>
          </div>
          <div className="md:w-2/3 space-y-6">
            <div className="bg-gray-50 p-6 border-l-4 border-[#1a365d]">
              <h3 className="text-xl font-bold text-gray-900 mb-2">Pre-Master (3 à 9 mois)</h3>
              <p className="text-gray-600">Programme passerelle si vos notes de Licence sont un peu justes ou si vous souhaitez changer de filière avant d'entamer votre Master.</p>
            </div>
            <div className="bg-gray-50 p-6 border-l-4 border-[#eab308]">
              <h3 className="text-xl font-bold text-gray-900 mb-2">Master's Degree (1 à 2 ans)</h3>
              <p className="text-gray-600">Très intensif, le Master britannique dure souvent 1 an (12 mois pleins), tandis qu'il s'étale sur 2 ans dans des pays comme le Canada ou la France.</p>
            </div>
          </div>
        </div>
      </div>
      
      <div className="text-center mt-20">
        <Link to="/contact" className="inline-flex items-center text-[#1a365d] font-bold uppercase tracking-widest border-b-2 border-[#eab308] pb-1 hover:text-[#eab308] transition-colors">
          Faire évaluer mon dossier gratuitement <ArrowRight size={20} className="ml-2" />
        </Link>
      </div>
    </div>
  );
}