import { useState } from "react";
import { Link } from "react-router-dom";
import { 
  MapPin, 
  FileText, 
  CheckCircle2, 
  Plane, 
  ShieldCheck, 
  Award, 
  Users, 
  ArrowRight, 
  Headphones, 
  Sparkles, 
  HelpCircle,
  ChevronRight,
  BookOpenCheck,
  Compass
} from "lucide-react";

// Import du composant Modale de prise de rendez-vous
import DemandeEntretienModal from "../components/DemandeEntretienModal";

export default function ConseilPage() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Étapes de la méthode
  const steps = [
    { 
      number: "01",
      icon: <Compass size={30} />, 
      title: "Conseil & Orientation", 
      desc: "Bilan complet de votre profil académique, analyse de la solvabilité du garant et sélection ciblée des meilleures formations." 
    },
    { 
      number: "02",
      icon: <FileText size={30} />, 
      title: "Choix & Candidatures", 
      desc: "Optimisation de votre CV, rédaction sur-mesure des lettres de motivation et soumission de vos dossiers aux établissements." 
    },
    { 
      number: "03",
      icon: <CheckCircle2 size={30} />, 
      title: "Suivi & Procédure Visa", 
      desc: "Suivi en direct de vos admissions. Préparation intensive aux entretiens consulaires et constitution de votre dossier de visa." 
    },
    { 
      number: "04",
      icon: <Plane size={30} />, 
      title: "Départ & Mobilité", 
      desc: "Recherche de logement étudiant garanti, réservation des billets d'avion et accompagnement pour votre installation." 
    }
  ];

  // Domaines d'expertise
  const services = [
    {
      title: "Audit de Solvabilité & Garant",
      desc: "Évaluation préalable de votre dossier financier afin de répondre strictement aux exigences consulaires (Campus France, IRCC Canada, CAS UK, etc.).",
      icon: <ShieldCheck className="w-8 h-8 text-[#eab308]" />
    },
    {
      title: "Coaching aux Entretiens",
      desc: "Simulations réelles d'entretiens pédagogiques et consulaires pour vous exprimer avec aisance, clarté et conviction face aux officiels.",
      icon: <Headphones className="w-8 h-8 text-[#eab308]" />
    },
    {
      title: "Traduction & Équivalence",
      desc: "Prise en charge de la traduction officielle de vos diplômes et relevés de notes en anglais ou dans la langue de destination.",
      icon: <BookOpenCheck className="w-8 h-8 text-[#eab308]" />
    },
    {
      title: "Recherche de Logement",
      desc: "Accès à notre réseau de résidences universitaires partenaires pour réserver votre hébergement avant même votre départ.",
      icon: <MapPin className="w-8 h-8 text-[#eab308]" />
    }
  ];

  // Foire aux questions
  const faqs = [
    {
      q: "Quand faut-il commencer les démarches pour étudier à l'étranger ?",
      a: "Il est fortement recommandé d'anticiper entre 6 et 12 mois avant la rentrée académique visée (ex: dès septembre/octobre pour une rentrée en septembre suivant) pour optimiser les chances d'admission et l'obtention des bourses."
    },
    {
      q: "Garantissez-vous l'obtention de l'admission et du visa ?",
      a: "Bien que la décision finale appartienne exclusivement aux universités et aux consulats, notre taux de réussite dépasse 98% grâce à notre audit rigoureux en amont. Si un dossier présente un risque, nous vous réorientons avant tout engagement."
    },
    {
      q: "Proposez-vous un accompagnement pour les garants financiers ?",
      a: "Oui, nous effectuons un diagnostic approfondi de la capacité financière de votre garant (bulletins de paie, relevés bancaires, attestations) et formulons des recommandations stratégiques pour respecter les seuils consulaires."
    }
  ];

  return (
    <div className="w-full bg-white font-sans pt-20 md:pt-24 relative">

      {/* ========================================================= */}
      {/* 1. HERO SECTION                                           */}
      {/* ========================================================= */}
      <section className="relative bg-[#1a365d] text-white py-20 lg:py-28 px-6 overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#eab308]/10 rounded-full blur-3xl pointer-events-none"></div>
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-white/5 rounded-full blur-2xl pointer-events-none"></div>

        <div className="max-w-7xl mx-auto relative z-10 text-center">
          <div className="inline-flex items-center space-x-2 bg-white/10 px-4 py-2 rounded-full border border-white/15 mb-6">
            <Sparkles className="w-4 h-4 text-[#eab308]" />
            <span className="text-xs uppercase font-bold tracking-widest text-[#eab308]">
              Expertise & Orientation
            </span>
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black uppercase tracking-tight leading-tight mb-6">
            Conseil & <span className="text-[#eab308]">Accompagnement</span>
          </h1>

          {/* VOTRE TEXTE INTÉGRÉ ICI */}
          <p className="text-base sm:text-lg md:text-xl text-gray-200 max-w-3xl mx-auto font-light leading-relaxed mb-8">
            Un accompagnement personnalisé pour définir son projet d’études, choisir une formation et construire un parcours cohérent.
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-4 max-w-md mx-auto">
            <button
              onClick={() => setIsModalOpen(true)}
              className="bg-[#eab308] text-[#1a365d] px-8 py-4 text-xs font-bold uppercase tracking-widest hover:bg-white transition-all duration-300 shadow-xl"
            >
              Prendre un RDV
            </button>
            <Link
              to="/destinations"
              className="border border-white/30 bg-white/5 text-white px-8 py-4 text-xs font-bold uppercase tracking-widest hover:bg-white hover:text-[#1a365d] transition-all duration-300"
            >
              Découvrir les Pays
            </Link>
          </div>
        </div>
      </section>

      {/* ========================================================= */}
      {/* 2. CHIFFRES CLÉS & ENGAGEMENT                             */}
      {/* ========================================================= */}
      <section className="bg-gray-50 border-b border-gray-100 py-10 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          <div>
            <div className="text-2xl sm:text-3xl font-black text-[#1a365d]">98%</div>
            <div className="text-xs font-bold uppercase tracking-wider text-gray-500 mt-1">Taux d'Admission</div>
          </div>
          <div>
            <div className="text-2xl sm:text-3xl font-black text-[#1a365d]">4000+</div>
            <div className="text-xs font-bold uppercase tracking-wider text-gray-500 mt-1">Étudiants Accompagnés</div>
          </div>
          <div>
            <div className="text-2xl sm:text-3xl font-black text-[#1a365d]">200+</div>
            <div className="text-xs font-bold uppercase tracking-wider text-gray-500 mt-1">Universités Partenaires</div>
          </div>
          <div>
            <div className="text-2xl sm:text-3xl font-black text-[#1a365d]">100%</div>
            <div className="text-xs font-bold uppercase tracking-wider text-gray-500 mt-1">Suivi Personnalisé</div>
          </div>
        </div>
      </section>

      {/* ========================================================= */}
      {/* 3. NOTRE MÉTHODE EN 4 ÉTAPES                              */}
      {/* ========================================================= */}
      <section className="py-16 md:py-24 px-6 max-w-7xl mx-auto">
        <div className="text-center mb-16">
          {/* VOTRE TITRE INTÉGRÉ ICI */}
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-black uppercase text-[#1a365d] tracking-tight mb-4">
            Accompagnement aux études à l’international
          </h2>
          <div className="h-1 w-20 bg-[#eab308] mx-auto mb-6"></div>
          
          {/* VOTRE TEXTE DE SOUS-TITRE INTÉGRÉ ICI */}
          <p className="text-gray-600 max-w-3xl mx-auto text-base md:text-lg leading-relaxed font-medium">
            Conseil, choix des établissements, préparation des candidatures et accompagnement dans les différentes étapes du projet de mobilité.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, idx) => (
            <div 
              key={idx} 
              className="bg-white p-8 border border-gray-100 shadow-lg rounded-sm relative flex flex-col justify-between hover:-translate-y-2 transition-all duration-300 group border-t-4 border-t-[#eab308]"
            >
              <div>
                <div className="flex items-center justify-between mb-6">
                  <span className="text-2xl font-black text-[#eab308] bg-[#1a365d] px-3 py-1 rounded-sm">
                    {step.number}
                  </span>
                  <div className="text-[#1a365d] group-hover:scale-110 transition-transform">
                    {step.icon}
                  </div>
                </div>
                <h3 className="text-lg font-black text-gray-900 uppercase tracking-tight mb-3">
                  {step.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {step.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ========================================================= */}
      {/* 4. NOS SERVICES DÉTAILLÉS                                 */}
      {/* ========================================================= */}
      <section className="bg-gray-50 py-16 md:py-24 px-6 border-y border-gray-200">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-black uppercase text-[#1a365d] tracking-tight mb-4">
              Ce Que Comprend Notre Expertise
            </h2>
            <div className="h-1 w-20 bg-[#eab308] mx-auto mb-6"></div>
            <p className="text-gray-600 max-w-2xl mx-auto text-base">
              Une gamme de services professionnels conçue pour éliminer tout risque d'erreur dans votre dossier.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {services.map((srv, idx) => (
              <div key={idx} className="bg-white p-8 rounded-sm shadow-sm border border-gray-100 flex items-start space-x-6 hover:shadow-md transition-shadow">
                <div className="shrink-0 p-3 bg-gray-50 rounded-sm">
                  {srv.icon}
                </div>
                <div>
                  <h3 className="text-lg font-bold text-[#1a365d] uppercase mb-2">
                    {srv.title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {srv.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ========================================================= */}
      {/* 5. FAQ (QUESTIONS FREQUENTES)                             */}
      {/* ========================================================= */}
      <section className="py-16 md:py-24 px-6 max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 text-[#1a365d] mb-2 font-bold uppercase text-xs tracking-widest">
            <HelpCircle size={18} className="text-[#eab308]" />
            <span>Questions Fréquentes</span>
          </div>
          <h2 className="text-2xl md:text-3xl font-black uppercase text-[#1a365d]">
            Vous Avez des Questions ?
          </h2>
        </div>

        <div className="space-y-6">
          {faqs.map((faq, idx) => (
            <div key={idx} className="bg-white p-6 md:p-8 border border-gray-200 rounded-sm shadow-sm">
              <h3 className="text-base md:text-lg font-bold text-[#1a365d] mb-3 flex items-start">
                <ChevronRight className="w-5 h-5 text-[#eab308] mr-2 shrink-0 mt-0.5" />
                {faq.q}
              </h3>
              <p className="text-gray-600 text-sm md:text-base leading-relaxed pl-7">
                {faq.a}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* ========================================================= */}
      {/* 6. CALL TO ACTION BANNER                                  */}
      {/* ========================================================= */}
      <section className="bg-[#1a365d] text-white py-16 px-6 relative overflow-hidden">
        <div className="max-w-5xl mx-auto text-center relative z-10 space-y-6">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-black uppercase tracking-tight">
            Prêt à Concrétiser Votre Projet d'Études ?
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto text-base sm:text-lg font-light">
            Rencontrez nos conseillers orientation pour une évaluation personnalisée de vos chances d'admission.
          </p>
          <div className="pt-4">
            <button
              onClick={() => setIsModalOpen(true)}
              className="bg-[#eab308] text-[#1a365d] px-10 py-4 text-xs md:text-sm font-bold uppercase tracking-widest hover:bg-white transition-all duration-300 shadow-2xl"
            >
              Demander Mon Entretien
            </button>
          </div>
        </div>
      </section>

      {/* ========================================================= */}
      {/* MODALE DE PRISE DE RENDEZ-VOUS                            */}
      {/* ========================================================= */}
      <DemandeEntretienModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
      />

    </div>
  );
}