/** @type {import('next').NextConfig} */
const nextConfig = {
  images: { unoptimized: true, domains: ["server.kinsust.org"] },
  env: {
    SERVER_URL: "https://test-api.kinsust.org/",
    // SERVER_URL: "https://server.kinsust.org",
    SITE_URL: "https://kinsust.org",
  },
  // output: "export",
};

export default nextConfig;
