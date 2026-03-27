import { Calendar, User, ArrowRight, Tag } from "lucide-react";
import { Link } from "react-router-dom";

export default function Blog() {
  // Données fictives pour les articles du blog
  const articles = [
    {
      id: 1,
      slug: "rediger-lettre-motivation-ucas",
      titre: "Comment rédiger un Personal Statement parfait pour l'UCAS ?",
      extrait: "Le Personal Statement est la pièce maîtresse de votre dossier pour les universités britanniques. Découvrez nos conseils d'experts pour vous démarquer.",
      categorie: "Conseils d'admission",
      date: "25 Mars 2026",
      auteur: "Équipe LM Global",
      image: "https://images.unsplash.com/photo-1455390582262-044cdead2708?q=80&w=800&auto=format&fit=crop",
      featured: true // Cet article sera mis en avant
    },
    {
      id: 2,
      slug: "bourses-etudes-canada",
      titre: "Le guide complet des bourses d'études au Canada en 2026",
      extrait: "Financer ses études au Canada est possible grâce à de nombreuses bourses d'excellence. Voici comment les trouver et y postuler.",
      categorie: "Financement",
      date: "18 Mars 2026",
      auteur: "Marie Dubois",
      image: "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?q=80&w=800&auto=format&fit=crop",
      featured: false
    },
    {
      id: 3,
      slug: "top-business-schools-espagne",
      titre: "Top 5 des Business Schools en Espagne",
      extrait: "L'Espagne attire de plus en plus d'étudiants internationaux. Zoom sur les meilleures écoles de commerce de la péninsule ibérique.",
      categorie: "Destinations",
      date: "10 Mars 2026",
      auteur: "Carlos Ruiz",
      image: "https://images.unsplash.com/photo-1543783207-ec64e4d95325?q=80&w=800&auto=format&fit=crop",
      featured: false
    },
    {
      id: 4,
      slug: "ielts-vs-toefl",
      titre: "IELTS vs TOEFL : Lequel choisir pour votre dossier ?",
      extrait: "Vous devez prouver votre niveau d'anglais mais vous hésitez entre ces deux tests ? On vous explique les différences pour faire le bon choix.",
      categorie: "Examens",
      date: "02 Mars 2026",
      auteur: "Équipe LM Global",
      image: "https://images.unsplash.com/photo-1606326608606-aa0b62935f2b?q=80&w=800&auto=format&fit=crop",
      featured: false
    },
    {
      id: 5,
      slug: "logement-etudiant-londres",
      titre: "Trouver un logement étudiant à Londres : Le guide de survie",
      extrait: "Résidences universitaires, colocations, agences privées... Nos astuces pour trouver la perle rare dans la capitale britannique.",
      categorie: "Vie Pratique",
      date: "20 Février 2026",
      auteur: "Sophie Martin",
      image: "https://images.unsplash.com/photo-1513694203232-719a280e022f?q=80&w=800&auto=format&fit=crop",
      featured: false
    }
  ];

  const featuredArticle = articles.find(a => a.featured);
  const regularArticles = articles.filter(a => !a.featured);

  return (
    <div className="pt-24 min-h-screen bg-gray-50 font-sans pb-20">
      
      {/* En-tête */}
      <div className="bg-[#1a365d] py-16 px-6 text-center text-white">
        <h1 className="text-3xl md:text-5xl font-black uppercase tracking-tight mb-4">Le Blog LM Global</h1>
        <p className="text-gray-300 max-w-2xl mx-auto text-lg">
          Actualités, conseils d'admission, témoignages et guides pratiques pour réussir vos études à l'étranger.
        </p>
      </div>

      <div className="max-w-[1200px] mx-auto px-6 mt-12">
        
        {/* FILTRES RAPIDES (Mockup) */}
        <div className="flex flex-wrap items-center justify-center gap-4 mb-12">
          <span className="text-sm font-bold text-gray-500 uppercase mr-2"><Tag size={16} className="inline mr-1"/> Catégories :</span>
          {["Tous", "Conseils d'admission", "Destinations", "Financement", "Vie Pratique", "Examens"].map((cat, idx) => (
            <button key={idx} className={`px-4 py-2 text-xs font-bold uppercase tracking-wider rounded-full transition-colors ${idx === 0 ? "bg-[#eab308] text-[#1a365d]" : "bg-white text-gray-600 hover:bg-gray-200"}`}>
              {cat}
            </button>
          ))}
        </div>

        {/* ARTICLE MIS EN AVANT */}
        {featuredArticle && (
          <Link to={`/blog/${featuredArticle.slug}`} className="group block mb-12 bg-white shadow-xl hover:shadow-2xl transition-all duration-300 overflow-hidden">
            <div className="flex flex-col md:flex-row">
              <div className="md:w-3/5 h-64 md:h-auto overflow-hidden relative">
                <img 
                  src={featuredArticle.image} 
                  alt={featuredArticle.titre} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute top-4 left-4 bg-[#eab308] text-[#1a365d] text-xs font-bold uppercase px-3 py-1.5">
                  À la une
                </div>
              </div>
              <div className="md:w-2/5 p-8 md:p-12 flex flex-col justify-center border-t-4 md:border-t-0 md:border-l-4 border-[#1a365d]">
                <span className="text-[#eab308] text-xs font-bold tracking-widest uppercase mb-3 block">{featuredArticle.categorie}</span>
                <h2 className="text-2xl md:text-3xl font-bold text-[#1a365d] mb-4 group-hover:text-[#eab308] transition-colors line-clamp-3">
                  {featuredArticle.titre}
                </h2>
                <p className="text-gray-600 mb-6 line-clamp-3">
                  {featuredArticle.extrait}
                </p>
                <div className="flex items-center text-xs text-gray-400 font-medium uppercase mt-auto">
                  <span className="flex items-center mr-4"><Calendar size={14} className="mr-1" /> {featuredArticle.date}</span>
                  <span className="flex items-center"><User size={14} className="mr-1" /> {featuredArticle.auteur}</span>
                </div>
              </div>
            </div>
          </Link>
        )}

        {/* GRILLE DES AUTRES ARTICLES */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {regularArticles.map((article) => (
            <Link key={article.id} to={`/blog/${article.slug}`} className="group bg-white shadow-md hover:shadow-xl transition-all duration-300 flex flex-col h-full border-t-2 border-transparent hover:border-[#eab308]">
              <div className="h-48 overflow-hidden relative">
                <img 
                  src={article.image} 
                  alt={article.titre} 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute bottom-0 left-0 bg-white/90 backdrop-blur-sm text-[#1a365d] text-[10px] font-bold uppercase px-3 py-1.5">
                  {article.categorie}
                </div>
              </div>
              <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-xl font-bold text-[#1a365d] mb-3 group-hover:text-[#eab308] transition-colors line-clamp-2">
                  {article.titre}
                </h3>
                <p className="text-gray-500 text-sm mb-6 line-clamp-3 flex-grow">
                  {article.extrait}
                </p>
                <div className="flex items-center justify-between text-xs text-gray-400 font-medium uppercase pt-4 border-t border-gray-100">
                  <span className="flex items-center"><Calendar size={14} className="mr-1" /> {article.date}</span>
                  <span className="text-[#1a365d] group-hover:text-[#eab308] transition-colors"><ArrowRight size={18} /></span>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* BOUTON VOIR PLUS */}
        <div className="text-center mt-16">
          <button className="bg-transparent border-2 border-[#1a365d] text-[#1a365d] px-8 py-3 text-[13px] font-bold uppercase tracking-widest hover:bg-[#1a365d] hover:text-white transition-all">
            Charger plus d'articles
          </button>
        </div>

      </div>
    </div>
  );
}