import {FC, memo} from 'react';

import {TimelineItem} from '../../../data/dataDef';
import moment, {now} from "moment";

const TimelineItem: FC<{item: TimelineItem}> = memo(({item}) => {
  const {title, startDate, endDate, location, content, company} = item;

  const momentEndDate = endDate === 'Present' ? moment(now()) : moment(endDate);
  const momentStartDate = moment(startDate);

  const dateDiff = moment.duration(momentEndDate.diff(momentStartDate));
  const durationYears = dateDiff.years();
  const durationMonths = dateDiff.months();

  const yearString = durationYears > 1 ? 'years' : 'year';
  const monthString = durationMonths > 1 ? 'months' : 'month';

  let duration = '';
  if (durationYears > 0) {
    duration += `${durationYears} ${yearString}`
  }
  if (durationMonths > 0) {
    duration += ` ${durationMonths} ${monthString}`
  }


  return (
    <div className="flex flex-col pb-8 text-center last:pb-0 md:text-left">
      <div className="flex flex-col pb-4">
        <h2 className="text-xl font-bold">{title}</h2>
        <div className="text-l font-bold">{company}</div>
        <div className="flex items-center justify-center gap-x-2 md:justify-start">
          <span className="flex-1 text-sm font-medium italic sm:flex-none">{location}</span>
          <span>•</span>
          <span className="flex-1 text-sm sm:flex-none">{startDate} - {endDate} ({duration})</span>
        </div>
      </div>
      {content}
    </div>
  );
});

TimelineItem.displayName = 'TimelineItem';
export default TimelineItem;
