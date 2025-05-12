'use client';

import Link from 'next/link';
import Image from 'next/image';
import { urlFor } from '@/lib/sanity';

interface PostCardProps {
  post: {
    title: string;
    slug: {
      current: string;
    };
    excerpt: string;
    mainImage: any;
    publishedAt: string;
    categories: Array<{
      title: string;
      slug: {
        current: string;
      };
    }>;
  };
}

export default function PostCard({ post }: PostCardProps) {
  return (
    <article className="group bg-background-light dark:bg-background-dark rounded-lg overflow-hidden shadow-lg transition-all duration-300 hover:shadow-xl hover:scale-[1.02] border border-border-light dark:border-border-dark">
      <div className="relative h-48 overflow-hidden">
        {post.mainImage && (
          <Image
            src={urlFor(post.mainImage).url()}
            alt={post.title}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-110"
          />
        )}
      </div>
      <div className="p-6">
        <div className="flex items-center text-sm text-text-muted-light dark:text-text-muted-dark mb-2">
          <span>{new Date(post.publishedAt).toLocaleDateString()}</span>
        </div>
        <Link href={`/post/${post.slug.current}`}>
          <h2 className="text-xl font-serif font-semibold mb-2 text-text-light dark:text-text-dark group-hover:text-accent-light dark:group-hover:text-accent-dark transition-colors duration-300">
            {post.title}
          </h2>
        </Link>
        <p className="text-text-muted-light dark:text-text-muted-dark mb-4 font-sans">
          {post.excerpt}
        </p>
        <div className="flex flex-wrap gap-2">
          {post.categories.map((category) => (
            <Link
              key={category.slug.current}
              href={`/category/${category.slug.current}`}
              className="text-sm text-accent-light dark:text-accent-dark hover:underline transition-colors duration-300"
            >
              {category.title}
            </Link>
          ))}
        </div>
      </div>
    </article>
  );
} 