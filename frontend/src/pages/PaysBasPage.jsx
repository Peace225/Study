import { Link } from "react-router-dom";
import { Bike, Euro, BookOpen, Building, CheckCircle2 } from "lucide-react";

export default function PaysBasPage() {
  return (
    <div className="pt-24 min-h-screen bg-white font-sans">
      <section 
        className="relative py-32 px-6 text-center bg-cover bg-center"
        style={{ backgroundImage: "url('https://images.unsplash.com/photo-1517736996303-4eec4a66bb17?q=80&w=1920&auto=format&fit=crop')" }}
      >
        <div className="absolute inset-0 bg-[#1a365d]/80 backdrop-blur-[2px]" />
        <div className="relative z-10 max-w-[1000px] mx-auto text-white">
          <span className="text-[#eab308] font-bold tracking-[0.2em] uppercase text-sm mb-4 block">
            Étudier aux
          </span>
          <h1 className="text-5xl md:text-7xl font-black uppercase tracking-tight mb-6">Pays-Bas</h1>
          <p className="text-lg md:text-xl text-gray-200 font-light max-w-2xl mx-auto">
            La meilleure alternative au Royaume-Uni. Le plus grand choix de formations anglophones en Europe continentale, avec des frais de scolarité très accessibles.
          </p>
        </div>
      </section>

      <section className="py-20 px-6 max-w-[1200px] mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-[#1a365d] mb-4">Pourquoi choisir la Hollande ?</h2>
          <div className="w-24 h-1 bg-[#eab308] mx-auto mb-8"></div>
        </div>

        <div className="grid md:grid-cols-3 gap-10">
          <div className="text-center">
            <div className="w-16 h-16 bg-gray-50 rounded-full flex items-center justify-center text-[#1a365d] mx-auto mb-6">
              <BookOpen size={32} />
            </div>
            <h3 className="text-xl font-bold mb-3">100% Anglophone</h3>
            <p className="text-gray-600">Avec plus de 2100 programmes enseignés entièrement en anglais, vous n'avez pas besoin de parler néerlandais pour y étudier ou y vivre.</p>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 bg-gray-50 rounded-full flex items-center justify-center text-[#1a365d] mx-auto mb-6">
              <Euro size={32} />
            </div>
            <h3 className="text-xl font-bold mb-3">Abordable (UE)</h3>
            <p className="text-gray-600">Pour les citoyens européens, les frais de scolarité sont fixés par l'État (environ 2 300€/an), rendant l'excellence très accessible.</p>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 bg-gray-50 rounded-full flex items-center justify-center text-[#1a365d] mx-auto mb-6">
              <Bike size={32} />
            </div>
            <h3 className="text-xl font-bold mb-3">Qualité de Vie</h3>
            <p className="text-gray-600">Un pays sûr, écologique, centré sur le vélo et l'innovation, avec une mentalité très ouverte et internationale.</p>
          </div>
        </div>
      </section>

      <section className="bg-gray-50 py-20 px-6">
        <div className="max-w-[1200px] mx-auto grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-3xl font-bold text-[#1a365d] mb-6">Un système binaire unique</h2>
            <p className="text-gray-600 mb-6">Le système néerlandais sépare les études de recherche et les études appliquées :</p>
            <ul className="space-y-4">
              <li className="flex items-start">
                <CheckCircle2 className="text-[#eab308] mr-4 mt-1 flex-shrink-0" size={24} />
                <p className="text-gray-700"><strong className="text-gray-900">Universités de Recherche (WO) :</strong> Bachelor en 3 ans. Théorique et académique, idéal pour poursuivre en Master ou en Doctorat.</p>
              </li>
              <li className="flex items-start">
                <CheckCircle2 className="text-[#eab308] mr-4 mt-1 flex-shrink-0" size={24} />
                <p className="text-gray-700"><strong className="text-gray-900">Universités de Sciences Appliquées (HBO) :</strong> Bachelor en 4 ans. Très axé sur la pratique avec de longs stages obligatoires, idéal pour entrer directement sur le marché du travail.</p>
              </li>
            </ul>
          </div>
          
          <div className="bg-white p-8 border-t-4 border-[#1a365d] shadow-xl rounded-b-xl">
            <div className="flex items-center mb-6">
              <Building className="text-[#1a365d] mr-3" size={28} />
              <h3 className="text-2xl font-bold text-gray-900">Exemples d'universités</h3>
            </div>
            <ul className="list-disc pl-5 space-y-2 text-gray-700 font-medium">
              <li>University of Amsterdam (UvA)</li>
              <li>Erasmus University Rotterdam</li>
              <li>Maastricht University</li>
              <li>The Hague University of Applied Sciences</li>
              <li>Breda University of Applied Sciences (BUas)</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="bg-[#eab308] py-16 text-center">
        <h2 className="text-3xl font-black text-[#1a365d] uppercase tracking-tight mb-6">Prêt à enfourcher votre vélo ?</h2>
        <Link to="/contact" className="inline-block bg-[#1a365d] text-white px-8 py-4 text-[13px] font-bold uppercase tracking-[0.15em] hover:bg-white hover:text-[#1a365d] shadow-xl">
          Construire mon dossier
        </Link>
      </section>
    </div>
  );
}