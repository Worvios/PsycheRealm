'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';

interface Category {
  name: string;
  slug: string;
  description: string;
}

interface CategoryMenuProps {
  categories: Category[];
}

export function CategoryMenu({ categories }: CategoryMenuProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center space-x-2 px-4 py-2 rounded-lg bg-surface-light dark:bg-surface-dark text-text-light dark:text-text-dark hover:bg-primary-light hover:text-white dark:hover:bg-primary-dark transition-colors duration-200"
      >
        <span>Categories</span>
        <svg
          className={`w-4 h-4 transform transition-transform duration-200 ${
            isOpen ? 'rotate-180' : ''
          }`}
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 9l-7 7-7-7"
          />
        </svg>
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="absolute right-0 mt-2 w-64 rounded-lg bg-surface-light dark:bg-surface-dark shadow-lg overflow-hidden z-50"
          >
            <div className="py-2">
              {categories.map((category) => (
                <Link
                  key={category.slug}
                  href={`/category/${category.slug}`}
                  className="block px-4 py-2 text-text-light dark:text-text-dark hover:bg-primary-light hover:text-white dark:hover:bg-primary-dark transition-colors duration-200"
                  onClick={() => setIsOpen(false)}
                >
                  <div className="font-medium">{category.name}</div>
                  <div className="text-sm opacity-75">{category.description}</div>
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
} 