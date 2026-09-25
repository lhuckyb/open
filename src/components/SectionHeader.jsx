export default function SectionHeader({ eyebrow, title, text, children, align = 'left' }) {
  return (
    <div className={`section-header ${align === 'center' ? 'centered' : ''}`}>
      {eyebrow ? <span className="eyebrow">{eyebrow}</span> : null}
      <h2>{title}</h2>
      {text ? <p>{text}</p> : null}
      {children}
    </div>
  );
}

