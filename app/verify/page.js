"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { toast } from "react-toastify";
import {
  useAccountActivationMutation,
  useResendActivationCodeMutation,
} from "@/lib/feature/auth/authApi";
import useCoutDown from "@/components/useCoutDown";
import SmallLoader from "@/components/SmallLoader";

export default function Verify() {
  const [accountActivate, { isLoading }] = useAccountActivationMutation();
  const [resendCode, { isLoading: isResendLoading }] =
    useResendActivationCodeMutation();
  // search params
  const searchParams = useSearchParams();

  const { value, setValue } = useCoutDown(300);

  // navigate
  const router = useRouter();

  // auto input field focus
  const focusChange = (e) => {
    if (e.target.value && e.target.nextElementSibling) {
      e.target.nextElementSibling.focus();
    } else if (
      e?.target.value &&
      e.key === "Enter" &&
      e.target.nextElementSibling
    ) {
      e.target.nextElementSibling.focus();
    }
    if (e.key === "Backspace" && e.target.previousElementSibling) {
      e.target.previousElementSibling.focus();
    }
  };

  // handle code submit & email verify
  const handleCodeSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData.entries());

    const codeArray = [data.code1, data.code2, data.code3, data.code4];
    const code = codeArray.join("");

    if (!code) {
      return toast.error("Code is required");
    }

    const response = await accountActivate({ code });

    if (response?.data?.success) {
      router.push("/login");
      e.target.reset();
      toast.success(response?.data?.message);
    } else {
      toast.error(response?.error?.data?.error?.message);
    }
  };

  // handle resend code
  const handleResend = async () => {
    const response = await resendCode({
      email: searchParams.get("email"),
    });
    if (response?.data?.success) {
      setValue(300);
      toast.success(response?.data?.message);
    } else {
      toast.error(response?.error?.data?.error?.message);
    }
  };

  return (
    <section className="  bg-white py-16  dark:bg-[#151f32]  dark:text-[#cacfd5]">
      <div className=" ">
        <div className="content-body     p-4 dark:border-zinc-700 border-zinc-300">
          <div className=" max-w-[460px] mx-auto h-fit  rounded-md dark:bg-[#182c49] bg-[#eceff1]">
            <div className="content-header border-b p-4 dark:border-zinc-700 border-zinc-300">
              <h1 className="text-[#3c4046] dark:text-[#cdd6e2] font-bold text-xl text-center">
                Enter Security Code
              </h1>
            </div>
            <div className="content-body text-center   text-[#3c4046]  p-4 dark:border-zinc-700 border-zinc-300 dark:text-[#cdd6e2]">
              <p>Four digit security code sent to your Email.</p>
              <p className="pt-2 flex justify-center">
                {value ? (
                  <span>Code Expired in : &nbsp; {value}</span>
                ) : (
                  <>
                    <span className="text-red-500">Expired!</span>
                  </>
                )}
              </p>
              <form className="pb-1 pt-4  " onSubmit={handleCodeSubmit}>
                <div className="flex justify-between px-4 ">
                  <input
                    type="text"
                    maxLength={"1"}
                    name="code1"
                    className="text-center z-10 text-2xl border w-16  rounded-sm h-16 dark:bg-[#0202246a] dark:text-[#cdd6dd] dark:border-zinc-700 border-zinc-300 focus:outline-none focus:border-zinc-600 focus:ring-0 bg-white"
                    onKeyUp={focusChange}
                  />
                  <input
                    type="text"
                    maxLength={"1"}
                    name="code2"
                    className="text-center z-10 text-2xl border w-16  rounded-sm h-16 dark:bg-[#0202246a] dark:text-[#cdd6dd] dark:border-zinc-700 border-zinc-300 focus:outline-none focus:border-zinc-600 focus:ring-0 bg-white"
                    onKeyUp={focusChange}
                  />
                  <input
                    type="text"
                    maxLength={"1"}
                    name="code3"
                    className="text-center z-10 text-2xl border w-16  rounded-sm h-16 dark:bg-[#0202246a] dark:text-[#cdd6dd] dark:border-zinc-700 border-zinc-300 focus:outline-none focus:border-zinc-600 focus:ring-0 bg-white"
                    onKeyUp={focusChange}
                  />
                  <input
                    type="text"
                    maxLength={"1"}
                    name="code4"
                    className="text-center z-10 text-2xl border w-16  rounded-sm h-16 dark:bg-[#0202246a] dark:text-[#cdd6dd] dark:border-zinc-700 border-zinc-300 focus:outline-none focus:border-zinc-600 focus:ring-0 bg-white"
                    onKeyUp={focusChange}
                  />
                </div>
                <div className="modal-action  pt-3 px-4 text-right">
                  {!value && (
                    <span
                      className="h-11 flex justify-center  items-center text-white py-1 px-2 cursor-pointer z-10 rounded-sm bg-blue-600 text-sm"
                      onClick={handleResend}
                    >
                      {isResendLoading ? <SmallLoader /> : "resend code"}
                    </span>
                  )}
                  <button
                    type="submit"
                    className="h-11 flex justify-center items-center  px-3 hover:bg-[#1068f5] rounded-md   z-10 text-white bg-[#0c51d2] "
                  >
                    {isLoading ? <SmallLoader /> : "SUBMIT"}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
