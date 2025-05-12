import { Metadata } from 'next';
import { ContactContent } from '@/components/ContactContent';

export const metadata: Metadata = {
  title: 'Contact Us - PsycheRealm',
  description: 'Get in touch with the PsycheRealm team. We\'re here to help with your questions, feedback, and collaboration opportunities.',
};

export default function ContactPage() {
  return <ContactContent />;
} 