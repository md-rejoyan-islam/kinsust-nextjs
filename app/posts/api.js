export const allBlogs = async () => {
  const response = await fetch(`${process.env.SERVER_URL}/api/v1/posts`);
  const result = await response.json();
  return result?.data || {};
};

export const singleBlog = async (slug) => {
  const response = await fetch(
    `${process.env.SERVER_URL}/api/v1/posts/${slug}`
  );
  const result = await response.json();
  return result?.data || {};
};
