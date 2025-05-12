'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail } from 'lucide-react';

export function Newsletter() {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');
    
    // TODO: Implement newsletter subscription logic
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
    <section className="py-16 bg-gradient-to-b from-background-light to-surface-light dark:from-background-dark dark:to-surface-dark">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center space-y-6"
        >
          <div className="inline-block p-3 rounded-full bg-primary-light/10 dark:bg-accent-light/10">
            <Mail className="w-6 h-6 text-primary-light dark:text-accent-light" />
          </div>
          <h2 className="text-3xl font-bold text-text-light dark:text-text-dark">
            Stay Updated with PsycheRealm
          </h2>
          <p className="text-lg text-text-light/70 dark:text-text-dark/70 max-w-2xl mx-auto">
            Join our community of thinkers and receive weekly insights on mental wellness, personal growth, and creative expression.
          </p>
        </motion.div>

        <motion.form
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          onSubmit={handleSubmit}
          className="mt-8 max-w-md mx-auto"
        >
          <div className="flex flex-col sm:flex-row gap-4">
            <div className="flex-grow">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                required
                className="w-full px-4 py-3 rounded-lg bg-background-light dark:bg-background-dark text-text-light dark:text-text-dark border border-surface-light dark:border-surface-dark focus:outline-none focus:ring-2 focus:ring-primary-light dark:focus:ring-accent-light"
              />
            </div>
            <button
              type="submit"
              disabled={status === 'loading'}
              className="px-6 py-3 rounded-lg bg-primary-light dark:bg-accent-light text-white font-medium hover:opacity-90 transition-opacity disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {status === 'loading' ? 'Subscribing...' : 'Subscribe'}
            </button>
          </div>
          
          {status === 'success' && (
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="mt-4 text-sm text-green-600 dark:text-green-400"
            >
              Thanks for subscribing! Please check your email to confirm.
            </motion.p>
          )}
          
          {status === 'error' && (
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="mt-4 text-sm text-red-600 dark:text-red-400"
            >
              Something went wrong. Please try again later.
            </motion.p>
          )}
        </motion.form>
      </div>
    </section>
  );
} 