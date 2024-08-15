"use client";

import { useAddSubsciberMutation } from "@/lib/feature/subscriber/subscriberApi";
import { motion } from "framer-motion";
import { useRef } from "react";
import { toast } from "react-toastify";

export default function Subscribe() {
  // form ref
  const formRef = useRef(null);
  const [addSubsciber] = useAddSubsciberMutation();

  // handle subscriber
  const handleSubscribe = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const { email } = Object.fromEntries(formData.entries());

    // email field check
    if (!email) return toast.error("Email is required!");

    const emailPattern = /[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/;
    const emailTest = emailPattern.test(email);

    // email format check
    if (!emailTest) return toast.error("Invalid Email Address");

    const payload = await addSubsciber({ email });

    if (payload?.data?.success) {
      toast.success("Subscribed Successfully!");
      e.target.reset();
    } else if (payload?.error?.status === 400) {
      toast.error(payload.error.data.error.message);
    }
  };

  return (
    <form className="flex gap-2" onSubmit={handleSubscribe} ref={formRef}>
      <input
        type="text"
        name="email"
        placeholder="example@gmail.com "
        className="py-3   rounded-md w-full px-3 bg-[#fff] border dark:bg-[#392f5778]    dark:border-sky-500/50 dark:focus:ring-sky-500/50 dark:focus:outline-none dark:focus:ring-2 "
      />
      <motion.input
        transition={{
          duration: 0.5,
          type: "spring",
          stiffness: 260,
          damping: 20,
        }}
        type="submit"
        value="Subscribe"
        className="bg-[#d3e4f5] hover:bg-[#c4def9] text-[#007fff] font-bold dark:bg-[#1e4976] dark:hover:bg-[#1b3d62]  py-2 px-3 rounded-md dark:text-white cursor-pointer"
      />
    </form>
  );
}
