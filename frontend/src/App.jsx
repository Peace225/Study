import { BrowserRouter, Routes, Route } from "react-router-dom"
import { AuthProvider } from "./context/AuthContext"
import Login from "./pages/Login"
import ProtectedRoute from "./components/ProtectedRoute"

// Pages
import Home from "./pages/Home"
import About from "./pages/About"
import Apply from "./pages/Apply"
import Contact from "./pages/Contact"
import Blog from "./pages/Blog"
import DestinationsPages from "./pages/DestinationsPage"
import ServicesPage from "./pages/ServicesPage"
import UniversitesPages from "./pages/UniversitesPages"
import Events from "./pages/Events"
import BlogDetail from "./pages/BlogDetail"
import DestinationDetail from "./pages/DestinationDetail"
import UniversiteDetail from "./pages/UniversiteDetail";

// Composants
import Navbar from "./components/Navbar"
import Footer from "./components/Footer"

export default function App() {
  return (
    <AuthProvider> 
      <BrowserRouter>
        <Navbar />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/login" element={<Login />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/destinations" element={<DestinationsPages />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/universites" element={<UniversitesPages />} />
          <Route path="/events" element={<Events />} />

          {/* Routes dynamiques pour détails */}
          <Route path="/blog/:slug" element={<BlogDetail />} />
          <Route path="/destinations/:slug" element={<DestinationDetail />} />
          <Route path="/universites/:slug" element={<UniversiteDetail />} />
          
          {/* 👇 C'est ici que le changement s'opère ! 
            On enveloppe Apply avec ProtectedRoute 
          */}
          <Route 
            path="/apply" 
            element={
              <ProtectedRoute>
                <Apply />
              </ProtectedRoute>
            } 
          />
        </Routes>

        <Footer />
      </BrowserRouter>
    </AuthProvider>
  )
}