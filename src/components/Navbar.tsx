'use client';

import { useState, useRef, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname, useRouter } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Sun, Moon, Bookmark, Search, ChevronDown } from 'lucide-react';
import { useTheme } from 'next-themes';
import { getCategories } from '@/lib/sanity';
import { urlFor } from '@/lib/sanity';

const navigation = [
  { name: 'Home', href: '/' },
  { name: 'About', href: '/about' },
  { name: 'Articles', href: '/articles' },
  { name: 'Contact', href: '/contact' },
];

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isCategoriesOpen, setIsCategoriesOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [categories, setCategories] = useState<any[]>([]);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();
  const router = useRouter();
  const { theme, setTheme } = useTheme();
  const categoriesRef = useRef<HTMLDivElement>(null);
  const searchRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const fetchCategories = async () => {
      const fetchedCategories = await getCategories();
      setCategories(fetchedCategories);
    };
    fetchCategories();
  }, []);

  // Handle scroll for navbar transparency
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Handle click outside for categories dropdown
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (categoriesRef.current && !categoriesRef.current.contains(event.target as Node)) {
        setIsCategoriesOpen(false);
      }
      if (searchRef.current && !searchRef.current.contains(event.target as Node)) {
        setIsSearchOpen(false);
      }
    }

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  // Handle keyboard navigation
  useEffect(() => {
    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === 'Escape') {
        setIsCategoriesOpen(false);
        setIsSearchOpen(false);
        setIsOpen(false);
      }
    }

    document.addEventListener('keydown', handleKeyDown);
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      router.push(`/search?q=${encodeURIComponent(searchQuery.trim())}`);
      setIsSearchOpen(false);
      setSearchQuery('');
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent, action: () => void) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      action();
    }
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled
          ? 'backdrop-blur-sm bg-background-light/70 dark:bg-background-dark/70 shadow-sm'
          : 'bg-background-light dark:bg-background-dark'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link href="/" className="flex items-center space-x-2 group">
              <motion.div
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                className="relative"
              >
                <Image
                  src="/PsycheRealm-logo.png"
                  alt="PsycheRealm Logo"
                  width={40}
                  height={40}
                  className="w-10 h-10 transition-transform group-hover:scale-110"
                />
                <motion.div
                  className="absolute inset-0 rounded-full"
                  animate={{
                    boxShadow: [
                      '0 0 0 0 rgba(75, 125, 118, 0)',
                      '0 0 0 4px rgba(75, 125, 118, 0.2)',
                      '0 0 0 0 rgba(75, 125, 118, 0)',
                    ],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    repeatType: 'loop',
                  }}
                />
              </motion.div>
              <div>
                <span className="text-xl font-serif font-bold text-text-light dark:text-text-dark group-hover:text-accent-light dark:group-hover:text-accent-dark transition-colors">
                  PsycheRealm
                </span>
                <p className="text-xs text-text-muted-light dark:text-text-muted-dark">
                  Realm of the Mind
                </p>
              </div>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden sm:flex sm:items-center sm:space-x-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={`
                  text-sm font-medium transition-all duration-300
                  ${pathname === item.href
                    ? 'text-accent-light dark:text-accent-dark'
                    : 'text-text-muted-light dark:text-text-muted-dark hover:text-accent-light dark:hover:text-accent-dark'
                  }
                  hover:scale-105
                `}
              >
                {item.name}
              </Link>
            ))}
            
            {/* Categories Dropdown */}
            <div className="relative" ref={categoriesRef}>
              <button
                onClick={() => setIsCategoriesOpen(!isCategoriesOpen)}
                onKeyDown={(e) => handleKeyPress(e, () => setIsCategoriesOpen(!isCategoriesOpen))}
                className="flex items-center space-x-1 text-sm font-medium text-text-muted-light dark:text-text-muted-dark hover:text-accent-light dark:hover:text-accent-dark transition-all duration-300 hover:scale-105"
                aria-expanded={isCategoriesOpen}
                aria-label="Categories menu"
              >
                <span>Categories</span>
                <motion.div
                  animate={{ rotate: isCategoriesOpen ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <ChevronDown className="w-4 h-4" />
                </motion.div>
              </button>

              <AnimatePresence>
                {isCategoriesOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="absolute left-0 mt-2 w-72 rounded-md shadow-lg bg-background-light dark:bg-background-dark ring-1 ring-border-light dark:ring-border-dark z-50"
                    role="menu"
                    aria-orientation="vertical"
                    aria-labelledby="categories-menu"
                  >
                    <div className="py-1">
                      {categories.map((category) => (
                        <Link
                          key={category.slug.current}
                          href={`/category/${category.slug.current}`}
                          className="flex items-center px-4 py-2 text-sm text-text-light dark:text-text-dark hover:bg-background-alt-light dark:hover:bg-background-alt-dark transition-colors duration-300"
                          onClick={() => setIsCategoriesOpen(false)}
                          role="menuitem"
                        >
                          {category.image && (
                            <motion.div
                              whileHover={{ scale: 1.1 }}
                              className="relative mr-3"
                            >
                              <Image
                                src={urlFor(category.image).url()}
                                alt={category.title}
                                width={24}
                                height={24}
                                className="w-6 h-6 rounded-full object-cover ring-1 ring-border-light dark:ring-border-dark"
                              />
                            </motion.div>
                          )}
                          <div>
                            <div className="font-medium">{category.title}</div>
                            <div className="text-xs text-text-muted-light dark:text-text-muted-dark">
                              {category.description}
                            </div>
                          </div>
                        </Link>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>

          {/* Right side icons */}
          <div className="flex items-center space-x-4">
            <button
              onClick={() => setIsSearchOpen(!isSearchOpen)}
              onKeyDown={(e) => handleKeyPress(e, () => setIsSearchOpen(!isSearchOpen))}
              className="p-2 text-text-muted-light dark:text-text-muted-dark hover:text-accent-light dark:hover:text-accent-dark transition-colors duration-300"
              aria-label="Search"
            >
              <Search className="w-5 h-5" />
            </button>
            <button
              onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
              onKeyDown={(e) => handleKeyPress(e, () => setTheme(theme === 'dark' ? 'light' : 'dark'))}
              className="p-2 text-text-muted-light dark:text-text-muted-dark hover:text-accent-light dark:hover:text-accent-dark transition-colors duration-300"
              aria-label="Toggle theme"
            >
              <AnimatePresence mode="wait">
                {theme === 'dark' ? (
                  <motion.div
                    key="sun"
                    initial={{ rotate: -90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: 90, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <Sun className="w-5 h-5" />
                  </motion.div>
                ) : (
                  <motion.div
                    key="moon"
                    initial={{ rotate: 90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: -90, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <Moon className="w-5 h-5" />
                  </motion.div>
                )}
              </AnimatePresence>
            </button>
            <button
              className="p-2 text-text-muted-light dark:text-text-muted-dark hover:text-accent-light dark:hover:text-accent-dark transition-colors duration-300"
              aria-label="Reading list"
            >
              <Bookmark className="w-5 h-5" />
            </button>
            <button
              onClick={() => setIsOpen(!isOpen)}
              onKeyDown={(e) => handleKeyPress(e, () => setIsOpen(!isOpen))}
              className="sm:hidden p-2 text-text-muted-light dark:text-text-muted-dark hover:text-accent-light dark:hover:text-accent-dark transition-colors duration-300"
              aria-label="Toggle menu"
              aria-expanded={isOpen}
            >
              <AnimatePresence mode="wait">
                {isOpen ? (
                  <motion.div
                    key="close"
                    initial={{ rotate: -90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: 90, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <X className="w-6 h-6" />
                  </motion.div>
                ) : (
                  <motion.div
                    key="menu"
                    initial={{ rotate: 90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: -90, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <Menu className="w-6 h-6" />
                  </motion.div>
                )}
              </AnimatePresence>
            </button>
          </div>
        </div>
      </div>

      {/* Search Bar */}
      <AnimatePresence>
        {isSearchOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="border-t border-border-light dark:border-border-dark"
            ref={searchRef}
          >
            <form onSubmit={handleSearch} className="max-w-7xl mx-auto px-4 py-4">
              <div className="relative">
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search articles..."
                  className="w-full px-4 py-2 pl-10 text-sm bg-background-light dark:bg-background-dark border border-border-light dark:border-border-dark rounded-md focus:outline-none focus:ring-2 focus:ring-accent-light dark:focus:ring-accent-dark text-text-light dark:text-text-dark placeholder:text-text-muted-light dark:placeholder:text-text-muted-dark"
                  aria-label="Search articles"
                />
                <Search className="absolute left-3 top-2.5 w-4 h-4 text-text-muted-light dark:text-text-muted-dark" />
              </div>
            </form>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Mobile menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="sm:hidden border-t border-border-light dark:border-border-dark"
          >
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`
                    block px-3 py-2 rounded-md text-base font-medium transition-colors duration-300
                    ${pathname === item.href
                      ? 'text-accent-light dark:text-accent-dark bg-background-alt-light dark:bg-background-alt-dark'
                      : 'text-text-muted-light dark:text-text-muted-dark hover:text-accent-light dark:hover:text-accent-dark hover:bg-background-alt-light dark:hover:bg-background-alt-dark'
                    }
                  `}
                  onClick={() => setIsOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <div className="px-3 py-2">
                <div className="text-sm font-medium text-text-muted-light dark:text-text-muted-dark mb-2">
                  Categories
                </div>
                <div className="space-y-1">
                  {categories.map((category) => (
                    <Link
                      key={category.slug.current}
                      href={`/category/${category.slug.current}`}
                      className="flex items-center px-3 py-2 rounded-md text-sm text-text-muted-light dark:text-text-muted-dark hover:text-accent-light dark:hover:text-accent-dark hover:bg-background-alt-light dark:hover:bg-background-alt-dark transition-colors duration-300"
                      onClick={() => setIsOpen(false)}
                    >
                      {category.image && (
                        <motion.div
                          whileHover={{ scale: 1.1 }}
                          className="relative mr-2"
                        >
                          <Image
                            src={urlFor(category.image).url()}
                            alt={category.title}
                            width={20}
                            height={20}
                            className="w-5 h-5 rounded-full object-cover"
                          />
                        </motion.div>
                      )}
                      {category.title}
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
} 