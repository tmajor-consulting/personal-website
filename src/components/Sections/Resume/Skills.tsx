import React, {memo} from 'react';
import {SkillGroup} from '../../../data/dataDef';

const Skills = memo(({skills}: {skills: SkillGroup[]}) => (
  <div className="flex flex-col gap-8">
    {skills.map(({name, skills: items}) => (
      <div key={name}>
        <h3 className="mb-3 text-xs font-semibold uppercase tracking-widest text-stone-400">{name}</h3>
        <div className="flex flex-wrap gap-2">
          {items.map(({name: skillName}) => (
            <span
              key={skillName}
              className="rounded-full border border-stone-200 bg-stone-50 px-3 py-1 text-sm text-stone-700">
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
