import GithubIcon from '../components/Icon/GithubIcon';
import InstagramIcon from '../components/Icon/InstagramIcon';
import LinkedInIcon from '../components/Icon/LinkedInIcon';

// @ts-ignore
import heroImage from '../images/header-background2.jpeg';
import profilepic from '../images/profilepic.png';

import {
  Principles,
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
  Principles: 'principles',
  Contact: 'contact',
  Resume: 'resume',
  Skills: 'skills',
  Stats: 'stats',
} as const;

export type SectionId = typeof SectionId[keyof typeof SectionId];

/**
 * About section
 */
export const aboutData: About = {
  imageSrc: heroImage,
  name: `Tamas Flucsa Major.`,
  description: (
    <>
      <p className="prose-sm text-stone-200 sm:prose-base lg:prose-lg">
        I'm a Munich based <strong className="text-stone-100">Software Craftsman</strong>, currently working
        as a Software Engineering Consultant at <strong className="text-stone-100">TMajor Consulting</strong> and an Engineering Manager
        at <strong className="text-stone-100">JSMD Group</strong>, guiding and empowering teams to build high quality, maintainable
        and amazing Software.
      </p>
    </>
  ),
  actions: [
    // {
    //   href: '/assets/resume.pdf',
    //   text: 'Resume',
    //   primary: true,
    //   Icon: DownloadIcon,
    // },
    {
      href: `#${SectionId.Contact}`,
      text: 'Contact',
      primary: false,
    },
  ],
};

/**
 * Principles section
 */
export const principlesData: Principles = {
  description: `Following the Programmers Oath by Robert C. Martin - In order to defend and preserve the honor of the profession of computer programmers, I promise that, to the best of my ability and judgement:`,
  principlesItems: [
    {text: 'I will not produce harmful code.'},
    {text: 'The code that I produce will always be my best work. I will not knowingly allow code that is defective either in behavior or structure to accumulate.'},
    {text: 'I will produce, with each release, a quick, sure, and repeatable proof that every element of the code works as it should.'},
    {text: 'I will make frequent, small, releases so that I do not impede the progress of others.'},
    {text: 'I will fearlessly and relentlessly improve my creations at every opportunity. I will never degrade them.'},
    {text: 'I will do all that I can to keep the productivity of myself, and others, as high as possible. I will do nothing that decreases that productivity.'},
    {text: 'I will continuously ensure that others can cover for me, and that I can cover for them.'},
    {text: 'I will produce estimates that are honest both in magnitude and precision. I will not make promises without certainty.'},
    {text: 'I will never stop learning and improving my craft.'},
  ],
};

/**
 * Skills section
 */
export const skills: SkillGroup[] = [
  {
    name: 'Spoken languages',
    skills: [
      {
        name: 'Hungarian',
        level: 10,
      },
      {
        name: 'Serbian',
        level: 10,
      },
      {
        name: 'English',
        level: 10,
      },
      {
        name: 'German',
        level: 9,
      },
    ],
  },
  {
    name: 'Software Development',
    skills: [
      {
        name: 'Software Architecture',
        level: 10,
      },
      {
        name: 'Microservices',
        level: 10,
      },
      {
        name: 'Event Driven Systems',
        level: 10,
      },
      {
        name: 'Object Oriented Programming',
        level: 9,
      },
    ],
  },
  {
    name: 'Programming Languages and Frameworks',
    skills: [
      {
        name: 'Node.js',
        level: 9,
      },
      {
        name: 'Nest.js',
        level: 10,
      },
      {
        name: 'Typescript',
        level: 9,
      },
      {
        name: 'React',
        level: 5,
      },
    ],
  },
  {
    name: 'Agile Leadership',
    skills: [
      {
        name: 'Team Leadership',
        level: 10,
      },
      {
        name: 'Agile Methodologies',
        level: 10,
      },
      {
        name: 'Coaching',
        level: 8,
      },
      {
        name: 'Mentoring',
        level: 6,
      },
    ],
  },
];

/**
 * Resume section
 */

