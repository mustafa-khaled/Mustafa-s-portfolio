import { Project } from "@/types";
import { Locale } from "@/i18n-config";

const sharedProjects = [
  {
    slug: "automate-design-handovers-with-a-figma-to-code-pipeline",
    publishedAt: "2024-04-01",
    images: [
      "/images/projects/project-01/cover-02.jpg",
      "/images/projects/project-01/image-03.jpg",
    ],
    link: "https://once-ui.com/",
  },
  {
    slug: "building-once-ui-a-customizable-design-system",
    publishedAt: "2024-04-08",
    images: [
      "/images/projects/project-01/cover-01.jpg",
      "/images/projects/project-01/cover-02.jpg",
      "/images/projects/project-01/cover-03.jpg",
      "/images/projects/project-01/cover-04.jpg",
    ],
    link: undefined,
  },
];

const projectsEn = {
  "automate-design-handovers-with-a-figma-to-code-pipeline": {
    title: "Automating Design Handovers with a Figma to Code Pipeline",
    summary:
      "Explore the enduring debate between using spaces and tabs for code indentation, and why this choice matters more than you might think.",
    team: [
      {
        name: "John Doe",
        role: "Software Engineer",
        avatar: "/images/avatar.jpg",
        linkedIn: "https://www.linkedin.com/company/once-ui/",
      },
    ],
    content: (
      <>
        <h2>Overview</h2>
        <p>
          In this project, I focused on automating the often tedious design
          handover process. The goal was to create a pipeline that converts
          Figma designs directly into clean, production-ready code. By
          integrating design tokens, component libraries, and automated
          workflows, this solution significantly reduced the time spent on
          translating design assets into code, while maintaining design
          consistency across the product.
        </p>
        <h2>Key Features</h2>
        <ul>
          <li>
            <strong>Figma Plugin Integration</strong>: Developed a custom Figma
            plugin that extracts design tokens such as colors, typography, and
            spacing values, and exports them in a format compatible with our
            codebase.
          </li>
          <li>
            <strong>Code Generation</strong>: Integrated an automated process
            that translates Figma components into React code using a combination
            of design tokens and pre-built component templates. This allowed
            developers to focus more on logic and less on repetitive UI coding.
          </li>
          <li>
            <strong>Continuous Sync</strong>: Established a CI/CD pipeline that
            continuously synchronizes design changes from Figma to the codebase,
            ensuring design updates are reflected instantly without manual
            intervention.
          </li>
          <li>
            <strong>Scalable Design System</strong>: Leveraged a design system
            that remains the single source of truth for both designers and
            developers, making it easy to maintain consistency even as the
            product evolves.
          </li>
        </ul>
        <h2>Technologies Used</h2>
        <ul>
          <li>
            <strong>Figma API</strong>: For extracting design tokens and
            component data directly from the Figma designs.
          </li>
          <li>
            <strong>React and Next.js</strong>: For building the front-end
            codebase with clean, reusable components.
          </li>
          <li>
            <strong>Styled-Components</strong>: For managing styles dynamically
            using design tokens.
          </li>
          <li>
            <strong>GitHub Actions</strong>: For automating the pipeline and
            syncing design changes to the repository.
          </li>
        </ul>
        <h2>Challenges and Learnings</h2>
        <p>
          One key challenge was ensuring that the generated code was clean and
          maintainable. This involved setting up intelligent mapping between
          Figma components and React code structures, as well as managing edge
          cases like responsive design and conditional rendering. Additionally,
          the continuous synchronization required a robust error-handling system
          to prevent conflicts during development.
        </p>
        <h2>Outcome</h2>
        <p>
          The automated Figma to code pipeline has streamlined the handoff
          process, cutting down design-to-development time by 40%. Designers now
          have more confidence that their designs will be accurately translated
          into code, and developers can focus on more complex logic and feature
          development. This project has proven the value of automation in
          bridging the gap between design and development.
        </p>
      </>
    ),
  },
  "building-once-ui-a-customizable-design-system": {
    title: "Building Once UI, a Customizable Design System",
    summary:
      "Development of a flexible and highly customizable design system using Next.js for front-end and Figma for design collaboration.",
    team: [
      {
        name: "Selene Yu",
        role: "Software Engineer",
        avatar: "/images/avatar.jpg",
        linkedIn: "https://www.linkedin.com/company/once-ui/",
      },
      {
        name: "Lorant One",
        role: "Design Engineer",
        avatar: "/images/projects/project-01/avatar-01.jpg",
        linkedIn: "https://www.linkedin.com/company/once-ui/",
      },
    ],
    content: (
      <>
        <h2>Overview</h2>
        <p>
          Development of a flexible and highly customizable design system using
          Next.js for front-end and Figma for design collaboration.
        </p>
        <h2>Key Features</h2>
        <ul>
          <li>
            <strong>Component Library</strong>: Built a set of modular, reusable
            UI components using React and styled-components in Next.js, focusing
            on accessibility and responsiveness.
          </li>
          <li>
            <strong>Theming and Customization</strong>: Integrated a theming
            system that allows easy switching and customization of color
            palettes, typography, and layout styles using CSS variables and
            Figma tokens.
          </li>
          <li>
            <strong>Figma Integration</strong>: Collaborated closely with
            designers by setting up a shared design library in Figma. This
            library was synchronized with the codebase, ensuring design handoffs
            were seamless and that design tokens remained consistent across both
            platforms.
          </li>
          <li>
            <strong>Documentation and Usage Guidelines</strong>: Developed
            comprehensive documentation with Storybook to showcase components,
            usage patterns, and best practices, ensuring the design system is
            easy to adopt by other teams.
          </li>
        </ul>
        <h2>Technologies Used</h2>
        <ul>
          <li>
            <strong>Next.js</strong>: For fast, server-rendered React
            applications.
          </li>
          <li>
            <strong>Figma</strong>: For creating and managing design assets and
            prototypes.
          </li>
          <li>
            <strong>Styled-Components</strong>: For styling React components
            with a modular, themable approach.
          </li>
          <li>
            <strong>Storybook</strong>: For building an interactive, documented
            component library.
          </li>
        </ul>
        <h2>Challenges and Learnings</h2>
        <p>
          One key challenge was balancing the need for flexibility with the
          desire to maintain design consistency. The solution involved creating
          well-defined design tokens and establishing clear guidelines for when
          and how components could be customized. Additionally, setting up
          effective collaboration workflows between designers and developers
          using Figma and Git was a learning experience that greatly improved
          the process.
        </p>
        <h2>Outcome</h2>
        <p>
          The design system is now actively used across multiple projects,
          leading to faster development cycles, fewer design inconsistencies,
          and improved collaboration between design and development teams. It
          has become a foundation for scaling our products efficiently while
          ensuring a cohesive user experience.
        </p>
      </>
    ),
  },
};

