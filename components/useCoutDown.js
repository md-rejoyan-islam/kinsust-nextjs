import { useEffect, useState } from "react";

export default function useCoutDown({ initial = 300 }) {
  const [value, setValue] = useState(initial);

  useEffect(() => {
    if (value > 0) {
      const timer = setTimeout(() => {
        setValue(value - 1);
      }, 1000);

      return () => clearTimeout(timer);
    }
  }, [value]);

  return {
    value,
    setValue,
  };
}
