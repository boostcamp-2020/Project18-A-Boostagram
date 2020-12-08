import { useEffect } from 'react';
import GetMore from '@api/GetMore';

const Intersection = (target, feedId) => {
  return useEffect(() => {
    let observer;
    if (target) {
      observer = new IntersectionObserver(
        ([entriy]) => {
          if (entriy.isIntersecting) {
            GetMore(feedId);
          }
        },
        { threshold: 0.5 },
      );
      observer.observe(target);
    }
    return () => observer && observer.disconnect();
  }, [target]);
};

export default Intersection;
