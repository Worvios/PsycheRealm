'use client';

import { motion } from 'framer-motion';
import { OptimizedImage } from './OptimizedImage';

interface CommentProps {
  id: string;
  content: string;
  author: {
    name: string;
    image: string;
  };
  createdAt: string;
  likes: number;
  isLiked?: boolean;
  onLike?: (id: string) => void;
}

export function Comment({
  id,
  content,
  author,
  createdAt,
  likes,
  isLiked = false,
  onLike,
}: CommentProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-sm"
    >
      <div className="flex items-start space-x-4">
        <div className="relative h-10 w-10 rounded-full overflow-hidden flex-shrink-0">
          <OptimizedImage
            src={author.image}
            alt={author.name}
            width={40}
            height={40}
            className="w-full h-full object-cover"
          />
        </div>
        <div className="flex-grow">
          <div className="flex items-center justify-between">
            <div>
              <h4 className="text-sm font-medium text-text-light dark:text-text-dark">
                {author.name}
              </h4>
              <p className="text-xs text-text-light/60 dark:text-text-dark/60">
                {new Date(createdAt).toLocaleDateString()}
              </p>
            </div>
            {onLike && (
              <button
                onClick={() => onLike(id)}
                className={`flex items-center space-x-1 text-sm ${
                  isLiked
                    ? 'text-primary-light dark:text-accent-light'
                    : 'text-text-light/60 dark:text-text-dark/60 hover:text-primary-light dark:hover:text-accent-light'
                }`}
              >
                <svg
                  className="w-4 h-4"
                  fill={isLiked ? 'currentColor' : 'none'}
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                  />
                </svg>
                <span>{likes}</span>
              </button>
            )}
          </div>
          <p className="mt-2 text-text-light/70 dark:text-text-dark/70">
            {content}
          </p>
        </div>
      </div>
    </motion.div>
  );
} 