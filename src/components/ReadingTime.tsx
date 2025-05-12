'use client';

interface ReadingTimeProps {
  content: string;
}

export function ReadingTime({ content }: ReadingTimeProps) {
  const wordsPerMinute = 200;
  const wordCount = content.trim().split(/\s+/).length;
  const readingTime = Math.ceil(wordCount / wordsPerMinute);

  return (
    <div className="flex items-center text-sm text-text-light/70 dark:text-text-dark/70">
      <span>{readingTime} min read</span>
    </div>
  );
} 