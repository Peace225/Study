import { GraduationCap, Facebook, Instagram, Twitter, Youtube } from "lucide-react";
import { Link } from "react-router-dom";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const navLinks = [
    { label: "Contact", path: "/contact" },
    { label: "A propos", path: "/a-propos" },
    { label: "Partenaires", path: "/partenaires" },
    { label: "Mentions légales", path: "/mentions-legales" },
    { label: "Politique de confidentialité", path: "/confidentialite" },
    { label: "Conditions générales de service", path: "/cgv" },
    { label: "Préférences de cookies", path: "#" },
  ];

  const socialLinks = [
    { label: "Facebook", icon: <Facebook size={16} strokeWidth={1.5} />, url: "#" },
    { label: "Instagram", icon: <Instagram size={16} strokeWidth={1.5} />, url: "#" },
    { label: "Twitter", icon: <Twitter size={16} strokeWidth={1.5} />, url: "#" },
    { label: "Youtube", icon: <Youtube size={16} strokeWidth={1.5} />, url: "#" },
  ];

  return (
    <footer className="w-full bg-black font-sans border-t border-white/10">
      
      {/* 1. Taille réduite : py-10 md:py-12 (au lieu de py-24) */}
      <div className="max-w-7xl mx-auto px-6 py-10 md:py-12">
        
        {/* 2. Alignement par le haut : items-start */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-8 items-start">
          
          {/* ========================================================= */}
          {/* COLONNE 1 : LOGO & LIENS DE NAVIGATION                      */}
          {/* ========================================================= */}
          <div className="flex flex-col">
            
            {/* Ligne 1 : h-10 pour calibrer la hauteur */}
            <Link to="/" className="flex items-center gap-3 mb-6 group h-10">
              <div className="w-8 h-8 rounded-full border border-white flex items-center justify-center transition-transform duration-500 group-hover:rotate-12">
                <GraduationCap size={16} className="text-white" strokeWidth={1.5} />
              </div>
              <span className="text-white text-[18px] font-bold tracking-tight">
                Study Experience
              </span>
            </Link>

            <ul className="flex flex-col space-y-3">
              {navLinks.map((link, idx) => (
                <li key={idx}>
                  <Link 
                    to={link.path} 
                    className="text-[14px] font-light text-white/80 hover:text-white transition-all duration-300 flex items-center group"
                  >
                    <span className="w-0 h-[1px] bg-white mr-0 transition-all duration-300 group-hover:w-3 group-hover:mr-2"></span>
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* ========================================================= */}
          {/* COLONNE 2 : RÉSEAUX SOCIAUX                               */}
          {/* ========================================================= */}
          <div className="flex flex-col md:pl-10">
            
            {/* Ligne 1 : h-10 pour s'aligner avec le logo */}
            <h3 className="text-white text-[15px] font-medium mb-6 flex items-center h-10">
              Retrouvez-nous sur :
            </h3>
            
            <ul className="flex flex-col space-y-3">
              {socialLinks.map((social, idx) => (
                <li key={idx}>
                  <a 
                    href={social.url} 
                    className="flex items-center gap-3 text-[14px] font-light text-white/80 hover:text-white transition-all duration-300 group"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <div className="w-7 h-7 rounded-md bg-white/5 flex items-center justify-center group-hover:bg-white/20 group-hover:-translate-y-1 transition-all duration-300">
                      {social.icon}
                    </div>
                    <span>{social.label}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* ========================================================= */}
          {/* COLONNE 3 : COPYRIGHT                                     */}
          {/* ========================================================= */}
          <div className="flex flex-col md:items-end text-left md:text-right">
            
            {/* Ligne 1 : h-10 pour s'aligner avec le logo et le titre des réseaux */}
            <p className="text-[13px] font-normal text-white tracking-wide flex items-center h-10">
              Copyright ©Study Experience {currentYear}, tous droits réservés
            </p>
            
          </div>

        </div>
      </div>
    </footer>
  );
}