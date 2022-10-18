import { useEffect, useState } from "react";

export const useScrollY = (): number => {
  const isBrowser = typeof window !== "undefined";
  const [scrollY, setScrollY] = useState<number>(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = isBrowser ? window.scrollY : 0;
      setScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return scrollY;
};