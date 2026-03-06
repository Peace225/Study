import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Menu, X, Mail, Search, ChevronDown } from "lucide-react";
import { useAuth } from "../context/AuthContext";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [activeMobileMenu, setActiveMobileMenu] = useState(null);
  
  const { currentUser, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = async () => {
    await logout();
    navigate("/");
  };

  const navItems = [
    {
      title: "À Propos",
      path: "/about",
      dropdown: [
        { label: "Qui sommes-nous ?", path: "/about/qui-sommes-nous" },
        { label: "Nos références", path: "/about/references" },
        { label: "Témoignages", path: "/about/temoignages" },
        { label: "Nous recrutons", path: "/about/recrutement" },
      ]
    },
    {
      title: "Services",
      path: "/services",
      dropdown: [
        { label: "Conseil et accompagnement", path: "/services/conseil" },
        { label: "Les études d’élite à l’étranger", path: "/services/elite" },
        { label: "Préparer le retour en France", path: "/services/retour" },
        { label: "Passer et préparer l'IELTS", path: "/services/ielts" },
        { label: "Traductions Certifiées", path: "/services/traductions" },
        { label: "Assurance étudiante internationale", path: "/services/assurance" },
      ]
    },
    {
      title: "Destinations",
      path: "/destinations",
      dropdown: [
        { label: "Etudier au Royaume-Uni", path: "/destinations/royaume-uni" },
        { label: "Etudier en Irlande", path: "/destinations/irlande" },
        { label: "Etudier au Québec", path: "/destinations/quebec" },
        { label: "Etudier Canada (hors Québec)", path: "/destinations/canada" },
        { label: "Etudier en Espagne", path: "/destinations/espagne" },
        { label: "Etudier aux Etats-Unis", path: "/destinations/usa" },
        { label: "Etudier aux Pays-Bas", path: "/destinations/pays-bas" },
        { label: "Etudier en Australie", path: "/destinations/australie" },
        { label: "Etudier en Nouvelle-Zélande", path: "/destinations/nouvelle-zelande" },
        { label: "Toutes nos destinations", path: "/destinations/toutes" },
      ]
    },
    {
      title: "Universités",
      path: "/universites",
      dropdown: [
        { label: "Recherchez votre formation", path: "/universites/recherche" },
        { label: "Nos universités partenaires", path: "/universites/partenaires" },
        { label: "Guide des formations & diplômes", path: "/universites/guide" },
      ]
    },
    {
      title: "Événements",
      path: "/events",
      dropdown: [
        { label: "Webinaires", path: "/events/webinaires" },
        { label: "Salons Elevate by Study Experience", path: "/events/salons" },
      ]
    },
    {
      title: "Blog",
      path: "/blog",
    }
  ];

  const toggleMobileMenu = (title) => {
    if (activeMobileMenu === title) {
      setActiveMobileMenu(null);
    } else {
      setActiveMobileMenu(title);
    }
  };

  return (
    <header className="fixed w-full top-0 z-50 font-sans">
      
      {/* BARRE SUPÉRIEURE NOIRE (Touches de Jaune Or au survol) */}
      <div className="bg-[#eab308]  text-black text-[11px] uppercase font-bold tracking-widest py-2.5 px-6 hidden md:flex justify-end items-center space-x-8">
        <a href="mailto:contact@studyexperience.fr" className="flex items-center hover:text-[#2c6fce] transition-colors duration-300">
          <Mail size={14} className="mr-2" /> Contact
        </a>
        <div className="flex items-center cursor-pointer hover:text-[#2c6fce] transition-colors duration-300">
          Français <ChevronDown size={14} className="ml-1" />
        </div>
      </div>

      {/* NAVBAR PRINCIPALE */}
      <nav className="bg-white/95 backdrop-blur-md shadow-sm border-b border-gray-100">
        <div className="max-w-[1400px] mx-auto px-6">
          <div className="flex items-center h-24">
            
            {/* LOGO LM GLOBAL EDUCATION (Fixé à gauche) */}
            <Link to="/" className="flex-shrink-0 flex items-center space-x-3 group">
              <div className="bg-[#1a365d] p-2.5 rounded-full transition-transform duration-500 group-hover:rotate-12">
                <img src="/images/logo.png" alt="Logo" className="w-6 h-6 invert" /> 
              </div>
              <div className="flex flex-col justify-center pt-1">
                <span className="text-[22px] font-black tracking-tighter text-[#1a365d] uppercase leading-none">
                  LM GLOBAL
                </span>
                <span className="text-[10px] font-bold tracking-[0.25em] text-[#eab308] uppercase leading-none mt-1">
                  Education
                </span>
              </div>
            </Link>

            {/* ========================================================= */}
            {/* BLOC DE DROITE : MENU + CTA (Aérés et poussés à droite)   */}
            {/* ========================================================= */}
            {/* Ajout de ml-auto pour pousser l'ensemble complètement à droite */}
            <div className="hidden lg:flex items-center justify-end flex-1 ml-auto">
              
              {/* LES MENUS (Beaucoup d'espace xl:space-x-12 et marge droite xl:mr-16) */}
              <div className="flex items-center h-full space-x-8 xl:space-x-12 mr-10 xl:mr-16">
                {navItems.map((item, idx) => (
                  <div key={idx} className="relative group h-full flex items-center">
                    
                    <Link 
                      to={item.path} 
                      className="flex items-center text-[12.5px] font-bold uppercase tracking-[0.08em] text-gray-800 hover:text-[#1a365d] transition-colors duration-300 h-full py-8"
                    >
                      {item.title}
                      {item.dropdown && (
                        <ChevronDown size={14} className="ml-1.5 transition-transform duration-300 group-hover:-rotate-180 group-hover:text-[#eab308]" />
                      )}
                    </Link>

                    {/* Sous-menus : Bordure Jaune Or et texte Bleu Marine */}
                    {item.dropdown && (
                      <div className="absolute top-full left-0 w-72 pt-0 opacity-0 invisible translate-y-3 group-hover:opacity-100 group-hover:visible group-hover:translate-y-0 transition-all duration-300 ease-out z-50">
                        <div className="bg-white border-t-[3px] border-[#eab308] shadow-[0_20px_50px_rgba(0,0,0,0.15)] rounded-b-sm flex flex-col py-2">
                          {item.dropdown.map((sub, sIdx) => (
                            <Link 
                              key={sIdx} 
                              to={sub.path} 
                              className="px-6 py-3 text-[13px] text-gray-600 font-medium hover:bg-gray-50 hover:text-[#1a365d] hover:pl-8 transition-all duration-300 border-l-2 border-transparent hover:border-[#eab308]"
                            >
                              {sub.label}
                            </Link>
                          ))}
                        </div>
                      </div>
                    )}

                  </div>
                ))}
                
                <button className="text-gray-600 hover:text-[#1a365d] transition-colors ml-2">
                  <Search size={20} strokeWidth={2} />
                </button>
              </div>

              {/* BOUTON CTA DESKTOP (Bleu Marine -> Jaune Or) */}
              <div>
                {currentUser ? (
                  <div className="flex items-center space-x-6">
                    <Link 
                      to="/apply" 
                      className="bg-[#1a365d] text-white px-8 py-3.5 text-[12px] font-bold uppercase tracking-[0.15em] hover:bg-[#eab308] hover:text-[#1a365d] transition-all shadow-lg shadow-[#1a365d]/20"
                    >
                      Mon Dossier
                    </Link>
                    <button onClick={handleLogout} className="text-[11px] text-gray-500 hover:text-red-500 uppercase font-bold tracking-widest transition-colors">
                      Quitter
                    </button>
                  </div>
                ) : (
                  <Link 
                    to="/login" 
                    className="bg-[#1a365d] text-white px-8 py-3.5 text-[12px] font-bold uppercase tracking-[0.15em] hover:bg-[#eab308] hover:text-[#1a365d] transition-all shadow-lg shadow-[#1a365d]/20"
                  >
                    Prendre RDV
                  </Link>
                )}
              </div>
            </div>

            {/* BOUTON MENU MOBILE */}
            <div className="lg:hidden flex items-center ml-auto">
              <button onClick={() => setOpen(!open)} className="text-[#1a365d] p-2">
                {open ? <X size={32} strokeWidth={1.5} /> : <Menu size={32} strokeWidth={1.5} />}
              </button>
            </div>

          </div>
        </div>

        {/* MENU MOBILE (Accordéon) */}
        <div 
          className={`lg:hidden bg-white border-t border-gray-100 absolute w-full transition-all duration-500 ease-in-out overflow-hidden shadow-2xl ${
            open ? "max-h-screen opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <div className="flex flex-col p-6 max-h-[75vh] overflow-y-auto">
            {navItems.map((item, idx) => (
              <div key={idx} className="border-b border-gray-100 last:border-none">
                <div 
                  className="flex justify-between items-center py-4 cursor-pointer"
                  onClick={() => {
                    if (item.dropdown) {
                      toggleMobileMenu(item.title);
                    } else {
                      setOpen(false);
                      navigate(item.path);
                    }
                  }}
                >
                  <span className={`text-[13px] font-bold uppercase tracking-wider ${activeMobileMenu === item.title ? "text-[#1a365d]" : "text-gray-900"}`}>
                    {item.title}
                  </span>
                  {item.dropdown && (
                    <ChevronDown 
                      size={18} 
                      className={`transition-transform duration-300 ${activeMobileMenu === item.title ? "rotate-180 text-[#eab308]" : "text-gray-400"}`} 
                    />
                  )}
                </div>

                {item.dropdown && (
                  <div 
                    className={`overflow-hidden transition-all duration-300 ease-in-out ${
                      activeMobileMenu === item.title ? "max-h-96 opacity-100 mb-4" : "max-h-0 opacity-0"
                    }`}
                  >
                    <div className="flex flex-col pl-4 border-l-2 border-[#eab308]/50 space-y-4 pt-2">
                      {item.dropdown.map((sub, sIdx) => (
                        <Link 
                          key={sIdx} 
                          to={sub.path} 
                          className="text-[13px] text-gray-600 hover:text-[#1a365d]"
                          onClick={() => setOpen(false)}
                        >
                          {sub.label}
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}

            <div className="pt-8 pb-4">
              <Link 
                to={currentUser ? "/apply" : "/login"} 
                className="block w-full bg-[#1a365d] text-white py-4 text-center text-[12px] font-bold uppercase tracking-[0.15em] shadow-lg"
                onClick={() => setOpen(false)}
              >
                {currentUser ? "Mon Dossier" : "Prendre RDV"}
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}