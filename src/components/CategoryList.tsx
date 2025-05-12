'use client';

import { motion } from 'framer-motion';
import { CategoryCard } from './CategoryCard';

interface Category {
  name: string;
  slug: string;
  description: string;
  articleCount: number;
}

interface CategoryListProps {
  categories: Category[];
  title?: string;
  description?: string;
}

export function CategoryList({ categories, title, description }: CategoryListProps) {
  return (
    <section className="py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {(title || description) && (
          <div className="text-center mb-12">
            {title && (
              <h2 className="text-3xl font-bold text-text-light dark:text-text-dark mb-4">
                {title}
              </h2>
            )}
            {description && (
              <p className="text-lg text-text-light/70 dark:text-text-dark/70 max-w-2xl mx-auto">
                {description}
              </p>
            )}
          </div>
        )}

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {categories.map((category, index) => (
            <motion.div
              key={category.slug}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
            >
              <CategoryCard {...category} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
} 