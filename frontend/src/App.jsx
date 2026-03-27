import { Suspense, lazy } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { AuthProvider } from "./context/AuthContext";

// Composants de structure (Chargement immédiat requis)
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ProtectedRoute from "./components/ProtectedRoute";
import ScrollToTop from "./components/ScrollToTop";

// Page d'accueil (Chargement immédiat pour la performance au premier clic)
import Home from "./pages/Home";

// ==========================================
// IMPORTS DIFFÉRÉS (Lazy Loading)
// ==========================================
// Pages Principales
const Login = lazy(() => import("./pages/Login"));
const Contact = lazy(() => import("./pages/Contact"));
const Apply = lazy(() => import("./pages/Apply"));
const Blog = lazy(() => import("./pages/Blog"));
const Events = lazy(() => import("./pages/Events"));

// Pages "Hub"
const ServicesPage = lazy(() => import("./pages/ServicesPage"));
const DestinationsPages = lazy(() => import("./pages/DestinationsPage"));
const UniversitesPages = lazy(() => import("./pages/UniversitesPages"));

// Sous-menus de "À Propos"
const About = lazy(() => import("./pages/About"));
const References = lazy(() => import("./pages/References"));
const Temoignages = lazy(() => import("./pages/Temoignages"));
const Recrutement = lazy(() => import("./pages/Recrutement"));

// Pages de Services
const ConseilPage = lazy(() => import("./pages/ConseilPage"));
const ElitePage = lazy(() => import("./pages/ElitePage"));
const RetourPage = lazy(() => import("./pages/RetourPage"));
const IeltsPage = lazy(() => import("./pages/IeltsPage"));
const TraductionsPage = lazy(() => import("./pages/TraductionsPage"));
const AssurancePage = lazy(() => import("./pages/AssurancePage"));

const RdvPage = lazy(() => import("./pages/RdvPage"));
const Register = lazy(() => import("./pages/Register"));

// Pages de Destinations
const RoyaumeUniPage = lazy(() => import("./pages/RoyaumeUniPage"));
const IrlandePage = lazy(() => import("./pages/IrlandePage"));
const QuebecPage = lazy(() => import("./pages/QuebecPage"));
const CanadaPage = lazy(() => import("./pages/CanadaPage"));
const EspagnePage = lazy(() => import("./pages/EspagnePage"));
const UsaPage = lazy(() => import("./pages/UsaPage"));
const PaysBasPage = lazy(() => import("./pages/PaysBasPage"));
const AustraliePage = lazy(() => import("./pages/AustraliePage"));
const NouvelleZelandePage = lazy(() => import("./pages/NouvelleZelandePage"));

// Sous-pages Universités (Nouveau !)
const RecherchePage = lazy(() => import("./pages/RecherchePage"));
const GuidePage = lazy(() => import("./pages/GuidePage"));
const PageConseil = lazy(() => import("./pages/PageConseil"));

// Sous-pages Événements
const WebinairesPage = lazy(() => import("./pages/WebinairesPage"));
const SalonsElevatePage = lazy(() => import("./pages/SalonsElevatePage"));

// Détails (Routes dynamiques)
const BlogDetail = lazy(() => import("./pages/BlogDetail"));
const DestinationDetail = lazy(() => import("./pages/DestinationDetail"));
const UniversiteDetail = lazy(() => import("./pages/UniversiteDetail"));
const ForgotPassword = lazy(() => import("./pages/ForgotPassword"));

// Page 404
const NotFound = lazy(() => import("./pages/NotFound"));

// Composant de chargement simple (Vous pouvez le remplacer par un Spinner design)
const PageLoader = () => (
  <div className="min-h-screen flex items-center justify-center bg-gray-50">
    <div className="text-[#1a365d] text-xl font-bold animate-pulse">Chargement en cours...</div>
  </div>
);

export default function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <ScrollToTop />
        <Navbar />

        {/* Le Suspense intercepte le temps de chargement des composants Lazy */}
        <Suspense fallback={<PageLoader />}>
          <Routes>
            <Route path="/" element={<Home />} />

            {/* ROUTES : À PROPOS */}
            <Route path="/about" element={<Navigate to="/about/qui-sommes-nous" replace />} />
            <Route path="/about/qui-sommes-nous" element={<About />} />
            <Route path="/about/references" element={<References />} />
            <Route path="/about/temoignages" element={<Temoignages />} />
            <Route path="/about/recrutement" element={<Recrutement />} />

            {/* ROUTES : SERVICES */}
            <Route path="/services" element={<ServicesPage />} />
            <Route path="/services/conseil" element={<ConseilPage />} />
            <Route path="/services/page" element={<PageConseil />} />
            <Route path="/services/elite" element={<ElitePage />} />
            <Route path="/services/retour" element={<RetourPage />} />
            <Route path="/services/ielts" element={<IeltsPage />} />
            <Route path="/services/traductions" element={<TraductionsPage />} />
            <Route path="/services/assurance" element={<AssurancePage />} />

            {/* ROUTES : DESTINATIONS */}
            <Route path="/destinations" element={<DestinationsPages />} />
            <Route path="/destinations/royaume-uni" element={<RoyaumeUniPage />} />
            <Route path="/destinations/irlande" element={<IrlandePage />} />
            <Route path="/destinations/quebec" element={<QuebecPage />} />
            <Route path="/destinations/canada" element={<CanadaPage />} />
            <Route path="/destinations/espagne" element={<EspagnePage />} />
            <Route path="/destinations/usa" element={<UsaPage />} />
            <Route path="/destinations/pays-bas" element={<PaysBasPage />} />
            <Route path="/destinations/australie" element={<AustraliePage />} />
            <Route path="/destinations/nouvelle-zelande" element={<NouvelleZelandePage />} />

            {/* AUTRES ROUTES PRINCIPALES */}
            <Route path="/login" element={<Login />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/events" element={<Events />} />
            <Route path="/rdv" element={<RdvPage />} />
            <Route path="/register" element={<Register />} />
            <Route path="/mot-de-passe-oublie" element={<ForgotPassword />} />

            {/* ROUTES : UNIVERSITÉS */}
            <Route path="/universites" element={<UniversitesPages />} />
            <Route path="/universites/recherche" element={<RecherchePage />} />
            <Route path="/universites/guide" element={<GuidePage />} />
            
            {/* ROUTES : ÉVÉNEMENTS */}
            <Route path="/events" element={<Events />} />
            <Route path="/events/webinaires" element={<WebinairesPage />} />
            <Route path="/events/salons" element={<SalonsElevatePage />} />

            {/* ROUTES DYNAMIQUES */}
            <Route path="/blog/:slug" element={<BlogDetail />} />
            <Route path="/destinations/:slug" element={<DestinationDetail />} />
            <Route path="/universites/:slug" element={<UniversiteDetail />} />

            {/* ROUTE PROTÉGÉE */}
            <Route 
              path="/apply" 
              element={
                <ProtectedRoute>
                  <Apply />
                </ProtectedRoute>
              } 
            />

            {/* ERREUR 404 */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Suspense>

        <Footer />
      </BrowserRouter>
    </AuthProvider>
  );
}