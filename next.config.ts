import type { NextConfig } from "next";

const nextConfig: NextConfig = {
    /* config options here */
    // reactCompiler: true,
    cacheComponents: true,
    experimental: {
        // useCache: true,
        serverActions: {
            bodySizeLimit: "100mb",
        },
    },
    images: {
        remotePatterns: [
            new URL("http://localhost:3000/**"),
            new URL("http://127.0.0.1:3000/**"),
            new URL("https://iiee.org.ph/**"),
            new URL("https://membership.iiee.org.ph/**"),
        ],
    },
};

export default nextConfig;
