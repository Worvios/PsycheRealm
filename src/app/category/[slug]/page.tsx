import { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { getPostsByCategory, getCategories } from '@/lib/sanity';
import { notFound } from 'next/navigation';
import PostCard from '@/components/PostCard';

// This would typically come from your CMS
const categories = [
  {
    name: 'Fitness & Movement',
    slug: 'fitness-movement',
    description: 'Explore physical wellness and movement practices',
  },
  {
    name: 'Nutrition & Conscious Eating',
    slug: 'nutrition-eating',
    description: 'Discover mindful eating and nutritional wisdom',
  },
  {
    name: 'Mental Health & Emotional Well-being',
    slug: 'mental-health',
    description: 'Navigate the landscape of mental wellness',
  },
  {
    name: 'Philosophy & Existential Inquiry',
    slug: 'philosophy',
    description: 'Dive into life\'s deepest questions',
  },
  {
    name: 'Personal Development & Self-Optimization',
    slug: 'personal-development',
    description: 'Tools and insights for personal growth',
  },
  {
    name: 'Technology & Its Impact on Humanity',
    slug: 'technology',
    description: 'Examine the intersection of tech and human experience',
  },
  {
    name: 'Creative Expression & The Arts',
    slug: 'creative-arts',
    description: 'Celebrate creativity and artistic expression',
  },
];

// Mock posts data - this would come from your CMS
const mockPosts = [
  {
    title: 'The Mind-Body Connection: A Holistic Approach to Wellness',
    excerpt: 'Exploring how our mental and physical states are deeply interconnected...',
    image: '/images/posts/mind-body.jpg',
    slug: 'mind-body-connection',
    category: 'fitness-movement',
    date: '2024-03-15',
    author: 'Dr. Sarah Johnson',
    readingTime: '8 min read',
  },
  {
    title: 'Conscious Eating: Beyond the Plate',
    excerpt: 'Understanding the deeper implications of our food choices...',
    image: '/images/posts/conscious-eating.jpg',
    slug: 'conscious-eating',
    category: 'nutrition-eating',
    date: '2024-03-14',
    author: 'Michael Chen',
    readingTime: '6 min read',
  },
  // Add more mock posts as needed
];

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata> {
  const category = categories.find((c) => c.slug === params.slug);
  
  if (!category) {
    return {
      title: 'Category Not Found - PsycheRealm',
    };
  }

  return {
    title: `${category.name} - PsycheRealm`,
    description: category.description,
  };
}

export async function generateStaticParams() {
  const categories = await getCategories();
  return categories.map((category: any) => ({
    slug: category.slug.current,
  }));
}

export default async function CategoryPage({ params }: { params: { slug: string } }) {
  const posts = await getPostsByCategory(params.slug);
  const categories = await getCategories();
  const currentCategory = categories.find((cat: any) => cat.slug.current === params.slug);

  if (!currentCategory) {
    notFound();
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-text-light dark:text-text-dark mb-4">
          {currentCategory.title}
        </h1>
        <p className="text-lg text-text-light/70 dark:text-text-dark/70 max-w-2xl mx-auto">
          {currentCategory.description}
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {posts.map((post: any) => (
          <PostCard key={post.slug.current} post={post} />
        ))}
      </div>
    </div>
  );
} 