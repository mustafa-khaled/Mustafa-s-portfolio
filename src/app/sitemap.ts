import {
  baseURL,
  routes as routesConfig,
  blogPosts,
  projects,
} from "@/resources";
import { i18n } from "@/i18n-config";

export default async function sitemap() {
  const locales = i18n.locales;

  const blogs = locales.flatMap((locale) =>
    blogPosts.map((post) => ({
      url: `${baseURL}/${locale}/blog/${post.slug}`,
      lastModified: post.publishedAt,
    }))
  );

  const works = locales.flatMap((locale) =>
    projects.map((project) => ({
      url: `${baseURL}/${locale}/projects/${project.slug}`,
      lastModified: project.publishedAt,
    }))
  );

  const activeRoutes = Object.keys(routesConfig).filter(
    (route) => routesConfig[route as keyof typeof routesConfig]
  );

  const routes = locales.flatMap((locale) =>
    activeRoutes.map((route) => ({
      url: `${baseURL}/${locale}${route !== "/" ? route : ""}`,
      lastModified: new Date().toISOString().split("T")[0],
    }))
  );

  return [...routes, ...blogs, ...works];
}
