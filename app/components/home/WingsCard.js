"use client";
import { useRouter } from "next/navigation";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import {
  bloodDonationSVG,
  charitySVG,
  kinSchoolSVG,
  socialAwarenessSVG,
  winterCLothSVG,
} from "../../helper/svg";

export default function WingsCard({ index, path, title, children, svg }) {
  const viewRef = useRef();
  const isInView = useInView(viewRef, { once: false });
  const router = useRouter();

  return (
    <motion.div
      initial={{ opacity: 0, y: 150 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{
        duration: 0.1,
        type: "spring",
        stiffness: 260,
        damping: 20,
        delay: index * 0.1,
      }}
      onClick={() => router.push(path)}
      className="z-10 cursor-pointer wings-div  max-w-[390px] bg-[#ffffff]  dark:bg-[#182c49] border border-[#9bbcdfb0] dark:border-none      dark:shadow-none dark:hover:shadow-[#5b5ac1]  dark:hover:shadow- [0px_4px_15px] min-h-[200px] lg:flex-1 kin-wing-card"
    >
      <div className="px-4 lg:py-6 py-5 dark:text-white" ref={viewRef}>
        {/* <span>{[svg]()}</span> */}
        {svg === "socialAwarenessSVG" && socialAwarenessSVG()}
        {svg === "charitySVG" && charitySVG()}
        {svg === "bloodDonationSVG" && bloodDonationSVG()}
        {svg === "kinSchoolSVG" && kinSchoolSVG()}
        {svg === "winterCLothSVG" && winterCLothSVG()}

        <h2 className="text-center relative  mx-auto  text-xl  sm:text-2xl  font-semibold  py-2    dark:text-[#e2e6ed] ">
          {title}
        </h2>
        <div className="text-lg">
          {/* <p className=" dark:text-[#c9d8f8]   py-3">{content}</p> */}
          {children}
        </div>
      </div>
    </motion.div>
  );
}
