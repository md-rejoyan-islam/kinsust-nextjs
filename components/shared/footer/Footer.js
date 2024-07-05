import Link from "next/link";
import Image from "next/image";
import Subscribe from "./Subscribe";

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
              className="hover:text-[#f54747]  dark:hover:text-[#2bd399] fill-white hover:fill-[#f54747] stroke-black hover:stroke-[0px]  stroke-[2px] dark:hover:fill-[#2bd399]  "
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                version="1.1"
                className="w-6  h-6 inline-block ml-1 mr-2 p-[3px]   "
                x="0"
                y="0"
                viewBox="0 0 32 32"
              >
                <g>
                  <path
                    d="M30.035 22.6c-.082-.065-6.035-4.356-7.669-4.048-.78.138-1.226.67-2.121 1.735-.144.172-.49.584-.759.877a12.517 12.517 0 0 1-1.651-.672 13.7 13.7 0 0 1-6.321-6.321 12.458 12.458 0 0 1-.672-1.651c.294-.27.706-.616.882-.764 1.06-.89 1.593-1.336 1.731-2.118.283-1.62-4.005-7.614-4.05-7.668A2.289 2.289 0 0 0 7.7 1C5.962 1 1 7.437 1 8.521c0 .063.091 6.467 7.988 14.5C17.013 30.909 23.416 31 23.479 31 24.564 31 31 26.038 31 24.3a2.283 2.283 0 0 0-.965-1.7z"
                    opacity="1"
                    data-original="#000000"
                  ></path>
                </g>
              </svg>
              +8801975-467878
            </a>

            <a
              href="tel:+8801615467878"
              className=" flex items-center gap-2 ml-1 hover:text-[#f54747] dark:hover:text-[#2bd399] fill-white hover:fill-[#ff0000] dark:hover:fill-[#2bd399] dark:stroke-none"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                version="1.1"
                width="512"
                height="512"
                x="0"
                y="0"
                className="w-6  h-6 inline-block ml-1 p-[1px] "
                viewBox="0 0 511.021 511.021"
              >
                <g>
                  <linearGradient
                    id="a"
                    x1="402.453"
                    x2="402.453"
                    y1="11.981"
                    y2="294.117"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop offset="0" stopColor="#ff0000"></stop>
                    <stop offset="1" stopColor="#ff0000"></stop>
                  </linearGradient>
                  <linearGradient
                    id="b"
                    x1="255.511"
                    x2="255.511"
                    y1=".038"
                    y2="510.983"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop offset="0" stopColor="#ff0000"></stop>
                    <stop offset="1"></stop>
                  </linearGradient>
                  <path
                    d="M119.792 391.191c89.821 89.821 164.738 160.531 254.558 70.711l21.213-21.213c11.716-11.716 11.716-30.711 0-42.426l-56.569-56.569c-11.716-11.716-30.711-11.716-42.426 0l-21.213 21.213c-31.414 31.413-49.733 33.346-65.389 22.962-13.539-8.98-75.873-71.314-84.853-84.853-10.383-15.656-8.451-33.975 22.962-65.388l21.213-21.213c11.716-11.716 11.716-30.711 0-42.426l-56.569-56.569c-11.716-11.716-30.711-11.716-42.426 0L49.08 136.633c-89.82 89.82-19.109 164.738 70.712 254.558z"
                    opacity="1"
                  ></path>
                  <path
                    fill="url(#a)"
                    className="blood-svg"
                    d="M503.521 193.049c0 55.818-45.25 101.068-101.068 101.068s-101.068-45.25-101.068-101.068S402.453 11.981 402.453 11.981s101.068 125.25 101.068 181.068z"
                    opacity="1"
                  ></path>
                  <path
                    fill="#ffffff"
                    d="M453.517 176.066h-34.979v-34.979h-32.17v34.979h-34.979v32.17h34.979v34.979h32.17v-34.979h34.979z"
                    opacity="1"
                  ></path>
                  <path
                    fill="url(#b)"
                    className="blood-svg"
                    d="M344.299 336.391c-14.624-14.622-38.412-14.62-53.034 0l-21.213 21.213c-31.236 31.237-45.346 29.043-55.94 22.016-12.554-8.327-74.422-70.194-82.748-82.748-7.026-10.594-9.222-24.703 22.015-55.939l21.213-21.213c14.622-14.622 14.622-38.412 0-53.034l-56.568-56.568c-14.621-14.621-38.412-14.621-53.033 0l-21.213 21.213c-22.804 22.805-36.378 45.289-41.5 68.74-4.713 21.584-2.129 43.435 7.901 66.801 17.636 41.087 55.995 81.311 104.31 129.625s88.538 86.674 129.624 104.309c15.846 6.802 30.993 10.18 45.834 10.18a98.037 98.037 0 0 0 20.966-2.278c23.451-5.121 45.937-18.695 68.741-41.5l21.213-21.213c14.621-14.621 14.621-38.412 0-53.033zM75.598 120.724c4.386-4.387 10.148-6.58 15.91-6.58s11.523 2.193 15.91 6.58l56.568 56.568a22.348 22.348 0 0 1 6.59 15.909 22.353 22.353 0 0 1-6.59 15.91l-15.91 15.91-88.388-88.388zM250.029 487.02c-38.631-16.582-77.775-53.974-124.934-101.133-47.159-47.158-84.55-86.302-101.132-124.934-17.311-40.331-9.301-76.595 25.219-113.613l88.373 88.373c-26.16 27.934-31.899 49.534-18.692 69.448 9.397 14.17 72.787 77.559 86.957 86.957 19.912 13.209 41.512 7.47 69.447-18.689l88.373 88.373c-37.017 34.519-73.278 42.53-113.611 25.218zm140.231-51.634-15.911 15.911-88.388-88.388 15.911-15.911c8.772-8.774 23.049-8.772 31.819 0l56.568 56.568c8.774 8.773 8.774 23.046.001 31.82zM408.29 7.271 402.453.038l-5.837 7.233c-4.194 5.198-102.731 127.975-102.731 185.777 0 59.865 48.703 108.568 108.568 108.568s108.568-48.703 108.568-108.568c0-57.802-98.537-180.578-102.731-185.777zm-5.837 279.346c-51.594 0-93.568-41.975-93.568-93.568 0-21.335 17.023-58.417 49.23-107.238 17.625-26.717 35.433-50.235 44.338-61.704 8.905 11.469 26.713 34.987 44.338 61.704 32.207 48.821 49.23 85.903 49.23 107.238 0 51.594-41.974 93.568-93.568 93.568zm23.585-153.03h-47.17v34.979H343.89v47.17h34.979v34.979h47.17v-34.979h34.979v-47.17h-34.979v-34.979zm19.979 49.979v17.17h-34.979v34.979h-17.17v-34.979H358.89v-17.17h34.979v-34.979h17.17v34.979z"
                    opacity="1"
                  ></path>
                </g>
              </svg>
              <span className="-ml-1">+8801615-467878</span>
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
                className="w-6  h-6 inline-block ml-1 mr-2 p-[3px]"
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
                className="w-6  h-6 inline-block ml-1 mr-2 p-[3px]"
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
    </>
  );
}
