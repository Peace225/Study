import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Mail, Lock, User, ArrowRight } from "lucide-react";
// import { useAuth } from "../context/AuthContext"; // À décommenter quand vous ferez le lien avec Firebase Auth

export default function Register() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: ""
  });
  const [error, setError] = useState("");
  // const { signup } = useAuth(); // Fonction Firebase d'inscription
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    if (formData.password !== formData.confirmPassword) {
      return setError("Les mots de passe ne correspondent pas.");
    }

    try {
      // await signup(formData.email, formData.password);
      // Optionnel : Enregistrer le nom/prénom dans Firestore ici
      console.log("Inscription réussie");
      navigate("/apply"); // Redirection vers le dossier après inscription
    } catch (err) {
      setError("Échec de la création du compte. Cet email est peut-être déjà utilisé.");
    }
  };

  return (
    <div className="min-h-screen bg-white font-sans flex flex-col md:flex-row">
      
      {/* Côté Image (Masqué sur mobile) */}
      <div 
        className="hidden md:flex md:w-1/2 bg-cover bg-center relative"
        style={{ backgroundImage: "url('https://images.unsplash.com/photo-1523240795612-9a054b0db644?q=80&w=1920&auto=format&fit=crop')" }}
      >
        <div className="absolute inset-0 bg-[#1a365d]/80 flex flex-col justify-center px-16 text-white">
          <Link to="/" className="absolute top-8 left-16 text-white font-black text-2xl tracking-tighter uppercase">
            LM GLOBAL <span className="text-[#eab308] block text-xs tracking-[0.25em]">Education</span>
          </Link>
          <h1 className="text-4xl lg:text-5xl font-black uppercase tracking-tight mb-6">
            Construisez votre <br/><span className="text-[#eab308]">avenir</span> international
          </h1>
          <p className="text-gray-300 text-lg max-w-md">
            Créez votre compte pour démarrer votre dossier d'admission, suivre vos candidatures et échanger avec votre conseiller.
          </p>
        </div>
      </div>

      {/* Côté Formulaire */}
      <div className="w-full md:w-1/2 flex items-center justify-center p-8 lg:p-16 bg-gray-50 pt-32 md:pt-8">
        <div className="w-full max-w-md">
          {/* Logo pour version mobile */}
          <div className="md:hidden text-center mb-10">
            <Link to="/" className="inline-block text-[#1a365d] font-black text-2xl tracking-tighter uppercase">
              LM GLOBAL <span className="text-[#eab308] block text-xs tracking-[0.25em]">Education</span>
            </Link>
          </div>

          <h2 className="text-3xl font-black text-[#1a365d] uppercase tracking-tight mb-2">S'inscrire</h2>
          <p className="text-gray-500 font-medium mb-8">Rejoignez-nous et commencez votre aventure.</p>

          {error && (
            <div className="bg-red-50 text-red-600 p-3 text-sm font-bold border-l-4 border-red-500 mb-6">
              {error}
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-5">
            <div className="grid grid-cols-2 gap-4">
              <div className="relative">
                <User size={18} className="absolute left-0 bottom-3 text-gray-400" />
                <input 
                  type="text" 
                  name="firstName"
                  required
                  placeholder="Prénom"
                  onChange={handleChange}
                  className="w-full border-b-2 border-gray-300 py-2 pl-8 outline-none focus:border-[#eab308] transition-colors bg-transparent text-gray-800" 
                />
              </div>
              <div className="relative">
                <input 
                  type="text" 
                  name="lastName"
                  required
                  placeholder="Nom"
                  onChange={handleChange}
                  className="w-full border-b-2 border-gray-300 py-2 outline-none focus:border-[#eab308] transition-colors bg-transparent text-gray-800" 
                />
              </div>
            </div>

            <div className="relative">
              <Mail size={18} className="absolute left-0 bottom-3 text-gray-400" />
              <input 
                type="email" 
                name="email"
                required
                placeholder="Adresse email"
                onChange={handleChange}
                className="w-full border-b-2 border-gray-300 py-2 pl-8 outline-none focus:border-[#eab308] transition-colors bg-transparent text-gray-800" 
              />
            </div>

            <div className="relative">
              <Lock size={18} className="absolute left-0 bottom-3 text-gray-400" />
              <input 
                type="password" 
                name="password"
                required
                placeholder="Mot de passe"
                onChange={handleChange}
                className="w-full border-b-2 border-gray-300 py-2 pl-8 outline-none focus:border-[#eab308] transition-colors bg-transparent text-gray-800" 
              />
            </div>

            <div className="relative">
              <Lock size={18} className="absolute left-0 bottom-3 text-gray-400" />
              <input 
                type="password" 
                name="confirmPassword"
                required
                placeholder="Confirmer le mot de passe"
                onChange={handleChange}
                className="w-full border-b-2 border-gray-300 py-2 pl-8 outline-none focus:border-[#eab308] transition-colors bg-transparent text-gray-800" 
              />
            </div>

            <button type="submit" className="w-full bg-[#1a365d] text-white py-4 text-[13px] font-bold uppercase tracking-widest hover:bg-[#eab308] hover:text-[#1a365d] transition-all flex justify-center items-center mt-8">
              Créer mon compte <ArrowRight size={16} className="ml-2" />
            </button>
          </form>

          <p className="mt-8 text-center text-sm text-gray-500 font-medium">
            Vous avez déjà un compte ?{' '}
            <Link to="/login" className="text-[#1a365d] font-bold hover:text-[#eab308] transition-colors">
              Connectez-vous ici
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}