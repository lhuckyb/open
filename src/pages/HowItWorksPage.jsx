import SEO from '../components/SEO';
import FadeInSection from '../components/FadeInSection';
import GetAppDropdown from '../components/GetAppDropdown';
import { siteConfig } from '../siteConfig';
import { 
  Download, 
  Search, 
  ShoppingBag, 
  Clock, 
  ShieldCheck, 
  ArrowRight, 
  Store, 
  CheckCircle,
  Smartphone
} from 'lucide-react';
import { Link } from 'react-router-dom';

const shopperSteps = [
  {
    step: '01',
    title: 'Download the DefiMart App',
    desc: 'Install DefiMart on Android or iOS. No complicated onboarding or lengthy credit card setups required.',
    icon: Download
  },
  {
    step: '02',
    title: 'Discover Local Campus Vendors',
    desc: 'Browse items across snacks, tech, clothing, personal care, and university supplies right in your campus zone.',
    icon: Search
  },
  {
    step: '03',
    title: 'Place A Reservation (Pay on Pickup)',
    desc: 'Select your items and confirm your order in a couple taps. You never pay a pesewa online.',
    icon: ShoppingBag
  },
  {
    step: '04',
    title: 'Inspect & Pay at the Drop Point',
    desc: 'Meet at the scheduled pickup point or door delivery. Examine the items, confirm you are happy, and pay with cash or Mobile Money.',
    icon: ShieldCheck
  }
];

const vendorSteps = [
  {
    step: '01',
    title: 'Register Your Brand',
    desc: 'Submit your store name, product category, and contact details for verification.'
  },
  {
    step: '02',
    title: 'Upload Your Catalog',
    desc: 'Post clear photos, accurate pricing, and available stock levels via the merchant portal.'
  },
  {
    step: '03',
    title: 'Receive Real-time Orders',
    desc: 'Get alerted immediately when buyers reserve items, complete with their pickup preferences.'
  },
  {
    step: '04',
    title: 'Fulfill & Collect Directly',
    desc: 'Hand over items on collection days and receive payment directly into your mobile wallet without deduction delays.'
  }
];

export default function HowItWorksPage() {
  return (
    <div className="inner-page-layout">
      <SEO 
        title="How DefiMart Works | Step-by-Step Guide" 
        description="Learn how DefiMart simplifies buying and selling on university campuses with Pay on Pickup safety."
      />

      <FadeInSection as="section" className="inner-hero-minimal" direction="up">
        <div className="container-main narrow-container">
          <span className="inner-kicker">Simple & Transparent</span>
          <h1>How DefiMart Works From Start To Finish</h1>
          <p className="inner-subtitle">
            A frictionless, zero-risk pathway for students who want to shop locally and campus entrepreneurs ready to scale.
          </p>
        </div>
      </FadeInSection>

      {/* Shopper Journey */}
      <FadeInSection as="section" className="inner-content-section" direction="up">
        <div className="container-main">
          <div className="section-head-clean">
            <span className="section-sub-label">The Shopper Journey</span>
            <h2>For Students & Buyers</h2>
            <p>From initial discovery to inspecting your product firsthand.</p>
          </div>

          <div className="process-timeline-grid">
            {shopperSteps.map((s, idx) => {
              const Icon = s.icon;
              return (
                <div key={s.step} className={`timeline-step-card stagger-item-${(idx % 4) + 1}`}>
                  <div className="timeline-card-header">
                    <span className="timeline-badge">{s.step}</span>
                    <div className="timeline-icon">
                      <Icon size={20} />
                    </div>
                  </div>
                  <h3>{s.title}</h3>
                  <p>{s.desc}</p>
                </div>
              );
            })}
          </div>

          <div className="timeline-action-center">
            <GetAppDropdown label="Download App to Start" variant="primary" align="center" />
          </div>
        </div>
      </FadeInSection>

      {/* Vendor Journey */}
      <FadeInSection as="section" className="inner-content-section section-soft-bg" direction="up">
        <div className="container-main">
          <div className="section-head-clean">
            <span className="section-sub-label">The Merchant Pathway</span>
            <h2>For Vendors & Creators</h2>
            <p>Structured operations designed to eliminate lost sales and WhatsApp confusion.</p>
          </div>

          <div className="vendor-path-grid">
            {vendorSteps.map((v, idx) => (
              <div key={v.step} className={`vendor-step-card stagger-item-${(idx % 4) + 1}`}>
                <span className="vendor-step-index">{v.step}</span>
                <h4>{v.title}</h4>
                <p>{v.desc}</p>
              </div>
            ))}
          </div>

          <div className="timeline-action-center">
            <Link to="/sellers" className="btn btn-primary">
              Apply to Sell
            </Link>
          </div>
        </div>
      </FadeInSection>
    </div>
  );
}
