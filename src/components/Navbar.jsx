import { useEffect, useState } from 'react';
import { createPortal } from 'react-dom';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { 
  Menu, 
  X, 
  ChevronRight, 
  Store, 
  ShieldCheck, 
  Home,
  Compass,
  HelpCircle,
  MessageSquare,
  Users,
  Download,
  ArrowRight
} from 'lucide-react';
import { siteConfig } from '../siteConfig';
import { GooglePlayIcon, AppleIcon } from './storeIcons';
import GetAppDropdown from './GetAppDropdown';

const primaryNav = [
  { label: 'Home', to: '/', icon: Home, exact: true },
  { label: 'How It Works', to: '/how-it-works', icon: Compass },
  { label: 'Sell on DefiMart', to: '/sellers', icon: Store },
  { label: 'About', to: '/about', icon: Users },
  { label: 'Policies', to: '/policies', icon: ShieldCheck },
  { label: 'FAQ', to: '/faq', icon: HelpCircle },
  { label: 'Contact', to: '/contact', icon: MessageSquare },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { pathname } = useLocation();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 12);
    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close drawer on page route change
  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  // Handle ESC key
  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === 'Escape') setOpen(false);
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  // Prevent background scrolling when drawer is open
  useEffect(() => {
    if (!open) return undefined;
    const prev = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = prev;
    };
  }, [open]);

  const closeMenu = () => setOpen(false);

  const drawerPortal = (
    <div className={`nav-drawer-root ${open ? 'is-active' : ''}`}>
      <div 
        className="nav-drawer-backdrop"
        onClick={closeMenu}
        aria-hidden="true"
      />
      <aside 
        className="nav-flyout-drawer"
        aria-label="Navigation drawer"
        aria-hidden={!open}
      >
        <div className="drawer-header">
          <Link to="/" className="drawer-logo-link" onClick={closeMenu}>
            <img src="/app_logo.png" alt="DefiMart" className="drawer-brand-logo" />
          </Link>
          <button 
            type="button" 
            className="drawer-close-btn"
            onClick={closeMenu}
            aria-label="Close menu"
          >
            <X size={20} />
          </button>
        </div>

        <div className="drawer-body">
          <span className="drawer-nav-title">Menu</span>
          <nav className="drawer-nav-list">
            {primaryNav.map((item) => {
              const Icon = item.icon;
              return (
                <NavLink
                  key={item.label}
                  to={item.to}
                  end={item.exact}
                  className={({ isActive }) => `drawer-nav-item ${isActive ? 'active' : ''}`}
                  onClick={closeMenu}
                >
                  <div className="drawer-item-left">
                    <span className="drawer-item-icon">
                      <Icon size={18} />
                    </span>
                    <span className="drawer-item-label">{item.label}</span>
                  </div>
                  <ChevronRight size={15} className="drawer-item-chevron" />
                </NavLink>
              );
            })}
          </nav>

          <div className="drawer-legal-box">
            <span className="drawer-nav-title">Trust & Policies</span>
            <div className="drawer-quick-links">
              <Link to="/policies/terms" onClick={closeMenu}>Terms of Service</Link>
              <Link to="/policies/privacy" onClick={closeMenu}>Privacy Policy</Link>
              <Link to="/policies/buyer-policy" onClick={closeMenu}>Buyer Standards</Link>
              <Link to="/policies/seller-policy" onClick={closeMenu}>Seller Rules</Link>
            </div>
          </div>
        </div>

        <div className="drawer-footer">
          <span className="drawer-nav-title" style={{ marginBottom: '0.4rem' }}>Download DefiMart App</span>
          <div className="drawer-stores-grid">
            <a
              href={siteConfig.googlePlayUrl}
              className="drawer-store-btn"
              target="_blank"
              rel="noreferrer"
              onClick={closeMenu}
            >
              <GooglePlayIcon size={18} />
              <div className="drawer-store-text">
                <small>Google Play</small>
                <strong>Android</strong>
              </div>
            </a>
            <a
              href={siteConfig.appStoreUrl}
              className="drawer-store-btn"
              target="_blank"
              rel="noreferrer"
              onClick={closeMenu}
            >
              <AppleIcon size={18} />
              <div className="drawer-store-text">
                <small>App Store</small>
                <strong>iOS</strong>
              </div>
            </a>
          </div>
          <p className="drawer-trust-caption">
            100% Pay on Pickup · Zero upfront card risk
          </p>
        </div>
      </aside>
    </div>
  );

  return (
    <>
      <header className={`site-header ${isScrolled ? 'is-scrolled' : ''}`}>
        <div className="site-header-container">
          {/* LEFT SIDE (Mobile: Hamburger Trigger + Brand Logo) */}
          <div className="site-header-left">
            <button
              type="button"
              className="mobile-menu-trigger"
              onClick={() => setOpen(true)}
              aria-label="Open menu"
            >
              <Menu size={22} />
            </button>

            <Link to="/" className="site-logo" aria-label="DefiMart Home">
              <img src="/app_logo.png" alt="DefiMart" className="site-logo-image" />
            </Link>
          </div>

          {/* CENTER: Desktop Navigation */}
          <nav className="site-nav" aria-label="Main Navigation">
            {primaryNav.slice(0, 5).map((item) => (
              <NavLink
                key={item.label}
                to={item.to}
                end={item.exact}
                className={({ isActive }) => `site-nav-link ${isActive ? 'is-active' : ''}`}
              >
                {item.label}
              </NavLink>
            ))}
            <NavLink
              to="/contact"
              className={({ isActive }) => `site-nav-link ${isActive ? 'is-active' : ''}`}
            >
              Contact
            </NavLink>
          </nav>

          {/* RIGHT SIDE: Action Buttons */}
          <div className="site-header-right">
            <Link to="/sellers" className="nav-secondary-action">
              <span>Become a Seller</span>
            </Link>

            <GetAppDropdown label="Get App" variant="header" align="right" />
          </div>
        </div>
      </header>

      {createPortal(drawerPortal, document.body)}
    </>
  );
}
