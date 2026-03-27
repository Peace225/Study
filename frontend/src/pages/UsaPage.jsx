import { Link } from "react-router-dom";
import { Landmark, Activity, Briefcase, Building, CheckCircle2 } from "lucide-react";

export default function UsaPage() {
  return (
    <div className="pt-24 min-h-screen bg-white font-sans">
      <section 
        className="relative py-32 px-6 text-center bg-cover bg-center"
        style={{ backgroundImage: "url('https://images.unsplash.com/photo-1496442226666-8d4d0e62e6e9?q=80&w=1920&auto=format&fit=crop')" }}
      >
        <div className="absolute inset-0 bg-[#1a365d]/80 backdrop-blur-[2px]" />
        <div className="relative z-10 max-w-[1000px] mx-auto text-white">
          <span className="text-[#eab308] font-bold tracking-[0.2em] uppercase text-sm mb-4 block">
            Étudier aux
          </span>
          <h1 className="text-5xl md:text-7xl font-black uppercase tracking-tight mb-6">États-Unis</h1>
          <p className="text-lg md:text-xl text-gray-200 font-light max-w-2xl mx-auto">
            Le rêve américain à portée de main : des campus tentaculaires, une flexibilité académique totale et des universités de renommée mondiale.
          </p>
        </div>
      </section>

      <section className="py-20 px-6 max-w-[1200px] mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-[#1a365d] mb-4">Pourquoi traverser l'Atlantique ?</h2>
          <div className="w-24 h-1 bg-[#eab308] mx-auto mb-8"></div>
        </div>

        <div className="grid md:grid-cols-3 gap-10">
          <div className="text-center">
            <div className="w-16 h-16 bg-gray-50 rounded-full flex items-center justify-center text-[#1a365d] mx-auto mb-6">
              <Landmark size={32} />
            </div>
            <h3 className="text-xl font-bold mb-3">Prestige Absolu</h3>
            <p className="text-gray-600">Les universités américaines dominent tous les classements mondiaux (Ivy League, MIT, Stanford...). Un véritable tremplin professionnel.</p>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 bg-gray-50 rounded-full flex items-center justify-center text-[#1a365d] mx-auto mb-6">
              <Activity size={32} />
            </div>
            <h3 className="text-xl font-bold mb-3">La Vie de Campus</h3>
            <p className="text-gray-600">Clubs, fraternités, équipes sportives professionnelles (NCAA) : l'expérience étudiante américaine est unique au monde.</p>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 bg-gray-50 rounded-full flex items-center justify-center text-[#1a365d] mx-auto mb-6">
              <Briefcase size={32} />
            </div>
            <h3 className="text-xl font-bold mb-3">OPT (Visa de travail)</h3>
            <p className="text-gray-600">Le programme OPT (Optional Practical Training) permet de travailler 1 à 3 ans aux États-Unis directement après l'obtention de son diplôme.</p>
          </div>
        </div>
      </section>

      <section className="bg-gray-50 py-20 px-6">
        <div className="max-w-[1200px] mx-auto grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-3xl font-bold text-[#1a365d] mb-6">Flexibilité du cursus (Major/Minor)</h2>
            <p className="text-gray-600 mb-6">Contrairement à l'Europe, les étudiants américains n'ont pas besoin de choisir leur spécialité dès la première année (Liberal Arts).</p>
            <ul className="space-y-4">
              <li className="flex items-start">
                <CheckCircle2 className="text-[#eab308] mr-4 mt-1 flex-shrink-0" size={24} />
                <p className="text-gray-700"><strong className="text-gray-900">Bachelor's Degree :</strong> Dure 4 ans. Les deux premières années sont générales, on déclare sa "Major" (spécialité) en 3ème année.</p>
              </li>
              <li className="flex items-start">
                <CheckCircle2 className="text-[#eab308] mr-4 mt-1 flex-shrink-0" size={24} />
                <p className="text-gray-700"><strong className="text-gray-900">Community Colleges :</strong> Formation en 2 ans permettant d'obtenir un "Associate Degree", puis de transférer en 3ème année d'université (passerelle très économique).</p>
              </li>
            </ul>
          </div>
          
          <div className="bg-white p-8 border-t-4 border-[#1a365d] shadow-xl rounded-b-xl">
            <div className="flex items-center mb-6">
              <Building className="text-[#1a365d] mr-3" size={28} />
              <h3 className="text-2xl font-bold text-gray-900">Un réseau immense</h3>
            </div>
            <p className="text-gray-600 mb-6">Nous plaçons nos étudiants dans des centaines d'établissements, du Community College à l'Ivy League :</p>
            <ul className="list-disc pl-5 space-y-2 text-gray-700 font-medium">
              <li>Columbia University (Ivy League)</li>
              <li>University of California (UCLA, Berkeley...)</li>
              <li>New York University (NYU)</li>
              <li>Hult International Business School</li>
              <li>Northeastern University</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="bg-[#eab308] py-16 text-center">
        <h2 className="text-3xl font-black text-[#1a365d] uppercase tracking-tight mb-6">Visez les États-Unis !</h2>
        <Link to="/contact" className="inline-block bg-[#1a365d] text-white px-8 py-4 text-[13px] font-bold uppercase tracking-[0.15em] hover:bg-white hover:text-[#1a365d] shadow-xl">
          Préparer ma candidature
        </Link>
      </section>
    </div>
  );
}