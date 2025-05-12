import { Metadata } from 'next';
import { FAQsContent } from '@/components/FAQsContent';

export const metadata: Metadata = {
  title: 'Frequently Asked Questions - PsycheRealm',
  description: 'Find answers to common questions about PsycheRealm, our content, and services.',
};

export default function FAQsPage() {
  return <FAQsContent />;
} 