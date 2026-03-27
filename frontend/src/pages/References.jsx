import { ShieldCheck, Award, Star } from "lucide-react";

export default function References() {
  const references = [
    { name: "ICEF", url: "/images/icef.png", desc: "Agence reconnue pour son excellence dans le conseil éducatif international." },
    { name: "UCAS", url: "/images/ucas.png", desc: "Centre officiel pour les inscriptions dans les universités britanniques." },
    { name: "British Council", url: "/images/ielts.png", desc: "Partenaire de confiance pour la préparation et le passage de l'IELTS." },
    { name: "UK Agent Quality Framework", url: "/images/australia.jpg", desc: "Certifié pour le respect des normes éthiques les plus strictes." },
    { name: "PIER", url: "/images/pier.png", desc: "Spécialistes certifiés pour l'éducation en Australie." }
  ];

  return (
    <div className="w-full bg-[#fafafa] font-sans pt-24">
      
      {/* HERO SECTION */}
      <section className="bg-[#1a365d] py-20 text-center relative overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-[radial-gradient(circle_at_center,rgba(234,179,8,0.1)_0%,transparent_60%)]"></div>
        <div className="relative z-10 animate-in fade-in slide-in-from-bottom-5 duration-700">
          <h1 className="text-3xl md:text-5xl font-black uppercase text-white tracking-tight mb-4">
            Nos Références
          </h1>
          <div className="h-[3px] w-16 bg-[#eab308] mx-auto mb-6"></div>
          <p className="text-white/80 font-light max-w-2xl mx-auto px-6">
            L'excellence de <strong className="text-white">LM Global Education</strong> est certifiée par les institutions éducatives mondiales les plus exigeantes.
          </p>
        </div>
      </section>

      {/* GRILLE DES RÉFÉRENCES */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {references.map((ref, idx) => (
            <div key={idx} className="bg-white p-10 border border-gray-100 shadow-[0_10px_30px_rgba(0,0,0,0.05)] hover:-translate-y-2 hover:shadow-[0_20px_40px_rgba(26,54,93,0.1)] transition-all duration-500 group flex flex-col items-center text-center">
              <div className="h-24 flex items-center justify-center mb-8">
                <img src={ref.url} alt={ref.name} className="max-h-full max-w-[160px] object-contain group-hover:scale-105 transition-transform duration-500" />
              </div>
              <h3 className="text-[15px] font-bold text-[#1a365d] uppercase tracking-wider mb-3">
                {ref.name}
              </h3>
              <p className="text-gray-500 text-[14px] font-light leading-relaxed">
                {ref.desc}
              </p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}