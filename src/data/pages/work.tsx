import { Work } from "@/types";
import { Locale } from "@/i18n-config";
import { person } from "../person";

export const work: Record<Locale, Work> = {
  en: {
    path: "/projects",
    label: "Projects",
    title: `Projects – ${person.en.name}`,
    description: `Design and dev projects by ${person.en.name}`,
  },
  ar: {
    path: "/projects",
    label: "المشاريع",
    title: `المشاريع – ${person.ar.name}`,
    description: `مشاريع التصميم والتطوير التي قام بها ${person.ar.name}`,
  },
};
