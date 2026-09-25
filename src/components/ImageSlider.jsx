import { useState, useCallback, useEffect, useRef } from 'react';
import { ChevronLeft, ChevronRight, Check } from 'lucide-react';

const AUTOPLAY_DELAY = 6000;

export default function ImageSlider({ slides, label = 'DefiMart App Interface' }) {
  const [activeIndex, setActiveIndex] = useState(0);
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
                      <span className="mock-campus-tag">Legon Hub</span>
                    </div>

                    {/* Authentic Product / Feature Photo */}
                    <div className="mock-photo-container">
                      <img
                        src={slide.image}
                        alt={slide.alt}
                        loading={index === 0 ? 'eager' : 'lazy'}
                        className="phone-screenshot-img"
                        referrerPolicy="no-referrer"
                      />
                      <span className="mock-category-pill">{slide.category}</span>
                    </div>

                    {/* In-App Listing Card */}
                    <div className="mock-listing-card">
                      <div className="mock-card-top">
                        <span className="mock-price">{slide.price}</span>
                        <span className="mock-trust-badge">Pay on Pickup</span>
                      </div>
                      <div className="mock-item-title">{slide.itemTitle}</div>
                      <div className="mock-vendor-row">
                        <span className="mock-vendor-name">{slide.vendorName}</span>
                      </div>
                      <div className="mock-location-row">
                        <span className="mock-loc-icon">📍</span>
                        <span>{slide.locationTag}</span>
                      </div>
                    </div>

                    {/* Mini Bottom Nav */}
                    <div className="mock-bottom-nav">
                      <span className={`mock-nav-item ${index % 2 === 0 ? 'active' : ''}`}>Shop</span>
                      <span className="mock-nav-item">Explore</span>
                      <span className="mock-nav-item">Orders</span>
                      <span className="mock-nav-item">Account</span>
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
