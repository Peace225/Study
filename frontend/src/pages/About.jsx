import { useState } from "react";
import { 
  Target, 
  ShieldCheck, 
  Heart, 
  GraduationCap, 
  Globe, 
  Users, 
  ArrowRight, 
  Award, 
  HeartHandshake, 
  Lightbulb,
  Ear,
  Search,
  MessagesSquare,
  BookOpen,
  Rocket,
  CheckCircle2,
  ChevronRight
} from "lucide-react";
import { Link } from "react-router-dom";

// Import du composant Modale
import DemandeEntretienModal from "../components/DemandeEntretienModal"; 

export default function About() {
  
  // 1. Création de l'état pour contrôler l'ouverture/fermeture de la modale
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Données pour la section des Chiffres Clés
  const stats = [
    { icon: <Users size={32} />, value: "4000+", label: "Étudiants accompagnés" },
    { icon: <Globe size={32} />, value: "200+", label: "Universités partenaires" },
    { icon: <GraduationCap size={32} />, value: "15+", label: "Années d'expertise" },
    { icon: <Target size={32} />, value: "98%", label: "Taux d'admission" }
  ];

  // Données pour le processus de la section Notre Approche
  const approachSteps = [
    {
      number: "01",
      title: "ÉCOUTER",
      desc: "Comprendre vos besoins, vos contraintes et vos aspirations.",
      icon: <Ear size={26} />
    },
    {
      number: "02",
      title: "ANALYSER",
      desc: "Évaluer votre profil pour cibler les meilleures opportunités.",
      icon: <Search size={26} />
    },
    {
      number: "03",
      title: "CONSEILLER",
      desc: "Définir la stratégie sur-mesure la plus pertinente.",
      icon: <MessagesSquare size={26} />
    },
    {
      number: "04",
      title: "FORMER",
      desc: "Développer les compétences clés exigées par le marché.",
      icon: <BookOpen size={26} />
    },
    {
      number: "05",
      title: "ACCOMPAGNER",
      desc: "Assurer un suivi rigoureux jusqu'à l'aboutissement du projet.",
      icon: <Rocket size={26} />
    }
  ];

  // Données pour la section Nos Valeurs
  const values = [
    {
      icon: <Award size={48} strokeWidth={1.5} />,
      title: "EXCELLENCE",
      desc: "Nous recherchons la qualité dans nos programmes, notre accompagnement et nos services."
    },
    {
      icon: <HeartHandshake size={48} strokeWidth={1.5} />,
      title: "ENGAGEMENT",
      desc: "Nous nous investissons pleinement dans la réussite de nos apprenants et de nos partenaires."
    },
    {
      icon: <Lightbulb size={48} strokeWidth={1.5} />,
      title: "INNOVATION",
      desc: "Nous adaptons nos approches aux transformations du monde académique, professionnel et technologique."
    },
    {
      icon: <Users size={48} strokeWidth={1.5} />,
      title: "PROXIMITÉ",
      desc: "Nous privilégions une relation fondée sur l’écoute, le conseil et l’accompagnement personnalisé."
    },
    {
      icon: <Globe size={48} strokeWidth={1.5} />,
      title: "OUVERTURE",
      desc: "Nous encourageons la mobilité, les échanges et l’ouverture sur les opportunités nationales et internationales."
    }
  ];

  return (
    <div className="w-full bg-white font-sans pt-20 md:pt-24 relative">
      
      {/* ========================================================= */}
      {/* 1. HERO SECTION                                           */}
      {/* ========================================================= */}
      <section 
        className="relative min-h-[100dvh] lg:h-screen py-24 lg:py-0 w-full flex items-center overflow-hidden font-sans"
        style={{
          backgroundImage: `url('/images/team.jpg')`,
          backgroundSize: 'cover',
          backgroundPosition: '50% 0%', 
          backgroundRepeat: 'no-repeat'
        }}
      >
        <div className="absolute inset-0 bg-[#1a365d]/10 z-10"></div>
        <div className="absolute inset-0 bg-black/40 lg:bg-black/25 z-20"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 lg:from-black/60 via-black/50 lg:via-black/40 to-transparent z-30"></div>

        <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none z-0 opacity-50">
          <div className="absolute -top-[50%] -left-[10%] w-[800px] h-[800px] rounded-full bg-white/5 blur-[120px]"></div>
          <div className="absolute bottom-[-20%] right-[-10%] w-[600px] h-[600px] rounded-full bg-[#eab308]/10 blur-[100px]"></div>
        </div>

        <div className="relative z-40 max-w-7xl mx-auto px-6 md:px-16 w-full h-full flex items-center">
          <div className="max-w-4xl space-y-6 md:space-y-8 animate-in fade-in slide-in-from-left duration-1000">
            
            <div className="flex items-center space-x-4 mb-2">
              <span className="h-[2px] w-8 md:w-12 bg-[#eab308]"></span>
              <span className="text-[#eab308] text-[10px] md:text-xs font-black uppercase tracking-[0.5em]">
                Qui sommes-nous ?
              </span>
            </div>

            <h1 className="text-white text-3xl sm:text-4xl md:text-5xl lg:text-[60px] font-black uppercase tracking-tighter leading-[1.15] md:leading-[1.1] drop-shadow-2xl">
              Notre expertise au service de vos ambitions
            </h1>
            
            <div className="border-l-[3px] border-[#eab308] pl-6 md:pl-8 py-2 space-y-4">
              <p className="text-white/95 text-base sm:text-lg md:text-xl font-normal max-w-2xl leading-relaxed">
                Nous sommes une structure spécialisée dans l’orientation, la formation et l’accompagnement académique et professionnel.
              </p>
              <p className="text-white/95 text-base sm:text-lg md:text-xl font-normal max-w-2xl leading-relaxed">
                Notre mission est d’accompagner chaque personne et chaque organisation dans le développement de ses compétences et la réalisation de ses projets.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 pt-4 md:pt-6 w-full">
              <Link
                to="/universites"
                className="w-full sm:w-auto bg-[#1a365d] text-white px-8 md:px-10 py-4 text-xs font-bold uppercase tracking-widest hover:bg-[#eab308] hover:text-[#1a365d] transition-all duration-300 shadow-2xl text-center"
              >
                Rechercher une formation
              </Link>

              <Link
                to="/services"
                className="w-full sm:w-auto bg-white text-gray-900 px-8 md:px-10 py-4 text-xs font-bold uppercase tracking-widest hover:bg-[#eab308] hover:text-[#1a365d] transition-all duration-300 shadow-2xl text-center"
              >
                Nos services
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================= */}
      {/* 2. NOTRE MISSION                                          */}
      {/* ========================================================= */}
      <section className="max-w-7xl mx-auto px-6 py-16 md:py-24 lg:py-32">
        <div className="flex flex-col lg:flex-row gap-10 lg:gap-24 items-center">
          
          <div className="w-full lg:w-5/12 relative">
            <div className="absolute -inset-4 border-2 border-[#eab308] translate-x-4 translate-y-4 rounded-sm z-0 hidden md:block"></div>
            <div className="relative z-10 w-full aspect-[4/5] bg-gray-100 flex items-center justify-center shadow-2xl overflow-hidden group">
              <img 
                src="/images/mission.jpg" 
                alt="Notre Mission" 
                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                onError={(e) => { e.currentTarget.style.display = 'none'; }}
              />
              <div className="absolute inset-0 flex items-center justify-center text-gray-300">
                <Globe size={80} strokeWidth={1} />
              </div>
            </div>
          </div>

          <div className="w-full lg:w-7/12 flex flex-col justify-center">
            <h2 className="text-2xl md:text-3xl lg:text-[36px] font-black uppercase text-[#1a365d] tracking-tight mb-6 md:mb-8">
              NOTRE MISSION
            </h2>
            
            <div className="space-y-6 text-[15px] md:text-[17px] font-normal leading-[1.8] text-gray-700">
              <p className="text-lg md:text-2xl font-bold text-gray-900 leading-snug border-l-4 border-[#eab308] pl-4 md:pl-6 py-3 bg-gray-50/50">
                Accompagner, former et révéler les talents.
              </p>
              
              <p>
                Nous croyons fermement que chaque profil est unique et regorge d'un potentiel qui ne demande qu'à être valorisé. C'est pourquoi nous plaçons l’humain au cœur de notre démarche stratégique. 
              </p>

              <p>
                Notre approche sur-mesure vise à permettre à chacun de mieux construire son parcours, de développer des compétences solides et de préparer son avenir avec une confiance absolue. Qu'il s'agisse de choisir la bonne filière, de s'intégrer dans une nouvelle culture académique ou de franchir un cap professionnel, nous sommes présents à chaque étape décisive.
              </p>

              <p>
                Au-delà de la simple orientation, nous créons un véritable pont entre vos aspirations personnelles et les exigences réelles du monde académique et professionnel d'aujourd'hui, afin de transformer vos ambitions en réussites concrètes.
              </p>
            </div>
          </div>

        </div>
      </section>

      {/* ========================================================= */}
      {/* 3. NOTRE VISION                                           */}
      {/* ========================================================= */}
      <section className="bg-gray-50 py-16 md:py-24 lg:py-32 border-y border-gray-100">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col lg:flex-row-reverse gap-10 lg:gap-24 items-center">
            
            <div className="w-full lg:w-5/12 relative">
              <div className="absolute -inset-4 border-2 border-[#1a365d] -translate-x-4 translate-y-4 rounded-sm z-0 hidden md:block opacity-20"></div>
              <div className="relative z-10 w-full aspect-[4/5] bg-white flex items-center justify-center shadow-2xl overflow-hidden group border border-gray-100">
                <img 
                  src="/images/vision.jpg" 
                  alt="Notre Vision" 
                  className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                  onError={(e) => { e.currentTarget.style.display = 'none'; }}
                />
                <div className="absolute inset-0 flex items-center justify-center text-[#1a365d]/20">
                  <Target size={80} strokeWidth={1} />
                </div>
              </div>
            </div>

            <div className="w-full lg:w-7/12 flex flex-col justify-center mt-8 lg:mt-0">
              <h2 className="text-2xl md:text-3xl lg:text-[36px] font-black uppercase text-[#1a365d] tracking-tight mb-6 md:mb-8">
                NOTRE VISION
              </h2>
              
              <div className="space-y-6 text-[15px] md:text-[17px] font-normal leading-[1.8] text-gray-700">
                <p className="text-lg md:text-2xl font-bold text-gray-900 leading-snug border-l-4 border-[#eab308] pl-4 md:pl-6 py-3 bg-white shadow-sm">
                  Devenir une référence dans l’accompagnement académique et professionnel.
                </p>

                <p>
                  En proposant des formations de qualité, accessibles et innovantes, nous nous engageons à répondre avec précision aux évolutions constantes des métiers et aux besoins réels des organisations.
                </p>

                <p>
                  Notre ambition est d'édifier un modèle d'apprentissage d'excellence où l'agilité pédagogique rencontre les exigences du marché mondial, garantissant ainsi à chaque apprenant une valeur ajoutée pérenne.
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ========================================================= */}
      {/* 4. FORMATION ACADÉMIQUE                                   */}
      {/* ========================================================= */}
      <section className="max-w-7xl mx-auto px-6 py-16 md:py-24 lg:py-32">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-2xl md:text-3xl lg:text-[34px] font-black uppercase text-[#1a365d] tracking-tight mb-4 md:mb-6">
            FORMATION ACADÉMIQUE
          </h2>
          <div className="h-[3px] w-16 md:w-20 bg-[#eab308] mx-auto mb-6 md:mb-8"></div>
          
          <div className="max-w-4xl mx-auto">
            <p className="text-xl md:text-2xl font-serif italic text-[#eab308] mb-8 font-medium">
              « Construire son parcours. Préparer sa réussite. »
            </p>
            <div className="space-y-4 text-base md:text-lg text-gray-700 leading-relaxed">
              <p>
                Nous accompagnons les élèves, étudiants et jeunes diplômés dans la construction de leur parcours académique, de l’orientation jusqu’à l’intégration dans leur établissement.
              </p>
              <p className="font-medium text-[#1a365d]">
                Notre accompagnement s’adresse aux étudiants souhaitant poursuivre leurs études en Côte d’Ivoire ou à l’international.
              </p>
            </div>
          </div>
        </div>

        {/* Bloc Orientation Académique */}
        <div className="bg-white border border-gray-100 shadow-[0_15px_50px_-12px_rgba(26,54,93,0.1)] rounded-sm overflow-hidden relative">
          <div className="absolute top-0 left-0 w-2 h-full bg-[#eab308]"></div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2">
            {/* Colonne Gauche : Intro + Liste 1 */}
            <div className="p-8 md:p-12 border-b lg:border-b-0 lg:border-r border-gray-100">
              <div className="flex items-center space-x-4 mb-4">
                <span className="flex items-center justify-center w-10 h-10 bg-[#1a365d] text-white font-black text-xl rounded-sm shadow-md">
                  1
                </span>
                <h3 className="text-xl md:text-2xl font-black uppercase text-[#1a365d] tracking-tight">
                  ORIENTATION ACADÉMIQUE
                </h3>
              </div>
              
              <h4 className="text-lg md:text-xl font-bold text-gray-800 mb-6 border-l-4 border-[#eab308] pl-4">
                Trouver la bonne formation, dans le bon établissement
              </h4>
              
              <p className="text-gray-700 mb-6 leading-relaxed">
                Une orientation réussie commence par une bonne connaissance de son profil, de ses ambitions et des possibilités de formation. Nous accompagnons chaque étudiant dans l’identification d’un parcours cohérent avec :
              </p>

              <ul className="space-y-3">
                {[
                  "son niveau académique ;",
                  "ses résultats scolaires ;",
                  "ses centres d’intérêt ;",
                  "ses aptitudes et compétences ;",
                  "son projet professionnel ;",
                  "ses objectifs de carrière ;",
                  "ses possibilités de financement."
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start group">
                    <CheckCircle2 className="w-5 h-5 text-[#eab308] mr-3 shrink-0 mt-0.5 group-hover:scale-110 transition-transform" />
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Colonne Droite : Liste 2 + CTA */}
            <div className="p-8 md:p-12 bg-gray-50 flex flex-col h-full justify-between relative overflow-hidden">
              <div className="absolute right-0 top-0 w-48 h-48 bg-[#1a365d]/5 rounded-full blur-3xl pointer-events-none"></div>
              
              <div className="relative z-10 mb-8">
                <h4 className="text-[15px] md:text-base font-black text-[#1a365d] mb-6 uppercase tracking-widest">
                  Notre accompagnement comprend :
                </h4>
                
                <ul className="space-y-4">
                  {[
                    "Entretien individuel d’orientation ;",
                    "Analyse du profil académique ;",
                    "Identification des filières adaptées ;",
                    "Recherche des établissements ;",
                    "Élaboration d’une stratégie de candidature ;",
                    "Construction du projet académique."
                  ].map((item, idx) => (
                    <li key={idx} className="flex items-start bg-white p-3 rounded-sm shadow-sm border border-gray-100 hover:border-[#eab308]/50 transition-colors">
                      <ChevronRight className="w-5 h-5 text-[#1a365d] mr-2 shrink-0 mt-0.5" />
                      <span className="text-gray-800 font-medium text-[15px]">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="relative z-10 mt-auto pt-6 border-t border-gray-200">
                {/* 2. Bouton pour ouvrir la modale */}
                <button 
                  onClick={() => setIsModalOpen(true)}
                  className="w-full inline-flex justify-center items-center bg-[#1a365d] text-white px-8 py-4 text-xs md:text-sm font-bold uppercase tracking-widest hover:bg-[#eab308] hover:text-[#1a365d] transition-all duration-300 shadow-lg group"
                >
                  Demander un entretien 
                  <ArrowRight size={16} className="ml-3 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================= */}
      {/* 5. CHIFFRES CLÉS                                          */}
      {/* ========================================================= */}
      <section className="w-full bg-[#1a365d] py-16 md:py-20 relative">
        <div className="absolute inset-0 opacity-[0.02] bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] pointer-events-none"></div>
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-y-12 gap-x-6 md:gap-6 text-center">
            {stats.map((stat, idx) => (
              <div key={idx} className="flex flex-col items-center group">
                <div className="text-[#eab308] mb-3 md:mb-4 transition-transform duration-500 group-hover:-translate-y-2">
                  {stat.icon}
                </div>
                <span className="text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tighter mb-1 md:mb-2">
                  {stat.value}
                </span>
                <span className="text-[11px] sm:text-[13px] font-bold uppercase tracking-widest text-white/60">
                  {stat.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ========================================================= */}
      {/* 6. NOS VALEURS                                            */}
      {/* ========================================================= */}
      <section className="max-w-7xl mx-auto px-6 py-16 md:py-24 lg:py-32 bg-[#fafafa]">
        
        <div className="text-center mb-12 md:mb-20">
          <h2 className="text-2xl md:text-3xl lg:text-[34px] font-black uppercase text-[#1a365d] tracking-tight mb-4 md:mb-6">
            NOS VALEURS
          </h2>
          <div className="h-[3px] w-16 md:w-20 bg-[#eab308] mx-auto opacity-90"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {values.map((val, idx) => (
            <div 
              key={idx} 
              className="group relative bg-white p-8 md:p-10 flex flex-col items-center text-center transition-all duration-700 ease-out hover:-translate-y-2 lg:hover:-translate-y-4 hover:shadow-[0_40px_80px_-20px_rgba(26,54,93,0.15)] border border-gray-100 rounded-sm"
            >
              <div className="absolute top-0 left-0 w-full h-[3px] bg-[#eab308] scale-x-0 group-hover:scale-x-100 transition-transform duration-700 ease-out origin-left"></div>

              <div className="text-[#1a365d] mb-5 md:mb-6 transition-all duration-700 group-hover:scale-110 group-hover:text-[#eab308]">
                {val.icon}
              </div>
              
              <h3 className="text-[15px] md:text-[16px] font-black uppercase tracking-[0.1em] text-gray-900 mb-3 md:mb-4">
                {val.title}
              </h3>
              
              <p className="text-[14px] md:text-[15px] font-normal leading-relaxed text-gray-700 flex-grow">
                {val.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* ========================================================= */}
      {/* 7. NOTRE APPROCHE                                         */}
      {/* ========================================================= */}
      <section className="max-w-7xl mx-auto px-6 py-16 md:py-24 lg:py-32">
        <div className="text-center max-w-3xl mx-auto mb-16 md:mb-20">
          <h2 className="text-2xl md:text-3xl lg:text-[36px] font-black uppercase text-[#1a365d] tracking-tight mb-4 md:mb-6">
            NOTRE APPROCHE
          </h2>
          <div className="h-[3px] w-16 md:w-20 bg-[#eab308] mx-auto mb-6 md:mb-8"></div>
          <p className="text-base sm:text-lg md:text-xl font-normal text-gray-800 leading-relaxed">
            Chaque parcours est unique. C’est pourquoi nous privilégions une approche fondée sur <strong className="font-bold text-[#1a365d]">l’écoute, l’analyse des besoins et la personnalisation</strong>.
          </p>
        </div>

        {/* Processus en 5 étapes */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 md:gap-6 mb-16 md:mb-20">
          {approachSteps.map((step, idx) => (
            <div 
              key={idx}
              className="relative bg-white border border-gray-200 p-6 md:p-8 flex flex-col items-center text-center shadow-sm hover:shadow-xl transition-all duration-500 group rounded-sm hover:-translate-y-1 lg:hover:-translate-y-2"
            >
              <div className="text-[10px] md:text-xs font-black text-[#1a365d] tracking-widest mb-3 bg-[#eab308]/20 px-3 py-1 rounded-full">
                ÉTAPE {step.number}
              </div>
              <div className="text-[#1a365d] my-3 md:my-4 group-hover:scale-110 group-hover:text-[#eab308] transition-all duration-300">
                {step.icon}
              </div>
              <h3 className="text-sm md:text-base font-black text-gray-900 tracking-wider uppercase mb-2 md:mb-3">
                {step.title}
              </h3>
              
              <p className="text-[13px] md:text-sm font-normal text-gray-700 leading-relaxed">
                {step.desc}
              </p>
            </div>
          ))}
        </div>

        {/* Objectif & Action Box */}
        <div className="bg-[#1a365d] text-white p-8 md:p-14 rounded-sm shadow-2xl relative overflow-hidden">
          <div className="absolute right-0 top-0 w-96 h-96 bg-[#eab308]/10 rounded-full blur-3xl pointer-events-none"></div>
          
          <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-10">
            <div className="max-w-2xl text-center lg:text-left">
              <span className="text-[#eab308] text-[10px] md:text-xs font-bold uppercase tracking-[0.3em] block mb-2">
                Notre Objectif
              </span>
              <p className="text-lg md:text-2xl font-normal leading-relaxed">
                Permettre à chaque apprenant, professionnel ou organisation de disposer des outils et compétences nécessaires pour <strong className="font-bold text-[#eab308]">avancer durablement</strong>.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 w-full lg:w-auto shrink-0">
              
              {/* 3. Bouton pour ouvrir la modale */}
              <button 
                onClick={() => setIsModalOpen(true)}
                className="w-full sm:w-auto bg-[#eab308] text-[#1a365d] px-6 md:px-8 py-4 text-[11px] md:text-xs font-black uppercase tracking-widest hover:bg-white hover:text-[#1a365d] transition-all duration-300 text-center shadow-lg"
              >
                Demander un entretien
              </button>

              <Link 
                to="/formations"
                className="w-full sm:w-auto border border-white/30 text-white px-6 md:px-8 py-4 text-[11px] md:text-xs font-black uppercase tracking-widest hover:bg-white hover:text-[#1a365d] transition-all duration-300 text-center"
              >
                Découvrir nos formations
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Ajout du composant Modale tout en bas de la page */}
      <DemandeEntretienModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
      />

    </div>
  );
}