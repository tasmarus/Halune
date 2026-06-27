/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,

  experimental: {
    optimizePackageImports: [
      "recharts",
    ],
  },

  compiler: {
    removeConsole:
      process.env.NODE_ENV === "production",
  },

  webpack: (
    config,
    { dev }
  ) => {
    if (dev) {
      config.cache = {
        type: "filesystem",
      };
    }

    return config;
  },
};

export default nextConfig;