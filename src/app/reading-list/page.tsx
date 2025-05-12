import { Metadata } from 'next';
import { ReadingListContent } from '@/components/ReadingListContent';

export const metadata: Metadata = {
  title: 'Reading List',
  description: 'Your saved articles for later reading on PsycheRealm.',
};

export default function ReadingListPage() {
  return <ReadingListContent />;
} 