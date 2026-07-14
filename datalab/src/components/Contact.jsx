import FadeIn from './FadeIn';
import { contactRows } from '../data/content';

export default function Contact() {
  return (
    <section id="contact" className="section--light">
      <div className="contact-glow" />
      <div className="contact-grid">
        <FadeIn>
          <span className="section-label">Get in Touch</span>
          <h2 className="section-title">Contact</h2>
          <p className="contact-intro">
            Interested in joining DATA Lab or collaborating on research? Reach out to our director or visit us at Kuwait University.
          </p>
          <div className="contact-rows">
            {contactRows.map((row) => (
              <div key={row.text} className="contact-row">
                <div className="contact-icon"><i className={`ti ${row.icon}`} /></div>
                <div className="contact-row-text">
                  {row.href ? (
                    <a
                      href={row.href}
                      {...(row.href.startsWith('http') ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                    >
                      {row.text}
                    </a>
                  ) : row.text}
                </div>
              </div>
            ))}
          </div>
        </FadeIn>
        <FadeIn>
          <div className="map-placeholder">
            <i className="ti ti-map-2" />
            <span>Sabah AlSalem University City, Kuwait</span>
          </div>
          <a
            href="https://maps.google.com/?q=Sabah+AlSalem+University+City+Kuwait"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button type="button" className="btn-primary btn-full">Get Directions</button>
          </a>
        </FadeIn>
      </div>
    </section>
  );
}
