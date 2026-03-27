import { useState } from "react";
import { Link } from "react-router-dom";
import { Mail, ArrowLeft, CheckCircle2, AlertCircle, Loader2 } from "lucide-react";
// import { useAuth } from "../context/AuthContext"; // Pour la fonction resetPassword de Firebase

export default function ForgotPassword() {
  const [email, setEmail] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  // const { resetPassword } = useAuth(); // Décommentez pour Firebase

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setIsLoading(true);

    try {
      // Simulation d'un appel API (ex: envoi de l'email via Firebase)
      await new Promise((resolve) => setTimeout(resolve, 1500));
      // await resetPassword(email);
      
      setIsSubmitted(true);
    } catch (err) {
      setError("Aucun compte n'est associé à cette adresse email. Veuillez vérifier votre saisie.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-white font-sans flex flex-col md:flex-row">
      
      {/* CÔTÉ GAUCHE : Image (Masqué sur mobile) */}
      <div 
        className="hidden md:flex md:w-1/2 bg-cover bg-center relative"
        style={{ backgroundImage: "url('https://images.unsplash.com/photo-1523240795612-9a054b0db644?q=80&w=1920&auto=format&fit=crop')" }}
      >
        <div className="absolute inset-0 bg-[#1a365d]/90 flex flex-col justify-between p-12 lg:p-16 text-white">
          <Link to="/" className="text-white font-black text-2xl tracking-tighter uppercase inline-block">
            LM GLOBAL <span className="text-[#eab308] block text-xs tracking-[0.25em]">Education</span>
          </Link>
          
          <div>
            <h1 className="text-4xl lg:text-5xl font-black uppercase tracking-tight mb-6">
              Ne laissez pas un <br/><span className="text-[#eab308]">mot de passe</span> <br/>freiner votre avenir.
            </h1>
            <p className="text-gray-300 text-lg max-w-md leading-relaxed">
              Il arrive à tout le monde d'oublier. Entrez votre email et nous vous aiderons à récupérer l'accès à votre dossier d'admission en un rien de temps.
            </p>
          </div>

          <div className="text-sm text-gray-400 font-medium">
            © {new Date().getFullYear()} LM Global Education.
          </div>
        </div>
      </div>

      {/* CÔTÉ DROIT : Formulaire */}
      <div className="w-full md:w-1/2 flex items-center justify-center p-6 sm:p-12 lg:p-20 bg-gray-50 pt-32 md:pt-8 relative">
        
        {/* Bouton Retour en haut à gauche de la section droite */}
        <Link to="/login" className="absolute top-8 left-8 flex items-center text-sm font-bold text-gray-500 hover:text-[#1a365d] transition-colors uppercase tracking-wider">
          <ArrowLeft size={16} className="mr-2" /> Retour à la connexion
        </Link>

        <div className="w-full max-w-md mt-12 md:mt-0">
          
          {/* Logo Mobile */}
          <div className="md:hidden text-center mb-10">
            <Link to="/" className="inline-block text-[#1a365d] font-black text-2xl tracking-tighter uppercase">
              LM GLOBAL <span className="text-[#eab308] block text-xs tracking-[0.25em]">Education</span>
            </Link>
          </div>

          {isSubmitted ? (
            /* ÉTAT : SUCCÈS (Email envoyé) */
            <div className="text-center animate-in zoom-in-95 duration-500">
              <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <CheckCircle2 size={40} className="text-green-600" />
              </div>
              <h2 className="text-3xl font-black text-[#1a365d] uppercase tracking-tight mb-4">Email envoyé !</h2>
              <p className="text-gray-600 font-medium mb-8 leading-relaxed">
                Si un compte existe pour <strong className="text-gray-900">{email}</strong>, vous recevrez un lien pour réinitialiser votre mot de passe d'ici quelques minutes. Pensez à vérifier vos courriers indésirables (spams).
              </p>
              <Link 
                to="/login"
                className="block w-full py-4 text-[13px] font-bold uppercase tracking-widest text-center bg-[#1a365d] text-white hover:bg-[#1a365d]/90 hover:shadow-lg transition-all rounded-md"
              >
                Retourner à la connexion
              </Link>
            </div>
          ) : (
            /* ÉTAT : FORMULAIRE */
            <div className="animate-in fade-in duration-500">
              <div className="mb-8">
                <h2 className="text-3xl font-black text-[#1a365d] uppercase tracking-tight mb-2">Mot de passe oublié ?</h2>
                <p className="text-gray-500 font-medium">Entrez l'adresse email associée à votre compte. Nous vous enverrons un lien de réinitialisation.</p>
              </div>

              {error && (
                <div className="bg-red-50 text-red-600 p-4 text-sm font-bold border-l-4 border-red-500 mb-6 flex items-start animate-in fade-in">
                  <AlertCircle size={20} className="mr-3 flex-shrink-0 mt-0.5" />
                  <span>{error}</span>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-1">
                  <label className="text-xs font-bold text-gray-500 uppercase tracking-wider">Adresse email</label>
                  <div className="relative">
                    <Mail size={18} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                    <input 
                      type="email" 
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="prenom.nom@exemple.com"
                      className="w-full border border-gray-300 rounded-md py-3 pl-10 pr-4 outline-none focus:border-[#1a365d] focus:ring-1 focus:ring-[#1a365d] transition-all bg-white text-gray-800" 
                    />
                  </div>
                </div>

                <button 
                  type="submit" 
                  disabled={isLoading}
                  className={`w-full py-3.5 rounded-md text-[13px] font-bold uppercase tracking-widest flex items-center justify-center mt-4 transition-all shadow-md ${
                    isLoading 
                      ? "bg-[#1a365d]/80 text-white cursor-not-allowed" 
                      : "bg-[#1a365d] text-white hover:bg-[#1a365d]/90 hover:shadow-lg hover:-translate-y-0.5"
                  }`}
                >
                  {isLoading ? (
                    <><Loader2 size={18} className="animate-spin mr-2" /> Envoi en cours...</>
                  ) : (
                    "Envoyer le lien"
                  )}
                </button>
              </form>
            </div>
          )}

        </div>
      </div>
    </div>
  );
}