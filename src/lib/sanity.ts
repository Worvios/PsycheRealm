import { createClient } from 'next-sanity';
import imageUrlBuilder from '@sanity/image-url';

export const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || 'production',
  apiVersion: '2024-03-13',
  useCdn: process.env.NODE_ENV === 'production',
});

const builder = imageUrlBuilder(client);

export function urlFor(source: any) {
  return builder.image(source);
}

// Helper function to format dates
export function formatDate(date: string) {
  return new Date(date).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
}

// Helper function to calculate reading time
export function calculateReadingTime(content: string) {
  const wordsPerMinute = 200;
  const words = content.trim().split(/\s+/).length;
  const minutes = Math.ceil(words / wordsPerMinute);
  return `${minutes} min read`;
}

// Helper function to get all posts
export async function getAllPosts() {
  return await client.fetch(`
    *[_type == "post"] {
      _id,
      title,
      slug,
      excerpt,
      mainImage,
      publishedAt,
      "author": author->{
        name,
        image
      },
      "category": category->{
        name,
        slug
      },
      body
    }
  `);
}

// Helper function to get all categories
export async function getAllCategories() {
  return await client.fetch(`
    *[_type == "category"] {
      _id,
      name,
      slug,
      description,
      "articleCount": count(*[_type == "post" && references(^._id)])
    }
  `);
}

// Helper function to get posts by category
export async function getPostsByCategory(slug: string) {
  const query = `*[_type == "post" && references(*[_type=="category" && slug.current == $slug]._id)] {
    title,
    slug,
    excerpt,
    mainImage,
    publishedAt,
    categories[]-> {
      title,
      slug
    }
  }`;
  
  return client.fetch(query, { slug });
}

// Helper function to get a single post
export async function getPost(slug: string) {
  return await client.fetch(`
    *[_type == "post" && slug.current == $slug][0] {
      _id,
      title,
      slug,
      excerpt,
      mainImage,
      publishedAt,
      "author": author->{
        name,
        image
      },
      "category": category->{
        name,
        slug
      },
      body
    }
  `, { slug });
}

// Query functions
export async function getCategories() {
  const query = `*[_type == "category"] {
    title,
    slug,
    description,
    image
  }`;
  
  return client.fetch(query);
}

export async function getCategory(slug: string) {
  return client.fetch(`
    *[_type == "category" && slug.current == $slug][0] {
      _id,
      name,
      slug,
      description,
      image,
      "posts": *[_type == "post" && references(^._id)] {
        _id,
        title,
        slug,
        excerpt,
        mainImage,
        publishedAt,
        "author": author->name,
        "authorImage": author->image
      }
    }
  `, { slug });
} 