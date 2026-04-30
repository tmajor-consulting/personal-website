import {render, screen} from '@testing-library/react';
import Skills from './Skills';
import type {SkillGroup} from '../../../data/dataDef';

const testSkills: SkillGroup[] = [
  {
    name: 'Leadership',
    skills: [{name: 'Org Design'}, {name: 'Mentoring'}],
  },
];

describe('Skills', () => {
  it('renders the group name', () => {
    render(<Skills skills={testSkills} />);
    expect(screen.getByText('Leadership')).toBeInTheDocument();
  });

  it('renders each skill as a chip', () => {
    render(<Skills skills={testSkills} />);
    expect(screen.getByText('Org Design')).toBeInTheDocument();
    expect(screen.getByText('Mentoring')).toBeInTheDocument();
  });

  it('does not render any progress bar elements', () => {
    const {container} = render(<Skills skills={testSkills} />);
    expect(container.querySelector('[role="progressbar"]')).toBeNull();
    expect(container.querySelector('progress')).toBeNull();
  });
});
