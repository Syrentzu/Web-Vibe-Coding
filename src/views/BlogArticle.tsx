import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import Reveal from '../components/Reveal';
import { portfolioData } from '../data/portfolioData';
import { ArrowLeftIcon, TwitterIcon, LinkedInIcon } from '../components/SVGIcon';

export const BlogArticle: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const [progress, setProgress] = useState(0);
  const { blogArticles, profile } = portfolioData;

  // Find matching article, fallback to the first one (sticker business calculation)
  const article = blogArticles.find((a) => a.id === slug) || blogArticles[0];

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
  }, [slug]);

  // Related articles (excluding the active one, pick first 3)
  const relatedArticles = blogArticles.filter((a) => a.id !== article.id).slice(0, 3);

  // Custom rendered contents based on the active article
  const renderArticleContent = () => {
    switch (article.id) {
      case 'sticker-business-calc':
        return (
          <>
            <h2>Introduction to Sheet-Yield Calculations</h2>
            <p>
              Starting a micro-printing business from a study room requires strict cost tracking. In home-based adhesive printing, profit isn't made on retail list prices; it's saved on supply-chain micro-efficiencies. This guide outlines the math behind cost-per-sheet calculations to optimize margins.
            </p>
            <blockquote>
              <p>
                "In home manufacturing, margins are won in decimal points. Optimizing sheet layout by 5% can cover high-quality laminating films."
              </p>
            </blockquote>

            <h2>Inkjet vs. Thermal Transfer Hardware Ratios</h2>
            <p>
              Hardware selection dictates your base chemical pricing. Inkjet systems offer exceptional DPI but carry high liquid maintenance costs. Conversely, thermal transfer uses pigment ribbons, stabilizing operating cost metrics:
            </p>
            <ul>
              <li><strong>Continuous Ink Supply Systems (CISS):</strong> Extreme yield but requires weekly cleaning cycles, wasting ~3ml ink.</li>
              <li><strong>Thermal Inkjet (Cartridge):</strong> Zero maintenance, but cartridge replacement pushes ink-per-ml costs to gold ratios.</li>
              <li><strong>Eco-Solvent Printheads:</strong> Required for outdoor vinyl durability, but demands continuous active ventilation systems.</li>
            </ul>

            <h2>The Home-Printing Cost Sheet</h2>
            <div className="overflow-x-auto my-6">
              <table className="w-full text-sm text-left text-zinc-500 dark:text-zinc-405 border-collapse">
                <thead>
                  <tr className="border-b border-zinc-200 dark:border-zinc-800 text-zinc-800 dark:text-white">
                    <th className="py-2.5 font-semibold">Material / Cost Component</th>
                    <th className="py-2.5 font-semibold">Supplier Pricing</th>
                    <th className="py-2.5 font-semibold">Unit Yield (A4)</th>
                    <th className="py-2.5 font-semibold">Cost Per Sheet</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-zinc-100 dark:divide-zinc-900">
                  <tr>
                    <td className="py-2.5">Premium Glossy Vinyl Printable Sheet</td>
                    <td className="py-2.5">Rp 120.000 / pack</td>
                    <td className="py-2.5">50 A4 Sheets</td>
                    <td className="py-2.5 text-brand-cyan font-bold">Rp 2.400</td>
                  </tr>
                  <tr>
                    <td className="py-2.5">Cold Matte Laminating Film Overlay</td>
                    <td className="py-2.5">Rp 45.000 / pack</td>
                    <td className="py-2.5">50 A4 Sheets</td>
                    <td className="py-2.5 text-brand-cyan font-bold">Rp 900</td>
                  </tr>
                  <tr>
                    <td className="py-2.5">CISS Dye Ink Depletion Ratio</td>
                    <td className="py-2.5">Rp 95.000 / 100ml bottle</td>
                    <td className="py-2.5">~350 A4 full-color prints</td>
                    <td className="py-2.5 text-brand-cyan font-bold">Rp 271</td>
                  </tr>
                  <tr>
                    <td className="py-2.5">Cricut Die-Cut Blade Wear Allowance</td>
                    <td className="py-2.5">Rp 150.000 / replacement</td>
                    <td className="py-2.5">~800 cut sheets</td>
                    <td className="py-2.5 text-brand-cyan font-bold">Rp 187</td>
                  </tr>
                  <tr className="font-semibold text-zinc-900 dark:text-white border-t-2 border-zinc-200 dark:border-zinc-800">
                    <td className="py-3">Total Manufacturing Cost (COGS)</td>
                    <td className="py-3">-</td>
                    <td className="py-3">-</td>
                    <td className="py-3 text-brand-cyan font-bold text-base">Rp 3.758</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <h2>Lamination Overlay & Durability Math</h2>
            <p>
              Skipping lamination lowers your initial COGS to Rp 2.858, but shortens product lifespan from 2 years to 2 weeks under standard friction. An un-laminated sticker under thumb friction decays immediately. Lamination is an investment that increases structural integrity by 10x while allowing premium pricing.
            </p>
            <p>
              By budgeting Rp 900 for lamination, you can transition your sticker sheets from entry-level novelties to heavy-duty water-resistant products.
            </p>
          </>
        );

      case 'fintech-ui-ux-critique':
        return (
          <>
            <h2>The Personal Finance Landscape in Indonesia</h2>
            <p>
              Indonesian fintech apps like Bibit and SeaBank have seen significant interface changes. What started as simple dashboard directories has transformed into highly aggressive financial storefronts. This UX audit critiques the cognitive load and layout architectures of both apps.
            </p>
            <blockquote>
              <p>
                "Modern fintech design shifts from simple portfolio statistics to aggressive, feature-bloated dashboards, pushing users into high-frequency interactions."
              </p>
            </blockquote>

            <h2>Layout Audits: Bibit App</h2>
            <p>
              Bibit originally pioneered clean, simple mutual fund directories. However, recent interface restructuring has crowded the viewport:
            </p>
            <ul>
              <li><strong>The Robo-Advisor Banner:</strong> Previously a central, welcoming hero element, it has now been collapsed to prioritize high-yield stock offerings.</li>
              <li><strong>Navigational Over-Segmentation:</strong> Features like 'Bibit Plus' introduce dual balance views, causing mental model friction for casual savers.</li>
              <li><strong>Contextual Prompts:</strong> Constant reminders to complete KYC profiles clutter the header, increasing user anxiety.</li>
            </ul>

            <h2>SeaBank's Micro-Interaction Mechanics</h2>
            <p>
              SeaBank relies heavily on micro-animations to encourage savings and transfers. While the backend performance is fast, the frontend introduces substantial friction:
            </p>
            <p>
              The transfer screen mixes account settings, history, and recipient inputs into a single column. Combining these elements increases cognitive search time, conflicting with Jakob's Law of Familiarity.
            </p>
          </>
        );

      case 'civ-theotown-mechanics':
        return (
          <>
            <h2>Systemic Urban Models in Games</h2>
            <p>
              Simulation games serve as excellent labs for studying systemic architecture. From the rigid hexagonal frameworks of Civilization VII to the dynamic pathfinding in Cities: Skylines 2 and the classic grid-based tile maps of TheoTown, spatial rules dictate play behavior.
            </p>
            <blockquote>
              <p>
                "Urban simulations are dynamic loops of feedback. A single zoning decision propagates across transit, power grids, and population engines."
              </p>
            </blockquote>

            <h2>TheoTown's Classic Grid Limitations</h2>
            <p>
              TheoTown relies on a strict, orthographic tile grid. While simple, the underlying mechanics are highly complex:
            </p>
            <ul>
              <li><strong>Traffic Dispatch Loops:</strong> Pathfinding calculates route costs tile-by-tile. High-density zones easily congest grid bottlenecks.</li>
              <li><strong>Utility Propagation:</strong> Water and power flow along adjacent tiles, requiring a logical network layout.</li>
              <li><strong>Zoning Proximity:</strong> Commercial zones require residential labor while suffering from industrial noise.</li>
            </ul>

            <h2>Lessons for Software Engineering</h2>
            <p>
              Modern software design mirrors urban simulation. Building highly cohesive microservices with minimal dependencies is identical to designing clean neighborhoods with efficient beltways. Bad zoning is technical debt; poor pathfinding is a database deadlock.
            </p>
          </>
        );

      case 'indonesian-baking-precision':
        return (
          <>
            <h2>The Culinary Chemistry of Indonesian Baking</h2>
            <p>
              Traditional Indonesian confectionery is a study in precision and chemistry. Unlike Western baking, which relies heavily on gluten structures, Indonesian baking focuses on starch gelatinization and emulsion stability.
            </p>
            <blockquote>
              <p>
                "Putri Salju and Putu Ayu are not just traditional treats; they are fragile emulsions that require strict temperature controls."
              </p>
            </blockquote>

            <h2>Ratios in Putri Salju Confectionery</h2>
            <p>
              Perfect Putri Salju requires an optimal flour-to-fat ratio. A small excess of butter collapses the cookie in the oven:
            </p>
            <ul>
              <li><strong>Flour Gelatinization:</strong> Low-protein flour ensures a tender crumb that melts instantly.</li>
              <li><strong>Fat Crystallization:</strong> Keeping butter cool prevents early fat separation, preserving structural integrity.</li>
              <li><strong>Sugar Adhesion:</strong> Coating the cookie while warm is crucial for perfect powdered sugar adhesion.</li>
            </ul>

            <h2>Precision Temperature Controls</h2>
            <p>
              Putu Ayu demands precise steam temperatures. Low steam pressure results in a dense cake, while high steam pressure distorts the pandan sponge, highlighting the need for absolute ratio and heat control.
            </p>
          </>
        );

      default:
        return null;
    }
  };

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
        {/* ARTICLE HEADER */}
        <header className="pt-28 pb-12 max-w-3xl mx-auto px-6">
          <Link
            to="/blog"
            className="inline-flex items-center gap-2 text-sm text-zinc-500 dark:text-zinc-400 hover:text-accent transition-colors mb-8"
          >
            <ArrowLeftIcon className="w-4 h-4" />
            Back to blog
          </Link>

          <div className="flex items-center gap-3 mb-5">
            <span className="text-xs bg-brand-ice dark:bg-zinc-800 text-brand-deep dark:text-accent border border-brand-cyan/20 dark:border-zinc-700 px-2.5 py-1 rounded-full font-bold capitalize">
              {article.category}
            </span>
            <span className="text-xs text-zinc-400">{article.date} · {article.readTime}</span>
          </div>

          <Reveal delayClass="d1">
            <h1 className="font-display font-bold text-4xl md:text-5xl text-zinc-900 dark:text-white leading-tight mb-6">
              {article.title}
            </h1>
          </Reveal>

          <Reveal delayClass="d2">
            <p className="text-xl text-zinc-500 dark:text-zinc-400 leading-relaxed mb-8">
              {article.desc}
            </p>
          </Reveal>

          {/* Author info & Share */}
          <Reveal
            delayClass="d3"
            className="flex items-center gap-4 py-6 border-t border-b border-zinc-100 dark:border-zinc-900"
          >
            <div className="photo-frame w-12 h-12 rounded-full shrink-0 border border-brand-ice dark:border-zinc-850">
              <img
                src={profile.avatarUrl}
                alt={profile.name}
                loading="lazy"
              />
            </div>
            <div>
              <p className="font-medium text-zinc-900 dark:text-white text-sm">{profile.name}</p>
              <p className="text-xs text-zinc-500">{profile.title}</p>
            </div>
            <div className="ml-auto flex gap-3">
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 flex items-center justify-center rounded-full border border-zinc-200 dark:border-zinc-800 text-zinc-500 hover:text-accent hover:border-accent transition-colors"
                aria-label="Share on Twitter"
              >
                <TwitterIcon className="w-3.5 h-3.5" />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 flex items-center justify-center rounded-full border border-zinc-200 dark:border-zinc-800 text-zinc-500 hover:text-accent hover:border-accent transition-colors"
                aria-label="Share on LinkedIn"
              >
                <LinkedInIcon className="w-3.5 h-3.5" />
              </a>
            </div>
          </Reveal>
        </header>

        {/* Hero image */}
        <div className="max-w-4xl mx-auto px-6 mb-12">
          <div className="photo-frame w-full h-72 md:h-96 rounded-2xl border border-brand-ice dark:border-zinc-850 shadow-md">
            <img
              src={article.img}
              alt={article.title}
              loading="lazy"
            />
          </div>
        </div>

        {/* Article content (v4 prose typography rules) */}
        <div className="max-w-3xl mx-auto px-6 pb-16 prose-article">
          {renderArticleContent()}
        </div>
      </article>

      {/* RELATED ARTICLES */}
      <section className="bg-zinc-50 dark:bg-brand-darkBg py-16 border-t border-zinc-150 dark:border-zinc-800/80">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="font-display font-bold text-2xl text-zinc-900 dark:text-white mb-8">
            More from the blog
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {relatedArticles.map((rel, idx) => (
              <Reveal
                key={rel.id}
                delayClass={`d${idx + 1}`}
                className="card group bg-zinc-50 dark:bg-brand-darkCard rounded-2xl overflow-hidden border border-zinc-150 dark:border-zinc-800/80 hover:border-accent transition-colors flex flex-col justify-between h-full"
              >
                <div>
                  <Link to={`/blog/${rel.id}`} className="photo-frame w-full h-40 block">
                    <img
                      src={rel.img}
                      alt={rel.title}
                      loading="lazy"
                    />
                  </Link>
                  <div className="p-5">
                    <span className="text-xs text-zinc-400 mb-2 block capitalize">{rel.category} · {rel.readTime}</span>
                    <Link to={`/blog/${rel.id}`}>
                      <h3 className="font-display font-bold text-base text-zinc-900 dark:text-white mb-2 group-hover:text-accent transition-colors">
                        {rel.title}
                      </h3>
                    </Link>
                  </div>
                </div>
                <div className="px-5 pb-5 pt-0">
                  <Link to={`/blog/${rel.id}`} className="text-sm font-medium text-accent nav-link">
                    Read →
                  </Link>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};
export default BlogArticle;
