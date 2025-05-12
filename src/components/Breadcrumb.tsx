'use client';

import Link from 'next/link';
import { ChevronRight, Home } from 'lucide-react';

interface BreadcrumbProps {
  items: {
    label: string;
    href?: string;
  }[];
}

export function Breadcrumb({ items }: BreadcrumbProps) {
  return (
    <nav className="flex items-center space-x-2 text-sm text-text-light/70 dark:text-text-dark/70 mb-8">
      <Link
        href="/"
        className="flex items-center hover:text-primary-light dark:hover:text-accent-light transition-colors"
      >
        <Home className="w-4 h-4" />
      </Link>
      {items.map((item, index) => (
        <div key={item.label} className="flex items-center">
          <ChevronRight className="w-4 h-4 mx-2" />
          {item.href ? (
            <Link
              href={item.href}
              className="hover:text-primary-light dark:hover:text-accent-light transition-colors"
            >
              {item.label}
            </Link>
          ) : (
            <span className="text-text-light dark:text-text-dark">{item.label}</span>
          )}
        </div>
      ))}
    </nav>
  );
} 