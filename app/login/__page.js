"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import { useDispatch, useSelector } from "react-redux";

import { toast } from "react-toastify";

import { sendActiveCode, userLogin } from "./slice/authApiSlice";
import { useRouter } from "next/navigation";
import { getAuthData, setMessageEmpty } from "./slice/authSlice";
import { ScaleLoader } from "react-spinners";
import PasswordShowHide from "../components/login/PasswordShowHide";

export default function Login() {
  // dispatch
  const dispatch = useDispatch();
  // message and error
  const { message, error, user } = useSelector((state) => state.auth);
  const { blogs } = useSelector((state) => state.blogs);

  // navigate
  const router = useRouter();
  // password show hide
  const [show, setShow] = useState(false);
  // is register before
  const [isRegister, setIsRegister] = useState(false);
  // input fields value
  const [inputs, setInputs] = useState({
    email: "",
    password: "",
  });

  // input value change
  const handleChange = (e) => {
    setInputs((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  // handle login submit
  const handleSubmit = async (e) => {
    e.preventDefault();
    const { email, password } = inputs;

    // empty  input field check
    if (!email || !password) {
      return toast.error("All field are required!");
    }

    dispatch(userLogin({ data: inputs, router }));
  };

  // message or error show
  useEffect(() => {
    if (message) {
      toast.success(message);
      setInputs({
        email: "",
        password: "",
      });
    }
    if (error) {
      toast.error(error);
      if (error == "Please active your account.") {
        setIsRegister(true);
      }
    }
    dispatch(setMessageEmpty());
  }, [message, error, dispatch]);

  // send account active email
  const handleActiveAccount = async () => {
    setIsRegister(false);
    dispatch(sendActiveCode({ email: inputs.email }));
    setTimeout(() => {
      router.push("/verify?email=" + inputs.email);
    }, 500);
  };
  if (blogs.length > 0) {
    if (!user) {
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
                  value={inputs.email}
                  onChange={handleChange}
                  name="email"
                />
              </div>
              <div className="mb-4 relative">
                <div className="flex items-center">
                  <span className="bg-[#506bc2cf]  rounded-[5px_0px_0px_5px] h-11 px-4 flex items-center">
                    <svg
                      stroke="currentColor"
                      fill="currentColor"
                      strokeWidth="0"
                      viewBox="0 0 448 512"
                      className=" text-white"
                      height="1em"
                      width="1em"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M400 224h-24v-72C376 68.2 307.8 0 224 0S72 68.2 72 152v72H48c-26.5 0-48 21.5-48 48v192c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V272c0-26.5-21.5-48-48-48zm-104 0H152v-72c0-39.7 32.3-72 72-72s72 32.3 72 72v72z"></path>
                    </svg>
                  </span>
                  <input
                    placeholder="Type Your Password"
                    name="password"
                    className="rounded-[0px_5px_5px_0px] dark:bg-[#150d36] h-11 px-3 bg-white border text-[17px] text-zinc-600 dark:text-zinc-400 border-zinc-300 dark:border-zinc-600 focus:outline-none  w-full max-full  z-10"
                    value={inputs.password}
                    onChange={handleChange}
                    type={show ? "text" : "password"}
                  />
                </div>

                <PasswordShowHide />
              </div>
              <div className="my-5 z-10">
                <span className="text-sm flex justify-between">
                  {!isRegister ? (
                    <Link
                      className="z-10 block text-[17px] text-red-400 hover:text-red-600 dark:text-red-400"
                      href={"/find-account"}
                    >
                      Forgot Password?
                    </Link>
                  ) : (
                    <button
                      className="z-10 block text-[17px] dark:text-red-400  text-red-400"
                      onClick={handleActiveAccount}
                    >
                      Active account?
                    </button>
                  )}
                  <Link
                    href={"/register"}
                    className="z-10  text-blue-600 px-2 text-[17px] hover:text-violet-600"
                  >
                    Sign Up
                  </Link>
                </span>
              </div>

              <div className=" flex">
                <button
                  className="z-10 py-2 rounded-md text-semibold font-semibold cursor-pointer bg-violet-500 hover:bg-violet-600 text-white border-none dark:bg-violet-600 dark:hover:bg-blue-600  w-full max-full 
                text-[17px]"
                  type="submit"
                >
                  LOGIN
                </button>
              </div>
            </form>
          </div>
        </section>
      );
    }
    return router.push("/profile");
  } else {
    return (
      <div className="top-0 left-0  h-screen w-full mx-auto flex justify-center bg-white dark:bg-[#0f0826] overflow-hidden absolute items-center">
        <div className="text-center">
          <ScaleLoader
            color="#36d7b7"
            height={40}
            loading={true}
            margin={3}
            radius={3}
            width={5}
          />
        </div>
      </div>
    );
  }
}
