"use client";
import PostCard from "../../components/cards/PostCard";
import { usePostsQuery } from "@/lib/feature/post/postApi";
import Pagination from "../../components/pagination/Pagination";
import Loading from "@/components/Loading";
import { useCallback, useEffect, useState } from "react";
import { usePathname, useSearchParams, useRouter } from "next/navigation";

export default function Posts() {
  const [page, setPage] = useState(1);
  const { data: { data: blogs = [], pagination = {} } = {}, isLoading } =
    usePostsQuery(`page=${page}`);

  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const createQueryString = useCallback(
    (name, value) => {
      const params = new URLSearchParams(searchParams);
      params.set(name, value);

      return params.toString();
    },
    [searchParams]
  );

  useEffect(() => {
    const search = createQueryString("page", page);
    router.push(pathname + "?" + search);
  }, [router.isReady, createQueryString, pathname, router, page]);

  // if data is loading
  if (isLoading) {
    return <Loading />;
  }

  return (
    <section className=" bg-[#fcf9fe]    theme-dark    min-h-screen overflow-hidden">
      <main className=" xl:w-[1200px] py-10 px-5 lg:m-auto ">
        <div className=" space-y-10">
          {blogs?.map((post, index) => (
            <PostCard post={post} key={post.id} index={index} />
          ))}
        </div>

        {/* if no data found  */}
        {blogs.length === 0 && (
          <div>
            <h1 className="text-center px-4 text-black dark:text-white">
              No Data Found!
            </h1>
          </div>
        )}

        {/* pagination show  */}
        {blogs.length > 0 && (
          <div className="pt-8 pb-2">
            <Pagination
              page={page}
              setPage={setPage}
              total={pagination?.totalPages || 1}
            />
          </div>
        )}

        {/* pagination */}
        {/* {blogs.length > 0 ? (
            <Pagination pagination={pagination} data={getAllBlogs} />
          ) : (
            <div>
              <h1 className="text-center px-4 text-black dark:text-white">
                No Data Found!
              </h1>
            </div>
          )} */}
      </main>
    </section>
  );
}
