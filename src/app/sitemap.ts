import type { MetadataRoute } from "next";

const SITE_URL = "https://saer.cl";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [
    "",
    "/servicios/fleetcore",
    "/servicios/licitex",
    "/servicios/desarrollo",
    "/servicios/apps",
    "/blog",
    "/contacto",
  ];

  return routes.map((route) => ({
    url: `${SITE_URL}${route}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: route === "" ? 1 : 0.8,
  }));
}
