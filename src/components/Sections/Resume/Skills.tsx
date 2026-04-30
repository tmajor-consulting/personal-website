import {memo} from 'react';
import {SkillGroup} from '../../../data/dataDef';

const Skills = memo(({skills}: {skills: SkillGroup[]}) => (
  <div className="grid gap-10 sm:grid-cols-2">
    {skills.map(({name, skills: items}) => (
      <div key={name}>
        <h3
          className="mb-3 font-mono text-[10px] uppercase tracking-[0.14em]"
          style={{color: 'var(--muted)'}}>
          {name}
        </h3>
        <div className="flex flex-wrap gap-1.5">
          {items.map(({name: skillName}) => (
            <span
              key={skillName}
              className="rounded-full border border-[var(--border)] bg-[var(--bg)] px-3 py-1.5 text-[13px] transition-colors duration-150 hover:border-[var(--amber)] hover:bg-[var(--amber-light)]"
              style={{color: 'oklch(35% 0.01 250)'}}>
              {skillName}
            </span>
          ))}
        </div>
      </div>
    ))}
  </div>
));

Skills.displayName = 'Skills';
export default Skills;
