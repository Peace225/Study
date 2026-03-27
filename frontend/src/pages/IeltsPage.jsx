import { Link } from "react-router-dom";
import { BookOpen, Headphones, Edit3, MessageCircle } from "lucide-react";

export default function IeltsPage() {
  const ieltsSections = [
    { title: "Listening", icon: <Headphones size={28} />, desc: "40 minutes pour comprendre des conversations et monologues en anglais." },
    { title: "Reading", icon: <BookOpen size={28} />, desc: "60 minutes d'analyse de textes académiques et réponses aux questions." },
    { title: "Writing", icon: <Edit3 size={28} />, desc: "60 minutes pour décrire un graphique et rédiger un essai argumentatif." },
    { title: "Speaking", icon: <MessageCircle size={28} />, desc: "15 minutes d'entretien face à face avec un examinateur officiel." }
  ];

  return (
    <div className="pt-24 min-h-screen bg-white font-sans">
      <section className="bg-[#1a365d] text-white py-20 px-6 text-center">
        <h1 className="text-4xl md:text-5xl font-black uppercase tracking-tight mb-6">
          Préparation à <span className="text-[#eab308]">L'IELTS</span>
        </h1>
        <p className="text-lg text-gray-300 max-w-2xl mx-auto font-light">
          L'examen d'anglais indispensable pour vos études internationales. Atteignez le score requis grâce à notre préparation ciblée.
        </p>
      </section>

      <section className="py-20 px-6 max-w-[1200px] mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Comprendre le Test IELTS</h2>
          <p className="text-gray-600 max-w-3xl mx-auto text-lg">
            Le test se divise en 4 compétences évaluant votre niveau d'anglais global. La plupart des universités exigent un score global situé entre 6.0 et 7.5.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {ieltsSections.map((section, idx) => (
            <div key={idx} className="p-6 border border-gray-100 rounded-xl shadow-sm hover:shadow-md transition-shadow bg-gray-50">
              <div className="text-[#eab308] mb-4">{section.icon}</div>
              <h3 className="text-xl font-bold text-[#1a365d] mb-2">{section.title}</h3>
              <p className="text-gray-600 text-sm">{section.desc}</p>
            </div>
          ))}
        </div>

        <div className="bg-[#1a365d] text-white rounded-2xl p-8 md:p-12 text-center flex flex-col items-center">
          <h3 className="text-2xl md:text-3xl font-bold mb-4">Prêt à booster votre score ?</h3>
          <p className="mb-8 text-gray-300 max-w-2xl">
            Nous proposons des sessions de cours particuliers, des tests blancs corrigés et des astuces méthodologiques pour déjouer les pièges de l'examen.
          </p>
          <Link to="/contact" className="bg-[#eab308] text-[#1a365d] px-8 py-4 text-[13px] font-bold uppercase tracking-[0.15em] hover:bg-white transition-colors duration-300">
            S'inscrire à la préparation
          </Link>
        </div>
      </section>
    </div>
  );
}