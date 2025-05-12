'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import { Breadcrumb } from './Breadcrumb';
import { BackToTop } from './BackToTop';
import { SocialShare } from './SocialShare';
import { ReadingTime } from './ReadingTime';

interface FAQ {
  question: string;
  answer: string;
}

const faqs: FAQ[] = [
  {
    question: 'What is PsycheRealm?',
    answer: 'PsycheRealm is a platform dedicated to exploring mental wellness, personal growth, and creative expression. We provide thought-provoking content across various domains including mental health, fitness, nutrition, philosophy, personal development, technology, and creative arts.',
  },
  {
    question: 'How can I contribute to PsycheRealm?',
    answer: 'We welcome contributions from writers, thinkers, and creators. You can submit your articles, share your experiences, or participate in our community discussions. Visit our Contact page to learn more about contributing.',
  },
  {
    question: 'Is the content on PsycheRealm free to access?',
    answer: 'Yes, all our content is freely accessible. We believe in making valuable information available to everyone. However, we do offer a newsletter subscription for regular updates and exclusive content.',
  },
  {
    question: 'How often is new content published?',
    answer: 'We publish new content regularly, typically several times per week. You can subscribe to our newsletter to stay updated with our latest articles and features.',
  },
  {
    question: 'Can I share PsycheRealm content on social media?',
    answer: 'Yes, you can share our content on social media platforms. We encourage sharing and discussion. Please ensure proper attribution and link back to the original content.',
  },
  {
    question: 'How can I contact the PsycheRealm team?',
    answer: 'You can reach us through our Contact page, email us at contact@PsycheRealm.com, or connect with us on our social media platforms.',
  },
  {
    question: 'Do you offer professional advice?',
    answer: 'While we provide valuable information and insights, our content is not a substitute for professional advice. We recommend consulting qualified professionals for specific medical, legal, or financial advice.',
  },
  {
    question: 'How can I stay updated with PsycheRealm?',
    answer: 'You can stay updated by subscribing to our newsletter, following us on social media, or regularly visiting our website. Our newsletter subscribers receive exclusive content and updates.',
  },
];

export function FAQsContent() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const content = faqs.map(faq => `${faq.question}\n${faq.answer}`).join('\n\n');

  return (
    <div className="min-h-screen py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <Breadcrumb
          items={[
            { label: 'Help', href: '/help' },
            { label: 'FAQs' },
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
              Frequently Asked Questions
            </h1>
            <ReadingTime content={content} />
          </div>

          <SocialShare
            url={typeof window !== 'undefined' ? window.location.href : ''}
            title="Frequently Asked Questions - PsycheRealm"
          />

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="border border-surface-light dark:border-surface-dark rounded-lg overflow-hidden"
              >
                <button
                  onClick={() => setOpenIndex(openIndex === index ? null : index)}
                  className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-background-light dark:hover:bg-background-dark transition-colors"
                >
                  <span className="font-medium text-text-light dark:text-text-dark">
                    {faq.question}
                  </span>
                  <ChevronDown
                    className={`w-5 h-5 text-text-light/70 dark:text-text-dark/70 transition-transform ${
                      openIndex === index ? 'transform rotate-180' : ''
                    }`}
                  />
                </button>
                <AnimatePresence>
                  {openIndex === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="px-6 py-4 bg-background-light dark:bg-background-dark"
                    >
                      <p className="text-text-light/70 dark:text-text-dark/70">
                        {faq.answer}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
      <BackToTop />
    </div>
  );
} 