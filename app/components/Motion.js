"use client";
import { motion } from "framer-motion";

export default function Motion({
  initial = {},
  animate = {},
  transition = {},
  children,
}) {
  return (
    <motion.div initial={initial} animate={animate} transition={transition}>
      {children}
    </motion.div>
  );
}
