import SectionHeader from './SectionHeader';
import { partners } from '../data/content';

const SECONDS_PER_LOGO = 5;
const MIN_LOGOS_PER_HALF = 8;

function buildMarqueeTrack(items) {
  const count = items.length;
  const logosPerHalf = Math.max(count * 2, MIN_LOGOS_PER_HALF);
  const repeats = Math.ceil(logosPerHalf / count);
  const halfTrack = Array.from({ length: repeats }, () => items).flat();

  return {
    track: [...halfTrack, ...halfTrack],
    duration: halfTrack.length * SECONDS_PER_LOGO,
  };
}

function PartnerLogo({ partner }) {
  const img = (
    <img src={partner.logo} alt={partner.name} loading="lazy" decoding="async" />
  );

  const content = (
    <>
      <span className="partners-logo-img">{img}</span>
      <span className="partners-logo-name">{partner.name}</span>
    </>
  );

  if (partner.href) {
    return (
      <a
        href={partner.href}
        className="partners-logo"
        target="_blank"
        rel="noopener noreferrer"
        aria-label={partner.name}
      >
        {content}
      </a>
    );
  }

  return <div className="partners-logo">{content}</div>;
}

export default function Partners() {
  if (partners.length === 0) {
    return (
      <section id="partners">
        <SectionHeader
          label="Collaborations"
          title="Partners & Sponsors"
          description="Our research is supported by institutional partners and sponsors."
        />
      </section>
    );
  }

  const { track, duration } = buildMarqueeTrack(partners);

  return (
    <section id="partners">
      <SectionHeader
        label="Collaborations"
        title="Partners & Sponsors"
        description="Organizations that support and collaborate with DATA Lab."
      />
      <div className="partners-showcase">
        <div className="partners-marquee" aria-label="Partner and sponsor logos">
          <div
            className="partners-track"
            style={{ '--partners-duration': `${duration}s` }}
          >
            {track.map((partner, index) => (
              <PartnerLogo key={`${partner.name}-${index}`} partner={partner} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
