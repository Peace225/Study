import { useState } from "react";
import { collection, addDoc, Timestamp } from "firebase/firestore";
import { db } from "../services/firebase"; // Assure-toi que firebase est configuré
import { MapPin, Phone, Mail, Send, CheckCircle2, AlertCircle } from "lucide-react";

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(null);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
      await addDoc(collection(db, "contacts"), {
        ...form,
        createdAt: Timestamp.now()
      });
      setSuccess(true);
      setForm({ name: "", email: "", subject: "", message: "" });
    } catch (err) {
      console.error("Erreur lors de l'enregistrement : ", err);
      setError("Une erreur est survenue lors de l'envoi de votre message. Veuillez réessayer.");
    } finally {
      setLoading(false);
      // Fait disparaître le message de succès après 5 secondes
      setTimeout(() => setSuccess(false), 5000); 
    }
  };

  return (
    <div className="pt-24 min-h-screen bg-gray-50 font-sans pb-20">
      
      {/* En-tête */}
      <div className="bg-[#1a365d] py-16 px-6 text-center text-white">
        <h1 className="text-3xl md:text-5xl font-black uppercase tracking-tight mb-4">Contactez-nous</h1>
        <p className="text-gray-300 max-w-2xl mx-auto text-lg">
          Une question ? Un partenariat ? Notre équipe est à votre disposition pour vous répondre dans les plus brefs délais.
        </p>
      </div>

      <div className="max-w-[1200px] mx-auto px-6 mt-12 grid lg:grid-cols-5 gap-12">
        
        {/* COLONNE GAUCHE : Formulaire */}
        <div className="lg:col-span-3">
          <div className="bg-white p-8 md:p-10 shadow-xl border-t-4 border-[#eab308]">
            <h2 className="text-2xl font-black text-[#1a365d] uppercase tracking-tight mb-8">
              Envoyez-nous un message
            </h2>

            {/* Messages de retour */}
            {success && (
              <div className="mb-6 p-4 bg-green-50 border-l-4 border-green-500 flex items-center text-green-700">
                <CheckCircle2 size={24} className="mr-3 flex-shrink-0" />
                <p className="font-semibold">Votre message a été envoyé avec succès ! Nous vous répondrons bientôt.</p>
              </div>
            )}
            
            {error && (
              <div className="mb-6 p-4 bg-red-50 border-l-4 border-red-500 flex items-center text-red-700">
                <AlertCircle size={24} className="mr-3 flex-shrink-0" />
                <p className="font-semibold">{error}</p>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-xs font-bold text-gray-500 uppercase tracking-wider mb-2">Nom complet *</label>
                  <input
                    type="text"
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    required
                    className="w-full border-b-2 border-gray-200 py-2 outline-none focus:border-[#eab308] transition-colors bg-transparent"
                    placeholder="Ex: Jean Dupont"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-gray-500 uppercase tracking-wider mb-2">Email *</label>
                  <input
                    type="email"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    required
                    className="w-full border-b-2 border-gray-200 py-2 outline-none focus:border-[#eab308] transition-colors bg-transparent"
                    placeholder="jean.dupont@email.com"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-gray-500 uppercase tracking-wider mb-2">Sujet *</label>
                <input
                  type="text"
                  name="subject"
                  value={form.subject}
                  onChange={handleChange}
                  required
                  className="w-full border-b-2 border-gray-200 py-2 outline-none focus:border-[#eab308] transition-colors bg-transparent"
                  placeholder="Ex: Demande de partenariat"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-gray-500 uppercase tracking-wider mb-2">Message *</label>
                <textarea
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full border-b-2 border-gray-200 py-2 outline-none focus:border-[#eab308] transition-colors bg-transparent resize-none"
                  placeholder="Comment pouvons-nous vous aider ?"
                />
              </div>

              <button
                type="submit"
                disabled={loading}
                className={`w-full py-4 text-[13px] font-bold uppercase tracking-widest flex items-center justify-center transition-all mt-8 ${
                  loading 
                    ? "bg-gray-300 text-gray-500 cursor-not-allowed" 
                    : "bg-[#1a365d] text-white hover:bg-[#eab308] hover:text-[#1a365d]"
                }`}
              >
                {loading ? "Envoi en cours..." : "Envoyer le message"}
                {!loading && <Send size={16} className="ml-3" />}
              </button>
            </form>
          </div>
        </div>

        {/* COLONNE DROITE : Coordonnées */}
        <div className="lg:col-span-2 space-y-8">
          <div className="bg-[#1a365d] p-8 shadow-xl text-white">
            <h3 className="text-xl font-bold mb-8 border-b border-white/20 pb-4">Nos Coordonnées</h3>
            
            <div className="space-y-8 text-sm">
              <div className="flex items-start">
                <div className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center text-[#eab308] mr-4 flex-shrink-0">
                  <Mail size={18} />
                </div>
                <div>
                  <strong className="block text-gray-300 mb-1 uppercase tracking-wider text-xs">Email</strong>
                  <a href="mailto:contact@studyexperience.fr" className="hover:text-[#eab308] transition-colors text-lg">
                    contact@studyexperience.fr
                  </a>
                </div>
              </div>
              
              <div className="flex items-center">
                <div className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center text-[#eab308] mr-4 flex-shrink-0">
                  <Phone size={18} />
                </div>
                <div>
                  <strong className="block text-gray-300 mb-1 uppercase tracking-wider text-xs">Téléphone</strong>
                  <span className="text-lg">+33 1 23 45 67 89</span>
                </div>
              </div>

              <div className="flex items-start">
                <div className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center text-[#eab308] mr-4 flex-shrink-0">
                  <MapPin size={18} />
                </div>
                <div>
                  <strong className="block text-gray-300 mb-1 uppercase tracking-wider text-xs">Adresse</strong>
                  <span className="text-lg leading-relaxed block">
                    12 Rue de l’Éducation<br />
                    75001 Paris, France
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}