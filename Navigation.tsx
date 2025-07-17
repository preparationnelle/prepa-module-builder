
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '@/context/AuthContext';
import { useRoleAccess } from '@/hooks/useRoleAccess';
import { Button } from '@/components/ui/button';
import { ThemeToggle } from '@/components/ThemeToggle';
import { GlobalSearch } from '@/components/search/GlobalSearch';
import { MobileSearch } from '@/components/search/MobileSearch';
import { LogOut, Menu, X, ChevronDown, FileText, Users, User, BookOpen, Package, Radio, Instagram, Linkedin, GraduationCap, Handshake, BarChart3, Code, Languages, Globe, UserCheck } from 'lucide-react';
import { cn } from '@/lib/utils';
import { useToast } from '@/components/ui/use-toast';
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger, DropdownMenuSeparator } from '@/components/ui/dropdown-menu';

const Navigation = () => {
  const {
    currentUser,
    logout
  } = useAuth();
  const { isProfessor } = useRoleAccess();
  const navigate = useNavigate();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLoggingOut, setIsLoggingOut] = useState(false);
  const {
    toast
  } = useToast();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Fermer le menu mobile lors du clic sur un lien
  const closeMenu = () => {
    if (isMenuOpen) {
      setIsMenuOpen(false);
    }
  };

  const handleLogout = async () => {
    if (isLoggingOut) return; // Prevent multiple clicks

    setIsLoggingOut(true);
    try {
      console.log("Logging out user:", currentUser?.id);
      await logout();
      console.log("Logout successful, navigating to login page");
      navigate('/login');
    } catch (error) {
      console.error('Logout error in Navigation:', error);
      toast({
        title: "Problème de déconnexion",
        description: "Veuillez réessayer. Si le problème persiste, rafraîchissez la page.",
        variant: "destructive"
      });
    } finally {
      setIsLoggingOut(false);
    }
  };

  // Fonction pour naviguer vers une section spécifique
  const navigateToSection = (path, sectionId) => {
    closeMenu();
    navigate(path);
    // Donner le temps à la page de se charger avant de défiler vers la section
    setTimeout(() => {
      const section = document.getElementById(sectionId);
      if (section) {
        section.scrollIntoView({
          behavior: 'smooth'
        });
      }
    }, 100);
  };

  return <header className="bg-background shadow-sm border-b border-border">
      <nav className="container mx-auto px-4 py-4 flex items-center justify-between">
        <Link to="/" className="flex items-center" onClick={closeMenu}>
          <img src="/lovable-uploads/73c4719b-7030-411f-8d46-20d32035daba.png" alt="Prepa Rationnelle Logo" className="h-10 mr-2" />
          <span className="text-xl font-bold text-primary">Prepa Rationnelle</span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-6">
          <Link to="/" className="text-foreground hover:text-primary transition" onClick={closeMenu}>
            Accueil
          </Link>
          
          {/* Menu déroulant "Formation" */}
          <DropdownMenu>
            <DropdownMenuTrigger className="text-foreground hover:text-primary transition flex items-center gap-1 focus:outline-none">
              Formation
              <ChevronDown className="h-4 w-4" />
            </DropdownMenuTrigger>
            <DropdownMenuContent align="center" className="w-64 bg-popover rounded-lg shadow-lg border p-2">
              <DropdownMenuItem asChild className="hover:bg-primary/10 rounded-md px-3 py-2 transition-colors">
                <Link to="/formation" onClick={closeMenu} className="flex items-center gap-3 w-full">
                  <span className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center">
                    <BookOpen className="h-4 w-4 text-primary" />
                  </span>
                  <span>Vue d'ensemble</span>
                </Link>
              </DropdownMenuItem>

              <DropdownMenuSeparator className="my-2" />

              <DropdownMenuItem asChild className="hover:bg-primary/10 rounded-md px-3 py-2 transition-colors">
                <Link to="/pourquoi-python-prepa-ecg" onClick={closeMenu} className="flex items-center gap-3 w-full">
                  <span className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                    <Code className="h-4 w-4 text-blue-600" />
                  </span>
                  <span>Python</span>
                </Link>
              </DropdownMenuItem>

              <DropdownMenuItem asChild className="hover:bg-primary/10 rounded-md px-3 py-2 transition-colors">
                <Link to="/formation/anglais" onClick={closeMenu} className="flex items-center gap-3 w-full">
                  <span className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                    <Languages className="h-4 w-4 text-green-600" />
                  </span>
                  <span>Anglais</span>
                </Link>
              </DropdownMenuItem>

              <DropdownMenuItem asChild className="hover:bg-primary/10 rounded-md px-3 py-2 transition-colors">
                <Link to="/formation/allemand" onClick={closeMenu} className="flex items-center gap-3 w-full">
                  <span className="w-8 h-8 bg-red-100 rounded-full flex items-center justify-center">
                    <Languages className="h-4 w-4 text-red-600" />
                  </span>
                  <span>Allemand</span>
                </Link>
              </DropdownMenuItem>

              <DropdownMenuItem asChild className="hover:bg-primary/10 rounded-md px-3 py-2 transition-colors">
                <Link to="/formation/geopolitique" onClick={closeMenu} className="flex items-center gap-3 w-full">
                  <span className="w-8 h-8 bg-orange-100 rounded-full flex items-center justify-center">
                    <Globe className="h-4 w-4 text-orange-600" />
                  </span>
                  <span>Géopolitique</span>
                </Link>
              </DropdownMenuItem>

              <DropdownMenuItem asChild className="hover:bg-primary/10 rounded-md px-3 py-2 transition-colors">
                <Link to="/methodologie/entretiens-personnalite" onClick={closeMenu} className="flex items-center gap-3 w-full">
                  <span className="w-8 h-8 bg-orange-100 rounded-full flex items-center justify-center">
                    <Users className="h-4 w-4 text-orange-600" />
                  </span>
                  <span>Entretiens de Personnalité</span>
                </Link>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
          
          {/* Menu déroulant "Ressources" modernisé */}
          <DropdownMenu>
            <DropdownMenuTrigger className="text-foreground hover:text-primary transition flex items-center gap-1 focus:outline-none">
              Ressources
              <ChevronDown className="h-4 w-4" />
            </DropdownMenuTrigger>
            <DropdownMenuContent align="center" className="w-64 bg-popover rounded-lg shadow-lg border p-2">

              {/* Ajout du lien À propos */}
              <DropdownMenuItem asChild className="hover:bg-primary/10 rounded-md px-3 py-2 transition-colors">
                <Link to="/apropos" onClick={closeMenu} className="flex items-center gap-3 w-full">
                  <span className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center">
                    <User className="h-4 w-4 text-primary" />
                  </span>
                  <span>À propos</span>
                </Link>
              </DropdownMenuItem>

              {/* Séparateur après À propos */}
              <DropdownMenuSeparator className="my-2" />

              <DropdownMenuItem asChild className="hover:bg-primary/10 rounded-md px-3 py-2 mt-1 transition-colors">
                <Link to="/articles/maths-ete-controle" onClick={closeMenu} className="flex items-center gap-3 w-full">
                  <span className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center">
                    <FileText className="h-4 w-4 text-primary" />
                  </span>
                  <span>Articles</span>
                </Link>
              </DropdownMenuItem>

              <DropdownMenuItem asChild className="hover:bg-primary/10 rounded-md px-3 py-2 mt-1 transition-colors">
                <Link to="/methodes/personnalite" onClick={closeMenu} className="flex items-center gap-3 w-full">
                  <span className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center">
                    <User className="h-4 w-4 text-primary" />
                  </span>
                  <span>Préparer son entretien de personnalité</span>
                </Link>
              </DropdownMenuItem>

              <DropdownMenuItem asChild className="hover:bg-primary/10 rounded-md px-3 py-2 mt-1 transition-colors">
                <a href="https://calendly.com/prepa-rationnelle/coaching-individuel" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 w-full">
                  <span className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center">
                    <Users className="h-4 w-4 text-primary" />
                  </span>
                  <span>Coaching individuel</span>
                </a>
              </DropdownMenuItem>

              {/* ----------- Ajout partenaire ici ------------ */}
              <DropdownMenuItem asChild className="hover:bg-primary/10 rounded-md px-3 py-2 mt-1 transition-colors">
                <Link to="/partners" onClick={closeMenu} className="flex items-center gap-3 w-full">
                  <span className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center">
                    <Handshake className="h-4 w-4 text-primary" />
                  </span>
                  <span>Partenaires</span>
                </Link>
              </DropdownMenuItem>
              {/* ----------- fin ajout ------------- */}

              <DropdownMenuSeparator className="my-2" />
              
              <DropdownMenuItem onClick={() => navigateToSection('/', 'schools-section')} className="hover:bg-primary/10 rounded-md px-3 py-2 transition-colors cursor-pointer">
                <div className="flex items-center gap-3 w-full">
                  <span className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center">
                    <GraduationCap className="h-4 w-4 text-primary" />
                  </span>
                  <span>Fiches écoles</span>
                </div>
              </DropdownMenuItem>

              <DropdownMenuItem onClick={() => navigateToSection('/', 'pricing-section')} className="hover:bg-primary/10 rounded-md px-3 py-2 mt-1 transition-colors cursor-pointer">
                <div className="flex items-center gap-3 w-full">
                  <span className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center">
                    <Package className="h-4 w-4 text-primary" />
                  </span>
                  <span>Nos formules</span>
                </div>
              </DropdownMenuItem>
              
              <DropdownMenuSeparator className="my-2" />
              
              <DropdownMenuItem asChild className="hover:bg-primary/10 rounded-md px-3 py-2 transition-colors">
                <a href="https://www.europe1.fr/emissions/la-france-bouge-academie/prepa-rationnelle-concue-pour-revolutionner-le-monde-la-preparation-pour-integrer-les-ecoles-de-commerce-667526" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 w-full">
                  <span className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center">
                    <Radio className="h-4 w-4 text-primary" />
                  </span>
                  <span>Notre interview sur Europe 1</span>
                </a>
              </DropdownMenuItem>
              
              <DropdownMenuSeparator className="my-2" />
              
              <div className="flex justify-center gap-4 py-2">
                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-gray-100 hover:bg-primary/10 rounded-full flex items-center justify-center transition-colors">
                  <Instagram className="h-5 w-5 text-primary" />
                </a>
                
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-gray-100 hover:bg-primary/10 rounded-full flex items-center justify-center transition-colors">
                  <Linkedin className="h-5 w-5 text-primary" />
                </a>
              </div>
            </DropdownMenuContent>
          </DropdownMenu>

          <Link to="/generator" className="text-foreground hover:text-primary transition" onClick={closeMenu}>
            Générateur
          </Link>

          <Link to="/contact" className="text-foreground hover:text-primary transition" onClick={closeMenu}>
            Contact
          </Link>

          {/* Search Component - Desktop */}
          <GlobalSearch />

          <ThemeToggle variant="icon" />

          {currentUser ? <div className="flex items-center space-x-4">
              <Link to="/dashboard" className="text-foreground hover:text-primary transition flex items-center gap-2" onClick={closeMenu}>
                <BarChart3 className="h-4 w-4" />
                Dashboard
              </Link>
              {isProfessor && (
                <Link to="/prof" className="text-foreground hover:text-primary transition flex items-center gap-2" onClick={closeMenu}>
                  <UserCheck className="h-4 w-4" />
                  Interface Prof
                </Link>
              )}
              <Button variant="outline" size="sm" onClick={() => {
            handleLogout();
            closeMenu();
          }} className="flex items-center" disabled={isLoggingOut}>
                <LogOut className="mr-2 h-4 w-4" /> 
                {isLoggingOut ? 'Déconnexion...' : 'Déconnexion'}
              </Button>
            </div> : <>
              <Link to="/login" className="text-foreground hover:text-primary transition" onClick={closeMenu}>
                Connexion
              </Link>
              <Link to="/register" onClick={closeMenu}>
                <Button>S'inscrire</Button>
              </Link>
            </>}
        </div>

        {/* Mobile Navigation Toggle */}
        <div className="md:hidden flex items-center gap-2">
          <MobileSearch />
          <ThemeToggle variant="icon" />
          <Button variant="ghost" size="icon" onClick={toggleMenu} aria-label="Toggle Menu">
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        </div>
      </nav>

      {/* Mobile Navigation Menu */}
      <div className={cn("fixed inset-0 z-50 bg-background transform transition-transform duration-300 ease-in-out pt-20", isMenuOpen ? "translate-x-0" : "translate-x-full")}>
        <div className="container mx-auto px-4 flex flex-col space-y-4">
          <Link to="/" className="text-lg py-2 border-b border-border" onClick={closeMenu}>
            Accueil
          </Link>

          {/* Menu mobile Formation */}
          <div className="space-y-2 py-2 border-b border-border">
            <h3 className="text-lg font-medium text-primary">Formation</h3>
            <div className="pl-4 flex flex-col space-y-4">
              <Link to="/formation" onClick={closeMenu} className="flex items-center gap-3">
                <span className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center">
                  <BookOpen className="h-4 w-4 text-primary" />
                </span>
                <span>Vue d'ensemble</span>
              </Link>
              
              <Link to="/pourquoi-python-prepa-ecg" onClick={closeMenu} className="flex items-center gap-3">
                <span className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                  <Code className="h-4 w-4 text-blue-600" />
                </span>
                <span>🐍 Python</span>
              </Link>
              
              <Link to="/formation/anglais" onClick={closeMenu} className="flex items-center gap-3">
                <span className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                  <Languages className="h-4 w-4 text-green-600" />
                </span>
                <span>🇬🇧 Anglais</span>
              </Link>

              <Link to="/formation/allemand" onClick={closeMenu} className="flex items-center gap-3">
                <span className="w-8 h-8 bg-red-100 rounded-full flex items-center justify-center">
                  <Languages className="h-4 w-4 text-red-600" />
                </span>
                <span>🇩🇪 Allemand</span>
              </Link>

              <Link to="/formation/geopolitique" onClick={closeMenu} className="flex items-center gap-3">
                <span className="w-8 h-8 bg-orange-100 rounded-full flex items-center justify-center">
                  <Globe className="h-4 w-4 text-orange-600" />
                </span>
                <span>🌍 Géopolitique</span>
              </Link>

              <Link to="/methodologie/entretiens-personnalite" onClick={closeMenu} className="flex items-center gap-3">
                <span className="w-8 h-8 bg-orange-100 rounded-full flex items-center justify-center">
                  <Users className="h-4 w-4 text-orange-600" />
                </span>
                <span>Entretiens de Personnalité</span>
              </Link>

              <Link to="/entretien-inverse-gem" onClick={closeMenu} className="flex items-center gap-3">
                <span className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center">
                  <Users className="h-4 w-4 text-purple-600" />
                </span>
                <span>Entretien inversé GEM</span>
              </Link>

              <Link to="/cv-projectif" onClick={closeMenu} className="flex items-center gap-3">
                <span className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                  <FileText className="h-4 w-4 text-blue-600" />
                </span>
                <span>CV Projectif</span>
              </Link>
            </div>
          </div>

          {/* Menu mobile modernisé */}
          <div className="space-y-2 py-2 border-b border-border">
            <h3 className="text-lg font-medium text-primary">Ressources</h3>
            <div className="pl-4 flex flex-col space-y-4">
              
              {/* Ajout du lien À propos en mobile */}
              <Link to="/apropos" onClick={closeMenu} className="flex items-center gap-3">
                <span className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center">
                  <User className="h-4 w-4 text-primary" />
                </span>
                <span>À propos</span>
              </Link>
              
              <Link to="/articles/maths-ete-controle" onClick={closeMenu} className="flex items-center gap-3">
                <span className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center">
                  <FileText className="h-4 w-4 text-primary" />
                </span>
                <span>Articles</span>
              </Link>
              
              <Link to="/methodes/personnalite" onClick={closeMenu} className="flex items-center gap-3">
                <span className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center">
                  <User className="h-4 w-4 text-primary" />
                </span>
                <span>Entretien de personnalité</span>
              </Link>
              
              <a href="https://calendly.com/prepa-rationnelle/coaching-individuel" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3">
                <span className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center">
                  <Users className="h-4 w-4 text-primary" />
                </span>
                <span>Coaching individuel</span>
              </a>

              {/* ----------- Ajout Partenaires MOBILE ici ------------ */}
              <Link to="/partners" onClick={closeMenu} className="flex items-center gap-3">
                <span className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center">
                  <Handshake className="h-4 w-4 text-primary" />
                </span>
                <span>Partenaires</span>
              </Link>
              {/* ----------- fin ajout ----------- */}

              <div onClick={() => navigateToSection('/', 'schools-section')} className="flex items-center gap-3 cursor-pointer">
                <span className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center">
                  <GraduationCap className="h-4 w-4 text-primary" />
                </span>
                <span>Fiches écoles</span>
              </div>
              
              <div onClick={() => navigateToSection('/', 'pricing-section')} className="flex items-center gap-3 cursor-pointer">
                <span className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center">
                  <Package className="h-4 w-4 text-primary" />
                </span>
                <span>Nos formules</span>
              </div>
              
              <a href="https://www.europe1.fr/emissions/la-france-bouge-academie/prepa-rationnelle-concue-pour-revolutionner-le-monde-la-preparation-pour-integrer-les-ecoles-de-commerce-667526" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3" onClick={closeMenu}>
                <span className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center">
                  <Radio className="h-4 w-4 text-primary" />
                </span>
                <span>Interview Europe 1</span>
              </a>
              
              <div className="flex gap-4 py-2">
                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-gray-100 hover:bg-primary/10 rounded-full flex items-center justify-center transition-colors">
                  <Instagram className="h-5 w-5 text-primary" />
                </a>
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-gray-100 hover:bg-primary/10 rounded-full flex items-center justify-center transition-colors">
                  <Linkedin className="h-5 w-5 text-primary" />
                </a>
              </div>
            </div>
          </div>
          
          <Link to="/generator" className="text-lg py-2 border-b border-border" onClick={closeMenu}>
            Générateur
          </Link>
          
          {currentUser ? <>
              <Link to="/dashboard" className="text-lg py-2 border-b border-border flex items-center gap-2" onClick={closeMenu}>
                <BarChart3 className="h-4 w-4" />
                Dashboard
              </Link>
              {isProfessor && (
                <Link to="/prof" className="text-lg py-2 border-b border-border flex items-center gap-2" onClick={closeMenu}>
                  <UserCheck className="h-4 w-4" />
                  Interface Prof
                </Link>
              )}
              <Button variant="outline" onClick={() => {
            handleLogout();
            closeMenu();
          }} className="mt-4 w-full flex items-center justify-center" disabled={isLoggingOut}>
                <LogOut className="mr-2 h-4 w-4" /> 
                {isLoggingOut ? 'Déconnexion...' : 'Déconnexion'}
              </Button>
            </> : <>
              <Link to="/login" className="text-lg py-2 border-b border-border" onClick={closeMenu}>
                Connexion
              </Link>
              <Link to="/register" onClick={closeMenu} className="mt-4">
                <Button className="w-full">S'inscrire</Button>
              </Link>
            </>}
        </div>
      </div>
    </header>;
};

export default Navigation;