export const experience: TimelineItem[] = [
  {
    startDate: 'Oct. 2021',
    endDate: 'Present',
    company: 'TMajor Consulting',
    location: 'Munich, Germany',
    title: 'Freelance Software Consultant',
    content: (
      <p>
        As a Software Consultant I help my clients design, architect and build the systems they need to achieve their goals in a maintainable way. Furthermore I can also offer my expertise in building and scaling up teams, as well as ensuring the code delivered by teams lives up to a high technical standard.
      </p>
    ),
  },
  {
    startDate: 'Jul. 2023',
    endDate: 'Present',
    company: 'Jochen Schweizer mydays Group',
    location: 'Munich, Germany',
    title: 'Engineering Manager',
    content: (
      <p>
        On a journey to learn and grow together with my team.
      </p>
    ),
  },
  {
    startDate: 'Mar. 2021',
    endDate: 'Jun. 2023',
    company: 'Jochen Schweizer mydays Group',
    location: 'Munich, Germany',
    title: 'Principal Engineer',
    content: (
      <p>
        As a Principal Engineer, I worked closely with multiple teams to ensure that engineering best practices are implemented and followed consistently. Through my guidance and coaching, I have helped these teams to grow and develop into highly efficient units that deliver high-quality software solutions.
        <br/>I worked closely with the architects on designing and architecting the company tech platform and then ensuring that the teams are implementing the architectural vision.
        <br/>I drove the discovery and implementation of multiple 3rd party tools, considering technical fit, as well as implementation and running costs.
        <br/>I was a key contact person for any technical questions or concerns to the stakeholders. I worked on establishing transparent communication with them and implemented clear ways of cross-functional collaboration.
        <br/>I took an active part in recruiting, starting from the initial screening of incoming CVs, through conducting technical interviews for roles ranging from Juniors to Solution Architects, all the way to onboarding new team members into the teams.
        <br/>I conducted regular 1on1 meeting with the Engineers on my teams to help them solve any day-to-day issues as well as coaching sessions aimed at helping them advance their careers.
        <br/>I took an active role in the Culture Ambassador Circle, and initiative aimed at bridging the gap between C-Level, HR and the rest of the company. My focus areas were ensuring transparent communication and bringing the company values alive in the day-to-day life of the engineering teams.
      </p>
    ),
  },
  {
    startDate: 'Jul. 2019',
    endDate: 'Feb. 2021',
    company: 'Jochen Schweizer mydays Group',
    location: 'Munich, Germany',
    title: 'Fullstack Software Engineer',
    content: (
      <p>
        As a full stack Software Engineer in one of the self-organising teams, I have worked on the implementation of new features, starting with the discovery and design phase - where I actively collaborated with POs and Architects, breaking down the requirements from a user- as well as technical-perspectives - and driving them through implementation, testing with our team all the way to deployment and maintenance on the production system.
      </p>
    ),
  },
  {
    startDate: 'Apr. 2018',
    endDate: 'Jun. 2019',
    company: 'tecRacer GmbH & Co. KG',
    location: 'Hannover, Germany',
    title: 'Senior Software Engineer',
    content: (
      <p>
        Worked as part of an Agile software development team, developing web based applications together with the customers in an interactive, dynamic process. Helped coach more junior team members. Helped take technical decisions on the architecture of new projects.
      </p>
    ),
  },
  {
    startDate: 'Mar. 2015',
    endDate: 'Mar. 2018',
    company: 'tecRacer GmbH & Co. KG',
    location: 'Hannover, Germany',
    title: 'Software Engineer',
    content: (
      <p>
        Worked as part of an Agile software development team, developing web based applications together with the customers in an interactive, dynamic process.
      </p>
    ),
  },
];

export const contact: ContactSection = {
  headerText: 'Get in touch.',
  profileImageSrc: profilepic,
  items: [
    {
      type: ContactType.Email,
      text: 'tmajor.consulting@google.com',
      href: 'mailto:tmajor.consulting@google.com',
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
  {label: 'Instagram', Icon: InstagramIcon, href: 'https://www.instagram.com/tomymajor/'},
];
