import React from 'react';
import { NavLink } from 'react-router-dom';
import { 
  BarChart3, 
  BookOpen, 
  PlusCircle, 
  Settings, 
  FileText, 
  Users,
  Zap,
  Download,
  History
} from 'lucide-react';
import { cn } from '@/lib/utils';

const navigationItems = [
  {
    title: 'Tableau de bord',
    href: '/prof',
    icon: BarChart3,
    description: 'Statistiques et analytics'
  },
  {
    title: 'Mes Cours',
    href: '/prof/courses',
    icon: BookOpen,
    description: 'Gestion des cours'
  },
  {
    title: 'Gestion de contenu',
    href: '/prof/content',
    icon: FileText,
    submenu: [
      { title: 'Modules', href: '/prof/content/modules', icon: FileText },
      { title: 'Leçons', href: '/prof/content/lessons', icon: BookOpen },
      { title: 'Exercices', href: '/prof/content/exercises', icon: PlusCircle },
    ]
  },
  {
    title: 'Générateur IA',
    href: '/prof/generator',
    icon: Zap,
    description: 'Création automatique d\'exercices'
  },
  {
    title: 'Analytics avancées',
    href: '/prof/analytics',
    icon: Users,
    description: 'Suivi des étudiants'
  },
  {
    title: 'Import/Export',
    href: '/prof/import-export',
    icon: Download,
    description: 'Gestion des données'
  },
  {
    title: 'Versioning',
    href: '/prof/versions',
    icon: History,
    description: 'Historique du contenu'
  },
  {
    title: 'Administration',
    href: '/prof/admin',
    icon: Settings,
    description: 'Paramètres et configuration'
  }
];

const TeacherSidebar: React.FC = () => {
  return (
    <aside className="w-64 bg-card border-r border-border min-h-screen">
      <div className="p-6">
        <h2 className="text-lg font-semibold text-foreground mb-6">
          Interface Professeur
        </h2>
        
        <nav className="space-y-2">
          {navigationItems.map((item) => (
            <div key={item.href}>
              <NavLink
                to={item.href}
                className={({ isActive }) => cn(
                  "flex items-center gap-3 px-3 py-2 rounded-lg text-sm font-medium transition-colors",
                  isActive
                    ? "bg-primary text-primary-foreground"
                    : "text-muted-foreground hover:bg-accent hover:text-accent-foreground"
                )}
              >
                <item.icon className="h-4 w-4" />
                <span>{item.title}</span>
              </NavLink>
              
              {item.submenu && (
                <div className="ml-6 mt-1 space-y-1">
                  {item.submenu.map((subItem) => (
                    <NavLink
                      key={subItem.href}
                      to={subItem.href}
                      className={({ isActive }) => cn(
                        "flex items-center gap-3 px-3 py-1.5 rounded-lg text-xs transition-colors",
                        isActive
                          ? "bg-primary/20 text-primary"
                          : "text-muted-foreground hover:bg-accent hover:text-accent-foreground"
                      )}
                    >
                      <subItem.icon className="h-3 w-3" />
                      <span>{subItem.title}</span>
                    </NavLink>
                  ))}
                </div>
              )}
            </div>
          ))}
        </nav>
      </div>
    </aside>
  );
};

export default TeacherSidebar;