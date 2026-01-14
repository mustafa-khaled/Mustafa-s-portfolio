import { Project } from "@/types";
import { Locale } from "@/i18n-config";

const sharedProjects = [
  {
    slug: "jasmine",
    publishedAt: "2026-01-14",
    images: [
      "/images/projects/resl-time-water-consumption/jasmine-thumb.png",
      "/images/projects/resl-time-water-consumption/dashboard-en.jpeg",
      "/images/projects/resl-time-water-consumption/user-statistics.jpeg",
      "/images/projects/resl-time-water-consumption/users.jpeg",
      "/images/projects/resl-time-water-consumption/user-details.jpeg",
      "/images/projects/resl-time-water-consumption/settings.jpeg",
    ],
    preview: "",
    github: "https://github.com/mustafa-khaled/h2Ogo",
  },
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
  {
    slug: "novus",
    publishedAt: "2024-12-01",
    images: [
      "/images/projects/novus/nuvus-thump.png",
      "/images/projects/novus/dashboard.png",
      "/images/projects/novus/create-invoice.png",
      "/images/projects/novus/home-page.png",
      "/images/projects/novus/invoice.png",
    ],
    preview: "https://invoice-platform-sandy.vercel.app/",
    github: "https://github.com/mustafa-khaled/invoice-platform",
  },
  {
    slug: "emaar",
    publishedAt: "2024-11-15",
    images: [
      "/images/projects/emar/emaar-thumb.png",
      "/images/projects/emar/home-page.png",
      "/images/projects/emar/dashboard.png",
      "/images/projects/emar/products.png",
      "/images/projects/emar/careers.png",
      "/images/projects/emar/blog.png",
    ],
    preview: "https://emaar-self.vercel.app/en",
    github: "https://github.com/mustafa-khaled/emaar",
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
  novus: {
    title: "Novus",
    summary:
      "A professional invoice management platform built with Next.js 15, Prisma, and Kinde Auth, featuring automated invoice generation, client management, and real-time status tracking.",
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
          Novus is a comprehensive invoice management system designed to
          streamline billing processes for freelancers and small businesses. It
          provides a centralized dashboard to manage customers, products, and
          the entire lifecycle of an invoice.
        </p>
        <h2>Key Features</h2>
        <ul>
          <li>
            <strong>Insightful Dashboard</strong>: Track total revenue, pending
            amounts, and invoice counts at a glance with interactive charts.
          </li>
          <li>
            <strong>Automated Invoice Generation</strong>: Create professional
            PDF invoices with customizable details, including logos and terms.
          </li>
          <li>
            <strong>Client & Product Management</strong>: Easily maintain lists
            of your customers and the services/products you offer.
          </li>
          <li>
            <strong>Status Management</strong>: Keep track of payment statuses
            (PENDING, PAID) and update them as needed.
          </li>
          <li>
            <strong>Secure Authentication</strong>: Integrated with Kinde Auth
            for robust and secure user management.
          </li>
        </ul>
        <p>
          <em>
            Note: While the app supports payment integration and email sending,
            these features are currently disabled in the production demo for
            testing purposes.
          </em>
        </p>
        <h2>Technologies Used</h2>
        <ul>
          <li>
            <strong>Next.js 15</strong>: Utilizing the latest App Router and
            Server Actions for a modern web experience.
          </li>
          <li>
            <strong>Prisma & PostgreSQL</strong>: For reliable and efficient
            database management.
          </li>
          <li>
            <strong>Tailwind CSS & Shadcn UI</strong>: Creating a clean, modern,
            and professional user interface.
          </li>
          <li>
            <strong>React PDF</strong>: Powering the dynamic generation of
            invoice documents.
          </li>
        </ul>
      </>
    ),
  },
  emaar: {
    title: "Emaar",
    summary:
      "A luxury corporate platform for Emaar, blending European luxury with local expertise. Features a full-scale CMS for managing services, products, careers, and blog content.",
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
          Emaar is a high-end corporate website designed to showcase luxury real
          estate and services. It provides a seamless experience for users to
          explore properties, services, and career opportunities, while offering
          a robust administrative dashboard for content management.
        </p>
        <h2>Key Features</h2>
        <ul>
          <li>
            <strong>Dynamic CMS Dashboard</strong>: Comprehensive administrative
            tools to manage Home, About, Services, Products, Blog, and Careers
            pages in real-time.
          </li>
          <li>
            <strong>Product Catalog</strong>: A sophisticated browsing
            experience for luxury products and property listings.
          </li>
          <li>
            <strong>Career Portal</strong>: Integrated job listing and
            application system to manage talent acquisition.
          </li>
          <li>
            <strong>Multi-page Architecture</strong>: Dedicated sections for
            Services, Blog, and Contact, all powered by a centralized backend.
          </li>
          <li>
            <strong>Responsive Luxury Design</strong>: A premium visual
            interface optimized for all devices, reflecting the brand's high-end
            identity.
          </li>
        </ul>
        <h2>Technologies Used</h2>
        <ul>
          <li>
            <strong>Next.js</strong>: For a fast, SEO-optimized, and scalable
            web application.
          </li>
          <li>
            <strong>Prisma & PostgreSQL</strong>: Ensuring data integrity and
            efficient content delivery.
          </li>
          <li>
            <strong>Tailwind CSS</strong>: Implementing a bespoke, high-end
            design system with precision.
          </li>
          <li>
            <strong>Server Actions</strong>: Handling complex state changes and
            CMS operations securely.
          </li>
        </ul>
      </>
    ),
  },
  jasmine: {
    title: "Jasmine",
    summary:
      "A real-time water consumption tracking system for hotels, built with the MERN stack. Features live consumption monitoring, user management, and remote valve control.",
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
          Jasmine is a specialized internal tool designed for hotel management
          to monitor and control water consumption in real-time. Built using the
          MERN stack, it provides a centralized platform for administrators to
          manage users and their resource usage.
        </p>
        <h2>Key Features</h2>
        <ul>
          <li>
            <strong>Real-time Tracking</strong>: Monitor hotel water consumption
            live with detailed statistical breakdowns.
          </li>
          <li>
            <strong>Interactive Dashboard</strong>: A comprehensive overview of
            all active users and their current consumption metrics.
          </li>
          <li>
            <strong>Remote Control</strong>: Direct ability to open or close
            water valves for specific users through the dashboard.
          </li>
          <li>
            <strong>User Management (CRUD)</strong>: Full system for adding,
            updating, and managing user credentials and profiles.
          </li>
          <li>
            <strong>Advanced Settings</strong>: Customizable system
            configurations, including tax and charge management for billing.
          </li>
        </ul>
        <h2>Technologies Used</h2>
        <ul>
          <li>
            <strong>MERN Stack</strong>: MongoDB, Express.js, React, and Node.js
            for a full-stack JavaScript solution.
          </li>
          <li>
            <strong>Real-time Data binding</strong>: Ensuring consumption
            metrics are updated without page refreshes.
          </li>
          <li>
            <strong>Tailwind CSS</strong>: For a clean and functional
            administrative interface.
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
  novus: {
    title: "نوفوس (Novus)",
    summary:
      "منصة احترافية لإدارة الفواتير تم بناؤها باستخدام Next.js 15 و Prisma و Kinde Auth، تتميز بإنشاء فواتير مؤتمتة، وإدارة العملاء، وتتبع الحالة في الوقت الفعلي.",
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
          نوفوس هو نظام شامل لإدارة الفواتير مصمم لتبسيط عمليات الفوترة
          للمستقلين والشركات الصغيرة. يوفر لوحة تحكم مركزية لإدارة العملاء
          والمنتجات ودورة حياة الفاتورة بالكامل.
        </p>
        <h2>الميزات الرئيسية</h2>
        <ul>
          <li>
            <strong>لوحة تحكم دقيقة</strong>: تتبع إجمالي الإيرادات والمبالغ
            المعلقة وأعداد الفواتير بلمحة سريعة باستخدام الرسوم البيانية
            التفاعلية.
          </li>
          <li>
            <strong>إنشاء فواتير تلقائي</strong>: إنشاء فواتير PDF احترافية مع
            تفاصيل قابلة للتخصيص، بما في ذلك الشعارات والشروط.
          </li>
          <li>
            <strong>إدارة العملاء والمنتجات</strong>: الاحتفاظ بقوائم منظمة
            لعملائك والخدمات/المنتجات التي تقدمها بسهولة.
          </li>
          <li>
            <strong>إدارة الحالة</strong>: تتبع حالات الدفع (قيد الانتظار،
            مدفوع) وتحديثها حسب الحاجة.
          </li>
          <li>
            <strong>مصادقة آمنة</strong>: متكامل مع Kinde Auth لإدارة مستخدمين
            قوية وآمنة.
          </li>
        </ul>
        <p>
          <em>
            ملاحظة: في حين أن التطبيق يدعم تكامل الدفع وإرسال البريد الإلكتروني،
            إلا أن هذه الميزات معطلة حاليًا في النسخة التجريبية للإنتاج لأغراض
            الاختبار.
          </em>
        </p>
        <h2>التقنيات المستخدمة</h2>
        <ul>
          <li>
            <strong>Next.js 15</strong>: استخدام أحدث ميزات App Router و Server
            Actions لتجربة ويب حديثة.
          </li>
          <li>
            <strong>Prisma & PostgreSQL</strong>: لإدارة قاعدة بيانات موثوقة
            وفعالة.
          </li>
          <li>
            <strong>Tailwind CSS & Shadcn UI</strong>: لإنشاء واجهة مستخدم نظيفة
            وعصرية واحترافية.
          </li>
          <li>
            <strong>React PDF</strong>: لتوليد مستندات الفواتير بشكل ديناميكي.
          </li>
        </ul>
      </>
    ),
  },
  emaar: {
    title: "إعمار (Emaar)",
    summary:
      "منصة مؤسسية فاخرة لشركة إعمار، تمزج بين الفخامة الأوروبية والخبرة المحلية. تتميز بنظام إدارة محتوى (CMS) كامل لإدارة الخدمات، المنتجات، الوظائف، ومحتوى المدونة.",
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
          إعمار هو موقع إلكتروني مؤسسي رفيع المستوى مصمم لعرض العقارات والخدمات
          الفاخرة. يوفر تجربة سلسة للمستخدمين لاستكشاف العقارات والخدمات وفرص
          العمل، مع تقديم لوحة تحكم إدارية قوية لإدارة المحتوى.
        </p>
        <h2>الميزات الرئيسية</h2>
        <ul>
          <li>
            <strong>لوحة تحكم CMS ديناميكية</strong>: أدوات إدارية شاملة لإدارة
            صفحات الرئيسية، من نحن، الخدمات، المنتجات، المدونة، والتوظيف في
            الوقت الفعلي.
          </li>
          <li>
            <strong>كتالوج المنتجات</strong>: تجربة تصفح متطورة للمنتجات الفاخرة
            وقوائم العقارات.
          </li>
          <li>
            <strong>بوابة التوظيف</strong>: نظام متكامل لإدراج الوظائف والتقدم
            إليها لإدارة استقطاب المواهب.
          </li>
          <li>
            <strong>بنية متعددة الصفحات</strong>: أقسام مخصصة للخدمات والمدونة
            واتصل بنا، جميعها مدعومة بجهة خلفية مركزية.
          </li>
          <li>
            <strong>تصميم فاخر متجاوب</strong>: واجهة بصرية متميزة محسنة لجميع
            الأجهزة، تعكس الهوية الراقية للعلامة التجارية.
          </li>
        </ul>
        <h2>التقنيات المستخدمة</h2>
        <ul>
          <li>
            <strong>Next.js</strong>: لبناء تطبيق ويب سريع، محسن لمحركات البحث،
            وقابل للتوسع.
          </li>
          <li>
            <strong>Prisma & PostgreSQL</strong>: لضمان سلامة البيانات وتقديم
            المحتوى بكفاءة.
          </li>
          <li>
            <strong>Tailwind CSS</strong>: تنفيذ نظام تصميم مخصص وعالي الجودة
            بدقة.
          </li>
          <li>
            <strong>Server Actions</strong>: التعامل مع تغييرات الحالة المعقدة
            وعمليات CMS بشكل آمن.
          </li>
        </ul>
      </>
    ),
  },
  jasmine: {
    title: "ياسمين (Jasmine)",
    summary:
      "نظام تتبع استهلاك المياه في الوقت الفعلي للفنادق، تم بناؤه باستخدام MERN stack. يتميز بمراقبة الاستهلاك المباشر، وإدارة المستخدمين، والتحكم عن بعد في الصمامات.",
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
          ياسمين هي أداة داخلية متخصصة مصممة لإدارة الفنادق لمراقبة والتحكم في
          استهلاك المياه في الوقت الفعلي. تم بناؤه باستخدام MERN stack، ويوفر
          منصة مركزية للمسؤولين لإدارة المستخدمين واستخدامهم للموارد.
        </p>
        <h2>الميزات الرئيسية</h2>
        <ul>
          <li>
            <strong>تتبع في الوقت الفعلي</strong>: مراقبة استهلاك مياه الفندق
            بشكل مباشر مع إحصائيات مفصلة.
          </li>
          <li>
            <strong>لوحة تحكم تفاعلية</strong>: نظرة شاملة لجميع المستخدمين
            النشطين ومقاييس استهلاكهم الحالية.
          </li>
          <li>
            <strong>تحكم عن بعد</strong>: القدرة المباشرة على فتح أو إغلاق
            صمامات المياه لمستخدمين محددين من خلال لوحة التحكم.
          </li>
          <li>
            <strong>إدارة المستخدمين (CRUD)</strong>: نظام كامل لإضافة وتحديث
            وإدارة بيانات المستخدمين وملفاتهم الشخصية.
          </li>
          <li>
            <strong>إعدادات متقدمة</strong>: تكوينات نظام قابلة للتخصيص، بما في
            ذلك إدارة الضرائب والرسوم للفواتير.
          </li>
        </ul>
        <h2>التقنيات المستخدمة</h2>
        <ul>
          <li>
            <strong>MERN Stack</strong>: MongoDB و Express.js و React و Node.js
            لحل برمجي كامل بلغة JavaScript.
          </li>
          <li>
            <strong>ربط البيانات في الوقت الفعلي</strong>: ضمان تحديث مقاييس
            الاستهلاك دون الحاجة لإعادة تحميل الصفحة.
          </li>
          <li>
            <strong>Tailwind CSS</strong>: لواجهة إدارية نظيفة وعملية.
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
