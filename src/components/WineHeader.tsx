import { Search } from "lucide-react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";

interface WineHeaderProps {
  onSearch: (query: string) => void;
  searchQuery: string;
  currentPage: string;
  onPageChange: (page: string) => void;
}

export function WineHeader({ onSearch, searchQuery, currentPage, onPageChange }: WineHeaderProps) {
  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'mangas', label: 'Mangás' },
    { id: 'desenhos', label: 'Desenhos' },
    { id: 'jogos', label: 'Jogos' },
    { id: 'receitas', label: 'Receitas' },
    { id: 'hobbies', label: 'Hobbies' }
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border bg-background/80 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <div className="flex items-center">
            <button
              onClick={() => onPageChange('home')}
              className="text-2xl font-bold text-primary hover:text-primary/80 transition-colors"
            >
              WSA
            </button>
          </div>

          {/* Navigation - Hidden on mobile */}
          <nav className="hidden lg:flex items-center space-x-1">
            {navItems.map((item) => (
              <Button
                key={item.id}
                variant={currentPage === item.id ? "secondary" : "ghost"}
                size="sm"
                onClick={() => onPageChange(item.id)}
                className="text-sm font-medium hover:text-primary transition-colors"
              >
                {item.label}
              </Button>
            ))}
          </nav>

          {/* Search */}
          <div className="flex items-center space-x-2">
            <div className="relative">
              <Search className="absolute left-2 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
              <Input
                placeholder="Buscar..."
                value={searchQuery}
                onChange={(e) => onSearch(e.target.value)}
                className="pl-8 w-32 sm:w-64"
              />
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        <div className="lg:hidden pb-4">
          <div className="flex flex-wrap gap-2">
            {navItems.map((item) => (
              <Button
                key={item.id}
                variant={currentPage === item.id ? "secondary" : "ghost"}
                size="sm"
                onClick={() => onPageChange(item.id)}
                className="text-xs"
              >
                {item.label}
              </Button>
            ))}
          </div>
        </div>
      </div>
    </header>
  );
}