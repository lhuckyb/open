import { useState } from 'react';
import { ChevronDown } from 'lucide-react';

export default function FAQItem({ question, answer, defaultOpen = false }) {
  const [open, setOpen] = useState(defaultOpen);

  return (
    <div className={`faq-card-modern faq-item ${open ? 'is-open open' : ''}`}>
      <button 
        type="button" 
        className="faq-toggle-btn faq-question" 
        aria-expanded={open} 
        onClick={() => setOpen((value) => !value)}
      >
        <span className="faq-q-title">{question}</span>
        <span className={`faq-toggle-icon faq-icon ${open ? 'rotated is-rotated' : ''}`} aria-hidden="true">
          <ChevronDown size={15} strokeWidth={2.2} />
        </span>
      </button>
      {open ? (
        <div className="faq-collapse-body faq-answer">
          <div className="faq-inner-answer">{answer}</div>
        </div>
      ) : null}
    </div>
  );
}


