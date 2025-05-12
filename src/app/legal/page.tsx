import { Metadata } from 'next';
import { LegalContent } from '@/components/LegalContent';

export const metadata: Metadata = {
  title: 'Legal Information - PsycheRealm',
  description: 'Access PsycheRealm\'s legal documents including terms of service, privacy policy, and disclosure information.',
};

export default function LegalPage() {
  return <LegalContent />;
} 