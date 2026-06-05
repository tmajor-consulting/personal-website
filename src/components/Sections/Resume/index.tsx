import {FC, memo} from 'react';

import {experience, SectionId, skills} from '../../../data/data';
import Section from '../../Layout/Section';
import Skills from './Skills';
import TimelineItem from './TimelineItem';

const Resume: FC = memo(() => {
  return (
    <>
      {/* Experience section */}
      <Section className="bg-[var(--bg)]" sectionId={SectionId.Resume}>
        <p className="section-eyebrow">Experience</p>
        <h2
          className="mb-10 font-serif text-3xl font-semibold tracking-[-0.02em]"
          style={{color: 'var(--text)'}}>
          Work history
        </h2>
        <div>
          {experience.map((item, index) => (
            <TimelineItem item={item} key={`${item.title}-${index}`} />
          ))}
        </div>
      </Section>

      {/* Skills section — rendered as a plain section to apply border-top */}
      <section
        className="px-4 pt-10 pb-16 md:py-24 lg:px-8"
        id={SectionId.Skills}
        style={{
          background: 'var(--surface)',
          borderTop: '1px solid var(--border)',
        }}>
        <div className="mx-auto max-w-screen-lg">
          <p className="section-eyebrow">Skills</p>
          <h2
            className="mb-10 font-serif text-3xl font-semibold tracking-[-0.02em]"
            style={{color: 'var(--text)'}}>
            What I bring
          </h2>
          <Skills skills={skills} />
        </div>
      </section>
    </>
  );
});

Resume.displayName = 'Resume';
export default Resume;
