"use client";
import Link from "next/link";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAuthData, setMessageEmpty } from "../login/slice/authSlice";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";
import { userRegister } from "../login/slice/authApiSlice";
import { ScaleLoader } from "react-spinners";

export default function Register() {
  // dispatch
  const dispatch = useDispatch();
  // message and error
  const { message, error, user } = useSelector(getAuthData);
  const { blogs } = useSelector((state) => state.blogs);
  // navigate
  //   const navigate = useNavigate();
  const router = useRouter();

  // inputs state
  const [inputs, setInputs] = useState({
    name: "",
    email: "",
    password: "",
    con_password: "",
    gender: "",
  });

  // input field change
  const handleChange = (e) => {
    setInputs((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const [show, setShow] = useState(false);
  const [show2, setShow2] = useState(false);

  // form submit
  const handleSubmit = async (e) => {
    e.preventDefault();
    const { name, email, password, gender, con_password } = inputs;

    // input field check
    if (!email || !password || !name || !gender || !con_password) {
      return toast.error("All field are required!");
    }

    // password check
    if (password.length < 6) {
      return toast.error("Password can be at least 6 characters.");
    }
    // password match
    if (password !== con_password) {
      return toast.error("Password not match.");
    }

    dispatch(userRegister(inputs));
  };

  // message or error show
  useEffect(() => {
    dispatch(setMessageEmpty());
    if (message) {
      setInputs({
        name: "",
        email: "",
        password: "",
        con_password: "",
        gender: "",
      });
      router.push("/verify?email=" + inputs.email);
      toast.success(message);
      return;
    }
    error && toast.error(error);
  }, [message, error, dispatch, router]);
  if (blogs.length > 0) {
    if (!user) {
      return (
        <section className="bg-[#fff] py-24 dark:bg-[#0b192a]    dark:text-white px-4 ">
          <div className="dark:bg-[#161737] dark:border-[#22174bcf] max-w-[450px] bg-[#f0f0f7] mx-auto  py-5 px-4 sm:px-8 rounded-md border text-left ">
            <h2 className="text-center text-2xl pt-1 pb-4 font-bold dark:text-white text-zinc-700 ">
              Sign Up
            </h2>

            <form onSubmit={handleSubmit}>
              <div className="relative mb-8">
                <input
                  type="text"
                  id="name"
                  className="form-input peer"
                  value={inputs.name}
                  onChange={handleChange}
                  placeholder=" "
                  name="name"
                />
                <label htmlFor="name" className="form-label cursor-text">
                  Enter Your Full Name
                </label>
              </div>

              <div className="relative mb-8">
                <input
                  type="text"
                  id="email"
                  className="form-input peer"
                  value={inputs.email}
                  onChange={handleChange}
                  placeholder=" "
                  name="email"
                />
                <label htmlFor="email" className="form-label cursor-text">
                  Enter Your Email Address
                </label>
              </div>

              <div className="relative mb-8">
                <input
                  type={show2 ? "text" : "password"}
                  name="password"
                  value={inputs.password}
                  onChange={handleChange}
                  id="password"
                  className="form-input peer"
                  placeholder=" "
                />
                <label htmlFor="password" className="form-label cursor-text">
                  Type Your Password
                </label>

                <span
                  className="cursor-pointer absolute top-[14px] right-5"
                  onClick={() => {
                    show2 ? setShow2(false) : setShow2(true);
                  }}
                >
                  {inputs.password &&
                    (show2 ? (
                      <svg
                        stroke="currentColor"
                        fill="currentColor"
                        strokeWidth="0"
                        viewBox="0 0 1024 1024"
                        className="text-[20px] dark:text-white text-violet-600"
                        height="1em"
                        width="1em"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <defs>
                          <clipPath>
                            <path
                              fill="none"
                              d="M124-288l388-672 388 672H124z"
                              clipRule="evenodd"
                            ></path>
                          </clipPath>
                        </defs>
                        <path d="M508 624a112 112 0 0 0 112-112c0-3.28-.15-6.53-.43-9.74L498.26 623.57c3.21.28 6.45.43 9.74.43zm370.72-458.44L836 122.88a8 8 0 0 0-11.31 0L715.37 232.23Q624.91 186 512 186q-288.3 0-430.2 300.3a60.3 60.3 0 0 0 0 51.5q56.7 119.43 136.55 191.45L112.56 835a8 8 0 0 0 0 11.31L155.25 889a8 8 0 0 0 11.31 0l712.16-712.12a8 8 0 0 0 0-11.32zM332 512a176 176 0 0 1 258.88-155.28l-48.62 48.62a112.08 112.08 0 0 0-140.92 140.92l-48.62 48.62A175.09 175.09 0 0 1 332 512z"></path>
                        <path d="M942.2 486.2Q889.4 375 816.51 304.85L672.37 449A176.08 176.08 0 0 1 445 676.37L322.74 798.63Q407.82 838 512 838q288.3 0 430.2-300.3a60.29 60.29 0 0 0 0-51.5z"></path>
                      </svg>
                    ) : (
                      <svg
                        stroke="currentColor"
                        fill="currentColor"
                        strokeWidth="0"
                        viewBox="0 0 1024 1024"
                        className="text-[20px]  text-violet-600"
                        height="1em"
                        width="1em"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M396 512a112 112 0 1 0 224 0 112 112 0 1 0-224 0zm546.2-25.8C847.4 286.5 704.1 186 512 186c-192.2 0-335.4 100.5-430.2 300.3a60.3 60.3 0 0 0 0 51.5C176.6 737.5 319.9 838 512 838c192.2 0 335.4-100.5 430.2-300.3 7.7-16.2 7.7-35 0-51.5zM508 688c-97.2 0-176-78.8-176-176s78.8-176 176-176 176 78.8 176 176-78.8 176-176 176z"></path>
                      </svg>
                    ))}
                </span>
              </div>

              <div className="relative mb-8">
                <input
                  type={show ? "text" : "password"}
                  name="con_password"
                  value={inputs.con_password}
                  onChange={handleChange}
                  id="con_password"
                  className="form-input peer"
                  placeholder=" "
                />
                <label
                  htmlFor="con_password"
                  className="form-label cursor-text"
                >
                  Confirm Your Password
                </label>

                <span
                  className="cursor-pointer absolute top-[14px] right-5"
                  onClick={() => {
                    show ? setShow(false) : setShow(true);
                  }}
                >
                  {inputs.con_password &&
                    (show ? (
                      <svg
                        stroke="currentColor"
                        fill="currentColor"
                        strokeWidth="0"
                        viewBox="0 0 1024 1024"
                        className="text-[20px] dark:text-white text-violet-600"
                        height="1em"
                        width="1em"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <defs>
                          <clipPath>
                            <path
                              fill="none"
                              d="M124-288l388-672 388 672H124z"
                              clipRule="evenodd"
                            ></path>
                          </clipPath>
                        </defs>
                        <path d="M508 624a112 112 0 0 0 112-112c0-3.28-.15-6.53-.43-9.74L498.26 623.57c3.21.28 6.45.43 9.74.43zm370.72-458.44L836 122.88a8 8 0 0 0-11.31 0L715.37 232.23Q624.91 186 512 186q-288.3 0-430.2 300.3a60.3 60.3 0 0 0 0 51.5q56.7 119.43 136.55 191.45L112.56 835a8 8 0 0 0 0 11.31L155.25 889a8 8 0 0 0 11.31 0l712.16-712.12a8 8 0 0 0 0-11.32zM332 512a176 176 0 0 1 258.88-155.28l-48.62 48.62a112.08 112.08 0 0 0-140.92 140.92l-48.62 48.62A175.09 175.09 0 0 1 332 512z"></path>
                        <path d="M942.2 486.2Q889.4 375 816.51 304.85L672.37 449A176.08 176.08 0 0 1 445 676.37L322.74 798.63Q407.82 838 512 838q288.3 0 430.2-300.3a60.29 60.29 0 0 0 0-51.5z"></path>
                      </svg>
                    ) : (
                      <svg
                        stroke="currentColor"
                        fill="currentColor"
                        strokeWidth="0"
                        viewBox="0 0 1024 1024"
                        className="text-[20px]  text-violet-600"
                        height="1em"
                        width="1em"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M396 512a112 112 0 1 0 224 0 112 112 0 1 0-224 0zm546.2-25.8C847.4 286.5 704.1 186 512 186c-192.2 0-335.4 100.5-430.2 300.3a60.3 60.3 0 0 0 0 51.5C176.6 737.5 319.9 838 512 838c192.2 0 335.4-100.5 430.2-300.3 7.7-16.2 7.7-35 0-51.5zM508 688c-97.2 0-176-78.8-176-176s78.8-176 176-176 176 78.8 176 176-78.8 176-176 176z"></path>
                      </svg>
                    ))}
                </span>
              </div>

              <div className="relative mb-8">
                <div className="form-input peer">
                  <span className="flex justify-between gap-4">
                    <label className="dark:border-zinc-600 border-zinc-300 cursor-pointer flex-1 border py-2 text-center rounded-sm">
                      <input
                        type="radio"
                        onChange={handleChange}
                        value={"male"}
                        name="gender"
                      />{" "}
                      &nbsp; &nbsp; <span className="text-[17px]">Male</span>
                    </label>
                    <label className="dark:border-zinc-600 border-zinc-300 cursor-pointer flex-1 border py-2 text-center rounded-sm">
                      <input
                        onChange={handleChange}
                        value={"female"}
                        type="radio"
                        name="gender"
                      />{" "}
                      &nbsp; &nbsp; <span className="text-[17px]">Female</span>
                    </label>
                  </span>
                </div>
                <label className="form-label">Select Gender</label>
              </div>

              <div className="mt-4 flex justify-center mb-6  text-zinc-500 dark:text-zinc-300">
                Already have a Account? Please{" "}
                <Link
                  href={"/login"}
                  className="z-10 text-blue-600 font-semibold dark:text-blue-600 hover:text-violet-600 px-2 "
                >
                  {" "}
                  LOGIN
                </Link>
              </div>
              <div className="mb-6 flex">
                <input
                  type="submit"
                  className="z-10 border-none py-2 rounded-md text-[17px] font-semibold  w-full dark:bg-violet-600 text-white bg-violet-500 hover:bg-violet-600 dark:hover:bg-violet-700 cursor-pointer"
                  value={"SIGN UP"}
                />
              </div>
            </form>
          </div>
        </section>
      );
    }
    router.push("/profile");
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
