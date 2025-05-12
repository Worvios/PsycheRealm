'use client';

import { motion } from 'framer-motion';
import { ArticleCard } from './ArticleCard';
import { CategoryCard } from './CategoryCard';

interface SearchResult {
  type: 'article' | 'category';
  data: any; // This will be either Article or Category type
}

interface SearchResultsProps {
  results: SearchResult[];
  query: string;
  isLoading?: boolean;
}

export function SearchResults({ results, query, isLoading = false }: SearchResultsProps) {
  if (isLoading) {
    return (
      <div className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="animate-pulse space-y-8">
            {[1, 2, 3].map((i) => (
              <div key={i} className="bg-gray-200 dark:bg-gray-700 rounded-lg h-48" />
            ))}
          </div>
        </div>
      </div>
    );
  }

  if (!results.length) {
    return (
      <div className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-2xl font-bold text-text-light dark:text-text-dark mb-4">
              No results found
            </h2>
            <p className="text-text-light/70 dark:text-text-dark/70">
              We couldn't find any results for "{query}". Try adjusting your search terms.
            </p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl font-bold text-text-light dark:text-text-dark mb-8">
          Search Results for "{query}"
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {results.map((result, index) => (
            <motion.div
              key={result.data.slug}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
            >
              {result.type === 'article' ? (
                <ArticleCard {...result.data} />
              ) : (
                <CategoryCard {...result.data} />
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
} 