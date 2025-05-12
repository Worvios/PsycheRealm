'use client';

import { motion } from 'framer-motion';
import { Breadcrumb } from './Breadcrumb';
import { BackToTop } from './BackToTop';
import { SocialShare } from './SocialShare';
import { ReadingTime } from './ReadingTime';

export function DisclosureContent() {
  const content = `
    Disclosure Policy

    Last updated: ${new Date().toLocaleDateString()}

    Affiliate Relationships
    PsycheRealm may participate in various affiliate marketing programs, which means we may get paid commissions on purchases made through our links to retailer sites. This comes at no additional cost to you.

    Sponsored Content
    From time to time, we may publish sponsored content. All sponsored content will be clearly marked as such. We maintain full editorial control over all content published on our site.

    Product Reviews
    When we review products or services, we provide our honest opinions based on our experience. We may receive free products or services for review purposes, but this does not influence our opinions.

    Advertising
    We may display advertisements on our website. These ads may be served by third-party advertising companies who may use cookies and similar technologies to serve ads based on your interests.

    Testimonials
    Any testimonials or success stories featured on our website are real experiences from real users. However, results may vary and are not guaranteed.

    Medical Disclaimer
    The content on PsycheRealm is for informational purposes only and is not intended to be a substitute for professional medical advice, diagnosis, or treatment.

    Financial Disclaimer
    Any financial advice or information provided on our website is for educational purposes only and should not be considered as professional financial advice.

    Changes to This Policy
    We may update this disclosure policy from time to time. We will notify you of any changes by posting the new policy on this page.

    Contact Us
    If you have any questions about this disclosure policy, please contact us at:
    disclosure@PsycheRealm.com
  `;

  return (
    <div className="min-h-screen py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <Breadcrumb
          items={[
            { label: 'Legal', href: '/legal' },
            { label: 'Disclosure' },
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
              Disclosure Policy
            </h1>
            <ReadingTime content={content} />
          </div>

          <SocialShare
            url={typeof window !== 'undefined' ? window.location.href : ''}
            title="Disclosure Policy - PsycheRealm"
          />

          <div className="prose prose-lg dark:prose-invert max-w-none">
            {content.split('\n\n').map((section, index) => (
              <motion.section
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="space-y-4"
              >
                {section.split('\n').map((line, lineIndex) => (
                  <p key={lineIndex} className="text-text-light/70 dark:text-text-dark/70">
                    {line}
                  </p>
                ))}
              </motion.section>
            ))}
          </div>
        </motion.div>
      </div>
      <BackToTop />
    </div>
  );
} 