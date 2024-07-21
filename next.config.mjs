/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  images: {
    // domains: ["0.0.0.0", "e48fef4e-0228-4ddd-8458-ed527f67f561"],
    remotePatterns: [
      { protocol: "http", hostname: "0.0.0.0", port: "8055", pathname: "/**" },
      { protocol: "http", hostname: "localhost" },
    ],
  },
};

export default nextConfig;
