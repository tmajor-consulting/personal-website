import {FC, memo} from 'react';

import {principlesData, SectionId} from '../../data/data';
import Section from '../Layout/Section';

const Principles: FC = memo(() => {
  const {description, principlesItems} = principlesData;
  return (
    <Section className="bg-neutral-800" sectionId={SectionId.Principles}>
      <div className="flex flex-col gap-y-8">
        <div className="flex flex-col gap-y-2">
          <h2 className="text-2xl font-bold text-white">My Principles</h2>
          <p className="prose prose-sm text-gray-300 sm:prose-base">{description}</p>
        </div>
        <ul className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {principlesItems.map(({text}, idx) => (
            <li
              className="flex items-start gap-x-3 rounded-lg border border-neutral-700 bg-neutral-700/40 p-4 transition-colors duration-200 hover:border-yellow-600/50 hover:bg-neutral-700/60"
              key={idx}>
              <span className="flex h-7 w-7 flex-shrink-0 items-center justify-center rounded-full bg-yellow-600/20 text-sm font-bold text-yellow-500">
                {idx + 1}
              </span>
              <span className="text-sm text-gray-300 sm:text-base">{text}</span>
            </li>
          ))}
        </ul>
      </div>
    </Section>
  );
});

Principles.displayName = 'Principles';
export default Principles;
