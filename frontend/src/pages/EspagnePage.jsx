import { Link } from "react-router-dom";
import { Sun, Euro, BookOpen, Building, CheckCircle2 } from "lucide-react";

export default function EspagnePage() {
  return (
    <div className="pt-24 min-h-screen bg-white font-sans">
      <section 
        className="relative py-32 px-6 text-center bg-cover bg-center"
        style={{ backgroundImage: "url('https://images.unsplash.com/photo-1543783207-ec64e4d95325?q=80&w=1920&auto=format&fit=crop')" }}
      >
        <div className="absolute inset-0 bg-[#1a365d]/80 backdrop-blur-[2px]" />
        <div className="relative z-10 max-w-[1000px] mx-auto text-white">
          <span className="text-[#eab308] font-bold tracking-[0.2em] uppercase text-sm mb-4 block">
            Étudier en
          </span>
          <h1 className="text-5xl md:text-7xl font-black uppercase tracking-tight mb-6">Espagne</h1>
          <p className="text-lg md:text-xl text-gray-200 font-light max-w-2xl mx-auto">
            Alliez l'excellence des meilleures Business Schools européennes à une qualité de vie ensoleillée et incomparable.
          </p>
        </div>
      </section>

      <section className="py-20 px-6 max-w-[1200px] mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-[#1a365d] mb-4">Pourquoi choisir la péninsule ibérique ?</h2>
          <div className="w-24 h-1 bg-[#eab308] mx-auto mb-8"></div>
        </div>

        <div className="grid md:grid-cols-3 gap-10">
          <div className="text-center">
            <div className="w-16 h-16 bg-gray-50 rounded-full flex items-center justify-center text-[#1a365d] mx-auto mb-6">
              <BookOpen size={32} />
            </div>
            <h3 className="text-xl font-bold mb-3">Enseignement Bilingue</h3>
            <p className="text-gray-600">L'Espagne propose d'excellents cursus 100% en anglais, vous permettant de devenir trilingue (Français, Anglais, Espagnol) sur place.</p>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 bg-gray-50 rounded-full flex items-center justify-center text-[#1a365d] mx-auto mb-6">
              <Euro size={32} />
            </div>
            <h3 className="text-xl font-bold mb-3">Coût de la vie abordable</h3>
            <p className="text-gray-600">Le logement, les transports et les loisirs y sont nettement moins chers que dans la plupart des autres pays d'Europe de l'Ouest.</p>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 bg-gray-50 rounded-full flex items-center justify-center text-[#1a365d] mx-auto mb-6">
              <Sun size={32} />
            </div>
            <h3 className="text-xl font-bold mb-3">Cadre de vie idéal</h3>
            <p className="text-gray-600">Un climat exceptionnel, une culture vibrante et une vie étudiante très riche font de l'Espagne une destination de cœur.</p>
          </div>
        </div>
      </section>

      <section className="bg-gray-50 py-20 px-6">
        <div className="max-w-[1200px] mx-auto grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-3xl font-bold text-[#1a365d] mb-6">Un système européen (LMD)</h2>
            <ul className="space-y-4">
              <li className="flex items-start">
                <CheckCircle2 className="text-[#eab308] mr-4 mt-1 flex-shrink-0" size={24} />
                <p className="text-gray-700"><strong className="text-gray-900">Grado (Bachelor) :</strong> Dure généralement 4 ans (240 crédits ECTS). Très professionnalisant avec de nombreux stages intégrés.</p>
              </li>
              <li className="flex items-start">
                <CheckCircle2 className="text-[#eab308] mr-4 mt-1 flex-shrink-0" size={24} />
                <p className="text-gray-700"><strong className="text-gray-900">Máster :</strong> Dure 1 à 2 ans selon la spécialité.</p>
              </li>
              <li className="flex items-start">
                <CheckCircle2 className="text-[#eab308] mr-4 mt-1 flex-shrink-0" size={24} />
                <p className="text-gray-700"><strong className="text-gray-900">L'admission (Credencial) :</strong> Les universités publiques demandent la conversion de vos notes via l'UNED, tandis que les privées ont leurs propres tests.</p>
              </li>
            </ul>
          </div>
          
          <div className="bg-white p-8 border-t-4 border-[#1a365d] shadow-xl rounded-b-xl">
            <div className="flex items-center mb-6">
              <Building className="text-[#1a365d] mr-3" size={28} />
              <h3 className="text-2xl font-bold text-gray-900">Exemples d'institutions</h3>
            </div>
            <ul className="list-disc pl-5 space-y-2 text-gray-700 font-medium">
              <li>IE University (Madrid / Ségovie)</li>
              <li>ESADE Business School (Barcelone)</li>
              <li>Universidad Europea (Madrid / Valence)</li>
              <li>UCAM (Murcie)</li>
              <li>Toulouse Business School - Campus Barcelone</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="bg-[#eab308] py-16 text-center">
        <h2 className="text-3xl font-black text-[#1a365d] uppercase tracking-tight mb-6">Séduit par l'Espagne ?</h2>
        <Link to="/contact" className="inline-block bg-[#1a365d] text-white px-8 py-4 text-[13px] font-bold uppercase tracking-[0.15em] hover:bg-white hover:text-[#1a365d] shadow-xl">
          Découvrir les programmes
        </Link>
      </section>
    </div>
  );
}