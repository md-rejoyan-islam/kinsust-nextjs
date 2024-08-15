"use client";
import { useState } from "react";

import { useRouter, useSearchParams } from "next/navigation";
import { toast } from "react-toastify";
import {
  usePasswordResetCodeSendMutation,
  usePasswordResetMutation,
} from "@/lib/feature/auth/authApi";

import useCoutDown from "@/components/useCoutDown";

export default function PasswordReset() {
  const [passwordReset] = usePasswordResetMutation();
  const [passwordResetCodeSend] = usePasswordResetCodeSendMutation();

  // search params
  const searchParams = useSearchParams();

  const router = useRouter();

  //inputs
  const [inputs, setInputs] = useState({
    password: "",
    con_password: "",
  });

  const { value, setValue } = useCoutDown(10);
  // code
  const [code, setCode] = useState("");

  //handle change
  const handleChange = (e) => {
    setInputs((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  //handle submit
  const handleSubmit = async () => {
    // input field
    const { password, con_password } = inputs;
    if (!password || !con_password) {
      return toast.error("All field are required!");
    }
    if (password.length < 6) {
      return toast.error("Password must be 6 characters");
    }
    if (password !== con_password) {
      return toast.error("Password not match");
    }

    if (code.length < 4) {
      return toast.error("Code must be 4  digit");
    }

    const response = await passwordReset({
      email: searchParams.get("email"),
      password: inputs.password,
      code,
    });

    if (response?.data?.success) {
      router.push("/login");
      toast.success(response?.data?.message);
    } else {
      toast.error(response?.error?.data?.error?.message);
    }
  };

  // password show hide
  const [show, setShow] = useState(false);
  const [show2, setShow2] = useState(false);

  // handle resend code
  const handleResend = async () => {
    const response = await passwordResetCodeSend({
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
    <section className="  bg-white py-16 dark:bg-[#151f32]  dark:text-[#cacfd5]">
      <div className=" ">
        <div className="content-body     p-4 border-zinc-700">
          <div className=" max-w-[460px] mx-auto  h-fit  rounded-md dark:bg-[#182c49] bg-[#eceff1]">
            <div className="content-header border-b p-4 dark:border-zinc-700 border-zinc-300">
              <h1 className="text-[#3c4046] dark:text-[#cdd6e2] font-bold text-xl text-center">
                Password Change
              </h1>
              <p className="text-center py-2 text-slate-700 dark:text-slate-200">
                A verification code sent to your email.
              </p>

              {value ? (
                <p className="text-center text-slate-700 dark:text-slate-200">
                  Code Expired in {value}
                </p>
              ) : (
                <div className="flex justify-center  gap-6 items-center">
                  <span className="text-red-500">Expired!</span> &nbsp; &nbsp;
                  &nbsp; &nbsp;
                  <span
                    className="flex items-center py-1 px-2 text-white cursor-pointer rounded-sm bg-blue-500 hover:bg-blue-600 text-sm"
                    onClick={handleResend}
                  >
                    resend code
                  </span>
                </div>
              )}
            </div>
            <div className="content-body  text-[#3c4046]  p-4 border-zinc-700 dark:text-[#cdd6e2]">
              <div className="py-3">
                <input
                  type="text"
                  placeholder="Security code"
                  name="code"
                  className={`mt-3 bg-white dark:border-[#103c3c] border dark:bg-[#00000075] border-gray-300 dark:text-[#91a3b8]  rounded-lg focus:ring-0 focus:border-zinc-600 dark:focus:border-zinc-500 block w-full p-5 focus:outline-none  text-3xl text-center ${
                    code && "tracking-[60px]"
                  }`}
                  max="4"
                  maxLength={"4"}
                  onChange={(e) => {
                    setCode(e.target.value);
                  }}
                  value={code}
                />
              </div>
              <div className="relative">
                <input
                  type={show ? "text" : "password"}
                  name="password"
                  value={inputs.password}
                  placeholder="Enter new password"
                  className="mt-3 bg-white dark:border-[#103c3c] border dark:bg-[#00000075] border-gray-300 dark:text-[#91a3b8] text-sm rounded-lg focus:ring-0 focus:border-zinc-600 dark:focus:border-zinc-500 block w-full p-3 focus:outline-none"
                  onChange={handleChange}
                />
                <span
                  className="absolute top-3 right-4  cursor-pointer"
                  onClick={() => {
                    show ? setShow(false) : setShow(true);
                  }}
                >
                  {inputs.password &&
                    (show ? (
                      <svg
                        stroke="currentColor"
                        fill="currentColor"
                        strokeWidth="0"
                        viewBox="0 0 512 512"
                        height="1em"
                        width="1em"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M256 105c-101.8 0-188.4 62.4-224 151 35.6 88.6 122.2 151 224 151s188.4-62.4 224-151c-35.6-88.6-122.2-151-224-151zm0 251.7c-56 0-101.8-45.3-101.8-100.7S200 155.3 256 155.3 357.8 200.6 357.8 256 312 356.7 256 356.7zm0-161.1c-33.6 0-61.1 27.2-61.1 60.4s27.5 60.4 61.1 60.4 61.1-27.2 61.1-60.4-27.5-60.4-61.1-60.4z"></path>
                      </svg>
                    ) : (
                      <svg
                        stroke="currentColor"
                        fill="currentColor"
                        strokeWidth="0"
                        viewBox="0 0 16 16"
                        height="1em"
                        width="1em"
                        className="dark:text-white"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="m10.79 12.912-1.614-1.615a3.5 3.5 0 0 1-4.474-4.474l-2.06-2.06C.938 6.278 0 8 0 8s3 5.5 8 5.5a7.029 7.029 0 0 0 2.79-.588zM5.21 3.088A7.028 7.028 0 0 1 8 2.5c5 0 8 5.5 8 5.5s-.939 1.721-2.641 3.238l-2.062-2.062a3.5 3.5 0 0 0-4.474-4.474L5.21 3.089z"></path>
                        <path d="M5.525 7.646a2.5 2.5 0 0 0 2.829 2.829l-2.83-2.829zm4.95.708-2.829-2.83a2.5 2.5 0 0 1 2.829 2.829zm3.171 6-12-12 .708-.708 12 12-.708.708z"></path>
                      </svg>
                    ))}
                </span>
              </div>
              <div className="relative">
                <input
                  type={show2 ? "text" : "password"}
                  placeholder="Confirm password"
                  value={inputs.con_password}
                  name="con_password"
                  className="mt-3 bg-white dark:border-[#103c3c] border dark:bg-[#00000075] border-gray-300 dark:text-[#91a3b8] text-sm rounded-lg focus:ring-0 focus:border-zinc-600 dark:focus:border-zinc-500 block w-full p-3 focus:outline-none"
                  onChange={handleChange}
                />
                <span
                  className="absolute top-3 right-4 cursor-pointer"
                  onClick={() => {
                    show2 ? setShow2(false) : setShow2(true);
                  }}
                >
                  {inputs.con_password &&
                    (show2 ? (
                      <svg
                        stroke="currentColor"
                        fill="currentColor"
                        strokeWidth="0"
                        viewBox="0 0 512 512"
                        height="1em"
                        width="1em"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M256 105c-101.8 0-188.4 62.4-224 151 35.6 88.6 122.2 151 224 151s188.4-62.4 224-151c-35.6-88.6-122.2-151-224-151zm0 251.7c-56 0-101.8-45.3-101.8-100.7S200 155.3 256 155.3 357.8 200.6 357.8 256 312 356.7 256 356.7zm0-161.1c-33.6 0-61.1 27.2-61.1 60.4s27.5 60.4 61.1 60.4 61.1-27.2 61.1-60.4-27.5-60.4-61.1-60.4z"></path>
                      </svg>
                    ) : (
                      <svg
                        stroke="currentColor"
                        fill="currentColor"
                        strokeWidth="0"
                        viewBox="0 0 16 16"
                        height="1em"
                        width="1em"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="m10.79 12.912-1.614-1.615a3.5 3.5 0 0 1-4.474-4.474l-2.06-2.06C.938 6.278 0 8 0 8s3 5.5 8 5.5a7.029 7.029 0 0 0 2.79-.588zM5.21 3.088A7.028 7.028 0 0 1 8 2.5c5 0 8 5.5 8 5.5s-.939 1.721-2.641 3.238l-2.062-2.062a3.5 3.5 0 0 0-4.474-4.474L5.21 3.089z"></path>
                        <path d="M5.525 7.646a2.5 2.5 0 0 0 2.829 2.829l-2.83-2.829zm4.95.708-2.829-2.83a2.5 2.5 0 0 1 2.829 2.829zm3.171 6-12-12 .708-.708 12 12-.708.708z"></path>
                      </svg>
                    ))}
                </span>
              </div>
            </div>

            <div className="content-footer p-4 text-right flex">
              <button
                className="w-full z-10 text-[#ffffff] font-bold bg-[#9a7ff0] hover:bg-[#7161eb]  focus:outline-none focus:ring-0  rounded-lg text-sm   px-5 py-2.5 text-center"
                onClick={handleSubmit}
              >
                UPDATE
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
