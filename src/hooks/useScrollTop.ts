import { useCallback, useState } from "react";

const useScrollTop = (position?: number) => {
  const [scrollElement, setScrollElement] = useState<HTMLElement | null>(null);
  const scrollTo = useCallback(() => {
    if (scrollElement && scrollElement.scrollTop !== 0) {
      scrollElement.scrollTo({
        top: position || 0,
        behavior: "smooth",
      });
    }
  }, [position, scrollElement]);
  return { scrollElement, setScrollElement, scrollTo };
};

export default useScrollTop;
