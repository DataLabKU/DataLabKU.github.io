export default function HeroVisualization() {
  return (
    <svg viewBox="0 0 400 330" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <defs>
        <linearGradient id="mainGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#FFFFFF" />
          <stop offset="50%" stopColor="rgba(255,255,255,0.85)" />
          <stop offset="100%" stopColor="rgba(255,255,255,0.65)" />
        </linearGradient>
        <filter id="glow" x="-50%" y="-50%" width="200%" height="200%">
          <feGaussianBlur stdDeviation="4" result="blur" />
          <feMerge>
            <feMergeNode in="blur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>

      <ellipse cx="200" cy="165" rx="150" ry="90" stroke="#FFFFFF" strokeWidth="1" strokeDasharray="6 4" fill="rgba(255,255,255,0.04)" opacity="0.6">
        <animate attributeName="rx" values="150;158;150" dur="6s" repeatCount="indefinite" />
        <animate attributeName="ry" values="90;96;90" dur="6s" repeatCount="indefinite" />
        <animate attributeName="stroke-dashoffset" values="0;20;0" dur="4s" repeatCount="indefinite" />
      </ellipse>
      <ellipse cx="200" cy="165" rx="110" ry="65" stroke="rgba(255,255,255,0.75)" strokeWidth="1" strokeDasharray="5 3" fill="rgba(255,255,255,0.03)" opacity="0.5">
        <animate attributeName="rx" values="110;118;110" dur="5s" repeatCount="indefinite" />
        <animate attributeName="ry" values="65;72;65" dur="5s" repeatCount="indefinite" />
        <animate attributeName="stroke-dashoffset" values="0;-15;0" dur="3.5s" repeatCount="indefinite" />
      </ellipse>
      <ellipse cx="200" cy="165" rx="70" ry="42" stroke="rgba(255,255,255,0.55)" strokeWidth="1" strokeDasharray="4 3" fill="rgba(255,255,255,0.02)" opacity="0.4">
        <animate attributeName="rx" values="70;76;70" dur="4s" repeatCount="indefinite" />
        <animate attributeName="ry" values="42;48;42" dur="4s" repeatCount="indefinite" />
        <animate attributeName="stroke-dashoffset" values="0;12;0" dur="3s" repeatCount="indefinite" />
      </ellipse>

      {[
        { x1: 200, y1: 80, x2: 100, y2: 140, stroke: '#FFFFFF', dur: '3s' },
        { x1: 200, y1: 80, x2: 300, y2: 140, stroke: 'rgba(255,255,255,0.85)', dur: '3.5s' },
        { x1: 200, y1: 80, x2: 200, y2: 165, stroke: 'rgba(255,255,255,0.7)', dur: '2.8s' },
        { x1: 100, y1: 140, x2: 200, y2: 165, stroke: 'rgba(255,255,255,0.6)', dur: '4s' },
        { x1: 300, y1: 140, x2: 200, y2: 165, stroke: '#FFFFFF', dur: '3.2s' },
        { x1: 100, y1: 140, x2: 70, y2: 220, stroke: 'rgba(255,255,255,0.75)', dur: '3.8s' },
        { x1: 300, y1: 140, x2: 330, y2: 220, stroke: 'rgba(255,255,255,0.55)', dur: '4.2s' },
        { x1: 200, y1: 165, x2: 70, y2: 220, stroke: 'rgba(255,255,255,0.65)', dur: '3.6s' },
        { x1: 200, y1: 165, x2: 330, y2: 220, stroke: '#FFFFFF', dur: '4.5s' },
        { x1: 70, y1: 220, x2: 330, y2: 220, stroke: 'rgba(255,255,255,0.8)', dur: '5s' },
      ].map((line) => {
        const { dur, ...lineProps } = line;
        return (
          <line key={`${line.x1}-${line.y1}-${line.x2}-${line.y2}`} {...lineProps} strokeWidth="1.2">
            <animate attributeName="stroke-opacity" values="0.2;0.7;0.2" dur={dur} repeatCount="indefinite" />
          </line>
        );
      })}

      <circle cx="200" cy="80" r="18" fill="none" stroke="#FFFFFF" strokeWidth="1" opacity="0.3">
        <animate attributeName="r" values="18;24;18" dur="3s" repeatCount="indefinite" />
      </circle>
      <circle cx="200" cy="80" r="12" fill="url(#mainGrad)" filter="url(#glow)" />
      <text x="200" y="55" textAnchor="middle" fill="#FFFFFF" fontSize="9" fontFamily="Inter, sans-serif" fontWeight="600">Hypergraph</text>

      <circle cx="100" cy="140" r="14" fill="none" stroke="rgba(255,255,255,0.75)" strokeWidth="1" opacity="0.3">
        <animate attributeName="r" values="14;19;14" dur="3.5s" repeatCount="indefinite" />
      </circle>
      <circle cx="100" cy="140" r="9" fill="rgba(255,255,255,0.85)" />
      <text x="100" y="128" textAnchor="middle" fill="rgba(255,255,255,0.75)" fontSize="8" fontFamily="Inter, sans-serif">Graph ML</text>

      <circle cx="300" cy="140" r="14" fill="none" stroke="rgba(255,255,255,0.55)" strokeWidth="1" opacity="0.3">
        <animate attributeName="r" values="14;19;14" dur="4s" repeatCount="indefinite" />
      </circle>
      <circle cx="300" cy="140" r="9" fill="rgba(255,255,255,0.65)" />
      <text x="300" y="128" textAnchor="middle" fill="rgba(255,255,255,0.75)" fontSize="8" fontFamily="Inter, sans-serif">NLP</text>

      <circle cx="70" cy="220" r="13" fill="none" stroke="rgba(255,255,255,0.6)" strokeWidth="1" opacity="0.3">
        <animate attributeName="r" values="13;18;13" dur="3.2s" repeatCount="indefinite" />
      </circle>
      <circle cx="70" cy="220" r="8" fill="rgba(255,255,255,0.55)" />
      <text x="70" y="245" textAnchor="middle" fill="rgba(255,255,255,0.75)" fontSize="8" fontFamily="Inter, sans-serif">Accessibility and Health</text>

      <circle cx="330" cy="220" r="13" fill="none" stroke="#FFFFFF" strokeWidth="1" opacity="0.3">
        <animate attributeName="r" values="13;18;13" dur="3.8s" repeatCount="indefinite" />
      </circle>
      <circle cx="330" cy="220" r="8" fill="#FFFFFF" />
      <text x="330" y="245" textAnchor="middle" fill="rgba(255,255,255,0.75)" fontSize="8" fontFamily="Inter, sans-serif">FinCrime</text>

      <circle cx="200" cy="165" r="11" fill="none" stroke="rgba(255,255,255,0.75)" strokeWidth="1" opacity="0.3">
        <animate attributeName="r" values="11;16;11" dur="2.8s" repeatCount="indefinite" />
      </circle>
      <circle cx="200" cy="165" r="7" fill="rgba(255,255,255,0.8)" />
      <text x="230" y="168" fill="rgba(255,255,255,0.75)" fontSize="8" fontFamily="Inter, sans-serif">Streaming</text>

      <circle cx="200" cy="260" r="10" fill="none" stroke="rgba(255,255,255,0.55)" strokeWidth="1" opacity="0.3">
        <animate attributeName="r" values="10;15;10" dur="4.5s" repeatCount="indefinite" />
      </circle>
      <circle cx="200" cy="260" r="6" fill="rgba(255,255,255,0.5)" opacity="0.7" />
    </svg>
  );
}
