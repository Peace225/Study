import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Mail, Lock, Eye, EyeOff, AlertCircle, Loader2, Linkedin } from "lucide-react";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [isSocialLoading, setIsSocialLoading] = useState(false);
  
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setIsLoading(true);

    try {
      await new Promise((resolve) => setTimeout(resolve, 1500));
      // Logique Firebase : await signInWithEmailAndPassword(auth, email, password)
      console.log("Connexion réussie", { email, rememberMe });
      navigate("/apply"); 
    } catch (err) {
      setError("Identifiants incorrects. Veuillez vérifier votre email et votre mot de passe.");
    } finally {
      setIsLoading(false);
    }
  };

  const handleSocialLogin = async (provider) => {
    setIsSocialLoading(provider);
    try {
      await new Promise((resolve) => setTimeout(resolve, 1500));
      // Logique Firebase : await signInWithPopup(auth, providerId) (ou OAuthProvider pour Apple)
      console.log(`Connexion via ${provider} réussie`);
      navigate("/apply");
    } catch (err) {
      setError(`Erreur lors de la connexion avec ${provider}.`);
    } finally {
      setIsSocialLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-white font-sans flex flex-col md:flex-row">
      
      {/* CÔTÉ GAUCHE : Image et Branding */}
      <div 
        className="hidden md:flex md:w-1/2 bg-cover bg-center relative"
        style={{ backgroundImage: "url('https://images.unsplash.com/photo-1541339907198-e08756dedf3f?q=80&w=1920&auto=format&fit=crop')" }}
      >
        <div className="absolute inset-0 bg-[#1a365d]/90 flex flex-col justify-between p-12 lg:p-16 text-white">
          <Link to="/" className="text-white font-black text-2xl tracking-tighter uppercase inline-block">
            LM GLOBAL <span className="text-[#eab308] block text-xs tracking-[0.25em]">Education</span>
          </Link>
          
          <div>
            <span className="text-[#eab308] font-bold tracking-[0.2em] uppercase text-sm mb-4 block">
              Espace Étudiant
            </span>
            <h1 className="text-4xl lg:text-5xl font-black uppercase tracking-tight mb-6">
              Votre avenir <br/>commence ici.
            </h1>
            <p className="text-gray-300 text-lg max-w-md leading-relaxed">
              Accédez à votre tableau de bord sécurisé pour suivre vos admissions, télécharger vos documents et échanger avec votre conseiller dédié.
            </p>
          </div>

          <div className="text-sm text-gray-400 font-medium">
            © {new Date().getFullYear()} LM Global Education. Tous droits réservés.
          </div>
        </div>
      </div>

      {/* CÔTÉ DROIT : Formulaire de connexion */}
      <div className="w-full md:w-1/2 flex items-center justify-center p-6 sm:p-12 lg:p-20 bg-gray-50 pt-32 md:pt-8">
        <div className="w-full max-w-md">
          
          {/* Logo Mobile */}
          <div className="md:hidden text-center mb-10">
            <Link to="/" className="inline-block text-[#1a365d] font-black text-2xl tracking-tighter uppercase">
              LM GLOBAL <span className="text-[#eab308] block text-xs tracking-[0.25em]">Education</span>
            </Link>
          </div>

          <div className="mb-8">
            <h2 className="text-3xl font-black text-[#1a365d] uppercase tracking-tight mb-2">Bon retour !</h2>
            <p className="text-gray-500 font-medium">Veuillez entrer vos identifiants pour continuer.</p>
          </div>

          {error && (
            <div className="bg-red-50 text-red-600 p-4 text-sm font-bold border-l-4 border-red-500 mb-6 flex items-start animate-in fade-in">
              <AlertCircle size={20} className="mr-3 flex-shrink-0 mt-0.5" />
              <span>{error}</span>
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-5">
            
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

            <div className="space-y-1">
              <label className="text-xs font-bold text-gray-500 uppercase tracking-wider">Mot de passe</label>
              <div className="relative">
                <Lock size={18} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                <input 
                  type={showPassword ? "text" : "password"} 
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="••••••••"
                  className="w-full border border-gray-300 rounded-md py-3 pl-10 pr-12 outline-none focus:border-[#1a365d] focus:ring-1 focus:ring-[#1a365d] transition-all bg-white text-gray-800" 
                />
                <button 
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-[#1a365d] transition-colors focus:outline-none"
                >
                  {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                </button>
              </div>
            </div>

            <div className="flex items-center justify-between pt-2">
              <label className="flex items-center cursor-pointer group">
                <div className="relative flex items-center justify-center">
                  <input 
                    type="checkbox" 
                    checked={rememberMe}
                    onChange={(e) => setRememberMe(e.target.checked)}
                    className="appearance-none w-4 h-4 border border-gray-300 rounded-sm bg-white checked:bg-[#1a365d] checked:border-[#1a365d] transition-colors cursor-pointer peer"
                  />
                  <svg className="absolute w-3 h-3 text-white pointer-events-none opacity-0 peer-checked:opacity-100" viewBox="0 0 14 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M1 5L4.5 8.5L13 1" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <span className="ml-2 text-sm text-gray-600 font-medium group-hover:text-[#1a365d] transition-colors">Se souvenir de moi</span>
              </label>

              <Link to="/mot-de-passe-oublie" className="text-sm font-bold text-[#1a365d] hover:text-[#eab308] transition-colors">
                Mot de passe oublié ?
              </Link>
            </div>

            <button 
              type="submit" 
              disabled={isLoading || isSocialLoading !== false}
              className={`w-full py-3.5 rounded-md text-[13px] font-bold uppercase tracking-widest flex items-center justify-center mt-6 transition-all shadow-md ${
                isLoading 
                  ? "bg-[#1a365d]/80 text-white cursor-not-allowed" 
                  : "bg-[#1a365d] text-white hover:bg-[#1a365d]/90 hover:shadow-lg hover:-translate-y-0.5"
              }`}
            >
              {isLoading ? (
                <><Loader2 size={18} className="animate-spin mr-2" /> Connexion...</>
              ) : (
                "Se connecter"
              )}
            </button>
          </form>

          <div className="mt-8 flex items-center">
            <div className="flex-grow border-t border-gray-300"></div>
            <span className="flex-shrink-0 mx-4 text-xs font-bold text-gray-400 uppercase tracking-widest">Ou continuer avec</span>
            <div className="flex-grow border-t border-gray-300"></div>
          </div>

          {/* Grille des boutons sociaux : 1 colonne sur mobile, 3 sur desktop */}
          <div className="mt-6 grid grid-cols-1 sm:grid-cols-3 gap-3">
            
            {/* Bouton Google */}
            <button 
              onClick={() => handleSocialLogin('Google')}
              disabled={isLoading || isSocialLoading !== false}
              className="flex items-center justify-center py-2.5 px-3 bg-white border border-gray-300 rounded-md shadow-sm hover:bg-gray-50 transition-colors focus:outline-none focus:ring-2 focus:ring-offset-1 focus:ring-gray-200 disabled:opacity-50"
            >
              {isSocialLoading === 'Google' ? (
                <Loader2 size={18} className="animate-spin text-gray-500" />
              ) : (
                <>
                  <svg className="w-5 h-5 sm:mr-0 md:mr-2" viewBox="0 0 24 24">
                    <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
                    <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                    <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
                    <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
                  </svg>
                  <span className="hidden md:inline text-sm font-bold text-gray-700">Google</span>
                </>
              )}
            </button>

            {/* Bouton Apple */}
            <button 
              onClick={() => handleSocialLogin('Apple')}
              disabled={isLoading || isSocialLoading !== false}
              className="flex items-center justify-center py-2.5 px-3 bg-white border border-gray-300 rounded-md shadow-sm hover:bg-gray-50 transition-colors focus:outline-none focus:ring-2 focus:ring-offset-1 focus:ring-gray-900 disabled:opacity-50"
            >
              {isSocialLoading === 'Apple' ? (
                <Loader2 size={18} className="animate-spin text-gray-500" />
              ) : (
                <>
                  <svg className="w-5 h-5 text-black sm:mr-0 md:mr-2" viewBox="0 0 384 512" fill="currentColor">
                    <path d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7C63.3 141.2 4 184.8 4 273.5q0 39.3 14.4 81.2c12.8 36.7 59 126.7 107.2 125.2 25.2-.6 43-17.9 75.8-17.9 31.8 0 48.3 17.9 76.4 17.9 48.6-.7 90.4-82.5 102.6-119.3-65.2-30.7-61.7-90-61.7-91.9zm-56.6-164.2c27.3-32.4 24.8-61.9 24-72.5-24.1 1.4-52 16.4-67.9 34.9-17.5 19.8-27.8 44.3-25.6 71.9 26.1 2 49.9-11.4 69.5-34.3z"/>
                  </svg>
                  <span className="hidden md:inline text-sm font-bold text-gray-700">Apple</span>
                </>
              )}
            </button>

            {/* Bouton LinkedIn */}
            <button 
              onClick={() => handleSocialLogin('LinkedIn')}
              disabled={isLoading || isSocialLoading !== false}
              className="flex items-center justify-center py-2.5 px-3 bg-white border border-gray-300 rounded-md shadow-sm hover:bg-gray-50 transition-colors focus:outline-none focus:ring-2 focus:ring-offset-1 focus:ring-[#0A66C2] disabled:opacity-50"
            >
              {isSocialLoading === 'LinkedIn' ? (
                <Loader2 size={18} className="animate-spin text-gray-500" />
              ) : (
                <>
                  <Linkedin size={20} className="text-[#0A66C2] sm:mr-0 md:mr-2" fill="#0A66C2" />
                  <span className="hidden md:inline text-sm font-bold text-gray-700">LinkedIn</span>
                </>
              )}
            </button>
            
          </div>

          <div className="mt-10 text-center">
            <p className="text-sm text-gray-600 font-medium">
              Nouveau chez LM Global ?{' '}
              <Link to="/register" className="text-[#1a365d] font-bold hover:text-[#eab308] transition-colors ml-1">
                Créez un compte gratuitement
              </Link>
            </p>
          </div>

        </div>
      </div>
    </div>
  );
}