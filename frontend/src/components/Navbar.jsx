import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Menu, X, Mail, Search, ChevronDown, User } from "lucide-react";
import { useAuth } from "../context/AuthContext";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [activeMobileMenu, setActiveMobileMenu] = useState(null);
  
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [langDropdownOpen, setLangDropdownOpen] = useState(false);
  const [currentLang, setCurrentLang] = useState("Français");
  
  const { currentUser, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = async () => {
    await logout();
    setOpen(false);
    navigate("/");
  };

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/universites/recherche?q=${encodeURIComponent(searchQuery)}`);
      setIsSearchOpen(false);
      setSearchQuery("");
    }
  };

  const navItems = [
    {
      title: "À Propos",
      path: "/about/qui-sommes-nous", 
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
        { label: "Toutes nos destinations", path: "/destinations" },
      ]
    },
    {
      title: "Universités",
      path: "/universites",
      dropdown: [
        { label: "Recherchez votre formation", path: "/universites/recherche" },
        { label: "Guide des formations & diplômes", path: "/universites/guide" },
      ]
    },
    {
      title: "Événements",
      path: "/events",
      dropdown: [
        { label: "Webinaires", path: "/events/webinaires" },
        { label: "Salons Elevate", path: "/events/salons" },
      ]
    },
    {
      title: "Blog",
      path: "/blog",
    }
  ];

  return (
    <header className="fixed w-full top-0 z-50 font-sans">
      
      {/* BARRE SUPÉRIEURE */}
      <div className="bg-[#eab308] text-black text-[11px] uppercase font-bold tracking-widest py-2.5 px-6 hidden md:flex justify-end items-center space-x-6">
        
        {/* LIENS D'AUTHENTIFICATION */}
        {!currentUser ? (
          <div className="flex items-center space-x-3 border-r border-black/20 pr-6">
            <Link to="/login" className="flex items-center hover:text-white transition-colors duration-300">
              <User size={14} className="mr-1.5" /> Connexion
            </Link>
            <span className="text-black/30">|</span>
            {/* J'ai supposé que votre page d'inscription sera /register */}
            <Link to="/register" className="hover:text-white transition-colors duration-300">
              S'inscrire
            </Link>
          </div>
        ) : (
          <div className="flex items-center space-x-4 border-r border-black/20 pr-6">
            <span className="flex items-center text-[#1a365d]">
              <User size={14} className="mr-1.5" /> Espace Étudiant
            </span>
          </div>
        )}

        {/* Lien Contact */}
        <Link to="/contact" className="flex items-center hover:text-white transition-colors duration-300">
          <Mail size={14} className="mr-2" /> Contact
        </Link>
        
        {/* Sélecteur de langue */}
        <div className="relative">
          <button 
            onClick={() => setLangDropdownOpen(!langDropdownOpen)}
            className="flex items-center outline-none hover:text-white transition-colors duration-300"
          >
            {currentLang} <ChevronDown size={14} className="ml-1" />
          </button>
          
          {langDropdownOpen && (
            <div className="absolute top-full right-0 mt-2 w-32 bg-white shadow-lg border border-gray-100 z-50 rounded-sm overflow-hidden">
              <button 
                onClick={() => { setCurrentLang("Français"); setLangDropdownOpen(false); }} 
                className={`block w-full text-left px-4 py-2.5 text-[11px] ${currentLang === "Français" ? "bg-gray-100 text-[#1a365d] font-black" : "text-gray-600 hover:bg-gray-50 hover:text-[#1a365d]"}`}
              >
                Français
              </button>
              <button 
                onClick={() => { setCurrentLang("English"); setLangDropdownOpen(false); }} 
                className={`block w-full text-left px-4 py-2.5 text-[11px] ${currentLang === "English" ? "bg-gray-100 text-[#1a365d] font-black" : "text-gray-600 hover:bg-gray-50 hover:text-[#1a365d]"}`}
              >
                English
              </button>
            </div>
          )}
        </div>
      </div>

      {/* NAVBAR PRINCIPALE */}
      <nav className="bg-white/95 backdrop-blur-md shadow-sm border-b border-gray-100">
        <div className="max-w-[1400px] mx-auto px-6">
          <div className="flex items-center h-24">
            
            {/* LOGO */}
            <Link to="/" onClick={() => setOpen(false)} className="flex-shrink-0 flex items-center space-x-3 group">
              <div className="bg-[#1a365d] p-2.5 rounded-full transition-transform duration-500 group-hover:rotate-12">
                <img src="/images/logo.png" alt="Logo" className="w-6 h-6 invert" /> 
              </div>
              <div className="flex flex-col justify-center">
                <span className="text-[20px] md:text-[22px] font-black tracking-tighter text-[#1a365d] uppercase leading-none">
                  LM GLOBAL
                </span>
                <span className="text-[10px] font-bold tracking-[0.25em] text-[#eab308] uppercase leading-none mt-1">
                  Education
                </span>
              </div>
            </Link>

            {/* DESKTOP MENU */}
            <div className="hidden lg:flex items-center justify-end flex-1 ml-auto">
              <div className="flex items-center h-full space-x-8 xl:space-x-12 mr-8">
                {navItems.map((item, idx) => (
                  <div key={idx} className="relative group h-full flex items-center">
                    <Link 
                      to={item.path} 
                      className="flex items-center text-[12px] font-bold uppercase tracking-wider text-gray-800 hover:text-[#1a365d] transition-colors py-8"
                    >
                      {item.title}
                      {item.dropdown && <ChevronDown size={14} className="ml-1.5 transition-transform group-hover:-rotate-180" />}
                    </Link>

                    {item.dropdown && (
                      <div className="absolute top-full left-0 w-64 opacity-0 invisible translate-y-3 group-hover:opacity-100 group-hover:visible group-hover:translate-y-0 transition-all duration-300 z-50">
                        <div className="bg-white border-t-[3px] border-[#eab308] shadow-xl py-2 mt-0">
                          {item.dropdown.map((sub, sIdx) => (
                            <Link 
                              key={sIdx} 
                              to={sub.path} 
                              className="px-6 py-2.5 text-[13px] block text-gray-600 hover:bg-gray-50 hover:text-[#1a365d] border-l-2 border-transparent hover:border-[#eab308] transition-all"
                            >
                              {sub.label}
                            </Link>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                ))}
                
                {/* BARRE DE RECHERCHE DÉPLOYABLE */}
                <div className="relative flex items-center min-w-[30px] justify-end">
                  {isSearchOpen ? (
                    <form onSubmit={handleSearchSubmit} className="absolute right-0 flex items-center bg-gray-50 border border-gray-200 rounded-full px-4 py-2 w-64 shadow-inner animate-in fade-in slide-in-from-right-5">
                      <input 
                        type="text" 
                        autoFocus
                        placeholder="Rechercher une formation..." 
                        className="w-full text-xs font-medium outline-none text-gray-700 bg-transparent"
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                      />
                      <button type="button" onClick={() => setIsSearchOpen(false)} className="text-gray-400 hover:text-[#1a365d] ml-2">
                        <X size={16} />
                      </button>
                    </form>
                  ) : (
                    <button onClick={() => setIsSearchOpen(true)} className="text-gray-600 hover:text-[#1a365d] transition-colors">
                      <Search size={18} />
                    </button>
                  )}
                </div>
              </div>

              {/* CTA DESKTOP (PRENDRE RDV) */}
              <div className="flex items-center space-x-4">
                {currentUser ? (
                  <>
                    <Link to="/apply" className="bg-[#1a365d] text-white px-6 py-3 text-[11px] font-bold uppercase tracking-widest hover:bg-[#eab308] hover:text-[#1a365d] transition-all">
                      Mon Dossier
                    </Link>
                    <button onClick={handleLogout} className="text-[10px] font-bold text-gray-400 hover:text-red-600 uppercase transition-colors">
                      Déconnexion
                    </button>
                  </>
                ) : (
                  <Link to="/rdv" className="bg-[#1a365d] text-white px-6 py-3 text-[11px] font-bold uppercase tracking-widest hover:bg-[#eab308] hover:text-[#1a365d] transition-all whitespace-nowrap">
                    Prendre RDV
                  </Link>
                )}
              </div>
            </div>

            {/* MOBILE TOGGLE */}
            <div className="lg:hidden flex items-center ml-auto">
              <button onClick={() => setOpen(!open)} className="text-[#1a365d]">
                {open ? <X size={28} /> : <Menu size={28} />}
              </button>
            </div>
          </div>
        </div>

        {/* MOBILE MENU */}
        <div className={`lg:hidden bg-white border-t transition-all duration-500 overflow-hidden ${open ? "max-h-[90vh] opacity-100" : "max-h-0 opacity-0"}`}>
          <div className="p-6 space-y-2 overflow-y-auto max-h-[80vh]">
            
            {/* Liens Auth Mobile */}
            {!currentUser && (
              <div className="flex items-center justify-between bg-gray-50 p-4 rounded-md mb-6 border border-gray-100">
                <Link to="/login" onClick={() => setOpen(false)} className="text-[13px] font-bold text-[#1a365d] flex items-center">
                  <User size={16} className="mr-2" /> Connexion
                </Link>
                <Link to="/register" onClick={() => setOpen(false)} className="text-[13px] font-bold text-[#eab308]">
                  S'inscrire
                </Link>
              </div>
            )}

            <form onSubmit={handleSearchSubmit} className="flex items-center bg-gray-50 border border-gray-200 rounded-full px-4 py-3 mb-6">
              <Search size={16} className="text-gray-400 mr-2" />
              <input 
                type="text" 
                placeholder="Rechercher une formation..." 
                className="w-full text-sm font-medium outline-none text-gray-700 bg-transparent"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </form>

            {navItems.map((item, idx) => (
              <div key={idx} className="border-b border-gray-50 pb-2">
                <div className="flex justify-between items-center py-3" onClick={() => item.dropdown ? setActiveMobileMenu(activeMobileMenu === item.title ? null : item.title) : (navigate(item.path), setOpen(false))}>
                  <span className={`text-[13px] font-bold uppercase ${activeMobileMenu === item.title ? "text-[#eab308]" : "text-gray-800"}`}>
                    {item.title}
                  </span>
                  {item.dropdown && <ChevronDown size={16} className={`transition-transform ${activeMobileMenu === item.title ? "rotate-180" : ""}`} />}
                </div>
                
                {item.dropdown && activeMobileMenu === item.title && (
                  <div className="pl-4 space-y-3 pb-3 pt-1">
                    {item.dropdown.map((sub, sIdx) => (
                      <Link key={sIdx} to={sub.path} onClick={() => setOpen(false)} className="block text-[13px] text-gray-500 hover:text-[#1a365d]">
                        {sub.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
            <div className="pt-6">
               <Link to={currentUser ? "/apply" : "/login"} onClick={() => setOpen(false)} className="block w-full bg-[#1a365d] text-white py-4 text-center text-[12px] font-bold uppercase tracking-widest">
                {currentUser ? "Mon Dossier" : "Prendre RDV"}
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}