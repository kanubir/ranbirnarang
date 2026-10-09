// Resume content: the single source for the /resume page (and the PDF printed from it).
// Everything here is public, in the repo and on the site, so no phone number, personal email,
// home address, or confidential employer details.

/** A month written as "YYYY-MM", e.g. "2019-08". */
type YearMonth = `${number}-${number}`;

export interface Experience {
  role: string;
  company: string;
  client?: string; // for consulting roles: the client I worked for
  location?: string; // optional: city and province/country only
  start: YearMonth;
  end: YearMonth | 'present';
  highlights: string[]; // what I built or led, and the impact
}

export interface Education {
  degree: string;
  school: string;
  start: YearMonth;
  end: YearMonth;
}

export interface Certification {
  name: string;
  issuer: string;
  issued: YearMonth;
  expires?: YearMonth;
}

export interface SkillGroup {
  name: string;
  skills: string[];
}

export interface Resume {
  location: string;
  summary: string[];
  experience: Experience[];
  education: Education[];
  certifications: Certification[];
  skills: SkillGroup[];
}

export const resume: Resume = {
  location: 'Toronto, ON',

  summary: [
    'Technical Lead with experience designing and developing high-volume backend systems supporting millions of users across customer-facing platforms.',
    'Strong background in distributed systems, microservices, and event-driven architecture, focused on building reliable and maintainable applications.',
    'Proven ability to lead and mentor engineering teams, contributing across system design, development, performance optimization, and delivery of production-grade software solutions.',
    'Hands-on experience designing and delivering enterprise Generative AI solutions, including RAG-based knowledge retrieval systems, using LangChain, OpenAI APIs, and vector databases.',
  ],

  // Newest first.
  experience: [
    {
      role: 'Technical Lead',
      company: 'Bell Canada',
      location: 'Toronto, ON',
      start: '2024-08',
      end: '2026-06',
      highlights: [],
    },
    {
      role: 'Technical Lead',
      company: 'IBM',
      client: 'Bell Canada',
      location: 'Toronto, ON',
      start: '2019-08',
      end: '2024-08',
      highlights: [],
    },
    {
      role: 'Full Stack .NET Developer',
      company: 'IIMSWISS Corp',
      start: '2018-04',
      end: '2019-08',
      highlights: [],
    },
    {
      role: 'Software Developer',
      company: 'Ansh Systems',
      start: '2017-06',
      end: '2018-01',
      highlights: [],
    },
    {
      role: 'Software Engineer',
      company: "Grocer's Point",
      start: '2016-06',
      end: '2017-05',
      highlights: [],
    },
    {
      role: 'Software Engineer',
      company: 'Newgen Software',
      start: '2013-07',
      end: '2016-05',
      highlights: [],
    },
  ],

  education: [
    {
      degree: 'Bachelor of Engineering in Computer Science and Engineering',
      school: 'Chitkara University',
      start: '2009-08',
      end: '2013-06',
    },
  ],

  // None listed for now; the page hides this section while it's empty.
  certifications: [],

  skills: [
    { name: 'Programming Languages', skills: ['C#', 'Python', 'JavaScript', 'HTML', 'CSS'] },
    {
      name: 'Frameworks & Libraries',
      skills: [
        'ASP.NET (Web API, MVC, Web Forms)',
        '.NET Core',
        'Entity Framework',
        'ADO.NET',
        'SignalR',
        'Hot Chocolate',
        'xUnit',
        'Moq',
        'jQuery',
        'Bootstrap',
        'RequireJS',
        'Kendo UI',
      ],
    },
    { name: 'API & Integration', skills: ['REST API', 'GraphQL API', 'Kafka'] },
    {
      name: 'Databases & Datastores',
      skills: [
        'MS SQL Server',
        'Oracle RDBMS',
        'PostgreSQL',
        'Red Hat Data Grid (distributed caching, Redis-equivalent)',
      ],
    },
    {
      name: 'Cloud & Infrastructure',
      skills: [
        'OpenShift',
        'Azure (Web Apps, Functions, Cosmos DB, Blob Storage, Front Door and CDN)',
        'Docker',
        'Terraform',
      ],
    },
    { name: 'Observability & Monitoring', skills: ['OpenTelemetry', 'Dynatrace', 'Serilog'] },
    {
      name: 'AI & AI-Assisted Development',
      skills: [
        'OpenAI APIs',
        'LangChain',
        'Retrieval-Augmented Generation (RAG)',
        'Vector Databases (FAISS)',
        'Vector Embeddings',
        'Agent-Based Workflows',
        'Claude Code',
        'GitHub Copilot CLI',
      ],
    },
    {
      name: 'DevOps & Version Control',
      skills: [
        'GitHub Actions',
        'Git',
        'GitHub',
        'GitLab',
        'Azure DevOps',
        'VSTS',
        'TFS',
        'SVN',
      ],
    },
    {
      name: 'Tools',
      skills: [
        'Visual Studio',
        'Visual Studio Code',
        'Postman',
        'Chrome Developer Tools',
        'Draw.io',
        'Excalidraw',
        'Miro',
        'Jira',
        'Confluence',
        'Trello',
        'Bugzilla',
      ],
    },
    {
      name: 'Core Competencies',
      skills: [
        'Application Design and Architecture',
        'Distributed Systems',
        'Microservices',
        'Event-Driven Architecture',
        'Cloud-Native Development',
        'Performance Optimization',
        'Observability',
        'Technical Leadership',
        'DevOps Automation',
        'AI/GenAI Prototyping',
      ],
    },
  ],
};
