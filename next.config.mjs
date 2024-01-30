import nextPwa from "next-pwa";

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  compiler: {
    removeConsole: process.env.NODE_ENV !== "development",
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "i.shgcdn.com",
        port: "",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "qph.cf2.quoracdn.net",
        port: "",
        pathname: "/**",
      },
    ],
  },
};

// Configuration object next-pwa
const withPWA = nextPwa({
  dest: "public",
  disable: process.env.NODE_ENV === "development",
  register: true,
  skipWaiting: true, // Skip waiting for service worker activation
});

// Export config for Next.js with PWA support
export default withPWA(nextConfig);
