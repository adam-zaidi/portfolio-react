// Content for terminal commands
// Edit this file to update the information displayed by each command

export const education = [
  {
    school: 'University of Chicago',
    degree: 'B.S. in Computational and Applied Mathematics, B.A. in Linguistics',
    location: 'Chicago, IL',
    years: '2024 - 2028',
    details: [
      'Relevant coursework: Discrete Mathematics, Abstract Linear Algebra, Statistical Theory and Methods',
      'GPA: 3.96/4.00 (Dean\'s List)',
    ]
  },
  {
    school: 'San Francisco University High School',
    degree: 'High School Diploma',
    location: 'San Francisco, CA',
    years: '2020 - 2024',
    details: ['GPA: 3.98/4.00', 
      'SAT: MATH: 800, ERBW: 770',
      'AP: Calculus BC: 5, Biology: 5, Spanish Language and Culture: 5',
    ]
  }
]

export const skills = {
  languages: ['Python', 'SQL', 'Javascript', 'C#', 'C++'],
  frameworks: ['React', 'Node.js'],
  data: ['Pandas', 'NumPy', 'Looker', 'Hex', 'TensorFlow'],
  tools: ['Git', 'Azure']
}

export const writing = [
  {
    title: 'Who Is Policing the State?',
    publication: 'Chicago Maroon',
    date: 'October 29, 2025',
    url: 'https://chicagomaroon.com/42ని42/10/29/who-is-policing-the-state/',
  },
  {
    title: 'Cancel Caffeine Culture',
    publication: 'Chicago Maroon',
    date: 'June 24, 2025',
    url: 'https://chicagomaroon.com/42542/06/24/cancel-caffeine-culture/',
  },
  {
    title: 'In Defense of the Language Requirement',
    publication: 'Chicago Maroon',
    date: 'May 16, 2025',
    url: 'https://chicagomaroon.com/42438/05/16/in-defense-of-the-language-requirement/',
  },
  {
    title: 'Siri Indian Restaurant',
    publication: 'UChicago Bite Magazine',
    date: 'Spring 2025',
    url: 'https://issuu.com/uchicagobite/docs/uchicago_bite_issue_xxvii_spring_summer_2025',
  },
  {
    title: 'Studying Doesn\'t Stop at Midnight',
    publication: 'Chicago Maroon',
    date: 'March 6, 2025',
    url: 'https://chicagomaroon.com/42209/03/06/studying-doesnt-stop-at-midnight/',
  },
  {
    title: 'Cracking Open the History of Fortune Cookies',
    publication: 'UChicago Bite Magazine',
    date: 'Winter 2025',
    url: 'https://issuu.com/uchicagobite/docs/uchicago_bite_issue_xxvi_fall_winter_2024-25',
  },
  {
    title: 'West Meets Midwest',
    publication: 'Chicago Maroon',
    date: 'February 16, 2025',
    url: 'https://chicagomaroon.com/42109/02/16/west-meets-midwest/',
  },
  {
    title: 'AI, Academia, Apathy',
    publication: 'Chicago Maroon',
    date: 'January 11, 2025',
    url: 'https://chicagomaroon.com/41963/01/11/ai-academia-apathy/',
  },
  {
    title: 'Pandemic to Protection: The COVID-19 Vaccine Evolution',
    publication: 'Stanford Healthcare Innovation Lab',
    date: 'October 3, 2023',
    url: 'https://innovations.stanford.edu/student-feature/pandemic-to-protection-the-covid-19-vaccine-evolution/',
  },
]

