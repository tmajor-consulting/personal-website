import {memo} from 'react';
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
  <Section className="bg-[var(--dark2)]" sectionId={SectionId.Consulting}>
    <div className="mb-12">
      <p
        className="mb-3.5 font-mono text-[10px] uppercase tracking-[0.16em]"
        style={{color: 'rgba(255,255,255,0.3)'}}>
        TMajor Consulting
      </p>
      <h2
        className="mb-4 max-w-[560px] font-serif text-3xl font-semibold leading-[1.15] tracking-[-0.02em] text-white sm:text-4xl">
        Fractional engineering leadership<br className="hidden sm:block" /> for growing tech teams.
      </h2>
      <p className="mb-2.5 max-w-[520px] text-[15px] leading-[1.7]" style={{color: 'rgba(255,255,255,0.5)'}}>
        Whether you need an interim Engineering Manager, an architecture review, or help building hiring and
        engineering standards — I bring the same craft and rigour I've applied building platforms at scale.
      </p>
      <p className="font-mono text-[13px]" style={{color: 'rgba(255,255,255,0.3)'}}>
        Currently available for select engagements.
      </p>
    </div>

    <div className="mb-10 grid gap-3 sm:grid-cols-2">
      {services.map(({title, desc}) => (
        <div
          key={title}
          className="rounded-[10px] border border-white/[0.08] bg-white/[0.04] p-6 transition-colors duration-200 hover:border-white/[0.14] hover:bg-white/[0.07]">
          <h3 className="mb-2 text-sm font-semibold text-white">{title}</h3>
          <p className="text-[14px] leading-[1.65]" style={{color: 'rgba(255,255,255,0.45)'}}>
            {desc}
          </p>
        </div>
      ))}
    </div>
  </Section>
));

Consulting.displayName = 'Consulting';
export default Consulting;
