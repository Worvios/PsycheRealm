'use client';

import { motion } from 'framer-motion';
import { Breadcrumb } from './Breadcrumb';
import { BackToTop } from './BackToTop';
import { SocialShare } from './SocialShare';
import { ReadingTime } from './ReadingTime';

export function TermsContent() {
  const content = `
    Terms of Service

    Last updated: ${new Date().toLocaleDateString()}

    1. Acceptance of Terms
    By accessing and using PsycheRealm, you agree to be bound by these Terms of Service and all applicable laws and regulations.

    2. Use License
    Permission is granted to temporarily access the materials on PsycheRealm for personal, non-commercial transitory viewing only.

    3. User Content
    Users may post content as long as it is not illegal, obscene, threatening, defamatory, invasive of privacy, or infringing of intellectual property rights.

    4. Disclaimer
    The materials on PsycheRealm are provided on an 'as is' basis. PsycheRealm makes no warranties, expressed or implied, and hereby disclaims and negates all other warranties.

    5. Limitations
    In no event shall PsycheRealm or its suppliers be liable for any damages arising out of the use or inability to use the materials on PsycheRealm.

    6. Accuracy of Materials
    The materials appearing on PsycheRealm could include technical, typographical, or photographic errors. PsycheRealm does not warrant that any of the materials are accurate, complete, or current.

    7. Links
    PsycheRealm has not reviewed all of the sites linked to its website and is not responsible for the contents of any such linked site.

    8. Modifications
    PsycheRealm may revise these terms of service at any time without notice. By using this website, you agree to be bound by the current version of these terms of service.

    9. Governing Law
    These terms and conditions are governed by and construed in accordance with the laws and you irrevocably submit to the exclusive jurisdiction of the courts in that location.
  `;

  return (
    <div className="min-h-screen py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <Breadcrumb
          items={[
            { label: 'Legal', href: '/legal' },
            { label: 'Terms of Service' },
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
              Terms of Service
            </h1>
            <ReadingTime content={content} />
          </div>

          <SocialShare
            url={typeof window !== 'undefined' ? window.location.href : ''}
            title="Terms of Service - PsycheRealm"
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