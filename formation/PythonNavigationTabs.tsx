import React from 'react';
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Link, useLocation } from "react-router-dom";
import { BookOpen, CreditCard, FileText, PenTool } from 'lucide-react';

interface PythonNavigationTabsProps {
  className?: string;
}

const PythonNavigationTabs: React.FC<PythonNavigationTabsProps> = ({ className = "" }) => {
  const location = useLocation();
  
  const getActiveTab = () => {
    if (location.pathname === '/formation') return 'cours';
    if (location.pathname === '/python-exercices') return 'exercices';
    if (location.pathname === '/python-flashcards') return 'flashcards';
    if (location.pathname === '/python-reference') return 'reference';
    if (location.pathname === '/pourquoi-python-prepa-ecg') return 'methodo';
    return 'cours';
  };

  return (
    <div className={`container mx-auto px-4 ${className}`}>
      <Tabs value={getActiveTab()} className="w-full">
        <TabsList className="grid w-full grid-cols-5 max-w-4xl mx-auto">
          <TabsTrigger value="methodo" asChild>
            <Link to="/pourquoi-python-prepa-ecg" className="flex items-center gap-2">
              <BookOpen className="h-4 w-4" />
              <span className="hidden sm:inline">Méthodo / Conseil</span>
            </Link>
          </TabsTrigger>
          <TabsTrigger value="cours" asChild>
            <Link to="/formation" className="flex items-center gap-2">
              <BookOpen className="h-4 w-4" />
              <span className="hidden sm:inline">Cours</span>
            </Link>
          </TabsTrigger>
          <TabsTrigger value="exercices" asChild>
            <Link to="/python-exercices" className="flex items-center gap-2">
              <PenTool className="h-4 w-4" />
              <span className="hidden sm:inline">Exercices</span>
            </Link>
          </TabsTrigger>
          <TabsTrigger value="flashcards" asChild>
            <Link to="/python-flashcards" className="flex items-center gap-2">
              <CreditCard className="h-4 w-4" />
              <span className="hidden sm:inline">Flashcards Python</span>
            </Link>
          </TabsTrigger>
          <TabsTrigger value="reference" asChild>
            <Link to="/python-reference" className="flex items-center gap-2">
              <FileText className="h-4 w-4" />
              <span className="hidden sm:inline">Référence Python</span>
            </Link>
          </TabsTrigger>
        </TabsList>
      </Tabs>
    </div>
  );
};

export default PythonNavigationTabs;