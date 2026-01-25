// Posts data - centralized for easy maintenance
export const posts = [
  {
    id: 'chameleon-online',
    title: 'Chameleon Online',
    date: '2025.03.02',
    url: 'https://cham-online.glitch.me',
    external: true
  },
  {
    id: 'ai-academia-apathy',
    title: 'AI, Academia, Apathy',
    date: '2025.01.11',
    url: 'https://chicagomaroon.com/44895/viewpoints/column/ai-academia-apathy/',
    external: true
  },
  {
    id: 'jazzle',
    title: 'Jazzle: A Predecessor to Classicle',
    date: '2024.07.14',
    url: 'https://adam-zaidi.github.io/jazzle/',
    external: true
  },
  {
    id: 'highly-productive',
    title: 'A Highly Productive Op-Ed',
    date: '2024.05.01',
    url: 'https://uhsdevilsadvocate.weebly.com/a-highly-productive-op-ed.html',
    external: true
  },
  {
    id: 'bilateral-symmetry',
    title: 'The Evolution of Bilateral Symmetry in Animals',
    date: '2023.12.29',
    url: 'https://www.studentregroup.org/december-2023',
    external: true
  },
  {
    id: 'neurogenic-differentiation',
    title: 'Neurogenic Differentiation of Micro-Spheric Dental Pulp...',
    date: '2023.11.30',
    url: 'https://www.mrs.org/meetings-events/fall-meetings-exhibits/2023-mrs-fall-meeting/symposium-sessions/presentations/detail/2023_mrs_fall_meeting/2023_mrs_fall_meeting-3980320',
    external: true
  },
  {
    id: 'harry-potter',
    title: 'A Harry Potter Retrospective',
    date: '2023.11.27',
    url: '/posts/hparticle',
    external: false
  },
  {
    id: 'cgi-overuse',
    title: 'The Overuse of CGI in Film',
    date: '2023.11.03',
    url: '/posts/cgiarticle',
    external: false
  },
  {
    id: 'covid-vaccine',
    title: 'Pandemic to Protection: The COVID-19 Vaccine Evolution',
    date: '2023.10.03',
    url: 'https://innovations.stanford.edu/student-feature/pandemic-to-protection-the-covid-19-vaccine-evolution/',
    external: true
  },
  {
    id: 'short-form',
    title: 'The Rise of Short-Form Content',
    date: '2023.04.28',
    url: '/posts/shortform',
    external: false
  },
  {
    id: 'chatgpt',
    title: 'How Good is ChatGPT, Really?',
    date: '2023.03.29',
    url: '/posts/chatgptarticle',
    external: false
  },
  {
    id: 'ai-existential',
    title: 'AI: An Existential Threat',
    date: '2022.11.28',
    url: '/posts/aiarticle',
    external: false
  },
  {
    id: 'wordle',
    title: 'Hopping on the Wordle Bandwagon',
    date: '2022.06.24',
    url: 'https://adam-zaidi.github.io/classicle/',
    external: true
  },
  {
    id: 'knots-numbers',
    title: 'Knots and Numbers are Fun',
    date: '2020.08.07',
    url: '/media/euclidpaper.pdf',
    external: false,
    isPdf: true
  }
];

// Recent work items for homepage
export const recentWork = [
  {
    title: 'Chameleon Online',
    url: 'https://cham-game.glitch.me',
    external: true
  },
  {
    title: 'AI, Academia, Apathy',
    url: 'https://chicagomaroon.com/44895/viewpoints/column/ai-academia-apathy/',
    external: true
  },
  {
    title: 'Jazzle: A Predecessor to Classicle',
    url: 'https://adam-zaidi.github.io/jazzle/',
    external: true
  }
];

// Origins section items
export const origins = [
  {
    title: 'Old Portfolio',
    url: 'https://adam-zaidi.github.io/oldportfolio/',
    external: true
  },
  {
    title: 'Math Resources',
    url: 'https://math-resources.adamzaidi.repl.co',
    external: true
  }
];

// Contact links
export const contactLinks = [
  {
    title: 'contact@adamzaidi.me',
    url: 'mailto:contact@adamzaidi.me',
    type: 'email'
  },
  {
    title: 'github',
    url: 'https://github.com/adam-zaidi',
    external: true
  },
  {
    title: 'linkedin',
    url: 'https://www.linkedin.com/in/adam-z-9954b4247/',
    external: true
  }
];

// PGP Key
export const pgpKey = `-----BEGIN PGP PUBLIC KEY BLOCK-----
    Version: Keybase OpenPGP v2.0.76
    Comment: https://keybase.io/crypto

    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
    =Dknf
    -----END PGP PUBLIC KEY BLOCK-----`;
