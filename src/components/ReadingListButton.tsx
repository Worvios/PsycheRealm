'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Bookmark, BookmarkCheck } from 'lucide-react';
import { useReadingList } from '@/contexts/ReadingListContext';

interface ReadingListButtonProps {
  article: {
    id: string;
    title: string;
    slug: string;
    excerpt: string;
    readingTime: number;
  };
  className?: string;
}

export function ReadingListButton({ article, className = '' }: ReadingListButtonProps) {
  const { addArticle, removeArticle, isInReadingList } = useReadingList();
  const [isAnimating, setIsAnimating] = useState(false);

  const handleClick = () => {
    setIsAnimating(true);
    if (isInReadingList(article.id)) {
      removeArticle(article.id);
    } else {
      addArticle(article);
    }
    setTimeout(() => setIsAnimating(false), 300);
  };

  return (
    <motion.button
      onClick={handleClick}
      className={`
        relative p-2 rounded-full
        text-text-light/70 dark:text-text-dark/70
        hover:text-primary-light dark:hover:text-accent-light
        transition-colors duration-200
        ${className}
      `}
      whileTap={{ scale: 0.95 }}
    >
      <AnimatePresence mode="wait">
        {isInReadingList(article.id) ? (
          <motion.div
            key="bookmark-check"
            initial={{ scale: 0, rotate: -180 }}
            animate={{ scale: 1, rotate: 0 }}
            exit={{ scale: 0, rotate: 180 }}
            transition={{ duration: 0.2 }}
          >
            <BookmarkCheck className="w-5 h-5" />
          </motion.div>
        ) : (
          <motion.div
            key="bookmark"
            initial={{ scale: 0, rotate: -180 }}
            animate={{ scale: 1, rotate: 0 }}
            exit={{ scale: 0, rotate: 180 }}
            transition={{ duration: 0.2 }}
          >
            <Bookmark className="w-5 h-5" />
          </motion.div>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {isAnimating && (
          <motion.div
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0, opacity: 0 }}
            className="absolute inset-0 bg-primary-light/10 dark:bg-accent-light/10 rounded-full"
          />
        )}
      </AnimatePresence>
    </motion.button>
  );
} 