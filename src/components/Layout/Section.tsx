import classNames from 'classnames';
import {FC, memo, PropsWithChildren} from 'react';

import {SectionId} from '../../data/data';
import useInView from '../../hooks/useInView';

const Section: FC<PropsWithChildren<{sectionId: SectionId; sectionTitle?: string; noPadding?: boolean; className?: string}>> = memo(
  ({children, sectionId, noPadding = false, className}) => {
    const [ref, inView] = useInView<HTMLElement>();

    return (
      <section
        className={classNames(className, {'px-4 pt-20 pb-16 sm:py-16 md:py-24 lg:px-8': !noPadding})}
        id={sectionId}
        ref={noPadding ? undefined : ref}>
        <div
          className={classNames(
            {'mx-auto max-w-screen-lg': !noPadding},
            !noPadding && 'transition-[opacity,transform] duration-700',
            !noPadding && (inView ? 'translate-y-0 opacity-100' : 'translate-y-6 opacity-0'),
          )}>
          {children}
        </div>
      </section>
    );
  },
);

Section.displayName = 'Section';
export default Section;
