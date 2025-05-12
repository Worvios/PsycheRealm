'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useTheme } from 'next-themes';

export function Footer() {
  const { theme } = useTheme();

  return (
    <footer className="bg-background-light dark:bg-background-dark border-t border-border-light dark:border-border-dark">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="col-span-1 md:col-span-2">
            <Link href="/" className="flex items-center space-x-2 group mb-4">
              <Image
                src="/PsycheRealm-logo.png"
                alt="PsycheRealm Logo"
                width={40}
                height={40}
                className="w-10 h-10 transition-transform group-hover:scale-110"
              />
              <div>
                <span className="text-xl font-serif font-bold text-text-light dark:text-text-dark group-hover:text-accent-light dark:group-hover:text-accent-dark transition-colors">
                  PsycheRealm
                </span>
                <p className="text-xs text-text-muted-light dark:text-text-muted-dark">
                  Realm of the Mind
                </p>
              </div>
            </Link>
            <p className="text-text-muted-light dark:text-text-muted-dark text-sm">
              Exploring the depths of human consciousness, one thought at a time.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-sm font-serif font-semibold text-text-light dark:text-text-dark mb-4">
              Quick Links
            </h3>
            <ul className="space-y-2">
              {['About', 'Articles', 'Contact'].map((item) => (
                <li key={item}>
                  <Link
                    href={`/${item.toLowerCase()}`}
                    className="text-sm text-text-muted-light dark:text-text-muted-dark hover:text-accent-light dark:hover:text-accent-dark transition-colors duration-300"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Categories */}
          <div>
            <h3 className="text-sm font-serif font-semibold text-text-light dark:text-text-dark mb-4">
              Categories
            </h3>
            <ul className="space-y-2">
              {['Philosophy', 'Psychology', 'Science', 'Technology'].map((category) => (
                <li key={category}>
                  <Link
                    href={`/category/${category.toLowerCase()}`}
                    className="text-sm text-text-muted-light dark:text-text-muted-dark hover:text-accent-light dark:hover:text-accent-dark transition-colors duration-300"
                  >
                    {category}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-12 pt-8 border-t border-border-light dark:border-border-dark">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-sm text-text-muted-light dark:text-text-muted-dark">
              © {new Date().getFullYear()} PsycheRealm. All rights reserved.
            </p>
            <div className="flex space-x-6">
              <Link
                href="/privacy"
                className="text-sm text-text-muted-light dark:text-text-muted-dark hover:text-accent-light dark:hover:text-accent-dark transition-colors duration-300"
              >
                Privacy Policy
              </Link>
              <Link
                href="/terms"
                className="text-sm text-text-muted-light dark:text-text-muted-dark hover:text-accent-light dark:hover:text-accent-dark transition-colors duration-300"
              >
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
} 