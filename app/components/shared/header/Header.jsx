"use client";
import { usePathname, useRouter } from "next/navigation";
import { Fragment, useEffect, useRef, useState } from "react";

import { toast } from "react-toastify";
import usePopupControl from "@/hooks/popupControl/usePopupControl";

import Link from "next/link";

// import "./Header.scss";
import Image from "next/image";
import { useDispatch, useSelector } from "react-redux";
import { getAllAdvisors } from "@/app/advisors/slice/advisorApiSlice";
import { getAllEC } from "@/app/executive-committee/slice/ecApiSlice";
import { getAllPrograms } from "@/app/programs/slice/programsApiSlice";
import { getAllBlogs } from "@/app/posts/slice/postsApiSlice";
import { allSliders } from "@/components/slider/sliderApiSlice";
import { loggedInUser, userLogout } from "@/app/login/slice/authApiSlice";
import { getAuthData, setMessageEmpty } from "@/app/login/slice/authSlice";
import Links from "./Link";

export default function Header() {
  const pathname = usePathname();
  const dispatch = useDispatch();

  let theme = "";

  if (typeof window !== "undefined") {
    theme = localStorage.getItem("theme") || "light";
    if (theme === "dark") {
      document.querySelector("body").classList.add("dark");
      theme = "dark";
    } else {
      document.querySelector("body").classList.remove("dark");
      theme = "light";
    }
  }

  const handleChangeTheme = () => {
    if (theme === "light") {
      document.querySelector("body").classList.add("dark");
      localStorage.setItem("theme", "dark");
      theme = "dark";
    } else {
      document.querySelector("body").classList.remove("dark");
      localStorage.setItem("theme", "light");
      theme = "light";
    }
  };

  // user

  const { user, message } = useSelector(getAuthData);

  // navbar close
  const { isOpen, toggleMenu, dropDownRef } = usePopupControl();

  // sticky mode
  const [direction, setDirection] = useState("relative");

  useEffect(() => {
    let oldScrollY = window.scrollY;
    const handleScroll = () => {
      oldScrollY > window.scrollY ? setDirection("sticky") : setDirection("");
      oldScrollY = window.scrollY;
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [direction]);

  // handle logout
  // const handleLogout = () => {
  //   dispatch(userLogout());
  // };

  // const router = useRouter();

  // logout message show
  // useEffect(() => {
  //   if (message === "Successfully Logout.") {
  //     toast.success(message);
  //     dispatch(setMessageEmpty());
  //     router.push("/login");
  //   }
  // }, [message, dispatch, router]);


  const dropDownMenuRef = useRef(null);

  return (
    <nav
      className={`  top-0  bg-[#fafafaf0] dark:bg-[#0f1829] shadow-md     border  dark:border-[#1b2341] dark:border-b dark:border-t-0 dark:border-l-0 dark:border-r-0 ${direction} `}
      style={{ zIndex: "100" }}
    >
      <div className=" navbar  px-4 py-0 xl:w-[1200px] m-auto ">
        <div className="navbar-start  w-fit grow lg:grow-0 " ref={dropDownRef}>
          <button
            className="p-2 text-[#374246] dark:text-white bg-[#5a7b862c] cursor-pointer dark:bg-[#9f98b720] rounded-md lg:hidden"
            onClick={() => {
              toggleMenu(!isOpen);
            }}
          >
            <svg
              stroke="currentColor"
              fill="currentColor"
              strokeWidth="0"
              viewBox="0 0 20 20"
              aria-hidden="true"
              className="text-[22px] "
              height="1em"
              width="1em"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h6a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                clipRule="evenodd"
              ></path>
            </svg>
          </button>
          {/* vertical menu */}
          <div className="dropdown">
            {isOpen && (
              <ul
                tabIndex={0}
                className="top-[33px] -left-[54px] p-2 shadow  rounded-b-md w-60 absolute dark:bg-[#0f0826f7] space-y-[1px] bg-[#f1f5f9] lg:hidden"
                ref={dropDownMenuRef}
                style={{ zIndex: "300" }}
              >
                {Links.map((link, index) => (
                  <Fragment key={index}>
                    {!link?.child ? (
                      <>
                        {/* if user is logged in then show private links */}
                        {link.access === "private" && user && (
                          <li
                            onClick={() => {
                              toggleMenu(!isOpen);
                            }}
                          >
                            <Link
                              href={link?.href ? link.href : " "}
                              className={`${
                                pathname === link.href + "/" ? "active" : ""
                              } custom-style-menu-a`}
                              onClick={link?.href === " " && handleLogout}
                            >
                              {link.label}
                            </Link>
                          </li>
                        )}
                        {/* if user is not logged in then show public links */}
                        {!user && link?.access === "public" && (
                          <li
                            onClick={() => {
                              toggleMenu(!isOpen);
                            }}
                          >
                            <Link
                              href={link.href}
                              className={`${
                                pathname === link.href ? "active" : ""
                              } custom-style-menu-a`}
                            >
                              {link.label}
                            </Link>
                          </li>
                        )}
                        {/* if access is not defined then show all links */}
                        {!link?.access && (
                          <li
                            onClick={() => {
                              toggleMenu(!isOpen);
                            }}
                          >
                            <Link
                              href={link.href}
                              className={`${
                                pathname ===
                                (link.href === "/" ? "/" : link.href + "/")
                                  ? "active"
                                  : ""
                              } custom-style-menu-a`}
                            >
                              {link.label}
                            </Link>
                          </li>
                        )}
                      </>
                    ) : (
                      <li className="text-[#334155]  active:bg-transparent">
                        <label
                          htmlFor={`menu-toggle-${index}`}
                          className="flex justify-between w-full cursor-pointer"
                        >
                          <span className=" w-full h-full custom-style-menu-a new-menu flex justify-between py-[6px] px-[10px]">
                            {link.label}
                            <svg
                              stroke="currentColor"
                              fill="currentColor"
                              strokeWidth="0"
                              viewBox="0 0 24 24"
                              className="text-xl"
                              height="1em"
                              width="1em"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path fill="none" d="M0 0h24v24H0V0z"></path>
                              <path d="M7.41 8.59L12 13.17l4.59-4.58L18 10l-6 6-6-6 1.41-1.41z"></path>
                            </svg>
                          </span>
                        </label>
                        <input
                          type="checkbox"
                          id={`menu-toggle-${index}`}
                          className="hidden"
                        />

                        <ul
                          className={`space-y-[2px] shadow-md mt-1 vertical-child-${index} bg-white dark:bg-[#1f273476] z-50  rounded-md`}
                        >
                          {link?.child?.map((child, index) => (
                            <li
                              className="rounded-[4px]"
                              key={index}
                              onClick={() => {
                                toggleMenu(!isOpen);
                              }}
                            >
                              <Link
                                href={child.href}
                                className={`${
                                  pathname === child.href + "/" ? "active" : ""
                                } custom-style-menu-a`}
                              >
                                {child.label}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </li>
                    )}
                  </Fragment>
                ))}
              </ul>
            )}
          </div>

          {/* logo */}
          <Link className={` h-full  md:mx-0 w-full`} href={"/"}>
            <Image
              src="/images/logo/logo_black.webp"
              alt=""
              className="h-16 dark:hidden block mx-auto w-auto"
              width={100}
              height={52}
              placeholder="blur"
              blurDataURL="/images/blur/blur.webp"
              loading="lazy"
            />
            <Image
              src="/images/logo/logo_white.webp"
              alt=""
              className="h-16 dark:block hidden mx-auto w-auto"
              width={100}
              height={52}
              placeholder="blur"
              blurDataURL="/images/blur/blur.webp"
              loading="lazy"
            />
          </Link>
        </div>
        {/* horizontal */}
        <div className="navbar-center hidden lg:flex p-0 grow ">
          <ul className="menu menu-horizontal p-0 menu-compact space-x-2 mx-auto">
            {Links?.map((link, index) => (
              <Fragment key={index}>
                {!link?.child ? (
                  link.access === "private" && user ? (
                    <li>
                      <Link
                        href={link?.href ? link.href : " "}
                        className={`${
                          pathname === link?.href + "/" ? "active" : ""
                        } custom-style-menu-a`}
                        onClick={link?.href === " " && handleLogout}
                      >
                        {link.label}
                      </Link>
                    </li>
                  ) : !user && link.access === "public" ? (
                    <li>
                      <Link
                        href={link?.href}
                        className={`${
                          pathname ===
                          (link?.href === "/" ? "/" : link?.href + "/")
                            ? "active"
                            : ""
                        } custom-style-menu-a`}
                      >
                        {link.label}
                      </Link>
                    </li>
                  ) : !link.access ? (
                    <li>
                      <Link
                        href={link?.href}
                        className={`${
                          pathname ===
                          (link?.href === "/" ? "/" : link?.href + "/")
                            ? "active"
                            : ""
                        } custom-style-menu-a`}
                      >
                        {link.label}
                      </Link>
                    </li>
                  ) : (
                    " "
                  )
                ) : (
                  <li>
                    <span className="custom-style-menu-a">
                      {link?.label}
                      <svg
                        stroke="currentColor"
                        fill="currentColor"
                        strokeWidth="0"
                        viewBox="0 0 24 24"
                        className="text-xl"
                        height="1em"
                        width="1em"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path fill="none" d="M0 0h24v24H0V0z"></path>
                        <path d="M7.41 8.59L12 13.17l4.59-4.58L18 10l-6 6-6-6 1.41-1.41z"></path>
                      </svg>
                    </span>
                    <ul
                      className="py-0 shadow-md  top-[35px] dark:bg-[#0f0826] dark:text-zinc-100 
                   bg-[#f1f5f9] text-[#000]  drop-child-1"
                      style={{ zIndex: "100" }}
                    >
                      {link?.child?.map((child, index) => (
                        <li key={index}>
                          <Link
                            href={child.href}
                            className={`${
                              pathname === child.href + "/" ? "active" : ""
                            } custom-style-menu-a`}
                          >
                            {child.label}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </li>
                )}
              </Fragment>
            ))}
          </ul>
        </div>

        <div className="navbar-end  w-fit">
          <button
            className="border dark:border-zinc-800 p-3 rounded-full  text-[#374246] dark:text-white bg-[#5a7b862c] cursor-pointer dark:bg-[#9f98b720] "
            onClick={handleChangeTheme}
          >
            <svg
              stroke="currentColor"
              fill="currentColor"
              strokeWidth="0"
              viewBox="0 0 16 16"
              className="block dark:hidden   "
              height="1em"
              width="1em"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M6 .278a.768.768 0 0 1 .08.858 7.208 7.208 0 0 0-.878 3.46c0 4.021 3.278 7.277 7.318 7.277.527 0 1.04-.055 1.533-.16a.787.787 0 0 1 .81.316.733.733 0 0 1-.031.893A8.349 8.349 0 0 1 8.344 16C3.734 16 0 12.286 0 7.71 0 4.266 2.114 1.312 5.124.06A.752.752 0 0 1 6 .278z"></path>
              <path d="M10.794 3.148a.217.217 0 0 1 .412 0l.387 1.162c.173.518.579.924 1.097 1.097l1.162.387a.217.217 0 0 1 0 .412l-1.162.387a1.734 1.734 0 0 0-1.097 1.097l-.387 1.162a.217.217 0 0 1-.412 0l-.387-1.162A1.734 1.734 0 0 0 9.31 6.593l-1.162-.387a.217.217 0 0 1 0-.412l1.162-.387a1.734 1.734 0 0 0 1.097-1.097l.387-1.162zM13.863.099a.145.145 0 0 1 .274 0l.258.774c.115.346.386.617.732.732l.774.258a.145.145 0 0 1 0 .274l-.774.258a1.156 1.156 0 0 0-.732.732l-.258.774a.145.145 0 0 1-.274 0l-.258-.774a1.156 1.156 0 0 0-.732-.732l-.774-.258a.145.145 0 0 1 0-.274l.774-.258c.346-.115.617-.386.732-.732L13.863.1z"></path>
            </svg>
            <svg
              stroke="currentColor"
              fill="currentColor"
              strokeWidth="0"
              viewBox="0 0 16 16"
              className="dark:block hidden"
              height="1em"
              width="1em"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M8 12a4 4 0 1 0 0-8 4 4 0 0 0 0 8zM8 0a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 0zm0 13a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 13zm8-5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2a.5.5 0 0 1 .5.5zM3 8a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2A.5.5 0 0 1 3 8zm10.657-5.657a.5.5 0 0 1 0 .707l-1.414 1.415a.5.5 0 1 1-.707-.708l1.414-1.414a.5.5 0 0 1 .707 0zm-9.193 9.193a.5.5 0 0 1 0 .707L3.05 13.657a.5.5 0 0 1-.707-.707l1.414-1.414a.5.5 0 0 1 .707 0zm9.193 2.121a.5.5 0 0 1-.707 0l-1.414-1.414a.5.5 0 0 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .707zM4.464 4.465a.5.5 0 0 1-.707 0L2.343 3.05a.5.5 0 1 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .708z"></path>
            </svg>
          </button>
        </div>
      </div>
    </nav>
  );
}
