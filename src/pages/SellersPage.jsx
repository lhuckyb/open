import { Link } from 'react-router-dom';
import SEO from '../components/SEO';
import FadeInSection from '../components/FadeInSection';
import { siteConfig } from '../siteConfig';
import { Store, CheckCircle, ShieldCheck, ArrowRight, TrendingUp, Users, PackageCheck, Smartphone } from 'lucide-react';

const benefits = [
  {
    icon: Users,
    title: 'Direct Campus Reach',
    text: 'Showcase your items straight to university students who are actively searching for what you offer.'
  },
  {
    icon: Smartphone,
    title: 'Professional Storefront',
    text: 'Gain a polished digital storefront link with your brand name, items catalog, customer ratings, and operational hours.'
  },
  {
    icon: PackageCheck,
    title: 'No WhatsApp Chaos',
    text: 'Stop sorting through messy direct messages. Receive structured orders with clear customer details and quantities.'
  },
  {
    icon: TrendingUp,
    title: 'Zero Card Gateway Holds',
    text: 'Collect your proceeds directly during pickup or delivery via Mobile Money or Cash without weeks-long settlement waiting times.'
  }
];

const requirements = [
  'Active phone number and verifiable campus affiliation or local business address.',
  'Accurate inventory photos, clear descriptions, and honest pricing.',
  'Commitment to honor agreed pickup times or stated delivery turnaround.',
  'Adherence to DefiMart community safety, non-counterfeit, and quality guidelines.'
];

const sellerSteps = [
  { num: '01', title: 'Submit Profile', text: 'Provide your basic store details, contact info, and product category.' },
  { num: '02', title: 'Account Verification', text: 'Our team verifies your vendor identity to preserve marketplace trust.' },
  { num: '03', title: 'Upload Products', text: 'Add your items, pricing, photos, and available stock numbers.' },
  { num: '04', title: 'Receive & Fulfill', text: 'Get alerts when orders arrive and meet customers at scheduled pickup points.' },
];

export default function SellersPage() {
  return (
    <div className="inner-page-layout">
      <SEO 
        title="Become a Seller | DefiMart Campus Marketplace" 
        description="Launch your campus store on DefiMart. Reach thousands of university students with zero listing friction and Pay on Pickup reliability."
      />

      {/* Hero Header */}
      <FadeInSection as="section" className="inner-hero-minimal" direction="up">
        <div className="container-main narrow-container">
          <span className="inner-kicker">For Merchants & Creators</span>
          <h1>Turn Your Student Network Into A Thriving Business.</h1>
          <p className="inner-subtitle">
            DefiMart gives student entrepreneurs, bakers, thrift curators, tech fixers, and local businesses a modern, dedicated sales platform.
          </p>
          <div className="hero-cta-inline">
            <a 
              href={`mailto:${siteConfig.contact.seller}?subject=Seller%20Application%20Inquiry`} 
              className="btn btn-primary"
            >
              <span>Apply for Vendor Account</span>
              <ArrowRight size={16} />
            </a>
            <Link to="/policies/seller-policy" className="btn btn-secondary">
              <span>Read Seller Standards</span>
            </Link>
          </div>
        </div>
      </FadeInSection>

      {/* Benefits Grid */}
      <FadeInSection as="section" className="inner-content-section" direction="up">
        <div className="container-main">
          <div className="section-head-clean">
            <span className="section-sub-label">Why Sell on DefiMart</span>
            <h2>Everything you need to sell professionally</h2>
            <p>Leave disorganized group chats behind. Run your brand like a modern digital business.</p>
          </div>

          <div className="seller-benefits-grid">
            {benefits.map((b, idx) => {
              const Icon = b.icon;
              return (
                <div key={b.title} className={`benefit-card stagger-item-${(idx % 4) + 1}`}>
                  <div className="benefit-icon-box">
                    <Icon size={22} />
                  </div>
                  <h3>{b.title}</h3>
                  <p>{b.text}</p>
                </div>
              );
            })}
          </div>
        </div>
      </FadeInSection>

      {/* Step by Step Onboarding */}
      <FadeInSection as="section" className="inner-content-section section-soft-bg" direction="up">
        <div className="container-main">
          <div className="section-head-clean">
            <span className="section-sub-label">The Pathway</span>
            <h2>From application to your first order</h2>
          </div>

          <div className="onboarding-steps-grid">
            {sellerSteps.map((step, idx) => (
              <div key={step.num} className={`onboarding-step-card stagger-item-${(idx % 4) + 1}`}>
                <span className="onboarding-num">{step.num}</span>
                <h4>{step.title}</h4>
                <p>{step.text}</p>
              </div>
            ))}
          </div>
        </div>
      </FadeInSection>

      {/* Standards & Requirements */}
      <FadeInSection as="section" className="inner-content-section" direction="up">
        <div className="container-main narrow-container">
          <div className="seller-standards-box">
            <div className="standards-icon-strip">
              <ShieldCheck size={32} className="text-primary" />
            </div>
            <h3>DefiMart Vendor Standards</h3>
            <p>
              Because DefiMart operates on a Pay on Pickup framework, trust is our most valuable currency. Approved sellers must agree to our baseline community rules:
            </p>
            <ul className="standards-bullet-list">
              {requirements.map((req, i) => (
                <li key={i}>
                  <CheckCircle size={18} className="text-primary" />
                  <span>{req}</span>
                </li>
              ))}
            </ul>

            <div className="standards-cta-row">
              <a 
                href={`mailto:${siteConfig.contact.seller}?subject=Seller%20Onboarding%20Interest`}
                className="btn btn-primary"
              >
                Start Vendor Application
              </a>
              <a 
                href={`mailto:${siteConfig.contact.general}`} 
                className="btn btn-outline"
              >
                Inquire via Email
              </a>
            </div>
          </div>
        </div>
      </FadeInSection>
    </div>
  );
}
