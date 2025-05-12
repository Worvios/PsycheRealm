import { Metadata } from 'next';
import { TermsContent } from '@/components/TermsContent';

export const metadata: Metadata = {
  title: 'Terms of Service - PsycheRealm',
  description: 'Read our terms of service to understand the rules and guidelines for using PsycheRealm.',
};

export default function TermsPage() {
  return <TermsContent />;
} 