import { useEffect } from 'react';

const Intersection = (isLastItem, target, feedId, setGetMore) => {
  return useEffect(() => {
    if (isLastItem) {
      let observer;
      if (target) {
        observer = new IntersectionObserver(
          ([entriy]) => {
            if (entriy.isIntersecting) {
              setGetMore(feedId);
            }
          },
          { threshold: 0.5 },
        );
        observer.observe(target);
      }
      return () => observer && observer.disconnect();
    }
    return undefined;
  }, [target]);
};

export default Intersection;
