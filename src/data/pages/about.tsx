import { About } from "@/types";
import { Locale } from "@/i18n-config";
import { person } from "../person";

const technicalSkills = [
  { name: "React", icon: "react" },
  { name: "Next.js", icon: "nextjs" },
  { name: "TypeScript", icon: "typescript" },
  { name: "Node.js", icon: "nodejs" },
  { name: "Express.js", icon: "nodejs" },
  { name: "MongoDB", icon: "mongodb" },
  { name: "Docker", icon: "docker" },
  { name: "JavaScript", icon: "javascript" },
  { name: "Tailwind CSS", icon: "tailwind" },
  { name: "Git", icon: "git" },
];

const sharedSettings = {
  tableOfContent: {
    display: true,
    subItems: false,
  },
  avatar: {
    display: true,
  },
  calendar: {
    display: true,
    link: "https://cal.com",
  },
};

export const about: Record<Locale, About> = {
  en: {
    path: "/about",
    label: "About",
    title: `About – ${person.en.name}`,
    description: `Meet ${person.en.name}, ${person.en.role} from ${person.en.location}`,
    ...sharedSettings,
    intro: {
      display: true,
      title: "Introduction",
      description: (
        <p className="space-y-3">
          I build software that runs real businesses.
          <br className="my-1 block" />
          I help founders and CEOs turn ideas, legacy systems, and messy
          operations into clear, scalable platforms.
          <br className="my-1 block" />
          From dashboards and invoicing systems to internal tools and
          customer-facing apps, I design and ship software that supports real
          workflows — not just pretty screens.
          <br className="my-1 block" />
          My job isn’t to write code. It’s to turn business goals into systems
          that stay fast, reliable, and easy to scale as the company grows.
          <br className="my-1 block" />
          If your product feels slow, fragile, or hard to extend, I help rebuild
          it into something modern, stable, and ready for growth.
        </p>
      ),
    },
    work: {
      display: true,
      title: "Work Experience",
      experiences: [
        {
          company: "Luggage to Ship",
          timeframe: "Present",
          role: "Software Engineer",
          achievements: [
            "Leading the migration of a legacy CodeIgniter system to Next.js, transforming a slow, fragmented luggage-shipping product into a modern, conversion-focused platform.",
            "Redesigned the entire customer journey — from booking to tracking — to make shipping luggage faster, clearer, and mobile-first.",
            "Rebuilt the multi-role admin experience, giving operations, finance, and support teams real-time visibility and control.",
          ],
          images: [],
        },
        {
          company: "Ship to Box",
          timeframe: "Previous",
          role: "Frontend Engineer",
          achievements: [
            "Built and maintained advanced logistics dashboards that empower teams to manage shipments, storage, and operations efficiently using React.js, Next.js, and Tailwind CSS.",
            "Delivered interactive dashboards with live tracking, automated notifications, and intuitive reporting tools.",
            "Collaborated closely with backend and product teams to integrate APIs, optimize performance, and ensure a secure, seamless experience.",
          ],
          images: [],
        },
        {
          company: "Smart Gate",
          timeframe: "Previous",
          role: "Frontend Developer",
          achievements: [
            "Specialized in React.js development, integrating front-end components and fostering effective communication among cross-functional teams.",
            "Committed to achieving collective success through teamwork and innovation.",
          ],
          images: [],
        },
        {
          company: "Udacity",
          timeframe: "Trainee",
          role: "Full Stack Developer Trainee",
          achievements: [
            "Accomplished the Professional Front End Development Nano Degree program, gaining a strong foundation in web development.",
            "Gained proficiency in JavaScript, API interaction, and modern web development technologies.",
          ],
          images: [],
        },
      ],
    },
    studies: {
      display: true,
      title: "Studies",
      institutions: [
        {
          name: "Madina acadumy",
          description: <>Information system</>,
        },
      ],
    },
    technical: {
      display: true,
      title: "Technical skills",
      skills: technicalSkills,
    },
  },
  ar: {
    path: "/about",
    label: "عني",
    title: `عن – ${person.ar.name}`,
    description: `تعرف على ${person.ar.name}، ${person.ar.role} من ${person.ar.location}`,
    ...sharedSettings,
    intro: {
      display: true,
      title: "مقدمة",
      description: (
        <p className="space-y-3">
          أنا بشتغل مع أصحاب الشركات والمؤسسين عشان أحوّل أفكارهم وأنظمتهم
          القديمة أو المعقدة إلى منتجات رقمية واضحة وسهلة التوسع.
          <br />
          مش بعمل “مواقع” وخلاص أنا ببني منصات، داشبوردات، أنظمة فواتير،
          وأدوات داخلية بتشغل البيزنس يوميًا.
          <br />
          دوري مش بس أكتب كود، دوري أفهم البيزنس الأول، وبعدها أحوّله لنظام
          شغال، ثابت، ويقدر يكبر من غير ما ينهار.
          <br />
          لو عندك منتج أو سيستم حاسس إنه تقيل، ملخبط، أو صعب يتطور، أنا بساعدك
          تعيد بناءه بشكل حديث، منظم، وجاهز للنمو.
        </p>
      ),
    },
    work: {
      display: true,
      title: "الخبرة العملية",
      experiences: [
        {
          company: "Luggage to Ship",
          timeframe: "حاليا",
          role: "مهندس برمجيات",
          achievements: [
            "قيادة عملية الهجرة من نظام CodeIgniter قديم إلى Next.js، وتحويل منتج شحن أمتعة بطيء ومجزأ إلى منصة حديثة تركز على التحويل.",
            "إعادة تصميم رحلة العميل بالكامل - من الحجز إلى التتبع - لجعل شحن الأمتعة أسرع وأوضح وأكثر تركيزاً على الهاتف المحمول.",
            "إعادة بناء لوحة تحكم المسؤول متعددة الأدوار، مما يمنح فرق العمليات والتمويل والدعم رؤية وتحكماً في الوقت الفعلي.",
          ],
          images: [],
        },
        {
          company: "Ship to Box",
          timeframe: "سابقا",
          role: "مهندس واجهات أمامية",
          achievements: [
            "بناء وصيانة لوحات تحكم لوجستية متقدمة تمكن الفرق من إدارة الشحنات والتخزين والعمليات بكفاءة باستخدام React.js و Next.js و Tailwind CSS.",
            "تقديم لوحات تحكم تفاعلية مع تتبع حي وإشعارات تلقائية وأدوات إعداد تقارير بديهية.",
            "التعاون الوثيق مع فرق الواجهة الخلفية والمنتجات لدمج واجهات برمجة التطبيقات وتحسين الأداء وضمان تجربة آمنة وسلسة.",
          ],
          images: [],
        },
        {
          company: "Smart Gate",
          timeframe: "سابقا",
          role: "مطور واجهات أمامية",
          achievements: [
            "متخصص في تطوير React.js، ودمج مكونات الواجهة الأمامية وتعزيز التواصل الفعال بين الفرق متعددة الوظائف.",
            "ملتزم بتحقيق النجاح الجماعي من خلال العمل الجماعي والابتكار.",
          ],
          images: [],
        },
        {
          company: "Udacity",
          timeframe: "متدرب",
          role: "متدرب مطور Full Stack",
          achievements: [
            "إنجاز برنامج Front End Development Nano Degree الاحترافي، واكتساب أساس قوي في تطوير الويب.",
            "اكتساب الكفاءة في JavaScript والتفاعل مع واجهات برمجة التطبيقات وتقنيات تطوير الويب الحديثة.",
          ],
          images: [],
        },
      ],
    },
    studies: {
      display: true,
      title: "الدراسة",
      institutions: [
        {
          name: "أكاديمية المدينة",
          description: <>نظم المعلومات</>,
        },
      ],
    },
    technical: {
      display: true,
      title: "المهارات التقنية",
      skills: technicalSkills,
    },
  },
};
