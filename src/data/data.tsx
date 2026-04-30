import {ArrowDownTrayIcon as DownloadIcon} from '@heroicons/react/24/outline';

import GithubIcon from '../components/Icon/GithubIcon';
import LinkedInIcon from '../components/Icon/LinkedInIcon';

import profilepic from '../images/profilepic.png';

import {
  ContactSection,
  ContactType,
  HomepageMeta,
  SkillGroup,
  Social,
  TimelineItem,
  About,
} from './dataDef';

// profilepic is a StaticImageData object; .src is the URL string
const profilepicSrc = (profilepic as unknown as {src: string}).src;

/**
 * Page meta data
 */
export const homePageMeta: HomepageMeta = {
  title: 'Tamas Flucsa Major — Engineering Manager',
  description: 'Engineering leader with 10+ years of experience. I build engineering cultures where teams are product partners.',
};

/**
 * Section definition
 */
export const SectionId = {
  About: 'about',
  Highlights: 'highlights',
  Resume: 'experience',
  Skills: 'skills',
  Consulting: 'consulting',
  Contact: 'contact',
} as const;

export type SectionId = typeof SectionId[keyof typeof SectionId];

/**
 * About section
 */
export const aboutData: About = {
  imageSrc: profilepicSrc,
  name: `Tamas Flucsa Major`,
  description: `Engineering leader with 10+ years of experience, including 5+ in technical leadership roles. I specialize in building
engineering cultures where teams are product partners - not feature factories. I've driven organizational change at the
structural level, including championing the introduction of the Engineering Manager role and shifting engineering from
pure delivery toward shared product ownership. I believe great software is built by empowered teams who understand
the why behind what they build, challenge assumptions early, and take responsibility all the way through to measured
outcomes. I'm looking to bring this approach to a larger scale and keep building engineering organizations I'm proud of.`,
  actions: [
    {
      href: '/assets/resume.pdf',
      text: 'Download CV',
      primary: true,
      Icon: DownloadIcon,
    },
    {
      href: `#${SectionId.Contact}`,
      text: 'Get in touch',
      primary: false,
    },
  ],
};

/**
 * Skills section
 */
export const skills: SkillGroup[] = [
  {
    name: 'Engineering Leadership',
    skills: [
      {name: 'Org Design'}, {name: 'Engineering Culture'}, {name: 'Servant Leadership'},
      {name: 'Team Building'}, {name: 'Conflict Resolution'}, {name: 'Mentoring & Coaching'},
      {name: 'Career Development'}, {name: 'Hiring & Onboarding'},
      {name: 'Cross-functional Collaboration'}, {name: 'Stakeholder Communication'},
      {name: 'Technology Vision & Roadmapping'}, {name: 'Agile Methodologies'},
      {name: 'OKRs'}, {name: 'DORA Metrics'}, {name: 'Technical Governance'},
    ],
  },
  {
    name: 'Architecture & Technology',
    skills: [
      {name: 'Scalable Microservices'}, {name: 'Event-Driven Systems'},
      {name: 'Hexagonal Architecture'}, {name: 'Domain-Driven Design (DDD)'},
      {name: 'Self-Contained Systems'}, {name: 'Anti-Corruption Layer (ACL)'},
      {name: 'Micro-frontends'}, {name: 'Architecture Decision Records'},
      {name: 'C4 Documentation'},
    ],
  },
  {
    name: 'Tools & Platforms',
    skills: [
      {name: 'TypeScript'}, {name: 'Node.js'}, {name: 'NestJS'}, {name: 'React'},
      {name: 'PostgreSQL'}, {name: 'Kafka'}, {name: 'AWS'}, {name: 'Docker'},
      {name: 'Kubernetes'}, {name: 'CI/CD'}, {name: 'Datadog'}, {name: 'Algolia'},
      {name: 'AI-Augmented Development'},
    ],
  },
  {
    name: 'Languages',
    skills: [
      {name: 'English (Native)'}, {name: 'Hungarian (Native)'},
      {name: 'Serbian (Native)'}, {name: 'German (C1/B2)'},
    ],
  },
];

/**
 * Resume section
 */

