import { Link } from "react-router-dom";
import { Briefcase, GraduationCap, Building2, TrendingUp } from "lucide-react";

export default function RetourPage() {
  const avantages = [
    { icon: <Briefcase size={28} />, title: "Insertion Professionnelle", desc: "Mise en valeur de votre profil bilingue et de votre expérience interculturelle sur le marché du travail." },
    { icon: <GraduationCap size={28} />, title: "Poursuite d'études", desc: "Accompagnement pour intégrer les Grandes Écoles ou Masters sélectifs en France après votre Bachelor à l'étranger." },
    { icon: <Building2 size={28} />, title: "Équivalence des diplômes", desc: "Aide aux démarches administratives (ENIC-NARIC) pour faire reconnaître officiellement votre diplôme." },
    { icon: <TrendingUp size={28} />, title: "Réseau Alumni", desc: "Mise en relation avec notre réseau d'anciens étudiants pour faciliter vos premières opportunités." }
  ];

  return (
    <div className="pt-24 min-h-screen bg-gray-50 font-sans">
      <section className="bg-[#1a365d] text-white py-20 px-6 text-center">
        <h1 className="text-4xl md:text-5xl font-black uppercase tracking-tight mb-6">
          Préparer le <span className="text-[#eab308]">Retour</span>
        </h1>
        <p className="text-lg text-gray-300 max-w-2xl mx-auto font-light">
          Votre expérience internationale est un atout majeur. Apprenez à la valoriser pour booster votre début de carrière ou la suite de vos études.
        </p>
      </section>

      <section className="py-20 px-6 max-w-[1200px] mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Un atout décisif sur votre CV</h2>
          <p className="text-gray-600 max-w-3xl mx-auto text-lg">
            Aujourd'hui, les recruteurs plébiscitent les profils internationaux : bilinguisme parfait, adaptabilité, ouverture d'esprit. Ne laissez pas ces compétences au hasard lors de votre retour.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {avantages.map((item, idx) => (
            <div key={idx} className="bg-white p-8 flex items-start space-x-6 rounded-xl shadow-sm hover:shadow-md transition-shadow border-l-4 border-transparent hover:border-[#eab308]">
              <div className="bg-[#1a365d]/10 p-4 rounded-full text-[#1a365d]">
                {item.icon}
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-gray-600">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <Link to="/contact" className="inline-block bg-[#eab308] text-[#1a365d] px-8 py-4 text-[13px] font-bold uppercase tracking-[0.15em] hover:bg-[#1a365d] hover:text-white transition-colors duration-300 shadow-xl">
            Discuter de mon retour
          </Link>
        </div>
      </section>
    </div>
  );
}