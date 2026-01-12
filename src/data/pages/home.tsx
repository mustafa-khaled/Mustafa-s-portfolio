import { Home } from "@/types";
import { Locale } from "@/i18n-config";
import { person } from "../person";

export const home: Record<Locale, Home> = {
  en: {
    path: "/",
    image: "/images/og/home.jpg",
    label: "Home",
    title: `${person.en.name}'s Portfolio`,
    description: `Portfolio website showcasing my work as a ${person.en.role}`,
    headline: <>Turning complex problems into scalable solutions</>,
    featured: {
      display: true,
      title: (
        <div className="flex items-center gap-3">
          <strong className="font-bold">Latest Work</strong>
          <div className="w-[1px] h-5 bg-[var(--brand-alpha-strong)]" />
          <span className="text-[var(--brand-medium)]">Featured projects</span>
        </div>
      ),
      href: "/projects",
    },
    subline: (
      <>
        I help founders and CEOs turn ideas, legacy systems, and complex
        operations into clear, scalable business platforms.
        <br />I work on shipping platforms, dashboards, invoicing, and internal
        tools that power real business workflows.
      </>
    ),
  },
  ar: {
    path: "/",
    image: "/images/og/home.jpg",
    label: "الرئيسية",
    title: `معرض أعمال ${person.ar.name}`,
    description: `موقع معرض أعمال يعرض عملي كـ ${person.ar.role}`,
    headline: <>تحويل المشكلات المعقدة إلى حلول قابلة للتطوير</>,
    featured: {
      display: true,
      title: (
        <div className="flex items-center gap-3">
          <strong className="font-bold">آخر الأعمال</strong>
          <div className="w-[1px] h-5 bg-[var(--brand-alpha-strong)]" />
          <span className="text-[var(--brand-medium)]">مشاريع مختارة</span>
        </div>
      ),
      href: "/projects",
    },
    subline: (
      <>
        أساعد المؤسسين والمديرين التنفيذيين في تحويل الأفكار والأنظمة القديمة
        والعمليات المعقدة إلى منصات أعمال واضحة وقابلة للتطوير.
        <br />
        أعمل على منصات الشحن، ولوحات التحكم، ونظم الفوترة، والأدوات الداخلية
        التي تدير سير العمل الحقيقي للشركات.
      </>
    ),
  },
};
