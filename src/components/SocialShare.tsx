'use client';

import { Facebook, Twitter, Linkedin, Link as LinkIcon } from 'lucide-react';

interface SocialShareProps {
  url: string;
  title: string;
}

export function SocialShare({ url, title }: SocialShareProps) {
  const shareLinks = {
    facebook: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`,
    twitter: `https://twitter.com/intent/tweet?url=${encodeURIComponent(url)}&text=${encodeURIComponent(title)}`,
    linkedin: `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`,
  };

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(url);
      // You could add a toast notification here
    } catch (err) {
      console.error('Failed to copy:', err);
    }
  };

  return (
    <div className="flex items-center space-x-4">
      <span className="text-sm text-text-light/70 dark:text-text-dark/70">Share:</span>
      <div className="flex space-x-2">
        <a
          href={shareLinks.facebook}
          target="_blank"
          rel="noopener noreferrer"
          className="p-2 rounded-full bg-background-light dark:bg-background-dark text-text-light dark:text-text-dark hover:text-primary-light dark:hover:text-accent-light transition-colors"
          aria-label="Share on Facebook"
        >
          <Facebook className="w-5 h-5" />
        </a>
        <a
          href={shareLinks.twitter}
          target="_blank"
          rel="noopener noreferrer"
          className="p-2 rounded-full bg-background-light dark:bg-background-dark text-text-light dark:text-text-dark hover:text-primary-light dark:hover:text-accent-light transition-colors"
          aria-label="Share on Twitter"
        >
          <Twitter className="w-5 h-5" />
        </a>
        <a
          href={shareLinks.linkedin}
          target="_blank"
          rel="noopener noreferrer"
          className="p-2 rounded-full bg-background-light dark:bg-background-dark text-text-light dark:text-text-dark hover:text-primary-light dark:hover:text-accent-light transition-colors"
          aria-label="Share on LinkedIn"
        >
          <Linkedin className="w-5 h-5" />
        </a>
        <button
          onClick={copyToClipboard}
          className="p-2 rounded-full bg-background-light dark:bg-background-dark text-text-light dark:text-text-dark hover:text-primary-light dark:hover:text-accent-light transition-colors"
          aria-label="Copy link"
        >
          <LinkIcon className="w-5 h-5" />
        </button>
      </div>
    </div>
  );
} 