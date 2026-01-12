import { Blog } from "@/types";
import { Locale } from "@/i18n-config";
import { person } from "../person";

export const blog: Record<Locale, Blog> = {
  en: {
    path: "/blog",
    label: "Blog",
    title: "Blog",
    description: `Read what ${person.en.name} has been up to recently`,
  },
  ar: {
    path: "/blog",
    label: "المدونة",
    title: "المدونة",
    description: `اقرأ آخر ما كتبه ${person.ar.name}`,
  },
};
