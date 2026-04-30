import {ArrowDownTrayIcon as DownloadIcon} from '@heroicons/react/24/outline';

import GithubIcon from '../components/Icon/GithubIcon';
import InstagramIcon from '../components/Icon/InstagramIcon';
import LinkedInIcon from '../components/Icon/LinkedInIcon';

// @ts-ignore
import heroImage from '../images/header-background2.webp';
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

/**
 * Page meta data
 */
export const homePageMeta: HomepageMeta = {
  title: 'Tamas Flucsa Major',
  description: "Personal Website of Tamas Flucsa Major",
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
  imageSrc: heroImage,
  name: `Tamas Flucsa Major`,
  description: (
    <>
      <p className="prose-sm text-stone-200 sm:prose-base lg:prose-lg">
        I build engineering cultures where teams are product partners — not feature factories. With 10+ years in software and 5+ in leadership, I specialise in empowering teams to challenge assumptions early, own outcomes fully, and ship software they're proud of.
      </p>
    </>
  ),
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
    name: 'Technical Skills',
    skills: [
      {name: 'Software Architecture', level: 10},
      {name: 'Event-Driven & Microservices', level: 10},
      {name: 'TypeScript / Node.js / NestJS', level: 9},
      {name: 'TDD & E2E Testing', level: 8},
      {name: 'Agentic AI Workflows & AI-Augmented Engineering', level: 8},
    ],
  },
  {
    name: 'Leadership Skills',
    skills: [
      {name: 'People & Team Leadership', level: 10},
      {name: 'Agile Methodologies & OKRs', level: 10},
      {name: 'Coaching & Mentoring', level: 9},
      {name: 'Hiring & Onboarding', level: 9},
      {name: 'Stakeholder Communication', level: 10},
    ],
  },
  {
    name: 'Business Skills',
    skills: [
      {name: 'Technology Vision & Roadmapping', level: 9},
      {name: 'Data-Driven Decision Making', level: 9},
      {name: 'Risk & Trade-off Management', level: 9},
      {name: 'Cost Optimisation', level: 8},
    ],
  },
  {
    name: 'Spoken Languages',
    skills: [
      {name: 'English', level: 10},
      {name: 'Hungarian', level: 10},
      {name: 'Serbian', level: 10},
      {name: 'German', level: 8},
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
      <ul className="list-disc list-outside ml-4 space-y-2">
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
      <ul className="list-disc list-outside ml-4 space-y-2">
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
      <ul className="list-disc list-outside ml-4 space-y-2">
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
      <ul className="list-disc list-outside ml-4 space-y-2">
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
 * Social items
 */
export const socialLinks: Social[] = [
  {label: 'Github', Icon: GithubIcon, href: 'https://github.com/tmajor-consulting'},
  {label: 'LinkedIn', Icon: LinkedInIcon, href: 'https://www.linkedin.com/in/tam%C3%A1s-flucsa-major-985a5196'},
  {label: 'Instagram', Icon: InstagramIcon, href: 'https://www.instagram.com/tamasflucsamajor/'},
];
