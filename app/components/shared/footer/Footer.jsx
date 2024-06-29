import Link from "next/link";
import Image from "next/image";
import Subscribe from "./Subscribe";
import FooterModal from "./FooterModal";

export default function Footer() {
  return (
    <>
      <footer className="-z-[100] bg-[#f9fbfc]  dark:bg-[#0f1829] border-t  dark:border-[#211d4c] ">
        <section className="-z-[100] text-base xl:w-[1200px]    mx-auto footer pt-10 pb-12  px-3  m-auto  items-start justify-center md:justify-between ">
          <div className=" mx-auto justify-items-center md:justify-items-start text-center md:text-left ">
            <span className="">
              <Link href={"/"} className="cursor-pointer ">
                <Image
                  src="/images/logo/logo_white.webp"
                  alt="KIN logo"
                  className="h-[52px] hidden dark:block w-auto "
                  width={150}
                  height={60}
                  placeholder="blur"
                  blurDataURL="/images/blur/blur.webp"
                  loading="lazy"
                />
                <Image
                  src="/images/logo/logo_black.webp"
                  alt="KIN logo"
                  className="  w-fit dark:hidden  h-[52px]"
                  width={150}
                  height={60}
                  placeholder="blur"
                  blurDataURL="/images/blur/blur.webp"
                  loading="lazy"
                />
              </Link>
            </span>
            <p className=" font-['Hind_Siliguri']  -mt-2 text-[#3e5060] dark:text-[#b2bac2]">
              আত্মার কাছে দায়বদ্ধতায় হাতে রাখি হাত
            </p>
            <div className="text-[#3e5060] dark:text-[#b2bac2]">
              <p className="pb-[6px] pt-3 font-semibold">
                Enter Your Email address:
              </p>
              <Subscribe />
            </div>
          </div>
          <div className=" py-8 md:py-0 text-[#3e5060] dark:text-[#b2bac2] flex flex-col  gap-2  items-center md:items-start mx-auto contact-section ">
            <h2 className="pb-3 text-[#000102] dark:text-[#ffffff] font-bold  ">
              CONTACT
            </h2>
            <a
              href="tel:+8801975467878"
              className="hover:text-[#f54747] dark:hover:text-[#2bd399]"
            >
              <svg
                stroke="currentColor"
                fill="currentColor"
                strokeWidth="0"
                viewBox="0 0 16 16"
                className="w-6   h-6 inline-block mx-1 p-[3px]"
                height="1em"
                width="1em"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M1.885.511a1.745 1.745 0 0 1 2.61.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.678.678 0 0 0 .178.643l2.457 2.457a.678.678 0 0 0 .644.178l2.189-.547a1.745 1.745 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.634 18.634 0 0 1-7.01-4.42 18.634 18.634 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877L1.885.511z"
                ></path>
              </svg>
              +8801975-467878
            </a>

            <a
              href="tel:+8801615467878"
              className=" flex items-center gap-2 ml-1 hover:text-[#f54747] dark:hover:text-[#2bd399]"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                version="1.1"
                width="20"
                height="20"
                x="0"
                y="0"
                viewBox="0 0 64 64"
              >
                <g>
                  <path
                    d="M32 2a30 30 0 1 0 30 30A30.037 30.037 0 0 0 32 2zm3.72 17.56c1.64-1.92 4.13-4.81 4.13-6.39a.715.715 0 0 1 1.43 0c0 1.65 2.69 4.71 4.35 6.65a8.53 8.53 0 0 1 .78 10.07 7.34 7.34 0 0 1-5.85 3.29 7.316 7.316 0 0 1-5.84-3.29 8.534 8.534 0 0 1 1-10.33zm14.6 29.53a12.525 12.525 0 0 1-16.82-.7L15.61 30.5a12.511 12.511 0 0 1-.7-16.81c1.19-1.76 3.39-2.34 5.01-.79l4.48 4.48a3.09 3.09 0 0 1-.49 4.73 3.228 3.228 0 0 0-.93 4.5c2.42 3.68 10.61 11.87 14.31 14.35a3.302 3.302 0 0 0 4.64-.87 3.051 3.051 0 0 1 4.71-.46l4.46 4.46a3.057 3.057 0 0 1 .89 2.29 3.529 3.529 0 0 1-1.67 2.71z"
                    fill="#f40505"
                    data-original="#000000"
                    opacity="1"
                  ></path>
                </g>
              </svg>
              +8801615-467878
            </a>
            <a
              className="hover:text-[#f54747] dark:hover:text-[#2bd399]"
              href={"mailto: kinsust03@gmail.com"}
            >
              <svg
                stroke="currentColor"
                fill="currentColor"
                strokeWidth="0"
                viewBox="0 0 24 24"
                className="w-6  h-6 inline-block mx-1 p-[3px]"
                height="1em"
                width="1em"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path fill="none" d="M0 0h24v24H0V0z"></path>
                <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 14H4V8l8 5 8-5v10zm-8-7L4 6h16l-8 5z"></path>
              </svg>
              kinsust03@gmail.com
            </a>
            <a
              href="https://goo.gl/maps/x35EyojkSbMZY3rh7"
              target={"_blank"}
              rel={"noReferrer"}
              className=" hover:text-[#f54747] dark:hover:text-[#2bd399]    flex items-center "
            >
              <svg
                stroke="currentColor"
                fill="none"
                strokeWidth="2"
                viewBox="0 0 24 24"
                aria-hidden="true"
                className="w-6  h-6 inline-block mx-1 p-[3px]"
                height="1em"
                width="1em"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                ></path>
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                ></path>
              </svg>
              Shahjalal University of Science & Technology, Sylhet-3114,
              Bangladesh
            </a>
          </div>
          <div className=" text-[#3e5060] dark:text-[#b2bac2]  flex flex-col gap-[6px] items-center md:items-start mx-auto explore-section">
            <h2 className="pb-3 text-black dark:text-white  font-bold  ">
              EXPLORE
            </h2>
            <Link
              className="hover:text-[#f54747] dark:hover:text-[#2bd399] "
              href={"/our-history"}
            >
              Our History
            </Link>
            <Link
              className="hover:text-[#f54747] dark:hover:text-[#2bd399] "
              href={"/programs"}
            >
              Campaigns
            </Link>

            <Link
              className="hover:text-[#f54747] dark:hover:text-[#2bd399] "
              href={"/executive-committee"}
            >
              Executive Committee
            </Link>
            <Link
              href={"/faq"}
              className="hover:text-[#f54747] dark:hover:text-[#2bd399] "
            >
              FAQ
            </Link>
          </div>
        </section>
        {/* divider */}
        <div className=" xl:w-[1200px] mx-auto  ">
          <hr className="h-[1px] border-none bg-[#bfbebe50] dark:bg-[#211d4c]" />
        </div>

        {/* last part */}
        <div className="-z-[100] grid md:grid-cols-2 md:justify-items-between xl:w-[1200px] py-8 px-4  mx-auto text-[#3e5060] items-center dark:text-[#b2bac2]">
          <p className=" md:order-1 order-2 dark:text-[#e2e8f0]   text-center md:text-left">
            Copyright © 2023{" "}
            <span className="text-red-600 font-['Arial_black'] dark:text-red-600">
              KIN
            </span>{" "}
            , A Voluntary Organization of SUST
          </p>
          <div className="social-icons order-1 md:order-2 flex pb-4 md:pb-0 gap-4  md:justify-end mx-auto md:mx-0 ">
            <a
              href="https://www.linkedin.com/company/kin-a-voluntary-organisation-of-sust/"
              target="_blank"
              className="text-[#0077b5] bg-[#eaebf0] dark:bg-[#6267d21e]  hover:shadow-[0_1px_10px_0_#223db7] flex items-center h-12 rounded-full w-12  justify-center "
              rel="noreferrer"
            >
              <svg
                stroke="currentColor"
                fill="currentColor"
                strokeWidth="0"
                version="1.1"
                viewBox="0 0 16 16"
                className="fill-[#435562] hover:fill-[#223db7] dark:hover:fill-[#22b755] text-md dark:fill-white  "
                height="1em"
                width="1em"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M14.5 0h-13c-0.825 0-1.5 0.675-1.5 1.5v13c0 0.825 0.675 1.5 1.5 1.5h13c0.825 0 1.5-0.675 1.5-1.5v-13c0-0.825-0.675-1.5-1.5-1.5zM6 13h-2v-7h2v7zM5 5c-0.553 0-1-0.447-1-1s0.447-1 1-1c0.553 0 1 0.447 1 1s-0.447 1-1 1zM13 13h-2v-4c0-0.553-0.447-1-1-1s-1 0.447-1 1v4h-2v-7h2v1.241c0.412-0.566 1.044-1.241 1.75-1.241 1.244 0 2.25 1.119 2.25 2.5v4.5z"></path>
              </svg>
            </a>
            <a
              href="https://www.youtube.com/@kinsust3885"
              target={"_blank"}
              rel="noreferrer"
              className="text-[#0077b5] bg-[#eaebf0]  dark:bg-[#6267d21e]  flex items-center h-12 rounded-full w-12  justify-center "
            >
              <svg
                stroke="currentColor"
                fill="currentColor"
                strokeWidth="0"
                viewBox="0 0 512 512"
                className="fill-[#435562] dark:hover:fill-[#22b755] text-md dark:fill-white "
                height="1em"
                width="1em"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M508.6 148.8c0-45-33.1-81.2-74-81.2C379.2 65 322.7 64 265 64h-18c-57.6 0-114.2 1-169.6 3.6C36.6 67.6 3.5 104 3.5 149 1 184.6-.1 220.2 0 255.8c-.1 35.6 1 71.2 3.4 106.9 0 45 33.1 81.5 73.9 81.5 58.2 2.7 117.9 3.9 178.6 3.8 60.8.2 120.3-1 178.6-3.8 40.9 0 74-36.5 74-81.5 2.4-35.7 3.5-71.3 3.4-107 .2-35.6-.9-71.2-3.3-106.9zM207 353.9V157.4l145 98.2-145 98.3z"></path>
              </svg>
            </a>
            <a
              href={"//www.facebook.com/KINSUST"}
              rel="noreferrer"
              target="_blank"
              className="  text-[#0077b5] bg-[#eaebf0] dark:bg-[#6267d21e]  flex items-center h-12 rounded-full w-12  justify-center "
            >
              <svg
                stroke="currentColor"
                fill="currentColor"
                strokeWidth="0"
                viewBox="0 0 24 24"
                className="fill-[#435562] dark:hover:fill-[#22b755] text-md dark:fill-white "
                height="1em"
                width="1em"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M9.94474914,22 L9.94474914,13.1657526 L7,13.1657526 L7,9.48481614 L9.94474914,9.48481614 L9.94474914,6.54006699 C9.94474914,3.49740494 11.8713513,2 14.5856738,2 C15.8857805,2 17.0033128,2.09717672 17.3287076,2.13987558 L17.3287076,5.32020466 L15.4462767,5.32094085 C13.9702212,5.32094085 13.6256856,6.02252733 13.6256856,7.05171716 L13.6256856,9.48481614 L17.306622,9.48481614 L16.5704347,13.1657526 L13.6256856,13.1657526 L13.6845806,22"
                ></path>
              </svg>
            </a>
            <a
              href={"//www.instagram.com/kin_sust/"}
              rel="noreferrer"
              target="_blank"
              className=" text-[#0077b5]  bg-[#eaebf0] dark:bg-[#6267d21e]  flex items-center h-12 rounded-full w-12  justify-center "
            >
              <svg
                stroke="currentColor"
                fill="currentColor"
                strokeWidth="0"
                viewBox="0 0 448 512"
                className="fill-[#435562] dark:hover:fill-[#22b755] text-md dark:fill-white "
                height="1em"
                width="1em"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"></path>
              </svg>
            </a>
          </div>
        </div>
      </footer>

      {/* modal */}
      <FooterModal />
    </>
  );
}
