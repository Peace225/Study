import { Briefcase, ArrowRight, CheckCircle2 } from "lucide-react";
import { Link } from "react-router-dom";

export default function Recrutement() {
  const avantages = [
    "Un environnement international et stimulant",
    "Une formation continue sur les systèmes éducatifs mondiaux",
    "Des possibilités d'évolution au sein du cabinet",
    "Une équipe bienveillante et passionnée par l'éducation"
  ];

  return (
    <div className="w-full bg-white font-sans pt-24">
      
      {/* HERO SECTION */}
      <section className="bg-[#1a365d] py-20 text-center relative overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-[radial-gradient(circle_at_center,rgba(234,179,8,0.1)_0%,transparent_60%)]"></div>
        <div className="relative z-10 animate-in fade-in slide-in-from-bottom-5 duration-700">
          <h1 className="text-3xl md:text-5xl font-black uppercase text-white tracking-tight mb-4">
            Nous Recrutons
          </h1>
          <div className="h-[3px] w-16 bg-[#eab308] mx-auto mb-6"></div>
          <p className="text-white/80 font-light max-w-2xl mx-auto px-6">
            Rejoignez <strong className="text-white">LM Global Education</strong> et participez à la réussite académique des leaders de demain.
          </p>
        </div>
      </section>

      {/* CONTENU PRINCIPAL */}
      <section className="max-w-7xl mx-auto px-6 py-24 flex flex-col lg:flex-row gap-16">
        
        {/* Colonne Gauche : Pourquoi nous rejoindre */}
        <div className="lg:w-1/2">
          <h2 className="text-[24px] font-black uppercase text-gray-900 tracking-tight mb-6">
            Donnez du sens à votre carrière
          </h2>
          <p className="text-gray-600 font-light leading-relaxed mb-8">
            En rejoignant notre équipe, vous devenez le trait d'union entre l'ambition d'un étudiant et les meilleures universités du monde. Nous recherchons des profils passionnés, dotés d'une forte expérience à l'international, et qui partagent nos valeurs d'excellence et d'éthique.
          </p>
          
          <div className="space-y-4 mb-10">
            {avantages.map((av, idx) => (
              <div key={idx} className="flex items-start">
                <CheckCircle2 className="text-[#eab308] mr-4 flex-shrink-0 mt-1" size={20} />
                <span className="text-gray-700 font-medium">{av}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Colonne Droite : Postes ouverts / Candidature spontanée */}
        <div className="lg:w-1/2">
          <div className="bg-[#fafafa] p-10 border border-gray-100 shadow-lg">
            <div className="flex items-center mb-6">
              <Briefcase className="text-[#1a365d] mr-4" size={32} />
              <h3 className="text-[20px] font-bold uppercase text-[#1a365d]">Candidature Spontanée</h3>
            </div>
            <p className="text-gray-600 font-light leading-relaxed mb-8">
              Nous n'avons pas de poste ouvert correspondant à votre profil actuellement ? Nous sommes toujours à l'écoute de nouveaux talents. Envoyez-nous votre CV et une lettre de motivation détaillée.
            </p>
            
            <a 
              href="mailto:recrutement@lmglobaleducation.com" 
              className="group relative inline-flex items-center justify-center bg-[#1a365d] text-white px-8 py-4 text-[13px] font-black uppercase tracking-[0.1em] overflow-hidden transition-all duration-500 hover:bg-[#eab308] hover:text-[#1a365d] w-full"
            >
              <span className="relative z-10 flex items-center">
                ENVOYER MA CANDIDATURE
                <ArrowRight className="ml-3 w-4 h-4 opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-500 ease-out" />
              </span>
            </a>
          </div>
        </div>

      </section>
    </div>
  );
}