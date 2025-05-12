import { Metadata } from 'next';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import { PortableText } from '@portabletext/react';
import { client } from '@/lib/sanity';
import { urlFor } from '@/lib/sanity';
import { formatDate } from '@/lib/sanity';

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
    image: {
      asset: {
        url: string;
      };
    };
  };
  category: {
    name: string;
    slug: {
      current: string;
    };
  };
  body: any[];
}

interface Props {
  params: {
    slug: string;
  };
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const post = await getPost(params.slug);
  
  if (!post) {
    return {
      title: 'Post Not Found',
    };
  }

  return {
    title: `${post.title} | PsycheRealm`,
    description: post.excerpt,
  };
}

async function getPost(slug: string): Promise<Post | null> {
  const query = `*[_type == "post" && slug.current == $slug][0] {
    _id,
    title,
    slug,
    mainImage {
      asset-> {
        url
      }
    },
    excerpt,
    publishedAt,
    author-> {
      name,
      image {
        asset-> {
          url
        }
      }
    },
    category-> {
      name,
      slug
    },
    body
  }`;

  const post = await client.fetch(query, { slug });
  return post || null;
}

const components = {
  types: {
    image: ({ value }: any) => {
      return (
        <div className="relative h-[400px] w-full my-8">
          <Image
            src={value.asset.url}
            alt={value.alt || 'Blog post image'}
            fill
            className="object-cover rounded-lg"
          />
        </div>
      );
    },
  },
};

export default async function PostPage({ params }: Props) {
  const post = await getPost(params.slug);

  if (!post) {
    notFound();
  }

  return (
    <article className="max-w-4xl mx-auto px-4 py-8">
      <header className="mb-8">
        <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
          {post.title}
        </h1>
        <div className="flex items-center gap-4 text-sm text-gray-600 dark:text-gray-400 mb-6">
          <div className="flex items-center gap-2">
            <Image
              src={post.author.image.asset.url}
              alt={post.author.name}
              width={32}
              height={32}
              className="rounded-full"
            />
            <span>{post.author.name}</span>
          </div>
          <span>•</span>
          <time dateTime={post.publishedAt}>{formatDate(post.publishedAt)}</time>
          <span>•</span>
          <span>{post.category.name}</span>
        </div>
        <div className="relative h-[400px] w-full mb-8">
          <Image
            src={post.mainImage.asset.url}
            alt={post.title}
            fill
            className="object-cover rounded-lg"
            priority
          />
        </div>
      </header>
      <div className="prose dark:prose-invert max-w-none">
        <p className="text-lg text-gray-700 dark:text-gray-300 mb-8">
          {post.excerpt}
        </p>
        <PortableText value={post.body} components={components} />
      </div>
    </article>
  );
} 