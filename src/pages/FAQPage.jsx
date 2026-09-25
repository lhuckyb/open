import { useState, useMemo } from 'react';
import SectionHeader from '../components/SectionHeader';
import FAQItem from '../components/FAQItem';
import FadeInSection from '../components/FadeInSection';
import SEO from '../components/SEO';
import { faqData, siteConfig } from '../siteConfig';
import { Search, HelpCircle, Mail, MessageSquare, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const categories = ['All', ...new Set(faqData.map((item) => item.category))];

export default function FAQPage() {
  const [activeCategory, setActiveCategory] = useState('All');
  const [query, setQuery] = useState('');

  const filteredFaq = useMemo(() => {
    const value = query.trim().toLowerCase();

    return faqData.filter((item) => {
      const matchesCategory = activeCategory === 'All' || item.category === activeCategory;
      const matchesSearch = !value || `${item.question} ${item.answer}`.toLowerCase().includes(value);
      return matchesCategory && matchesSearch;
    });
  }, [activeCategory, query]);

  return (
    <div className="inner-page-layout">
      <SEO 
        title="Knowledge Base & FAQ | DefiMart" 
        description="Comprehensive answers about DefiMart, Pay on Pickup, order schedules, and seller standards."
      />

      <FadeInSection as="section" className="inner-hero-minimal" direction="up">
        <div className="container-main narrow-container">
          <span className="inner-kicker">Knowledge Base</span>
          <h1>Frequently Asked Questions</h1>
          <p className="inner-subtitle">
            Everything you need to know about navigating the DefiMart ecosystem as a buyer, seller, or partner.
          </p>

          {/* Search bar */}
          <div className="faq-search-wrapper">
            <Search size={18} className="search-icon" />
            <input
              type="search"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search topics (e.g., payment, pickup, seller, returns)..."
              aria-label="Search FAQs"
              className="faq-search-input"
            />
            {query && (
              <button 
                type="button" 
                className="search-clear-btn" 
                onClick={() => setQuery('')}
              >
                Clear
              </button>
            )}
          </div>
        </div>
      </FadeInSection>

      <FadeInSection as="section" className="inner-content-section" direction="up">
        <div className="container-main narrow-container">
          {/* Segmented Filter Bar */}
          <div className="category-segmented-bar" role="tablist" aria-label="FAQ categories">
            {categories.map((cat) => (
              <button
                key={cat}
                type="button"
                role="tab"
                aria-selected={activeCategory === cat}
                className={`segmented-tab-btn ${activeCategory === cat ? 'active' : ''}`}
                onClick={() => setActiveCategory(cat)}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* FAQs List */}
          <div className="faq-list-clean">
            {filteredFaq.length > 0 ? (
              filteredFaq.map((item, index) => (
                <FAQItem
                  key={item.question}
                  question={item.question}
                  answer={item.answer}
                  defaultOpen={index === 0 && !query}
                />
              ))
            ) : (
              <div className="empty-search-state">
                <HelpCircle size={36} className="text-muted" />
                <h3>No matching answers found</h3>
                <p>Try searching for a different keyword or view all categories.</p>
                <button
                  type="button"
                  className="btn btn-secondary btn-sm"
                  onClick={() => {
                    setQuery('');
                    setActiveCategory('All');
                  }}
                >
                  Reset filters
                </button>
              </div>
            )}
          </div>

          {/* Still Need Help Box */}
          <div className="help-contact-card">
            <div className="help-card-copy">
              <h3>Still have questions?</h3>
              <p>Our campus support team is on standby to help you with orders, vendor approvals, or feedback.</p>
            </div>
            <Link to="/contact" className="btn btn-primary">
              <MessageSquare size={16} />
              <span>Contact Support</span>
            </Link>
          </div>
        </div>
      </FadeInSection>
    </div>
  );
}
