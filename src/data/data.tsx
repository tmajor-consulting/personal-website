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
      // @ts-expect-error heroicons ForwardRef component works at runtime
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
    location: 'Munich, Germany',
    title: 'Engineering Manager',
    content: (
      <ul className="list-disc list-outside ml-4 space-y-1">
        <li>Member of the company's technology board -- a cross-unit leadership forum acting as the de-facto CTO function. Together with other senior engineering leaders, made final decisions on long-term technical strategy, architecture direction, and technology investments for 8 teams across 4 business units.</li>
        <li>Lead a team of 6 engineers in the design, development, and implementation of features from conception to completion, ensuring adherence to quality standards, budget constraints, and project timelines. (Examples: Unified product data structure and product discovery process for 2 e-commerce brands; Communication and Data sync with SAP, Yotpo, ProductsUp)</li>
        <li>Collaborated with cross-functional stakeholders to discover the best path for improving our product, prioritize feature development, and deliver high-quality solutions.</li>
        <li>Mentored and coached team members through regular 1-on-1 meetings to foster a culture of learning and growth. (2 engineers progressing to Senior, 1 promoted to Senior)</li>
        <li>Established performance metrics and KPIs focusing on team and business outcomes (DORA, collaborative metrics, click-through and add-to-cart rates).</li>
        <li>Drove recruitment efforts throughout the full lifecycle. (100+ CVs reviewed, 20+ interviews, 4 new hires across 2 teams)</li>
      </ul>
    ),
  },
  {
    startDate: 'Mar. 2021',
    endDate: 'Jun. 2023',
    company: 'Jochen Schweizer mydays Group',
    location: 'Munich, Germany',
    title: 'Principal Engineer',
    content: (
      <ul className="list-disc list-outside ml-4 space-y-1">
        <li>Worked closely with multiple teams to ensure engineering best practices were implemented and followed.</li>
        <li>Collaborated with architects to design and implement the company's technology platform, ensuring scalability and efficiency (multi-tenant e-commerce solution using React micro-frontends and an event-driven microservice based backend powered by Kafka).</li>
        <li>Researched, evaluated, and integrated third-party tools to improve engineering workflows while considering technical fit and cost. (Yotpo as external review management tool, Algolia as an AI powered search engine)</li>
        <li>Acted as a key technical point of contact for stakeholders, ensuring transparent communication and effective collaboration.</li>
        <li>Played a major role in recruitment, screening CVs, conducting technical interviews and onboarding engineers, ranging from juniors to architects. (200+ CVs reviewed, 30+ technical interviews, 5 new hires across 2 teams)</li>
        <li>Conducted regular 1-on-1 meetings with engineers, providing mentorship and career guidance.</li>
      </ul>
    ),
  },
  {
    startDate: 'Jul. 2019',
    endDate: 'Feb. 2021',
    company: 'Jochen Schweizer mydays Group',
    location: 'Munich, Germany',
    title: 'Full Stack Software Engineer',
    content: (
      <ul className="list-disc list-outside ml-4 space-y-1">
        <li>Developed and implemented new features from conception to production, collaborating closely with Product Owners and Architects.</li>
        <li>Helped introduce and implement an E2E testing framework, which became a key part of the company's quality assurance process.</li>
        <li>Served as a team representative in the Nexus Scrum model, coordinating tasks between teams, unblocking engineers, and facilitating communication between technical and non-technical stakeholders.</li>
      </ul>
    ),
  },
  {
    startDate: 'Mar. 2015',
    endDate: 'Jun. 2019',
    company: 'tecRacer GmbH & Co. KG',
    location: 'Hannover, Germany',
    title: '(Senior) Software Engineer',
    content: (
      <ul className="list-disc list-outside ml-4 space-y-1">
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
