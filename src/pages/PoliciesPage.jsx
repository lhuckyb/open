import { Link } from 'react-router-dom';
import SectionHeader from '../components/SectionHeader';
import SEO from '../components/SEO';
import { policyLinks } from '../siteConfig';
import { policyLastUpdated } from '../policyContent';
import { ShieldCheck, FileText, ChevronRight, CheckCircle2 } from 'lucide-react';

export default function PoliciesPage() {
  const officialPolicies = ['terms', 'privacy', 'refund-policy', 'seller-policy'];

  return (
    <div className="inner-page-layout">
      <SEO 
        title="Official Policies & Safety Hub | DefiMart" 
        description="Read the official DefiMart Terms of Service, Privacy Policy, Buyer Policy, and Seller Standards."
      />

      <section className="inner-hero-minimal">
        <div className="container-main narrow-container">
          <span className="inner-kicker">Compliance & Trust</span>
          <h1>DefiMart Policy & Safety Hub</h1>
          <p className="inner-subtitle">
            Transparent guidelines designed to keep campus commerce accountable, predictable, and fair for everyone.
          </p>
          <div className="policy-hero-tag">
            <ShieldCheck size={16} className="text-primary" />
            <span>Last reviewed and updated: {policyLastUpdated}</span>
          </div>
        </div>
      </section>

      <section className="inner-content-section">
        <div className="container-main narrow-container">
          <div className="policy-directory-grid">
            {policyLinks.map((policy) => {
              const isOfficial = officialPolicies.includes(policy.key);
              return (
                <Link to={policy.path} key={policy.key} className="policy-hub-card">
                  <div className="policy-hub-icon-row">
                    <FileText size={20} className="text-primary" />
                    {isOfficial && (
                      <span className="policy-official-badge">
                        <CheckCircle2 size={13} />
                        <span>Official In-App Policy</span>
                      </span>
                    )}
                  </div>
                  <h3>{policy.label}</h3>
                  <p>
                    Review the operative parameters, responsibilities, and protections governing {policy.label.toLowerCase()} on DefiMart.
                  </p>
                  <div className="policy-card-footer">
                    <span>Read policy document</span>
                    <ChevronRight size={16} />
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
}
