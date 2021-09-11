import { useCallback, useEffect, useRef } from "react";

type useInfiniteScrollProps<T = any> = (param?: T) => void;

const useInfiniteScroll = (
  callback: useInfiniteScrollProps,
  hasMore: boolean = false
) => {
  const observer = useRef<IntersectionObserver>();
  const targetRef = useCallback(
    (node) => {
      observer.current = new IntersectionObserver(
        (entries, observer) => {
          if (entries[0].isIntersecting && hasMore) {
            const { target } = entries[0];
            observer.unobserve(target);
            callback();
          }
        },
        {
          rootMargin: "80px",
        }
      );
      if (node && hasMore) observer.current?.observe(node);
    },
    [callback, hasMore]
  );
  useEffect(() => {
    return () => {
      observer.current?.disconnect();
    };
  }, []);

  return targetRef;
};

export default useInfiniteScroll;
