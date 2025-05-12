'use client';

import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search as SearchIcon, X } from 'lucide-react';

interface SearchResult {
  title: string;
  excerpt: string;
}

export function Search() {
  const [isOpen, setIsOpen] = useState(false);
  const [query, setQuery] = useState('');
  const [results, setResults] = useState<SearchResult[]>([]);
  const searchRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (searchRef.current && !searchRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleSearch = async (searchQuery: string) => {
    setQuery(searchQuery);
    if (searchQuery.length < 2) {
      setResults([]);
      return;
    }

    // TODO: Implement actual search logic here
    // This is a placeholder for the search results
    const mockResults: SearchResult[] = [
      { title: 'Sample Result 1', excerpt: 'This is a sample search result...' },
      { title: 'Sample Result 2', excerpt: 'Another sample search result...' },
    ];
    setResults(mockResults);
  };

  return (
    <div ref={searchRef} className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="p-2 rounded-lg hover:bg-surface-light dark:hover:bg-surface-dark transition-colors"
        aria-label="Search"
      >
        <SearchIcon className="w-5 h-5 text-text-light dark:text-text-dark" />
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="absolute right-0 mt-2 w-96 bg-background-light dark:bg-background-dark rounded-lg shadow-lg border border-surface-light dark:border-surface-dark"
          >
            <div className="p-4">
              <div className="relative">
                <input
                  type="text"
                  value={query}
                  onChange={(e) => handleSearch(e.target.value)}
                  placeholder="Search articles..."
                  className="w-full px-4 py-2 pl-10 rounded-lg bg-surface-light dark:bg-surface-dark text-text-light dark:text-text-dark border border-surface-light dark:border-surface-dark focus:outline-none focus:ring-2 focus:ring-primary-light dark:focus:ring-accent-light"
                />
                <SearchIcon className="absolute left-3 top-2.5 w-5 h-5 text-text-light/50 dark:text-text-dark/50" />
                <button
                  onClick={() => setIsOpen(false)}
                  className="absolute right-3 top-2.5 p-1 rounded-full hover:bg-surface-light dark:hover:bg-surface-dark"
                >
                  <X className="w-4 h-4 text-text-light/50 dark:text-text-dark/50" />
                </button>
              </div>

              {results.length > 0 && (
                <div className="mt-4 space-y-2">
                  {results.map((result, index) => (
                    <div
                      key={index}
                      className="p-3 rounded-lg hover:bg-surface-light dark:hover:bg-surface-dark cursor-pointer"
                    >
                      <h3 className="font-medium text-text-light dark:text-text-dark">
                        {result.title}
                      </h3>
                      <p className="text-sm text-text-light/70 dark:text-text-dark/70">
                        {result.excerpt}
                      </p>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
} 