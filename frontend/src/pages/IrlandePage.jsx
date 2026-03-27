import { Link } from "react-router-dom";
import { MessageSquare, Laptop, Smile, Building, CheckCircle2 } from "lucide-react";

export default function IrlandePage() {
  return (
    <div className="pt-24 min-h-screen bg-white font-sans">
      <section 
        className="relative py-32 px-6 text-center bg-cover bg-center"
        style={{ backgroundImage: "url('https://images.unsplash.com/photo-1590089415225-401ed6f9db8e?q=80&w=1920&auto=format&fit=crop')" }}
      >
        <div className="absolute inset-0 bg-[#1a365d]/80 backdrop-blur-[2px]" />
        <div className="relative z-10 max-w-[1000px] mx-auto text-white">
          <span className="text-[#eab308] font-bold tracking-[0.2em] uppercase text-sm mb-4 block">
            Étudier en
          </span>
          <h1 className="text-5xl md:text-7xl font-black uppercase tracking-tight mb-6">Irlande</h1>
          <p className="text-lg md:text-xl text-gray-200 font-light max-w-2xl mx-auto">
            La destination anglophone montante en Europe post-Brexit. Un accueil légendaire et des opportunités de carrière exceptionnelles.
          </p>
        </div>
      </section>

      <section className="py-20 px-6 max-w-[1200px] mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-[#1a365d] mb-4">Pourquoi choisir l'Irlande ?</h2>
          <div className="w-24 h-1 bg-[#eab308] mx-auto mb-8"></div>
        </div>

        <div className="grid md:grid-cols-3 gap-10">
          <div className="text-center">
            <div className="w-16 h-16 bg-gray-50 rounded-full flex items-center justify-center text-[#1a365d] mx-auto mb-6">
              <MessageSquare size={32} />
            </div>
            <h3 className="text-xl font-bold mb-3">100% Anglophone (UE)</h3>
            <p className="text-gray-600">C'est désormais le seul pays majoritairement anglophone de l'Union Européenne, facilitant les démarches de visas pour les européens.</p>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 bg-gray-50 rounded-full flex items-center justify-center text-[#1a365d] mx-auto mb-6">
              <Laptop size={32} />
            </div>
            <h3 className="text-xl font-bold mb-3">La Silicon Valley d'Europe</h3>
            <p className="text-gray-600">Dublin abrite les sièges européens des géants de la tech (Google, Meta, Apple, Microsoft...), idéal pour trouver un emploi post-diplôme.</p>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 bg-gray-50 rounded-full flex items-center justify-center text-[#1a365d] mx-auto mb-6">
              <Smile size={32} />
            </div>
            <h3 className="text-xl font-bold mb-3">Hospitalité Légendaire</h3>
            <p className="text-gray-600">Les Irlandais sont réputés pour être parmi les peuples les plus chaleureux au monde. L'intégration y est très facile.</p>
          </div>
        </div>
      </section>

      <section className="bg-gray-50 py-20 px-6">
        <div className="max-w-[1200px] mx-auto grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-3xl font-bold text-[#1a365d] mb-6">Un système très proche du UK</h2>
            <ul className="space-y-4">
              <li className="flex items-start">
                <CheckCircle2 className="text-[#eab308] mr-4 mt-1 flex-shrink-0" size={24} />
                <p className="text-gray-700"><strong className="text-gray-900">Honours Bachelor Degree :</strong> En 3 ou 4 ans (Level 8). L'équivalent direct de la licence.</p>
              </li>
              <li className="flex items-start">
                <CheckCircle2 className="text-[#eab308] mr-4 mt-1 flex-shrink-0" size={24} />
                <p className="text-gray-700"><strong className="text-gray-900">Master Degree :</strong> En 1 an (Level 9). Hautement qualifiant.</p>
              </li>
              <li className="flex items-start">
                <CheckCircle2 className="text-[#eab308] mr-4 mt-1 flex-shrink-0" size={24} />
                <p className="text-gray-700"><strong className="text-gray-900">Post-Study Work Visa :</strong> Possibilité de rester travailler en Irlande 1 à 2 ans après vos études.</p>
              </li>
            </ul>
          </div>
          
          <div className="bg-white p-8 border-t-4 border-[#1a365d] shadow-xl rounded-b-xl">
            <div className="flex items-center mb-6">
              <Building className="text-[#1a365d] mr-3" size={28} />
              <h3 className="text-2xl font-bold text-gray-900">Exemples d'universités</h3>
            </div>
            <ul className="list-disc pl-5 space-y-2 text-gray-700 font-medium">
              <li>Trinity College Dublin (TCD)</li>
              <li>University College Dublin (UCD)</li>
              <li>National University of Ireland, Galway (NUIG)</li>
              <li>Dublin City University (DCU)</li>
              <li>University College Cork (UCC)</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="bg-[#eab308] py-16 text-center">
        <h2 className="text-3xl font-black text-[#1a365d] uppercase tracking-tight mb-6">L'Irlande vous tente ?</h2>
        <Link to="/contact" className="inline-block bg-[#1a365d] text-white px-8 py-4 text-[13px] font-bold uppercase tracking-[0.15em] hover:bg-white hover:text-[#1a365d] shadow-xl">
          Parler à un expert de l'Irlande
        </Link>
      </section>
    </div>
  );
}