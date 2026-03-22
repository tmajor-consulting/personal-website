import {RefObject, useEffect, useRef, useState} from 'react';

const useInView = <T extends Element>(options?: IntersectionObserverInit): [RefObject<T | null>, boolean] => {
  const ref = useRef<T>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    // Already on screen on mount (e.g. page refresh while scrolled down) — mark visible immediately
    const {top, bottom} = el.getBoundingClientRect();
    if (top < window.innerHeight && bottom >= 0) {
      setInView(true);
      return;
    }
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.disconnect();
        }
      },
      {threshold: 0.15, ...options},
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [options]);

  return [ref, inView];
};

export default useInView;
