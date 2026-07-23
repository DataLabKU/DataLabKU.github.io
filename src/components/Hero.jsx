import FadeIn from './FadeIn';
import HeroVisualization from './HeroVisualization';

export default function Hero() {
  return (
    <section id="hero">
      <div className="hero-grid-bg" />
      <div className="hero-glow" />
      <FadeIn className="hero-content">
        <div className="hero-tag">
          <span className="dot" />
          Kuwait University · CS Dept.
        </div>
        <h1>
          Advancing <span className="gradient-text">AI &amp; Data</span> Science Research
        </h1>
        <p className="hero-subtitle">
          We build intelligent systems at the intersection of hypergraph learning, mental health AI, graph learning, and NLP driving innovation that matters.
        </p>
        <div className="hero-buttons">
          <a href="#research"><button type="button" className="btn-primary">Our Research</button></a>
          <a href="#contact"><button type="button" className="btn-outline">Join the Lab</button></a>
        </div>
      </FadeIn>
      <FadeIn className="hero-visual">
        <HeroVisualization />
      </FadeIn>
    </section>
  );
}
