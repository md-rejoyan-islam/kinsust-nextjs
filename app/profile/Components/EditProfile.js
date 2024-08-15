import { useUpdateUserDataMutation } from "@/lib/feature/auth/authApi";
import { useState } from "react";

import { toast } from "react-toastify";

export default function EditProfile({ user }) {
  const [updateUser] = useUpdateUserDataMutation();

  const [inputs, setInputs] = useState({
    name: user?.name || "",
    email: user?.email || "",
    gender: user?.gender || "",
    location: user?.location || "",
    mobile: user?.mobile || "",
    age: user?.age || "",
    department: user?.department || "",
    session: user?.session || "",
    profession: user?.profession || "",
    organization: user?.organization || "",
    fb_url: user?.fb_url || "",
    instagram_url: user?.instagram_url || "",
    linkedIn_url: user?.linkedIn_url || "",
    blood_group: user?.blood_group || "",
    feedback: user?.feedback || "",
  });

  // handle update profile
  const handleUpdateProfile = async (e) => {
    e.preventDefault();
    // undefined value remove
    const fields = {};
    for (const key in inputs) {
      if (inputs[key]) {
        fields[key] = inputs[key];
      }
    }

    if (identity) {
      fields.is_sustian = identity === "sustian" ? true : false;
    }

    const response = await updateUser({ ...fields, id: user?.id });

    if (response?.data?.success) {
      document.getElementById("editProfile").click();
      toast.success(response?.data?.message);
    } else {
      toast.error(response?.error?.data?.error?.message);
    }
  };
  // handle update data

  const handleUpdateData = (e) => {
    setInputs((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  // identity
  const [identity, setIdentity] = useState("select");

  // handle identity change
  const handleIdentityChange = (value) => {
    if (value === "sustian") {
      setIdentity("sustian");
    } else if (value === "nonSustian") {
      setIdentity("nonSustian");
    } else {
      setIdentity("select");
    }
  };

  return (
    <>
      <button
        className="cursor-pointer text-white bg-blue-500 gap-1 hover:bg-violet-500 inline-flex items-center text-sm py-1 rounded-md px-4"
        onClick={() => {
          document.getElementById("editProfile").click();
        }}
      >
        <span className="  sm:text-[14px] text-[14px]">
          <svg
            stroke="currentColor"
            fill="currentColor"
            strokeWidth="0"
            viewBox="0 0 24 24"
            className="text-white sm:text-[16px] text-sm inline-block"
            height="1em"
            width="1em"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path fill="none" d="M0 0h24v24H0z"></path>
            <path d="M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM20.71 7.04a.996.996 0 000-1.41l-2.34-2.34a.996.996 0 00-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z"></path>
          </svg>
        </span>
        <span>Edit Profile</span>
      </button>

      {/* modal  */}
      <input type="checkbox" id="editProfile" className="modal-toggle" />
      <div
        className="modal "
        style={{ backgroundColor: "rgba(30, 27, 40, 0.8)" }}
      >
        <div className="modal-box relative bg-white dark:bg-[#160d39] text-black dark:text-[#c7cedc]">
          <label
            htmlFor="editProfile"
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
              <h1 className="font-bold text-center text-xl">
                Edit Profile Data
              </h1>
            </div>
            <form onSubmit={handleUpdateProfile}>
              <div className="my-2 space-y-1 flex flex-col">
                <label className="text-[17px] font-semibold">Full Name </label>

                <input
                  type="text"
                  value={inputs?.name}
                  name="name"
                  onChange={handleUpdateData}
                  className="z-10 border dark:border-zinc-700 rounded-md text-[17px] py-[10px] w-full dark:bg-[#00000040] bg-white dark:text-white dark:focus:outline-none dark:focus:border-zinc-700 px-4"
                />
              </div>
              <div className="my-2 space-y-1 flex flex-col">
                <label className="text-[17px] font-semibold text-[17px]">
                  Email Address{" "}
                </label>

                <input
                  type="text"
                  value={inputs?.email}
                  disabled={true}
                  name="email"
                  onChange={handleUpdateData}
                  className="z-10 bg-white  border dark:border-zinc-700 rounded-md text-[17px] py-[10px] w-full dark:bg-[#00000040] dark:text-white dark:focus:outline-none dark:focus:border-zinc-700 px-4 "
                />
              </div>
              <div className="my-2 space-y-1 flex flex-col">
                <label className="text-[17px] font-semibold">
                  Mobile Number{" "}
                </label>{" "}
                <input
                  type="text"
                  name="mobile"
                  value={inputs?.mobile}
                  onChange={handleUpdateData}
                  className="z-10 bg-white  border dark:border-zinc-700 rounded-md text-[17px] py-[10px] w-full dark:bg-[#00000040] dark:text-white dark:focus:outline-none dark:focus:border-zinc-700 px-4 "
                  placeholder="+8801xxxxxxx"
                />
              </div>
              <div className="my-2 space-y-1 flex flex-col">
                <label className="text-[17px] font-semibold">Age </label>
                <input
                  type="text"
                  name="age"
                  value={inputs.age}
                  onChange={handleUpdateData}
                  className="z-10 bg-white  border dark:border-zinc-700 rounded-md text-[17px] py-[10px] w-full dark:bg-[#00000040] dark:text-white dark:focus:outline-none dark:focus:border-zinc-700 px-4 "
                />
              </div>
              <div className="my-2 space-y-1 flex flex-col">
                <label className="text-[17px] font-semibold">Identity </label>
                <select
                  name="is_sustian"
                  defaultValue={
                    identity === "select"
                      ? "select"
                      : identity === "sustian"
                      ? "sustian"
                      : "nonSustian"
                  }
                  onChange={(e) => {
                    handleIdentityChange(e.target.value);
                  }}
                  className="z-10 bg-white  border dark:border-zinc-700 rounded-md text-[17px] py-[10px] w-full dark:bg-[#00000040] dark:text-white dark:focus:outline-none dark:focus:border-zinc-700 px-4 "
                >
                  <option
                    value="select"
                    // selected={inputs?.identity === "select" ? true : false}
                  >
                    --Select--
                  </option>
                  <option
                    value="sustian"
                    // selected={inputs?.identity === "sustian" ? true : false}
                  >
                    SUSTian
                  </option>
                  <option
                    value="nonSustian"
                    // selected={inputs?.identity === "nonSustian" ? true : false}
                  >
                    Non-SUSTian
                  </option>
                </select>
              </div>
              {identity === "sustian" && (
                <>
                  {/* department  */}
                  <div className="my-2 space-y-1 flex flex-col">
                    <label className="text-[17px] font-semibold">
                      Department{" "}
                    </label>
                    <input
                      type="text"
                      name="department"
                      value={inputs?.department}
                      onChange={handleUpdateData}
                      className="z-10 bg-white  border dark:border-zinc-700 rounded-md text-[17px] py-[10px] w-full dark:bg-[#00000040] dark:text-white dark:focus:outline-none dark:focus:border-zinc-700 px-4 "
                      placeholder="Example: EEE"
                    />
                  </div>
                  {/* session  */}
                  <div className="my-2 space-y-1 flex flex-col">
                    <label className="text-[17px] font-semibold">
                      Session{" "}
                    </label>
                    <input
                      type="text"
                      name="session"
                      value={inputs?.session}
                      onChange={handleUpdateData}
                      className="z-10 bg-white  border dark:border-zinc-700 rounded-md text-[17px] py-[10px] w-full dark:bg-[#00000040] dark:text-white dark:focus:outline-none dark:focus:border-zinc-700 px-4 "
                      placeholder="example: 2019-2020"
                    />
                  </div>
                </>
              )}

              {identity === "nonSustian" && (
                <>
                  {/* profession  */}
                  <div className="my-2 space-y-1 flex flex-col">
                    <label className="text-[17px] font-semibold">
                      Profession{" "}
                    </label>
                    <input
                      type="text"
                      name="profession"
                      value={inputs?.profession}
                      onChange={handleUpdateData}
                      className="z-10 bg-white  border dark:border-zinc-700 rounded-md text-[17px] py-[10px] w-full dark:bg-[#00000040] dark:text-white dark:focus:outline-none dark:focus:border-zinc-700 px-4 "
                    />
                  </div>
                  {/* organization  */}
                  <div className="my-2 space-y-1 flex flex-col">
                    <label className="text-[17px] font-semibold">
                      Organization{" "}
                    </label>
                    <input
                      type="text"
                      name="organization"
                      value={inputs?.organization}
                      onChange={handleUpdateData}
                      className="z-10 bg-white  border dark:border-zinc-700 rounded-md text-[17px] py-[10px] w-full dark:bg-[#00000040] dark:text-white dark:focus:outline-none dark:focus:border-zinc-700 px-4 "
                    />
                  </div>{" "}
                </>
              )}

              <div className="my-2 space-y-1 flex flex-col">
                <label className="text-[17px] font-semibold">
                  Present Address{" "}
                </label>{" "}
                <br />
                <input
                  type="text"
                  onChange={handleUpdateData}
                  name="location"
                  value={inputs?.location}
                  className="z-10 bg-white  border dark:border-zinc-700 rounded-md text-[17px] py-[10px] w-full dark:bg-[#00000040] dark:text-white dark:focus:outline-none dark:focus:border-zinc-700 px-4 "
                />
              </div>
              <div className="my-2 space-y-1 flex flex-col ">
                <label className="text-[17px] font-semibold">
                  Facebook URL{" "}
                </label>{" "}
                <input
                  type="url"
                  onChange={handleUpdateData}
                  name="fb_url"
                  value={inputs?.fb_url}
                  className="z-10 bg-white  border dark:border-zinc-700 rounded-md text-[17px] py-[10px] w-full dark:bg-[#00000040] dark:text-white dark:focus:outline-none dark:focus:border-zinc-700 px-4 "
                  placeholder="https://www.facebook.com/name/"
                />
              </div>
              <div className="my-2 space-y-1 flex flex-col">
                <label className="text-[17px] font-semibold">
                  Instagram URL{" "}
                </label>{" "}
                <br />
                <input
                  type="url"
                  onChange={handleUpdateData}
                  name="instagram_url"
                  value={inputs?.instagram_url}
                  className="z-10 bg-white  border dark:border-zinc-700 rounded-md text-[17px] py-[10px] w-full dark:bg-[#00000040] dark:text-white dark:focus:outline-none dark:focus:border-zinc-700 px-4 "
                  placeholder="https://www.instagram.com/name/"
                />
              </div>
              <div className="my-2 space-y-1 flex flex-col">
                <label className="text-[17px] font-semibold">
                  LinkedIn URL{" "}
                </label>{" "}
                <br />
                <input
                  type="url"
                  onChange={handleUpdateData}
                  name="linkedIn_url"
                  value={inputs?.linkedIn_url}
                  className="z-10 bg-white   border dark:border-zinc-700 rounded-md text-[17px] py-[10px] w-full dark:bg-[#00000040] dark:text-white dark:focus:outline-none dark:focus:border-zinc-700 px-4 "
                  placeholder="https://www.linkedin.com/in/name/"
                />
              </div>
              <div className="my-2 space-y-1 flex flex-col">
                <label className="text-[17px] font-semibold">
                  Blood Group{" "}
                </label>{" "}
                <select
                  name="blood_group"
                  className="z-10 bg-white  border dark:border-zinc-700 rounded-md text-[17px] py-[10px] w-full dark:bg-[#00000040]  dark:text-white dark:focus:outline-none dark:focus:border-zinc-700 px-4"
                  defaultValue={
                    inputs?.blood_group ? inputs?.blood_group : null
                  }
                  onChange={handleUpdateData}
                >
                  <option
                    className="dark:bg-[#00000040] dark:text-white"
                    value={null}
                  >
                    --select--
                  </option>
                  <option
                    value="A+"
                    className="dark:bg-[#00000040] dark:text-white"
                  >
                    A+
                  </option>
                  <option value="A-">A-</option>
                  <option value="B+">B+</option>
                  <option value="B-">B-</option>
                  <option value="AB+">AB+</option>
                  <option value="AB-">AB-</option>
                  <option value="O+">O+</option>
                  <option value="O-">O-</option>
                </select>
              </div>
              <div className="my-2 space-y-1 flex flex-col">
                <label className="text-[17px] font-semibold">
                  Give Feedback about KIN{" "}
                </label>
                <textarea
                  onChange={handleUpdateData}
                  name="feedback"
                  value={inputs?.feedback}
                  className="z-10 bg-white border dark:border-zinc-700 rounded-md text-[17px] py-[10px] w-full dark:bg-[#00000040] dark:text-white dark:focus:outline-none dark:focus:border-zinc-700 px-4 "
                />
              </div>
              <div className="mt-6 flex ">
                <button
                  type="submit"
                  value={"SUBMIT"}
                  className="z-10 bg-blue-500 dark:bg-violet-600 py-2 px-4 rounded-md w-full text-[17px] font-semibold text-white "
                >
                  UPDATE
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
