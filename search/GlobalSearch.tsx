
import React, { useState, useEffect, useRef } from 'react';
import { Search, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Command, CommandDialog, CommandEmpty, CommandGroup, CommandInput, CommandItem, CommandList } from '@/components/ui/command';
import { useSearch } from '@/hooks/useSearch';
import { useNavigate } from 'react-router-dom';
import { searchCategories } from '@/data/searchData';

export const GlobalSearch = () => {
  const [open, setOpen] = useState(false);
  const { searchTerm, setSearchTerm, resultsByCategory } = useSearch();
  const navigate = useNavigate();

  useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key === 'k' && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        setOpen((open) => !open);
      }
    };

    document.addEventListener('keydown', down);
    return () => document.removeEventListener('keydown', down);
  }, []);

  const handleSelect = (url: string) => {
    navigate(url);
    setOpen(false);
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

  return (
    <>
      <Button
        variant="outline"
        className="relative h-9 w-9 p-0 xl:h-10 xl:w-60 xl:justify-start xl:px-3 xl:py-2"
        onClick={() => setOpen(true)}
      >
        <Search className="h-4 w-4 xl:mr-2" />
        <span className="hidden xl:inline-flex">Rechercher...</span>
        <kbd className="pointer-events-none absolute right-1.5 top-2 hidden h-6 select-none items-center gap-1 rounded border bg-muted px-1.5 font-mono text-[10px] font-medium opacity-100 xl:flex">
          <span className="text-xs">⌘</span>K
        </kbd>
      </Button>

      <CommandDialog open={open} onOpenChange={setOpen}>
        <CommandInput 
          placeholder="Rechercher des cours, écoles, questions..." 
          value={searchTerm}
          onValueChange={setSearchTerm}
        />
        <CommandList>
          <CommandEmpty>
            <div className="text-center py-6">
              <Search className="mx-auto h-12 w-12 text-muted-foreground mb-4" />
              <p className="text-sm text-muted-foreground">
                {searchTerm ? "Aucun résultat trouvé." : "Tapez pour rechercher du contenu..."}
              </p>
            </div>
          </CommandEmpty>
          
          {Object.entries(resultsByCategory).map(([category, results]) => (
            <CommandGroup key={category} heading={`${getCategoryIcon(category)} ${category}`}>
              {results.slice(0, 5).map((item) => (
                <CommandItem
                  key={item.id}
                  value={item.title}
                  onSelect={() => handleSelect(item.url)}
                  className="flex items-center gap-3 py-3"
                >
                  <div className="flex-1">
                    <div className="font-medium">{item.title}</div>
                    <div className="text-sm text-muted-foreground line-clamp-1">
                      {item.description}
                    </div>
                  </div>
                  <Badge variant="secondary" className="text-xs">
                    {category}
                  </Badge>
                </CommandItem>
              ))}
            </CommandGroup>
          ))}
        </CommandList>
      </CommandDialog>
    </>
  );
};
