"use client";
import PostCard from "../../components/cards/PostCard";
import { usePostsQuery } from "@/lib/feature/post/postApi";
import Pagination from "../../components/pagination/Pagination";
import Loading from "@/components/Loading";
import { useCallback, useEffect, useState } from "react";
import { usePathname, useSearchParams, useRouter } from "next/navigation";
import { GlowCapture } from "@codaworks/react-glow";

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
      <main className=" xl:w-[1200px]  lg:m-auto ">
        <GlowCapture className="py-10 px-5">
          <div className=" space-y-2">
            {blogs?.map((post, index) => (
              <PostCard post={post} key={post.id} index={index} />
            ))}
          </div>
        </GlowCapture>

        {/* if no data found  */}
        {blogs?.length === 0 && (
          <div>
            <h2 className=" text-center md:mt-5 mt-3 mb-5 text-[#fc535a] xl:text-4xl lg:text-3xl  sm:text-2xl text-xl font-bold">
              Couldn&apos;t find any Post data.
            </h2>
          </div>
        )}

        {/* pagination show  */}
        {blogs?.length > 0 && (
          <div className="pt-8 pb-2">
            <Pagination
              page={page}
              setPage={setPage}
              total={pagination?.totalPages || 1}
            />
          </div>
        )}
      </main>
    </section>
  );
}
