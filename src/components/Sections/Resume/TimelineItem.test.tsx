import {render, screen} from '@testing-library/react';
import TimelineItem from './TimelineItem';
import type {TimelineItem as TimelineItemType} from '../../../data/dataDef';

const baseItem: TimelineItemType = {
  startDate: 'Jan. 2020',
  endDate: 'Dec. 2022',
  company: 'Acme Corp',
  location: 'Munich, Germany',
  title: 'Engineering Manager',
  content: <p>Some content</p>,
};

describe('TimelineItem', () => {
  it('renders title, company, and dates', () => {
    render(<TimelineItem item={baseItem} />);
    expect(screen.getByText('Engineering Manager')).toBeInTheDocument();
    expect(screen.getByText('Acme Corp')).toBeInTheDocument();
    expect(screen.getByText(/Jan. 2020/)).toBeInTheDocument();
  });

  it('renders companyDescriptor when provided', () => {
    const item = {...baseItem, companyDescriptor: 'E-commerce · ~400 people'};
    render(<TimelineItem item={item} />);
    expect(screen.getByText('E-commerce · ~400 people')).toBeInTheDocument();
  });

  it('does not render companyDescriptor when absent', () => {
    render(<TimelineItem item={baseItem} />);
    expect(screen.queryByText('E-commerce · ~400 people')).not.toBeInTheDocument();
  });
});
