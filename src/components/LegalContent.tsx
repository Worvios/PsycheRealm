'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { FileText, Shield, AlertCircle } from 'lucide-react';
import { Breadcrumb } from './Breadcrumb';
import { BackToTop } from './BackToTop';
import { SocialShare } from './SocialShare';

const legalDocuments = [
  {
    title: 'Terms of Service',
    description: 'Read our terms of service and user agreement.',
    icon: FileText,
    href: '/terms',
  },
  {
    title: 'Privacy Policy',
    description: 'Learn how we collect, use, and protect your data.',
    icon: Shield,
    href: '/privacy',
  },
  {
    title: 'Disclosure',
    description: 'View our disclosure policies and guidelines.',
    icon: AlertCircle,
    href: '/disclosure',
  },
];

export function LegalContent() {
  return (
    <div className="min-h-screen py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <Breadcrumb
          items={[
            { label: 'Legal' },
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
              Legal Information
            </h1>
          </div>

          <SocialShare
            url={typeof window !== 'undefined' ? window.location.href : ''}
            title="Legal Information - PsycheRealm"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {legalDocuments.map((document, index) => (
              <motion.div
                key={document.href}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Link
                  href={document.href}
                  className="block p-6 rounded-lg border border-surface-light dark:border-surface-dark hover:border-primary transition-colors"
                >
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0">
                      <document.icon className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h2 className="text-xl font-semibold text-text-light dark:text-text-dark">
                        {document.title}
                      </h2>
                      <p className="mt-2 text-text-light/70 dark:text-text-dark/70">
                        {document.description}
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