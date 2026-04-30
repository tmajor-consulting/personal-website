import React, {memo} from 'react';
import Section from '../Layout/Section';
import {SectionId} from '../../data/data';

const stats = [
  {value: '10+', label: 'Years in Engineering', sub: 'incl. 5+ in leadership'},
  {value: '60+', label: 'Engineer Organisation', sub: 'tech board member'},
  {value: '3', label: 'Seniority Promotions', sub: 'driven through coaching'},
  {value: '300+', label: 'CVs Reviewed', sub: '8 hires across 2 teams'},
];

const Highlights = memo(() => (
  <Section className="bg-white" sectionId={SectionId.Highlights}>
    <div className="mx-auto max-w-5xl px-4 py-12">
      <div className="grid grid-cols-2 gap-6 sm:grid-cols-4">
        {stats.map(({value, label, sub}) => (
          <div key={label} className="flex flex-col gap-1">
            <span className="text-4xl font-semibold tracking-tight text-stone-900">{value}</span>
            <span className="text-sm font-medium text-stone-700">{label}</span>
            <span className="text-xs text-stone-400">{sub}</span>
          </div>
        ))}
      </div>
    </div>
  </Section>
));

Highlights.displayName = 'Highlights';
export default Highlights;
