import FadeIn from './FadeIn';
import SectionHeader from './SectionHeader';
import { researchAreas } from '../data/content';

export default function Research() {
  return (
    <section id="research">
      <SectionHeader
        label="What We Do"
        title="Research Areas"
        description="Our lab explores cutting-edge problems across graph learning, NLP, financial intelligence, and large-scale data systems."
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
