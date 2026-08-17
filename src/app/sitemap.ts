import { i18n } from "@/i18n-config";
import { baseURL, projects, routes as routesConfig } from "@/resources";

export default async function sitemap() {
  const locales = i18n.locales;

  const works = locales.flatMap((locale) =>
    projects[locale].map((project) => ({
      url: `${baseURL}/${locale}/projects/${project.slug}`,
      lastModified: project.publishedAt,
    })),
  );

  const activeRoutes = Object.keys(routesConfig).filter(
    (route) => routesConfig[route as keyof typeof routesConfig],
  );

  const routes = locales.flatMap((locale) =>
    activeRoutes.map((route) => ({
      url: `${baseURL}/${locale}${route !== "/" ? route : ""}`,
      lastModified: new Date().toISOString().split("T")[0],
    })),
  );

  return [...routes, ...works];
}
