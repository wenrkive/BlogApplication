import { useState } from "react";
import { Search, Mail, Globe } from "lucide-react";
import { Button } from "./ui/button";

interface MSNHeaderProps {
  onSearch: (query: string) => void;
  searchQuery: string;
}

export function MSNHeader({ onSearch, searchQuery }: MSNHeaderProps) {
  const [isSearchFocused, setIsSearchFocused] = useState(false);

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onSearch(e.target.value);
  };

  return (
    <header className="w-full">
      {/* Top Blue Bar */}
      <div style={{ backgroundColor: 'var(--msn-header-bg)' }} className="text-white py-1">
        <div className="max-w-7xl mx-auto px-4 flex justify-between items-center text-xs">
          <div className="flex items-center space-x-4">
            <span>MSN Home</span>
            <span className="text-blue-200">|</span>
            <span>My MSN</span>
            <span className="text-blue-200">|</span>
            <span>Hotmail</span>
            <span className="text-blue-200">|</span>
            <span>Shopping</span>
            <span className="text-blue-200">|</span>
            <span>Money</span>
            <span className="text-blue-200">|</span>
            <span>People & Chat</span>
          </div>
          <div className="flex items-center space-x-3">
            <span>Sign in</span>
            <Button variant="ghost" size="sm" className="text-white hover:text-white p-1 h-auto">
              <Mail className="h-3 w-3" />
            </Button>
            <Button variant="ghost" size="sm" className="text-white hover:text-white p-1 h-auto">
              <Globe className="h-3 w-3" />
            </Button>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <div className="bg-white border-b border-msn-border">
        <div className="max-w-7xl mx-auto px-4">
          {/* Logo and Search Row */}
          <div className="flex items-center justify-between py-3">
            <div className="flex items-center space-x-8">
              {/* MSN Logo */}
              <div className="flex items-center">
                <div className="text-2xl font-bold" style={{ color: 'var(--msn-blue)' }}>
                  MSN
                </div>
                <div className="ml-2 text-sm text-msn-gray">
                  Microsoft
                </div>
              </div>
            </div>

            {/* Search Box */}
            <div className="flex-1 max-w-md mx-8">
              <div className={`relative transition-all duration-200 ${isSearchFocused ? 'scale-105' : ''}`}>
                <input
                  type="text"
                  value={searchQuery}
                  onChange={handleSearchChange}
                  onFocus={() => setIsSearchFocused(true)}
                  onBlur={() => setIsSearchFocused(false)}
                  placeholder="Search the Web"
                  className="w-full px-3 py-2 text-sm border border-msn-border rounded-none focus:outline-none focus:border-msn-blue focus:ring-1 focus:ring-msn-blue"
                />
                <Button 
                  size="sm" 
                  className="absolute right-0 top-0 h-full px-3 rounded-none bg-msn-blue hover:bg-msn-dark-blue"
                >
                  <Search className="h-4 w-4" />
                </Button>
              </div>
            </div>

            {/* Right Side */}
            <div className="text-xs text-msn-gray">
              Today is {new Date().toLocaleDateString('en-US', { 
                weekday: 'long', 
                year: 'numeric', 
                month: 'long', 
                day: 'numeric' 
              })}
            </div>
          </div>

          {/* Navigation Tabs */}
          <div className="border-t border-msn-border">
            <nav className="flex space-x-0">
              {[
                { name: 'Home', active: true },
                { name: 'News', active: false },
                { name: 'Sports', active: false },
                { name: 'Entertainment', active: false },
                { name: 'Money', active: false },
                { name: 'Health & Fitness', active: false },
                { name: 'Technology', active: false },
                { name: 'Travel', active: false },
                { name: 'Local', active: false },
                { name: 'Video', active: false }
              ].map((tab, index) => (
                <button
                  key={tab.name}
                  className={`px-4 py-2 text-sm border-r border-msn-border last:border-r-0 transition-colors ${
                    tab.active
                      ? 'bg-msn-light-blue text-msn-dark-blue font-medium'
                      : 'text-msn-blue hover:bg-gray-50 hover:text-msn-dark-blue'
                  }`}
                >
                  {tab.name}
                </button>
              ))}
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
}