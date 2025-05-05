/**
 * Run `build` or `dev` with `SKIP_ENV_VALIDATION` to skip env validation. This is especially useful
 * for Docker builds.
 */
import "./src/env.js";

/** @type {import("next").NextConfig} */
const config = {
  output: "export", // 添加静态导出配置
  distDir: process.env.NODE_ENV === "development" ? ".next" : "dist", // 根据环境设置不同的输出目录
  images: {
    unoptimized: true, // 禁用图片优化
  },
  webpack: (config) => {
    config.resolve.fallback = { fs: false, net: false, tls: false };
    config.externals.push("pino-pretty", "encoding");
    return config;
  },
};

export default config;
