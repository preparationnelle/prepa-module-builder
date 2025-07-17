
import React from 'react';
import { Input } from '@/components/ui/input';
import { Search } from 'lucide-react';

interface SearchBarProps {
  searchTerm: string;
  onSearchChange: (value: string) => void;
}

const SearchBar = ({ searchTerm, onSearchChange }: SearchBarProps) => (
  <div className="relative max-w-md">
    <div className="absolute left-3 top-1/2 transform -translate-y-1/2">
      <Search className="text-muted-foreground h-4 w-4" />
    </div>
    <Input
      placeholder="Rechercher une commande..."
      value={searchTerm}
      onChange={(e) => onSearchChange(e.target.value)}
      className="pl-10 h-10 border-input bg-background"
    />
  </div>
);

export default SearchBar;
