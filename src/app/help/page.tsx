import { Metadata } from 'next';
import { HelpContent } from '@/components/HelpContent';

export const metadata: Metadata = {
  title: 'Help Center - PsycheRealm',
  description: 'Get help and support for using PsycheRealm. Find answers to common questions, contact information, and accessibility resources.',
};

export default function HelpPage() {
  return <HelpContent />;
} 