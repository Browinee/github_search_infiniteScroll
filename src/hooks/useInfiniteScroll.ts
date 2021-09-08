import { useCallback, useEffect, useRef } from "react";

type useInfiniteScrollProps<T = any> = (param?: T) => void;
const useInfiniteScroll = (callback: useInfiniteScrollProps) => {
  const observer = useRef<IntersectionObserver>();
  const targetRef = useCallback(
    (node) => {
      observer.current = new IntersectionObserver((entries, observer) => {
        if (entries[0].isIntersecting) {
          const { target } = entries[0];
          observer.unobserve(target);
          callback();
        }
      });
      if (node) observer.current?.observe(node);
    },
    [callback]
  );
  useEffect(() => {
    return () => {
      observer.current?.disconnect();
    };
  }, []);

  return targetRef;
};

export default useInfiniteScroll;
