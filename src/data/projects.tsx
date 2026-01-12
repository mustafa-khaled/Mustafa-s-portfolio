import { Project } from "@/types";
import { Locale } from "@/i18n-config";

const sharedProjects = [
  {
    slug: "pizzaco",
    publishedAt: "2024-03-20",
    images: [
      "/images/projects/pizzaco/pizzaco-thumb.png",
      "/images/projects/pizzaco/home page.png",
      "/images/projects/pizzaco/menu.png",
      "/images/projects/pizzaco/order.png",
    ],
    preview: "https://pizzaco.netlify.app/",
    github: "https://github.com/mustafa-khaled/Fast-Pizza",
  },
  {
    slug: "entertainment-app",
    publishedAt: "2024-02-15",
    images: [
      "/images/projects/entertainment/entertainment-thump.png",
      "/images/projects/entertainment/Home.png",
      "/images/projects/entertainment/details.png",
      "/images/projects/entertainment/tv show.png",
    ],
    preview: "https://entertainment-application.netlify.app/",
    github: "https://github.com/mustafa-khaled/Entertainment-App",
  },
];

const projectsEn = {
  pizzaco: {
    title: "PizzaCo",
    summary:
      "A modern pizza ordering application built with React and Tailwind CSS, featuring a dynamic menu, real-time ordering, and priority delivery options.",
    team: [
      {
        name: "Mustafa Khaled",
        role: "Software Engineer",
        avatar: "/images/avatar.jpg",
        linkedIn: "https://www.linkedin.com/in/mustafa-khaled-/",
      },
    ],
    content: (
      <>
        <h2>Overview</h2>
        <p>
          PizzaCo is a comprehensive pizza ordering platform designed to provide
          a seamless and fast user experience. Built with React and powered by a
          dedicated backend API, it handles everything from dynamic menu
          discovery to complex order processing.
        </p>
        <h2>Key Features</h2>
        <ul>
          <li>
            <strong>Dynamic Menu</strong>: Users can explore a wide variety of
            pizzas, each with detailed descriptions and pricing.
          </li>
          <li>
            <strong>Order Customization</strong>: Pick your items and manage
            your cart effortlessly.
          </li>
          <li>
            <strong>Personal Information & Address</strong>: Integrated user
            forms for personal details and delivery addresses to ensure
            accuracy.
          </li>
          <li>
            <strong>Advanced Ordering</strong>: Make your order with real-time
            status updates.
          </li>
          <li>
            <strong>Priority Delivery</strong>: Option to mark orders as
            priority for faster processing and delivery.
          </li>
        </ul>
        <h2>Technologies Used</h2>
        <ul>
          <li>
            <strong>React</strong>: For building a responsive and interactive
            user interface.
          </li>
          <li>
            <strong>Tailwind CSS</strong>: For a modern, clean, and responsive
            design.
          </li>
          <li>
            <strong>Redux Toolkit</strong>: For efficient state management
            across the ordering flow.
          </li>
        </ul>
      </>
    ),
  },
  "entertainment-app": {
    title: "Entertainment App",
    summary:
      "A feature-rich web application to discover movies and TV series, built with React, Redux, and TMDB API integration.",
    team: [
      {
        name: "Mustafa Khaled",
        role: "Software Engineer",
        avatar: "/images/avatar.jpg",
        linkedIn: "https://www.linkedin.com/in/mustafa-khaled-/",
      },
    ],
    content: (
      <>
        <h2>Overview</h2>
        <p>
          The Entertainment App is a comprehensive platform for movie and TV
          show enthusiasts. It leverages the TMDB API to provide up-to-date
          information about trending, popular, and top-rated content across
          various categories.
        </p>
        <h2>Key Features</h2>
        <ul>
          <li>
            <strong>Multi-Category Discovery</strong>: Browse through Movies, TV
            Series, and Bookmarked content.
          </li>
          <li>
            <strong>Search Functionality</strong>: Quickly find any movie or TV
            show using the integrated search bar.
          </li>
          <li>
            <strong>Bookmarking System</strong>: Save your favorite shows and
            movies to access them later in a dedicated section.
          </li>
          <li>
            <strong>Detailed Information</strong>: View cast members, ratings,
            genres, and trailers for each title.
          </li>
          <li>
            <strong>Responsive Design</strong>: Optimized for all devices, from
            mobile phones to large desktop screens.
          </li>
        </ul>
        <h2>Technologies Used</h2>
        <ul>
          <li>
            <strong>React</strong>: For building the UI components and managing
            the app lifecycle.
          </li>
          <li>
            <strong>Redux Toolkit</strong>: Used for global state management,
            especially for the bookmarking system.
          </li>
          <li>
            <strong>Tailwind CSS</strong>: For building a sleek, modern, and
            dark-themed UI.
          </li>
          <li>
            <strong>TMDB API</strong>: The source of truth for all entertainment
            data.
          </li>
        </ul>
      </>
    ),
  },
};

