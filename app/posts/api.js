export const allBlogs = async () => {
  const response = await fetch(`${process.env.SERVER_URL}/api/v1/posts`, {
    cache: "no-store",
  });
  const result = await response.json();
  return result?.data || {};
};

export const singleBlog = async (slug) => {
  const response = await fetch(
    `${process.env.SERVER_URL}/api/v1/posts/${slug}`,
    {
      cache: "no-store",
    }
  );
  const result = await response.json();
  return result?.data || {};
};
