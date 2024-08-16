export const allBlogs = async () => {
  const response = await fetch(
    `${process.env.SERVER_URL}/api/v1/posts` <
      {
        cache: "no-cache",
      }
  );
  const result = await response.json();
  return result?.data || {};
};

export const singleBlog = async (slug) => {
  const response = await fetch(
    `${process.env.SERVER_URL}/api/v1/posts/${slug}`,
    {
      cache: "no-cache",
    }
  );
  const result = await response.json();
  return result?.data || {};
};
