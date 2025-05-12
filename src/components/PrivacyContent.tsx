'use client';

import { motion } from 'framer-motion';
import { Breadcrumb } from './Breadcrumb';
import { BackToTop } from './BackToTop';
import { SocialShare } from './SocialShare';
import { ReadingTime } from './ReadingTime';

const content = `
Privacy Policy

Last updated: ${new Date().toLocaleDateString()}

Introduction
At PsycheRealm, we take your privacy seriously. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website.

Information We Collect
We collect information that you provide directly to us, including:
- Name and contact information
- Account credentials
- Profile information
- Communication preferences
- Content you submit

How We Use Your Information
We use the information we collect to:
- Provide and maintain our services
- Improve user experience
- Send updates and communications
- Respond to inquiries
- Analyze usage patterns

Cookies and Tracking
We use cookies and similar tracking technologies to:
- Remember your preferences
- Analyze site traffic
- Improve our services
- Provide personalized content

Data Security
We implement appropriate security measures to protect your information, including:
- Encryption
- Secure servers
- Regular security assessments
- Access controls

Your Rights
You have the right to:
- Access your personal information
- Correct inaccurate data
- Request data deletion
- Opt-out of communications
- Export your data

Contact Us
If you have questions about this Privacy Policy, please contact us at:
privacy@PsycheRealm.com
`;

export function PrivacyContent() {
  return (
    <div className="min-h-screen py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <Breadcrumb
          items={[
            { label: 'Legal', href: '/legal' },
            { label: 'Privacy Policy' },
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
              Privacy Policy
            </h1>
            <ReadingTime content={content} />
          </div>

          <SocialShare
            url={typeof window !== 'undefined' ? window.location.href : ''}
            title="Privacy Policy - PsycheRealm"
          />

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="prose prose-lg dark:prose-invert max-w-none"
          >
            <p className="text-text-light/70 dark:text-text-dark/70">
              Last updated: {new Date().toLocaleDateString()}
            </p>

            <h2 className="text-2xl font-semibold text-text-light dark:text-text-dark mt-8">
              Introduction
            </h2>
            <p className="text-text-light/70 dark:text-text-dark/70">
              At PsycheRealm, we take your privacy seriously. This Privacy Policy explains how we collect,
              use, disclose, and safeguard your information when you visit our website.
            </p>

            <h2 className="text-2xl font-semibold text-text-light dark:text-text-dark mt-8">
              Information We Collect
            </h2>
            <p className="text-text-light/70 dark:text-text-dark/70">
              We collect information that you provide directly to us, including:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-text-light/70 dark:text-text-dark/70">
              <li>Name and contact information</li>
              <li>Account credentials</li>
              <li>Profile information</li>
              <li>Communication preferences</li>
              <li>Content you submit</li>
            </ul>

            <h2 className="text-2xl font-semibold text-text-light dark:text-text-dark mt-8">
              How We Use Your Information
            </h2>
            <p className="text-text-light/70 dark:text-text-dark/70">
              We use the information we collect to:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-text-light/70 dark:text-text-dark/70">
              <li>Provide and maintain our services</li>
              <li>Improve user experience</li>
              <li>Send updates and communications</li>
              <li>Respond to inquiries</li>
              <li>Analyze usage patterns</li>
            </ul>

            <h2 className="text-2xl font-semibold text-text-light dark:text-text-dark mt-8">
              Cookies and Tracking
            </h2>
            <p className="text-text-light/70 dark:text-text-dark/70">
              We use cookies and similar tracking technologies to:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-text-light/70 dark:text-text-dark/70">
              <li>Remember your preferences</li>
              <li>Analyze site traffic</li>
              <li>Improve our services</li>
              <li>Provide personalized content</li>
            </ul>

            <h2 className="text-2xl font-semibold text-text-light dark:text-text-dark mt-8">
              Data Security
            </h2>
            <p className="text-text-light/70 dark:text-text-dark/70">
              We implement appropriate security measures to protect your information, including:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-text-light/70 dark:text-text-dark/70">
              <li>Encryption</li>
              <li>Secure servers</li>
              <li>Regular security assessments</li>
              <li>Access controls</li>
            </ul>

            <h2 className="text-2xl font-semibold text-text-light dark:text-text-dark mt-8">
              Your Rights
            </h2>
            <p className="text-text-light/70 dark:text-text-dark/70">
              You have the right to:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-text-light/70 dark:text-text-dark/70">
              <li>Access your personal information</li>
              <li>Correct inaccurate data</li>
              <li>Request data deletion</li>
              <li>Opt-out of communications</li>
              <li>Export your data</li>
            </ul>

            <h2 className="text-2xl font-semibold text-text-light dark:text-text-dark mt-8">
              Contact Us
            </h2>
            <p className="text-text-light/70 dark:text-text-dark/70">
              If you have questions about this Privacy Policy, please contact us at:
              <br />
              privacy@PsycheRealm.com
            </p>
          </motion.div>
        </motion.div>
      </div>
      <BackToTop />
    </div>
  );
} 