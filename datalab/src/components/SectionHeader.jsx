import FadeIn from './FadeIn';

export default function SectionHeader({ label, title, description }) {
  return (
    <FadeIn>
      <span className="section-label">{label}</span>
      <h2 className="section-title">{title}</h2>
      {description && <p className="section-desc">{description}</p>}
    </FadeIn>
  );
}
