import { useCallback, useEffect, useRef } from "react";

type useInfiniteScrollProps<T = any> = (param?: T) => void;

const useInfiniteScroll = (
  callback: useInfiniteScrollProps,
  hasMore: boolean = false
) => {
  const observer = useRef<IntersectionObserver>();
  const lastTargetNodeRef = useRef<Element>();
  const lastTargetRef = useRef<Function>();
  const targetRef = useCallback(
    (node) => {
      observer.current = new IntersectionObserver(
        (entries, observer) => {
          if (entries[0].isIntersecting && hasMore) {
            const { target } = entries[0];
            observer.unobserve(target);
            memoLastStatus(target, targetRef);
            callback();
          }
        },
        {
          rootMargin: "0px 0 px 80px 0px",
        }
      );
      if (node && hasMore) observer.current?.observe(node);
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [callback, hasMore]
  );
  const memoLastStatus = useCallback((node, lastRef) => {
    lastTargetNodeRef.current = node;
    lastTargetRef.current = lastRef;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const reObserve = useCallback((period?: number) => {
    setTimeout(() => {
      if (lastTargetNodeRef.current && lastTargetRef.current) {
        lastTargetRef.current(lastTargetNodeRef.current);
      }
    }, period || 60 * 1000);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    return () => {
      observer.current?.disconnect();
    };
  }, []);

  return { targetRef, reObserve };
};

export default useInfiniteScroll;
