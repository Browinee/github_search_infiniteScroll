import { useEffect, useState } from "react";

const useDebounce = <T>(value: T, delay: number = 500) => {
  const [debouncedValue, setDebouncedValue] = useState(value);
  useEffect(() => {
    const timeId = setTimeout(() => setDebouncedValue(value), delay);
    return () => clearTimeout(timeId);
  }, [value, delay]);
  return debouncedValue;
};

export default useDebounce;
