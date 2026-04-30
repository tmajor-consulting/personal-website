import React, {memo} from 'react';
import Section from '../Layout/Section';
import {SectionId} from '../../data/data';

const services = [
  {
    title: 'Fractional Engineering Manager',
    desc: 'Embedded EM leadership for teams without a dedicated manager. I integrate with your product and engineering process and act as a full EM — not just an advisor.',
  },
  {
    title: 'Architecture Review',
    desc: 'Assessment of your current architecture with actionable recommendations. Covering system boundaries, event flows, scalability, and documentation standards.',
  },
  {
    title: 'Engineering Standards',
    desc: 'Definition and rollout of testing guidelines, Definition of Ready/Done, deployment practices, and documentation standards — with buy-in from the team.',
  },
  {
    title: 'Team Building & Hiring',
    desc: 'Support across the full hiring lifecycle: defining roles, screening, interviews, onboarding. I maintain a high bar, even when it means closing a search without a hire.',
  },
];

const Consulting = memo(() => (
  <Section className="bg-stone-900" sectionId={SectionId.Consulting}>
    <div className="mx-auto max-w-5xl px-4 py-16 sm:py-20">
      <div className="mb-12">
        <p className="mb-3 font-mono text-xs uppercase tracking-widest text-stone-400">TMajor Consulting</p>
        <h2 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl">
          Fractional engineering leadership<br className="hidden sm:block" /> for growing tech teams.
        </h2>
        <p className="mt-4 max-w-xl text-base text-stone-400">
          Whether you need an interim Engineering Manager, an architecture review, or help building hiring and engineering standards — I bring the same craft and rigour I've applied building platforms at scale.
        </p>
        <p className="mt-3 text-sm text-stone-500">Currently available for select engagements.</p>
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        {services.map(({title, desc}) => (
          <div key={title} className="rounded-xl border border-white/10 bg-white/5 p-6">
            <h3 className="mb-2 text-sm font-semibold text-white">{title}</h3>
            <p className="text-sm leading-relaxed text-stone-400">{desc}</p>
          </div>
        ))}
      </div>

      <div className="mt-10">
        <a
          className="inline-flex items-center gap-2 rounded-lg bg-white px-5 py-2.5 text-sm font-semibold text-stone-900 hover:bg-stone-100 transition-colors"
          href={`#${SectionId.Contact}`}>
          Get in touch →
        </a>
      </div>
    </div>
  </Section>
));

Consulting.displayName = 'Consulting';
export default Consulting;
