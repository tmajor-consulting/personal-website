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
  name: `Tamas Flucsa Major`,
  description: (
    <>
      <p className="prose-sm text-stone-200 sm:prose-base lg:prose-lg">
        I'm a Munich based <strong className="text-stone-100">Software Craftsman</strong>, currently working
        as a Software Engineering Consultant at <strong className="text-stone-100">TMajor Consulting</strong> and an Engineering Manager
        at <strong className="text-stone-100">JSMD Group</strong>.
        During my career, I have focused on empathy, transparency, honesty, open communication and collaboration within my
        teams, as well as with stakeholders. I enjoy continuous learning, mentoring engineers, driving technical excellence,
        building scalable software architectures, improving processes and working cross functionally to turn ideas into reality. My
        additional interest in finance and economics helps me weight the costs and benefits of technical decisions and consider
        their broader business impact.
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
      {
        name: 'AI Integration (LLMs, Agentic AI) - Learning now',
        level: 2,
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
        Member of the company’s technology board, a cross-unit leadership forum acting as the de-facto CTO function.
        Together with other senior engineering leaders, made final decisions on long-term technical strategy, architecture
        direction, and technology investments for 8 teams across 4 business units.  <br/>Drove alignment on platform evolution,
        system scalability, and technical dependencies.  <br/>Lead implementation of tech-board decisions within my area,
        ensuring my team delivers on strategic objectives.  <br/>Currently spearheading initiatives to formalize architecture
        documentation and improve governance processes.
        <br/> <br/>Lead a team of 6 engineers in the design, development, and implementation of features from conception to
        completion, ensuring adherence to quality standards, budget constraints, and project timelines. (Examples: Unified
        product data structure and product discovery process for 2 e-commerce brands; Communication and Data sync with
        SAP, Yotpo, ProductsUp)
        <br/> <br/>Collaborated with cross-functional stakeholders to discover the best path for improving our product, prioritize feature
        development, address technical challenges, and deliver high-quality solutions that meet customer requirements.
        <br/> <br/>Mentored and coached team members through regular 1-on-1 meetings to foster a culture of learning, growth and
        build a team where everyone is a leader.
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
        Worked closely with multiple teams to ensure engineering best practices were implemented and followed.
        <br/> <br/>Collaborated with architects to design and implement the company's technology platform, ensuring scalability and
        efficiency (multi-tenant e-commerce solution using React micro-frontends and an event-driven microservice based
        backend powered by Kafka)
        <br/> <br/>Researched, evaluated, and integrated third-party tools to improve engineering workflows while considering technical
        fit and cost. (Yotpo as external review management tool, Algolia as an AI powered search engine)
        <br/> <br/>Acted as a key technical point of contact for stakeholders, ensuring transparent communication and effective
        collaboration.
        <br/> <br/>Played a major role in recruitment, screening CVs, conducting technical interviews and onboarding engineers, ranging
        from juniors to architects. (200+ CVs reviewed, 30+ Technical interviews, 5 new Hires in 2 Teams)
        <br/> <br/>Conducted regular 1-on-1 meetings with engineers, providing mentorship and career guidance.
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
        Developed and implemented new features from conception to production, collaborating closely with Product Owners
        and Architects.
        <br/> <br/>Helped introduce and implement an E2E testing framework, which became a key part of the company's quality
        assurance process.
        <br/> <br/>Served as a team representative in the Nexus Scrum model, coordinating tasks between teams, unblocking engineers,
        and facilitating communication between technical and non-technical stakeholders.
      </p>
    ),
  },
  {
    startDate: 'Mar. 2015',
    endDate: 'Jun. 2019',
    company: 'tecRacer GmbH & Co. KG',
    location: 'Hannover, Germany',
    title: '(Senior) Software Engineer',
    content: (
      <p>
        Developed web-based applications in an agile environment, working closely with customers to refine requirements
        and deliver high-quality solutions.
        <br/> <br/>Maintained and extended legacy code for long-running projects and built new applications from scratch.
        <br/> <br/>Acted as a key communication bridge between customers and developers, ensuring requirements were clear and
        technical solutions met expectations.
        <br/> <br/>Provided support, and issue resolution under tight deadlines to ensure smooth operation of critical systems.
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
