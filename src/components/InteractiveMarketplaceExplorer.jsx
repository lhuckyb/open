import { useState } from 'react';
import { 
  ShoppingBag, 
  MapPin, 
  Search, 
  Sparkles, 
  Star, 
  Heart, 
  ShieldCheck, 
  Check, 
  ArrowRight,
  TrendingUp,
  Tag,
  Clock,
  ChevronRight,
  Store
} from 'lucide-react';
import { siteConfig } from '../siteConfig';
import GetAppDropdown from './GetAppDropdown';

const mockCategories = [
  { id: 'all', label: 'All Items' },
  { id: 'tech', label: 'Campus Tech & Gear' },
  { id: 'food', label: 'Snacks & Bakes' },
  { id: 'fashion', label: 'Thrift & Style' },
  { id: 'services', label: 'Student Services' },
];

const mockItems = [
  {
    id: 1,
    title: 'Anker Soundcore Mini 3 Pro (Black)',
    category: 'tech',
    vendor: 'Kofi Tech Hub (Legon Campus)',
    badge: 'Verified Merchant',
    rating: 4.9,
    reviews: 38,
    price: 'GHS 240',
    originalPrice: 'GHS 290',
    pickup: 'Central Library Pickup · Wed & Sat',
    image: 'https://images.unsplash.com/photo-1545454675-3531b543be5d?auto=format&fit=crop&w=600&q=80',
    tag: 'Popular'
  },
  {
    id: 2,
    title: 'Fresh Homemade Fudgy Brownie Box (6pcs)',
    category: 'food',
    vendor: 'Ama Sweet Bites · Hall 3',
    badge: 'Student Baker',
    rating: 5.0,
    reviews: 84,
    price: 'GHS 65',
    originalPrice: 'GHS 75',
    pickup: 'Hostel Dropoff or Hall 3 Hub',
    image: 'https://images.unsplash.com/photo-1606313564200-e75d5e30476c?auto=format&fit=crop&w=600&q=80',
    tag: 'Fresh Today'
  },
  {
    id: 3,
    title: 'Vintage Oversized Heavyweight Cotton Tee',
    category: 'fashion',
    vendor: 'VibeVault Thrift (Pentagon)',
    badge: 'Verified Merchant',
    rating: 4.8,
    reviews: 29,
    price: 'GHS 110',
    originalPrice: 'GHS 140',
    pickup: 'Pentagon Block B Pickup',
    image: 'https://images.unsplash.com/photo-1521572267360-ee0c2909d518?auto=format&fit=crop&w=600&q=80',
    tag: 'Only 3 left'
  },
  {
    id: 4,
    title: 'MacBook & Windows Software Tune-Up & Formatting',
    category: 'services',
    vendor: 'Kwame Dev & IT Solutions',
    badge: 'Top Rated Pro',
    rating: 4.95,
    reviews: 62,
    price: 'GHS 80',
    originalPrice: 'GHS 120',
    pickup: 'Computer Science Dept / Meetup',
    image: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&w=600&q=80',
    tag: 'Same Day'
  },
  {
    id: 5,
    title: 'DefiMart Official Ergonomic Desk Study Lamp (Rechargeable)',
    category: 'tech',
    vendor: 'DefiMart Official Store',
    badge: 'Official Store',
    rating: 4.9,
    reviews: 142,
    price: 'GHS 95',
    originalPrice: 'GHS 130',
    pickup: 'Guaranteed Central Hub Pickup',
    image: 'https://images.unsplash.com/photo-1507473885765-e6ed057f782c?auto=format&fit=crop&w=600&q=80',
    tag: 'Official'
  },
  {
    id: 6,
    title: 'Natural Shea Body Butter & Citrus Lip Balm Combo',
    category: 'fashion',
    vendor: 'Afia Organic Essentials',
    badge: 'Student Artisan',
    rating: 4.92,
    reviews: 47,
    price: 'GHS 55',
    originalPrice: 'GHS 70',
    pickup: 'Night Market Hub or Direct Pickup',
    image: 'https://images.unsplash.com/photo-1556228720-195a672e8a03?auto=format&fit=crop&w=600&q=80',
    tag: 'Eco-Friendly'
  }
];

