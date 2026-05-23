import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Reveal from '../components/Reveal';
import { portfolioData } from '../data/portfolioData';
import { ArrowLeftIcon, LightningIcon, MapIcon, SparklesIcon } from '../components/SVGIcon';

export const CaseStudy: React.FC = () => {
  const [progress, setProgress] = useState(0);
  const { profile } = portfolioData;

  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.body.scrollHeight - window.innerHeight;
      if (totalHeight > 0) {
        const scrolled = Math.min(100, Math.round((window.scrollY / totalHeight) * 100));
        setProgress(scrolled);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="pt-16 min-h-screen bg-white dark:bg-brand-darkBg">
      {/* Reading progress bar */}
      <div
        className="progress-bar"
        style={{ width: `${progress}%` }}
        role="progressbar"
        aria-valuenow={progress}
        aria-valuemin={0}
        aria-valuemax={100}
        aria-label="Reading progress"
      ></div>

      <article>
        {/* ═══ CASE STUDY HEADER ═══ */}
        <header className="pt-28 pb-10 max-w-4xl mx-auto px-6">
          {/* Back link */}
          <Link
            to="/projects"
            className="inline-flex items-center gap-2 text-sm text-zinc-500 dark:text-zinc-400 hover:text-accent transition-colors mb-8"
          >
            <ArrowLeftIcon className="w-4 h-4" />
            Back to projects
          </Link>

          {/* Tags + date */}
          <div className="flex flex-wrap items-center gap-3 mb-6">
            <span className="text-xs bg-brand-ice dark:bg-zinc-800 text-brand-deep dark:text-accent border border-brand-cyan/20 dark:border-zinc-700 px-2.5 py-1 rounded-full font-medium">
              E-Commerce
            </span>
            <span className="text-xs bg-zinc-100 dark:bg-zinc-800 text-zinc-600 dark:text-zinc-400 px-2.5 py-1 rounded-full">
              React 19
            </span>
            <span className="text-xs bg-zinc-100 dark:bg-zinc-800 text-zinc-600 dark:text-zinc-400 px-2.5 py-1 rounded-full">
              Tailwind v4
            </span>
            <span className="text-xs text-zinc-400 ml-1">2026 · 4 weeks</span>
          </div>

          <Reveal delayClass="d1">
            <h1 className="font-display font-bold text-4xl md:text-5xl lg:text-6xl text-zinc-900 dark:text-white leading-tight mb-6">
              TokoKita — Modern E-Commerce Platform Redesign
            </h1>
          </Reveal>

          <Reveal delayClass="d2">
            <p className="text-xl text-zinc-500 dark:text-zinc-400 leading-relaxed mb-10 max-w-2xl">
              An engineering-heavy UI/UX audit and frontend overhaul of a fast-growing Indonesian retail web
              application. Streamlining checkout procedures, reducing code bloat, and introducing micro-interaction frameworks.
            </p>
          </Reveal>

          {/* Meta row */}
          <Reveal
            delayClass="d3"
            className="grid grid-cols-2 md:grid-cols-4 gap-4 py-8 border-t border-b border-zinc-100 dark:border-zinc-900"
          >
            <div>
              <p className="text-xs text-zinc-400 uppercase tracking-widest mb-1">Developer</p>
              <p className="font-medium text-zinc-900 dark:text-white text-sm">{profile.name}</p>
            </div>
            <div>
              <p className="text-xs text-zinc-400 uppercase tracking-widest mb-1">Role</p>
              <p className="font-medium text-zinc-900 dark:text-white text-sm">Lead Frontend Engineer</p>
            </div>
            <div>
              <p className="text-xs text-zinc-400 uppercase tracking-widest mb-1">Timeline</p>
              <p className="font-medium text-zinc-900 dark:text-white text-sm">March 2026</p>
            </div>
            <div>
              <p className="text-xs text-zinc-400 uppercase tracking-widest mb-1">Deliverables</p>
              <p className="font-medium text-zinc-900 dark:text-white text-sm">React 19 Core, Tailwind v4</p>
            </div>
          </Reveal>
        </header>

        {/* ═══ HERO IMAGE ═══ */}
        <div className="max-w-6xl mx-auto px-6 mb-16">
          <Reveal delayClass="d1" className="photo-frame w-full h-72 md:h-[480px] rounded-3xl border border-brand-ice dark:border-zinc-800 shadow-lg">
            <img
              src="https://images.unsplash.com/photo-1556228578-0d85b1a4d571?w=1400&q=80"
              alt="TokoKita — E-Commerce hero"
              loading="eager"
            />
          </Reveal>
        </div>

        {/* ═══ RESULTS BANNER ═══ */}
        <div className="max-w-4xl mx-auto px-6 mb-16">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <Reveal delayClass="d1" className="stat-card bg-zinc-50 dark:bg-brand-darkCard rounded-2xl p-5 pl-6">
              <p className="font-display font-bold text-3xl text-zinc-900 dark:text-white">−42%</p>
              <p className="text-xs text-zinc-500 dark:text-zinc-400 mt-1 leading-snug">
                Checkout abandonment rate
              </p>
            </Reveal>
            <Reveal delayClass="d2" className="stat-card bg-zinc-50 dark:bg-brand-darkCard rounded-2xl p-5 pl-6">
              <p className="font-display font-bold text-3xl text-accent">+35%</p>
              <p className="text-xs text-zinc-500 dark:text-zinc-400 mt-1 leading-snug">
                Mobile loading performance
              </p>
            </Reveal>
            <Reveal delayClass="d3" className="stat-card bg-zinc-50 dark:bg-brand-darkCard rounded-2xl p-5 pl-6">
              <p className="font-display font-bold text-3xl text-zinc-900 dark:text-white">−50%</p>
              <p className="text-xs text-zinc-500 dark:text-zinc-400 mt-1 leading-snug">
                Unused CSS styling size
              </p>
            </Reveal>
            <Reveal delayClass="d4" className="stat-card bg-zinc-50 dark:bg-brand-darkCard rounded-2xl p-5 pl-6">
              <p className="font-display font-bold text-3xl text-zinc-900 dark:text-white">94/100</p>
              <p className="text-xs text-zinc-500 dark:text-zinc-400 mt-1 leading-snug">Lighthouse Performance</p>
            </Reveal>
          </div>
        </div>

        {/* ═══ ARTICLE BODY ═══ */}
        <div className="max-w-3xl mx-auto px-6 pb-4 prose-cs">
          <h2>The brief</h2>
          <p>
            TokoKita is a retail e-commerce platform targeting Indonesian digital shoppers. The application
            featured complex catalog filtering, checkout systems, and promo code modules. While technically functional, the layout suffered from severe structural debt — redundant scripts, legacy CSS style sheets, and inconsistent grid configurations caused high bounce rates on mobile viewports.
          </p>
          <p>
            My mandate was to overhaul the e-commerce layout into a high-performance, single-page application using React 19 and Tailwind CSS v4, achieving a 40% reduction in checkout abandonment within a strict 4-week sprint.
          </p>

          <blockquote>
            <p>
              "Tegar's execution of TokoKita's interface restructured our entire consumer funnel. High speed and zero cognitive weight are absolute prerequisites for modern retail."
            </p>
          </blockquote>

          <h2>Design Strategy</h2>
          <p>The engineering plan rested on three core pillars:</p>
        </div>

        {/* 3-column principles */}
        <div className="max-w-5xl mx-auto px-6 mb-12">
          <div className="grid md:grid-cols-3 gap-5">
            <Reveal
              delayClass="d1"
              className="bg-zinc-50 dark:bg-brand-darkCard rounded-2xl p-7 border border-zinc-150 dark:border-zinc-800/80"
            >
              <div className="w-10 h-10 bg-teal-50 dark:bg-brand-darkBg rounded-xl flex items-center justify-center mb-4">
                <LightningIcon className="w-5 h-5 text-accent" />
              </div>
              <h3
                className="font-display font-bold text-zinc-900 dark:text-white mb-2"
                style={{ fontSize: '1rem', margin: '0 0 .5rem', color: 'inherit' }}
              >
                Vibe Coding Prototyping
              </h3>
              <p className="text-sm text-zinc-500 dark:text-zinc-400 leading-relaxed" style={{ margin: 0 }}>
                Accelerating layout iteration by utilizing premium AI code assistants to scaffold components instantly, minimizing boilerplate.
              </p>
            </Reveal>
            <Reveal
              delayClass="d2"
              className="bg-zinc-50 dark:bg-brand-darkCard rounded-2xl p-7 border border-zinc-150 dark:border-zinc-800/80"
            >
              <div className="w-10 h-10 bg-teal-50 dark:bg-brand-darkBg rounded-xl flex items-center justify-center mb-4">
                <MapIcon className="w-5 h-5 text-accent" />
              </div>
              <h3
                className="font-display font-bold text-zinc-900 dark:text-white mb-2"
                style={{ fontSize: '1rem', margin: '0 0 .5rem', color: 'inherit' }}
              >
                CSS-First configuration
              </h3>
              <p className="text-sm text-zinc-500 dark:text-zinc-400 leading-relaxed" style={{ margin: 0 }}>
                Leveraging Tailwind v4's direct CSS variables compiler, reducing total styling footprint to just 35kB in production.
              </p>
            </Reveal>
            <Reveal
              delayClass="d3"
              className="bg-zinc-50 dark:bg-brand-darkCard rounded-2xl p-7 border border-zinc-150 dark:border-zinc-800/80"
            >
              <div className="w-10 h-10 bg-teal-50 dark:bg-brand-darkBg rounded-xl flex items-center justify-center mb-4">
                <SparklesIcon className="w-5 h-5 text-accent" />
              </div>
              <h3
                className="font-display font-bold text-zinc-900 dark:text-white mb-2"
                style={{ fontSize: '1rem', margin: '0 0 .5rem', color: 'inherit' }}
              >
                React 19 Form States
              </h3>
              <p className="text-sm text-zinc-500 dark:text-zinc-400 leading-relaxed" style={{ margin: 0 }}>
                Bound checkout and voucher inputs natively to React 19's asynchronous Form Actions, providing instant visual feedback.
              </p>
            </Reveal>
          </div>
        </div>

        {/* Process steps */}
        <div className="max-w-3xl mx-auto px-6 pb-16 prose-cs">
          <h2>Process &amp; Implementation</h2>
          <p>
            We structured the overhaul chronologically: starting with a full layout audit, mapping out figma components, compiling v4 theme layers, and testing the form hooks under heavy async mock delays.
          </p>
          <p>
            The final result was validated under Indonesian mobile network latency, showing an outstanding improvement in Time to First Contentful Paint.
          </p>
          <hr />
          <p>
            <em>
              Want to see more details? <a href="#contact">Get in touch</a> — I'm open to fresh engineering collaborations.
            </em>
          </p>
        </div>
      </article>
    </div>
  );
};
export default CaseStudy;
