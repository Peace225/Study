import { Star, Quote } from "lucide-react";

export default function Temoignages() {
  const reviews = [
    { name: "Gabin G.", uni: "University of Warwick", text: "J'ai eu une excellente expérience avec LM Global Education ! Un grand merci à l'équipe pour m'avoir accompagné du début à la fin dans mon projet d'études au Royaume-Uni." },
    { name: "Mélissa F.", uni: "McGill University", text: "L'équipe m'a suivie à chaque étape de mon année de terminale pour accomplir mon but d'étudier au Canada. Un suivi irréprochable et très rassurant pour mes parents." },
    { name: "Antoine D.", uni: "King's College London", text: "Une équipe à l'écoute et très réactive. Grâce à leurs conseils précieux, j'ai pu intégrer l'université de mes rêves à Londres. Je recommande à 100% !" },
    { name: "Clara M.", uni: "University of Sydney", text: "Partir en Australie me semblait une montagne. LM Global Education a simplifié toutes les démarches, du visa à l'inscription. Merci !" },
    { name: "Hugo T.", uni: "IE University Madrid", text: "Des conseils pointus et une vraie connaissance des attentes des universités. Mon dossier a été grandement valorisé." },
    { name: "Sarah L.", uni: "UCLA", text: "Leur accompagnement pour les universités américaines est exceptionnel. La préparation au SAT et l'aide pour les essays ont fait la différence." }
  ];

  return (
    <div className="w-full bg-[#fafafa] font-sans pt-24">
      
      {/* HERO SECTION */}
      <section className="bg-[#1a365d] py-20 text-center relative overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-[radial-gradient(circle_at_center,rgba(234,179,8,0.1)_0%,transparent_60%)]"></div>
        <div className="relative z-10 animate-in fade-in slide-in-from-bottom-5 duration-700">
          <h1 className="text-3xl md:text-5xl font-black uppercase text-white tracking-tight mb-4">
            Témoignages
          </h1>
          <div className="h-[3px] w-16 bg-[#eab308] mx-auto mb-6"></div>
          <p className="text-white/80 font-light max-w-2xl mx-auto px-6">
            Ils nous ont fait confiance pour réaliser leur rêve. Découvrez les retours d'expérience des étudiants accompagnés par <strong className="text-white">LM Global Education</strong>.
          </p>
        </div>
      </section>

      {/* GRILLE DE TÉMOIGNAGES */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reviews.map((review, idx) => (
            <div key={idx} className="bg-white p-8 border-t-4 border-[#eab308] shadow-[0_10px_30px_rgba(0,0,0,0.05)] hover:-translate-y-2 hover:shadow-[0_20px_40px_rgba(26,54,93,0.1)] transition-all duration-500 relative">
              <Quote className="absolute top-6 right-6 text-gray-100" size={60} />
              <div className="flex text-[#eab308] mb-4 relative z-10">
                {[...Array(5)].map((_, i) => <Star key={i} size={16} fill="currentColor" strokeWidth={0} />)}
              </div>
              <p className="text-gray-600 font-light italic leading-relaxed mb-8 relative z-10 min-h-[100px]">
                "{review.text}"
              </p>
              <div className="relative z-10">
                <h4 className="text-[15px] font-bold text-[#1a365d] uppercase tracking-wider">{review.name}</h4>
                <span className="text-[12px] text-gray-400 font-medium uppercase">{review.uni}</span>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}