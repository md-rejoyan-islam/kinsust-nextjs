"use client";
import { toast } from "react-toastify";
import { useState } from "react";
import Link from "next/link";
import Loading from "@/components/Loading";
import PhotoChange from "./Components/PhotoChange";
import {
  useLoggedInUserQuery,
  useUpdateUserDataMutation,
} from "@/lib/feature/auth/authApi";
import EditProfile from "./Components/EditProfile";

export default function Profile() {
  const { data: { data: user = {} } = {} } = useLoggedInUserQuery();

  const [updatePassword] = useUpdateUserDataMutation();

  // password show
  const [show, setShow] = useState(false);
  const [show2, setShow2] = useState(false);

  const [inputs, setInputs] = useState({
    password: "",
    con_password: "",
  });

  // password change
  const handlePasswordChange = (e) => {
    setInputs((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  // password change submit
  const handlePasswordChangeSubmit = async (e) => {
    e.preventDefault();
    // field check
    if (!inputs.password || !inputs.con_password) {
      toast.error("All field are required!");
      return false;
    }
    // password check
    if (inputs.password.length < 6) {
      toast.error("Password can be at least 6 characters.");
      return false;
    }

    // password match
    if (inputs.password !== inputs.con_password) {
      toast.error("Password not match");
      return false;
    }
    const response = await updatePassword({
      id: user.id,
      password: inputs.password,
    });

    if (response?.data?.success) {
      document.getElementById("passwordChange").click();
      setInputs({
        password: "",
        con_password: "",
      });
      toast.success(response?.data?.message);
    } else {
      toast.error(response?.error?.data?.error?.message);
    }
  };

  if (!user.id) {
    return <Loading />;
  }

  return (
    <section className=" bg-[#fff]   px-5 m-auto text-justify  text-[17px] py-10  theme-dark">
      <div className="lg:w-2/3 w-full mx-auto rounded-md bg-[#f2f5f9] dark:bg-[#172944] py-10 px-5">
        <div className="photo relative px-3 ">
          <div className="header sm:flex justify-between items-end  ">
            <PhotoChange />

            <div className=" sm:pt-0 pt-4 text-[14px]  gap-3 flex justify-between items-center">
              <span
                className="cursor-pointer text-[14px] text-white  bg-blue-500 gap-2 hover:bg-violet-500 flex items-center py-1 rounded-md px-3 "
                onClick={() => {
                  document.getElementById("passwordChange").click();
                }}
              >
                <span className=" sm:text-[14px] text-[13px]">
                  <svg
                    stroke="currentColor"
                    fill="currentColor"
                    strokeWidth="0"
                    viewBox="0 0 512 512"
                    className="text-white text-sm sm:text-[16px] inline-block"
                    height="1em"
                    width="1em"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M0 168v-16c0-13.255 10.745-24 24-24h360V80c0-21.367 25.899-32.042 40.971-16.971l80 80c9.372 9.373 9.372 24.569 0 33.941l-80 80C409.956 271.982 384 261.456 384 240v-48H24c-13.255 0-24-10.745-24-24zm488 152H128v-48c0-21.314-25.862-32.08-40.971-16.971l-80 80c-9.372 9.373-9.372 24.569 0 33.941l80 80C102.057 463.997 128 453.437 128 432v-48h360c13.255 0 24-10.745 24-24v-16c0-13.255-10.745-24-24-24z"></path>
                  </svg>
                </span>
                <span>Password Change</span>
              </span>
              {/* edit profile */}
              <EditProfile user={user} />
            </div>
          </div>
        </div>{" "}
        <br />
        <hr className="h-1 border-[3px] dark:border-[#0f0826] border-[#dddcdc]" />
        <div className="overflow-x-auto pt-5 text-black dark:text-[#c7cedc]">
          <div className="">
            <div className="grid md:grid-cols-2 grid-cols-1 gap-4">
              <div className=" col-span-1 ">
                <div className="space-y-1">
                  <label className="font-semibold ">Name:</label>
                  <input
                    type="text"
                    className="bg-white dark:bg-[#110b2a] w-full py-2 rounded-md px-4 "
                    disabled
                    value={user?.name || ""}
                  />
                </div>
              </div>
              <div className=" col-span-1 w-full space-y-1">
                <div>
                  <label className="font-semibold">Email:</label>
                  <input
                    type="text"
                    className="bg-white dark:bg-[#110b2a] w-full py-2 rounded-md px-4"
                    disabled
                    value={user?.email || ""}
                  />
                </div>
              </div>

              <div className="space-y-1">
                <div>
                  <label className="inline-block font-semibold">
                    Mobile Number:
                  </label>
                  <input
                    type="text"
                    className="bg-white dark:bg-[#110b2a] w-full py-2 rounded-md px-4"
                    disabled
                    value={user?.mobile || ""}
                  />
                </div>
              </div>

              <div className="space-y-1">
                <div>
                  <label className="inline-block font-semibold">
                    Blood Group:
                  </label>
                  <input
                    type="text"
                    className="bg-white dark:bg-[#110b2a] w-full py-2 rounded-md px-4"
                    disabled
                    value={user?.blood_group ? user?.blood_group : ""}
                  />
                </div>
              </div>

              <div className="space-y-1">
                <div>
                  <label className="font-semibold">Location:</label>
                  <input
                    type="text"
                    className="bg-white dark:bg-[#110b2a] w-full py-2 rounded-md px-4"
                    disabled
                    value={user?.location ? user?.location : ""}
                  />
                </div>
              </div>

              <div className="space-y-1">
                <div>
                  <label className="font-semibold">Gender:</label>
                  <input
                    type="text"
                    className="bg-white dark:bg-[#110b2a] w-full py-2 rounded-md px-4"
                    disabled
                    value={user?.gender || ""}
                  />
                </div>
              </div>

              <div className="">
                <div className="space-y-1">
                  <label className="font-semibold">Age:</label>
                  <input
                    type="text"
                    className="bg-white dark:bg-[#110b2a] w-full py-2 rounded-md px-4"
                    disabled
                    value={user?.age ? user?.age : ""}
                  />
                </div>
              </div>

              {/* if sustian  */}
              {user?.is_sustian && (
                <>
                  <div className="">
                    <div className="space-y-1">
                      <label className="font-semibold">Session:</label>
                      <input
                        type="text"
                        className="bg-white dark:bg-[#110b2a] w-full py-2 rounded-md px-4"
                        disabled
                        value={user?.session ? user?.session : ""}
                      />
                    </div>
                  </div>
                  <div className="">
                    <div className="space-y-1">
                      <label className="font-semibold">Department:</label>
                      <input
                        type="text"
                        className="bg-white dark:bg-[#110b2a] w-full py-2 rounded-md px-4"
                        disabled
                        value={user?.department ? user?.department : ""}
                      />
                    </div>
                  </div>
                </>
              )}
              {/* if not sustian  */}
              {!user?.is_sustian && (
                <>
                  <div className="">
                    <div className="space-y-1">
                      <label className="font-semibold">Profession:</label>
                      <input
                        type="text"
                        className="bg-white dark:bg-[#110b2a] w-full py-2 rounded-md px-4"
                        disabled
                        value={user?.profession || ""}
                      />
                    </div>
                  </div>
                  <div className="">
                    <div className="space-y-1">
                      <label className="font-semibold">Organization:</label>
                      <input
                        type="text"
                        className="bg-white dark:bg-[#110b2a] w-full py-2 rounded-md px-4"
                        disabled
                        value={user?.organization || ""}
                      />
                    </div>
                  </div>
                </>
              )}

              {/* <div className="">
                <div className="space-y-1">
                  <label className="inline-block font-semibold">
                    KIN EC Member:
                  </label>
                  <input
                    type="text"
                    className="bg-white dark:bg-[#110b2a] w-full py-2 rounded-md px-4"
                    disabled
                    value={user?.isEc?.year}
                  />
                </div>
              </div> */}
              <div className="my-2 space-y-1 md:col-span-2">
                <div className="space-y-1">
                  <label className="font-semibold">Feedback:</label>
                  <textarea
                    disabled
                    value={user?.feedback ? user?.feedback : ""}
                    className="bg-white dark:bg-[#110b2a] w-full p-4 rounded-md"
                  />
                </div>
              </div>
              <div className="">
                <div className="space-y-1">
                  <label className="inline-block font-semibold">
                    Social Link:
                  </label>
                  <div className="flex gap-10 items-center">
                    {user?.fb_url && (
                      <Link
                        className="z-10"
                        href={user?.fb_url}
                        target="_blank"
                      >
                        <svg
                          stroke="currentColor"
                          fill="currentColor"
                          strokeWidth="0"
                          viewBox="0 0 1024 1024"
                          height="1em"
                          width="1em"
                          xmlns="http://www.w3.org/2000/svg"
                          className="text-3xl"
                        >
                          <path d="M880 112H144c-17.7 0-32 14.3-32 32v736c0 17.7 14.3 32 32 32h736c17.7 0 32-14.3 32-32V144c0-17.7-14.3-32-32-32zm-92.4 233.5h-63.9c-50.1 0-59.8 23.8-59.8 58.8v77.1h119.6l-15.6 120.7h-104V912H539.2V602.2H434.9V481.4h104.3v-89c0-103.3 63.1-159.6 155.3-159.6 44.2 0 82.1 3.3 93.2 4.8v107.9z"></path>
                        </svg>
                      </Link>
                    )}
                    {user?.instagram_url && (
                      <Link
                        className="z-10"
                        href={user?.instagram_url}
                        target="_blank"
                      >
                        <svg
                          stroke="currentColor"
                          fill="currentColor"
                          strokeWidth="0"
                          viewBox="0 0 1024 1024"
                          className="text-3xl"
                          height="1em"
                          width="1em"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path d="M512 306.9c-113.5 0-205.1 91.6-205.1 205.1S398.5 717.1 512 717.1 717.1 625.5 717.1 512 625.5 306.9 512 306.9zm0 338.4c-73.4 0-133.3-59.9-133.3-133.3S438.6 378.7 512 378.7 645.3 438.6 645.3 512 585.4 645.3 512 645.3zm213.5-394.6c-26.5 0-47.9 21.4-47.9 47.9s21.4 47.9 47.9 47.9 47.9-21.3 47.9-47.9a47.84 47.84 0 0 0-47.9-47.9zM911.8 512c0-55.2.5-109.9-2.6-165-3.1-64-17.7-120.8-64.5-167.6-46.9-46.9-103.6-61.4-167.6-64.5-55.2-3.1-109.9-2.6-165-2.6-55.2 0-109.9-.5-165 2.6-64 3.1-120.8 17.7-167.6 64.5C132.6 226.3 118.1 283 115 347c-3.1 55.2-2.6 109.9-2.6 165s-.5 109.9 2.6 165c3.1 64 17.7 120.8 64.5 167.6 46.9 46.9 103.6 61.4 167.6 64.5 55.2 3.1 109.9 2.6 165 2.6 55.2 0 109.9.5 165-2.6 64-3.1 120.8-17.7 167.6-64.5 46.9-46.9 61.4-103.6 64.5-167.6 3.2-55.1 2.6-109.8 2.6-165zm-88 235.8c-7.3 18.2-16.1 31.8-30.2 45.8-14.1 14.1-27.6 22.9-45.8 30.2C695.2 844.7 570.3 840 512 840c-58.3 0-183.3 4.7-235.9-16.1-18.2-7.3-31.8-16.1-45.8-30.2-14.1-14.1-22.9-27.6-30.2-45.8C179.3 695.2 184 570.3 184 512c0-58.3-4.7-183.3 16.1-235.9 7.3-18.2 16.1-31.8 30.2-45.8s27.6-22.9 45.8-30.2C328.7 179.3 453.7 184 512 184s183.3-4.7 235.9 16.1c18.2 7.3 31.8 16.1 45.8 30.2 14.1 14.1 22.9 27.6 30.2 45.8C844.7 328.7 840 453.7 840 512c0 58.3 4.7 183.2-16.2 235.8z"></path>
                        </svg>
                      </Link>
                    )}
                    {user?.linkedIn_url && (
                      <Link
                        className="z-10"
                        href={user?.linkedIn_url}
                        target="_blank"
                      >
                        <svg
                          stroke="currentColor"
                          fill="currentColor"
                          strokeWidth="0"
                          viewBox="0 0 16 16"
                          className="text-3xl "
                          height="1em"
                          width="1em"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z"></path>
                        </svg>
                      </Link>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* modal for password change */}

      <input type="checkbox" id="passwordChange" className="modal-toggle" />
      <div
        className="modal "
        style={{ backgroundColor: "rgba(30, 27, 40, 0.8)" }}
      >
        <div className="modal-box relative bg-white dark:bg-[#160d39] text-black dark:text-[#c7cedc]">
          <label
            htmlFor="passwordChange"
            className="btn btn-sm btn-circle border-none absolute right-2 top-2 bg-zinc-300 hover:bg-zinc-400 dark:bg-[#16224f] dark:hover:bg-[#12235c]"
          >
            <svg
              stroke="currentColor"
              fill="none"
              strokeWidth="0"
              viewBox="0 0 15 15"
              className="text-zinc-900 text-xl font-bold  dark:text-white"
              height="1em"
              width="1em"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M11.7816 4.03157C12.0062 3.80702 12.0062 3.44295 11.7816 3.2184C11.5571 2.99385 11.193 2.99385 10.9685 3.2184L7.50005 6.68682L4.03164 3.2184C3.80708 2.99385 3.44301 2.99385 3.21846 3.2184C2.99391 3.44295 2.99391 3.80702 3.21846 4.03157L6.68688 7.49999L3.21846 10.9684C2.99391 11.193 2.99391 11.557 3.21846 11.7816C3.44301 12.0061 3.80708 12.0061 4.03164 11.7816L7.50005 8.31316L10.9685 11.7816C11.193 12.0061 11.5571 12.0061 11.7816 11.7816C12.0062 11.557 12.0062 11.193 11.7816 10.9684L8.31322 7.49999L11.7816 4.03157Z"
                fill="currentColor"
              ></path>
            </svg>
          </label>
          <div>
            <div>
              <h1 className="font-bold text-center text-xl">Update Password</h1>
            </div>
            <form onSubmit={handlePasswordChangeSubmit}>
              <div className="relative">
                <input
                  type={show ? "text" : "password"}
                  name="password"
                  value={inputs.password}
                  placeholder="Enter new password"
                  className="mt-3 bg-white dark:border-[#103c3c] border dark:bg-[#00000075] border-gray-300 dark:text-[#91a3b8] text-sm rounded-lg focus:ring-0 focus:border-zinc-600 dark:focus:border-zinc-500 block w-full p-3 focus:outline-none"
                  onChange={handlePasswordChange}
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
                  onChange={handlePasswordChange}
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
              <div className="mt-6">
                <button
                  type="submit"
                  value={"SUBMIT"}
                  className="bg-blue-500 dark:bg-violet-600 py-[6px] px-4 rounded-md w-full font-semibold text-white "
                >
                  UPDATE
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
