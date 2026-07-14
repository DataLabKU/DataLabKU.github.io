import { useCallback, useEffect, useRef, useState } from 'react';
import PersonAvatar from './PersonAvatar';
import './PersonModal.css';

const EXIT_MS = 360;

export default function PersonModal({ person, tier, onClose }) {
  const [phase, setPhase] = useState('enter');
  const closingRef = useRef(false);

  const handleClose = useCallback(() => {
    if (closingRef.current) return;
    closingRef.current = true;
    setPhase('exit');
    window.setTimeout(onClose, EXIT_MS);
  }, [onClose]);

  useEffect(() => {
    document.body.style.overflow = 'hidden';
    const frame = requestAnimationFrame(() => setPhase('open'));
    return () => {
      cancelAnimationFrame(frame);
      document.body.style.overflow = '';
    };
  }, []);

  useEffect(() => {
    const handleKey = (e) => {
      if (e.key === 'Escape') handleClose();
    };
    window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  }, [handleClose]);

  if (!person?.cv) return null;
  const { cv } = person;

  return (
    <div
      className={`cv-modal-overlay cv-modal-overlay--${phase}`}
      onClick={handleClose}
      role="presentation"
    >
      <div
        className={`cv-modal cv-modal--${phase}`}
        onClick={(e) => e.stopPropagation()}
        role="dialog"
        aria-modal="true"
        aria-labelledby="cv-modal-name"
      >
        <button type="button" className="cv-modal-close" onClick={handleClose} aria-label="Close">
          <i className="ti ti-x" />
        </button>
        <div className="cv-modal-header">
          <PersonAvatar person={person} size="modal" className="cv-modal-avatar" />
          <div>
            <h2 id="cv-modal-name">{person.name}</h2>
            <p className="cv-modal-title">{person.title}</p>
            <span className={`role-badge role-badge--${tier}`}>{person.role}</span>
          </div>
        </div>
        <div className="cv-modal-body">
          <section className="cv-section cv-section--animate">
            <h4><i className="ti ti-user" /> About</h4>
            <p>{cv.bio}</p>
          </section>
          {cv.education?.length > 0 && (
            <section className="cv-section cv-section--animate">
              <h4><i className="ti ti-school" /> Education</h4>
              <ul>{cv.education.map((item) => <li key={item}>{item}</li>)}</ul>
            </section>
          )}
          {cv.research?.length > 0 && (
            <section className="cv-section cv-section--animate">
              <h4><i className="ti ti-microscope" /> Research Interests</h4>
              <ul>{cv.research.map((item) => <li key={item}>{item}</li>)}</ul>
            </section>
          )}
          {cv.highlights?.length > 0 && (
            <section className="cv-section cv-section--animate">
              <h4><i className="ti ti-star" /> Highlights</h4>
              <ul>{cv.highlights.map((item) => <li key={item}>{item}</li>)}</ul>
            </section>
          )}
        </div>
        {(cv.email || cv.linkedin || cv.links?.github || cv.links?.linkedin) && (
          <div className="cv-modal-footer">
            {cv.email && <a href={`mailto:${cv.email}`} className="cv-link"><i className="ti ti-mail" /> {cv.email}</a>}
            {cv.links?.github && <a href={cv.links.github} target="_blank" rel="noopener noreferrer" className="cv-link"><i className="ti ti-brand-github" /> GitHub</a>}
            {(cv.linkedin || cv.links?.linkedin) && (
              <a
                href={cv.linkedin || cv.links.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="cv-link"
              >
                <i className="ti ti-brand-linkedin" /> LinkedIn
              </a>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
