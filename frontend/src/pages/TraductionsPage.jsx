import { Link } from "react-router-dom";
import { Languages, FileCheck, Stamp, Clock } from "lucide-react";

export default function TraductionsPage() {
  const features = [
    { icon: <Languages size={32} />, title: "Traducteurs Assermentés", desc: "Toutes nos traductions sont réalisées par des experts reconnus officiellement." },
    { icon: <Stamp size={32} />, title: "Conformité Garantie", desc: "Format et terminologie adaptés aux exigences strictes des universités étrangères." },
    { icon: <FileCheck size={32} />, title: "Tous types de documents", desc: "Relevés de notes, diplômes, lettres de recommandation, actes de naissance..." },
    { icon: <Clock size={32} />, title: "Délais Rapides", desc: "Service express disponible pour les candidatures de dernière minute." }
  ];

  return (
    <div className="pt-24 min-h-screen bg-white font-sans">
      <section className="bg-[#1a365d] text-white py-20 px-6 text-center">
        <h1 className="text-4xl md:text-5xl font-black uppercase tracking-tight mb-6">
          Traductions <span className="text-[#eab308]">Certifiées</span>
        </h1>
        <p className="text-lg text-gray-300 max-w-2xl mx-auto font-light">
          Ne prenez aucun risque avec votre dossier d'admission. Obtenez des traductions officielles, rapides et conformes.
        </p>
      </section>

      <section className="py-20 px-6 max-w-[1200px] mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="grid sm:grid-cols-2 gap-6">
            {features.map((feature, idx) => (
              <div key={idx} className="bg-gray-50 p-6 rounded-xl border border-gray-100 text-center hover:-translate-y-1 transition-transform duration-300">
                <div className="text-[#eab308] flex justify-center mb-4">{feature.icon}</div>
                <h3 className="text-lg font-bold text-[#1a365d] mb-2">{feature.title}</h3>
                <p className="text-gray-600 text-sm">{feature.desc}</p>
              </div>
            ))}
          </div>
          
          <div className="bg-[#1a365d] p-10 rounded-2xl text-white shadow-2xl">
            <h2 className="text-3xl font-bold mb-6 text-[#eab308]">Comment ça marche ?</h2>
            <ol className="space-y-6 text-gray-200">
              <li className="flex items-start">
                <span className="font-bold text-xl mr-4 text-[#eab308]">1.</span>
                <p>Envoyez-nous vos documents scannés en haute qualité via notre formulaire de contact.</p>
              </li>
              <li className="flex items-start">
                <span className="font-bold text-xl mr-4 text-[#eab308]">2.</span>
                <p>Recevez un devis précis et un délai de livraison sous 24 heures ouvrées.</p>
              </li>
              <li className="flex items-start">
                <span className="font-bold text-xl mr-4 text-[#eab308]">3.</span>
                <p>Vos documents traduits et assermentés vous sont renvoyés au format numérique (et papier si nécessaire).</p>
              </li>
            </ol>
            <div className="mt-10">
              <Link to="/contact" className="block text-center bg-[#eab308] text-[#1a365d] px-6 py-4 text-[13px] font-bold uppercase tracking-widest hover:bg-white transition-colors duration-300">
                Demander un devis
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}