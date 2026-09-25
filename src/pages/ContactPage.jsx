import SEO from '../components/SEO';
import FadeInSection from '../components/FadeInSection';
import { siteConfig } from '../siteConfig';
import { Mail, MessageSquare, MapPin, Phone, ShieldCheck, ArrowRight, Clock } from 'lucide-react';
import { Link } from 'react-router-dom';

const channels = [
  {
    icon: Mail,
    title: 'General Inquiries',
    email: siteConfig.contact.general,
    desc: 'For overall platform questions, community suggestions, and press inquiries.'
  },
  {
    icon: ShieldCheck,
    title: 'Seller Onboarding',
    email: siteConfig.contact.seller,
    desc: 'Dedicated channel for prospective vendors, campus shops, and catalog verification.'
  },
  {
    icon: MessageSquare,
    title: 'Customer Support',
    email: siteConfig.contact.support,
    desc: 'Order tracking assistance, pickup queries, or dispute resolution.'
  },
  {
    icon: Clock,
    title: 'Partnerships & Campuses',
    email: siteConfig.contact.partnerships,
    desc: 'University student representative councils, student brand ambassador programs, and sponsor inquiries.'
  },
];

export default function ContactPage() {
  return (
    <div className="inner-page-layout">
      <SEO 
        title="Contact & Support | DefiMart" 
        description="Reach out to the DefiMart team for customer assistance, vendor onboarding, or campus collaborations."
      />

      <FadeInSection as="section" className="inner-hero-minimal" direction="up">
        <div className="container-main narrow-container">
          <span className="inner-kicker">Direct Assistance</span>
          <h1>Get In Touch With DefiMart</h1>
          <p className="inner-subtitle">
            Have a question, need assistance with an order, or looking to register your store? We are here to help.
          </p>
        </div>
      </FadeInSection>

      <FadeInSection as="section" className="inner-content-section" direction="up">
        <div className="container-main">
          <div className="contact-grid-modern">
            {channels.map((c, idx) => {
              const Icon = c.icon;
              return (
                <div key={c.title} className={`contact-card-modern stagger-item-${(idx % 4) + 1}`}>
                  <div className="contact-card-icon-box">
                    <Icon size={22} />
                  </div>
                  <h3>{c.title}</h3>
                  <p>{c.desc}</p>
                  <a href={`mailto:${c.email}`} className="contact-email-link">
                    <span>{c.email}</span>
                    <ArrowRight size={14} />
                  </a>
                </div>
              );
            })}
            <div className="contact-card-modern stagger-item-1">
              <div className="contact-card-icon-box">
                <Phone size={22} />
              </div>
              <h3>WhatsApp Support</h3>
              <p>Message our team directly for quick questions, vendor support, and onboarding assistance.</p>
              <a
                href={siteConfig.whatsappUrl}
                className="contact-email-link"
                target="_blank"
                rel="noreferrer"
              >
                <span>+233 597 204 494</span>
                <ArrowRight size={14} />
              </a>
            </div>
          </div>

          <div className="contact-dispatch-box">
            <div className="dispatch-header">
              <h3>Operating & Response Hours</h3>
              <p>
                Our team monitors incoming messages Monday through Saturday from 8:00 AM to 8:00 PM GMT. Typical response time is under 4 hours for order-related issues.
              </p>
            </div>
            <div className="dispatch-action-strip">
              <span>Looking for quick answers?</span>
              <Link to="/faq" className="btn btn-secondary btn-sm">
                Explore FAQs
              </Link>
            </div>
          </div>
        </div>
      </FadeInSection>
    </div>
  );
}
