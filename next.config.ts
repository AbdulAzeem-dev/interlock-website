import type { NextConfig } from "next";
const nextConfig: NextConfig = {
  experimental: { serverActions: { bodySizeLimit: "4mb" } },
  // Factory film poster frames are served by Mux.
  images: { remotePatterns: [{ protocol: "https", hostname: "image.mux.com", pathname: "/**" }] },
};
export default nextConfig;
