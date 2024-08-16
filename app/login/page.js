"use client";
import Link from "next/link";
import PasswordShowHide from "../../components/login/PasswordShowHide";
import {
  useAuthLoginMutation,
  useResendActivationCodeMutation,
} from "@/lib/feature/auth/authApi";
import { toast } from "react-toastify";
import { useRouter } from "next/navigation";
import { useState } from "react";
import SmallLoader from "@/components/SmallLoader";
import Cookies from "js-cookie";

export default function Login() {
  const [userLogin, { isLoading }] = useAuthLoginMutation();
  const [resendCode] = useResendActivationCodeMutation();

  const [email, setEmail] = useState("");

  const [accountIsActive, setAccountIsActive] = useState(true);

  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);

    const data = {
      email: formData.get("email"),
      password: formData.get("password"),
    };

    const payload = await userLogin(data);

    if (payload?.data?.success) {
      toast.success("Login Successfully!");
      Cookies.set("accessToken", payload?.data?.data.accessToken, {
        expires: 365,
      });
      router.push("/profile");
    } else if (!payload?.error?.data?.success) {
      if (
        payload.error?.data?.error?.message === "Please active your account."
      ) {
        setAccountIsActive(false);
      }

      toast.error(payload.error.data.error.message);
    }
  };

  // handleActiveAccount

  const handleActiveAccount = async () => {
    const payload = await resendCode({
      email: email,
    });

    if (payload?.data?.success) {
      router.push("/verify?email=" + email);
      toast.success("Login Successfully!");
    } else if (!payload?.error?.data?.success) {
      toast.error(payload.error.data.error.message);
    }
  };

  return (
    <section className="py-24 bg-[#fff] px-4 dark:bg-[#0b192a]    dark:text-[#fff] ">
      <div className="bg-[#f0f0f7] max-w-[450px] mx-auto border py-5 sm:px-8 px-4 rounded-md   dark:bg-[#161737] dark:border-[#6f5dbd29]  text-left">
        <h2 className="text-center text-2xl pt-1 pb-4 font-bold dark:text-white text-zinc-700">
          Login
        </h2>
        <form onSubmit={handleSubmit} className="dark:text-[#fff] z-10">
          <div className="my-4 flex items-center">
            <span className="bg-[#506bc2cf] rounded-[5px_0px_0px_5px] h-11 px-4 flex items-center">
              <svg
                stroke="currentColor"
                fill="currentColor"
                strokeWidth="0"
                viewBox="0 0 512 512"
                className="text-white"
                height="1em"
                width="1em"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M256 288c79.5 0 144-64.5 144-144S335.5 0 256 0 112 64.5 112 144s64.5 144 144 144zm128 32h-55.1c-22.2 10.2-46.9 16-72.9 16s-50.6-5.8-72.9-16H128C57.3 320 0 377.3 0 448v16c0 26.5 21.5 48 48 48h416c26.5 0 48-21.5 48-48v-16c0-70.7-57.3-128-128-128z"></path>
              </svg>
            </span>
            <input
              placeholder="Type Your Email Address"
              className=" z-10 rounded-[0px_5px_5px_0px] dark:bg-[#150d36] h-11 px-3 bg-white border text-[17px] text-zinc-600 dark:text-zinc-400 border-zinc-300 dark:border-zinc-600 focus:outline-none  w-full max-full "
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              name="email"
            />
          </div>
          <div className="mb-4 relative">
            <PasswordShowHide />
          </div>
          <div className="my-5 z-10">
            <div className="text-sm flex justify-between">
              <Link
                className="z-10 block text-[17px] text-red-400 hover:text-red-600 dark:text-red-400"
                href={"/find-account"}
              >
                Forgot Password?
              </Link>

              <Link
                href={"/register"}
                className="z-10  text-blue-600 px-2 text-[17px] hover:text-violet-600"
              >
                Sign Up
              </Link>
            </div>
            {!accountIsActive && (
              <div className="mt-4 flex justify-center mb-6  text-zinc-500 dark:text-zinc-300">
                Active your account ? &nbsp;
                <button
                  onClick={handleActiveAccount}
                  className="z-10 text-blue-600 font-semibold dark:text-blue-600 hover:text-violet-600 px-2 "
                  type="button"
                >
                  Click Here
                </button>
              </div>
            )}
          </div>

          <div className=" flex">
            <button
              className="z-10 h-11 flex justify-center items-center  rounded-md text-semibold font-semibold cursor-pointer bg-violet-500 hover:bg-violet-600 text-white border-none dark:bg-violet-600 dark:hover:bg-blue-600  w-full max-full 
                text-[17px]"
              type="submit"
            >
              {isLoading ? <SmallLoader /> : " LOGIN"}
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}
