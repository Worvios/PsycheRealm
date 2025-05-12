'use client';

import { motion } from 'framer-motion';
import ArticleCard from './ArticleCard';

interface Post {
  _id: string;
  title: string;
  slug: {
    current: string;
  };
  mainImage: {
    asset: {
      url: string;
    };
  };
  excerpt: string;
  publishedAt: string;
  author: {
    name: string;
  };
  category: {
    name: string;
  };
}

interface ArticleListProps {
  posts: Post[];
  title?: string;
}

export default function ArticleList({ posts, title }: ArticleListProps) {
  return (
    <section className="py-12">
      {title && (
        <div className="mb-8">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white">
            {title}
          </h2>
        </div>
      )}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {posts.map((post) => (
          <ArticleCard key={post._id} post={post} />
        ))}
      </div>
    </section>
  );
} 