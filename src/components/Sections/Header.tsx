import {Dialog, DialogBackdrop, Transition} from '@headlessui/react';
import {Bars3BottomRightIcon, XMarkIcon} from '@heroicons/react/24/outline';
import classNames from 'classnames';
import Link from 'next/link';
import {FC, Fragment, memo, useCallback, useMemo, useState} from 'react';

import {SectionId} from '../../data/data';
import {useNavObserver} from '../../hooks/useNavObserver';

export const headerID = 'headerNav';

const Header: FC = memo(() => {
  const [currentSection, setCurrentSection] = useState<SectionId | null>(null);
  const navSections = useMemo(
    () => [SectionId.About, SectionId.Resume, SectionId.Skills, SectionId.Consulting, SectionId.Contact],
    [],
  );

  const intersectionHandler = useCallback((section: SectionId | null) => {
    section && setCurrentSection(section);
  }, []);

  useNavObserver(navSections.map(section => `#${section}`).join(','), intersectionHandler);

  return (
    <>
      <MobileNav currentSection={currentSection} navSections={navSections} />
      <DesktopNav currentSection={currentSection} navSections={navSections} />
    </>
  );
});

const DesktopNav: FC<{navSections: SectionId[]; currentSection: SectionId | null}> = memo(
  ({navSections, currentSection}) => {
    return (
      <header
        className="fixed top-0 z-50 hidden w-full sm:block"
        id={headerID}
        style={{
          background: 'var(--dark)',
          borderBottom: '1px solid rgba(255,255,255,0.07)',
          height: 'var(--nav-h)',
        }}>
        <nav className="mx-auto flex h-full max-w-6xl items-center justify-between px-8 sm:px-12">
          <Link
            className="font-serif text-lg tracking-[-0.01em] text-white"
            href="/#about">
            Tamas Flucsa Major
          </Link>
          <ul className="flex list-none gap-8">
            {navSections.map(section => (
              <li key={section}>
                <NavItem current={section === currentSection} section={section} />
              </li>
            ))}
          </ul>
        </nav>
      </header>
    );
  },
);

const MobileNav: FC<{navSections: SectionId[]; currentSection: SectionId | null}> = memo(
  ({navSections, currentSection}) => {
    const [isOpen, setIsOpen] = useState<boolean>(false);

    const toggleOpen = useCallback(() => {
      setIsOpen(prev => !prev);
    }, []);

    return (
      <>
        <header
          className="fixed top-0 z-50 w-full sm:hidden"
          style={{
            background: 'var(--dark)',
            borderBottom: '1px solid rgba(255,255,255,0.07)',
            height: 'var(--nav-h)',
          }}>
          <div className="flex h-full items-center justify-between px-5">
            <Link className="font-serif text-base tracking-[-0.01em] text-white" href="/#about">
              Tamas Flucsa Major
            </Link>
            <button
              aria-label="Menu Button"
              className="rounded-md p-2 focus:outline-none focus-visible:ring-2 focus-visible:ring-white/50"
              onClick={toggleOpen}
              style={{color: 'rgba(255,255,255,0.6)'}}>
              <Bars3BottomRightIcon className="h-5 w-5" />
              <span className="sr-only">Open sidebar</span>
            </button>
          </div>
        </header>
        <Transition.Root as={Fragment} show={isOpen}>
          <Dialog as="div" className="fixed inset-0 z-40 flex sm:hidden" onClose={toggleOpen}>
            <Transition.Child
              as={Fragment}
              enter="transition-opacity ease-linear duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="transition-opacity ease-linear duration-300"
              leaveFrom="opacity-100"
              leaveTo="opacity-0">
              <DialogBackdrop className="fixed inset-0" style={{background: 'rgba(0,0,0,0.7)'}} />
            </Transition.Child>
            <Transition.Child
              as={Fragment}
              enter="transition ease-in-out duration-300 transform"
              enterFrom="-translate-x-full"
              enterTo="translate-x-0"
              leave="transition ease-in-out duration-300 transform"
              leaveFrom="translate-x-0"
              leaveTo="-translate-x-full">
              <div className="relative w-4/5" style={{background: 'var(--dark2)'}}>
                <div className="flex h-[60px] items-center justify-between px-5">
                  <span className="font-serif text-base text-white">T. Flucsa Major</span>
                  <button
                    aria-label="Close menu"
                    className="p-2 focus:outline-none"
                    onClick={toggleOpen}
                    style={{color: 'rgba(255,255,255,0.5)'}}>
                    <XMarkIcon className="h-5 w-5" />
                  </button>
                </div>
                <nav className="flex flex-col gap-1 px-3 pt-2">
                  {navSections.map(section => (
                    <NavItem
                      current={section === currentSection}
                      key={section}
                      mobile
                      onClick={toggleOpen}
                      section={section}
                    />
                  ))}
                </nav>
              </div>
            </Transition.Child>
          </Dialog>
        </Transition.Root>
      </>
    );
  },
);

const NavItem: FC<{
  section: string;
  current: boolean;
  mobile?: boolean;
  onClick?: () => void;
}> = memo(({section, current, mobile = false, onClick}) => {
  const label = section.charAt(0).toUpperCase() + section.slice(1);
  if (mobile) {
    return (
      <Link
        className={classNames(
          'block rounded-md px-3 py-2.5 font-mono text-sm tracking-[0.04em] transition-colors',
          current ? 'text-white' : 'text-white/50 hover:text-white/80',
        )}
        href={`/#${section}`}
        onClick={onClick}>
        {label}
      </Link>
    );
  }
  return (
    <Link
      className={classNames(
        'font-mono text-[13px] tracking-[0.04em] transition-colors duration-200',
        current ? 'text-white/90' : 'text-white/55 hover:text-white/90',
      )}
      href={`/#${section}`}>
      {label}
    </Link>
  );
});

Header.displayName = 'Header';
export default Header;
