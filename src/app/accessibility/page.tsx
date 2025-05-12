import { Metadata } from 'next';
import { AccessibilityContent } from '@/components/AccessibilityContent';

export const metadata: Metadata = {
  title: 'Accessibility - PsycheRealm',
  description: 'Learn about PsycheRealm\'s commitment to accessibility and how we ensure our platform is usable by everyone.',
};

export default function AccessibilityPage() {
  return <AccessibilityContent />;
} 