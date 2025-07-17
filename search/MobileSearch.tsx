
import React, { useState } from 'react';
import { Search, X, ArrowLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { useSearch } from '@/hooks/useSearch';
import { useNavigate } from 'react-router-dom';
import { cn } from '@/lib/utils';

export const MobileSearch = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { searchTerm, setSearchTerm, resultsByCategory } = useSearch();
  const navigate = useNavigate();

  const handleSelect = (url: string) => {
    navigate(url);
    setIsOpen(false);
    setSearchTerm('');
  };

  const getCategoryIcon = (category: string) => {
    const icons = {
      'Méthodologie': '📚',
      'Formation': '🎓',
      'Écoles': '🏫',
      'Questions': '❓',
      'Générateurs': '🤖',
      'Services': '💼',
      'Informations': 'ℹ️'
    };
    return icons[category as keyof typeof icons] || '📄';
  };

  if (!isOpen) {
    return (
      <Button
        variant="ghost"
        size="icon"
        onClick={() => setIsOpen(true)}
        className="md:hidden"
      >
        <Search className="h-5 w-5" />
      </Button>
    );
  }

  return (
    <div className="fixed inset-0 z-50 bg-background md:hidden">
      <div className="flex h-full flex-col">
        {/* Header */}
        <div className="flex items-center gap-3 px-4 py-3 border-b">
          <Button
            variant="ghost"
            size="icon"
            onClick={() => {
              setIsOpen(false);
              setSearchTerm('');
            }}
          >
            <ArrowLeft className="h-5 w-5" />
          </Button>
          <div className="flex-1">
            <Input
              placeholder="Rechercher..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="border-0 shadow-none focus-visible:ring-0"
              autoFocus
            />
          </div>
          {searchTerm && (
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setSearchTerm('')}
            >
              <X className="h-4 w-4" />
            </Button>
          )}
        </div>

        {/* Results */}
        <div className="flex-1 overflow-y-auto">
          {!searchTerm && (
            <div className="p-8 text-center">
              <Search className="mx-auto h-12 w-12 text-muted-foreground mb-4" />
              <p className="text-muted-foreground">
                Tapez pour rechercher du contenu...
              </p>
            </div>
          )}

          {searchTerm && Object.keys(resultsByCategory).length === 0 && (
            <div className="p-8 text-center">
              <p className="text-muted-foreground">Aucun résultat trouvé.</p>
            </div>
          )}

          {Object.entries(resultsByCategory).map(([category, results]) => (
            <div key={category} className="border-b">
              <div className="px-4 py-2 bg-muted/50">
                <h3 className="font-medium text-sm flex items-center gap-2">
                  <span>{getCategoryIcon(category)}</span>
                  {category}
                </h3>
              </div>
              {results.slice(0, 5).map((item) => (
                <button
                  key={item.id}
                  onClick={() => handleSelect(item.url)}
                  className="w-full px-4 py-3 text-left hover:bg-muted/50 border-b border-border/50 last:border-0"
                >
                  <div className="font-medium mb-1">{item.title}</div>
                  <div className="text-sm text-muted-foreground line-clamp-2">
                    {item.description}
                  </div>
                </button>
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
