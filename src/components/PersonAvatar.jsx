import { useState } from 'react';

function photoStyle(person, size) {
  const focus = person.photoFocus || {};
  const fit = person.imageFit || (size === 'profile' || size === 'modal' ? 'contain' : 'cover');
  const x = focus.x || '50%';
  const y = focus.y || '28%';
  const zoom = focus.zoom ?? 1;
  const scale = size === 'modal'
    ? person.modalImageScale ?? 0.86
    : person.imageScale ?? (fit === 'contain' ? 1 : 1);
  const position = person.imagePosition || (fit === 'contain' ? 'center bottom' : `${x} ${y}`);

  return {
    objectFit: fit,
    objectPosition: position,
    ...(scale !== 1
      ? {
          width: `${scale * 100}%`,
          height: `${scale * 100}%`,
        }
      : {}),
    ...(zoom !== 1 && fit === 'cover'
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
          width={size === 'director' ? 104 : size === 'modal' ? 96 : 84}
          height={size === 'director' ? 104 : size === 'modal' ? 96 : 84}
          loading="lazy"
          decoding="async"
          style={photoStyle(person, size)}
          onError={() => setImgError(true)}
        />
      </div>
    );
  }

  return (
    <div className={`person-avatar avatar ${person.colorClass} ${sizeClass} ${className}`.trim()}>
      {person.initials || person.name.split(/\s+/).map((part) => part[0]).join('').slice(0, 2).toUpperCase()}
    </div>
  );
}
