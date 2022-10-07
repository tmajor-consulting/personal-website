import {FC, SVGProps} from 'react';

import {IconProps} from '../components/Icon/Icon';

export interface HomepageMeta {
  title: string;
  description: string;
  ogImageUrl?: string;
  twitterCardType?: 'summary' | 'summary_large';
  twitterTitle?: string;
  twitterSite?: string;
  twitterCreator?: string;
  twitterDomain?: string;
  twitterUrl?: string;
  twitterDescription?: string;
  twitterImageUrl?: string;
}

/**
 * About section
 */
export interface About {
  imageSrc: string;
  name: string;
  description: JSX.Element;
  actions: AboutActionItem[];
}

interface AboutActionItem {
  href: string;
  text: string;
  primary?: boolean;
  Icon?: (props: SVGProps<SVGSVGElement>) => JSX.Element;
}

/**
 * Principles section
 */
export interface Principles {
  description: string;
  principlesItems: PrinciplesItems[];
}

export interface PrinciplesItems {
  text: string;
}

/**
 * Skills section
 */

export interface Skill {
  name: string;
  level: number;
  max?: number;
}

export interface SkillGroup {
  name: string;
  skills: Skill[];
}

/**
 * Resume section
 */
export interface TimelineItem {
  startDate: string;
  endDate: string;
  location: string;
  company: string;
  title: string;
  content: JSX.Element;
}

/**
 * Contact section
 */
export interface ContactSection {
  headerText?: string;
  description?: string;
  items: ContactItem[];
  profileImageSrc?: string;
}

export const ContactType = {
  Email: 'Email',
  Phone: 'Phone',
  Location: 'Location',
  Github: 'Github',
  LinkedIn: 'LinkedIn',
  Facebook: 'Facebook',
  Twitter: 'Twitter',
  Instagram: 'Instagram',
} as const;

export type ContactType = typeof ContactType[keyof typeof ContactType];

export interface ContactItem {
  type: ContactType;
  text: string;
  href?: string;
}

export interface ContactValue {
  Icon: FC<IconProps> | ((props: SVGProps<SVGSVGElement>) => JSX.Element);
  srLabel: string;
}

/**
 * Social items
 */
export interface Social {
  label: string;
  Icon: FC<IconProps>;
  href: string;
}
