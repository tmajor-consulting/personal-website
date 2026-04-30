import {render, screen} from '@testing-library/react';
import About from './About';

jest.mock('../../data/data', () => ({
  aboutData: {
    imageSrc: '/test-image.jpg',
    name: 'Test Name',
    description: <p>Test description</p>,
    actions: [],
  },
  SectionId: {
    About: 'about',
    Contact: 'contact',
    Highlights: 'highlights',
  },
}));

jest.mock('../Socials', () => ({__esModule: true, default: () => <div />}));

describe('About', () => {
  it('renders the availability badge', () => {
    render(<About />);
    expect(screen.getByText('Open to EM roles')).toBeInTheDocument();
  });

  it('renders the location badge', () => {
    render(<About />);
    expect(screen.getByText('Munich / Remote')).toBeInTheDocument();
  });

  it('renders the experience badge', () => {
    render(<About />);
    expect(screen.getByText('10+ yrs experience')).toBeInTheDocument();
  });
});
