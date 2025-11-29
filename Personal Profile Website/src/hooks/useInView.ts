import { useEffect, useState, RefObject } from 'react';

interface UseInViewOptions {
  once?: boolean;
  amount?: number;
}

export function useInView(
  ref: RefObject<Element>,
  options: UseInViewOptions = {}
): boolean {
  const [isInView, setIsInView] = useState(false);
  const { once = false, amount = 0 } = options;

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          if (once) {
            observer.disconnect();
          }
        } else if (!once) {
          setIsInView(false);
        }
      },
      {
        threshold: amount,
      }
    );

    observer.observe(element);

    return () => {
      observer.disconnect();
    };
  }, [ref, once, amount]);

  return isInView;
}