const projectsAr = {
  pizzaco: {
    title: "بيتزاكو (PizzaCo)",
    summary:
      "تطبيق عصري لطلب البيتزا تم بناؤه باستخدام React و Tailwind CSS، يتميز بقائمة طعام ديناميكية، وطلب فوري، وخيارات توصيل ذات أولوية.",
    team: [
      {
        name: "مصطفى خالد",
        role: "مهندس برمجيات",
        avatar: "/images/avatar.jpg",
        linkedIn: "https://www.linkedin.com/in/mustafa-khaled-/",
      },
    ],
    content: (
      <>
        <h2>نظرة عامة</h2>
        <p>
          بيتزاكو هو منصة شاملة لطلب البيتزا مصممة لتوفير تجربة مستخدم سلسة
          وسريعة. تم بناؤه باستخدام React، وهو يتعامل مع كل شيء بدءًا من اكتشاف
          القائمة الديناميكية وحتى معالجة الطلبات المعقدة.
        </p>
        <h2>الميزات الرئيسية</h2>
        <ul>
          <li>
            <strong>قائمة ديناميكية</strong>: يمكن للمستخدمين استكشاف مجموعة
            واسعة من أنواع البيتزا، كل منها بوصف مفصل وأسعار محددة.
          </li>
          <li>
            <strong>تخصيص الطلب</strong>: اختر أصنافك وقم بإدارة عربة التسوق
            الخاصة بك بسهولة.
          </li>
          <li>
            <strong>المعلومات الشخصية والعنوان</strong>: نماذج مدمجة لإضافة
            البيانات الشخصية وعناوين التوصيل لضمان الدقة.
          </li>
          <li>
            <strong>طلب متقدم</strong>: قم بتقديم طلبك مع تحديثات الحالة في
            الوقت الفعلي.
          </li>
          <li>
            <strong>توصيل ذو أولوية</strong>: خيار لتمييز الطلبات كأولوية
            لمعالجتها وتوصيلها بشكل أسرع.
          </li>
        </ul>
        <h2>التقنيات المستخدمة</h2>
        <ul>
          <li>
            <strong>React</strong>: لبناء واجهة مستخدم سريعة الاستجابة وتفاعلية.
          </li>
          <li>
            <strong>Tailwind CSS</strong>: لتصميم عصري ونظيف ومتجاوب.
          </li>
          <li>
            <strong>Redux Toolkit</strong>: لإدارة الحالة عبر تدفق الطلب.
          </li>
        </ul>
      </>
    ),
  },
  "entertainment-app": {
    title: "تطبيق الترفيه (Entertainment App)",
    summary:
      "تطبيق ويب غني بالميزات لاكتشاف الأفلام والمسلسلات التلفزيونية، تم بناؤه باستخدام React و Redux وتكامل TMDB API.",
    team: [
      {
        name: "مصطفى خالد",
        role: "مهندس برمجيات",
        avatar: "/images/avatar.jpg",
        linkedIn: "https://www.linkedin.com/in/mustafa-khaled-/",
      },
    ],
    content: (
      <>
        <h2>نظرة عامة</h2>
        <p>
          تطبيق الترفيه هو منصة شاملة لعشاق الأفلام والمسلسلات. يستفيد من واجهة
          برمجة تطبيقات TMDB لتوفير أحدث المعلومات حول المحتوى الرائج والأكثر
          شعبية والأعلى تقييمًا عبر فئات مختلفة.
        </p>
        <h2>الميزات الرئيسية</h2>
        <ul>
          <li>
            <strong>اكتشاف فئات متعددة</strong>: تصفح الأفلام والمسلسلات
            التلفزيونية والمحتوى المحفوظ.
          </li>
          <li>
            <strong>وظيفة البحث</strong>: ابحث بسرعة عن أي فيلم أو مسلسل
            تلفزيوني باستخدام شريط البحث المدمج.
          </li>
          <li>
            <strong>نظام الإشارات المرجعية</strong>: احفظ عروضك وأفلامك المفضلة
            للوصول إليها لاحقًا في قسم مخصص.
          </li>
          <li>
            <strong>معلومات مفصلة</strong>: عرض طاقم العمل، التقييمات، الأنواع،
            والعروض الدعائية لكل عنوان.
          </li>
          <li>
            <strong>تصميم متجاوب</strong>: محسن لجميع الأجهزة، من الهواتف
            المحمولة إلى الشاشات المكتبية الكبيرة.
          </li>
        </ul>
        <h2>التقنيات المستخدمة</h2>
        <ul>
          <li>
            <strong>React</strong>: لبناء مكونات واجهة المستخدم وإدارة دورة حياة
            التطبيق.
          </li>
          <li>
            <strong>Redux Toolkit</strong>: يستخدم لإدارة الحالة العالمية، خاصة
            لنظام الإشارات المرجعية.
          </li>
          <li>
            <strong>Tailwind CSS</strong>: لبناء واجهة مستخدم أنيقة وعصرية
            وداكنة.
          </li>
          <li>
            <strong>TMDB API</strong>: المصدر الأساسي لجميع بيانات الترفيه.
          </li>
        </ul>
      </>
    ),
  },
};

export const projects: Record<Locale, Project[]> = {
  en: sharedProjects.map((project) => ({
    ...project,
    ...projectsEn[project.slug as keyof typeof projectsEn],
  })),
  ar: sharedProjects.map((project) => ({
    ...project,
    ...projectsAr[project.slug as keyof typeof projectsAr],
  })),
};
