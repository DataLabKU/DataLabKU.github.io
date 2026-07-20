import { brandAssets } from '../data/brandAssets';

export default function BrandLogo({ variant = 'nav' }) {
  return (
    <span className={`brand-logo-wrap brand-logo-wrap--${variant}`}>
      <img
        src={brandAssets.logo}
        alt={brandAssets.logoAlt}
        className="brand-logo"
        width="250"
        height="250"
        decoding="async"
        loading="eager"
      />
    </span>
  );
}
