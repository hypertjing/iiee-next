import type { NextConfig } from "next";

const nextConfig: NextConfig = {
    /* config options here */
    experimental: {
        useCache: true,
        serverActions: {
            bodySizeLimit: "100mb",
        },
    },
    images: {
        remotePatterns: [
            new URL("https://iiee.org.ph/**"),
            new URL("https://membership.iiee.org.ph/**"),
        ],
    },
};

export default nextConfig;
