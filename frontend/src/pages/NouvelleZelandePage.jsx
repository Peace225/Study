import { Link } from "react-router-dom";
import { Mountain, ShieldCheck, Lightbulb, Building, CheckCircle2 } from "lucide-react";

export default function NouvelleZelandePage() {
  return (
    <div className="pt-24 min-h-screen bg-white font-sans">
      <section 
        className="relative py-32 px-6 text-center bg-cover bg-center"
        style={{ backgroundImage: "url('https://images.unsplash.com/photo-1469521669194-babbdf9aa9b4?q=80&w=1920&auto=format&fit=crop')" }}
      >
        <div className="absolute inset-0 bg-[#1a365d]/80 backdrop-blur-[2px]" />
        <div className="relative z-10 max-w-[1000px] mx-auto text-white">
          <span className="text-[#eab308] font-bold tracking-[0.2em] uppercase text-sm mb-4 block">
            Étudier en
          </span>
          <h1 className="text-5xl md:text-7xl font-black uppercase tracking-tight mb-6">Nouvelle-Zélande</h1>
          <p className="text-lg md:text-xl text-gray-200 font-light max-w-2xl mx-auto">
            Une éducation innovante dans l'un des pays les plus sûrs et spectaculaires au monde. Idéal pour les profils créatifs et les amoureux de la nature.
          </p>
        </div>
      </section>

      <section className="py-20 px-6 max-w-[1200px] mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-[#1a365d] mb-4">Pourquoi le pays du long nuage blanc ?</h2>
          <div className="w-24 h-1 bg-[#eab308] mx-auto mb-8"></div>
        </div>

        <div className="grid md:grid-cols-3 gap-10">
          <div className="text-center">
            <div className="w-16 h-16 bg-gray-50 rounded-full flex items-center justify-center text-[#1a365d] mx-auto mb-6">
              <ShieldCheck size={32} />
            </div>
            <h3 className="text-xl font-bold mb-3">Sécurité & Qualité de Vie</h3>
            <p className="text-gray-600">Régulièrement classée dans le top 3 des pays les plus sûrs au monde, avec une société inclusive et très accueillante envers les étudiants internationaux.</p>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 bg-gray-50 rounded-full flex items-center justify-center text-[#1a365d] mx-auto mb-6">
              <Lightbulb size={32} />
            </div>
            <h3 className="text-xl font-bold mb-3">Enseignement Innovant</h3>
            <p className="text-gray-600">Le système privilégie la pensée critique, l'innovation et la résolution de problèmes, loin de l'apprentissage par cœur.</p>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 bg-gray-50 rounded-full flex items-center justify-center text-[#1a365d] mx-auto mb-6">
              <Mountain size={32} />
            </div>
            <h3 className="text-xl font-bold mb-3">Une Nature Spectaculaire</h3>
            <p className="text-gray-600">Étudier en Nouvelle-Zélande, c'est pouvoir aller surfer après les cours, ou faire des randonnées dans des paysages grandioses le week-end.</p>
          </div>
        </div>
      </section>

      <section className="bg-gray-50 py-20 px-6">
        <div className="max-w-[1200px] mx-auto grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-3xl font-bold text-[#1a365d] mb-6">Le système d'études</h2>
            <ul className="space-y-4">
              <li className="flex items-start">
                <CheckCircle2 className="text-[#eab308] mr-4 mt-1 flex-shrink-0" size={24} />
                <p className="text-gray-700"><strong className="text-gray-900">8 Universités publiques :</strong> Elles figurent toutes dans le top 3% mondial. Le Bachelor dure généralement 3 ans.</p>
              </li>
              <li className="flex items-start">
                <CheckCircle2 className="text-[#eab308] mr-4 mt-1 flex-shrink-0" size={24} />
                <p className="text-gray-700"><strong className="text-gray-900">Institutes of Technology :</strong> Proposent des formations très pratiques et techniques, avec des liens étroits avec les entreprises locales.</p>
              </li>
              <li className="flex items-start">
                <CheckCircle2 className="text-[#eab308] mr-4 mt-1 flex-shrink-0" size={24} />
                <p className="text-gray-700"><strong className="text-gray-900">Post-Study Work :</strong> Comme en Australie, vous pouvez obtenir un visa de travail de 1 à 3 ans après l'obtention de votre diplôme.</p>
              </li>
            </ul>
          </div>
          
          <div className="bg-white p-8 border-t-4 border-[#1a365d] shadow-xl rounded-b-xl">
            <div className="flex items-center mb-6">
              <Building className="text-[#1a365d] mr-3" size={28} />
              <h3 className="text-2xl font-bold text-gray-900">Exemples d'institutions</h3>
            </div>
            <ul className="list-disc pl-5 space-y-2 text-gray-700 font-medium">
              <li>University of Auckland</li>
              <li>University of Otago</li>
              <li>Victoria University of Wellington</li>
              <li>Massey University</li>
              <li>Auckland University of Technology (AUT)</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="bg-[#eab308] py-16 text-center">
        <h2 className="text-3xl font-black text-[#1a365d] uppercase tracking-tight mb-6">L'aventure Kiwie vous tente ?</h2>
        <Link to="/contact" className="inline-block bg-[#1a365d] text-white px-8 py-4 text-[13px] font-bold uppercase tracking-[0.15em] hover:bg-white hover:text-[#1a365d] shadow-xl">
          Découvrir les modalités
        </Link>
      </section>
    </div>
  );
}