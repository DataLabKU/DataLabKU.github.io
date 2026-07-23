import FadeIn from './FadeIn';
import { aboutFeatures, aboutStats } from '../data/content';

export default function About() {
  return (
    <section id="about">
      <div className="about-glow" />
      <div className="about-grid">
        <FadeIn>
          <span className="section-label">Who We Are</span>
          <h2 className="section-title">Pushing the Frontiers of Intelligent Systems</h2>
          <div className="about-text">
            <p>
              DATA Lab at Kuwait University&apos;s Department of Computer Science is a research group dedicated to advancing artificial intelligence and data science. We develop intelligent systems that put hypergraph learning and mental health applications first, while bridging graph learning, natural language processing, and financial intelligence with scalable, interpretable tools.
            </p>
          </div>
          <div className="about-stats">
            {aboutStats.map((stat) => (
              <div key={stat.label} className="about-stat">
                <div className="about-stat-value">{stat.value}</div>
                <div className="about-stat-label">{stat.label}</div>
              </div>
            ))}
          </div>
        </FadeIn>
        <FadeIn className="about-features">
          {aboutFeatures.map((feature) => (
            <div key={feature.title} className="feature-row">
              <div className="feature-icon"><i className={`ti ${feature.icon}`} /></div>
              <div>
                <h4>{feature.title}</h4>
                <p>{feature.description}</p>
              </div>
            </div>
          ))}
        </FadeIn>
      </div>
    </section>
  );
}
