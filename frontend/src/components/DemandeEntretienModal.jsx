import React, { useState } from "react";
import { X, CheckCircle, Calendar, Send } from "lucide-react";

export default function DemandeEntretienModal({ isOpen, onClose }) {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    fullName: "",
    phone: "",
    email: "",
    educationLevel: "",
    desiredField: "",
    destination: "",
    subjects: [],
    projectDetails: "",
    interviewMode: "En présentiel",
    availability: "",
  });

  if (!isOpen) return null;

  const handleCheckboxChange = (subject) => {
    setFormData((prev) => {
      const exists = prev.subjects.includes(subject);
      return {
        ...prev,
        subjects: exists
          ? prev.subjects.filter((item) => item !== subject)
          : [...prev.subjects, subject],
      };
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Traitement de l'envoi (API, Supabase, Email, etc.)
    console.log("Données transmises :", formData);
    setSubmitted(true);
  };

  const handleResetAndClose = () => {
    setSubmitted(false);
    setFormData({
      fullName: "",
      phone: "",
      email: "",
      educationLevel: "",
      desiredField: "",
      destination: "",
      subjects: [],
      projectDetails: "",
      interviewMode: "En présentiel",
      availability: "",
    });
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm overflow-y-auto">
      <div className="relative w-full max-w-3xl bg-white rounded-lg shadow-2xl overflow-hidden my-8 max-h-[90vh] flex flex-col">
        
        {/* En-tête de la Modale */}
        <div className="bg-[#1a365d] text-white p-6 flex justify-between items-center shrink-0">
          <div>
            <span className="text-[#eab308] text-xs font-black uppercase tracking-widest block">
              Prise de rendez-vous
            </span>
            <h2 className="text-xl md:text-2xl font-black uppercase">
              Formulaire de demande d'entretien
            </h2>
          </div>
          <button
            onClick={handleResetAndClose}
            className="text-white/80 hover:text-white p-2 rounded-full hover:bg-white/10 transition-colors"
          >
            <X size={24} />
          </button>
        </div>

        {/* Corps de la Modale */}
        <div className="p-6 md:p-8 overflow-y-auto space-y-6">
          {submitted ? (
            /* Petit message après validation */
            <div className="py-12 text-center space-y-6 animate-in fade-in zoom-in duration-300">
              <div className="w-20 h-20 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto">
                <CheckCircle size={48} />
              </div>
              <div className="space-y-2 max-w-md mx-auto">
                <h3 className="text-2xl font-black text-[#1a365d]">
                  Merci pour votre demande !
                </h3>
                <p className="text-gray-700 text-base leading-relaxed">
                  Notre équipe prendra contact avec vous dans les meilleurs délais afin de confirmer votre entretien.
                </p>
              </div>
              <button
                onClick={handleResetAndClose}
                className="bg-[#1a365d] text-white px-8 py-3 rounded-sm font-bold uppercase text-xs tracking-widest hover:bg-[#eab308] hover:text-[#1a365d] transition-all shadow-md"
              >
                Fermer la fenêtre
              </button>
            </div>
          ) : (
            /* Formulaire complet */
            <form onSubmit={handleSubmit} className="space-y-6 text-gray-800">
              
              {/* Informations personnelles */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-gray-700 mb-1">
                    Nom et prénom *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.fullName}
                    onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                    className="w-full px-4 py-2.5 border border-gray-300 rounded-sm focus:ring-2 focus:ring-[#1a365d] focus:border-transparent outline-none transition-all"
                    placeholder="Votre nom complet"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-gray-700 mb-1">
                    Téléphone / WhatsApp *
                  </label>
                  <input
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full px-4 py-2.5 border border-gray-300 rounded-sm focus:ring-2 focus:ring-[#1a365d] focus:border-transparent outline-none transition-all"
                    placeholder="+225 07 00 00 00 00"
                  />
                </div>

                <div className="md:col-span-2">
                  <label className="block text-xs font-bold uppercase tracking-wider text-gray-700 mb-1">
                    Adresse e-mail *
                  </label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-4 py-2.5 border border-gray-300 rounded-sm focus:ring-2 focus:ring-[#1a365d] focus:border-transparent outline-none transition-all"
                    placeholder="exemple@email.com"
                  />
                </div>
              </div>

              {/* Niveau & Domaine d'études */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-gray-700 mb-1">
                    Niveau d’études actuel *
                  </label>
                  <select
                    required
                    value={formData.educationLevel}
                    onChange={(e) => setFormData({ ...formData, educationLevel: e.target.value })}
                    className="w-full px-4 py-2.5 border border-gray-300 rounded-sm focus:ring-2 focus:ring-[#1a365d] focus:border-transparent outline-none transition-all bg-white"
                  >
                    <option value="">Sélectionner</option>
                    <option value="Collège">Collège</option>
                    <option value="Lycée">Lycée</option>
                    <option value="Terminale">Terminale</option>
                    <option value="Bachelier">Bachelier</option>
                    <option value="Licence">Licence</option>
                    <option value="Master">Master</option>
                    <option value="Jeune diplômé">Jeune diplômé</option>
                    <option value="Professionnel">Professionnel</option>
                    <option value="Autre">Autre</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-gray-700 mb-1">
                    Domaine d’études souhaité *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.desiredField}
                    onChange={(e) => setFormData({ ...formData, desiredField: e.target.value })}
                    className="w-full px-4 py-2.5 border border-gray-300 rounded-sm focus:ring-2 focus:ring-[#1a365d] focus:border-transparent outline-none transition-all"
                    placeholder="Ex: Informatique, Droit, Management..."
                  />
                </div>
              </div>

              {/* Destination */}
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-gray-700 mb-1">
                  Destination envisagée
                </label>
                <select
                  value={formData.destination}
                  onChange={(e) => setFormData({ ...formData, destination: e.target.value })}
                  className="w-full px-4 py-2.5 border border-gray-300 rounded-sm focus:ring-2 focus:ring-[#1a365d] focus:border-transparent outline-none transition-all bg-white"
                >
                  <option value="">Sélectionner</option>
                  <option value="Côte d’Ivoire">Côte d’Ivoire</option>
                  <option value="France">France</option>
                  <option value="Belgique">Belgique</option>
                  <option value="Canada">Canada</option>
                  <option value="Espagne">Espagne</option>
                  <option value="Royaume-Uni">Royaume-Uni</option>
                  <option value="Maroc">Maroc</option>
                  <option value="Autre">Autre</option>
                </select>
              </div>

              {/* Objet de votre demande */}
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-gray-700 mb-2">
                  Objet de votre demande *
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 bg-gray-50 p-4 rounded-sm border border-gray-200">
                  {[
                    "Orientation académique",
                    "Choix d’une formation",
                    "Études à l’étranger",
                    "Admission dans une école/université",
                    "Préparation aux concours",
                    "Préparation à un entretien",
                    "Autre",
                  ].map((item) => (
                    <label key={item} className="flex items-center space-x-3 cursor-pointer text-sm">
                      <input
                        type="checkbox"
                        checked={formData.subjects.includes(item)}
                        onChange={() => handleCheckboxChange(item)}
                        className="w-4 h-4 text-[#1a365d] rounded border-gray-300 focus:ring-[#1a365d]"
                      />
                      <span className="text-gray-700">{item}</span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Votre projet / votre besoin */}
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-gray-700 mb-1">
                  Votre projet / votre besoin
                </label>
                <textarea
                  rows={3}
                  value={formData.projectDetails}
                  onChange={(e) => setFormData({ ...formData, projectDetails: e.target.value })}
                  className="w-full px-4 py-2.5 border border-gray-300 rounded-sm focus:ring-2 focus:ring-[#1a365d] focus:border-transparent outline-none transition-all"
                  placeholder="Décrivez brièvement vos attentes ou objectifs..."
                ></textarea>
              </div>

              {/* Préférences pour l'entretien */}
              <div className="border-t border-gray-200 pt-4 space-y-4">
                <h4 className="text-sm font-black uppercase text-[#1a365d]">
                  Préférence pour l’entretien
                </h4>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-gray-600 mb-2">
                    Mode d’entretien souhaité :
                  </label>
                  <div className="flex flex-wrap gap-4">
                    {["En présentiel", "En visioconférence", "Téléphone / WhatsApp"].map((mode) => (
                      <label key={mode} className="flex items-center space-x-2 cursor-pointer text-sm">
                        <input
                          type="radio"
                          name="interviewMode"
                          value={mode}
                          checked={formData.interviewMode === mode}
                          onChange={(e) => setFormData({ ...formData, interviewMode: e.target.value })}
                          className="w-4 h-4 text-[#1a365d] border-gray-300 focus:ring-[#1a365d]"
                        />
                        <span className="text-gray-700">{mode}</span>
                      </label>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-gray-600 mb-1">
                    Disponibilités souhaitées :
                  </label>
                  <input
                    type="text"
                    value={formData.availability}
                    onChange={(e) => setFormData({ ...formData, availability: e.target.value })}
                    className="w-full px-4 py-2.5 border border-gray-300 rounded-sm focus:ring-2 focus:ring-[#1a365d] focus:border-transparent outline-none transition-all"
                    placeholder="Ex: En semaine à partir de 14h, samedi matin..."
                  />
                </div>
              </div>

              {/* Bouton de soumission */}
              <div className="pt-4">
                <button
                  type="submit"
                  className="w-full bg-[#1a365d] text-white py-4 px-6 text-xs md:text-sm font-black uppercase tracking-widest hover:bg-[#eab308] hover:text-[#1a365d] transition-all duration-300 shadow-xl flex items-center justify-center space-x-2 group"
                >
                  <span>Envoyer ma demande d’entretien</span>
                  <Send size={16} className="group-hover:translate-x-1 transition-transform" />
                </button>
              </div>

            </form>
          )}
        </div>
      </div>
    </div>
  );
}