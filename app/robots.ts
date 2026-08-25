import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: "https://rlatech.com.br/sitemap.xml",
    host: "https://rlatech.com.br",
  };
}