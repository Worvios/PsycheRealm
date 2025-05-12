'use client';

import { createContext, useContext, useState, useEffect, ReactNode } from 'react';

interface Article {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  readingTime: number;
  addedAt: Date;
}

interface ReadingListContextType {
  articles: Article[];
  addArticle: (article: Omit<Article, 'addedAt'>) => void;
  removeArticle: (id: string) => void;
  isInReadingList: (id: string) => boolean;
}

const ReadingListContext = createContext<ReadingListContextType | undefined>(undefined);

export function ReadingListProvider({ children }: { children: ReactNode }) {
  const [articles, setArticles] = useState<Article[]>([]);

  // Load reading list from localStorage on mount
  useEffect(() => {
    const savedArticles = localStorage.getItem('readingList');
    if (savedArticles) {
      setArticles(JSON.parse(savedArticles));
    }
  }, []);

  // Save reading list to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem('readingList', JSON.stringify(articles));
  }, [articles]);

  const addArticle = (article: Omit<Article, 'addedAt'>) => {
    setArticles((prev) => {
      if (prev.some((a) => a.id === article.id)) return prev;
      return [...prev, { ...article, addedAt: new Date() }];
    });
  };

  const removeArticle = (id: string) => {
    setArticles((prev) => prev.filter((article) => article.id !== id));
  };

  const isInReadingList = (id: string) => {
    return articles.some((article) => article.id === id);
  };

  return (
    <ReadingListContext.Provider
      value={{
        articles,
        addArticle,
        removeArticle,
        isInReadingList,
      }}
    >
      {children}
    </ReadingListContext.Provider>
  );
}

export function useReadingList() {
  const context = useContext(ReadingListContext);
  if (context === undefined) {
    throw new Error('useReadingList must be used within a ReadingListProvider');
  }
  return context;
} 