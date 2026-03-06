import { Navigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

export default function ProtectedRoute({ children }) {
  const { currentUser } = useAuth();

  // Si aucun utilisateur n'est connecté, on le redirige vers /login
  if (!currentUser) {
    return <Navigate to="/login" replace />;
  }

  // S'il est connecté, on affiche le composant demandé (ex: la page Apply)
  return children;
}