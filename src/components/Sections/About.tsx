import {ChevronDownIcon} from '@heroicons/react/24/outline';
import classNames from 'classnames';
import {FC, memo, useEffect, useState} from 'react';

import {aboutData, SectionId} from '../../data/data';
import Section from '../Layout/Section';
import Socials from '../Socials';

const titles = ['Engineering Manager', 'Software Craftsman'];
const TYPING_MS = 75;
const ERASING_MS = 40;
const PAUSE_AFTER_TYPING_MS = 1800;
const PAUSE_AFTER_ERASING_MS = 400;

const About: FC = memo(() => {
  const {imageSrc, name, description, actions} = aboutData;
  const [displayed, setDisplayed] = useState('');
  const [titleIndex, setTitleIndex] = useState(0);
  const [phase, setPhase] = useState<'typing' | 'pausing' | 'erasing'>('typing');
  const [heroHeight, setHeroHeight] = useState<number | null>(null);

  useEffect(() => {
    // Lock to window.innerHeight on mount to prevent iOS Safari's visual scale
    // when the browser chrome (address bar) hides on scroll. Viewport units
    // (svh/dvh/vh) all trigger a compositor-level zoom on iOS; a fixed px value does not.
    setHeroHeight(window.innerHeight);
  }, []);

  useEffect(() => {
    const title = titles[titleIndex];
    if (phase === 'typing') {
      if (displayed.length < title.length) {
        const t = setTimeout(() => setDisplayed(title.slice(0, displayed.length + 1)), TYPING_MS);
        return () => clearTimeout(t);
      }
      const t = setTimeout(() => setPhase('erasing'), PAUSE_AFTER_TYPING_MS);
      return () => clearTimeout(t);
    }
    if (phase === 'erasing') {
      if (displayed.length > 0) {
        const t = setTimeout(() => setDisplayed(displayed.slice(0, -1)), ERASING_MS);
        return () => clearTimeout(t);
      }
      const t = setTimeout(() => {
        setTitleIndex(i => (i + 1) % titles.length);
        setPhase('typing');
      }, PAUSE_AFTER_ERASING_MS);
      return () => clearTimeout(t);
    }
    return undefined;
  }, [displayed, phase, titleIndex]);

  return (
    <Section noPadding sectionId={SectionId.About}>
      <div
        className="relative flex w-screen overflow-hidden items-center justify-center pt-20 sm:pt-0"
        style={{
          height: heroHeight ? `${heroHeight}px` : '100svh',
          backgroundImage: `url(${(imageSrc as unknown as {src: string}).src})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}>
        <div className="z-10 max-w-screen-lg px-4 lg:px-0">
          <div className="flex flex-col items-center gap-y-6 rounded-xl bg-gray-800/10 p-6 text-center shadow-lg backdrop-blur-md">
            <h1 className="text-4xl font-bold text-white sm:text-5xl lg:text-7xl">{name}</h1>
            <p className="min-h-[1.75rem] border-r-2 border-yellow-500 font-mono text-lg text-yellow-400 animate-blink sm:min-h-[2rem] sm:text-xl">
              {displayed}
            </p>
            {description}
            <div className="flex gap-x-4 text-neutral-100">
              <Socials />
            </div>
            <div className="flex w-full justify-center gap-x-4">
              {actions.map(({href, text, primary, Icon}) => (
                <a
                  className={classNames(
                    'flex gap-x-2 rounded-full border-2 bg-none py-2 px-4 text-sm font-medium text-white ring-offset-yellow-600/50 hover:bg-yellow-600/50 focus:outline-none focus:ring-2 focus:ring-offset-2 sm:text-base',
                    primary ? 'border-yellow-600 ring-yellow-600' : 'border-white ring-white',
                  )}
                  href={href}
                  key={text}>
                  {text}
                  {Icon && <Icon className="h-5 w-5 text-white sm:h-6 sm:w-6" />}
                </a>
              ))}
            </div>
          </div>
        </div>
        <div className="absolute inset-x-0 bottom-6 flex justify-center">
          <a
            aria-label="Scroll down"
            className="rounded-full bg-white/20 p-2 text-white backdrop-blur-sm transition-colors hover:bg-white/30 focus:outline-none focus:ring-2 focus:ring-white"
            href={`/#${SectionId.Principles}`}>
            <ChevronDownIcon className="h-6 w-6 animate-bounce" />
          </a>
        </div>
      </div>
    </Section>
  );
});

About.displayName = 'About';
export default About;
