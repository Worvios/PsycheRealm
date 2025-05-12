import { Metadata } from 'next';
import Image from 'next/image';
import { AboutContent } from '@/components/AboutContent';

export const metadata: Metadata = {
  title: 'About PsycheRealm',
  description: 'Learn about PsycheRealm\'s mission, values, and the team behind our platform for mental wellness and personal growth.',
};

export default function AboutPage() {
  return <AboutContent />;
} 