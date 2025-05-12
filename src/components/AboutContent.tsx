'use client';

import { motion } from 'framer-motion';
import { Breadcrumb } from './Breadcrumb';
import { BackToTop } from './BackToTop';
import { SocialShare } from './SocialShare';
import { ReadingTime } from './ReadingTime';

const content = `
About PsycheRealm

Our Mission
PsycheRealm is dedicated to promoting mental wellness and personal growth through thoughtful content and community engagement. We believe in the power of knowledge sharing and creative expression to transform lives.

Our Values
1. Mental Wellness: We prioritize mental health awareness and provide resources for emotional well-being.
2. Personal Growth: We encourage continuous learning and self-improvement.
3. Creative Expression: We celebrate diverse forms of creative expression and storytelling.

Our Team
We are a diverse group of writers, thinkers, and creators passionate about mental wellness and personal development. Our team brings together expertise from various fields to provide comprehensive and engaging content.

Join Our Community
We invite you to join our growing community of thinkers and creators. Together, we can explore new ideas, share experiences, and support each other's growth journey.
`;

export function AboutContent() {
  return (
    <div className="min-h-screen py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <Breadcrumb
          items={[
            { label: 'About' },
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
              About PsycheRealm
            </h1>
            <ReadingTime content={content} />
          </div>

          <SocialShare
            url={typeof window !== 'undefined' ? window.location.href : ''}
            title="About PsycheRealm"
          />

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="prose prose-lg dark:prose-invert max-w-none"
          >
            <p className="text-text-light/70 dark:text-text-dark/70">
              Our Mission
            </p>
            <p className="text-text-light/70 dark:text-text-dark/70">
              PsycheRealm is dedicated to promoting mental wellness and personal growth through thoughtful content and community engagement. We believe in the power of knowledge sharing and creative expression to transform lives.
            </p>

            <h2 className="text-2xl font-semibold text-text-light dark:text-text-dark mt-8">
              Our Values
            </h2>
            <ul className="list-disc pl-6 space-y-2 text-text-light/70 dark:text-text-dark/70">
              <li>Mental Wellness: We prioritize mental health awareness and provide resources for emotional well-being.</li>
              <li>Personal Growth: We encourage continuous learning and self-improvement.</li>
              <li>Creative Expression: We celebrate diverse forms of creative expression and storytelling.</li>
            </ul>

            <h2 className="text-2xl font-semibold text-text-light dark:text-text-dark mt-8">
              Our Team
            </h2>
            <p className="text-text-light/70 dark:text-text-dark/70">
              We are a diverse group of writers, thinkers, and creators passionate about mental wellness and personal development. Our team brings together expertise from various fields to provide comprehensive and engaging content.
            </p>

            <h2 className="text-2xl font-semibold text-text-light dark:text-text-dark mt-8">
              Join Our Community
            </h2>
            <p className="text-text-light/70 dark:text-text-dark/70">
              We invite you to join our growing community of thinkers and creators. Together, we can explore new ideas, share experiences, and support each other's growth journey.
            </p>
          </motion.div>
        </motion.div>
      </div>
      <BackToTop />
    </div>
  );
} 