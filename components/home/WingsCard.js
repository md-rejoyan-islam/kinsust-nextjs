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
} from "../../app/helper/svg";
import { Glow } from "@codaworks/react-glow";

export default function WingsCard({ index, path, title, children, svg, glow }) {
  const viewRef = useRef();
  const isInView = useInView(viewRef, { once: true });
  const router = useRouter();

  return (
    <Glow className="z-10 cursor-pointer wings-div  max-w-[390px] bg-[#ffffff] rounded-md  dark:bg-[#182c49]         dark:hover:shadow- [0px_4px_15px] min-h-[200px] lg:flex-1">
      <motion.div
        initial={{ opacity: 0, x: -50, y: 40 }}
        animate={isInView ? { opacity: 1, y: 0, x: 0 } : {}}
        transition={{
          duration: 0.1,
          type: "spring",
          stiffness: 260,
          damping: 20,
          delay: index * 0.1,
        }}
        onClick={() => router.push(path)}
        className={`${glow} border-[3px] border-slate-200/50 dark:border-slate-800/75 shadow-sm   h-full rounded-md`}
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
    </Glow>
  );
}
