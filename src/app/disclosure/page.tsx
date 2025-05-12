import { Metadata } from 'next';
import { DisclosureContent } from '@/components/DisclosureContent';

export const metadata: Metadata = {
  title: 'Disclosure - PsycheRealm',
  description: 'Learn about our disclosure policies, affiliate relationships, and content guidelines.',
};

export default function DisclosurePage() {
  return <DisclosureContent />;
} 