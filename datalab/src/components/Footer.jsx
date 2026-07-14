import BrandLogo from './BrandLogo';

export default function Footer() {
  return (
    <footer>
      <div className="footer-grid">
        <div className="footer-brand">
          <div className="footer-brand-lockup">
            <BrandLogo variant="footer" />
          </div>
          <p>
            AI &amp; Data Science Research Laboratory at Kuwait University&apos;s Department of Computer Science. Advancing intelligent systems for real-world impact.
          </p>
        </div>
        <div className="footer-col">
          <h4>Navigation</h4>
          <ul>
            <li><a href="#research">Research</a></li>
            <li><a href="#publications">Publications</a></li>
            <li><a href="#people">People</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#partners">Partners</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </div>
        <div className="footer-col">
          <h4>Connect</h4>
          <ul>
            <li><a href="https://github.com/datalabku" target="_blank" rel="noopener noreferrer">GitHub</a></li>
            <li><a href="https://datalabku.github.io/" target="_blank" rel="noopener noreferrer">Website</a></li>
            <li><a href="mailto:lalkulaib@cs.ku.edu.kw">Email</a></li>
          </ul>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; 2026 DATA Lab, Kuwait University. All rights reserved.</p>
        <div className="social-buttons">
          <a href="https://github.com/datalabku" target="_blank" rel="noopener noreferrer" className="social-btn" aria-label="GitHub">
            <i className="ti ti-brand-github" />
          </a>
          <a href="mailto:lalkulaib@cs.ku.edu.kw" className="social-btn" aria-label="Email">
            <i className="ti ti-mail" />
          </a>
        </div>
      </div>
    </footer>
  );
}
