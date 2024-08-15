// import { FacebookIcon, FacebookShareButton } from "next-share";
import Link from "next/link";
import PhotoPreview from "@/components/PhotoPreview";
import Image from "next/image";
import Comment from "./components/Comment";
import { allBlogs, singleBlog } from "../api";
const ApiURL = process.env.SERVER_URL;

// for of static generation
// export async function generateStaticParams() {
//   const blogs = await allBlogs();

//   if (!blogs?.length) {
//     return {
//       notFound: true,
//     };
//   }

//   return blogs?.map((post) => ({
//     slug: post?.slug,
//   }));
// }
// end for of static generation

export default async function GetSinglePost({ params }) {
  const blog = await singleBlog(params?.slug);
  const blogs = await allBlogs();

  return (
    <section className=" md:text-[20px] text-[18px] rounded-none  mx-auto theme-dark bg-[#fff]">
      <div className="grid xl:grid-cols-12  dark:bg-[#0f172ad9] w-full divide-gray-400 ">
        <div className="border-r dark:text-[#fffffff6] text-black dark:border-[#2a3651]  w-full  m-auto col-span-9 py-5  lg:px-16 md:px-8 px-3">
          <div className="">
            <h2 className="font-['Hind_Siliguri'] card-title font-bold justify-center text-3xl pt-3">
              {blog?.title}
            </h2>
            <p className="mb-5 " id="subTitle"></p>

            <figure>
              <PhotoPreview
                src={`${ApiURL}/public/images/posts/${blog?.post_photo}`}
              >
                <Image
                  src={`${ApiURL}/public/images/posts/${blog?.post_photo}`}
                  width={1000}
                  height={500}
                  alt="KIN blood donation"
                  placeholder="blur"
                  blurDataURL="/images/blur/blur.webp"
                  loading="lazy"
                  className="sm:w-[80%] cursor-pointer w-full mx-auto"
                />
              </PhotoPreview>
            </figure>
            <div
              className="my-5  text-justify"
              dangerouslySetInnerHTML={{ __html: blog?.description }}
              id="details"
            ></div>
          </div>
          {/* share section  */}
          {/* <FacebookShareButton
            url={"https://github.com/next-share"}
            quote={
              "next-share is a social share buttons for your next React apps."
            }
            hashtag={"#nextshare"}
          /> 
          <FacebookIcon size={32} round /> */}
          {/* comment section */}
          <Comment blog={blog} slug={blog?.slug} />
        </div>

        <aside className=" hidden xl:col-span-3  px-5 pt-5 h-fit  xl:block sticky top-1  mb-5">
          <h2 className=" text-center text-xl font-bold text-black dark:text-white">
            Release Notes
          </h2>
          <ul className="">
            {blogs?.map((blog, index) => (
              <li className="my-3 " key={index}>
                <div className="flex justify-items-start relative  bg-transparent hover:text-red-600">
                  <span className="-mr-5 bg-zinc-200 h-fit rounded-md ">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                    >
                      <path d="M4 6h2v2H4zm0 5h2v2H4zm0 5h2v2H4zm16-8V6H8.023v2H18.8zM8 11h12v2H8zm0 5h12v2H8z"></path>
                    </svg>
                  </span>

                  <Link
                    href={`/posts/${blog?.slug}`}
                    className=" hover:text-[#ed1018] dark:hover:text-[#5c3436]  active:bg-transparent  focus-visible:outline-none "
                  >
                    <span className="pl-8 pb-[4px] hover:text-red-500">
                      {blog?.title}
                    </span>
                  </Link>
                </div>
              </li>
            ))}
          </ul>
        </aside>
      </div>
    </section>
  );
}