const projectsAr = {
  "automate-design-handovers-with-a-figma-to-code-pipeline": {
    title: "أتمتة تسليم التصميم باستخدام مسار Figma to Code",
    summary:
      "استكشاف النقاش المستمر بين استخدام المسافات وعلامات الجدولة لمسافة بادئة للكود، ولماذا يهم هذا الاختيار أكثر مما تعتقد.",
    team: [
      {
        name: "جون دو",
        role: "مهندس برمجيات",
        avatar: "/images/avatar.jpg",
        linkedIn: "https://www.linkedin.com/company/once-ui/",
      },
    ],
    content: (
      <>
        <h2>نظرة عامة</h2>
        <p>
          في هذا المشروع، ركزت على أتمتة عملية تسليم التصميم التي غالباً ما تكون
          مملة. كان الهدف هو إنشاء مسار يحول تصميمات Figma مباشرة إلى كود نظيف
          وجاهز للإنتاج. من خلال دمج رموز التصميم ومكتبات المكونات وسير العمل
          المؤتمت، قلل هذا الحل بشكل كبير من الوقت المستغرق في ترجمة أصول
          التصميم إلى كود، مع الحفاظ على اتساق التصميم عبر المنتج.
        </p>
        <h2>الميزات الرئيسية</h2>
        <ul>
          <li>
            <strong>تكامل ملحق Figma</strong>: تطوير ملحق Figma مخصص يستخرج رموز
            التصميم مثل الألوان والطباعة وقيم التباعد، ويصدرها بتنسيق متوافق مع
            قاعدة الكود الخاصة بنا.
          </li>
          <li>
            <strong>توليد الكود</strong>: دمج عملية مؤتمتة تترجم مكونات Figma
            إلى كود React باستخدام مزيج من رموز التصميم وقوالب المكونات المعدة
            مسبقاً. سمح هذا للمطورين بالتركيز أكثر على المنطق وأقل على برمجة
            واجهة المستخدم المتكررة.
          </li>
          <li>
            <strong>المزامنة المستمرة</strong>: إنشاء مسار CI/CD يقوم بمزامنة
            تغييرات التصميم باستمرار من Figma إلى قاعدة الكود، مما يضمن انعكاس
            تحديثات التصميم على الفور دون تدخل يدوي.
          </li>
          <li>
            <strong>نظام تصميم قابل للتوسع</strong>: الاستفادة من نظام تصميم يظل
            المصدر الوحيد للحقيقة لكل من المصممين والمطورين، مما يجعل من السهل
            الحفاظ على الاتساق حتى مع تطور المنتج.
          </li>
        </ul>
        <h2>التقنيات المستخدمة</h2>
        <ul>
          <li>
            <strong>Figma API</strong>: لاستخراج رموز التصميم وبيانات المكونات
            مباشرة من تصميمات Figma.
          </li>
          <li>
            <strong>React و Next.js</strong>: لبناء قاعدة كود الواجهة الأمامية
            باستخدام مكونات نظيفة وقابلة لإعادة الاستخدام.
          </li>
          <li>
            <strong>Styled-Components</strong>: لإدارة الأنماط ديناميكياً
            باستخدام رموز التصميم.
          </li>
          <li>
            <strong>GitHub Actions</strong>: لأتمتة المسار ومزامنة تغييرات
            التصميم مع المستودع.
          </li>
        </ul>
        <h2>التحديات والدروس المستفادة</h2>
        <p>
          كان أحد أكبر التحديات هو ضمان أن يكون الكود المولد نظيفاً وقابلاً
          للصيانة. تضمن ذلك إعداد تعيين ذكي بين مكونات Figma وهياكل كود React،
          بالإضافة إلى إدارة الحالات الخاصة مثل التصميم المتجاوب والتقديم
          الشرطي. بالإضافة إلى ذلك، تطلبت المزامنة المستمرة نظاماً قوياً
          للمعالجة الأخطاء لمنع التعارضات أثناء التطوير.
        </p>
        <h2>النتيجة</h2>
        <p>
          أدى مسار Figma to code المؤتمت إلى تبسيط عملية التسليم، مما قلل وقت
          التصميم إلى التطوير بنسبة 40%. أصبح لدى المصممين الآن ثقة أكبر في أن
          تصميماتهم ستتم ترجمتها بدقة إلى كود، ويمكن للمطورين التركيز على منطق
          أكثر تعقيداً وتطوير الميزات. أثبت هذا المشروع قيمة الأتمتة في سد
          الفجوة بين التصميم والتطوير.
        </p>
      </>
    ),
  },
  "building-once-ui-a-customizable-design-system": {
    title: "بناء Once UI، نظام تصميم قابل للتخصيص",
    summary:
      "تطوير نظام تصميم مرن وقابل للتخصيص للغاية باستخدام Next.js للواجهة الأمامية و Figma للتعاون في التصميم.",
    team: [
      {
        name: "سيلين يو",
        role: "مهندس برمجيات",
        avatar: "/images/avatar.jpg",
        linkedIn: "https://www.linkedin.com/company/once-ui/",
      },
      {
        name: "لورانت وان",
        role: "مهندس تصميم",
        avatar: "/images/projects/project-01/avatar-01.jpg",
        linkedIn: "https://www.linkedin.com/company/once-ui/",
      },
    ],
    content: (
      <>
        <h2>نظرة عامة</h2>
        <p>
          تطوير نظام تصميم مرن وقابل للتخصيص للغاية باستخدام Next.js للواجهة
          الأمامية و Figma للتعاون في التصميم.
        </p>
        <h2>الميزات الرئيسية</h2>
        <ul>
          <li>
            <strong>مكتبة المكونات</strong>: بناء مجموعة من مكونات واجهة
            المستخدم النمطية والقابلة لإعادة الاستخدام باستخدام React و
            styled-components في Next.js، مع التركيز على إمكانية الوصول
            والاستجابة.
          </li>
          <li>
            <strong>السمات والتخصيص</strong>: دمج نظام سمات يسمح بتبديل وتخصيص
            لوحات الألوان والطباعة وأنماط التخطيط بسهولة باستخدام متغيرات CSS
            ورموز Figma.
          </li>
          <li>
            <strong>تكامل Figma</strong>: التعاون الوثيق مع المصممين من خلال
            إعداد مكتبة تصميم مشتركة في Figma. تمت مزامنة هذه المكتبة مع قاعدة
            الكود، مما يضمن أن يكون تسليم التصميم سلساً وأن تظل رموز التصميم
            متسقة عبر كلا النظامين.
          </li>
          <li>
            <strong>التوثيق وإرشادات الاستخدام</strong>: تطوير توثيق شامل مع
            Storybook لعرض المكونات وأنماط الاستخدام وأفضل الممارسات، مما يضمن
            سهولة اعتماد نظام التصميم من قبل الفرق الأخرى.
          </li>
        </ul>
        <h2>التقنيات المستخدمة</h2>
        <ul>
          <li>
            <strong>Next.js</strong>: لتطبيقات React سريعة التحميل من الخادم.
          </li>
          <li>
            <strong>Figma</strong>: لإنشاء وإدارة أصول التصميم والنماذج الأولية.
          </li>
          <li>
            <strong>Styled-Components</strong>: لتنسيق مكونات React بنهج نمطي
            وقابل للتخصيص.
          </li>
          <li>
            <strong>Storybook</strong>: لبناء مكتبة مكونات تفاعلية وموثقة.
          </li>
        </ul>
        <h2>التحديات والدروس المستفادة</h2>
        <p>
          كان أحد التحديات الرئيسية هو الموازنة بين الحاجة إلى المرونة والرغبة
          في الحفاظ على اتساق التصميم. تمثل الحل في إنشاء رموز تصميم محددة جيداً
          ووضع إرشادات واضحة لمتى وكيف يمكن تخصيص المكونات. بالإضافة إلى ذلك،
          كان إعداد سير عمل تعاوني فعال بين المصممين والمطورين باستخدام Figma و
          Git تجربة تعلم حسنت العملية بشكل كبير.
        </p>
        <h2>النتيجة</h2>
        <p>
          يُستخدم نظام التصميم الآن بنشاط في العديد من المشاريع، مما أدى إلى
          دورات تطوير أسرع، وتقليل عدم الاتساق في التصميم، وتحسين التعاون بين
          فرق التصميم والتطوير. لقد أصبح أساساً لتوسيع منتجاتنا بكفاءة مع ضمان
          تجربة مستخدم متماسكة.
        </p>
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
