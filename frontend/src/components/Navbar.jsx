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
      setOpen(false);
    }
  };

  const navItems = [
    { 
      title: "À Propos", 
      path: "/about/qui-sommes-nous", 
      dropdown: [
        { label: "Qui sommes-nous ?", path: "/about/qui-sommes-nous" }, 
        { label: "Mot de la direction", path: "/about/mot-de-la-direction" }
      ] 
    },
    { title: "Services", path: "/services", dropdown: [{ label: "Orientation & Conseil académique", path: "/services/conseil" }, { label: "Formation & Développement des compétences", path: "/services/elite" }, { label: "ENTREPRISES & INSTITUTIONS", path: "/services/retour" }] },
    { title: "Destinations", path: "/destinations", dropdown: [{ label: "France", path: "/destinations/royaume-uni" }, { label: "Espagne", path: "/destinations/irlande" }, { label: "Belgique", path: "/destinations/quebec" }, { label: "Maroc", path: "/destinations/canada" }, { label: "Senegal", path: "/destinations/espagne" }, { label: "Suisse", path: "/destinations/usa" }, { label: "Italie", path: "/destinations/pays-bas" }] },
    { title: "Universités", path: "/universites", dropdown: [{ label: "Recherchez votre formation", path: "/universites/recherche" }, { label: "Guide des formations", path: "/universites/guide" }] },
    { title: "Événements", path: "/events", dropdown: [{ label: "Webinaires", path: "/events/webinaires" }, { label: "Salons Elevate", path: "/events/salons" }] },
    { title: "Blog", path: "/blog" }
  ];

  return (
    <header className="fixed w-full top-0 z-50 font-sans">
      {/* BARRE SUPÉRIEURE DESKTOP */}
      <div className="bg-[#eab308] text-black text-[11px] uppercase font-bold tracking-widest py-2.5 px-6 hidden md:flex justify-end items-center space-x-6">
        {!currentUser ? (
          <div className="flex items-center space-x-3 border-r border-black/20 pr-6">
            <Link to="/login" className="flex items-center hover:text-white transition-colors"><User size={14} className="mr-1.5" /> Connexion</Link>
            <span className="text-black/30">|</span>
            <Link to="/register" className="hover:text-white transition-colors">S'inscrire</Link>
          </div>
        ) : (
          <div className="border-r border-black/20 pr-6"><span className="flex items-center text-[#1a365d]"><User size={14} className="mr-1.5" /> Espace Étudiant</span></div>
        )}
        <Link to="/contact" className="flex items-center hover:text-white transition-colors"><Mail size={14} className="mr-2" /> Contact</Link>
      </div>

      <nav className="bg-white/95 backdrop-blur-md shadow-sm border-b border-gray-100">
        <div className="max-w-[1400px] mx-auto px-6">
          <div className="flex items-center h-24">
            <Link to="/" onClick={() => setOpen(false)} className="flex items-center space-x-3">
              <div className="bg-[#1a365d] p-2.5 rounded-full"><img src="/images/logo.png" alt="Logo" className="w-6 h-6 invert" /></div>
              <div className="flex flex-col"><span className="text-[20px] font-black text-[#1a365d] uppercase leading-none">LM GLOBAL</span><span className="text-[10px] font-bold text-[#eab308] uppercase leading-none mt-1">Education</span></div>
            </Link>

            {/* DESKTOP MENU */}
            <div className="hidden lg:flex items-center justify-end flex-1 ml-auto space-x-8">
              {navItems.map((item, idx) => (
                <div key={idx} className="relative group h-full flex items-center">
                  <Link to={item.path} className="text-[12px] font-bold uppercase tracking-wider text-gray-800 hover:text-[#1a365d] py-8 flex items-center">
                    {item.title} {item.dropdown && <ChevronDown size={14} className="ml-1" />}
                  </Link>
                  {item.dropdown && (
                    <div className="absolute top-full left-0 w-64 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all z-50">
                      <div className="bg-white border-t-[3px] border-[#eab308] shadow-xl py-2">
                        {item.dropdown.map((sub, sIdx) => <Link key={sIdx} to={sub.path} className="px-6 py-2.5 text-[13px] block text-gray-600 hover:text-[#1a365d]">{sub.label}</Link>)}
                      </div>
                    </div>
                  )}
                </div>
              ))}
              <Link to={currentUser ? "/apply" : "/rdv"} className="bg-[#1a365d] text-white px-6 py-3 text-[11px] font-bold uppercase hover:bg-[#eab308] transition-all">
                {currentUser ? "Mon Dossier" : "Prendre RDV"}
              </Link>
            </div>

            {/* MOBILE TOGGLE */}
            <div className="lg:hidden flex items-center ml-auto">
              <button onClick={() => setOpen(!open)} className="text-[#1a365d]">{open ? <X size={28} /> : <Menu size={28} />}</button>
            </div>
          </div>
        </div>

        {/* MOBILE MENU */}
        <div className={`lg:hidden bg-white border-t transition-all duration-500 overflow-hidden ${open ? "max-h-[95vh] opacity-100" : "max-h-0 opacity-0"}`}>
          <div className="p-10 space-y-6 overflow-y-auto max-h-[85vh]"> 
            
            {/* Liens Auth Mobile */}
            {!currentUser && (
              <div className="flex items-center justify-between bg-gray-50 p-6 rounded-xl mb-10 border border-gray-100">
                <Link to="/login" onClick={() => setOpen(false)} className="text-[18px] font-bold text-[#1a365d] flex items-center">
                  <User size={24} className="mr-3" /> Connexion 
                </Link>
                <Link to="/register" onClick={() => setOpen(false)} className="text-[18px] font-bold text-[#eab308]">
                  S'inscrire
                </Link>
              </div>
            )}

            {/* Formulaire de recherche */}
            <form onSubmit={handleSearchSubmit} className="flex items-center bg-gray-50 border border-gray-200 rounded-full px-6 py-5 mb-12">
              <Search size={24} className="text-gray-400 mr-4" /> 
              <input 
                type="text" 
                placeholder="Rechercher une formation..." 
                className="w-full text-lg font-medium outline-none text-gray-700 bg-transparent" 
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </form>

            {/* Items de navigation principaux */}
            {navItems.map((item, idx) => (
              <div key={idx} className="border-b border-gray-100 pb-6">
                <div className="flex justify-between items-center py-6" onClick={() => item.dropdown ? setActiveMobileMenu(activeMobileMenu === item.title ? null : item.title) : (navigate(item.path), setOpen(false))}>
                  <span className={`text-[20px] font-bold uppercase ${activeMobileMenu === item.title ? "text-[#eab308]" : "text-gray-800"}`}>
                    {item.title} 
                  </span>
                  {item.dropdown && <ChevronDown size={24} className={`transition-transform ${activeMobileMenu === item.title ? "rotate-180" : ""}`} />} 
                </div>
                
                {/* Sous-menu (Dropdown) */}
                {item.dropdown && activeMobileMenu === item.title && (
                  <div className="pl-8 space-y-6 pb-4 pt-3">
                    {item.dropdown.map((sub, sIdx) => (
                      <Link key={sIdx} to={sub.path} onClick={() => setOpen(false)} className="block text-[18px] text-gray-600 hover:text-[#1a365d] font-medium">
                        {sub.label} 
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
            
            {/* Bouton d'action final (Prendre RDV) */}
            <div className="pt-12">
               <Link to={currentUser ? "/apply" : "/rdv"} onClick={() => setOpen(false)} className="block w-full bg-[#1a365d] text-white py-6 text-center text-[16px] font-bold uppercase tracking-widest rounded-md shadow-md hover:bg-[#eab308] transition-all">
                {currentUser ? "Mon Dossier" : "Prendre RDV"} 
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}