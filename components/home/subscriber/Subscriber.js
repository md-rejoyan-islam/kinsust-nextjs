"use client";
import { useAddSubsciberMutation } from "@/lib/feature/subscriber/subscriberApi";
import { useState } from "react";
import { toast } from "react-toastify";

export default function Subscriber() {
  const [subscriber, setScriber] = useState("");
  const [subscribeErr, setSubscribeErr] = useState(false);

  const [addSubsciber] = useAddSubsciberMutation();

  // handle subscribe
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!subscriber) {
      setSubscribeErr(true);
      return toast.error("Email is required!");
    }
    const emailPattern = /[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/;
    const emailTest = emailPattern.test(subscriber);
    if (!emailTest) {
      setSubscribeErr(true);
      return toast.error("Invalid Email Address");
    }
    const payload = await addSubsciber({ email: subscriber });

    if (payload?.data?.success) {
      toast.success("Subscribed Successfully!");
      setScriber("");
    } else if (payload?.error?.status === 400) {
      toast.error(payload.error.data.error.message);
    }
  };
  return (
    <form onSubmit={handleSubmit} className="mx-auto w-fit">
      <div className="btn-group  m-auto  sm:w-[590px]  md:w-[650px] w-[95vw] px-5 sm:px-16 md:my-6 my-5 h-[60px] sm:h-[70px]">
        <input
          type="text"
          name="email"
          className={`dark:text-white z-10  w-3/5 dark:bg-[#1c1e306c] h-full dark:border-zinc-700   px-3 rounded-l-md border focus:outline-none bg-[#f7f5f5db]  focus:ring-2 sm:text-xl  text-[15px]  ${
            subscribeErr
              ? "text-red-500 border-red-500 dark:border-red-600/50"
              : "text-black border-sky-400"
          }`}
          value={subscriber}
          onChange={(e) => {
            setSubscribeErr(false);
            setScriber(e.target.value);
          }}
          placeholder="example@gmail.com"
        />
        <button
          className="bg-[#f41e1ed2] hover:bg-[#f41e1eba] transition-all duration-200 z-10 px-3  rounded-r-md  w-2/5 sm:text-2xl text-[15px] text-white h-full"
          type="submit"
        >
          SUBSCRIBE
        </button>
      </div>
    </form>
  );
}
