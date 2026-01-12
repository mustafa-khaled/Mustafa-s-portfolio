import { Person } from "@/types";
import { Locale } from "@/i18n-config";

export const person: Record<Locale, Person> = {
  en: {
    firstName: "Mustafa",
    lastName: "Khaled",
    name: "Mustafa Khaled",
    role: "Software Engineer",
    avatar: "/images/avatar.jpg",
    email: "mustafakhaledinfo@gmail.com",
    location: "Egypt/Cairo",
    languages: ["English", "Arabic"],
  },
  ar: {
    firstName: "مصطفى",
    lastName: "خالد",
    name: "مصطفى خالد",
    role: "مهندس برمجيات",
    avatar: "/images/avatar.jpg",
    email: "mustafakhaledinfo@gmail.com",
    location: "مصر/القاهرة",
    languages: ["الإنجليزية", "العربية"],
  },
};
