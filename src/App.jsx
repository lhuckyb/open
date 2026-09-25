import { useLayoutEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { Package, ShoppingCart, Sparkles } from 'lucide-react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ScrollProgress from './components/ScrollProgress';
import useMagneticButtons from './hooks/useMagneticButtons';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import HowItWorksPage from './pages/HowItWorksPage';
import SellersPage from './pages/SellersPage';
import PoliciesPage from './pages/PoliciesPage';
import FAQPage from './pages/FAQPage';
import ContactPage from './pages/ContactPage';
import PolicyDetailPage from './pages/PolicyDetailPage';

export default function App() {
  const { pathname } = useLocation();

  // Activates subtle, magnetic cursor-pull on all primary CTA buttons
  useMagneticButtons({
    maxDisplacementX: 8,
    maxDisplacementY: 6,
    strength: 0.22,
    returnDuration: 400,
  });

  useLayoutEffect(() => {
    window.history.scrollRestoration = 'manual';
    window.scrollTo(0, 0);
    document.getElementById('main-content')?.focus({ preventScroll: true });

    const frame = window.requestAnimationFrame(() => window.scrollTo(0, 0));
    const timeout = window.setTimeout(() => window.scrollTo(0, 0), 0);

    return () => {
      window.cancelAnimationFrame(frame);
      window.clearTimeout(timeout);
    };
  }, [pathname]);

  return (
    <div className="site-shell">
      <ScrollProgress />
      <div className="ambient-motion" aria-hidden="true">
        <span className="ambient-orbit ambient-orbit-one" />
        <span className="ambient-orbit ambient-orbit-two" />
        <span className="ambient-star ambient-star-one" />
        <span className="ambient-star ambient-star-two" />
        <span className="ambient-star ambient-star-three" />
        <span className="ambient-sparkle ambient-sparkle-one"><Sparkles size={16} strokeWidth={1.7} /></span>
        <span className="ambient-sparkle ambient-sparkle-two"><Sparkles size={12} strokeWidth={1.8} /></span>
        <span className="ambient-cart ambient-cart-one"><ShoppingCart size={25} strokeWidth={1.6} /></span>
        <span className="ambient-cart ambient-cart-two"><ShoppingCart size={19} strokeWidth={1.7} /></span>
        <span className="ambient-package ambient-package-one"><Package size={18} strokeWidth={1.7} /></span>
        {Array.from({ length: 4 }, (_, index) => (
          <span key={`cart-${index}`} className={`ambient-cart ambient-cart-extra ambient-cart-extra-${index + 1}`}>
            <ShoppingCart size={index % 2 === 0 ? 15 : 21} strokeWidth={1.7} />
          </span>
        ))}
        {Array.from({ length: 4 }, (_, index) => (
          <span key={`package-${index}`} className={`ambient-package ambient-package-extra ambient-package-extra-${index + 1}`}>
            <Package size={index % 2 === 0 ? 13 : 16} strokeWidth={1.7} />
          </span>
        ))}
        {Array.from({ length: 8 }, (_, index) => (
          <span key={`sparkle-${index}`} className={`ambient-sparkle ambient-sparkle-extra ambient-sparkle-extra-${index + 1}`}>
            <Sparkles size={index % 3 === 0 ? 13 : 9} strokeWidth={1.8} />
          </span>
        ))}
        {Array.from({ length: 8 }, (_, index) => (
          <span key={`star-${index}`} className={`ambient-star ambient-star-extra ambient-star-extra-${index + 1}`} />
        ))}
        <span className="ambient-drift-circle ambient-drift-circle-one" />
        <span className="ambient-drift-circle ambient-drift-circle-two" />
      </div>
      <a className="skip-link" href="#main-content">
        Skip to content
      </a>

      <Navbar />

      <main className="page-body" id="main-content" key={pathname} tabIndex="-1">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/how-it-works" element={<HowItWorksPage />} />
          <Route path="/sellers" element={<SellersPage />} />
          <Route path="/policies" element={<PoliciesPage />} />
          <Route path="/policies/:policyKey" element={<PolicyDetailPage />} />
          <Route path="/terms" element={<PolicyDetailPage defaultPolicyKey="terms" />} />
          <Route path="/privacy" element={<PolicyDetailPage defaultPolicyKey="privacy" />} />
          <Route path="/faq" element={<FAQPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="*" element={<HomePage />} />
        </Routes>
      </main>

      <Footer />
    </div>
  );
}
