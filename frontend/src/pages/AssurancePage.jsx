import { Link } from "react-router-dom";
// CORRECTION ICI : Remplacement de PlanePulse par HeartPulse
import { ShieldCheck, Stethoscope, Globe, HeartPulse } from "lucide-react";

export default function AssurancePage() {
  const garanties = [
    { icon: <Stethoscope size={32} />, title: "Frais Médicaux", desc: "Prise en charge à 100% des frais médicaux, d'hospitalisation et de pharmacie, sans franchise dans la plupart des pays." },
    // CORRECTION ICI : Utilisation de <HeartPulse />
    { icon: <HeartPulse size={32} />, title: "Rapatriement", desc: "Assistance et rapatriement sanitaire vers votre pays d'origine en cas de problème grave." },
    { icon: <ShieldCheck size={32} />, title: "Responsabilité Civile", desc: "Couverture en cas de dommages matériels ou corporels causés à un tiers pendant votre séjour." },
    { icon: <Globe size={32} />, title: "Conforme aux Visas", desc: "Nos assurances respectent les critères stricts exigés par les ambassades pour la délivrance des visas étudiants." }
  ];

  return (
    <div className="pt-24 min-h-screen bg-gray-50 font-sans">
      <section className="bg-[#1a365d] text-white py-20 px-6 text-center">
        <h1 className="text-4xl md:text-5xl font-black uppercase tracking-tight mb-6">
          Assurance <span className="text-[#eab308]">Étudiante</span>
        </h1>
        <p className="text-lg text-gray-300 max-w-2xl mx-auto font-light">
          Partez l'esprit tranquille. Une couverture santé complète est indispensable et souvent obligatoire pour vos études à l'étranger.
        </p>
      </section>

      <section className="py-20 px-6 max-w-[1200px] mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Pourquoi souscrire à une assurance dédiée ?</h2>
          <p className="text-gray-600 max-w-3xl mx-auto text-lg">
            Les frais médicaux à l'étranger (notamment en Amérique du Nord ou en Australie) peuvent être exorbitants. La sécurité sociale de votre pays d'origine ne vous couvrira pas ou très partiellement.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {garanties.map((item, idx) => (
            <div key={idx} className="bg-white p-8 rounded-xl shadow-sm hover:shadow-xl transition-shadow border-t-4 border-[#1a365d] text-center">
              <div className="text-[#eab308] flex justify-center mb-6">
                {item.icon}
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">{item.title}</h3>
              <p className="text-gray-600 text-sm leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>

        <div className="bg-[#eab308] rounded-2xl p-8 md:p-12 flex flex-col md:flex-row items-center justify-between shadow-xl">
          <div className="md:w-2/3 mb-6 md:mb-0 md:pr-8 text-center md:text-left">
            <h3 className="text-2xl font-black text-[#1a365d] uppercase mb-2">Des tarifs négociés pour nos étudiants</h3>
            <p className="text-[#1a365d] font-medium">
              Grâce à nos partenaires de confiance (Chapka, AVI International...), nous vous aidons à choisir le contrat le plus adapté à votre destination et à votre budget.
            </p>
          </div>
          <div className="md:w-1/3 text-center md:text-right w-full">
            <Link to="/contact" className="inline-block w-full md:w-auto bg-[#1a365d] text-white px-8 py-4 text-[13px] font-bold uppercase tracking-[0.15em] hover:bg-white hover:text-[#1a365d] transition-colors duration-300">
              Obtenir un tarif
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}