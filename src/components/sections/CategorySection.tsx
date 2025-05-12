'use client';

import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';

const categories = [
  {
    name: 'Fitness & Movement',
    slug: 'fitness-movement',
    description: 'Explore physical wellness and movement practices',
    image: '/images/categories/fitness.jpg',
  },
  {
    name: 'Nutrition & Conscious Eating',
    slug: 'nutrition-eating',
    description: 'Discover mindful eating and nutritional wisdom',
    image: '/images/categories/nutrition.jpg',
  },
  {
    name: 'Mental Health & Emotional Well-being',
    slug: 'mental-health',
    description: 'Navigate the landscape of mental wellness',
    image: '/images/categories/mental-health.jpg',
  },
  {
    name: 'Philosophy & Existential Inquiry',
    slug: 'philosophy',
    description: 'Dive into life\'s deepest questions',
    image: '/images/categories/philosophy.jpg',
  },
  {
    name: 'Personal Development & Self-Optimization',
    slug: 'personal-development',
    description: 'Tools and insights for personal growth',
    image: '/images/categories/personal-development.jpg',
  },
  {
    name: 'Technology & Its Impact on Humanity',
    slug: 'technology',
    description: 'Examine the intersection of tech and human experience',
    image: '/images/categories/technology.jpg',
  },
  {
    name: 'Creative Expression & The Arts',
    slug: 'creative-arts',
    description: 'Celebrate creativity and artistic expression',
    image: '/images/categories/creative-arts.jpg',
  },
];

export function CategorySection() {
  return (
    <section className="py-16 px-4 bg-background-alt-light dark:bg-background-alt-dark">
      <div className="max-w-7xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-3xl font-serif font-bold text-center mb-12 text-text-light dark:text-text-dark"
        >
          Explore Our Categories
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {categories.map((category, index) => (
            <motion.div
              key={category.slug}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Link
                href={`/category/${category.slug}`}
                className="group block bg-background-light dark:bg-background-dark rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 border border-border-light dark:border-border-dark"
              >
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={category.image}
                    alt={category.name}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-serif font-semibold mb-2 text-text-light dark:text-text-dark group-hover:text-accent-light dark:group-hover:text-accent-dark transition-colors duration-300">
                    {category.name}
                  </h3>
                  <p className="text-text-muted-light dark:text-text-muted-dark">
                    {category.description}
                  </p>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
} 