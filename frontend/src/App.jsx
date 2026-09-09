import { Suspense, lazy } from "react";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import { AuthProvider } from "./context/AuthContext";

// Composants de structure
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ProtectedRoute from "./components/ProtectedRoute";
import ScrollToTop from "./components/ScrollToTop";

// Page d'accueil
import Home from "./pages/Home";

// Imports différés (Lazy)
const Login = lazy(() => import("./pages/Login"));
const Contact = lazy(() => import("./pages/Contact"));
const Apply = lazy(() => import("./pages/Apply"));
const Blog = lazy(() => import("./pages/Blog"));
const Events = lazy(() => import("./pages/Events"));
const ServicesPage = lazy(() => import("./pages/ServicesPage"));
const DestinationsPages = lazy(() => import("./pages/DestinationsPage"));
const UniversitesPages = lazy(() => import("./pages/UniversitesPages"));
const About = lazy(() => import("./pages/About"));
const MotDeLaDirection = lazy(() => import("./pages/MotDeLaDirection")); // <- AJOUT DE L'IMPORT
const References = lazy(() => import("./pages/References"));
const Temoignages = lazy(() => import("./pages/Temoignages"));
const Recrutement = lazy(() => import("./pages/Recrutement"));
const ConseilPage = lazy(() => import("./pages/ConseilPage"));
const ElitePage = lazy(() => import("./pages/ElitePage"));
const RetourPage = lazy(() => import("./pages/RetourPage"));
const IeltsPage = lazy(() => import("./pages/IeltsPage"));
const TraductionsPage = lazy(() => import("./pages/TraductionsPage"));
const AssurancePage = lazy(() => import("./pages/AssurancePage"));
const RdvPage = lazy(() => import("./pages/RdvPage"));
const Register = lazy(() => import("./pages/Register"));
const RoyaumeUniPage = lazy(() => import("./pages/RoyaumeUniPage"));
const IrlandePage = lazy(() => import("./pages/IrlandePage"));
const QuebecPage = lazy(() => import("./pages/QuebecPage"));
const CanadaPage = lazy(() => import("./pages/CanadaPage"));
const EspagnePage = lazy(() => import("./pages/EspagnePage"));
const UsaPage = lazy(() => import("./pages/UsaPage"));
const PaysBasPage = lazy(() => import("./pages/PaysBasPage"));
const AustraliePage = lazy(() => import("./pages/AustraliePage"));
const NouvelleZelandePage = lazy(() => import("./pages/NouvelleZelandePage"));
const RecherchePage = lazy(() => import("./pages/RecherchePage"));
const GuidePage = lazy(() => import("./pages/GuidePage"));
const PageConseil = lazy(() => import("./pages/PageConseil"));
const WebinairesPage = lazy(() => import("./pages/WebinairesPage"));
const SalonsElevatePage = lazy(() => import("./pages/SalonsElevatePage"));
const BlogDetail = lazy(() => import("./pages/BlogDetail"));
const DestinationDetail = lazy(() => import("./pages/DestinationDetail"));
const UniversiteDetail = lazy(() => import("./pages/UniversiteDetail"));
const ForgotPassword = lazy(() => import("./pages/ForgotPassword"));
const NotFound = lazy(() => import("./pages/NotFound"));

const PageLoader = () => (
  <div className="min-h-screen flex items-center justify-center bg-gray-50">
    <div className="text-[#1a365d] text-xl font-bold animate-pulse">Chargement en cours...</div>
  </div>
);

// Composant Layout : gère la structure fixe avec Outlet pour le contenu dynamique
const RootLayout = () => (
  <>
    <ScrollToTop />
    <Navbar />
    <main>
      <Suspense fallback={<PageLoader />}>
        <Outlet />
      </Suspense>
    </main>
    <Footer />
  </>
);

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      { index: true, element: <Home /> },
      { path: "about", element: <About /> },
      { path: "about/qui-sommes-nous", element: <About /> },
      { path: "about/mot-de-la-direction", element: <MotDeLaDirection /> }, // <- AJOUT DE LA ROUTE
      { path: "about/references", element: <References /> },
      { path: "about/temoignages", element: <Temoignages /> },
      { path: "about/recrutement", element: <Recrutement /> },
      { path: "services", element: <ServicesPage /> },
      { path: "services/conseil", element: <ConseilPage /> },
      { path: "services/page", element: <PageConseil /> },
      { path: "services/elite", element: <ElitePage /> },
      { path: "services/retour", element: <RetourPage /> },
      { path: "services/ielts", element: <IeltsPage /> },
      { path: "services/traductions", element: <TraductionsPage /> },
      { path: "services/assurance", element: <AssurancePage /> },
      { path: "destinations", element: <DestinationsPages /> },
      { path: "destinations/royaume-uni", element: <RoyaumeUniPage /> },
      { path: "destinations/irlande", element: <IrlandePage /> },
      { path: "destinations/quebec", element: <QuebecPage /> },
      { path: "destinations/canada", element: <CanadaPage /> },
      { path: "destinations/espagne", element: <EspagnePage /> },
      { path: "destinations/usa", element: <UsaPage /> },
      { path: "destinations/pays-bas", element: <PaysBasPage /> },
      { path: "destinations/australie", element: <AustraliePage /> },
      { path: "destinations/nouvelle-zelande", element: <NouvelleZelandePage /> },
      { path: "login", element: <Login /> },
      { path: "contact", element: <Contact /> },
      { path: "blog", element: <Blog /> },
      { path: "events", element: <Events /> },
      { path: "rdv", element: <RdvPage /> },
      { path: "register", element: <Register /> },
      { path: "mot-de-passe-oublie", element: <ForgotPassword /> },
      { path: "universites", element: <UniversitesPages /> },
      { path: "universites/recherche", element: <RecherchePage /> },
      { path: "universites/guide", element: <GuidePage /> },
      { path: "events/webinaires", element: <WebinairesPage /> },
      { path: "events/salons", element: <SalonsElevatePage /> },
      { path: "blog/:slug", element: <BlogDetail /> },
      { path: "destinations/:slug", element: <DestinationDetail /> },
      { path: "universites/:slug", element: <UniversiteDetail /> },
      { path: "apply", element: <ProtectedRoute><Apply /></ProtectedRoute> },
      { path: "*", element: <NotFound /> }
    ]
  }
], {
  future: {
    v7_startTransition: true,
    v7_relativeSplatPath: true,
    v7_fetcherPersist: true,
    v7_normalizeFormMethod: true,
    v7_partialHydration: true,
    v7_skipActionErrorRevalidation: true,
  },
});

export default function App() {
  return (
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  );
}