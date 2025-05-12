import { Metadata } from 'next';
import { PrivacyContent } from '@/components/PrivacyContent';

export const metadata: Metadata = {
  title: 'Privacy Policy - PsycheRealm',
  description: 'Learn how PsycheRealm collects, uses, and protects your personal information.',
};

export default function PrivacyPage() {
  return <PrivacyContent />;
} 