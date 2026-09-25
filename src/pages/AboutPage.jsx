import SEO from '../components/SEO';
import FadeInSection from '../components/FadeInSection';
import { ShieldCheck, Heart, Target, Sparkles, Store, Users, MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';

const values = [
  {
    icon: ShieldCheck,
    title: 'Zero-Risk Integrity',
    desc: 'By pioneering Pay on Pickup on campus, we remove the fear of being scammed online. You always touch and approve what you paid for.'
  },
  {
    icon: Users,
    title: 'Community Empowerment',
    desc: 'University campuses are thriving micro-economies. We give student founders real tools to build independent, profitable ventures.'
  },
  {
    icon: Target,
    title: 'Extreme Simplicity',
    desc: 'No confusing checkout barriers, no surprise fees, and no unnecessary registration steps. Find what you need, order, and pick up.'
  }
];

export default function AboutPage() {
  return (
    <div className="inner-page-layout">
      <SEO 
        title="About DefiMart | Student-First Campus Marketplace" 
        description="Learn how DefiMart is empowering campus commerce through transparency, Pay on Pickup safety, and student entrepreneurship."
      />

      <FadeInSection as="section" className="inner-hero-minimal" direction="up">
        <div className="container-main narrow-container">
          <span className="inner-kicker">Our Mission & Story</span>
          <h1>Building Trust Into Everyday Campus Commerce.</h1>
          <p className="inner-subtitle">
            DefiMart was founded to solve a ubiquitous problem: buying and selling on university campuses has traditionally been chaotic, unverified, and prone to payment fraud.
          </p>
        </div>
      </FadeInSection>

      <FadeInSection as="section" className="inner-content-section" direction="up">
        <div className="container-main narrow-container">
          <div className="about-prose-block">
            <h2>The Challenge We Set Out To Fix</h2>
            <p>
              University students are some of the most dynamic creators, cooks, curators, and shoppers in the country. Yet, most campus transactions happen in unstructured WhatsApp groups, messy Telegram chats, or random social media reposts.
            </p>
            <p>
              Buyers face delivery delays, mismatched items, and the anxiety of paying upfront before seeing what they ordered. Meanwhile, student sellers spend hours fielding identical questions instead of growing their business.
            </p>
            
            <div className="quote-callout">
              <p>
                "We set out to create a marketplace designed explicitly around how students live, commute, and trade on campus."
              </p>
            </div>

            <h2>How DefiMart Changes The Game</h2>
            <p>
              DefiMart introduces structured order tracking, verified vendor profiles, transparent schedules, and the <strong>Pay on Pickup</strong> guarantee. By aligning order handoffs with weekly campus routines, we make buying as natural and stress-free as meeting a friend between lectures.
            </p>
          </div>

          <div className="values-grid-clean">
            {values.map((v, idx) => {
              const Icon = v.icon;
              return (
                <div key={v.title} className={`value-item-card stagger-item-${(idx % 3) + 1}`}>
                  <div className="value-icon-box">
                    <Icon size={22} />
                  </div>
                  <h3>{v.title}</h3>
                  <p>{v.desc}</p>
                </div>
              );
            })}
          </div>

          <div className="about-cta-footer">
            <div>
              <h3>Ready to join the DefiMart community?</h3>
              <p>Explore verified campus stores or launch your own storefront today.</p>
            </div>
            <div className="about-cta-actions">
              <Link to="/sellers" className="btn btn-primary">
                Become a Seller
              </Link>
              <Link to="/how-it-works" className="btn btn-outline">
                How It Works
              </Link>
            </div>
          </div>
        </div>
      </FadeInSection>
    </div>
  );
}
