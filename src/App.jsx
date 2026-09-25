import { useLayoutEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
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
