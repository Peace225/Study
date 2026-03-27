import { Target, ShieldCheck, Heart, GraduationCap, Globe, Users, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

export default function About() {
  
  // Données pour la section des Chiffres Clés
  const stats = [
    { icon: <Users size={32} />, value: "4000+", label: "Étudiants accompagnés" },
    { icon: <Globe size={32} />, value: "200+", label: "Universités partenaires" },
    { icon: <GraduationCap size={32} />, value: "15+", label: "Années d'expertise" },
    { icon: <Target size={32} />, value: "98%", label: "Taux d'admission" }
  ];

  // Données pour la section des Valeurs
  const values = [
    {
      icon: <ShieldCheck size={48} strokeWidth={1.5} />,
      title: "INTÉGRITÉ & ÉTHIQUE",
      desc: "Nous défendons vos intérêts avec une transparence totale. Notre indépendance nous permet de vous orienter vers les choix les plus judicieux pour votre avenir."
    },
    {
      icon: <Target size={48} strokeWidth={1.5} />,
      title: "EXCELLENCE ACADÉMIQUE",
      desc: "Nous visons les sommets. Notre équipe d'experts est formée pour propulser vos dossiers vers les universités du Top 50 mondial."
    },
    {
      icon: <Heart size={48} strokeWidth={1.5} />,
      title: "ACCOMPAGNEMENT HUMAIN",
      desc: "Chaque étudiant est unique. Nous offrons un suivi sur-mesure, de la première réflexion jusqu'à votre installation à l'étranger."
    }
  ];

  return (
    <div className="w-full bg-white font-sans pt-24"> {/* pt-24 pour compenser la Navbar fixe */}
      
      {/* ========================================================= */}
      {/* 1. HERO SECTION (Bannière d'en-tête)                        */}
      {/* ========================================================= */}
    <section 
      className="relative h-screen w-full items-center overflow-hidden font-sans"
      style={{
        backgroundImage: `url('/images/team.jpg')`,
        backgroundSize: 'cover',
        // 👇 ICI : Juste deux valeurs. 50% (centré) et 0% (collé au plafond)
        backgroundPosition: '50% 0%', 
        backgroundRepeat: 'no-repeat'
      }}
    >
      {/* Overlays pour le contraste et le style pro */}
      <div className="absolute inset-0 bg-[#1a365d]/10 z-10"></div> {/* Overlay bleu marine profond */}
      <div className="absolute inset-0 bg-black/25 z-20"></div> {/* Overlay d'assombrissement */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/50 via-black/20 to-transparent z-30"></div> {/* Dégradé d'assombrissement gauche */}

      {/* Cercles de lumière en arrière-plan (maintenus mais plus subtils) */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none z-0 opacity-50">
        <div className="absolute -top-[50%] -left-[10%] w-[800px] h-[800px] rounded-full bg-white/5 blur-[120px]"></div>
        <div className="absolute bottom-[-20%] right-[-10%] w-[600px] h-[600px] rounded-full bg-[#eab308]/10 blur-[100px]"></div>
      </div>

      {/* CONTENU TEXTUEL DU HERO */}
      <div className="relative z-40 max-w-7xl mx-auto px-6 md:px-16 w-full h-full flex items-center">
        <div className="max-w-4xl space-y-10 animate-in fade-in slide-in-from-left duration-1000">
          {/* Surtitre existant avec touches de Jaune Or */}
          <div className="flex items-center space-x-4 mb-2">
            <span className="h-[2px] w-12 bg-[#eab308]"></span>
            <span className="text-[#eab308] text-[10px] font-black uppercase tracking-[0.5em]">
              Expertise & Ambition Académique
            </span>
          </div>

          <h1 className="text-white text-5xl md:text-7xl lg:text-[80px] font-black uppercase tracking-tighter leading-[0.9] drop-shadow-2xl">
            QUI SOMMES-NOUS ?
          </h1>
          
          {/* Paragraphe avec bordure gauche Jaune Or */}
          <p className="text-white/90 text-lg md:text-xl font-light max-w-2xl leading-relaxed border-l-[3px] border-[#eab308] pl-8 py-2">
            Plus qu'une agence de conseil, <strong className="text-white font-bold">LM Global Education</strong> est le tremplin vers votre réussite académique internationale.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 pt-4">
            {/* Bouton Principal : Bleu Marine qui devient Jaune Or au survol */}
            <Link
              to="/universites"
              className="bg-[#1a365d] text-white px-10 py-4 text-xs font-bold uppercase tracking-widest hover:bg-[#eab308] hover:text-[#1a365d] transition-all duration-300 shadow-2xl text-center"
            >
              Rechercher une formation
            </Link>

            {/* Bouton Secondaire : Blanc */}
            <Link
              to="/services"
              className="bg-white text-gray-900 px-10 py-4 text-xs font-bold uppercase tracking-widest hover:bg-[#eab308] hover:text-[#1a365d] transition-all duration-300 shadow-2xl text-center"
            >
              Nos services d'accompagnement
            </Link>
          </div>
        </div>
      </div>
    </section>

      {/* ========================================================= */}
      {/* 2. NOTRE HISTOIRE ET NOTRE MISSION                          */}
      {/* ========================================================= */}
      <section className="max-w-7xl mx-auto px-6 py-24 md:py-32">
        <div className="flex flex-col lg:flex-row gap-16 lg:gap-24 items-center">
          
          {/* Colonne Gauche : Image ou Bloc visuel */}
          <div className="w-full lg:w-5/12 relative">
            {/* Cadre décoratif Jaune Or en arrière-plan */}
            <div className="absolute -inset-4 border-2 border-[#eab308] translate-x-4 translate-y-4 rounded-sm z-0 hidden md:block"></div>
            {/* Espace pour une image de l'équipe ou du cabinet */}
            <div className="relative z-10 w-full aspect-[4/5] bg-gray-100 flex items-center justify-center shadow-2xl overflow-hidden group">
              {/* Remplacer le src par une vraie image de ton équipe ou cabinet */}
              <img 
                src="/images/about-office.jpg" 
                alt="L'équipe LM Global Education" 
                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                // Si tu n'as pas encore d'image, le background gris avec l'icône fera l'affaire en attendant
                onError={(e) => { e.target.style.display = 'none'; }}
              />
              <div className="absolute inset-0 flex items-center justify-center text-gray-300">
                <Globe size={80} strokeWidth={1} />
              </div>
            </div>
          </div>

          {/* Colonne Droite : Texte Éditorial */}
          <div className="w-full lg:w-7/12 flex flex-col justify-center">
            <h2 className="text-[28px] md:text-[36px] font-black uppercase text-[#1a365d] tracking-tight mb-8">
              NOTRE VOCATION : <br />
              <span className="text-gray-900">VOTRE RÉUSSITE.</span>
            </h2>
            
            <div className="space-y-6 text-[16px] md:text-[17px] font-light leading-[1.9] text-gray-600">
              <p>
                Depuis notre création, <strong className="font-bold text-gray-900">LM Global Education</strong> s'est imposé comme l'acteur de référence en France pour l'accompagnement des étudiants vers les universités étrangères les plus prestigieuses.
              </p>
              <p>
                Nos conseillers ont tous étudié ou vécu à l'étranger. Cette expérience du terrain, couplée à une expertise pointue des systèmes d'admissions internationaux (UCAS, Common App, etc.), nous permet de vous offrir un encadrement d'une précision chirurgicale.
              </p>
              <p className="border-l-4 border-[#eab308] pl-6 py-2 italic text-gray-800 font-medium bg-gray-50">
                "Notre mission n'est pas seulement de vous trouver une université, mais de trouver L'UNIVERSITÉ où vous pourrez révéler tout votre potentiel."
              </p>
            </div>
          </div>

        </div>
      </section>

      {/* ========================================================= */}
      {/* 3. CHIFFRES CLÉS (Bande Bleu Marine)                        */}
      {/* ========================================================= */}
      <section className="w-full bg-[#1a365d] py-20 relative">
        <div className="absolute inset-0 opacity-[0.02] bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] pointer-events-none"></div>
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-10 md:gap-6 text-center">
            {stats.map((stat, idx) => (
              <div key={idx} className="flex flex-col items-center group">
                <div className="text-[#eab308] mb-4 transition-transform duration-500 group-hover:-translate-y-2">
                  {stat.icon}
                </div>
                <span className="text-4xl md:text-5xl font-black text-white tracking-tighter mb-2">
                  {stat.value}
                </span>
                <span className="text-[13px] font-bold uppercase tracking-widest text-white/60">
                  {stat.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ========================================================= */}
      {/* 4. NOS VALEURS (Grille de Cartes Premium)                   */}
      {/* ========================================================= */}
      <section className="max-w-7xl mx-auto px-6 py-24 md:py-32 bg-[#fafafa]">
        
        <div className="text-center mb-20">
          <h2 className="text-[28px] md:text-[34px] font-black uppercase text-gray-900 tracking-tight mb-6">
            L'ADN DE LM GLOBAL EDUCATION
          </h2>
          <div className="h-[3px] w-20 bg-[#eab308] mx-auto opacity-90"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {values.map((val, idx) => (
            <div 
              key={idx} 
              className="group relative bg-white p-12 flex flex-col items-center text-center transition-all duration-700 ease-out hover:-translate-y-4 hover:shadow-[0_40px_80px_-20px_rgba(26,54,93,0.15)] border border-gray-100 rounded-sm"
            >
              {/* Ligne Jaune Or au survol */}
              <div className="absolute top-0 left-0 w-full h-[3px] bg-[#eab308] scale-x-0 group-hover:scale-x-100 transition-transform duration-700 ease-out origin-left"></div>

              {/* Icône Bleu Marine -> Jaune Or au survol */}
              <div className="text-[#1a365d] mb-8 transition-all duration-700 group-hover:scale-110 group-hover:text-[#eab308]">
                {val.icon}
              </div>
              
              <h3 className="text-[16px] font-black uppercase tracking-[0.1em] text-gray-900 mb-6">
                {val.title}
              </h3>
              
              <p className="text-[15px] font-light leading-[1.8] text-gray-600 flex-grow">
                {val.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* ========================================================= */}
      {/* 5. CALL TO ACTION FINAL                                     */}
      {/* ========================================================= */}
      <section className="relative max-w-7xl mx-auto px-6 pb-32 pt-20 text-center">
        
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/3 h-[1px] bg-gradient-to-r from-transparent via-gray-200 to-transparent"></div>

        <h2 className="text-[26px] md:text-[36px] font-black uppercase text-[#1a365d] tracking-tight mb-6 drop-shadow-sm">
          PRÊT À ÉCRIRE VOTRE PROPRE HISTOIRE ?
        </h2>
        <p className="text-[16px] text-gray-600 font-light mb-12 max-w-2xl mx-auto">
          Contactez nos experts dès aujourd'hui pour une première consultation d'orientation gratuite et sans engagement.
        </p>

        {/* Bouton Bleu Marine -> Jaune Or au survol */}
        <Link 
          to="/contact" 
          className="group relative inline-flex items-center justify-center bg-[#1a365d] text-white px-12 py-6 text-[13px] font-black uppercase tracking-[0.2em] overflow-hidden transition-all duration-500 hover:bg-[#eab308] hover:text-[#1a365d] hover:shadow-[0_20px_50px_rgba(234,179,8,0.35)] hover:-translate-y-1 rounded-sm"
        >
          <div className="absolute inset-0 w-1/2 h-full bg-white/20 skew-x-[-25deg] -translate-x-[150%] group-hover:translate-x-[250%] transition-transform duration-1000 ease-in-out"></div>
          
          <span className="relative z-10 flex items-center">
            RENCONTRER UN CONSEILLER
            <ArrowRight className="ml-3 w-5 h-5 opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-500 ease-out" />
          </span>
        </Link>

      </section>

    </div>
  );
}