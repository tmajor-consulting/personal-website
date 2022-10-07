import classNames from 'classnames';
import {FC, memo} from 'react';

import {principlesData, SectionId} from '../../data/data';
import Section from '../Layout/Section';

const Principles: FC = memo(() => {
  const {description, principlesItems} = principlesData;
  return (
    <Section className="bg-neutral-800" sectionId={SectionId.Principles}>
      <div className={classNames('grid grid-cols-1 gap-y-4')}>
        <div className={classNames('col-span-1 flex flex-col gap-y-6')}>
          <div className="flex flex-col gap-y-2">
            <h2 className="text-2xl font-bold text-white">My Principles</h2>
            <p className="prose prose-sm text-gray-300 sm:prose-base">{description}</p>
          </div>
          <ul className="grid grid-cols-1 gap-4">
            {principlesItems.map(({text}, idx) => (
              <li className="col-span-1 flex  items-start gap-x-2" key={idx}>
                <span className=" text-sm text-gray-300">{idx + 1}. {text}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </Section>
  );
});

Principles.displayName = 'Principles';
export default Principles;
