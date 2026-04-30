import {memo} from 'react';
import Section from '../Layout/Section';
import {SectionId} from '../../data/data';

const stats = [
  {value: '10+', label: 'Years in Engineering', sub: 'incl. 5+ in leadership'},
  {value: '60+', label: 'Engineer Organisation', sub: 'tech board member'},
  {value: '3', label: 'Seniority Promotions', sub: 'driven through coaching'},
  {value: '300+', label: 'CVs Reviewed', sub: '8 hires across 2 teams'},
];

const Highlights = memo(() => (
  <Section noPadding sectionId={SectionId.Highlights}>
    <div
      className="w-full"
      style={{
        background: 'var(--surface)',
        borderTop: '1px solid var(--border)',
        borderBottom: '1px solid var(--border)',
      }}>
      <div className="grid grid-cols-2 sm:grid-cols-4">
        {stats.map(({value, label, sub}, i) => (
          <div
            key={label}
            className="flex flex-col gap-2 px-8 py-10 sm:px-8"
            style={{
              borderRight: i < stats.length - 1 ? '1px solid var(--border)' : undefined,
            }}>
            <span
              className="font-serif font-semibold leading-none tracking-[-0.04em]"
              style={{fontSize: '52px', color: 'var(--text)'}}>
              {value}
            </span>
            <span className="text-sm font-medium" style={{color: 'var(--text)'}}>
              {label}
            </span>
            <span className="font-mono text-xs" style={{color: 'var(--muted)'}}>
              {sub}
            </span>
          </div>
        ))}
      </div>
    </div>
  </Section>
));

Highlights.displayName = 'Highlights';
export default Highlights;
