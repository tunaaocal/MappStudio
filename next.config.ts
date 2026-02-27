import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: "/max-ai",
        destination: "https://apps.apple.com/us/app/potential-analyzer-ai/id6757166626?ppid=0f0ffa50-24d6-4cc6-b026-7654298a6906",
        permanent: false,
      },
      {
        source: "/wardrobe-ai",
        destination: "https://apps.apple.com/us/app/wardrobe-ai-outfit-maker/id6752615624?ppid=b667d076-f3bd-4a28-a832-2868ad586112",
        permanent: false,
      },
    ];
  },
};

export default nextConfig;
