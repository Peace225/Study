import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { 
  Search, 
  GraduationCap, 
  MapPin, 
  ArrowRight, 
  Loader2 
} from "lucide-react";

// Updated Mock Data with slugs for dynamic routing
const mockUniversities = [
  {
    id: 1,
    name: "Université de Toronto",
    country: "Canada",
    description: "Une des meilleures universités au Canada avec des programmes variés pour les étudiants internationaux.",
    image: "/universities/toronto.jpg",
    slug: "universite-toronto"
  },
  {
    id: 2,
    name: "Sorbonne Université",
    country: "France",
    description: "Université prestigieuse à Paris offrant un large choix de programmes académiques.",
    image: "/universities/sorbonne.jpg",
    slug: "sorbonne-universite"
  },
  {
    id: 3,
    name: "University of Oxford",
    country: "Royaume-Uni",
    description: "Université renommée mondialement, offrant des formations d’excellence.",
    image: "/universities/oxford.jpg",
    slug: "university-oxford"
  },
  {
    id: 4,
    name: "Harvard University",
    country: "États-Unis",
    description: "Une des universités les plus prestigieuses au monde, reconnue pour la qualité de ses programmes.",
    image: "/universities/harvard.jpg",
    slug: "harvard-university"
  },
  {
    id: 5,
    name: "Universidad de Barcelona",
    country: "Espagne",
    description: "Offre un large éventail de programmes et accueille de nombreux étudiants internationaux.",
    image: "/universities/barcelona.jpg",
    slug: "universidad-barcelona"
  },
  {
    id: 6,
    name: "University of Melbourne",
    country: "Australie",
    description: "Université réputée pour ses recherches et son enseignement de qualité.",
    image: "/universities/melbourne.jpg",
    slug: "university-melbourne"
  }
];

