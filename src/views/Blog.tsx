import React, { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import Reveal from '../components/Reveal';
import { portfolioData } from '../data/portfolioData';

export const Blog: React.FC = () => {
  const [activeTab, setActiveTab] = useState<string>('all');
  const { blogArticles } = portfolioData;

  const filterOptions = [
    { value: 'all', label: 'All Articles' },
    { value: 'business', label: 'Business Model' },
    { value: 'dev', label: 'Tech & Dev' },
    { value: 'design', label: 'UI/UX Design' },
    { value: 'lifestyle', label: 'Lifestyle' }
  ];

  const filteredArticles = useMemo(() => {
    if (activeTab === 'all') return blogArticles;
    return blogArticles.filter((a) => a.category === activeTab);
  }, [activeTab, blogArticles]);

  // Featured article is the first sticker business cost sheet calculator
  const featuredArticle = blogArticles[0];

  return (
    <div className="pt-16 min-h-screen bg-white dark:bg-brand-darkBg">
      {/* HERO BLOG */}
      <section className="pt-28 pb-16 relative overflow-hidden bg-white dark:bg-brand-darkBg">
        <div
          className="absolute top-0 right-0 w-80 h-80 bg-accent/10 rounded-full blur-3xl pointer-events-none"
          aria-hidden="true"
        ></div>
        <div className="max-w-6xl mx-auto px-6 relative z-10">
          <p className="reveal text-xs font-medium text-accent tracking-widest uppercase mb-3">Writing</p>
          <Reveal delayClass="d1">
            <h1 className="font-display font-bold text-5xl md:text-6xl text-zinc-900 dark:text-white leading-tight mb-4">
              The Vibe Blog
            </h1>
          </Reveal>
          <Reveal delayClass="d2">
            <p className="text-lg text-zinc-500 dark:text-zinc-400 max-w-xl leading-relaxed">
              In-depth essays, detailed supply-chain calculators, systems analyses, and engineering paradigms by Tegar Ramdhani.
            </p>
          </Reveal>

          {/* Filter tags */}
          <Reveal delayClass="d3" className="flex flex-wrap gap-2 mt-8">
            {filterOptions.map((opt) => (
              <button
                key={opt.value}
                onClick={() => setActiveTab(opt.value)}
                className={`text-sm px-4 py-1.5 rounded-full border transition-colors cursor-pointer capitalize ${
                  activeTab === opt.value
                    ? 'bg-accent text-white border-accent'
                    : 'bg-zinc-50 dark:bg-brand-darkCard text-zinc-605 dark:text-zinc-400 border-zinc-200 dark:border-zinc-800 hover:border-accent'
                }`}
              >
                {opt.label}
              </button>
            ))}
          </Reveal>
        </div>
      </section>

      {/* FEATURED ARTICLE */}
      {(activeTab === 'all' || activeTab === 'business') && (
        <section className="pb-16 bg-white dark:bg-brand-darkBg">
          <div className="max-w-6xl mx-auto px-6">
            <Link
              to={`/blog/${featuredArticle.id}`}
              className="reveal group block rounded-3xl overflow-hidden bg-zinc-50 dark:bg-brand-darkCard border border-zinc-150 dark:border-zinc-800/80 hover:border-accent transition-colors"
            >
              <div className="grid md:grid-cols-2">
                <div className="photo-frame h-64 md:h-auto animate-pulse-subtle">
                  <img
                    src={featuredArticle.img}
                    alt={featuredArticle.title}
                    loading="lazy"
                  />
                </div>
                <div className="p-8 md:p-12 flex flex-col justify-center">
                  <div className="flex items-center gap-3 mb-4">
                    <span className="text-xs bg-brand-ice dark:bg-brand-darkBg text-brand-deep dark:text-accent border border-brand-cyan/20 dark:border-zinc-700 px-2.5 py-1 rounded-full font-semibold">
                      Cost Calculator
                    </span>
                    <span className="text-xs text-zinc-400">{featuredArticle.date} · {featuredArticle.readTime}</span>
                  </div>
                  <h2 className="font-display font-bold text-2xl md:text-3xl text-zinc-900 dark:text-white mb-4 group-hover:text-accent transition-colors">
                    {featuredArticle.title}
                  </h2>
                  <p className="text-zinc-500 dark:text-zinc-400 leading-relaxed mb-6">
                    {featuredArticle.desc}
                  </p>
                  <span className="inline-flex items-center gap-1.5 text-sm font-medium text-accent nav-link">
                    Read article →
                  </span>
                </div>
              </div>
            </Link>
          </div>
        </section>
      )}

      {/* ALL ARTICLES GRID */}
      <section className="pb-24 bg-white dark:bg-brand-darkBg">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-6">
            {filteredArticles.map((article) => (
              <div key={article.id} className="transition-all duration-300">
                <article className="card group bg-zinc-50 dark:bg-brand-darkCard rounded-2xl overflow-hidden border border-zinc-150 dark:border-zinc-800/80 hover:border-accent flex flex-col justify-between h-full">
                  <div>
                    <Link to={`/blog/${article.id}`} className="photo-frame w-full h-44 block">
                      <img src={article.img} alt={article.title} loading="lazy" />
                    </Link>
                    <div className="p-6">
                      <div className="flex items-center gap-3 mb-3">
                        <span className="text-xs bg-brand-ice dark:bg-brand-darkBg text-brand-deep dark:text-accent border border-brand-cyan/20 dark:border-zinc-700 px-2.5 py-1 rounded-full font-semibold capitalize">
                          {article.category}
                        </span>
                        <span className="text-xs text-zinc-400">{article.date}</span>
                      </div>
                      <Link to={`/blog/${article.id}`}>
                        <h3 className="font-display font-bold text-lg text-zinc-900 dark:text-white mb-2 group-hover:text-accent transition-colors">
                          {article.title}
                        </h3>
                      </Link>
                      <p className="text-sm text-zinc-500 dark:text-zinc-400 leading-relaxed">
                        {article.desc}
                      </p>
                    </div>
                  </div>
                  <div className="px-6 pb-6 pt-0 flex items-center justify-between">
                    <Link
                      to={`/blog/${article.id}`}
                      className="inline-flex items-center gap-1.5 text-sm font-medium text-zinc-900 dark:text-white nav-link"
                    >
                      Read more →
                    </Link>
                    <span className="text-xs text-zinc-400">{article.readTime}</span>
                  </div>
                </article>
              </div>
            ))}
          </div>

          {/* Pagination */}
          <nav className="reveal flex items-center justify-center gap-2 mt-14" aria-label="Pagination">
            <span className="w-9 h-9 flex items-center justify-center rounded-full bg-accent text-white text-sm font-medium">
              1
            </span>
            <a
              href="#"
              onClick={(e) => e.preventDefault()}
              className="w-9 h-9 flex items-center justify-center rounded-full border border-zinc-200 dark:border-zinc-800 text-zinc-600 dark:text-zinc-400 hover:border-accent hover:text-accent transition-colors text-sm"
            >
              2
            </a>
            <span className="text-zinc-400 text-sm px-1">…</span>
            <a
              href="#"
              onClick={(e) => e.preventDefault()}
              className="w-9 h-9 flex items-center justify-center rounded-full border border-zinc-200 dark:border-zinc-800 text-zinc-600 dark:text-zinc-400 hover:border-accent hover:text-accent transition-colors text-sm"
              aria-label="Next page"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-4 h-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
              </svg>
            </a>
          </nav>
        </div>
      </section>
    </div>
  );
};
export default Blog;
