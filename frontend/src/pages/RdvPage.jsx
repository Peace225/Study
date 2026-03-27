import { useState } from "react";
import { Calendar as CalendarIcon, Clock, CheckCircle2, Video, ArrowRight, User } from "lucide-react";
import { Link } from "react-router-dom";

export default function RdvPage() {
  const [step, setStep] = useState(1);
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedTime, setSelectedTime] = useState(null);
  
  // Dates fictives pour la démo
  const availableDates = ["14 Oct", "15 Oct", "16 Oct", "17 Oct", "18 Oct"];
  const availableTimes = ["09:30", "11:00", "14:30", "16:00"];

  const handleBooking = (e) => {
    e.preventDefault();
    setStep(3); // Étape de confirmation
  };

  return (
    <div className="pt-24 min-h-screen bg-gray-50 font-sans pb-20">
      
      {/* En-tête */}
      <div className="bg-[#1a365d] py-16 px-6 text-center text-white">
        <h1 className="text-3xl md:text-5xl font-black uppercase tracking-tight mb-4">Réserver une consultation</h1>
        <p className="text-gray-300 max-w-2xl mx-auto text-lg">
          Choisissez un créneau pour échanger gratuitement par vidéo avec l'un de nos conseillers experts en admission internationale.
        </p>
      </div>

      <div className="max-w-[1000px] mx-auto px-6 mt-12">
        <div className="bg-white shadow-xl border-t-4 border-[#eab308] flex flex-col md:flex-row overflow-hidden">
          
          {/* Section d'information (gauche) */}
          <div className="md:w-1/3 bg-gray-50 p-8 border-r border-gray-100">
            <h3 className="font-bold text-[#1a365d] text-xl mb-6">Consultation d'orientation</h3>
            <div className="space-y-4 text-sm text-gray-600 font-medium">
              <div className="flex items-center"><Video size={18} className="text-[#eab308] mr-3" /> Visioconférence (Google Meet)</div>
              <div className="flex items-center"><Clock size={18} className="text-[#eab308] mr-3" /> 45 minutes</div>
            </div>
            <div className="mt-8 pt-8 border-t border-gray-200">
              <p className="text-sm text-gray-500 italic">
                "Lors de cet échange, nous évaluerons votre profil, discuterons de vos objectifs et identifierons les meilleures options d'études à l'étranger pour vous."
              </p>
            </div>
          </div>

          {/* Interface de réservation (droite) */}
          <div className="md:w-2/3 p-8 md:p-12">
            
            {/* ÉTAPE 1 : Choix de la date et l'heure */}
            {step === 1 && (
              <div className="animate-in fade-in">
                <h2 className="text-xl font-black text-[#1a365d] uppercase mb-6 flex items-center">
                  1. Sélectionnez un créneau
                </h2>
                
                <div className="mb-6">
                  <label className="block text-xs font-bold text-gray-500 uppercase tracking-wider mb-3"><CalendarIcon size={14} className="inline mr-1" /> Jours disponibles</label>
                  <div className="flex flex-wrap gap-3">
                    {availableDates.map(date => (
                      <button 
                        key={date}
                        onClick={() => setSelectedDate(date)}
                        className={`py-2 px-4 text-sm font-bold border-2 transition-all ${selectedDate === date ? "border-[#1a365d] bg-[#1a365d] text-white" : "border-gray-200 text-gray-600 hover:border-[#eab308]"}`}
                      >
                        {date}
                      </button>
                    ))}
                  </div>
                </div>

                {selectedDate && (
                  <div className="mb-8 animate-in slide-in-from-top-4">
                    <label className="block text-xs font-bold text-gray-500 uppercase tracking-wider mb-3"><Clock size={14} className="inline mr-1" /> Heures disponibles</label>
                    <div className="flex flex-wrap gap-3">
                      {availableTimes.map(time => (
                        <button 
                          key={time}
                          onClick={() => setSelectedTime(time)}
                          className={`py-2 px-4 text-sm font-bold border-2 transition-all ${selectedTime === time ? "border-[#eab308] bg-[#eab308] text-[#1a365d]" : "border-gray-200 text-gray-600 hover:border-[#1a365d]"}`}
                        >
                          {time}
                        </button>
                      ))}
                    </div>
                  </div>
                )}

                <button 
                  onClick={() => setStep(2)}
                  disabled={!selectedDate || !selectedTime}
                  className={`w-full py-4 text-[13px] font-bold uppercase tracking-widest flex items-center justify-center transition-all ${selectedDate && selectedTime ? "bg-[#1a365d] text-white hover:bg-[#eab308] hover:text-[#1a365d]" : "bg-gray-200 text-gray-400 cursor-not-allowed"}`}
                >
                  Continuer <ArrowRight size={16} className="ml-2" />
                </button>
              </div>
            )}

            {/* ÉTAPE 2 : Informations personnelles */}
            {step === 2 && (
              <div className="animate-in fade-in slide-in-from-right-8">
                <button onClick={() => setStep(1)} className="text-sm text-gray-400 font-bold uppercase hover:text-[#1a365d] mb-6 flex items-center">
                  &larr; Retour
                </button>
                <h2 className="text-xl font-black text-[#1a365d] uppercase mb-2">
                  2. Vos coordonnées
                </h2>
                <p className="text-sm text-gray-500 mb-6 font-medium">
                  Créneau sélectionné : <strong className="text-[#1a365d]">{selectedDate} à {selectedTime}</strong>
                </p>

                <form onSubmit={handleBooking} className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-gray-500 uppercase mb-1">Prénom</label>
                      <input type="text" required className="w-full border-b-2 border-gray-200 py-2 outline-none focus:border-[#eab308] bg-transparent" />
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-gray-500 uppercase mb-1">Nom</label>
                      <input type="text" required className="w-full border-b-2 border-gray-200 py-2 outline-none focus:border-[#eab308] bg-transparent" />
                    </div>
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-gray-500 uppercase mb-1">Email</label>
                    <input type="email" required className="w-full border-b-2 border-gray-200 py-2 outline-none focus:border-[#eab308] bg-transparent" />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-gray-500 uppercase mb-1">Téléphone</label>
                    <input type="tel" required className="w-full border-b-2 border-gray-200 py-2 outline-none focus:border-[#eab308] bg-transparent" />
                  </div>
                  <button type="submit" className="w-full bg-[#1a365d] text-white py-4 text-[13px] font-bold uppercase tracking-widest hover:bg-[#eab308] hover:text-[#1a365d] transition-all mt-4">
                    Confirmer le rendez-vous
                  </button>
                </form>
              </div>
            )}

            {/* ÉTAPE 3 : Confirmation */}
            {step === 3 && (
              <div className="text-center animate-in zoom-in-95 py-10">
                <CheckCircle2 size={64} className="mx-auto text-green-500 mb-6" />
                <h2 className="text-2xl font-black text-[#1a365d] uppercase mb-4">Réservation confirmée !</h2>
                <p className="text-gray-600 mb-8">
                  Votre rendez-vous du <strong>{selectedDate} à {selectedTime}</strong> a bien été enregistré. Un email contenant le lien de la visioconférence vous a été envoyé.
                </p>
                <Link to="/" className="inline-block bg-transparent border-2 border-[#1a365d] text-[#1a365d] px-8 py-3 text-[13px] font-bold uppercase tracking-widest hover:bg-[#1a365d] hover:text-white transition-all">
                  Retour à l'accueil
                </Link>
              </div>
            )}

          </div>
        </div>
      </div>
    </div>
  );
}