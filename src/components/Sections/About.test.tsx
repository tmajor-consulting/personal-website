import {render, screen} from '@testing-library/react';
import About from './About';

jest.mock('../../data/data', () => ({
  aboutData: {
    imageSrc: '/test-image.jpg',
    name: 'Test Name',
    description: 'Test description',
    actions: [],
  },
  SectionId: {
    About: 'about',
    Contact: 'contact',
    Highlights: 'highlights',
  },
  socialLinks: [],
}));

describe('About', () => {
  it('renders the EM availability badge', () => {
    render(<About />);
    expect(screen.getByText('Open to EM roles')).toBeInTheDocument();
  });

  it('renders the Head of Engineering availability badge', () => {
    render(<About />);
    expect(screen.getByText('Open to Head of Engineering roles')).toBeInTheDocument();
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
