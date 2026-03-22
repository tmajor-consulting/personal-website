import {DevicePhoneMobileIcon, EnvelopeIcon, MapPinIcon} from '@heroicons/react/24/outline';
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
  [ContactType.Email]: {Icon: EnvelopeIcon, srLabel: 'Email'},
  [ContactType.Phone]: {Icon: DevicePhoneMobileIcon, srLabel: 'Phone'},
  [ContactType.Location]: {Icon: MapPinIcon, srLabel: 'Location'},
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
      <div className="flex justify-center">
        <div className="w-full max-w-md rounded-2xl bg-neutral-700/50 p-8 shadow-xl">
          {!!profileImageSrc && (
            <div className="mb-6 flex flex-col items-center gap-4">
              <div className="relative h-28 w-28 overflow-hidden rounded-full ring-4 ring-yellow-600/50">
                <Image alt="profile" fill className="object-cover" src={profileImageSrc} />
              </div>
              <h2 className="text-2xl font-bold text-white">{headerText}</h2>
            </div>
          )}
          <dl className="flex flex-col gap-y-4">
            {items.map(({type, text, href}) => {
              const {Icon, srLabel} = ContactValueMap[type];
              return (
                <div key={srLabel}>
                  <dt className="sr-only">{srLabel}</dt>
                  <dd>
                    <a
                      className="group flex items-center gap-3 rounded-lg p-2 text-neutral-300 transition-colors duration-200 hover:bg-neutral-600/50 hover:text-yellow-400 focus:outline-none focus:ring-2 focus:ring-yellow-600"
                      href={href}
                      rel="noopener noreferrer"
                      target="_blank">
                      <Icon aria-hidden="true" className="h-5 w-5 flex-shrink-0 text-yellow-600 group-hover:text-yellow-400" />
                      <span className="text-sm sm:text-base">{text}</span>
                    </a>
                  </dd>
                </div>
              );
            })}
          </dl>
        </div>
      </div>
    </Section>
  );
});

Contact.displayName = 'Contact';
export default Contact;
