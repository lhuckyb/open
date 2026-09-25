import { useState } from 'react';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO';
import ImageSlider from '../components/ImageSlider';
import StoreButtons from '../components/StoreButtons';
import FAQItem from '../components/FAQItem';
import FadeInSection from '../components/FadeInSection';
import GetAppDropdown from '../components/GetAppDropdown';
import { faqData, siteConfig } from '../siteConfig';
import { 
  ShieldCheck, 
  Store, 
  MapPin, 
  ArrowRight, 
  Check, 
  ShoppingBag,
  Clock,
  Sparkles,
  TrendingUp,
  PackageCheck
} from 'lucide-react';

const appSlides = [
  {
    id: 'shop',
    tabLabel: 'Shop',
    image: '/src/assets/images/textbook_stack_1790289892365.jpg',
    alt: 'DefiMart App Shop Screen with Course Textbooks',
    title: 'Shop, Earn, and Grow from One Unified Hub',
    category: 'Textbooks & Course Packs',
    itemTitle: 'Principles of Economics (10th Ed)',
    price: 'GH₵ 85.00',
    vendorName: 'Kwame K. · Verified Student Seller',
    locationTag: 'Central Campus Library',
    description:
      'DefiMart consolidates student marketplace commerce, personal micro-earnings, and merchant growth into an intuitive daily dashboard.',
    points: [
      'Streamlined access to verified peer and official store items',
      'Daily curated student deals and campus community essentials',
      'Transparent pricing with zero hidden surcharges'
    ],
  },
  {
    id: 'discover',
    tabLabel: 'Discover',
    image: '/src/assets/images/tech_gadget_desk_1790289907307.jpg',
    alt: 'DefiMart Discovery Stream with Student Electronics',
    title: 'Discover Verified Products Near Your Campus',
    category: 'Electronics & Dorm Tech',
    itemTitle: 'ANC Wireless Earbuds + Fast Case',
    price: 'GH₵ 140.00',
    vendorName: 'TechHub Legon · 4.9 ★ (120+ sales)',
    locationTag: 'Sarbah Hall Meetup Point',
    description:
      'Explore listings filtered by proximity, inventory status, and vendor credentials—guaranteeing rapid handoffs without delivery headaches.',
    points: [
      'Locate products within walking distance or campus drop spots',
      'High-res photo proof and real buyer ratings',
      'Search across snacks, stationery, gadgets, fashion, and services'
    ],
  },
  {
    id: 'independent',
    tabLabel: 'Independent',
    image: '/src/assets/images/student_crafts_1790289952804.jpg',
    alt: 'DefiMart Student Vendor Storefront with Crafts and Totes',
    title: 'Independent Vendor & Campus Brand Hubs',
    category: 'Student Crafts & Apparel',
    itemTitle: 'Handcrafted Canvas Campus Tote',
    price: 'GH₵ 55.00',
    vendorName: 'Akosua Studio · Student Creator',
    locationTag: 'Night Market Depot',
    description:
      'Every store operator receives a dedicated digital storefront showcasing item verification, schedule, customer ratings, and contact info.',
    points: [
      'Dedicated seller profiles with verified operational badges',
      'Clear inventory levels before placing your reservation',
      'DefiMart Official Store supplies essential staples directly'
    ],
  },
  {
    id: 'order',
    tabLabel: 'Order',
    image: '/src/assets/images/thrift_hoodie_1790289917263.jpg',
    alt: 'DefiMart Pay on Pickup Checkout with Thrift Apparel',
    title: 'Order in 3 Taps with Pay on Pickup',
    category: 'Thrift & Streetwear',
    itemTitle: 'Heavyweight College Vintage Hoodie',
    price: 'GH₵ 110.00',
    vendorName: 'Vault Thrift · Pay on Pickup',
    locationTag: 'Commonwealth Hall',
    description:
      'No credit card vulnerability. Reserve what you need online, inspect items in person, and settle via Mobile Money or Cash only when fully satisfied.',
    points: [
      'Zero financial risk: never pay before seeing items',
      'Cash or Mobile Money (MoMo) directly on handover',
      'Transparent tracking and instant order status updates'
    ],
  },
  {
    id: 'track',
    tabLabel: 'Tracking',
    image: '/src/assets/images/pickup_package_1790289942231.jpg',
    alt: 'DefiMart Parcel Tracking and Inspection',
    title: 'Track Orders & Manage Account Privacy',
    category: 'Verified Parcel Handoff',
    itemTitle: 'Order #DF-5921 Ready for Pickup',
    price: 'Verified',
    vendorName: 'Central Depot Station 2',
    locationTag: 'Locker Box #14 · Code: 4920',
    description:
      'Complete control over your transaction logs, wishlists, and data permissions with a single touch.',
    points: [
      'Real-time order statuses from pending to completed',
      'Saved bookmarks and recurring order history',
      'GDPR-grade personal data access and deletion controls'
    ],
  },
  {
    id: 'pickups',
    tabLabel: 'Pickups',
    image: '/src/assets/images/fresh_pastries_1790289927820.jpg',
    alt: 'DefiMart Campus Bakery and Snacks Hub',
    title: 'Predictable Campus Pickups & Direct Delivery',
    category: 'Campus Bakery & Eats',
    itemTitle: 'Fresh Artisan Croissant & Pastry Box',
    price: 'GH₵ 40.00',
    vendorName: 'Campus Bakehouse · Daily Fresh',
    locationTag: 'Hub Dispatch: 2:00 PM Wed/Fri',
    description:
      'Structured schedules (Wednesdays & Saturdays central pickups) keep pickups hassle-free, or coordinate direct doorstep delivery with vendors.',
    points: [
      'Fixed central hub collection slots designed for student schedules',
      'Custom merchant delivery options displayed upfront',
      'SMS alerts sent the instant an item is sorted at pickup'
    ],
  },
];

