import { Metadata } from 'next';
import { client } from '@/lib/sanity';
import ArticleList from '@/components/ArticleList';

export const metadata: Metadata = {
  title: 'Articles | PsycheRealm',
  description: 'Explore our collection of articles on mental health, fitness, nutrition, and more.',
};

async function getPosts() {
  const query = `*[_type == "post"] | order(publishedAt desc) {
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
      name
    },
    category-> {
      name
    }
  }`;

  return client.fetch(query);
}

export default async function ArticlesPage() {
  const posts = await getPosts();

  return (
    <main className="container mx-auto px-4 py-8">
      <ArticleList posts={posts} title="Latest Articles" />
    </main>
  );
} 