export default function UniversitesPages() {
  const [allUniversities, setAllUniversities] = useState([]);
  const [filteredUniversities, setFilteredUniversities] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCountry, setSelectedCountry] = useState("Tous");
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  // Get unique list of countries for filtering
  const countries = ["Tous", ...new Set(mockUniversities.map(uni => uni.country))];

  useEffect(() => {
    // Simulated fetch: replace with Firestore later
    const fetchUniversities = async () => {
      try {
        await new Promise(resolve => setTimeout(resolve, 800)); // Delay
        setAllUniversities(mockUniversities);
        setFilteredUniversities(mockUniversities);
      } catch (error) {
        console.error("Erreur lors de la récupération des universités :", error);
      } finally {
        setLoading(false);
      }
    };

    fetchUniversities();
  }, []);

  // Handle Search and Country Filtering
  useEffect(() => {
    const results = allUniversities.filter(uni => 
      (uni.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
       uni.description.toLowerCase().includes(searchTerm.toLowerCase())) &&
      (selectedCountry === "Tous" || uni.country === selectedCountry)
    );
    setFilteredUniversities(results);
  }, [searchTerm, selectedCountry, allUniversities]);

  return (
    <div className="pt-24 min-h-screen bg-gray-50 font-sans pb-20">
      
      {/* HERO SECTION with Search */}
      <section className="relative py-28 px-6 text-center bg-[#1a365d] text-white">
        <div className="absoluteinset-0 opacity-10">
          <GraduationCap size={200} className="mx-auto mt-10" />
        </div>
        <div className="relative z-10 max-w-[900px] mx-auto">
          <span className="text-[#eab308] font-bold tracking-[0.2em] uppercase text-sm mb-4 block">
            Votre Partenaire Global
          </span>
          <h1 className="text-4xl md:text-6xl font-black uppercase tracking-tight mb-6 leading-tight">
            Découvrez Nos <br /> Universités Partenaires
          </h1>
          <p className="text-lg text-gray-200 font-light max-w-2xl mx-auto mb-10 leading-relaxed">
            Explorez notre réseau d'institutions prestigieuses à travers le monde. Filtrez par pays ou recherchez directement le programme de vos rêves.
          </p>
          
          {/* SEARCH & FILTER BAR */}
          <div className="bg-white p-3 shadow-2xl border border-gray-100 max-w-3xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-3 rounded-md">
            <div className="flex items-center bg-gray-50 p-3 rounded-md border border-gray-100 col-span-2">
              <Search size={20} className="text-gray-400 mr-2" />
              <input 
                type="text" 
                placeholder="Ex: Business, Engineering, Computer Science..." 
                className="w-full text-sm font-medium outline-none text-gray-800 bg-transparent placeholder-gray-400"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
            
            <Link to="/universites/recherche" className="bg-[#eab308] text-[#1a365d] px-8 py-3 rounded-md text-[13px] font-bold uppercase tracking-widest hover:bg-[#1a365d] hover:text-white transition-colors whitespace-nowrap">
              Recherche Avancée
            </Link>
          </div>
        </div>
      </section>

      {/* COUNTRY FILTER SECTION */}
      <section className="bg-[#1a365d]/95 py-6 px-6 text-center border-t border-white/10">
        <div className="max-w-[1200px] mx-auto flex flex-wrap justify-center gap-2">
          {countries.map(country => (
            <button
              key={country}
              onClick={() => setSelectedCountry(country)}
              className={`px-4 py-2 text-xs font-bold uppercase tracking-wider rounded-md transition-colors ${selectedCountry === country ? "bg-[#eab308] text-[#1a365d]" : "bg-white/10 text-white hover:bg-white/20"}`}
            >
              {country}
            </button>
          ))}
        </div>
      </section>

      {/* MAIN UNIVERSITY GRID */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-[1200px] mx-auto">
          {loading ? (
            <div className="flex flex-col items-center justify-center py-20 text-[#1a365d]">
              <Loader2 size={40} className="animate-spin mb-4" />
              <p className="font-bold uppercase tracking-widest text-sm">Chargement de nos universités...</p>
            </div>
          ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredUniversities.length > 0 ? (
                filteredUniversities.map((uni) => (
                  <div
                    key={uni.id}
                    className="bg-white shadow-md hover:shadow-xl transition-all duration-300 group overflow-hidden border-t-2 border-transparent hover:border-[#eab308]"
                  >
                    <div className="h-48 overflow-hidden relative">
                      <img 
                        src={uni.image} 
                        alt={uni.name} 
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                      <div className="absolute top-3 right-3 bg-[#eab308] text-[#1a365d] text-[10px] font-bold uppercase px-2 py-1">
                        {uni.country}
                      </div>
                    </div>
                    <div className="p-6">
                      <h3 className="text-xl font-bold text-[#1a365d] mb-2 group-hover:text-[#eab308] transition-colors line-clamp-2">
                        {uni.name}
                      </h3>
                      <div className="flex items-center justify-center text-gray-500 text-sm mb-4">
                        <MapPin size={14} className="mr-1" /> {uni.country}
                      </div>
                      <p className="text-gray-600 mb-6 text-sm leading-relaxed line-clamp-3">
                        {uni.description}
                      </p>
                      <Link 
                        to={`/universites/${uni.slug}`} 
                        className="w-full text-center flex items-center justify-center text-[11px] font-bold uppercase tracking-widest border border-[#1a365d] text-[#1a365d] py-3 hover:bg-[#1a365d] hover:text-white transition-colors"
                      >
                        En savoir plus <ArrowRight size={16} className="ml-2" />
                      </Link>
                    </div>
                  </div>
                ))
              ) : (
                <div className="col-span-1 md:col-span-2 lg:col-span-3 text-center py-16 text-gray-600 font-medium">
                  Aucune université ne correspond à vos critères de recherche.
                </div>
              )}
            </div>
          )}
        </div>
      </section>

      {/* FINAL CALL TO ACTION */}
      <section className="bg-[#eab308] py-16 text-center px-6">
        <GraduationCap size={48} className="mx-auto text-[#1a365d] mb-6" />
        <h2 className="text-3xl font-black text-[#1a365d] uppercase tracking-tight mb-4">Prêt à lancer votre projet d'études ?</h2>
        <p className="text-[#1a365d] max-w-2xl mx-auto mb-8 text-lg font-medium leading-relaxed">
          Ne laissez pas la complexité administrative freiner vos ambitions. Discutez de votre projet avec l'un de nos conseillers lors d'un premier entretien d'orientation totalement gratuit.
        </p>
        <Link to="/contact" className="inline-block bg-[#1a365d] text-white px-8 py-4 text-[13px] font-bold uppercase tracking-[0.15em] hover:bg-white hover:text-[#1a365d] transition-all shadow-xl">
          Prendre un rendez-vous gratuit
        </Link>
      </section>

    </div>
  );
}