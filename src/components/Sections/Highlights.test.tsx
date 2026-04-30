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
  });
});
