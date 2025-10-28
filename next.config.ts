import type { NextConfig } from "next";


const nextConfig: NextConfig = {
//  output: 'export', // for static export
  images: {
    unoptimized: true, // disable image optimization for static export
  },
  async redirects() {
    return [
      {
        source: "/:path*",
        has: [{ type: "host", value: "gtis.ma" }],
        destination: "https://www.gtis.ma/:path*",
        permanent: true,
      },
    ];
  },
};
export default nextConfig;
