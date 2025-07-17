
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { ArrowLeft, Home, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { pythonCommands } from '@/data/pythonCommands';
import SearchBar from '@/components/python/SearchBar';
import CommandSection from '@/components/python/CommandSection';
import PythonNavigationTabs from '@/components/formation/PythonNavigationTabs';

const PythonReferencePage = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [copiedCommand, setCopiedCommand] = useState<string | null>(null);

  const copyToClipboard = (command: string) => {
    navigator.clipboard.writeText(command);
    setCopiedCommand(command);
    setTimeout(() => setCopiedCommand(null), 2000);
  };

  const filteredCommands = Object.entries(pythonCommands).map(([key, section]) => ({
    ...section,
    key,
    commands: section.commands.filter(cmd => 
      cmd.command.toLowerCase().includes(searchTerm.toLowerCase()) ||
      cmd.description.toLowerCase().includes(searchTerm.toLowerCase())
    )
  })).filter(section => section.commands.length > 0);

  return (
    <div className="min-h-screen bg-background">
      {/* Sticky Breadcrumb */}
      <nav className="sticky top-0 z-50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b border-border/40">
        <div className="container mx-auto px-4 py-2">
          <div className="flex items-center text-xs text-muted-foreground">
            <Link to="/" className="flex items-center gap-1 hover:text-foreground transition-colors">
              <Home className="h-3 w-3" />
              <span>Accueil</span>
            </Link>
            <ChevronRight className="h-3 w-3 text-muted-foreground/50 mx-1" />
            <Link to="/formation" className="hover:text-foreground transition-colors">
              Formation
            </Link>
            <ChevronRight className="h-3 w-3 text-muted-foreground/50 mx-1" />
            <span className="text-foreground font-medium">Formation Python ECG</span>
          </div>
        </div>
      </nav>

      <div className="container mx-auto py-8 px-4">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold mb-4">
            Référence Python ECG
          </h1>
          <p className="text-xl text-muted-foreground mb-6">
            Toutes les 54 commandes Python au programme de prépa ECG
          </p>
        </div>

        {/* Navigation Tabs */}
        <PythonNavigationTabs className="mb-8" />
        
        <div className="mb-8">
          <SearchBar searchTerm={searchTerm} onSearchChange={setSearchTerm} />
        </div>

        {/* Tabs pour les catégories */}
        <Tabs defaultValue="all" className="w-full">
          <TabsList className="grid w-full grid-cols-5 lg:grid-cols-10 mb-6 h-auto flex-wrap">
            <TabsTrigger value="all" className="text-xs">Toutes</TabsTrigger>
            <TabsTrigger value="imports" className="text-xs">Imports</TabsTrigger>
            <TabsTrigger value="functions" className="text-xs">Fonctions</TabsTrigger>
            <TabsTrigger value="constants" className="text-xs">Constantes</TabsTrigger>
            <TabsTrigger value="vectors" className="text-xs">Vecteurs</TabsTrigger>
            <TabsTrigger value="matrices" className="text-xs">Matrices</TabsTrigger>
            <TabsTrigger value="operations" className="text-xs">Opérations</TabsTrigger>
            <TabsTrigger value="linalg" className="text-xs">Algèbre</TabsTrigger>
            <TabsTrigger value="random" className="text-xs">Aléatoire</TabsTrigger>
            <TabsTrigger value="graphics" className="text-xs">Graphiques</TabsTrigger>
          </TabsList>

          <TabsContent value="all">
            <div className="space-y-8">
              {filteredCommands.map((section) => (
                <CommandSection
                  key={section.key}
                  title={section.title}
                  commands={section.commands}
                  copiedCommand={copiedCommand}
                  onCopy={copyToClipboard}
                />
              ))}
            </div>
          </TabsContent>

          {Object.entries(pythonCommands).map(([key, section]) => (
            <TabsContent key={key} value={key}>
              <CommandSection
                title={section.title}
                commands={section.commands}
                copiedCommand={copiedCommand}
                onCopy={copyToClipboard}
              />
            </TabsContent>
          ))}
        </Tabs>

        {/* Call to action */}
        <div className="mt-12 text-center">
          <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-8 rounded-lg border">
            <h3 className="text-2xl font-bold mb-4">Prêt à maîtriser Python ?</h3>
            <p className="text-muted-foreground mb-6">
              Transformez ces commandes en +3 à +5 points sûrs aux concours
            </p>
            <div className="flex gap-4 justify-center flex-wrap">
              <Link to="/python-flashcards">
                <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
                  🧠 Tester avec les flashcards
                </Button>
              </Link>
              <Link to="/offre/coaching-python">
                <Button size="lg" variant="outline">
                  Coaching Python individuel
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PythonReferencePage;
