"use client";

import { useRef } from "react";
import { toast } from "react-toastify";

export default function Subscribe() {
  // form ref
  const formRef = useRef(null);

  // handle subscriber
  const handleSubscribe = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const { email } = Object.fromEntries(formData.entries());

    // email field check
    if (!email) return toast.error("Email is required!");

    const emailPattern = /[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/;
    const emailTest = emailPattern.test(email);

    // email format check
    if (!emailTest) return toast.error("Invalid Email Address");

    // dispatch(addSubscriber({ email }));
  };

  return (
    <form className="flex gap-2" onSubmit={handleSubscribe} ref={formRef}>
      <input
        type="text"
        name="email"
        placeholder="example@gmail.com "
        className="py-3   rounded-md w-full px-3 bg-[#fff] border dark:bg-[#392f57d1] dark:border-[#848485]"
      />
      <input
        type="submit"
        value="Subscribe"
        className="bg-[#d3e4f5] text-[#007fff] font-bold dark:bg-[#1e4976]  py-2 px-3 rounded-md dark:text-white cursor-pointer"
      />
    </form>
  );
}
