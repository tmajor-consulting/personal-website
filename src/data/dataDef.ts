import React, {FC, PropsWithChildren, ReactElement, SVGProps} from 'react';

import {IconProps} from '../components/Icon/Icon';

export type HomepageMeta = PropsWithChildren<{
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
}>;

/**
 * About section
 */
export interface About {
  imageSrc: string;
  name: string;
  description: ReactElement;
  actions: AboutActionItem[];
}

interface AboutActionItem {
  href: string;
  text: string;
  primary?: boolean;
  Icon?: FC<SVGProps<SVGSVGElement>> | ((props: SVGProps<SVGSVGElement>) => ReactElement);
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
  endDate?: string;
  title: string;
  company: string;
  companyDescriptor?: string;
  location: string;
  content: React.ReactNode;
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
  Icon: FC<IconProps> | ((props: SVGProps<SVGSVGElement>) => ReactElement);
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
