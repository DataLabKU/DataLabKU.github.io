import FadeIn from './FadeIn';
import SectionHeader from './SectionHeader';
import { researchAreas } from '../data/content';

export default function Research() {
  return (
    <section id="research">
      <SectionHeader
        label="What We Do"
        title="Research Areas"
        description="Our lab puts hypergraph learning and mental health applications first, alongside graph learning, NLP, and financial intelligence."
      />
      <div className="research-grid">
        {researchAreas.map((area) => (
          <FadeIn key={area.num} className="research-card">
            <div className="card-icon"><i className={`ti ${area.icon}`} /></div>
            <div className="card-num">{area.num}</div>
            <h3>{area.title}</h3>
            <p>{area.description}</p>
            <div className="card-accent" />
          </FadeIn>
        ))}
      </div>
    </section>
  );
}
