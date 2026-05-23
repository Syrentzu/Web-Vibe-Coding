import React from 'react';
import { Link } from 'react-router-dom';
import Reveal from '../components/Reveal';
import ShimmerButton from '../components/ShimmerButton';
import ContactForm from '../components/ContactForm';
import { portfolioData } from '../data/portfolioData';
import {
  UiDesignIcon,
  FrontendIcon,
  LandingPagesIcon,
  StarIcon,
  MailIcon,
  LinkedInIcon,
  GitHubIcon
} from '../components/SVGIcon';

export const Home: React.FC = () => {
  const { profile, services, skills, education, projects, blogArticles } = portfolioData;

  return (
    <>
      {/* ═══ HERO ═══ */}
      <section id="hero" className="relative min-h-screen flex items-center pt-16 overflow-hidden">
        {/* glowing blurs */}
        <div
          className="absolute top-1/4 right-0 w-96 h-96 bg-brand-sky/10 rounded-full blur-3xl pointer-events-none"
          aria-hidden="true"
        ></div>
        <div
          className="absolute bottom-1/4 left-0 w-64 h-64 bg-zinc-200/50 dark:bg-zinc-800/30 rounded-full blur-3xl pointer-events-none"
          aria-hidden="true"
        ></div>

        <div className="relative z-10 max-w-6xl mx-auto px-6 py-24 w-full">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <Reveal delayClass="d1">
                <p className="text-sm font-medium text-accent tracking-widest uppercase mb-4">
                  {profile.statusBadge}
                </p>
              </Reveal>
              <Reveal delayClass="d1">
                <h1 className="font-display font-bold text-5xl md:text-6xl lg:text-7xl leading-[1.05] tracking-tight text-zinc-900 dark:text-white mb-6">
                  Hi, I'm <span className="text-accent">{profile.name}</span>
                </h1>
              </Reveal>
              <Reveal delayClass="d2">
                <p className="text-lg md:text-xl text-zinc-500 dark:text-zinc-400 font-light leading-relaxed max-w-md mb-10">
                  <strong className="font-medium text-zinc-700 dark:text-zinc-300">
                    {profile.title}
                  </strong>
                  . {profile.bio}
                </p>
              </Reveal>
              <Reveal delayClass="d3" className="flex flex-wrap gap-4">
                <ShimmerButton
                  href="/projects"
                  className="bg-zinc-900 dark:bg-white text-white dark:text-zinc-900 hover:bg-brand-sky font-semibold hover:text-brand-deep border border-brand-main hover:border-brand-sky shadow-md shadow-brand-main/10 hover:shadow-brand-sky/20"
                >
                  View my work
                  <svg
                    className="w-4 h-4 animate-bounce-horizontal"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                  </svg>
                </ShimmerButton>
                <a
                  href="#contact"
                  onClick={(e) => {
                    e.preventDefault();
                    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="inline-flex items-center gap-2 border border-zinc-300 dark:border-zinc-700 text-zinc-700 dark:text-zinc-300 font-medium px-7 py-3.5 rounded-full hover:bg-zinc-50 dark:hover:bg-zinc-900 transition-colors text-sm cursor-pointer"
                >
                  Get in touch
                </a>
              </Reveal>
              <Reveal
                delayClass="d4"
                className="flex gap-8 mt-14 pt-8 border-t border-zinc-100 dark:border-zinc-900"
              >
                <div>
                  <p className="font-display font-bold text-3xl text-zinc-900 dark:text-white">12+</p>
                  <p className="text-xs text-zinc-500 dark:text-zinc-400 mt-1">AI Projects</p>
                </div>
                <div>
                  <p className="font-display font-bold text-3xl text-zinc-900 dark:text-white">100%</p>
                  <p className="text-xs text-zinc-500 dark:text-zinc-400 mt-1">Vibe Coded</p>
                </div>
                <div>
                  <p className="font-display font-bold text-3xl text-zinc-900 dark:text-white">Surabaya</p>
                  <p className="text-xs text-zinc-500 dark:text-zinc-400 mt-1">Based in ID</p>
                </div>
              </Reveal>
            </div>

            <Reveal delayClass="d2" className="flex justify-center md:justify-end">
              <div className="relative w-72 h-72 md:w-80 md:h-80 lg:w-96 lg:h-96">
                <div className="photo-frame w-full h-full rounded-3xl border border-brand-ice dark:border-zinc-800 shadow-xl shadow-brand-main/5">
                  <img
                    src={profile.avatarUrl}
                    alt={profile.name}
                    loading="eager"
                  />
                </div>
                <div className="absolute -bottom-4 -left-4 bg-accent text-white font-display font-bold text-sm px-4 py-2.5 rounded-2xl shadow-lg border border-brand-sky/30">
                  {profile.location}
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ═══ SERVICES ═══ */}
      <section id="services" className="py-24 bg-zinc-50 dark:bg-brand-darkCard">
        <div className="max-w-6xl mx-auto px-6">
          <div className="mb-14">
            <Reveal delayClass="d1">
              <p className="text-xs font-medium text-accent tracking-widest uppercase mb-3">What I do</p>
            </Reveal>
            <Reveal delayClass="d2">
              <h2 className="font-display font-bold text-4xl md:text-5xl text-brand-deep dark:text-white">
                Services
              </h2>
            </Reveal>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {services.map((service, index) => {
              const iconMap = [
                <UiDesignIcon className="w-6 h-6 text-brand-main dark:text-brand-sky group-hover:text-brand-ice transition-colors" />,
                <FrontendIcon className="w-6 h-6 text-brand-main dark:text-brand-sky group-hover:text-brand-ice transition-colors" />,
                <LandingPagesIcon className="w-6 h-6 text-brand-main dark:text-brand-sky group-hover:text-brand-ice transition-colors" />
              ];

              return (
                <Reveal
                  key={service.id}
                  delayClass={`d${index + 1}`}
                  className="card-h group rounded-2xl p-8 border border-zinc-150 dark:border-zinc-800/60 bg-white dark:bg-brand-darkCard text-brand-deep dark:text-brand-ice hover:bg-brand-deep hover:border-brand-deep transition-all duration-300 flex flex-col justify-between h-full cursor-default"
                >
                  <div>
                    <div className="w-12 h-12 flex items-center justify-center bg-brand-ice/60 dark:bg-brand-darkBg rounded-xl mb-6 group-hover:bg-brand-main/20 transition-colors shrink-0">
                      {iconMap[index] || iconMap[0]}
                    </div>
                    <h3 className="font-display font-bold text-xl mb-3 text-brand-deep dark:text-brand-ice group-hover:text-white transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-sm leading-relaxed text-zinc-600 dark:text-zinc-400 group-hover:text-brand-ice/90 transition-colors">
                      {service.desc}
                    </p>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* ═══ WORK ═══ */}
      <section id="work" className="py-24 bg-white dark:bg-brand-darkBg">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-14">
            <div>
              <Reveal delayClass="d1">
                <p className="text-xs font-medium text-accent tracking-widest uppercase mb-3">
                  Portfolio
                </p>
              </Reveal>
              <Reveal delayClass="d2">
                <h2 className="font-display font-bold text-4xl md:text-5xl text-zinc-900 dark:text-white">
                  Selected projects
                </h2>
              </Reveal>
            </div>
            <Reveal delayClass="d2" className="self-start sm:self-auto">
              <Link
                to="/projects"
                className="text-sm font-medium text-zinc-500 dark:text-zinc-400 hover:text-accent transition-colors nl"
              >
                All projects →
              </Link>
            </Reveal>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {projects.map((p, idx) => {
              const isExternal = p.url.startsWith('http');
              const CardLinkWrapper = ({ children, className }: { children: React.ReactNode; className?: string }) => 
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
                <Reveal
                  key={p.id}
                  delayClass={`d${idx + 1}`}
                  className="card-h group rounded-2xl overflow-hidden bg-zinc-50 dark:bg-brand-darkCard border border-zinc-150 dark:border-zinc-800/80 hover:border-accent flex flex-col h-full justify-between"
                >
                  <div>
                    <CardLinkWrapper className="block photo-frame w-full h-56 md:h-64">
                      <img src={p.img} alt={p.title} loading="lazy" />
                    </CardLinkWrapper>
                    <div className="p-6">
                      <div className="flex flex-wrap gap-2 mb-3">
                        <span className="text-xs bg-brand-ice dark:bg-zinc-800 text-brand-deep dark:text-accent border border-brand-cyan/20 dark:border-zinc-700 px-3 py-1 rounded-full font-medium transition-all duration-300 group-hover:bg-brand-main group-hover:text-white group-hover:border-brand-main">
                          {p.categoryLabel}
                        </span>
                        {p.tags.map((tag) => (
                          <span
                            key={tag}
                            className="text-xs bg-zinc-200 dark:bg-zinc-800 text-zinc-600 dark:text-zinc-400 px-3 py-1 rounded-full transition-all duration-300 hover:scale-105 hover:bg-brand-sky hover:text-brand-deep cursor-default group-hover:bg-brand-ice group-hover:text-brand-deep group-hover:border-brand-ice"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                      <CardLinkWrapper>
                        <h3 className="font-display font-bold text-xl text-zinc-900 dark:text-white mb-2 group-hover:text-accent transition-colors">
                          {p.title}
                        </h3>
                      </CardLinkWrapper>
                      <p className="text-sm text-zinc-500 dark:text-zinc-400 leading-relaxed">
                        {p.desc}
                      </p>
                    </div>
                  </div>
                  <div className="px-6 pb-6 pt-0 flex items-center justify-between">
                    <CardLinkWrapper className="inline-flex items-center gap-1.5 text-sm font-medium text-zinc-900 dark:text-white nl">
                      {isExternal ? 'View repository →' : 'View case study →'}
                    </CardLinkWrapper>
                    <span className="text-xs text-zinc-450">{p.year}</span>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* ═══ ABOUT & EDUCATION ═══ */}
      <section id="about" className="py-24 bg-zinc-50 dark:bg-brand-darkCard">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-16 items-start">
            <Reveal delayClass="d1" className="order-2 md:order-1 space-y-8">
              {/* Education Timeline */}
              <div className="bg-white dark:bg-brand-darkBg p-8 rounded-3xl border border-zinc-150 dark:border-zinc-800/80 shadow-sm">
                <p className="text-xs font-semibold text-accent uppercase tracking-widest mb-6">
                  Academic Timeline
                </p>
                <div className="space-y-6">
                  {education.map((edu) => (
                    <div key={edu.id} className="border-l-2 border-brand-main pl-5 relative">
                      <div className="absolute w-3 h-3 bg-brand-main rounded-full -left-[7px] top-1.5 shadow-sm shadow-brand-main/50" />
                      <h4 className="font-display font-bold text-zinc-900 dark:text-white text-base">
                        {edu.degree}
                      </h4>
                      <p className="text-xs text-brand-main font-semibold mb-2">
                        {edu.institution} • <span className="text-zinc-400 dark:text-zinc-500">{edu.timeline}</span>
                      </p>
                      <p className="text-sm text-zinc-500 dark:text-zinc-400 leading-relaxed">
                        {edu.details}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </Reveal>

            <div className="order-1 md:order-2">
              <Reveal delayClass="d1">
                <p className="text-xs font-medium text-accent tracking-widest uppercase mb-3">About me</p>
              </Reveal>
              <Reveal delayClass="d2">
                <h2 className="font-display font-bold text-4xl md:text-5xl text-brand-deep dark:text-white leading-tight mb-6">
                  Technical Precision &amp;<br />Aesthetics
                </h2>
              </Reveal>
              <Reveal delayClass="d2">
                <p className="text-zinc-500 dark:text-zinc-400 leading-relaxed mb-4">
                  I bridge the gap between technical architecture and modern visual aesthetics. As an
                  Information Technology student at ITATS in Surabaya, Indonesia, I leverage advanced engineering
                  processes to build ultra-fast, responsive web interfaces.
                </p>
              </Reveal>
              <Reveal delayClass="d3">
                <p className="text-zinc-500 dark:text-zinc-400 leading-relaxed mb-8">
                  My execution relies heavily on the <strong className="font-bold text-brand-main">vibe coding</strong> methodology — using modern engineering
                  systems to create pixel-perfect user interfaces in record time. I design for modularity,
                  speed, and absolute user comfort.
                </p>
              </Reveal>
              
              <Reveal delayClass="d4" className="grid grid-cols-2 gap-6">
                <div>
                  <p className="text-xs font-semibold text-zinc-500 dark:text-zinc-400 uppercase tracking-widest mb-3">
                    Development
                  </p>
                  <div className="flex flex-col gap-1.5">
                    {skills.development.map((s) => (
                      <span key={s} className="text-sm text-zinc-700 dark:text-zinc-300 flex items-center gap-1.5">
                        <span className="w-1.5 h-1.5 bg-brand-main rounded-full" />
                        {s}
                      </span>
                    ))}
                  </div>
                </div>
                <div>
                  <p className="text-xs font-semibold text-zinc-500 dark:text-zinc-400 uppercase tracking-widest mb-3">
                    Design
                  </p>
                  <div className="flex flex-col gap-1.5">
                    {skills.design.map((s) => (
                      <span key={s} className="text-sm text-zinc-700 dark:text-zinc-300 flex items-center gap-1.5">
                        <span className="w-1.5 h-1.5 bg-brand-sky rounded-full" />
                        {s}
                      </span>
                    ))}
                  </div>
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ TESTIMONIALS ═══ */}
      <section id="reviews" className="py-24 bg-white dark:bg-brand-darkBg">
        <div className="max-w-6xl mx-auto px-6">
          <div className="mb-14">
            <Reveal delayClass="d1">
              <p className="text-xs font-medium text-accent tracking-widest uppercase mb-3">Social proof</p>
            </Reveal>
            <Reveal delayClass="d2">
              <h2 className="font-display font-bold text-4xl md:text-5xl text-brand-deep dark:text-white">
                Client Feedbacks
              </h2>
            </Reveal>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <Reveal
              delayClass="d1"
              className="bg-zinc-50 dark:bg-brand-darkCard rounded-2xl p-7 border border-zinc-150 dark:border-zinc-800/60 flex flex-col justify-between"
            >
              <div>
                <div className="flex gap-0.5 mb-5" aria-label="5 stars">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <StarIcon key={i} className="w-4 h-4 text-accent fill-current" />
                  ))}
                </div>
                <p className="text-zinc-650 dark:text-zinc-400 text-sm leading-relaxed mb-6 italic">
                  "Tegar completely delivered our retail layout at record speed. His ability to pair visual grids
                  with lightning-fast React components is exceptionally impressive."
                </p>
              </div>
              <footer className="flex items-center gap-3">
                <div className="pf w-10 h-10 rounded-full shrink-0">
                  <img src="https://i.pravatar.cc/80?img=11" alt="Sarah Müller" loading="lazy" />
                </div>
                <div>
                  <p className="font-medium text-sm text-zinc-900 dark:text-white">Sarah Müller</p>
                  <p className="text-xs text-zinc-500 dark:text-zinc-400">Lead Product Manager</p>
                </div>
              </footer>
            </Reveal>

            <Reveal
              delayClass="d2"
              className="bg-zinc-50 dark:bg-brand-darkCard rounded-2xl p-7 border border-zinc-150 dark:border-zinc-800/60 flex flex-col justify-between"
            >
              <div>
                <div className="flex gap-0.5 mb-5" aria-label="5 stars">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <StarIcon key={i} className="w-4 h-4 text-accent fill-current" />
                  ))}
                </div>
                <p className="text-zinc-650 dark:text-zinc-400 text-sm leading-relaxed mb-6 italic">
                  "Tegar's execution of the AI Creative Fest proposal was a masterclass in details and strategic
                  conception. The activity pipeline was extremely logical and successful."
                </p>
              </div>
              <footer className="flex items-center gap-3">
                <div className="pf w-10 h-10 rounded-full shrink-0">
                  <img src="https://i.pravatar.cc/80?img=52" alt="Thomas Renault" loading="lazy" />
                </div>
                <div>
                  <p className="font-medium text-sm text-zinc-900 dark:text-white">Thomas Renault</p>
                  <p className="text-xs text-zinc-500 dark:text-zinc-400">Festival Director</p>
                </div>
              </footer>
            </Reveal>

            <Reveal
              delayClass="d3"
              className="bg-zinc-50 dark:bg-brand-darkCard rounded-2xl p-7 border border-zinc-150 dark:border-zinc-800/60 flex flex-col justify-between"
            >
              <div>
                <div className="flex gap-0.5 mb-5" aria-label="5 stars">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <StarIcon key={i} className="w-4 h-4 text-accent fill-current" />
                  ))}
                </div>
                <p className="text-zinc-650 dark:text-zinc-400 text-sm leading-relaxed mb-6 italic">
                  "Zero boilerplate overhead, pure functional clean layout. The sticker micro-business per-sheet
                  calculations from Tegar's blog changed our hardware selection immediately."
                </p>
              </div>
              <footer className="flex items-center gap-3">
                <div className="pf w-10 h-10 rounded-full shrink-0">
                  <img src="https://i.pravatar.cc/80?img=47" alt="Camille Dufresne" loading="lazy" />
                </div>
                <div>
                  <p className="font-medium text-sm text-zinc-900 dark:text-white">Camille Dufresne</p>
                  <p className="text-xs text-zinc-500 dark:text-zinc-400">Operations Consultant</p>
                </div>
              </footer>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ═══ BLOG ═══ */}
      <section id="blog" className="py-24 bg-zinc-50 dark:bg-brand-darkCard">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-14">
            <div>
              <Reveal delayClass="d1">
                <p className="text-xs font-medium text-accent tracking-widest uppercase mb-3">Thoughts</p>
              </Reveal>
              <Reveal delayClass="d2">
                <h2 className="font-display font-bold text-4xl md:text-5xl text-brand-deep dark:text-white">
                  From the blog
                </h2>
              </Reveal>
            </div>
            <Reveal delayClass="d2" className="self-start sm:self-auto">
              <Link
                to="/blog"
                className="text-sm font-medium text-zinc-500 dark:text-zinc-400 hover:text-accent transition-colors nl"
              >
                All articles →
              </Link>
            </Reveal>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {blogArticles.slice(0, 3).map((article, index) => (
              <Reveal
                key={article.id}
                delayClass={`d${index + 1}`}
                className="card-h group bg-zinc-50 dark:bg-brand-darkCard rounded-2xl overflow-hidden border border-zinc-150 dark:border-zinc-800/80 hover:border-accent flex flex-col justify-between h-full"
              >
                <div>
                  <div className="pf w-full h-44">
                    <img
                      src={article.img}
                      alt={article.title}
                      loading="lazy"
                    />
                  </div>
                  <div className="p-6">
                    <div className="flex items-center gap-3 mb-3">
                      <span className="text-xs bg-brand-ice dark:bg-zinc-800 text-brand-deep dark:text-accent border border-brand-cyan/20 dark:border-zinc-700 px-2.5 py-1 rounded-full font-semibold capitalize">
                        {article.category}
                      </span>
                      <span className="text-xs text-zinc-450">{article.date}</span>
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
                <div className="px-6 pb-6 pt-0">
                  <Link
                    to={`/blog/${article.id}`}
                    className="inline-flex items-center gap-1.5 text-sm font-medium text-zinc-900 dark:text-white nl"
                  >
                    Read more →
                  </Link>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ CONTACT ═══ */}
      <section id="contact" className="py-24 bg-white dark:bg-brand-darkBg">
        <div className="max-w-6xl mx-auto px-6">
          <div className="bg-zinc-900 dark:bg-brand-darkCard rounded-3xl p-10 md:p-16 relative overflow-hidden">
            {/* background glowing blur */}
            <div
              className="absolute top-0 right-0 w-64 h-64 bg-accent/20 rounded-full blur-3xl pointer-events-none"
              aria-hidden="true"
            ></div>
            <div
              className="absolute bottom-0 left-0 w-40 h-40 bg-accent/10 rounded-full blur-2xl pointer-events-none"
              aria-hidden="true"
            ></div>

            <div className="relative z-10 grid md:grid-cols-2 gap-12 items-center">
              <div className="flex flex-col justify-center">
                <Reveal delayClass="d1">
                  <p className="text-xs font-medium text-accent tracking-widest uppercase mb-3">
                    Get in touch
                  </p>
                </Reveal>
                <Reveal delayClass="d2">
                  <h2 className="font-display font-bold text-4xl md:text-5xl text-white leading-tight mb-5">
                    Let's work<br />together
                  </h2>
                </Reveal>
                <Reveal delayClass="d3">
                  <p className="text-zinc-400 leading-relaxed mb-8">
                    I'm open to React 19 development, modern UI/UX prototyping, and AI-augmented technical
                    missions. Let's build ultra-fast products together.
                  </p>
                </Reveal>

                <Reveal delayClass="d4" className="flex flex-col gap-4">
                  <a
                    href={`mailto:${profile.email}`}
                    className="group flex items-center gap-3 text-zinc-400 hover:text-white transition-colors"
                  >
                    <span className="w-9 h-9 flex items-center justify-center bg-zinc-800 rounded-lg group-hover:bg-accent/20 transition-colors shrink-0">
                      <MailIcon className="w-4 h-4" />
                    </span>
                    <span className="text-sm">{profile.email}</span>
                  </a>
                  <a
                    href={profile.linkedinUrl}
                    rel="noopener noreferrer"
                    target="_blank"
                    className="group flex items-center gap-3 text-zinc-400 hover:text-white transition-colors"
                  >
                    <span className="w-9 h-9 flex items-center justify-center bg-zinc-800 rounded-lg group-hover:bg-accent/20 transition-colors shrink-0">
                      <LinkedInIcon className="w-4 h-4" />
                    </span>
                    <span className="text-sm">linkedin.com/in/{profile.linkedin}</span>
                  </a>
                  <a
                    href={profile.githubUrl}
                    rel="noopener noreferrer"
                    target="_blank"
                    className="group flex items-center gap-3 text-zinc-400 hover:text-white transition-colors"
                  >
                    <span className="w-9 h-9 flex items-center justify-center bg-zinc-800 rounded-lg group-hover:bg-accent/20 transition-colors shrink-0">
                      <GitHubIcon className="w-4 h-4" />
                    </span>
                    <span className="text-sm">github.com/{profile.github}</span>
                  </a>
                </Reveal>
              </div>

              <Reveal delayClass="d2" className="flex flex-col justify-center">
                <ContactForm />
              </Reveal>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
export default Home;
