import {DeviceMobileIcon, LocationMarkerIcon, MailIcon} from '@heroicons/react/outline';
import classNames from 'classnames';
import {FC, memo} from 'react';
import Image from 'next/image';

import {contact, SectionId} from '../../../data/data';
import {ContactType, ContactValue} from '../../../data/dataDef';
import FacebookIcon from '../../Icon/FacebookIcon';
import GithubIcon from '../../Icon/GithubIcon';
import InstagramIcon from '../../Icon/InstagramIcon';
import LinkedInIcon from '../../Icon/LinkedInIcon';
import TwitterIcon from '../../Icon/TwitterIcon';
import Section from '../../Layout/Section';

const ContactValueMap: Record<ContactType, ContactValue> = {
  [ContactType.Email]: {Icon: MailIcon, srLabel: 'Email'},
  [ContactType.Phone]: {Icon: DeviceMobileIcon, srLabel: 'Phone'},
  [ContactType.Location]: {Icon: LocationMarkerIcon, srLabel: 'Location'},
  [ContactType.Github]: {Icon: GithubIcon, srLabel: 'Github'},
  [ContactType.LinkedIn]: {Icon: LinkedInIcon, srLabel: 'LinkedIn'},
  [ContactType.Facebook]: {Icon: FacebookIcon, srLabel: 'Facebook'},
  [ContactType.Twitter]: {Icon: TwitterIcon, srLabel: 'Twitter'},
  [ContactType.Instagram]: {Icon: InstagramIcon, srLabel: 'Instagram'},
};

const Contact: FC = memo(() => {
  const {headerText, items, profileImageSrc} = contact;
  return (
    <Section className="bg-neutral-800" sectionId={SectionId.Contact}>
      <div className={classNames('grid grid-cols-1 gap-y-6')}>
        {!!profileImageSrc && (
          <div className="col-span-1 flex justify-center md:justify-start">
            <div className="flex flex-col gap-6 md:flex-row md:items-center">
              <div className="relative h-24 w-24 overflow-hidden rounded-xl md:h-32 md:w-32">
                <Image alt="about-me-image" layout="fill" objectFit="cover" src={profileImageSrc} />
              </div>
              <MailIcon className="hidden h-16 w-16 text-white md:block" />
              <h2 className="text-2xl font-bold text-white">{headerText}</h2>
                  {items.map(({type, text, href}) => {
                    const {Icon, srLabel} = ContactValueMap[type];
                    return (
                      <div key={srLabel}>
                        <dt className="sr-only">{srLabel}</dt>
                        <dd className="flex items-center">
                          <a
                            className={classNames(
                              '-m-2 flex rounded-md p-2 text-neutral-300 hover:text-yellow-600 focus:outline-none focus:ring-2 focus:ring-yellow-600',
                              {'hover:text-white': href},
                            )}
                            href={href}
                            target="_blank">
                            <Icon aria-hidden="true" className="h-4 w-4 flex-shrink-0 text-neutral-100 sm:h-5 sm:w-5" />
                            <span className="ml-3 text-sm sm:text-base">{text}</span>
                          </a>
                        </dd>
                      </div>
                    );
                  })}
            </div>
          </div>

        )}
        {/*<div className="grid grid-cols-1 gap-6 md:grid-cols-2">*/}
          {/*// TODO implement contact form; potentially with https://sendgrid.com/ or https://javascript.plainenglish.io/how-to-build-a-contact-form-in-react-that-sends-emails-using-emailjs-70011d2563a3*/}
          {/*<div className="order-2 col-span-1 md:order-1 ">*/}
          {/*  <ContactForm />*/}
          {/*</div>*/}
          {/*<div className="order-1 col-span-1 flex flex-col gap-y-4 md:order-2">*/}
          {/*  <dl className="flex flex-col space-y-4 text-base text-neutral-500 sm:space-y-2">*/}
          {/*    {items.map(({type, text, href}) => {*/}
          {/*      const {Icon, srLabel} = ContactValueMap[type];*/}
          {/*      return (*/}
          {/*        <div key={srLabel}>*/}
          {/*          <dt className="sr-only">{srLabel}</dt>*/}
          {/*          <dd className="flex items-center">*/}
          {/*            <a*/}
          {/*              className={classNames(*/}
          {/*                '-m-2 flex rounded-md p-2 text-neutral-300 hover:text-yellow-600 focus:outline-none focus:ring-2 focus:ring-yellow-600',*/}
          {/*                {'hover:text-white': href},*/}
          {/*              )}*/}
          {/*              href={href}*/}
          {/*              target="_blank">*/}
          {/*              <Icon aria-hidden="true" className="h-4 w-4 flex-shrink-0 text-neutral-100 sm:h-5 sm:w-5" />*/}
          {/*              <span className="ml-3 text-sm sm:text-base">{text}</span>*/}
          {/*            </a>*/}
          {/*          </dd>*/}
          {/*        </div>*/}
          {/*      );*/}
          {/*    })}*/}
          {/*  </dl>*/}
          {/*</div>*/}
        {/*</div>*/}
      </div>
    </Section>
  );
});

Contact.displayName = 'Contact';
export default Contact;
