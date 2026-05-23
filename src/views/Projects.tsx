import React, { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import Reveal from '../components/Reveal';
import ShimmerButton from '../components/ShimmerButton';
import { portfolioData } from '../data/portfolioData';

export const Projects: React.FC = () => {
  const [filter, setFilter] = useState<string>('all');
  const { projects, filterOptions } = portfolioData;

  const dynamicFilterOptions = useMemo(() => {
    return filterOptions.map((opt) => ({
      value: opt.value,
      label: opt.value === 'all' ? `All (${projects.length})` : opt.label
    }));
  }, [filterOptions, projects.length]);

  const filteredProjects = useMemo(() => {
    if (filter === 'all') return projects;
    return projects.filter((p) => p.category === filter);
  }, [filter, projects]);

  return (
    <div className="pt-16 min-h-screen bg-white dark:bg-brand-darkBg">
      <section className="pt-28 pb-12 relative overflow-hidden bg-white dark:bg-brand-darkBg">
        {/* glowing blur */}
        <div
          className="absolute top-0 right-0 w-80 h-80 bg-accent/10 rounded-full blur-3xl pointer-events-none"
          aria-hidden="true"
        ></div>

        <div className="max-w-6xl mx-auto px-6 relative z-10">
          <p className="reveal text-xs font-medium text-accent tracking-widest uppercase mb-3">Portfolio</p>
          <Reveal delayClass="d1">
            <h1 className="font-display font-bold text-5xl md:text-6xl text-zinc-900 dark:text-white leading-tight mb-4">
              All Projects
            </h1>
          </Reveal>
          <Reveal delayClass="d2">
            <p className="text-lg text-zinc-500 dark:text-zinc-400 max-w-xl leading-relaxed mb-8">
              A comprehensive showcase of modern technical architecture and high-fidelity user experience designs.
            </p>
          </Reveal>

          {/* Filter Options */}
          <Reveal delayClass="d3" className="flex flex-wrap gap-2">
            {dynamicFilterOptions.map((f) => (
              <button
                key={f.value}
                onClick={() => setFilter(f.value)}
                className={`text-sm px-4 py-1.5 rounded-full border transition-colors cursor-pointer ${
                  filter === f.value
                    ? 'bg-accent text-white border-accent'
                    : 'bg-zinc-50 dark:bg-brand-darkCard text-zinc-650 dark:text-zinc-400 border-zinc-200 dark:border-zinc-800 hover:border-accent'
                }`}
              >
                {f.label}
              </button>
            ))}
          </Reveal>
        </div>
      </section>

      {/* Projects Grid Section */}
      <section className="pb-24 bg-white dark:bg-brand-darkBg">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 transition-all duration-300">
            {filteredProjects.map((p) => {
              const isExternal = p.url.startsWith('http');
              const CardLink = ({ children, className }: { children: React.ReactNode; className?: string }) =>
                isExternal ? (
                  <a href={p.url} target="_blank" rel="noopener noreferrer" className={className}>
                    {children}
                  </a>
                ) : (
                  <Link to="/case-study" className={className}>
                    {children}
                  </Link>
                );

              return (
                <div
                  key={p.id}
                  className="transition-all duration-500 transform opacity-100 scale-100 translate-y-0"
                >
                  <article className="project-card group h-full rounded-2xl overflow-hidden bg-zinc-50 dark:bg-brand-darkCard border border-zinc-150 dark:border-zinc-800/80 hover:border-accent transition-colors flex flex-col justify-between">
                    <div>
                      <CardLink className="block photo-frame w-full h-52">
                        <img src={p.img} alt={p.title} loading="lazy" />
                      </CardLink>
                      <div className="p-6">
                        <div className="flex flex-wrap gap-2 mb-3">
                          <span className="text-xs px-2.5 py-1 rounded-full bg-brand-ice dark:bg-brand-darkCard text-brand-deep dark:text-accent border border-brand-cyan/20 dark:border-zinc-800 font-semibold transition-all duration-300 group-hover:bg-brand-main group-hover:text-white group-hover:border-brand-main">
                            {p.categoryLabel}
                          </span>
                          {p.tags.map((tag) => (
                            <span
                              key={tag}
                              className="text-xs px-2.5 py-1 rounded-full bg-zinc-200 dark:bg-brand-darkBg/60 text-zinc-655 dark:text-zinc-400 transition-all duration-300 hover:scale-105 hover:bg-brand-sky hover:text-brand-deep cursor-default group-hover:bg-brand-ice group-hover:text-brand-deep group-hover:border-brand-ice"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                        <CardLink>
                          <h3 className="font-display font-bold text-lg text-zinc-900 dark:text-white mb-2 group-hover:text-accent transition-colors">
                            {p.title}
                          </h3>
                        </CardLink>
                        <p className="text-sm text-zinc-500 dark:text-zinc-400 leading-relaxed mb-4">
                          {p.desc}
                        </p>
                      </div>
                    </div>
                    <div className="px-6 pb-6 pt-0 flex items-center justify-between">
                      <CardLink className="inline-flex items-center gap-1.5 text-sm font-medium text-zinc-900 dark:text-white nl">
                        {isExternal ? 'View repository →' : 'View case study →'}
                      </CardLink>
                      <span className="text-xs text-zinc-400">{p.year}</span>
                    </div>
                  </article>
                </div>
              );
            })}
          </div>

          {filteredProjects.length === 0 && (
            <div className="text-center py-20">
              <p className="text-zinc-400 text-sm">No projects in this category yet.</p>
            </div>
          )}
        </div>
      </section>

      {/* Start Project CTA */}
      <section className="pb-24 bg-white dark:bg-brand-darkBg">
        <div className="max-w-6xl mx-auto px-6">
          <div className="bg-zinc-900 dark:bg-brand-darkCard rounded-3xl p-10 md:p-14 text-center relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-accent/20 rounded-full blur-3xl pointer-events-none"></div>
            <div className="absolute bottom-0 left-0 w-40 h-40 bg-accent/10 rounded-full blur-2xl pointer-events-none"></div>
            <div className="relative z-10">
              <p className="text-xs font-medium text-accent tracking-widest uppercase mb-4">Ready to start?</p>
              <h2 className="font-display font-bold text-3xl md:text-4xl text-white mb-4">Want to collaborate?</h2>
              <p className="text-zinc-400 max-w-md mx-auto mb-8">I'm open to fresh engineering challenges, prototyping, and modern campus AI projects. Tell me about your vibe.</p>
              <ShimmerButton href="/#contact" className="bg-accent text-white hover:bg-accent/80 font-medium px-8 py-3.5">
                Let's Connect &rarr;
              </ShimmerButton>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
export default Projects;
