import {FC, memo} from 'react';

import type {TimelineItem} from '../../../data/dataDef';

const TimelineItem: FC<{item: TimelineItem}> = memo(({item}) => {
  const {title, startDate, endDate, company, companyDescriptor, content} = item;

  return (
    <div
      className="grid gap-8 py-10 last:border-b-0"
      style={{
        gridTemplateColumns: '200px 1fr',
        borderBottom: '1px solid var(--border)',
      }}>
      {/* Left: date + company */}
      <div className="flex flex-col gap-1 pt-0.5">
        <span className="font-mono text-[11px] tracking-[0.04em]" style={{color: 'var(--muted)'}}>
          {startDate} — {endDate ?? 'Present'}
        </span>
        <span className="mt-1.5 text-sm font-semibold" style={{color: 'var(--text)'}}>
          {company}
        </span>
        {companyDescriptor && (
          <span className="text-[11px] leading-[1.5]" style={{color: 'var(--muted)'}}>
            {companyDescriptor}
          </span>
        )}
      </div>

      {/* Right: role + bullets */}
      <div>
        <h3 className="mb-3.5 text-lg font-semibold tracking-[-0.01em]" style={{color: 'var(--text)'}}>
          {title}
        </h3>
        <div className="timeline-content">{content}</div>
      </div>
    </div>
  );
});

TimelineItem.displayName = 'TimelineItem';
export default TimelineItem;
