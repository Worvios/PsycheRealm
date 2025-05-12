'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { Clock, Trash2 } from 'lucide-react';
import { Breadcrumb } from './Breadcrumb';
import { BackToTop } from './BackToTop';
import { useReadingList } from '@/contexts/ReadingListContext';

export function ReadingListContent() {
  const { articles, removeArticle } = useReadingList();

  return (
    <div className="min-h-screen py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <Breadcrumb
          items={[
            { label: 'Reading List' },
          ]}
        />

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="space-y-8"
        >
          <div className="flex items-center justify-between">
            <h1 className="text-4xl font-bold text-text-light dark:text-text-dark">
              Reading List
            </h1>
            <p className="text-text-light/70 dark:text-text-dark/70">
              {articles.length} {articles.length === 1 ? 'article' : 'articles'} saved
            </p>
          </div>

          {articles.length === 0 ? (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-12"
            >
              <p className="text-text-light/70 dark:text-text-dark/70 text-lg">
                Your reading list is empty. Start saving articles to read them later!
              </p>
            </motion.div>
          ) : (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="space-y-6"
            >
              {articles.map((article, index) => (
                <motion.article
                  key={article.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-white dark:bg-gray-800 rounded-lg shadow-sm p-6"
                >
                  <div className="flex items-start justify-between">
                    <div className="space-y-2">
                      <Link
                        href={`/articles/${article.slug}`}
                        className="text-xl font-semibold text-text-light dark:text-text-dark hover:text-primary-light dark:hover:text-accent-light transition-colors"
                      >
                        {article.title}
                      </Link>
                      <p className="text-text-light/70 dark:text-text-dark/70">
                        {article.excerpt}
                      </p>
                      <div className="flex items-center space-x-4 text-sm text-text-light/50 dark:text-text-dark/50">
                        <div className="flex items-center space-x-1">
                          <Clock className="w-4 h-4" />
                          <span>{article.readingTime} min read</span>
                        </div>
                        <span>
                          Added {new Date(article.addedAt).toLocaleDateString()}
                        </span>
                      </div>
                    </div>
                    <button
                      onClick={() => removeArticle(article.id)}
                      className="p-2 text-text-light/50 dark:text-text-dark/50 hover:text-red-500 transition-colors"
                      aria-label="Remove from reading list"
                    >
                      <Trash2 className="w-5 h-5" />
                    </button>
                  </div>
                </motion.article>
              ))}
            </motion.div>
          )}
        </motion.div>
      </div>
      <BackToTop />
    </div>
  );
} 