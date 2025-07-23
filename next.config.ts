import type { NextConfig } from "next";

const nextConfig: NextConfig = {
    /* config options here */
    experimental: {
        ppr: "incremental",
    },
    // incremental을 사용하면 특정 경로에 부분 사전 렌더링(PPR)을 적용할 수 있음
};

export default nextConfig;
