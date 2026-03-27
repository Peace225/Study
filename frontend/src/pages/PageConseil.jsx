import { Link } from "react-router-dom";
import { Compass, FileText, CheckCircle2, Users, GraduationCap, ArrowRight, Award, Plane } from "lucide-react";

export default function PageConseil() {
  const steps = [
    {
      id: "01",
      icon: <Users size={32} />,
      title: "Bilan d'orientation gratuit",
      description: "Lors de notre premier échange, nous analysons votre profil académique, votre niveau d'anglais, votre budget et vos ambitions professionnelles."
    },
    {
      id: "02",
      icon: <Compass size={32} />,
      title: "Stratégie et Sélection",
      description: "Votre conseiller élabore une liste sur mesure d'universités et de programmes (Plan A, Plan B) qui maximisent vos chances d'admission."
    },
    {
      id: "03",
      icon: <FileText size={32} />,
      title: "Constitution du dossier",
      description: "Nous vous accompagnons dans la rédaction de la lettre de motivation (Personal Statement), la traduction de vos relevés de notes et l'optimisation de votre CV."
    },
    {
      id: "04",
      icon: <CheckCircle2 size={32} />,
      title: "Soumission et Suivi",
      description: "Nous envoyons vos candidatures via les plateformes officielles (UCAS, Common App, etc.) et gérons les communications avec les universités."
    },
    {
      id: "05",
      icon: <Award size={32} />,
      title: "Choix final et Bourses",
      description: "À la réception de vos offres, nous vous aidons à choisir la meilleure option et à constituer vos dossiers de demande de bourses d'études."
    },
    {
      id: "06",
      icon: <Plane size={32} />,
      title: "Visa et Logement",
      description: "Notre accompagnement ne s'arrête pas à l'admission. Nous vous guidons dans vos démarches consulaires (Visa) et la recherche de votre logement étudiant."
    }
  ];

  return (
    <div className="pt-24 min-h-screen bg-gray-50 font-sans pb-20">
      
      {/* HERO SECTION */}
      <section 
        className="relative py-32 px-6 text-center bg-cover bg-center"
        style={{ backgroundImage: "url('https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=1920&auto=format&fit=crop')" }}
      >
        <div className="absolute inset-0 bg-[#1a365d]/90 backdrop-blur-[2px]" />
        <div className="relative z-10 max-w-[1000px] mx-auto text-white">
          <span className="text-[#eab308] font-bold tracking-[0.2em] uppercase text-sm mb-4 block">
            Notre Expertise
          </span>
          <h1 className="text-4xl md:text-6xl font-black uppercase tracking-tight mb-6">
            Conseil et Accompagnement
          </h1>
          <p className="text-lg md:text-xl text-gray-200 font-light max-w-2xl mx-auto">
            De la définition de votre projet jusqu'à votre arrivée sur le campus, LM Global Education vous offre un suivi personnalisé et clé en main.
          </p>
        </div>
      </section>

      {/* INTRODUCTION */}
      <section className="py-20 px-6 max-w-[1000px] mx-auto text-center">
        <h2 className="text-3xl font-bold text-[#1a365d] mb-6">Pourquoi faire appel à nos services ?</h2>
        <div className="w-24 h-1 bg-[#eab308] mx-auto mb-8"></div>
        <p className="text-gray-600 text-lg leading-relaxed">
          Postuler dans une université à l'étranger est un processus complexe et hautement compétitif. Chaque pays a son propre système éducatif, ses propres critères de sélection et ses plateformes d'admission (UCAS au Royaume-Uni, Common App aux USA, etc.). 
          <strong className="text-[#1a365d] block mt-4">
            Notre rôle est de démystifier ce processus, de vous faire gagner un temps précieux et d'optimiser votre dossier pour garantir votre admission dans l'établissement de vos rêves.
          </strong>
        </p>
      </section>

      {/* LA MÉTHODOLOGIE (Les Étapes) */}
      <section className="py-16 px-6 bg-white border-y border-gray-100">
        <div className="max-w-[1200px] mx-auto">
          <div className="text-center mb-16">
            <span className="text-[#eab308] font-bold tracking-widest uppercase text-sm mb-2 block">Notre Méthodologie</span>
            <h2 className="text-3xl font-black text-[#1a365d] uppercase tracking-tight">Un accompagnement en 6 étapes</h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {steps.map((step) => (
              <div key={step.id} className="bg-gray-50 p-8 border-t-4 border-transparent hover:border-[#eab308] hover:bg-white hover:shadow-xl transition-all duration-300 group relative overflow-hidden">
                <div className="absolute -right-4 -top-4 text-[100px] font-black text-gray-100 group-hover:text-yellow-50 transition-colors pointer-events-none z-0">
                  {step.id}
                </div>
                
                <div className="relative z-10">
                  <div className="w-16 h-16 bg-[#1a365d] text-white rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                    {step.icon}
                  </div>
                  <h3 className="text-xl font-bold text-[#1a365d] mb-4">{step.title}</h3>
                  <p className="text-gray-600 leading-relaxed text-sm">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* STATISTIQUES OU GARANTIES */}
      <section className="py-20 px-6 max-w-[1200px] mx-auto">
        <div className="grid md:grid-cols-3 gap-10 text-center">
          <div className="p-6">
            <div className="text-5xl font-black text-[#eab308] mb-4">98%</div>
            <h3 className="text-lg font-bold text-[#1a365d] uppercase tracking-wider mb-2">Taux d'admission</h3>
            <p className="text-gray-500 text-sm">De nos étudiants obtiennent une place dans l'une de leurs 3 universités favorites.</p>
          </div>
          <div className="p-6">
            <div className="text-5xl font-black text-[#eab308] mb-4">100+</div>
            <h3 className="text-lg font-bold text-[#1a365d] uppercase tracking-wider mb-2">Partenaires</h3>
            <p className="text-gray-500 text-sm">Un réseau mondial d'institutions d'excellence à travers l'Europe et l'Amérique.</p>
          </div>
          <div className="p-6">
            <div className="text-5xl font-black text-[#eab308] mb-4">1 To 1</div>
            <h3 className="text-lg font-bold text-[#1a365d] uppercase tracking-wider mb-2">Suivi dédié</h3>
            <p className="text-gray-500 text-sm">Un seul et même conseiller attitré qui connaît votre dossier sur le bout des doigts.</p>
          </div>
        </div>
      </section>

      {/* CALL TO ACTION */}
      <section className="bg-[#1a365d] py-16 text-center px-6">
        <GraduationCap size={48} className="mx-auto text-[#eab308] mb-6" />
        <h2 className="text-3xl font-black text-white uppercase tracking-tight mb-4">Prêt à lancer votre projet ?</h2>
        <p className="text-gray-300 max-w-2xl mx-auto mb-8 text-lg font-medium">
          Ne laissez pas la complexité administrative freiner vos ambitions. Réservez votre premier bilan d'orientation gratuit avec un de nos experts.
        </p>
        <Link to="/rdv" className="inline-block bg-[#eab308] text-[#1a365d] px-8 py-4 text-[13px] font-bold uppercase tracking-[0.15em] hover:bg-white transition-all shadow-xl">
          Prendre un rendez-vous gratuit
        </Link>
      </section>

    </div>
  );
}