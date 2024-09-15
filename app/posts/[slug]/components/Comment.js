"use client";
import React from "react";

import { toast } from "react-toastify";
import {
  useCommnetOnPostMutation,
  useGetPostBySlugQuery,
} from "@/lib/feature/post/postApi";

export default function Comment({ slug }) {
  const { data: { data: blog = {} } = {} } = useGetPostBySlugQuery(slug);
  const [commentOnBlog] = useCommnetOnPostMutation();

  const [full, setFull] = React.useState("notFull");
  const [size, setSize] = React.useState(2);
  const formField = React.useRef(null);

  const showAll = () => {
    setSize(blog?.comments.length);
    setFull("full");
  };
  const hide = () => {
    setFull("notFull");
    setSize(2);
  };

  // comment on a blog
  const handleComment = async (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);
    const { name, email, comment } = Object.fromEntries(formData.entries());
    if (!name || !email || !comment) {
      return toast.error("Please fill all the fields");
    }

    const emailPattern = /[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/;

    if (!emailPattern.test(email)) {
      return toast.error("Please enter a valid email address");
    }

    const payload = await commentOnBlog({
      name,
      email,
      comment,
      post_id: blog.id,
      email,
    });
    if (payload?.data?.success) {
      toast.success("Subscribed Successfully!");
      e.target.reset();
    } else if (payload?.error?.status === 400) {
      toast.error(payload.error.data.error.message);
    }
  };

  return (
    <div className="bg-[#858ac524] dark:bg-[#202c4976] lg:py-8 py-6 rounded-md text-left ">
      <div className=" md:w-2/3 px-4 md:px-0 mx-auto">
        <h2 className="font-bold pb-3 text-black dark:text-white ">
          {blog?.comments?.length > 0 && "Comments :"}
        </h2>
        {blog?.comments &&
          [...blog.comments]
            .reverse()
            .slice(0, size)
            .map((com, index) => (
              <div
                key={index}
                className="mb-3 bg-[#ffffff] dark:bg-[#64c8e70e] rounded-md p-2"
              >
                <p className="">
                  <span className=" dark:text-[#fc535a] font-black">
                    {com?.name}
                  </span>{" "}
                  <span className=" dark:text-[#ffffff8a]">
                    {" "}
                    {`<${com?.email}>`}{" "}
                    <span className="text-[13px] px-2">
                      {com?.time?.publish} {com?.time?.month},{" "}
                      {blog?.time?.year}
                    </span>
                  </span>
                </p>
                <p className="">{com?.comment}</p>
              </div>
            ))}
        {full === "full" && (
          <button
            className=" bg-violet-600 hover:bg-violet-500 text-[#fff] py-2 px-2 mb-4 rounded-md"
            onClick={hide}
          >
            Hide
          </button>
        )}
        {full === "notFull" && blog?.comments?.length > 2 && (
          <button
            className=" bg-violet-600 hover:bg-violet-500 text-[#fff] py-2 px-2 mb-4 rounded-md"
            onClick={showAll}
          >
            See More
          </button>
        )}
      </div>

      <div className="md:w-2/3 px-4 md:px-0  mx-auto">
        <form onSubmit={handleComment} ref={formField}>
          <h1 className="font-bold mb-3">Type Your Comment :</h1>
          <div className="grid sm:grid-cols-2 pb-3 gap-3">
            <div>
              <input
                type="text"
                name="name"
                placeholder="Full Name"
                className="w-full dark:bg-[#ffffff2b] p-3 bg-white rounded-md 
                      "
              />
            </div>
            <div className="">
              <input
                type="name"
                name="email"
                placeholder="Email Address"
                className="w-full dark:bg-[#ffffff2b] bg-white rounded-md p-3 "
              />
            </div>
          </div>
          <div>
            <textarea
              className="w-full dark:bg-[#ffffff2b] bg-white rounded-lg p-3"
              name="comment"
              rows={"4"}
              placeholder="Type Your comment . . ."
            ></textarea>
          </div>
          <div className="pt-2 text-left">
            <input
              type="submit"
              value="Submit comment"
              className=" dark:text-[#fff] bg-violet-600 p-3 btn border-none text-white hover:text-white hover:bg-violet-500 "
            />
          </div>
        </form>
      </div>
    </div>
  );
}
