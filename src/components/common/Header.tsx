'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { BookOpenText, Moon, Sun } from 'lucide-react';
import { cn } from '@/lib/utils';
import { useEffect, useState } from 'react';

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About Me' },
];

export default function Header() {
  const pathname = usePathname();
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    // On mount, check localStorage and set theme
    const storedTheme = localStorage.getItem('theme');
    if (storedTheme === 'dark') {
      document.documentElement.classList.add('dark');
      setIsDark(true);
    } else {
      document.documentElement.classList.remove('dark');
      setIsDark(false);
    }
  }, []);

  const toggleDarkMode = () => {
    const newIsDark = !isDark;
    setIsDark(newIsDark);
    if (newIsDark) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  };

  return (
    <header className="bg-card shadow sticky top-0 z-50">
      <nav className="page-container">
        <div className="flex items-center justify-between h-14">
          <div className="flex items-center">
            <Link href="/" className="flex items-center gap-2 text-xl font-bold text-foreground">
              <BookOpenText className="h-6 w-6 text-accent" />
              <span>My Portfolio</span>
            </Link>
          </div>
          <div className="hidden md:flex items-center space-x-4">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={cn(
                    'px-3 py-2 rounded-md text-sm font-medium transition-colors',
                    isActive
                      ? 'bg-accent text-accent-foreground'
                      : 'text-muted-foreground hover:text-foreground'
                  )}
                >
                  {link.label}
                </Link>
              );
            })}
            {/* Dark mode toggle button */}
            <button
              aria-label="Toggle dark mode"
              onClick={toggleDarkMode}
              className="ml-4 p-2 rounded-full border border-border bg-background hover:bg-muted transition-colors"
            >
              {isDark ? <Sun className="h-5 w-5 text-yellow-400" /> : <Moon className="h-5 w-5 text-foreground" />}
            </button>
          </div>
        </div>
      </nav>
    </header>
  );
}
