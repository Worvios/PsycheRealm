'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';

export function NewsletterSection() {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');
    
    // TODO: Implement newsletter subscription
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      setStatus('success');
      setEmail('');
    } catch (error) {
      setStatus('error');
    }
  };

  return (
    <section className="py-16 px-4 bg-accent-light dark:bg-accent-dark">
      <div className="max-w-3xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl font-serif font-bold mb-4 text-background-light dark:text-background-dark">
            Stay Connected
          </h2>
          <p className="mb-8 text-background-light/90 dark:text-background-dark/90">
            Subscribe to our newsletter for weekly insights and updates.
          </p>
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <div className="flex-grow relative">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                className="w-full px-4 py-2 rounded-lg text-text-light dark:text-text-dark bg-background-light dark:bg-background-dark focus:outline-none focus:ring-2 focus:ring-background-light dark:focus:ring-background-dark transition-all duration-300"
                required
              />
              {status === 'error' && (
                <p className="absolute -bottom-6 left-0 text-sm text-red-200">
                  Please enter a valid email address
                </p>
              )}
            </div>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              type="submit"
              disabled={status === 'loading'}
              className="px-6 py-2 bg-background-light dark:bg-background-dark text-accent-light dark:text-accent-dark rounded-lg font-semibold hover:bg-background-light/90 dark:hover:bg-background-dark/90 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {status === 'loading' ? 'Subscribing...' : 'Subscribe'}
            </motion.button>
          </form>
          {status === 'success' && (
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="mt-4 text-background-light dark:text-background-dark"
            >
              Thank you for subscribing!
            </motion.p>
          )}
        </motion.div>
      </div>
    </section>
  );
} 