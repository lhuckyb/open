import { Link, useParams } from 'react-router-dom';
import SEO from '../components/SEO';
import { policyMap } from '../policyContent';
import { policyLinks } from '../siteConfig';
import { ArrowLeft, Clock, ShieldCheck, CheckCircle2 } from 'lucide-react';

function PolicyBlock({ block }) {
  if (block.bullets) {
    return (
      <ul className="doc-bullets">
        {block.bullets.map((bullet) => (
          <li key={bullet.label}>
            <strong>{bullet.label}:</strong> {bullet.text}
          </li>
        ))}
      </ul>
    );
  }

  return (
    <p>
      {block.text}
      {block.link ? (
        <>
          {' '}
          <Link to={block.link.to} className="doc-link">
            {block.link.label}
          </Link>
          .
        </>
      ) : null}
    </p>
  );
}

export default function PolicyDetailPage({ defaultPolicyKey }) {
  const { policyKey } = useParams();
  const resolvedPolicyKey = policyKey || defaultPolicyKey;
  const policy = policyMap[resolvedPolicyKey] || policyMap.terms;
  const isOfficial = Boolean(policyMap[resolvedPolicyKey]);

  return (
    <div className="inner-page-layout">
      <SEO title={`${policy.title} | DefiMart`} description={policy.summary} />

      <section className="inner-hero-minimal">
        <div className="container-main narrow-container">
          <Link to="/policies" className="back-link">
            <ArrowLeft size={16} />
            <span>Back to All Policies</span>
          </Link>
          <span className="inner-kicker">Legal & Governance</span>
          <h1>{policy.title}</h1>
          <div className="doc-meta-strip">
            {policy.updated && (
              <span className="doc-meta-item">
                <Clock size={15} />
                <span>Last updated: {policy.updated}</span>
              </span>
            )}
            {isOfficial && (
              <span className="doc-meta-item text-primary font-medium">
                <CheckCircle2 size={15} />
                <span>Active Production Policy</span>
              </span>
            )}
          </div>
        </div>
      </section>

      <section className="inner-content-section">
        <div className="container-main doc-layout-grid">
          {/* Main Legal Document Body */}
          <article className="legal-article-card">
            <div className="legal-lead-callout">
              <p>{policy.summary}</p>
            </div>

            <div className="legal-sections-body">
              {policy.sections.map((section, idx) => (
                <section key={section.heading || idx} className="legal-doc-section">
                  {section.heading && <h2>{section.heading}</h2>}
                  {section.blocks.map((block, bIdx) => (
                    <PolicyBlock key={bIdx} block={block} />
                  ))}
                </section>
              ))}
            </div>
          </article>

          {/* Quick Policy Index Sidebar */}
          <aside className="doc-sidebar">
            <div className="sidebar-sticky-panel">
              <h4>All Policies</h4>
              <nav className="sidebar-nav">
                {policyLinks.map((p) => (
                  <Link
                    key={p.key}
                    to={p.path}
                    className={`sidebar-link ${resolvedPolicyKey === p.key ? 'is-current' : ''}`}
                  >
                    {p.label}
                  </Link>
                ))}
              </nav>
            </div>
          </aside>
        </div>
      </section>
    </div>
  );
}
