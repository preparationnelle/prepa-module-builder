import React from 'react';
import { Navigate } from 'react-router-dom';
import { useAuth } from '@/context/AuthContext';
import { useRoleAccess } from '@/hooks/useRoleAccess';

interface TeacherProtectedRouteProps {
  children: React.ReactNode;
}

const TeacherProtectedRoute: React.FC<TeacherProtectedRouteProps> = ({ children }) => {
  const { currentUser, loading: authLoading } = useAuth();
  const { isProfessor, loading: roleLoading } = useRoleAccess();

  // Show loading state while checking authentication and roles
  if (authLoading || roleLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-primary"></div>
      </div>
    );
  }

  // Redirect to login if not authenticated
  if (!currentUser) {
    return <Navigate to="/login" replace />;
  }

  // Redirect to home if not a professor or higher role
  if (!isProfessor) {
    return <Navigate to="/" replace />;
  }

  return <>{children}</>;
};

export default TeacherProtectedRoute;