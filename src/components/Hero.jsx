import FadeIn from './FadeIn';

export default function Hero() {
  return (
    <section id="hero">
      <FadeIn className="hero-content">
        <div className="hero-tag">DATA Lab · Kuwait University</div>
        <h1>
          Research in data, intelligence, and complex systems.
        </h1>
        <p className="hero-subtitle">
          DATA Lab is a research laboratory in Kuwait University&apos;s Department of Computer Science. We study machine learning, graph systems, natural language processing, and applied data science.
        </p>
        <div className="hero-buttons">
          <a href="#research" className="btn-primary">Explore our research <span aria-hidden="true">→</span></a>
          <a href="#people" className="hero-text-link">Meet the lab <span aria-hidden="true">→</span></a>
        </div>
        <ul className="hero-topics" aria-label="Research focus">
          <li>Hypergraph Learning</li>
          <li>Graph Systems</li>
          <li>Arabic NLP</li>
          <li>Behavioral Health</li>
          <li>Financial Intelligence</li>
        </ul>
      </FadeIn>
    </section>
  );
}
