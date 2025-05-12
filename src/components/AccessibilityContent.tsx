'use client';

import { motion } from 'framer-motion';
import { Breadcrumb } from './Breadcrumb';
import { BackToTop } from './BackToTop';
import { SocialShare } from './SocialShare';
import { ReadingTime } from './ReadingTime';

const content = `
At PsycheRealm, we are committed to ensuring that our platform is accessible to everyone, regardless of their abilities or disabilities. We strive to meet and exceed the Web Content Accessibility Guidelines (WCAG) 2.1 Level AA standards.

Our Commitment
We believe that accessibility is not just a legal requirement but a moral obligation. Our commitment to accessibility includes:

1. Regular audits and testing of our platform
2. Continuous improvement of accessibility features
3. Training our team on accessibility best practices
4. Engaging with users to gather feedback
5. Maintaining compliance with international accessibility standards

Accessibility Features
Our platform includes several features to enhance accessibility:

- Keyboard Navigation: All interactive elements can be accessed using a keyboard
- Screen Reader Compatibility: Content is structured for optimal screen reader experience
- High Contrast Mode: Enhanced visibility for users with visual impairments
- Text Resizing: Content remains readable when text is enlarged
- Alternative Text: Images include descriptive alt text
- ARIA Labels: Proper labeling for interactive elements
- Focus Indicators: Clear visual indicators for keyboard focus
- Color Contrast: Sufficient contrast ratios for text and background colors

Assistive Technologies
We support various assistive technologies:

- Screen readers (JAWS, NVDA, VoiceOver)
- Screen magnifiers
- Speech recognition software
- Keyboard-only navigation
- Switch devices

Feedback and Support
We welcome feedback on accessibility:

- Email: accessibility@PsycheRealm.com
- Phone: +1 (555) 123-4567
- Contact Form: Available on our Contact page

Continuous Improvement
We regularly:

- Conduct accessibility audits
- Update our platform based on user feedback
- Train our team on accessibility best practices
- Test with assistive technologies
- Monitor compliance with accessibility standards

Your Rights
Under various accessibility laws, you have the right to:

- Access our content through assistive technologies
- Request alternative formats of our content
- File complaints about accessibility barriers
- Receive timely responses to accessibility concerns

Contact Us
If you encounter any accessibility barriers or have suggestions for improvement, please contact us. We are committed to addressing your concerns promptly and making our platform more accessible for everyone.
`;

export function AccessibilityContent() {
  return (
    <div className="min-h-screen py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <Breadcrumb
          items={[
            { label: 'Help', href: '/help' },
            { label: 'Accessibility' },
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
              Accessibility
            </h1>
            <ReadingTime content={content} />
          </div>

          <SocialShare
            url={typeof window !== 'undefined' ? window.location.href : ''}
            title="Accessibility - PsycheRealm"
          />

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="prose prose-lg dark:prose-invert max-w-none"
          >
            <p className="text-text-light/70 dark:text-text-dark/70">
              At PsycheRealm, we are committed to ensuring that our platform is accessible to everyone,
              regardless of their abilities or disabilities. We strive to meet and exceed the Web
              Content Accessibility Guidelines (WCAG) 2.1 Level AA standards.
            </p>

            <h2 className="text-2xl font-semibold text-text-light dark:text-text-dark mt-8">
              Our Commitment
            </h2>
            <p className="text-text-light/70 dark:text-text-dark/70">
              We believe that accessibility is not just a legal requirement but a moral obligation.
              Our commitment to accessibility includes:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-text-light/70 dark:text-text-dark/70">
              <li>Regular audits and testing of our platform</li>
              <li>Continuous improvement of accessibility features</li>
              <li>Training our team on accessibility best practices</li>
              <li>Engaging with users to gather feedback</li>
              <li>Maintaining compliance with international accessibility standards</li>
            </ul>

            <h2 className="text-2xl font-semibold text-text-light dark:text-text-dark mt-8">
              Accessibility Features
            </h2>
            <p className="text-text-light/70 dark:text-text-dark/70">
              Our platform includes several features to enhance accessibility:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-text-light/70 dark:text-text-dark/70">
              <li>Keyboard Navigation: All interactive elements can be accessed using a keyboard</li>
              <li>Screen Reader Compatibility: Content is structured for optimal screen reader experience</li>
              <li>High Contrast Mode: Enhanced visibility for users with visual impairments</li>
              <li>Text Resizing: Content remains readable when text is enlarged</li>
              <li>Alternative Text: Images include descriptive alt text</li>
              <li>ARIA Labels: Proper labeling for interactive elements</li>
              <li>Focus Indicators: Clear visual indicators for keyboard focus</li>
              <li>Color Contrast: Sufficient contrast ratios for text and background colors</li>
            </ul>

            <h2 className="text-2xl font-semibold text-text-light dark:text-text-dark mt-8">
              Assistive Technologies
            </h2>
            <p className="text-text-light/70 dark:text-text-dark/70">
              We support various assistive technologies:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-text-light/70 dark:text-text-dark/70">
              <li>Screen readers (JAWS, NVDA, VoiceOver)</li>
              <li>Screen magnifiers</li>
              <li>Speech recognition software</li>
              <li>Keyboard-only navigation</li>
              <li>Switch devices</li>
            </ul>

            <h2 className="text-2xl font-semibold text-text-light dark:text-text-dark mt-8">
              Feedback and Support
            </h2>
            <p className="text-text-light/70 dark:text-text-dark/70">
              We welcome feedback on accessibility:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-text-light/70 dark:text-text-dark/70">
              <li>Email: accessibility@PsycheRealm.com</li>
              <li>Phone: +1 (555) 123-4567</li>
              <li>Contact Form: Available on our Contact page</li>
            </ul>

            <h2 className="text-2xl font-semibold text-text-light dark:text-text-dark mt-8">
              Continuous Improvement
            </h2>
            <p className="text-text-light/70 dark:text-text-dark/70">
              We regularly:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-text-light/70 dark:text-text-dark/70">
              <li>Conduct accessibility audits</li>
              <li>Update our platform based on user feedback</li>
              <li>Train our team on accessibility best practices</li>
              <li>Test with assistive technologies</li>
              <li>Monitor compliance with accessibility standards</li>
            </ul>

            <h2 className="text-2xl font-semibold text-text-light dark:text-text-dark mt-8">
              Your Rights
            </h2>
            <p className="text-text-light/70 dark:text-text-dark/70">
              Under various accessibility laws, you have the right to:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-text-light/70 dark:text-text-dark/70">
              <li>Access our content through assistive technologies</li>
              <li>Request alternative formats of our content</li>
              <li>File complaints about accessibility barriers</li>
              <li>Receive timely responses to accessibility concerns</li>
            </ul>

            <h2 className="text-2xl font-semibold text-text-light dark:text-text-dark mt-8">
              Contact Us
            </h2>
            <p className="text-text-light/70 dark:text-text-dark/70">
              If you encounter any accessibility barriers or have suggestions for improvement,
              please contact us. We are committed to addressing your concerns promptly and
              making our platform more accessible for everyone.
            </p>
          </motion.div>
        </motion.div>
      </div>
      <BackToTop />
    </div>
  );
} 