const pillars = [
  {
    icon: ShieldCheck,
    title: 'Pay on Pickup Protection',
    description: 'Eliminates online payment scams completely. Inspect your product firsthand before handing over mobile money or cash.',
    badge: '100% Safe'
  },
  {
    icon: Store,
    title: 'Verified Student Vendors',
    description: 'Support legitimate campus entrepreneurs, student creators, and businesses with authentic credentials and peer ratings.',
    badge: 'Vetted'
  },
  {
    icon: Clock,
    title: 'Scheduled Campus Hubs',
    description: 'Collect your orders on regular weekly schedules without waiting all day for irregular couriers.',
    badge: 'Reliable'
  },
  {
    icon: TrendingUp,
    title: 'Earn While on Campus',
    description: 'DefiMart empowers students to open digital storefronts or participate in community ambassador programs.',
    badge: 'Student Growth'
  }
];

export default function HomePage() {
  const [activeTab, setActiveTab] = useState('buyers');
  const homeFaq = faqData.slice(0, 5);

  return (
    <div className="home-page-wrap">
      <SEO 
        title="DefiMart | Student-First Marketplace & Campus Commerce" 
        description="DefiMart connects campus students and verified local sellers for smart shopping, transparent Pay on Pickup ordering, and micro-earning."
      />

      {/* Hero Section */}
      <FadeInSection as="section" className="hero-modern-section" direction="up" threshold={0.05}>
        <div className="container-main">
          <div className="hero-split-grid">
            {/* Left Content */}
            <div className="hero-text-block">
              <h1 className="hero-title">
                Smart campus shopping.
                <span className="hero-title-accent">Zero transaction risk.</span>
              </h1>

              <p className="hero-lead-text">
                DefiMart brings university students, campus merchants, and verified local sellers together in a unified marketplace. Buy essentials, discover student businesses, and order with <strong>Pay on Pickup</strong> simplicity.
              </p>

              {/* Action Buttons */}
              <div className="hero-cta-group">
                <StoreButtons variant="hero" />
                <Link to="/sellers" className="btn btn-secondary btn-outline">
                  <span>Register Storefront</span>
                  <ArrowRight size={16} />
                </Link>
              </div>

              {/* Trust Indicators */}
              <div className="hero-trust-metrics">
                <div className="trust-metric-item">
                  <div className="trust-icon-box">
                    <ShieldCheck size={18} className="text-primary" />
                  </div>
                  <div>
                    <strong>Pay on Pickup</strong>
                    <span>No upfront card charge</span>
                  </div>
                </div>

                <div className="trust-metric-item">
                  <div className="trust-icon-box">
                    <Store size={18} className="text-primary" />
                  </div>
                  <div>
                    <strong>Verified Sellers</strong>
                    <span>Vetted campus inventory</span>
                  </div>
                </div>

                <div className="trust-metric-item">
                  <div className="trust-icon-box">
                    <MapPin size={18} className="text-primary" />
                  </div>
                  <div>
                    <strong>Scheduled Hubs</strong>
                    <span>Fixed central collection</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Interactive Mockup Showcase */}
            <div className="hero-showcase-block">
              <ImageSlider slides={appSlides} label="DefiMart App Interface Showcase" />
            </div>
          </div>
        </div>
      </FadeInSection>

      {/* Core Value Pillars Section */}
      <FadeInSection as="section" className="pillars-section" direction="up">
        <div className="container-main">
          <div className="section-head-clean">
            <span className="section-sub-label">Why DefiMart Works</span>
            <h2>Engineered for real campus life</h2>
            <p>Traditional e-commerce is too slow and high-friction for university students. DefiMart fixes local commerce from the ground up.</p>
          </div>

          <div className="pillars-grid">
            {pillars.map((item, idx) => {
              const Icon = item.icon;
              return (
                <div key={item.title} className={`pillar-card stagger-item-${(idx % 4) + 1}`}>
                  <div className="pillar-header">
                    <div className="pillar-icon-box">
                      <Icon size={22} />
                    </div>
                    <span className="pillar-meta-badge">{item.badge}</span>
                  </div>
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </FadeInSection>

      {/* Dual Perspective: For Buyers vs For Sellers */}
      <FadeInSection as="section" className="personas-section" direction="up">
        <div className="container-main">
          <div className="personas-box">
            <div className="personas-nav-bar">
              <span className="personas-eyebrow">Explore Experiences:</span>
              <div className="personas-switch">
                <button
                  type="button"
                  className={`switch-tab ${activeTab === 'buyers' ? 'is-active' : ''}`}
                  onClick={() => setActiveTab('buyers')}
                >
                  <ShoppingBag size={16} />
                  <span>For Students & Shoppers</span>
                </button>
                <button
                  type="button"
                  className={`switch-tab ${activeTab === 'sellers' ? 'is-active' : ''}`}
                  onClick={() => setActiveTab('sellers')}
                >
                  <Store size={16} />
                  <span>For Vendors & Creators</span>
                </button>
              </div>
            </div>

            <div className="persona-content-display">
              {activeTab === 'buyers' ? (
                <div className="persona-grid-row">
                  <div className="persona-text-content">
                    <span className="badge-quiet">Campus Shopper</span>
                    <h3>Get exactly what you need without courier delays or scams.</h3>
                    <p>
                      Stop relying on messy WhatsApp status reposts or unverified sellers. DefiMart brings everything together in an organized app where items are cataloged with photos, specifications, vendor reviews, and clear pickup points.
                    </p>
                    <ul className="persona-bullets">
                      <li>
                        <Check size={16} className="text-primary" />
                        <span>Search campus inventories by category or merchant</span>
                      </li>
                      <li>
                        <Check size={16} className="text-primary" />
                        <span>Reserve items without online card details</span>
                      </li>
                      <li>
                        <Check size={16} className="text-primary" />
                        <span>Pay in person after touching and verifying your goods</span>
                      </li>
                    </ul>
                    <div className="persona-actions">
                      <GetAppDropdown label="Get the App" variant="primary" align="left" direction="up" />
                      <Link to="/about" className="btn btn-outline">
                        About DefiMart
                      </Link>
                    </div>
                  </div>
                  <div className="persona-stat-card">
                    <div className="stat-card-badge">Zero Online Payment Risk</div>
                    <div className="stat-number">100%</div>
                    <div className="stat-title">Pay on Pickup Verification</div>
                    <p className="stat-caption">
                      You are in complete control of your finances. Cash or Mobile Money is released only when the product is in your hands.
                    </p>
                  </div>
                </div>
              ) : (
                <div className="persona-grid-row">
                  <div className="persona-text-content">
                    <span className="badge-quiet">Campus Merchant</span>
                    <h3>Turn your university network into a reliable business.</h3>
                    <p>
                      Whether you bake, sell thrift fashion, provide tech repairs, or distribute study supplies, DefiMart gives your business a professional storefront, centralized order tracking, and predictable pickup logistics.
                    </p>
                    <ul className="persona-bullets">
                      <li>
                        <Check size={16} className="text-primary" />
                        <span>Your dedicated shop link and branded catalog</span>
                      </li>
                      <li>
                        <Check size={16} className="text-primary" />
                        <span>Manage incoming orders without WhatsApp chat confusion</span>
                      </li>
                      <li>
                        <Check size={16} className="text-primary" />
                        <span>Receive payments directly during handoff without platform delays</span>
                      </li>
                    </ul>
                    <div className="persona-actions">
                      <Link to="/sellers" className="btn btn-primary">
                        Become a DefiMart Seller
                      </Link>
                      <Link to="/policies/seller-policy" className="btn btn-outline">
                        Seller Standards
                      </Link>
                    </div>
                  </div>
                  <div className="persona-stat-card bg-warm">
                    <div className="stat-card-badge">Centralized Operations</div>
                    <div className="stat-number">0 GHS</div>
                    <div className="stat-title">Upfront Store Setup Cost</div>
                    <p className="stat-caption">
                      Apply, get vetted, list products, and reach fellow students seamlessly across scheduled delivery windows.
                    </p>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </FadeInSection>

      {/* Policies & Transparency Strip */}
      <FadeInSection as="section" className="transparency-section" direction="up">
        <div className="container-main">
          <div className="transparency-banner">
            <div className="transparency-copy">
              <span className="section-sub-label">Built On Trust</span>
              <h3>Clear policies. Zero surprises.</h3>
              <p>We believe local digital commerce only thrives when rules are fair, published, and strictly enforced.</p>
            </div>
            <div className="transparency-cards-row">
              <Link to="/policies/terms" className="transparency-tile stagger-item-1">
                <strong>Terms of Service</strong>
                <span>Marketplace contracts & rights →</span>
              </Link>
              <Link to="/policies/privacy" className="transparency-tile stagger-item-2">
                <strong>Privacy Policy</strong>
                <span>Student data protection →</span>
              </Link>
              <Link to="/policies/buyer-policy" className="transparency-tile stagger-item-3">
                <strong>Buyer Protection</strong>
                <span>Pay on Pickup rules →</span>
              </Link>
              <Link to="/policies/seller-policy" className="transparency-tile stagger-item-4">
                <strong>Seller Guidelines</strong>
                <span>Verification & standards →</span>
              </Link>
            </div>
          </div>
        </div>
      </FadeInSection>

      {/* Frequently Asked Questions */}
      <FadeInSection as="section" className="faq-section-clean" direction="up">
        <div className="container-main narrow-container">
          <div className="section-head-clean">
            <span className="section-sub-label">Clear Answers</span>
            <h2>Frequently Asked Questions</h2>
            <p>Everything you need to know about navigating DefiMart as a customer or vendor.</p>
          </div>

          <div className="faq-list-clean">
            {homeFaq.map((item, idx) => (
              <FAQItem 
                key={item.question} 
                question={item.question} 
                answer={item.answer} 
                defaultOpen={idx === 0}
              />
            ))}
          </div>

          <div className="faq-footer-action">
            <span>Have questions not listed here?</span>
            <Link to="/faq" className="link-with-arrow">
              <span>Visit full knowledge base</span>
              <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </FadeInSection>

      {/* Final Callout Section */}
      <FadeInSection as="section" className="final-hero-banner" direction="up">
        <div className="container-main">
          <div className="final-banner-inner">
            <div className="banner-glow-decoration" />
            <div className="banner-content">
              <span className="banner-eyebrow">Available Now On Android & iOS</span>
              <h2>Experience the new standard in student commerce.</h2>
              <p>
                Join thousands of students and trusted sellers today. Download the DefiMart app to start exploring campus storefronts right away.
              </p>
              <div className="banner-buttons">
                <StoreButtons variant="footer" />
              </div>
            </div>
          </div>
        </div>
      </FadeInSection>
    </div>
  );
}
