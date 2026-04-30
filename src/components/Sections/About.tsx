import {FC, memo, useEffect, useRef} from 'react';

import {aboutData, SectionId, socialLinks} from '../../data/data';
import Section from '../Layout/Section';

const About: FC = memo(() => {
  const {imageSrc, name, description, actions} = aboutData;
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Lock to window.innerHeight on mount to prevent iOS Safari's visual scale
    // when the browser chrome hides on scroll.
    if (containerRef.current) {
      containerRef.current.style.minHeight = `${window.innerHeight}px`;
    }
  }, []);

  return (
    <Section noPadding sectionId={SectionId.About}>
      <div
        ref={containerRef}
        className="relative flex items-center overflow-hidden"
        style={{background: 'var(--dark)', paddingTop: 'var(--nav-h)'}}>
        {/* Gradient overlay */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0"
          style={{
            background:
              'radial-gradient(ellipse 60% 50% at 70% 50%, oklch(25% 0.04 255 / 0.6) 0%, transparent 70%), radial-gradient(ellipse 40% 60% at 10% 80%, oklch(20% 0.06 280 / 0.4) 0%, transparent 60%)',
          }}
        />

        <div className="relative mx-auto w-full max-w-6xl px-8 py-20 sm:px-12">
          <div className="flex flex-col-reverse items-start gap-10 sm:grid sm:items-center sm:gap-16" style={{gridTemplateColumns: '1fr 220px'}}>
            {/* Left: text */}
            <div>
              <p
                className="mb-4 font-mono text-[11px] uppercase tracking-[0.16em]"
                style={{color: 'rgba(255,255,255,0.4)'}}>
                Engineering Manager · Munich, Germany
              </p>
              <h1
                className="mb-5 font-serif font-semibold leading-[1.05] tracking-tight text-white"
                style={{fontSize: 'clamp(40px, 5vw, 64px)'}}>
                {name.split(' ').slice(0, 1).join(' ')}
                <br />
                {name.split(' ').slice(1).join(' ')}
              </h1>
              <p
                className="mb-6 text-[17px] leading-[1.7]"
                style={{color: 'rgba(255,255,255,0.62)'}}>
                {description}
              </p>

              {/* Availability badges */}
              <div className="mb-8 flex flex-wrap gap-2">
                <span
                  className="inline-flex items-center gap-1.5 rounded-full px-3 py-1.5 text-xs font-medium"
                  style={{
                    background: 'rgba(74,222,128,0.12)',
                    border: '1px solid rgba(74,222,128,0.3)',
                    color: 'rgb(134,239,172)',
                  }}>
                  <span
                    className="inline-block h-1.5 w-1.5 animate-pulse rounded-full"
                    style={{background: 'var(--green, oklch(55% 0.16 155))'}}
                  />
                  Open to EM roles
                </span>
                <span
                  className="inline-flex items-center gap-1.5 rounded-full px-3 py-1.5 text-xs font-medium"
                  style={{
                    background: 'rgba(74,222,128,0.12)',
                    border: '1px solid rgba(74,222,128,0.3)',
                    color: 'rgb(134,239,172)',
                  }}>
                  <span
                    className="inline-block h-1.5 w-1.5 animate-pulse rounded-full"
                    style={{background: 'var(--green, oklch(55% 0.16 155))'}}
                  />
                  Open to Head of Engineering roles
                </span>
                <span
                  className="inline-flex items-center rounded-full px-3 py-1.5 text-xs font-medium"
                  style={{border: '1px solid rgba(255,255,255,0.15)', color: 'rgba(255,255,255,0.65)'}}>
                  Munich / Remote
                </span>
                <span
                  className="inline-flex items-center rounded-full px-3 py-1.5 text-xs font-medium"
                  style={{border: '1px solid rgba(255,255,255,0.15)', color: 'rgba(255,255,255,0.65)'}}>
                  10+ yrs experience
                </span>
              </div>

              {/* CTAs */}
              <div className="mb-7 flex flex-wrap gap-3">
                {actions.map(({href, text, primary, Icon}) =>
                  primary ? (
                    <a
                      className="inline-flex items-center gap-2 rounded-lg bg-white px-5 py-2.5 text-sm font-semibold transition-colors hover:bg-stone-100"
                      href={href}
                      key={text}
                      rel="noopener noreferrer"
                      style={{color: 'var(--dark)'}}
                      target="_blank">
                      {Icon && <Icon className="h-3.5 w-3.5" />}
                      {text}
                    </a>
                  ) : (
                    <a
                      className="inline-flex items-center gap-2 rounded-lg border border-white/20 px-5 py-2.5 text-sm font-medium text-white/70 transition-colors hover:border-white/40 hover:text-white"
                      href={href}
                      key={text}>
                      {text}
                    </a>
                  ),
                )}
              </div>

              {/* Social links */}
              <div className="flex gap-3.5">
                {socialLinks.map(({label, href}) => (
                  <a
                    className="font-mono text-xs tracking-[0.04em] text-white/30 transition-colors hover:text-white/70"
                    href={href}
                    key={label}
                    rel="noopener noreferrer"
                    target="_blank">
                    {label}
                  </a>
                ))}
              </div>
            </div>

            {/* Right: circular profile photo */}
            <div
              className="h-36 w-36 flex-shrink-0 overflow-hidden rounded-full sm:h-[220px] sm:w-[220px] sm:justify-self-end"
              style={{border: '3px solid rgba(255,255,255,0.1)'}}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img alt={name} className="h-full w-full object-cover" src={imageSrc} />
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
});

About.displayName = 'About';
export default About;
