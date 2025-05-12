'use client';

import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';

const featuredPosts = [
  {
    title: 'The Mind-Body Connection: A Holistic Approach to Wellness',
    excerpt: 'Exploring how our mental and physical states are deeply interconnected...',
    image: '/images/posts/mind-body.jpg',
    slug: 'mind-body-connection',
    category: 'fitness-movement',
  },
  {
    title: 'Conscious Eating: Beyond the Plate',
    excerpt: 'Understanding the deeper implications of our food choices...',
    image: '/images/posts/conscious-eating.jpg',
    slug: 'conscious-eating',
    category: 'nutrition-eating',
  },
  {
    title: 'Digital Mindfulness in the Age of Distraction',
    excerpt: 'Finding balance in our increasingly connected world...',
    image: '/images/posts/digital-mindfulness.jpg',
    slug: 'digital-mindfulness',
    category: 'technology',
  },
];

const categories = [
  {
    name: 'Fitness & Movement',
    slug: 'fitness-movement',
  },
  {
    name: 'Nutrition & Conscious Eating',
    slug: 'nutrition-eating',
  },
  {
    name: 'Technology & Its Impact on Humanity',
    slug: 'technology',
  },
];

export function FeaturedPostsSection() {
  return (
    <section className="py-16 px-4 bg-background-light dark:bg-background-dark">
      <div className="max-w-7xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-3xl font-serif font-bold text-center mb-12 text-text-light dark:text-text-dark"
        >
          Featured Articles
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredPosts.map((post, index) => (
            <motion.article
              key={post.slug}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-background-alt-light dark:bg-background-alt-dark rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 border border-border-light dark:border-border-dark"
            >
              <div className="relative h-48 overflow-hidden">
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
              <div className="p-6">
                <Link
                  href={`/category/${post.category}`}
                  className="text-sm font-medium text-accent-light dark:text-accent-dark mb-2 block hover:underline transition-colors duration-300"
                >
                  {categories.find((c) => c.slug === post.category)?.name}
                </Link>
                <Link href={`/post/${post.slug}`}>
                  <h3 className="text-xl font-serif font-semibold mb-2 text-text-light dark:text-text-dark hover:text-accent-light dark:hover:text-accent-dark transition-colors duration-300">
                    {post.title}
                  </h3>
                </Link>
                <p className="text-text-muted-light dark:text-text-muted-dark">
                  {post.excerpt}
                </p>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
} 