export const experience: TimelineItem[] = [
  {
    startDate: 'Jul. 2023',
    endDate: 'Present',
    company: 'Jochen Schweizer mydays Group',
    companyDescriptor: 'Experience & Gift E-commerce · ~400 people · Munich',
    location: 'Munich, Germany',
    title: 'Engineering Manager',
    content: (
      <ul>
        <li>Identified the need for an Engineering Manager function and drove internal advocacy for its introduction - working closely with the Head of Engineering to build the case against budget and organizational resistance. The change shifted engineering toward shared product ownership, with teams involved from idea challenge through delivery and outcome measurement.</li>
        <li>Advocated for an inclusive team restructuring process, ensuring engineer input and interpersonal dynamics were considered alongside technical skills - collaborating with Scrum Masters to find team compositions that work well together, not just on paper.</li>
        <li>Navigated sustained interpersonal conflict between a Principal Engineer and a Senior Engineer through repeated 1-on-1 coaching - helping each understand their own role in the dynamic and grow professionally from it, without taking sides.</li>
        <li>Member of the company's technology board, contributing to long-term technical strategy, architecture direction, and technology investments across 8 teams and a 60+ person engineering organization.</li>
        <li>Oversaw continued evolution of a multi-tenant, event-driven microservices platform on AWS, spanning 30+ internal services and 10+ external integrations - making architectural decisions around system boundaries, integration patterns (ACL, API gateways), and scalability, while ensuring observability and operational standards across teams.</li>
        <li>Defined and drove adoption of company-wide engineering documentation standards across 6 domains, covering system architecture (C4), service-level documentation (README, Swagger, TECHDEBT), and flow diagrams (PlantUML) - reducing dependency on undocumented knowledge, improving onboarding and architectural clarity across teams.</li>
        <li>Drove the professional development of 6 engineers through structured 1-on-1s and semi-annual career discussions, resulting in 3 seniority promotions.</li>
        <li>Drove full recruitment lifecycle across 2 teams - reviewing 100+ CVs, conducting 20+ interviews, making 3 hires.</li>
      </ul>
    ),
  },
  {
    startDate: 'Mar. 2021',
    endDate: 'Jun. 2023',
    company: 'Jochen Schweizer mydays Group',
    companyDescriptor: 'Experience & Gift E-commerce · ~400 people · Munich',
    location: 'Munich, Germany',
    title: 'Principal Engineer',
    content: (
      <ul>
        <li>Championed the architecture of a multi-tenant, event-driven microservices platform on AWS - driving key design decisions including strict event-driven and self-contained system boundaries, and the introduction of an Anti-Corruption Layer for SAP integration - advocating for long-term system integrity over short-term delivery shortcuts.</li>
        <li>Defined and drove adoption of engineering standards across teams - covering testing guidelines (unit, component, integration, and E2E), Definition of Ready/Done, and deployment practices - bringing teams along through collaboration while enforcing non-negotiables where necessary.</li>
        <li>Played a central role in recruitment across multiple roles - from junior engineers to architects and Scrum Masters - reviewing 200+ CVs and conducting 30+ technical interviews, resulting in 5 hires. Maintained hiring bar even when it meant closing searches without a hire.</li>
        <li>Led evaluation and selection of third-party tools - assessing functionality, pricing, and technical fit across multiple candidates - with recommendations accepted and integrated into the platform. (e.g. Yotpo for review management, Algolia for AI-powered search)</li>
        <li>Contributed to ongoing architectural decisions around micro-frontend boundaries - balancing reusability against data-fetching overhead, with a mindset of continuous re-evaluation rather than a fixed solution.</li>
      </ul>
    ),
  },
  {
    startDate: 'Jul. 2019',
    endDate: 'Feb. 2021',
    company: 'Jochen Schweizer mydays Group',
    companyDescriptor: 'Experience & Gift E-commerce · ~400 people · Munich',
    location: 'Munich, Germany',
    title: 'Full Stack Software Engineer',
    content: (
      <ul>
        <li>Developed and shipped features across the stack in close collaboration with Product Owners and Architects, contributing to the early foundation of the platform.</li>
        <li>Helped introduce and implement the company's E2E testing framework, which became a core part of the quality assurance process across teams.</li>
        <li>Served as team representative in the Nexus Scrum model - coordinating across teams, unblocking engineers, and bridging communication between technical and non-technical stakeholders.</li>
      </ul>
    ),
  },
  {
    startDate: 'Mar. 2015',
    endDate: 'Jun. 2019',
    company: 'tecRacer GmbH & Co. KG',
    companyDescriptor: 'Custom Software Development · ~100 people · Hannover',
    location: 'Hannover, Germany',
    title: '(Senior) Software Engineer',
    content: (
      <ul>
        <li>Developed web-based applications in an agile environment, working closely with customers to refine requirements and deliver high-quality solutions.</li>
        <li>Maintained and extended legacy code for long-running projects and built new applications from scratch.</li>
        <li>Acted as a key communication bridge between customers and developers, ensuring requirements were clear and technical solutions met expectations.</li>
        <li>Provided support and issue resolution under tight deadlines to ensure smooth operation of critical systems.</li>
      </ul>
    ),
  },
];

export const contact: ContactSection = {
  headerText: 'Get in touch.',
  profileImageSrc: profilepic,
  items: [
    {
      type: ContactType.Email,
      text: 'tamas.fm@proton.me',
      href: 'mailto:tamas.fm@proton.me',
    },
    {
      type: ContactType.LinkedIn,
      text: 'Tamas Flucsa Major',
      href: 'https://www.linkedin.com/in/tam%C3%A1s-flucsa-major-985a5196',
    },
    {
      type: ContactType.Location,
      text: 'Munich, Germany',
      href: 'https://www.google.ca/maps/place/Munich/@48.1548895,11.4717964,12z',
    },
  ],
};

/**
 * Structured data (JSON-LD)
 */
export const personJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: 'Tamas Flucsa Major',
  jobTitle: 'Engineering Manager',
  url: 'https://www.tmajor.me',
  email: 'tamas.fm@proton.me',
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Munich',
    addressCountry: 'DE',
  },
  sameAs: [
    'https://www.linkedin.com/in/tam%C3%A1s-flucsa-major-985a5196',
    'https://github.com/tmajor-consulting',
  ],
  worksFor: {
    '@type': 'Organization',
    name: 'Jochen Schweizer mydays Group',
  },
  knowsAbout: [
    'Engineering Management', 'Org Design', 'Engineering Culture',
    'Servant Leadership', 'Team Building', 'Conflict Resolution',
    'Mentoring & Coaching', 'Career Development', 'Hiring & Onboarding',
    'OKRs', 'DORA Metrics', 'Agile',
    'Scalable Microservices', 'Event-Driven Systems', 'Hexagonal Architecture',
    'Domain-Driven Design', 'AWS', 'TypeScript', 'Node.js', 'React',
  ],
} as const;

/**
 * Social items
 */
export const socialLinks: Social[] = [
  {label: 'GitHub', Icon: GithubIcon, href: 'https://github.com/tamas-fm'},
  {label: 'LinkedIn', Icon: LinkedInIcon, href: 'https://www.linkedin.com/in/tam%C3%A1s-flucsa-major-985a5196'},
];
