import {FC, memo, useState} from 'react';

import {contact, SectionId} from '../../../data/data';
import {ContactType} from '../../../data/dataDef';
import Section from '../../Layout/Section';

const contactIcons: Record<string, string> = {
  [ContactType.Email]: '✉',
  [ContactType.LinkedIn]: 'in',
  [ContactType.Github]: '⌥',
  [ContactType.Location]: '📍',
  [ContactType.Phone]: '☎',
};

const contactLabels: Record<string, string> = {
  [ContactType.Email]: 'Email',
  [ContactType.LinkedIn]: 'LinkedIn',
  [ContactType.Github]: 'GitHub',
  [ContactType.Location]: 'Location',
  [ContactType.Phone]: 'Phone',
};

const EmailCard: FC<{text: string; href?: string}> = ({text, href}) => {
  const [revealed, setRevealed] = useState(false);

  if (!revealed) {
    return (
      <button
        className="group flex w-full items-center gap-3.5 rounded-[10px] border border-[var(--border)] bg-[var(--surface)] p-4 text-left transition-all duration-200 hover:border-[var(--amber)]"
        onClick={() => setRevealed(true)}>
        <div
          className="flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-lg bg-[var(--bg)] text-base transition-colors duration-200 group-hover:bg-[var(--amber-light)]">
          ✉
        </div>
        <div>
          <div className="font-mono text-[11px] uppercase tracking-[0.08em]" style={{color: 'var(--muted)'}}>
            Email
          </div>
          <div className="text-sm font-medium transition-colors duration-200 group-hover:text-[var(--amber)]" style={{color: 'var(--muted)'}}>
            Click to reveal
          </div>
        </div>
      </button>
    );
  }

  return (
    <a
      className="group flex items-center gap-3.5 rounded-[10px] p-4 no-underline transition-all duration-200 hover:border-[var(--amber)]"
      href={href}
      style={{border: '1px solid var(--amber)', background: 'var(--surface)'}}>
      <div
        className="flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-lg text-base"
        style={{background: 'var(--amber-light)'}}>
        ✉
      </div>
      <div>
        <div className="font-mono text-[11px] uppercase tracking-[0.08em]" style={{color: 'var(--muted)'}}>
          Email
        </div>
        <div className="animate-[fadeIn_0.3s_ease] text-sm font-medium" style={{color: 'var(--text)'}}>
          {text}
        </div>
      </div>
    </a>
  );
};

const Contact: FC = memo(() => {
  const {items} = contact;
  return (
    <Section className="bg-[var(--bg)]" sectionId={SectionId.Contact}>
      <div className="grid gap-16 sm:grid-cols-2">
        {/* Left: heading */}
        <div>
          <p className="section-eyebrow">Contact</p>
          <h2
            className="mb-4 font-serif text-3xl font-semibold tracking-[-0.02em]"
            style={{color: 'var(--text)'}}>
            Get in touch.
          </h2>
          <p className="max-w-[340px] text-[15px] leading-[1.7]" style={{color: 'var(--muted)'}}>
            Open to Engineering Manager or Head of Engineering roles and select consulting engagements. Feel free to reach out directly.
          </p>
        </div>

        {/* Right: contact cards */}
        <div className="flex flex-col gap-4">
          {items.map(({type, text, href}) => {
            if (type === ContactType.Email) {
              return <EmailCard href={href} key={type} text={text} />;
            }
            return (
              <a
                className="group flex items-center gap-3.5 rounded-[10px] p-4 text-[var(--text)] no-underline transition-colors duration-200 hover:border-[var(--amber)]"
                href={href}
                key={type}
                rel="noopener noreferrer"
                style={{border: '1px solid var(--border)', background: 'var(--surface)'}}
                target={href?.startsWith('http') ? '_blank' : undefined}>
                <div
                  className="flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-lg text-base"
                  style={{background: 'var(--bg)'}}>
                  {contactIcons[type] ?? '·'}
                </div>
                <div>
                  <div
                    className="font-mono text-[11px] uppercase tracking-[0.08em]"
                    style={{color: 'var(--muted)'}}>
                    {contactLabels[type] ?? type}
                  </div>
                  <div className="text-sm font-medium" style={{color: 'var(--text)'}}>
                    {text}
                  </div>
                </div>
              </a>
            );
          })}
        </div>
      </div>
    </Section>
  );
});

Contact.displayName = 'Contact';
export default Contact;
