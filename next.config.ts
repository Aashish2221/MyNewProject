import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    domains: ['res.cloudinary.com'], // ✅ Add allowed image domain(s)
  },
};

export default nextConfig;

