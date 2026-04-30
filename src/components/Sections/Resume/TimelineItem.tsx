import {FC, memo} from 'react';

import type {TimelineItem} from '../../../data/dataDef';

const TimelineItem: FC<{item: TimelineItem}> = memo(({item}) => {
  const {title, startDate, endDate, location, content, company, companyDescriptor} = item;


  return (
    <div className="flex flex-col pb-8 text-neutral-300 last:pb-0">
      <div className="flex flex-col border-l-2 border-yellow-600 pl-4 pb-4">
        <h2 className="text-xl font-bold text-white">{title}</h2>
        <div className="text-base font-semibold text-yellow-500">{company}</div>
        {companyDescriptor && (
          <div className="text-xs text-neutral-500">{companyDescriptor}</div>
        )}
        <div className="mt-1 flex flex-wrap items-center gap-x-2">
          <span className="text-sm italic text-neutral-500">{location}</span>
          <span className="text-neutral-600">•</span>
          <span className="text-sm text-neutral-500">{startDate} – {endDate ?? 'Present'}</span>
        </div>
      </div>
      {content}
    </div>
  );
});

TimelineItem.displayName = 'TimelineItem';
export default TimelineItem;
