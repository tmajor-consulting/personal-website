import {FC, memo, PropsWithChildren, useMemo} from 'react';

import {Skill as SkillType, SkillGroup as SkillGroupType} from '../../../data/dataDef';
import useInView from '../../../hooks/useInView';

export const SkillGroup: FC<PropsWithChildren<{skillGroup: SkillGroupType}>> = memo(({skillGroup}) => {
  const {name, skills} = skillGroup;
  const [ref, inView] = useInView<HTMLDivElement>();
  return (
    <div className="flex flex-col" ref={ref}>
      <span className="text-center text-lg font-bold text-white">{name}</span>
      <div className="flex flex-col gap-y-2">
        {skills.map((skill, index) => (
          <Skill inView={inView} index={index} key={`${skill.name}-${index}`} skill={skill} />
        ))}
      </div>
    </div>
  );
});

SkillGroup.displayName = 'SkillGroup';

export const Skill: FC<{skill: SkillType; inView: boolean; index: number}> = memo(({skill, inView, index}) => {
  const {name, level, max = 10} = skill;
  const percentage = useMemo(() => Math.round((level / max) * 100), [level, max]);

  return (
    <div className="flex flex-col">
      <span className="ml-2 text-sm font-medium text-neutral-300">{name}</span>
      <div className="h-5 w-full overflow-hidden rounded-full bg-neutral-700">
        <div
          className="h-full rounded-full bg-yellow-600 transition-all duration-700 ease-out"
          style={{
            transitionDelay: `${index * 100}ms`,
            width: inView ? `${percentage}%` : '0%',
          }}
        />
      </div>
    </div>
  );
});

Skill.displayName = 'Skill';
