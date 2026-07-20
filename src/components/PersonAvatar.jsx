import { useState } from 'react';

function photoStyle(focus = {}) {
  const x = focus.x || '50%';
  const y = focus.y || '28%';
  const zoom = focus.zoom ?? 1;

  return {
    objectFit: 'cover',
    objectPosition: `${x} ${y}`,
    ...(zoom !== 1
      ? {
          transform: `scale(${zoom})`,
          transformOrigin: `${x} ${y}`,
        }
      : {}),
  };
}

export default function PersonAvatar({ person, size = 'card', className = '' }) {
  const [imgError, setImgError] = useState(false);
  const showPhoto = person.photo && !imgError;
  const sizeClass = `person-avatar--${size}`;

  if (showPhoto) {
    return (
      <div className={`person-avatar ${sizeClass} person-avatar--${person.colorClass} ${className}`.trim()}>
        <img
          src={person.photo}
          alt={person.name}
          style={photoStyle(person.photoFocus)}
          onError={() => setImgError(true)}
        />
      </div>
    );
  }

  return (
    <div className={`avatar ${person.colorClass} ${sizeClass} ${className}`.trim()}>
      {person.initials}
    </div>
  );
}
