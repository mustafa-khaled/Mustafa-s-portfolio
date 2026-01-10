import {
  About,
  Blog,
  BlogPost,
  Gallery,
  Home,
  Newsletter,
  Person,
  Project,
  Social,
  Work,
} from "@/types";

const person: Person = {
  firstName: "Mustafa",
  lastName: "Khaled",
  name: "Mustafa Khaled",
  role: "Software Engineer",
  avatar: "/images/avatar.jpg",
  email: "mustafakhaledinfo@gmail.com",
  location: "Egypt/Cairo",
  languages: ["English", "Arabic"],
};

const newsletter: Newsletter = {
  display: true,
  title: <>Subscribe to {person.firstName}'s Newsletter</>,
  description: <>My weekly newsletter about creativity and engineering</>,
};

const social: Social = [
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
    link: `mailto:${person.email}`,
  },
];

const home: Home = {
  path: "/",
  image: "/images/og/home.jpg",
  label: "Home",
  title: `${person.name}'s Portfolio`,
  description: `Portfolio website showcasing my work as a ${person.role}`,
  headline: <>Turning complex problems into scalable solutions</>,
  featured: {
    display: true,
    title: (
      <div className="flex items-center gap-3">
        <strong className="ml-4">Latest Work</strong>
        <div className="w-[1px] h-5 bg-[var(--brand-alpha-strong)]" />
        <span className="text-[var(--brand-medium)] mr-1">
          Featured projects
        </span>
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
};

const about: About = {
  path: "/about",
  label: "About",
  title: `About – ${person.name}`,
  description: `Meet ${person.name}, ${person.role} from ${person.location}`,
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
  intro: {
    display: true,
    title: "Introduction",
    description: (
      <>
        My role is not just to write code, it’s to translate business goals into
        reliable systems that can grow without breaking. If your product or
        internal software feels slow, messy, or hard to scale, I help redesign
        it into something modern and maintainable.
      </>
    ),
  },
  work: {
    display: true, // set to false to hide this section
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
    skills: [
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
    ],
  },
};

const blog: Blog = {
  path: "/blog",
  label: "Blog",
  title: "Blog",
  description: `Read what ${person.name} has been up to recently`,
};

const work: Work = {
  path: "/projects",
  label: "Projects",
  title: `Projects – ${person.name}`,
  description: `Design and dev projects by ${person.name}`,
};

const projects: Project[] = [
  {
    slug: "automate-design-handovers-with-a-figma-to-code-pipeline",
    title: "Automating Design Handovers with a Figma to Code Pipeline",
    publishedAt: "2024-04-01",
    summary:
      "Explore the enduring debate between using spaces and tabs for code indentation, and why this choice matters more than you might think.",
    images: [
      "/images/projects/project-01/cover-02.jpg",
      "/images/projects/project-01/image-03.jpg",
    ],
    team: [
      {
        name: "John Doe",
        role: "Software Engineer",
        avatar: "/images/avatar.jpg",
        linkedIn: "https://www.linkedin.com/company/once-ui/",
      },
    ],
    link: "https://once-ui.com/",
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
          One of the biggest challenges was ensuring that the generated code was
          clean and maintainable. This involved setting up intelligent mapping
          between Figma components and React code structures, as well as
          managing edge cases like responsive design and conditional rendering.
          Additionally, the continuous synchronization required a robust
          error-handling system to prevent conflicts during development.
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
  {
    slug: "building-once-ui-a-customizable-design-system",
    title: "Building Once UI, a Customizable Design System",
    publishedAt: "2024-04-08",
    summary:
      "Development of a flexible and highly customizable design system using Next.js for front-end and Figma for design collaboration.",
    images: [
      "/images/projects/project-01/cover-01.jpg",
      "/images/projects/project-01/cover-02.jpg",
      "/images/projects/project-01/cover-03.jpg",
      "/images/projects/project-01/cover-04.jpg",
    ],
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
];

const blogPosts: BlogPost[] = [
  {
    slug: "welcome",
    title: "Welcome to my new portfolio",
    publishedAt: "2026-01-10",
    summary: "A brief introduction to my work and what I'll be sharing here.",
    image: "/images/og/home.jpg",
    team: [
      {
        name: "Mustafa Khaled",
        role: "Software Engineer",
        avatar: "/images/avatar.jpg",
        linkedIn: "https://www.linkedin.com/in/the-mustafa-khaled/",
      },
    ],
    content: (
      <>
        <h1>Welcome</h1>
        <p>
          I help founders and CEOs turn ideas, legacy systems, and complex
          operations into clear, scalable business platforms.
        </p>
        <p>
          In this blog, I'll be sharing my thoughts on software engineering,
          system design, and the challenges of building scalable applications.
        </p>
        <p>Stay tuned for more!</p>
      </>
    ),
  },
];

const gallery: Gallery = {
  path: "/gallery",
  label: "Gallery",
  title: `Photo gallery – ${person.name}`,
  description: `A photo collection by ${person.name}`,
  images: [
    {
      src: "/images/gallery/horizontal-1.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/vertical-4.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/horizontal-3.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/vertical-1.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/vertical-2.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/horizontal-2.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/horizontal-4.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/vertical-3.jpg",
      alt: "image",
      orientation: "vertical",
    },
  ],
};

export {
  person,
  social,
  newsletter,
  home,
  about,
  blog,
  work,
  projects,
  blogPosts,
  gallery,
};
