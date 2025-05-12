'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Comment } from './Comment';
import { OptimizedImage } from './OptimizedImage';

interface CommentType {
  id: string;
  content: string;
  author: {
    name: string;
    image: string;
  };
  createdAt: string;
  likes: number;
  isLiked?: boolean;
}

interface CommentSectionProps {
  comments: CommentType[];
  currentUser?: {
    name: string;
    image: string;
  };
  onAddComment?: (content: string) => void;
  onLikeComment?: (id: string) => void;
}

export function CommentSection({
  comments,
  currentUser,
  onAddComment,
  onLikeComment,
}: CommentSectionProps) {
  const [newComment, setNewComment] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (newComment.trim() && onAddComment) {
      onAddComment(newComment.trim());
      setNewComment('');
    }
  };

  return (
    <section className="py-12">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl font-bold text-text-light dark:text-text-dark mb-8">
          Comments ({comments.length})
        </h2>

        {/* Comment Form */}
        {currentUser && onAddComment && (
          <motion.form
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            onSubmit={handleSubmit}
            className="mb-8"
          >
            <div className="flex space-x-4">
              <div className="relative h-10 w-10 rounded-full overflow-hidden flex-shrink-0">
                <OptimizedImage
                  src={currentUser.image}
                  alt={currentUser.name}
                  width={40}
                  height={40}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="flex-grow">
                <textarea
                  value={newComment}
                  onChange={(e) => setNewComment(e.target.value)}
                  placeholder="Add a comment..."
                  className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-text-light dark:text-text-dark focus:ring-2 focus:ring-primary-light dark:focus:ring-accent-light focus:border-transparent resize-none"
                  rows={3}
                />
                <div className="mt-2 flex justify-end">
                  <button
                    type="submit"
                    disabled={!newComment.trim()}
                    className="px-4 py-2 rounded-lg bg-primary-light dark:bg-accent-light text-white font-medium hover:bg-primary-light/90 dark:hover:bg-accent-light/90 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    Post Comment
                  </button>
                </div>
              </div>
            </div>
          </motion.form>
        )}

        {/* Comments List */}
        <div className="space-y-6">
          {comments.map((comment, index) => (
            <motion.div
              key={comment.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
            >
              <Comment
                {...comment}
                onLike={onLikeComment ? () => onLikeComment(comment.id) : undefined}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
} 