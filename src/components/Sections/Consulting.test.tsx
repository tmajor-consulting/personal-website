import {render, screen} from '@testing-library/react';
import Consulting from './Consulting';

jest.mock('../../data/data', () => ({
  SectionId: {Consulting: 'consulting', Contact: 'contact'},
}));

jest.mock('../../hooks/useInView', () => ({
  __esModule: true,
  default: () => [{current: null}, true],
}));

describe('Consulting', () => {
  it('renders the TMajor Consulting label', () => {
    render(<Consulting />);
    expect(screen.getByText('TMajor Consulting')).toBeInTheDocument();
  });

  it('renders all four service titles', () => {
    render(<Consulting />);
    expect(screen.getByText('Fractional Engineering Manager')).toBeInTheDocument();
    expect(screen.getByText('Architecture Review')).toBeInTheDocument();
    expect(screen.getByText('Engineering Standards')).toBeInTheDocument();
    expect(screen.getByText('Team Building & Hiring')).toBeInTheDocument();
  });
});
