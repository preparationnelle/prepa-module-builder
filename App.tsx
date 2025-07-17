
import React, { useEffect, Suspense } from 'react';
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import ProtectedRoute from './components/ProtectedRoute';
import TeacherProtectedRoute from './components/teacher/TeacherProtectedRoute';
import { ProgressProvider } from './context/ProgressContext';
import { routes } from './config/routes';
import { useRouteValidation } from './hooks/useRouteValidation';
import ChatWidget from './components/chat/ChatWidget';

// Loading component for lazy-loaded pages
const PageLoader = () => (
  <div className="min-h-screen flex items-center justify-center">
    <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-primary"></div>
  </div>
);

function App() {
  // Initialize route validation in development
  useRouteValidation();
  
  return (
    <AuthProvider>
      <ProgressProvider>
        <Router>
          <ScrollToTop />
          <div className="App">
            <ToastContainer position="top-right" autoClose={5000} hideProgressBar={false} newestOnTop closeOnClick rtl={false} pauseOnFocusLoss draggable pauseOnHover />
            <Suspense fallback={<PageLoader />}>
              <Routes>
                {routes.map((route) => {
                  const Component = route.component;
                  let element;
                  
                  if (route.path.startsWith('/prof')) {
                    // Teacher routes require professor role
                    element = (
                      <TeacherProtectedRoute>
                        <Component />
                      </TeacherProtectedRoute>
                    );
                  } else if (route.protected) {
                    // Regular protected routes
                    element = (
                      <ProtectedRoute>
                        <Component />
                      </ProtectedRoute>
                    );
                  } else {
                    // Public routes
                    element = <Component />;
                  }
                  
                  return (
                    <Route 
                      key={route.path} 
                      path={route.path} 
                      element={element} 
                    />
                  );
                })}
              </Routes>
            </Suspense>
            <ChatWidget />
          </div>
        </Router>
      </ProgressProvider>
    </AuthProvider>
  );
}

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
    
    // In development, log route changes for debugging
    if (process.env.NODE_ENV === 'development') {
      console.log('🔄 Route changed to:', pathname);
    }
  }, [pathname]);

  return null;
}

export default App;
