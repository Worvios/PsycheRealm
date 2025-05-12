import { CategoryList } from '@/components/CategoryList';
import { getAllCategories } from '@/lib/sanity';

export const revalidate = 60; // Revalidate this page every 60 seconds

export default async function CategoriesPage() {
  const categories = await getAllCategories();

  return (
    <main className="min-h-screen bg-background-light dark:bg-background-dark">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h1 className="text-4xl font-bold text-text-light dark:text-text-dark mb-8">
          Categories
        </h1>
        <CategoryList 
          categories={categories}
          title="Explore Topics"
          description="Discover articles across various categories"
        />
      </div>
    </main>
  );
} 