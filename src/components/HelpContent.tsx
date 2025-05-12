'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { HelpCircle, MessageCircle, Accessibility, FileText } from 'lucide-react';
import { Breadcrumb } from './Breadcrumb';
import { BackToTop } from './BackToTop';
import { SocialShare } from './SocialShare';

const helpResources = [
  {
    title: 'Frequently Asked Questions',
    description: 'Find answers to common questions about PsycheRealm.',
    icon: HelpCircle,
    href: '/faqs',
  },
  {
    title: 'Contact Us',
    description: 'Get in touch with our team for support.',
    icon: MessageCircle,
    href: '/contact',
  },
  {
    title: 'Accessibility',
    description: 'Learn about our accessibility features and commitments.',
    icon: Accessibility,
    href: '/accessibility',
  },
  {
    title: 'Legal Information',
    description: 'View our terms of service, privacy policy, and disclosures.',
    icon: FileText,
    href: '/legal',
  },
];

export function HelpContent() {
  return (
    <div className="min-h-screen py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <Breadcrumb
          items={[
            { label: 'Help' },
          ]}
        />

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="space-y-8"
        >
          <div className="flex items-center justify-between">
            <h1 className="text-4xl font-bold text-text-light dark:text-text-dark">
              Help Center
            </h1>
          </div>

          <SocialShare
            url={typeof window !== 'undefined' ? window.location.href : ''}
            title="Help Center - PsycheRealm"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {helpResources.map((resource, index) => (
              <motion.div
                key={resource.href}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Link
                  href={resource.href}
                  className="block p-6 rounded-lg border border-surface-light dark:border-surface-dark hover:border-primary transition-colors"
                >
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0">
                      <resource.icon className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h2 className="text-xl font-semibold text-text-light dark:text-text-dark">
                        {resource.title}
                      </h2>
                      <p className="mt-2 text-text-light/70 dark:text-text-dark/70">
                        {resource.description}
                      </p>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
      <BackToTop />
    </div>
  );
} 