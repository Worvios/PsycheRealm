'use client';

import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Calendar, Clock, User } from 'lucide-react';
import { formatDate } from '@/lib/sanity';

interface ArticleCardProps {
  post: {
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
  };
}

export default function ArticleCard({ post }: ArticleCardProps) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden"
    >
      <Link href={`/post/${post.slug.current}`} className="block">
        <div className="relative h-48 w-full">
          <Image
            src={post.mainImage.asset.url}
            alt={post.title}
            fill
            className="object-cover"
          />
        </div>
        <div className="p-6">
          <div className="flex items-center gap-4 text-sm text-gray-600 dark:text-gray-400 mb-4">
            <span className="flex items-center gap-1">
              <Calendar className="w-4 h-4" />
              {formatDate(post.publishedAt)}
            </span>
            <span className="flex items-center gap-1">
              <Clock className="w-4 h-4" />
              5 min read
            </span>
          </div>
          <h2 className="text-xl font-bold mb-2 text-gray-900 dark:text-white">
            {post.title}
          </h2>
          <p className="text-gray-600 dark:text-gray-400 mb-4 line-clamp-2">
            {post.excerpt}
          </p>
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <User className="w-4 h-4 text-gray-600 dark:text-gray-400" />
              <span className="text-sm text-gray-600 dark:text-gray-400">
                {post.author.name}
              </span>
            </div>
            <span className="text-sm font-medium text-blue-600 dark:text-blue-400">
              {post.category.name}
            </span>
          </div>
        </div>
      </Link>
    </motion.article>
  );
} 