export default function InteractiveMarketplaceExplorer() {
  const [activeCategory, setActiveCategory] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedItem, setSelectedItem] = useState(null);

  const filteredItems = mockItems.filter(item => {
    const matchCat = activeCategory === 'all' || item.category === activeCategory;
    const matchSearch = item.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                        item.vendor.toLowerCase().includes(searchTerm.toLowerCase());
    return matchCat && matchSearch;
  });

  return (
    <section className="catalog-preview-section">
      <div className="container-main">
        {/* Header Strip */}
        <div className="catalog-header-bar">
          <div>
            <div className="badge-kicker-glow">
              <Sparkles size={14} />
              <span>Interactive Campus Storefronts</span>
            </div>
            <h2 className="catalog-title">Explore what is currently active in the community</h2>
            <p className="catalog-subtitle">
              Live listings posted by approved student merchants and the DefiMart Official Store. Filter and preview how orders work.
            </p>
          </div>

          <div className="catalog-hub-status">
            <div className="live-hub-badge">
              <span className="live-indicator-dot" />
              <span>Next Campus Pickup Day: <strong>Wednesday & Saturday</strong></span>
            </div>
          </div>
        </div>

        {/* Filter & Search Bar */}
        <div className="catalog-controls-strip">
          <div className="catalog-categories-list" role="tablist">
            {mockCategories.map((c) => (
              <button
                key={c.id}
                type="button"
                role="tab"
                aria-selected={activeCategory === c.id}
                className={`category-pill-btn ${activeCategory === c.id ? 'active' : ''}`}
                onClick={() => setActiveCategory(c.id)}
              >
                {c.label}
              </button>
            ))}
          </div>

          <div className="catalog-search-box">
            <Search size={16} className="text-muted" />
            <input
              type="text"
              placeholder="Search gear, brownies, thrift, services..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="catalog-search-input"
            />
          </div>
        </div>

        {/* Product Cards Grid */}
        <div className="catalog-cards-grid">
          {filteredItems.map((item) => (
            <div 
              key={item.id} 
              className="catalog-card"
              onClick={() => setSelectedItem(item)}
            >
              <div className="catalog-card-media">
                <img src={item.image} alt={item.title} loading="lazy" />
                <span className="catalog-floating-tag">{item.tag}</span>
                <div className="catalog-badge-vendor">
                  <ShieldCheck size={13} className="text-primary" />
                  <span>{item.badge}</span>
                </div>
              </div>

              <div className="catalog-card-body">
                <div className="catalog-vendor-row">
                  <span className="catalog-vendor-name">{item.vendor}</span>
                  <span className="catalog-rating">
                    <Star size={13} className="fill-amber-400 text-amber-400" />
                    <strong>{item.rating}</strong> ({item.reviews})
                  </span>
                </div>

                <h3 className="catalog-item-title">{item.title}</h3>

                <div className="catalog-pickup-info">
                  <MapPin size={14} className="text-primary flex-shrink-0" />
                  <span>{item.pickup}</span>
                </div>

                <div className="catalog-card-footer">
                  <div className="catalog-price-wrap">
                    <span className="catalog-price">{item.price}</span>
                    <span className="catalog-original-price">{item.originalPrice}</span>
                  </div>
                  <button
                    type="button"
                    className="catalog-reserve-btn"
                    onClick={(e) => {
                      e.stopPropagation();
                      setSelectedItem(item);
                    }}
                  >
                    <span>Inspect</span>
                    <ChevronRight size={15} />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Explorer Action */}
        <div className="catalog-footer-callout">
          <div className="footer-callout-info">
            <Store size={22} className="text-primary" />
            <div>
              <strong>Are you a student seller or campus business?</strong>
              <span>List your products in this directory and reach over 2,500 active campus shoppers.</span>
            </div>
          </div>
          <GetAppDropdown label="Open in DefiMart App" variant="primary" align="right" />
        </div>
      </div>

      {/* Item Modal Preview (Demonstrates Pay on Pickup simulation) */}
      {selectedItem && (
        <div className="catalog-modal-overlay" onClick={() => setSelectedItem(null)}>
          <div className="catalog-modal-card" onClick={(e) => e.stopPropagation()}>
            <div className="modal-header">
              <div className="modal-vendor-bar">
                <ShieldCheck size={18} className="text-primary" />
                <span>Verified Seller: <strong>{selectedItem.vendor}</strong></span>
              </div>
              <button 
                type="button" 
                className="modal-close-btn"
                onClick={() => setSelectedItem(null)}
              >
                ✕
              </button>
            </div>

            <div className="modal-body-split">
              <div className="modal-media-col">
                <img src={selectedItem.image} alt={selectedItem.title} />
              </div>
              <div className="modal-info-col">
                <span className="modal-category-tag">{selectedItem.category.toUpperCase()}</span>
                <h2>{selectedItem.title}</h2>
                <div className="modal-price-strip">
                  <span className="modal-main-price">{selectedItem.price}</span>
                  <span className="modal-discount-tag">Save 15-20% off campus retail</span>
                </div>

                <div className="modal-protection-box">
                  <div className="protection-title">
                    <ShieldCheck size={18} className="text-primary" />
                    <strong>Pay on Pickup Protection Guarantee</strong>
                  </div>
                  <p>
                    You pay <strong>GHS 0.00 online</strong>. Reserve this item in the DefiMart app, inspect it at <strong>{selectedItem.pickup}</strong>, and hand over cash or Mobile Money only after you are 100% satisfied.
                  </p>
                </div>

                <div className="modal-action-row">
                  <GetAppDropdown 
                    label="Reserve in DefiMart App" 
                    variant="primary" 
                    align="center"
                    className="btn-block"
                    containerClassName="btn-block"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
