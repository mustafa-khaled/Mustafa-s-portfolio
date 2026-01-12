import { Newsletter, Social } from "@/types";
import { person } from "./person";

export const newsletter: Newsletter = {
  display: true,
  title: <>Subscribe to {person.en.firstName}'s Newsletter</>,
  description: <>My weekly newsletter about creativity and engineering</>,
};

export const social: Social = [
  {
    name: "LinkedIn",
    icon: "linkedin",
    link: "https://www.linkedin.com/in/the-mustafa-khaled/",
  },
  {
    name: "GitHub",
    icon: "github",
    link: "https://github.com/mustafa-khaled",
  },
  {
    name: "Email",
    icon: "email",
    link: `mailto:${person.en.email}`,
  },
];
