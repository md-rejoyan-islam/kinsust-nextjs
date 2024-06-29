"use client";

import { animate, useInView, useIsomorphicLayoutEffect } from "framer-motion";
import { useRef } from "react";

const AnimatedCount = ({ from, to, viewOnce = false, duration = 5 }) => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: viewOnce });

  useIsomorphicLayoutEffect(() => {
    const element = ref.current;

    if (!element) return;
    if (!inView) return;

    // Set initial value
    element.textContent = String(from);

    // If reduced motion is enabled in system's preferences
    if (window.matchMedia("(prefers-reduced-motion)").matches) {
      element.textContent = String(to);
      return;
    }

    const controls = animate(from, to, {
      duration,
      ease: "easeOut",
      onUpdate(value) {
        element.textContent = value.toFixed(0);
      },
    });

    // Cancel on unmount
    return () => {
      controls.stop();
    };
  }, [ref, inView, from, to]);

  return <span ref={ref} />;
};

export default AnimatedCount;
