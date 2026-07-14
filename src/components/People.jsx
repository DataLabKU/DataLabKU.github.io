import { useState } from 'react';
import FadeIn from './FadeIn';
import SectionHeader from './SectionHeader';
import PersonModal from './PersonModal';
import PersonAvatar from './PersonAvatar';
import './PersonModal.css';
import { peopleGroups } from '../data/content';
import { cvByName } from '../data/cvData';

function PersonCard({ person, tier, onSelect }) {
  const openCv = () => onSelect(person, tier);

  return (
    <FadeIn className={`person-card person-card--${tier} person-card--clickable`}>
      <button type="button" className="person-card-btn" onClick={openCv} aria-label={`View CV for ${person.name}`}>
        <PersonAvatar person={person} size={tier === 'director' ? 'director' : 'card'} />
        <span className="person-name-btn">{person.name}</span>
        <p className="person-title">{person.title}</p>
        <span className={`role-badge role-badge--${tier}`}>{person.role}</span>
        <span className="person-view-cv">View CV →</span>
      </button>
    </FadeIn>
  );
}

export default function People() {
  const [selected, setSelected] = useState(null);

  return (
    <section id="people">
      <SectionHeader
        label="The Team"
        title="People"
        description="Meet the researchers driving innovation at DATA Lab. Click a name to view their CV."
      />
      <div className="people-groups">
        {peopleGroups.map((group) => (
          <div key={group.tier} className={`people-group people-group--${group.tier}`}>
            <h3 className="people-group-label">{group.label}</h3>
            <div className={`people-grid people-grid--${group.tier}`}>
              {group.members.map((person) => (
                <PersonCard
                  key={person.name}
                  person={person}
                  tier={group.tier}
                  onSelect={(p, t) => setSelected({ person: { ...p, cv: cvByName[p.name] }, tier: t })}
                />
              ))}
            </div>
          </div>
        ))}
      </div>

      {selected && (
        <PersonModal
          person={selected.person}
          tier={selected.tier}
          onClose={() => setSelected(null)}
        />
      )}
    </section>
  );
}