export const experience = [
  {
    company: 'Chime Financial, Inc.',
    role: 'Reporting and Data Infrastructure Intern',
    location: 'San Francisco, CA',
    dates: 'June 2025 – August 2025',
    bullets: [
      'Authored SQL pipelines for customer support to increase visibility and agent efficiency across 2M+ tickets',
      'Resolved schema inconsistencies and developed Looker-ready materialized views to improve KPI tracking',
      'Streamlined existing code and saved $400K in annual operational costs from eliminating unused data pipelines',
    ]
  },
  {
    company: 'University of Chicago',
    role: 'Quad Faculty Research Grant Recipient',
    location: 'Chicago, IL',
    dates: 'November 2025 – Present',
    bullets: [
      'Awarded a competitive research grant to investigate the statistical structure of truth-value judgments in online content',
      'Implement Local Ordinal Embedding (LOE) to generate spatial representations from similarity judgments, constructing k-NN graphs and building Python pipelines to produce ordinal comparisons and evaluate embedding behavior',
    ]
  },
  {
    company: 'Armatus Capital Management, Inc.',
    role: 'Compliance Automation Developer (Part-time)',
    location: 'Remote',
    dates: 'December 2025 – Present',
    bullets: [
      'Built a C# console app that expands SharePoint task definitions into an auditable Compliance Log using per-task look-ahead windows and recurrence parsing, eliminating manual duplication and missed-due-date risk',
      'Implemented an idempotent sync model and generated consolidated Microsoft 365 calendar events that group identical obligations across entities to reduce calendar noise and improve operational reliability',
    ]
  },
  {
    company: 'The Chicago Maroon',
    role: 'Chief Financial Officer',
    location: 'Chicago, IL',
    dates: 'April 2025 – Present',
    bullets: [
      'Oversee a staff of 25 running the business side of Hyde Park\'s premier student-run newspaper, manage a budget of $100K',
      'Spearheaded initiatives to diversify the revenue sources of the paper and provide more financial security, including increased financial reporting, subscription models, and preparing the organization for 501(c)3 status',
    ]
  },
]

export const projects = [
  {
    name: 'OK Bet (iMessage Prediction Markets)',
    description: 'Built an iMessage-native prediction markets paper trading app using a virtual-token economy and live Polymarket markets; tuned wealth distribution and risk/return incentives via Monte Carlo simulations; finalist in Polymarket track at NexHacks',
    tech: ['Swift', 'Python'],
    url: 'https://devpost.com/software/alea',
  },
  {
    name: 'N-Queens Solver',
    description: 'Built an end-to-end solver for LinkedIn\'s Queens game using computer vision for board extraction and a backtracking search to find valid queen placements; designed for dynamic screen scaling and color calibration across devices',
    tech: ['Python', 'OpenCV', 'NumPy'],
    url: 'https://github.com/adam-zaidi/queens-solver',
  },
  {
    name: 'Jazzle',
    description: 'Adapted Classicle for jazz standards using the Real Book as a collection of music the player must guess based on sheet music; programmed an algorithm using OpenCV to detect the first six bars of any given sheet music, automating the process of displaying hundreds of different jazz lead sheets',
    tech: ['HTML', 'CSS', 'JavaScript', 'Python', 'OpenCV'],
    url: 'https://jazzle.me',
  },
  {
    name: 'Classicle',
    description: 'Programmed a version of the popular online game Wordle adapted for guessing classical music from sheet music; designed a custom process to automate transcribing sheet music using the Vexflow JavaScript library to render the music',
    tech: ['HTML', 'CSS', 'JavaScript', 'Vexflow'],
    url: 'https://classicle.com',
  },
  {
    name: 'Combinatorial Puzzle Optimizer',
    description: 'Developed optimization pipelines for generating nonograms by modeling the puzzle as an NP-complete search problem; applied entropy-driven heuristics and constraint propagation to efficiently converge on high-information boards',
    tech: ['JavaScript'],
    url: null,
  },
  {
    name: 'Chameleon Online',
    description: 'Built a multiplayer web app of the game Chameleon using Express.js, enabling real-time gameplay across devices; streamlined a previously manual process into a browser-based experience with lobby creation',
    tech: ['HTML', 'CSS', 'JavaScript', 'Express.js'],
    url: 'https://github.com/adam-zaidi/cham-online',
  },
]
