import { useState } from 'react';
import FadeIn from './FadeIn';
import SectionHeader from './SectionHeader';
import PersonModal from './PersonModal';
import PersonAvatar from './PersonAvatar';
import './PersonModal.css';
import { peopleGroups } from '../data/content';
import { cvByName } from '../data/cvData';

function PersonCard({ person, tier, onSelect }) {
  const cv = cvByName[person.name];
  const hasCv = Boolean(cv && Object.keys(cv).length > 0);
  const [role, research] = person.title.split(' · ');
  const academicRole = tier === 'ms'
    ? 'MSc Researcher'
    : tier === 'undergraduate'
      ? 'Undergraduate Researcher'
      : role;
  const researchFocus = research || cv?.research?.slice(0, 2).join(', ');
  const ProfileSurface = hasCv ? 'button' : 'article';

  return (
    <FadeIn className={`person-profile-wrap person-profile-wrap--${tier}`}>
      <ProfileSurface
        type={hasCv ? 'button' : undefined}
        className={`person-profile${hasCv ? ' person-profile--interactive' : ''}`}
        onClick={hasCv ? (event) => onSelect(person, tier, event.currentTarget) : undefined}
        aria-label={hasCv ? `View CV for ${person.name}` : undefined}
      >
        <div className="person-profile-media">
          <PersonAvatar
            person={person}
            size="profile"
          />
        </div>
        <div className="person-profile-info">
          <h4 className="person-name">{person.name}</h4>
          <p className="person-role">{academicRole}</p>
          {researchFocus && (
            <div className="person-research">
              <span className="person-research-label">Research</span>
              <span className="person-research-value">{researchFocus}</span>
            </div>
          )}
          {hasCv && <span className="person-cv-link">View CV ↗</span>}
        </div>
      </ProfileSurface>
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
        description="Meet the researchers driving innovation at DATA Lab."
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
                  onSelect={(p, t, trigger) => setSelected({ person: { ...p, cv: cvByName[p.name] }, tier: t, trigger })}
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
          trigger={selected.trigger}
          onClose={() => setSelected(null)}
        />
      )}
    </section>
  );
}
