import { Link } from 'react-router-dom';
import { siteConfig } from '../siteConfig';
import { AppleIcon, GooglePlayIcon } from './storeIcons';
import { ShieldCheck, Mail, ArrowUpRight, Heart } from 'lucide-react';
import GetAppDropdown from './GetAppDropdown';

const navCols = {
  platform: [
    { label: 'Marketplace Home', to: '/' },
    { label: 'How It Works', to: '/how-it-works' },
    { label: 'Become a Seller', to: '/sellers' },
    { label: 'About DefiMart', to: '/about' },
    { label: 'Help & FAQ', to: '/faq' },
  ],
  policies: [
    { label: 'Terms of Service', to: '/policies/terms' },
    { label: 'Privacy Policy', to: '/policies/privacy' },
    { label: 'Buyer Policy', to: '/policies/buyer-policy' },
    { label: 'Seller Standards', to: '/policies/seller-policy' },
    { label: 'Refund & Returns', to: '/policies/refund-policy' },
  ],
  support: [
    { label: 'Contact Us', to: '/contact' },
    { label: 'Seller Verification', to: '/sellers' },
    { label: 'Report an Issue', to: '/contact' },
  ]
};

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer-wrap">
      <div className="container-main">
        {/* Top Highlight strip */}
        <div className="footer-callout-row">
          <div className="footer-callout-copy">
            <span className="footer-pill-kicker">Local Commerce Reimagined</span>
            <h3>Ready for safer, student-first buying and selling?</h3>
            <p>Download DefiMart today on iOS and Android to connect with verified campus sellers.</p>
          </div>
          <div className="footer-callout-actions">
            <GetAppDropdown label="Get DefiMart Free" variant="primary" align="right" direction="up" />
            <Link to="/sellers" className="btn btn-outline-light">
              Register Storefront
            </Link>
          </div>
        </div>

        {/* Main Grid */}
        <div className="footer-columns-grid">
          <div className="footer-brand-col">
            <Link to="/" className="footer-logo-link">
              <img src="/app_logo.png" alt="DefiMart" className="footer-logo-img" />
            </Link>
            <p className="footer-bio">
              DefiMart is a student-first marketplace platform designed for trusted local trade, verified vendor discovery, and seamless campus living.
            </p>
            <div className="footer-trust-signal">
              <ShieldCheck size={18} className="text-primary" />
              <span>Zero-risk Pay on Pickup commerce model</span>
            </div>
          </div>

          <div className="footer-col">
            <h4>Ecosystem</h4>
            <ul className="footer-nav-list">
              {navCols.platform.map((l) => (
                <li key={l.to}>
                  <Link to={l.to}>{l.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="footer-col">
            <h4>Legal & Safety</h4>
            <ul className="footer-nav-list">
              {navCols.policies.map((l) => (
                <li key={l.to}>
                  <Link to={l.to}>{l.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="footer-col">
            <h4>Get The App</h4>
            <div className="footer-app-badges">
              <a
                href={siteConfig.googlePlayUrl}
                className="store-button store-button-compact"
                target="_blank"
                rel="noreferrer"
              >
                <GooglePlayIcon size={18} />
                <div className="store-text">
                  <small>Available on</small>
                  <span>Google Play</span>
                </div>
              </a>

              <a
                href={siteConfig.appStoreUrl}
                className="store-button store-button-compact"
                target="_blank"
                rel="noreferrer"
              >
                <AppleIcon size={18} />
                <div className="store-text">
                  <small>Download on</small>
                  <span>App Store</span>
                </div>
              </a>
            </div>

            <div className="footer-direct-mail">
              <span className="mail-label">Direct inquiries:</span>
              <a href={`mailto:${siteConfig.contact.general}`} className="mail-link">
                {siteConfig.contact.general}
              </a>
            </div>
          </div>
        </div>

        <div className="footer-brand-tag" aria-label="DefiMart motto">
          <span>Shop</span>
          <span className="footer-brand-tag-divider">|</span>
          <span>Earn</span>
          <span className="footer-brand-tag-divider">|</span>
          <span>Grow</span>
        </div>

        {/* Bottom Bar */}
        <div className="footer-bottom-bar">
          <div className="footer-copyright">
            © {currentYear} DefiMart Technologies. Built for campus communities.
          </div>
          <div className="footer-meta-links">
            <Link to="/policies/terms">Terms</Link>
            <span className="footer-dot">·</span>
            <Link to="/policies/privacy">Privacy</Link>
            <span className="footer-dot">·</span>
            <Link to="/policies/buyer-policy">Security</Link>
            <span className="footer-dot">·</span>
            <Link to="/contact">Support</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
