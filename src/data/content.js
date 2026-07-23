const base = import.meta.env.BASE_URL;

export const navLinks = [
  { href: '#research', label: 'Research', section: 'research' },
  { href: '#publications', label: 'Publications', section: 'publications' },
  { href: '#people', label: 'People', section: 'people' },
  { href: '#about', label: 'About', section: 'about' },
  { href: '#partners', label: 'Partners', section: 'partners' },
  { href: '#contact', label: 'Contact', section: 'contact' },
];

export const researchAreas = [
  { num: '01', icon: 'ti-atom-2', title: 'Hypergraph Learning', description: 'Beyond pairwise: learning with higher-order relationships in complex data systems.' },
  { num: '02', icon: 'ti-topology-star-3', title: 'Graph Systems', description: 'Scalable computation, streaming graph processing, and large-scale graph analytics.' },
  { num: '03', icon: 'ti-message-language', title: 'NLP', description: 'Arabic NLP, document understanding, and knowledge extraction from text.' },
  { num: '04', icon: 'ti-brain', title: 'Machine Learning', description: 'Deep architectures, representation learning, and transfer learning at scale.' },
  { num: '05', icon: 'ti-heart', title: 'AI for Behavioral Health', description: 'Modeling mental health and well-being with data-driven, interpretable AI methods.' },
  { num: '06', icon: 'ti-shield-check', title: 'Financial Crime Detection', description: 'Graph-based AML, money laundering patterns, and fraud detection via network analysis.' },
  { num: '07', icon: 'ti-database', title: 'Data Management', description: 'Efficient storage, querying, and processing of large-scale heterogeneous datasets.' },
  { num: '08', icon: 'ti-network', title: 'Network Science', description: 'Community detection, link prediction, and dynamic network evolution modeling.' },
];


export const peopleGroups = [
  {
    label: 'Faculty',
    tier: 'director',
    members: [
      {
        id: 'lulkulaib',
        initials: 'LA',
        name: 'Dr. Lulwah AlKulaib',
        title: 'Assistant Professor & Lab Director',
        role: 'Director',
        website: 'https://www.lalkulaib.com/',
        colorClass: 'purple-cyan',
        photo: `${base}images/people/lulualkulaib.png`,
        photoFocus: { x: '50%', y: '32%', zoom: 1.08 },
      },
    ],
  },
  {
    label: 'MSc Students',
    tier: 'ms',
    members: [
      { id: 'halghanem', initials: 'HG', name: 'Humoud Alghanem', title: 'MSc Student · NLP in Banking', role: 'MSc', colorClass: 'violet' },
      { id: 'aalabdulsalam', initials: 'AA', name: 'Abdullah Alabdulsalam', title: 'MSc Student · Hypergraph Learning for Mental Health', role: 'MSc', colorClass: 'cyan' },
      { id: 'salmaamari', initials: 'SM', name: 'Sulaiman Almaamari', title: 'MSc Student · NLP for Speech Disorders', role: 'MSc', colorClass: 'pink' },
    ],
  },
  {
    label: 'Undergraduate Researchers',
    tier: 'undergraduate',
    members: [
      {
        id: 'aalmekhyal',
        initials: 'AM',
        name: 'Abdullah Almekhyal',
        title: 'Undergraduate Researcher · FinCrime Detection',
        role: 'Undergraduate',
        colorClass: 'cyan',
        photo: `${base}images/people/abdullahalmekhyal.png`,
        photoFocus: { x: '50%', y: '30%', zoom: 1.1 },
      },
      {
        id: 'yjoudah',
        initials: 'YJ',
        name: 'Yousef Joudah',
        title: 'Undergraduate Researcher · FinCrime Detection',
        role: 'Undergraduate',
        colorClass: 'violet',
        photo: `${base}images/people/yousefjoudah.png`,
        photoFocus: { x: '50%', y: '28%', zoom: 1.1 },
      },
    ],
  },
];

export const aboutFeatures = [
  { icon: 'ti-microscope', title: 'Curiosity-Driven Research', description: 'We pursue fundamental questions in AI and data science, with hypergraph learning and mental health applications at the forefront.' },
  { icon: 'ti-users-group', title: 'Collaborative Community', description: 'Our lab fosters a supportive environment where graduate and undergraduate researchers collaborate on impactful projects.' },
  { icon: 'ti-globe', title: 'Global Impact', description: 'From mental health modeling to Arabic NLP and financial intelligence, our research addresses challenges with real-world significance across domains.' },
];

export const aboutStats = [
  { value: '2026', label: 'Founded' },
  { value: 'KU', label: 'Institution' },
  { value: 'Top', label: 'Venues' },
];

/** Add partner/sponsor logos to public/images/partners/ and list them here. */
export const partners = [
  // {
  //   name: 'Boubyan Bank',
  //   logo: `${base}images/partners/boubyan-bank.png`,
  //   href: 'https://www.bankboubyan.com',
  // },
  // {
  //   name: 'KFH Capital',
  //   logo: `${base}images/partners/kfh-capital.png`,
  //   href: 'https://www.kfhcapital.com.kw',
  // },
];

export const contactRows = [
  { icon: 'ti-mail', text: 'lalkulaib@cs.ku.edu.kw', href: 'mailto:lalkulaib@cs.ku.edu.kw' },
  { icon: 'ti-brand-instagram', text: '@datalabku', href: 'https://www.instagram.com/datalabku' },
  { icon: 'ti-map-pin', text: 'N01A1-071, Data Lab, Sabah AlSalem University City, Kuwait' },
];
