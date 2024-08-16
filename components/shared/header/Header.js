"use client";
import { usePathname, useRouter } from "next/navigation";
import { Fragment, useEffect, useRef, useState } from "react";
import usePopupControl from "@/hooks/popupControl/usePopupControl";
import Link from "next/link";
import "./header.css";
import Image from "next/image";
import Links from "./Link";
import ThemeToggle from "./ThemeToggle";
import {
  useAuthLogoutMutation,
  useLoggedInUserQuery,
} from "@/lib/feature/auth/authApi";
import { toast } from "react-toastify";
import Cookies from "js-cookie";

// // cached disable
// export const dynamic = "force-dynamic";

export default function Header() {
  const router = useRouter();

  const pathname = usePathname();
  const { data, refetch, currentData, isError, isSuccess } =
    useLoggedInUserQuery();

  const [userLogout] = useAuthLogoutMutation();

  const [user, setUser] = useState(data?.data || null);

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
  const handleLogout = async () => {
    const payload = await userLogout();
    if (payload?.data?.success) {
      router.push("/login");
      Cookies.remove("accessToken");
      setUser(null);
      toast.success("Successfully Logout.");
    } else if (payload?.error?.status === 400) {
      toast.error(payload.error.data.error.message);
    }
  };

  useEffect(() => {
    if (data?.data) {
      setUser(data.data);
    }
  }, [data]);

  const dropDownMenuRef = useRef(null);

  return (
    <nav
      className={`  top-0  bg-[#fafafaf0] dark:bg-[#0f1829] shadow-md     border  dark:border-[#1b2341] dark:border-b dark:border-t-0 dark:border-l-0 dark:border-r-0 ${direction}  `}
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
                                pathname === link.href ? "active" : ""
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
                                (link.href === "/" ? "/" : link.href)
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
                                  pathname === child.href ? "active" : ""
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
                          pathname === (link?.href === "/" ? "/" : link?.href)
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
                          pathname === (link?.href === "/" ? "/" : link?.href)
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
                              pathname === child.href ? "active" : ""
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

        <ThemeToggle />
      </div>
    </nav>
  );
}
