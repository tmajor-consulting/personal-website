import {render, screen} from '@testing-library/react';
import Highlights from './Highlights';

jest.mock('../../data/data', () => ({
  SectionId: {Highlights: 'highlights'},
}));

jest.mock('../../hooks/useInView', () => ({
  __esModule: true,
  default: () => [{current: null}, true],
}));

describe('Highlights', () => {
  it('renders all four stat values', () => {
    render(<Highlights />);
    expect(screen.getByText('10+')).toBeInTheDocument();
    expect(screen.getByText('60+')).toBeInTheDocument();
    expect(screen.getByText('3')).toBeInTheDocument();
    expect(screen.getByText('300+')).toBeInTheDocument();
  });

  it('renders stat labels', () => {
    render(<Highlights />);
    expect(screen.getByText('Years in Engineering')).toBeInTheDocument();
    expect(screen.getByText('Engineer Organisation')).toBeInTheDocument();
    expect(screen.getByText('Seniority Promotions')).toBeInTheDocument();
    expect(screen.getByText('CVs Reviewed')).toBeInTheDocument();
  });

  it('renders stat sub-text', () => {
    render(<Highlights />);
    expect(screen.getByText('incl. 5+ in leadership')).toBeInTheDocument();
    expect(screen.getByText('tech board member')).toBeInTheDocument();
    expect(screen.getByText('driven through coaching')).toBeInTheDocument();
    expect(screen.getByText('8 hires across 2 teams')).toBeInTheDocument();
  });
});
