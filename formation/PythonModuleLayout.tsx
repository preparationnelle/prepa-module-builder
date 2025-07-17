import React, { ReactNode } from 'react';
import PythonBreadcrumb from './PythonBreadcrumb';
import PythonModuleNavigation from './PythonModuleNavigation';

interface PythonModuleLayoutProps {
  children: ReactNode;
  showNavigation?: boolean;
}

const PythonModuleLayout: React.FC<PythonModuleLayoutProps> = ({ 
  children, 
  showNavigation = true 
}) => {
  return (
    <div className="min-h-screen bg-background py-8">
      <div className="max-w-4xl mx-auto px-6">
        {/* Breadcrumb */}
        <PythonBreadcrumb />
        
        {/* Main Content */}
        <div className="mb-8">
          {children}
        </div>
        
        {/* Navigation */}
        {showNavigation && (
          <div className="mt-12">
            <PythonModuleNavigation />
          </div>
        )}
      </div>
    </div>
  );
};

export default PythonModuleLayout;