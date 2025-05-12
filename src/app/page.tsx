import { HeroSection } from '@/components/sections/HeroSection';
import { CategorySection } from '@/components/sections/CategorySection';
import { FeaturedPostsSection } from '@/components/sections/FeaturedPostsSection';
import { NewsletterSection } from '@/components/sections/NewsletterSection';

export default function Home() {
  return (
    <main className="min-h-screen">
      <HeroSection />
      <CategorySection />
      <FeaturedPostsSection />
      <NewsletterSection />
    </main>
  );
}
