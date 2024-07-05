export const allAdvisors = async () => {
  const response = await fetch(
    `${process.env.SERVER_URL}/api/v1/advisors?sort=index`
  );

  return response.json();
};
