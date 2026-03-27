import { Link } from "react-router-dom";
import { CheckCircle2, MapPin, FileText, Plane } from "lucide-react";

export default function ConseilPage() {
  const steps = [
    { icon: <MapPin size={32} />, title: "1. Orientation & Choix", desc: "Entretien personnalisé pour définir votre projet, votre budget et cibler les meilleures universités pour votre profil." },
    { icon: <FileText size={32} />, title: "2. Montage du Dossier", desc: "Aide à la rédaction des lettres de motivation (Personal Statement), traduction et optimisation de votre CV." },
    { icon: <CheckCircle2 size={32} />, title: "3. Admission & Visa", desc: "Soumission des candidatures, suivi avec les universités et accompagnement complet pour l'obtention de votre visa étudiant." },
    { icon: <Plane size={32} />, title: "4. Départ & Installation", desc: "Recherche de logement, réservation des vols et conseils pour une intégration réussie dans votre nouveau pays." }
  ];

  return (
    <div className="pt-24 min-h-screen bg-white font-sans">
      {/* HERO SECTION */}
      <section className="bg-[#1a365d] text-white py-20 px-6 text-center">
        <h1 className="text-4xl md:text-5xl font-black uppercase tracking-tight mb-6">
          Conseil et <span className="text-[#eab308]">Accompagnement</span>
        </h1>
        <p className="text-lg text-gray-300 max-w-2xl mx-auto font-light">
          De votre première idée jusqu'à votre premier jour de cours à l'étranger, nous sommes à vos côtés à chaque étape.
        </p>
      </section>

      {/* CONTENU */}
      <section className="py-20 px-6 max-w-[1200px] mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Notre Méthode</h2>
          <p className="text-gray-600 max-w-3xl mx-auto text-lg">
            Partir étudier à l'étranger est un projet complexe qui demande de l'anticipation. Notre équipe d'experts a développé une méthodologie éprouvée pour maximiser vos chances d'admission.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, idx) => (
            <div key={idx} className="bg-gray-50 p-8 rounded-xl border-t-4 border-[#eab308] shadow-sm hover:shadow-lg transition-all text-center group">
              <div className="text-[#1a365d] flex justify-center mb-6 group-hover:scale-110 transition-transform">
                {step.icon}
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">{step.title}</h3>
              <p className="text-gray-600 text-sm leading-relaxed">{step.desc}</p>
            </div>
          ))}
        </div>

        <div className="mt-20 text-center">
          <Link to="/contact" className="bg-[#eab308] text-[#1a365d] px-8 py-4 text-[13px] font-bold uppercase tracking-[0.15em] hover:bg-[#1a365d] hover:text-white transition-colors duration-300 shadow-xl">
            Commencer mon projet
          </Link>
        </div>
      </section>
    </div>
  );
}