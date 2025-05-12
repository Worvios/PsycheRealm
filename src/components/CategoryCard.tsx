'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { Brain, Dumbbell, Apple, Lightbulb, User, Laptop, Palette } from 'lucide-react';

const categoryIcons = {
  'mental-health': Brain,
  'fitness': Dumbbell,
  'nutrition': Apple,
  'philosophy': Lightbulb,
  'personal-development': User,
  'technology': Laptop,
  'creative-arts': Palette,
};

interface CategoryCardProps {
  name: string;
  slug: string;
  description: string;
  articleCount: number;
}

export function CategoryCard({ name, slug, description, articleCount }: CategoryCardProps) {
  const Icon = categoryIcons[slug as keyof typeof categoryIcons] || Lightbulb;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow"
    >
      <Link href={`/category/${slug}`} className="block p-6">
        <div className="flex items-center mb-4">
          <div className="p-3 rounded-lg bg-primary-light/10 dark:bg-accent-light/10 text-primary-light dark:text-accent-light">
            <Icon className="w-6 h-6" />
          </div>
          <div className="ml-4">
            <h2 className="text-xl font-bold text-text-light dark:text-text-dark hover:text-primary-light dark:hover:text-accent-light transition-colors">
              {name}
            </h2>
            <p className="text-sm text-text-light/60 dark:text-text-dark/60">
              {articleCount} {articleCount === 1 ? 'article' : 'articles'}
            </p>
          </div>
        </div>
        <p className="text-text-light/70 dark:text-text-dark/70 line-clamp-2">
          {description}
        </p>
      </Link>
    </motion.div>
  );
} 