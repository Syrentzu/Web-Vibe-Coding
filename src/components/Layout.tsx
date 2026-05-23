import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useTheme } from '../context/ThemeContext';
import { SunIcon, MoonIcon, HamburgerIcon, CloseIcon, ArrowRightIcon } from './SVGIcon';
import ShimmerButton from './ShimmerButton';
import { portfolioData } from '../data/portfolioData';

export const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const { dark, setDark } = useTheme();
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenu, setMobileMenu] = useState(false);
  const [activeSection, setActiveSection] = useState<string | null>(null);
  const location = useLocation();
  const { profile } = portfolioData;

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    document.title = profile.pageTitle || "Tegar - The Beginner Vibe Coder";
  }, [profile.pageTitle]);

  // Global Hash Scroll Listener for client-side routing transitions
  useEffect(() => {
    if (location.hash) {
      const targetId = location.hash.replace('#', '');
      const attemptScroll = () => {
        const el = document.getElementById(targetId);
        if (el) {
          setTimeout(() => {
            el.scrollIntoView({ behavior: 'smooth' });
          }, 120); // Delay for components to mount fully
        }
      };

      if (document.readyState === 'complete') {
        attemptScroll();
      } else {
        window.addEventListener('load', attemptScroll, { once: true });
      }
    }
  }, [location.pathname, location.hash]);

  // Section Observer for active sticky indicators on the home page
  useEffect(() => {
    if (location.pathname !== '/') {
      setActiveSection(null);
      return;
    }

    const sections = document.querySelectorAll('section[id]');
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.25, rootMargin: '-20% 0px -50% 0px' }
    );

    sections.forEach((sec) => observer.observe(sec));

    return () => observer.disconnect();
  }, [location.pathname]);

  // Close mobile menu on page transition
  useEffect(() => {
    setMobileMenu(false);
  }, [location.pathname]);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement | HTMLButtonElement>, targetId: string) => {
    if (location.pathname === '/') {
      e.preventDefault();
      const el = document.getElementById(targetId);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  const currentYear = new Date().getFullYear();

  // Dynamically divide name for logo branding
  const firstName = profile.name.split(' ')[0].toLowerCase();
  const lastName = profile.name.split(' ')[1]?.toLowerCase() || '';

  return (
    <div className="min-h-screen bg-white dark:bg-zinc-950 text-zinc-900 dark:text-zinc-100 font-body antialiased relative">
      {/* ═══ NAV ═══ */}
      <header
        className={`fixed inset-x-0 top-0 z-50 transition-all duration-350 ${
          scrolled
            ? 'bg-white/95 dark:bg-zinc-950/95 backdrop-blur-md shadow-sm shadow-black/5 border-b border-zinc-150/10 dark:border-zinc-800/20'
            : 'bg-transparent'
        }`}
      >
        <nav className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between" aria-label="Main navigation">
          <Link to="/" className="font-display font-bold text-xl tracking-tight relative z-10 hover:opacity-85 transition-opacity">
            <span className="text-zinc-900 dark:text-white">{firstName}</span>
            <span className="text-accent">{lastName}</span>
          </Link>

          <ul className="hidden md:flex items-center gap-8 text-sm" role="list">
            <li>
              <a
                href="/#services"
                onClick={(e) => handleNavClick(e, 'services')}
                className={`nl text-zinc-500 dark:text-zinc-400 hover:text-brand-main dark:hover:text-white transition-colors ${
                  location.pathname === '/' && activeSection === 'services'
                    ? 'on text-brand-main dark:text-white font-medium'
                    : ''
                }`}
              >
                Services
              </a>
            </li>
            <li>
              <Link
                to="/projects"
                className={`nl text-zinc-500 dark:text-zinc-400 hover:text-brand-main dark:hover:text-white transition-colors ${
                  location.pathname === '/projects'
                    ? 'on text-brand-main dark:text-white font-medium'
                    : ''
                }`}
              >
                Work
              </Link>
            </li>
            <li>
              <a
                href="/#about"
                onClick={(e) => handleNavClick(e, 'about')}
                className={`nl text-zinc-500 dark:text-zinc-400 hover:text-brand-main dark:hover:text-white transition-colors ${
                  location.pathname === '/' && activeSection === 'about'
                    ? 'on text-brand-main dark:text-white font-medium'
                    : ''
                }`}
              >
                About
              </a>
            </li>
            <li>
              <Link
                to="/blog"
                className={`nl text-zinc-500 dark:text-zinc-400 hover:text-brand-main dark:hover:text-white transition-colors ${
                  location.pathname.startsWith('/blog')
                    ? 'on text-brand-main dark:text-white font-medium'
                    : ''
                }`}
              >
                Blog
              </Link>
            </li>
            <li>
              <a
                href="/#contact"
                onClick={(e) => handleNavClick(e, 'contact')}
                className={`nl text-zinc-500 dark:text-zinc-400 hover:text-brand-main dark:hover:text-white transition-colors ${
                  location.pathname === '/' && activeSection === 'contact'
                    ? 'on text-brand-main dark:text-white font-medium'
                    : ''
                }`}
              >
                Contact
              </a>
            </li>
          </ul>

          <div className="flex items-center gap-3">
            {/* dark toggle */}
            <button
              onClick={() => setDark(!dark)}
              className="w-9 h-9 flex items-center justify-center rounded-full border border-zinc-200 dark:border-zinc-800 hover:bg-zinc-100 dark:hover:bg-zinc-900 transition-colors cursor-pointer border-neon-hover"
              aria-label={dark ? 'Light mode' : 'Dark mode'}
            >
              {dark ? <SunIcon className="w-4 h-4" /> : <MoonIcon className="w-4 h-4" />}
            </button>

            {/* hire me */}
            <ShimmerButton
              href="/#contact"
              onClick={(e) => handleNavClick(e, 'contact')}
              className="hidden md:inline-flex bg-accent text-white hover:bg-brand-sky font-semibold hover:text-brand-deep border border-brand-main hover:border-brand-sky shadow-md shadow-brand-main/10 hover:shadow-brand-sky/20"
            >
              Hire me <ArrowRightIcon className="w-3.5 h-3.5" />
            </ShimmerButton>

            {/* hamburger */}
            <button
              onClick={() => setMobileMenu(!mobileMenu)}
              className="md:hidden w-9 h-9 flex items-center justify-center rounded-full border border-zinc-200 dark:border-zinc-800 cursor-pointer"
              aria-expanded={mobileMenu}
              aria-label="Toggle menu"
            >
              {mobileMenu ? <CloseIcon className="w-4 h-4" /> : <HamburgerIcon className="w-4 h-4" />}
            </button>
          </div>
        </nav>

        {/* mobile menu */}
        {mobileMenu && (
          <div className="md:hidden bg-white dark:bg-zinc-950 border-t border-zinc-100 dark:border-zinc-900 transition-all duration-200">
            <ul className="flex flex-col px-6 py-5 gap-4 text-sm font-medium" role="list">
              <li>
                <a
                  href="/#services"
                  onClick={(e) => {
                    handleNavClick(e, 'services');
                    setMobileMenu(false);
                  }}
                  className={`block hover:text-accent transition-colors ${
                    activeSection === 'services' ? 'text-accent font-semibold' : 'text-zinc-700 dark:text-zinc-300'
                  }`}
                >
                  Services
                </a>
              </li>
              <li>
                <Link
                  to="/projects"
                  onClick={() => setMobileMenu(false)}
                  className={`block hover:text-accent transition-colors ${
                    location.pathname === '/projects' ? 'text-accent font-semibold' : 'text-zinc-700 dark:text-zinc-300'
                  }`}
                >
                  Work
                </Link>
              </li>
              <li>
                <a
                  href="/#about"
                  onClick={(e) => {
                    handleNavClick(e, 'about');
                    setMobileMenu(false);
                  }}
                  className={`block hover:text-accent transition-colors ${
                    activeSection === 'about' ? 'text-accent font-semibold' : 'text-zinc-700 dark:text-zinc-300'
                  }`}
                >
                  About
                </a>
              </li>
              <li>
                <Link
                  to="/blog"
                  onClick={() => setMobileMenu(false)}
                  className={`block hover:text-accent transition-colors ${
                    location.pathname.startsWith('/blog') ? 'text-accent font-semibold' : 'text-zinc-700 dark:text-zinc-300'
                  }`}
                >
                  Blog
                </Link>
              </li>
              <li>
                <a
                  href="/#contact"
                  onClick={(e) => {
                    handleNavClick(e, 'contact');
                    setMobileMenu(false);
                  }}
                  className={`block hover:text-accent transition-colors ${
                    activeSection === 'contact' ? 'text-accent font-semibold' : 'text-zinc-700 dark:text-zinc-300'
                  }`}
                >
                  Contact
                </a>
              </li>
              <li className="pt-2 border-t border-zinc-100 dark:border-zinc-900">
                <ShimmerButton
                  href="/#contact"
                  onClick={(e) => {
                    handleNavClick(e, 'contact');
                    setMobileMenu(false);
                  }}
                  className="w-full justify-center bg-accent text-white"
                >
                  Hire me <ArrowRightIcon className="w-3.5 h-3.5" />
                </ShimmerButton>
              </li>
            </ul>
          </div>
        )}
      </header>

      {/* Main Content */}
      <main className="relative">{children}</main>

      {/* Footer */}
      <footer className="border-t border-zinc-150 dark:border-zinc-800/50 bg-white dark:bg-brand-darkBg relative z-10">
        <div className="max-w-6xl mx-auto px-6 py-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex flex-col gap-2">
            <p className="text-sm text-zinc-400">
              © {currentYear} {profile.name}. All rights reserved. <br className="sm:hidden" />
              Inspired by{' '}
              <a
                href="https://lbegey78.gumroad.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="font-bold hover:text-accent transition-colors"
              >
                Laurent Begey
              </a>{' '}
              from{' '}
              <a
                href="https://themewagon.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="font-bold hover:text-accent transition-colors"
              >
                ThemeWagon
              </a>
            </p>
            <p className="text-xs text-accent/80 font-medium tracking-wide">
              changes to this web creating for practical learning with vibe coding
            </p>
          </div>
          <p className="text-xs text-zinc-500">
            Built with{' '}
            <a
              href="https://tailwindcss.com"
              className="hover:text-zinc-900 dark:hover:text-white transition-colors"
              rel="noopener noreferrer"
              target="_blank"
            >
              Tailwind CSS v4
            </a>{' '}
            &amp;{' '}
            <a
              href="https://react.dev"
              className="hover:text-zinc-900 dark:hover:text-white transition-colors"
              rel="noopener noreferrer"
              target="_blank"
            >
              React 19
            </a>
          </p>
        </div>
      </footer>
    </div>
  );
};
export default Layout;
