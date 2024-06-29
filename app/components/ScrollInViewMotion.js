"use client";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export default function ScrollInViewMotion({
  initial = {},
  animate = {},
  transition = {},
  viewOnce = false,
  children,
}) {
  const viewRef = useRef();
  const isInView = useInView(viewRef, { once: viewOnce });

  return (
    <motion.div
      initial={initial}
      animate={isInView ? animate : {}}
      transition={transition}
      ref={viewRef}
    >
      {children}
    </motion.div>
  );
}
