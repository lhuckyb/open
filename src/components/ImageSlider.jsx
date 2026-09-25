import { useState, useCallback, useEffect, useRef } from 'react';
import { ChevronLeft, ChevronRight, Check, PackageCheck } from 'lucide-react';

const AUTOPLAY_DELAY = 6000;

export default function ImageSlider({ slides, label = 'DefiMart App Interface' }) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [activeMockPage, setActiveMockPage] = useState('shop');
  const touchStartX = useRef(null);
  const total = slides.length;

  const goTo = useCallback(
    (index) => {
      setActiveIndex(((index % total) + total) % total);
    },
    [total]
  );

  const goNext = useCallback(() => goTo(activeIndex + 1), [activeIndex, goTo]);
  const goPrev = useCallback(() => goTo(activeIndex - 1), [activeIndex, goTo]);

  useEffect(() => {
    if (total <= 1) return undefined;
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    if (mediaQuery.matches) return undefined;

    const timer = window.setInterval(() => {
      setActiveIndex((current) => (current + 1) % total);
    }, AUTOPLAY_DELAY);

    return () => window.clearInterval(timer);
  }, [total, activeIndex]);

  const handleKeyDown = (e) => {
    if (e.key === 'ArrowRight') {
      e.preventDefault();
      goNext();
    }
    if (e.key === 'ArrowLeft') {
      e.preventDefault();
      goPrev();
    }
  };

  const handleTouchStart = (e) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e) => {
    if (touchStartX.current === null) return;
    const delta = e.changedTouches[0].clientX - touchStartX.current;
    touchStartX.current = null;
    if (Math.abs(delta) < 40) return;
    if (delta < 0) {
      goNext();
    } else {
      goPrev();
    }
  };

  const activeSlide = slides[activeIndex];

  return (
    <div
      className="app-showcase-container"
      role="region"
      aria-roledescription="carousel"
      aria-label={label}
      tabIndex={0}
      onKeyDown={handleKeyDown}
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
    >
      {/* Feature Selector Tabs (Clean text-only tabs without numbering) */}
      <div className="showcase-tab-bar" role="tablist" aria-label="Feature screens">
        {slides.map((s, idx) => (
          <button
            key={s.id || s.title}
            type="button"
            role="tab"
            aria-selected={idx === activeIndex}
            className={`showcase-tab-item ${idx === activeIndex ? 'is-active' : ''}`}
            onClick={() => goTo(idx)}
          >
            <span className="tab-title">{s.tabLabel || s.title.split(' ')[0]}</span>
          </button>
        ))}
      </div>

      <div className="showcase-card-layout">
        {/* Screenshot Viewport */}
        <div className="showcase-device-wrap">
          <div className="showcase-phone-bezel">
            {/* Camera / Speaker Notch */}
            <div className="phone-bezel-notch">
              <span className="notch-pill" />
            </div>

            <div className="phone-screen-viewport">
              {slides.map((slide, index) => (
                <div
                  key={slide.id || slide.image}
                  className={`phone-screen-item ${index === activeIndex ? 'is-active' : ''}`}
                  aria-hidden={index !== activeIndex}
                >
                  <div className="mock-app-screen">
                    {/* Simulated Status Bar */}
                    <div className="mock-status-bar">
                      <span className="mock-time">9:41</span>
                      <div className="mock-status-icons">
                        <span className="mock-net">5G</span>
                        <span className="mock-battery" />
                      </div>
                    </div>

                    {/* DefiMart Mini In-App Header */}
                    <div className="mock-app-header">
                      <div className="mock-brand-badge">
                        <span className="mock-logo-dot" />
                        <span className="mock-brand-name">DefiMart</span>
                      </div>
                    </div>

                    {activeMockPage === 'shop' ? (
                      <>
                        <div className="mock-page-heading">
                          <strong>Popular near you</strong>
                          <span>Fresh picks</span>
                        </div>
                        <div className="mock-photo-container">
                          <img
                            src={slide.image}
                            alt={slide.alt}
                            loading={index === 0 ? 'eager' : 'lazy'}
                            className="phone-screenshot-img"
                            referrerPolicy="no-referrer"
                          />
                        </div>
                        <div className="mock-listing-card">
                          <div className="mock-card-top">
                            <span className="mock-price">{slide.price}</span>
                            <span className="mock-trust-badge">Pay on Pickup</span>
                          </div>
                          <div className="mock-item-title">{slide.itemTitle}</div>
                          <div className="mock-vendor-row">{slide.vendorName}</div>
                          <div className="mock-location-row">
                            <span className="mock-loc-icon">📍</span>
                            <span>{slide.locationTag}</span>
                          </div>
                        </div>
                      </>
                    ) : activeMockPage === 'explore' ? (
                      <div className="mock-explore-panel">
                        <div className="mock-page-heading mock-explore-heading">
                          <strong>Discover campus life</strong>
                          <span>Explore</span>
                        </div>
                        <div className="mock-search-box">
                          <span>⌕</span>
                          <span>Search products, sellers...</span>
                        </div>
                        <div className="mock-filter-row">
                          <span className="is-selected">For you</span>
                          <span>Nearby</span>
                          <span>Top rated</span>
                        </div>
                        <div className="mock-featured-explore">
                          <img src={slide.image} alt="" />
                          <div>
                            <strong>{slide.itemTitle}</strong>
                            <span>{slide.vendorName}</span>
                            <b>{slide.price}</b>
                          </div>
                        </div>
                        <div className="mock-explore-row">
                          <span className="mock-explore-dot orange" />
                          <div><strong>Student essentials</strong><span>124 listings nearby</span></div>
                          <span>›</span>
                        </div>
                        <div className="mock-explore-row">
                          <span className="mock-explore-dot teal" />
                          <div><strong>Campus creators</strong><span>48 trusted sellers</span></div>
                          <span>›</span>
                        </div>
                      </div>
                    ) : activeMockPage === 'orders' ? (
                      <div className="mock-page-panel">
                        <div className="mock-page-heading">
                          <strong>Your orders</strong>
                          <span>Ready when you are</span>
                        </div>
                        <div className="mock-order-card">
                          <div className="mock-order-icon"><PackageCheck size={15} /></div>
                          <div>
                            <strong>{slide.itemTitle}</strong>
                            <span>Ready for pickup</span>
                          </div>
                          <span className="mock-order-status">Active</span>
                        </div>
                        <div className="mock-order-steps">
                          <span className="is-complete" />
                          <span className="is-complete" />
                          <span />
                        </div>
                        <p className="mock-page-note">Show this screen when you arrive at the handoff point.</p>
                      </div>
                    ) : (
                      <div className="mock-page-panel">
                        <div className="mock-account-avatar">D</div>
                        <div className="mock-page-heading mock-account-heading">
                          <strong>Welcome back</strong>
                          <span>Student account</span>
                        </div>
                        <div className="mock-account-stat-row">
                          <div><strong>12</strong><span>Orders</span></div>
                          <div><strong>4.9</strong><span>Seller rating</span></div>
                          <div><strong>GH₵ 240</strong><span>Saved</span></div>
                        </div>
                        <div className="mock-account-link">Manage your account <span>→</span></div>
                      </div>
                    )}

                    {/* Mini Bottom Nav */}
                    <div className="mock-bottom-nav">
                      {['shop', 'explore', 'orders', 'account'].map((page) => (
                        <button
                          key={page}
                          type="button"
                          className={`mock-nav-item ${activeMockPage === page ? 'active' : ''}`}
                          aria-label={`Open ${page} page`}
                          aria-pressed={activeMockPage === page}
                          onClick={() => setActiveMockPage(page)}
                        >
                          {page.charAt(0).toUpperCase() + page.slice(1)}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Slide Info & Controls */}
        <div className="showcase-info-panel">
          <div className="showcase-badge-row">
            <span className="feature-step-chip">{activeSlide.category || 'Campus Marketplace'}</span>
          </div>

          <h3 className="showcase-item-title">{activeSlide.title}</h3>
          <p className="showcase-item-desc">{activeSlide.description}</p>

          <ul className="showcase-bullet-points">
            {activeSlide.points.map((point) => (
              <li key={point} className="showcase-point-item">
                <span className="point-icon-badge">
                  <Check size={12} strokeWidth={3} />
                </span>
                <span>{point}</span>
              </li>
            ))}
          </ul>

          {/* Controls: Prev/Next and Pagination Dots */}
          <div className="showcase-nav-footer">
            <div className="showcase-dots" role="tablist" aria-label="Slide dots">
              {slides.map((_, idx) => (
                <button
                  key={idx}
                  type="button"
                  aria-label={`Slide ${idx + 1}`}
                  className={`showcase-dot-btn ${idx === activeIndex ? 'active' : ''}`}
                  onClick={() => goTo(idx)}
                />
              ))}
            </div>

            <div className="showcase-arrow-group">
              <button
                type="button"
                className="showcase-arrow"
                onClick={goPrev}
                aria-label="Previous screen"
              >
                <ChevronLeft size={18} />
              </button>
              <button
                type="button"
                className="showcase-arrow"
                onClick={goNext}
                aria-label="Next screen"
              >
                <ChevronRight size={18} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
