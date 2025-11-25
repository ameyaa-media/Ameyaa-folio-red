import { Project, NavItem, BlogPost } from "./types";

export const PROJECTS: Project[] = [
  {
    id: 1,
    title: "E-Commerce Dashboard",
    description:
      "A comprehensive analytics dashboard for online retailers featuring real-time sales data, inventory management, and customer insights.",
    tags: ["React", "TypeScript", "Tailwind", "Recharts"],
    imageUrl: "https://picsum.photos/600/400?random=1",
    link: "#",
    github: "#",
  },
  {
    id: 2,
    title: "AI Content Generator",
    description:
      "SaaS application that uses large language models to help marketers generate blog posts, social media captions, and email copy.",
    tags: ["Next.js", "OpenAI API", "Stripe"],
    imageUrl: "https://picsum.photos/600/400?random=2",
    link: "#",
    github: "#",
  },
  {
    id: 3,
    title: "Health & Wellness App",
    description:
      "Mobile-first web application for tracking daily habits, water intake, and meditation sessions with progress visualization.",
    tags: ["React Native", "Firebase", "Redux"],
    imageUrl: "https://picsum.photos/600/400?random=3",
    link: "#",
    github: "#",
  },
  {
    id: 4,
    title: "Crypto Portfolio Tracker",
    description:
      "Real-time cryptocurrency tracking application allowing users to monitor their holdings across multiple exchanges.",
    tags: ["Vue.js", "CoinGecko API", "Chart.js"],
    imageUrl: "https://picsum.photos/600/400?random=4",
    link: "#",
    github: "#",
  },
  {
    id: 5,
    title: "Smart Home Controller",
    description:
      "IoT interface for managing smart devices including lights, thermostats, and security cameras from a central dashboard.",
    tags: ["React", "Node.js", "MQTT"],
    imageUrl: "https://picsum.photos/600/400?random=5",
    link: "#",
    github: "#",
  },
  {
    id: 6,
    title: "Travel Companion",
    description:
      "Social travel planning platform where users can collaborate on itineraries and share experiences.",
    tags: ["React", "Mapbox", "GraphQL"],
    imageUrl: "https://picsum.photos/600/400?random=6",
    link: "#",
    github: "#",
  },
  {
    id: 7,
    title: "DevDocs API Browser",
    description:
      "Fast, offline-capable documentation browser for developers covering over 50 technologies.",
    tags: ["Svelte", "PWA", "IndexedDB"],
    imageUrl: "https://picsum.photos/600/400?random=7",
    link: "#",
    github: "#",
  },
  {
    id: 8,
    title: "TaskMaster Pro",
    description:
      "Project management tool focused on Kanban workflows and team collaboration features.",
    tags: ["Angular", "RxJS", "NestJS"],
    imageUrl: "https://picsum.photos/600/400?random=8",
    link: "#",
    github: "#",
  },
];

export const NAV_ITEMS: NavItem[] = [
  { label: "Home", href: "/", isRoute: true },
  { label: "About", href: "#about", isRoute: false },
  { label: "Projects", href: "/projects", isRoute: true },
  { label: "Blog", href: "/blog", isRoute: true },
  { label: "Contact", href: "#contact", isRoute: false },
];

export const BLOG_POSTS: BlogPost[] = [
  {
    id: "generative-ai-web-dev",
    title: "The Rise of Generative AI in Web Development",
    excerpt:
      "Exploring how LLMs and AI tools are reshaping the way we build, debug, and deploy web applications in 2024.",
    content: `
      <p class="mb-4">Artificial Intelligence is no longer just a buzzword—it's a fundamental shift in how we approach web development. From intelligent code completion to automated testing and layout generation, Generative AI is becoming an indispensable ally for developers.</p>
      
      <h3 class="text-2xl font-bold text-gray-900 dark:text-white mt-8 mb-4">Code Generation & Assistance</h3>
      <p class="mb-4">Tools like GitHub Copilot and ChatGPT have drastically reduced boilerplate coding time. Developers can now focus on complex logic and architecture rather than syntax memorization. However, this ease of generation brings the responsibility of rigorous code review and security auditing.</p>

      <h3 class="text-2xl font-bold text-gray-900 dark:text-white mt-8 mb-4">AI-Driven Design</h3>
      <p class="mb-4">AI isn't just for logic; it's transforming design. Generative UI tools can now draft interface components based on text prompts, allowing for rapid prototyping. The synergy between design systems and AI models is creating a workflow where iteration happens in minutes, not days.</p>

      <p class="mb-4">As we move forward, the "AI-augmented developer" will replace the traditional coder. Learning to prompt effectively and integrate AI APIs will be as crucial as knowing JavaScript itself.</p>
    `,
    date: "Mar 15, 2024",
    readTime: "5 min read",
    category: "AI",
    imageUrl: "https://picsum.photos/800/600?random=10",
    author: " Ameyaa Media",
    authorImage:
      "https://ui-avatars.com/api/?name=Ameyaa+Media&background=random",
    tags: ["Artificial Intelligence", "Web Development", "Future Tech"],
  },
  {
    id: "mastering-nextjs-14",
    title: "Mastering Server Actions in Next.js 14",
    excerpt:
      "A deep dive into the new mental model of Next.js, focusing on Server Actions, partial prerendering, and streaming.",
    content: `
      <p class="mb-4">Next.js 14 has solidified the transition to React Server Components (RSC). The introduction of Server Actions allows developers to mutate data on the server without creating a separate API endpoint. This simplifies the mental model of full-stack React applications significantly.</p>
      
      <h3 class="text-2xl font-bold text-gray-900 dark:text-white mt-8 mb-4">Why Server Actions?</h3>
      <p class="mb-4">Traditionally, submitting a form meant creating an API route, handling the request, and managing the client-side fetch. With Server Actions, you define a function that runs on the server and invoke it directly from your form component. It handles the progressive enhancement automatically.</p>

      <h3 class="text-2xl font-bold text-gray-900 dark:text-white mt-8 mb-4">Streaming and Suspense</h3>
      <p class="mb-4">Combining Server Components with Suspense allows us to stream UI parts as they become ready. This dramatically improves the Perceived Performance, as the user sees the shell of the application immediately while data fetches in the background.</p>
    `,
    date: "Mar 10, 2024",
    readTime: "8 min read",
    category: "Next.js",
    imageUrl: "https://picsum.photos/800/600?random=11",
    author: "Ameyaa Media",
    authorImage:
      "https://ui-avatars.com/api/?name=Ameyaa+Media&background=random",
    tags: ["React", "Next.js", "Server Components"],
  },
  {
    id: "modern-wordpress-headless",
    title: "Headless WordPress: The Best of Both Worlds",
    excerpt:
      "Combining the powerful content management of WordPress with the performance of modern frontend frameworks like React and Vue.",
    content: `
      <p class="mb-4">WordPress powers over 40% of the web, but its monolithic architecture can sometimes feel limiting for modern frontend developers. Enter Headless WordPress—a decoupled architecture that separates the backend CMS from the frontend presentation layer.</p>

      <h3 class="text-2xl font-bold text-gray-900 dark:text-white mt-8 mb-4">Why Go Headless?</h3>
      <p class="mb-4">By using WordPress purely as an API via GraphQL (WPGraphQL) or the REST API, developers can build the frontend using React, Next.js, or Vue. This results in blazing fast load times, better security, and a superior developer experience, while marketing teams keep the familiar dashboard they love.</p>

      <h3 class="text-2xl font-bold text-gray-900 dark:text-white mt-8 mb-4">Challenges to Consider</h3>
      <p class="mb-4">It's not without trade-offs. You lose out on the vast plugin ecosystem for frontend functionality, and features like post previews require custom configuration. However, for enterprise-grade sites requiring high performance, the trade-off is often worth it.</p>
    `,
    date: "Mar 08, 2024",
    readTime: "6 min read",
    category: "WordPress",
    imageUrl: "https://picsum.photos/800/600?random=13",
    author: "Ameyaa Media",
    authorImage:
      "https://ui-avatars.com/api/?name=Ameyaa+Media&background=random",
    tags: ["WordPress", "Headless CMS", "React"],
  },
  {
    id: "design-thinking-for-devs",
    title: "Design Thinking: A Developer's Perspective",
    excerpt:
      "How applying design thinking principles can help engineers build more user-centric and successful software products.",
    content: `
      <p class="mb-4">Developers often get caught up in the "how" of building features, forgetting the "why". Design thinking bridges this gap by enforcing a user-first approach to problem-solving. It consists of five stages: Empathize, Define, Ideate, Prototype, and Test.</p>

      <h3 class="text-2xl font-bold text-gray-900 dark:text-white mt-8 mb-4">Empathy in Code</h3>
      <p class="mb-4">Empathizing means understanding the friction users feel. When we write error messages, are they helpful or cryptic? When we design APIs, are they intuitive? Applying empathy leads to better DX (Developer Experience) and UX alike.</p>

      <h3 class="text-2xl font-bold text-gray-900 dark:text-white mt-8 mb-4">Iterative Prototyping</h3>
      <p class="mb-4">Don't aim for perfect code in the first run. Build a "minimum viable feature," test it with real users, and iterate. This agile mindset prevents over-engineering solutions for problems that don't exist.</p>
    `,
    date: "Mar 01, 2024",
    readTime: "5 min read",
    category: "Design",
    imageUrl: "https://picsum.photos/800/600?random=14",
    author: " Ameyaa Media",
    authorImage:
      "https://ui-avatars.com/api/?name=Ameyaa+Media&background=random",
    tags: ["Design Thinking", "Productivity", "Soft Skills"],
  },
  {
    id: "minimalist-graphic-design",
    title: "The Art of Minimalism in Graphic Design",
    excerpt:
      "Less is more. Understanding the principles of negative space, typography, and color in modern web design.",
    content: `
      <p class="mb-4">Minimalism isn't just about making things white and empty. It's about removing the unnecessary to let the essential speak. In an era of information overload, minimalist design reduces cognitive load and improves usability.</p>

      <h3 class="text-2xl font-bold text-gray-900 dark:text-white mt-8 mb-4">Negative Space</h3>
      <p class="mb-4">White space is an active design element, not a passive background. It dictates flow and hierarchy. Mastering the use of margins and padding is what separates a cluttered interface from a professional, breathable one.</p>

      <h3 class="text-2xl font-bold text-gray-900 dark:text-white mt-8 mb-4">Typography as Image</h3>
      <p class="mb-4">In minimalist design, typography often takes center stage. Choosing the right typeface pairing can convey more brand personality than a generic stock photo. Bold, expressive headers contrasted with clean, readable body text create a powerful visual rhythm.</p>
    `,
    date: "Feb 25, 2024",
    readTime: "4 min read",
    category: "Graphic Design",
    imageUrl: "https://picsum.photos/800/600?random=15",
    author: "Ameyaa Media",
    authorImage:
      "https://ui-avatars.com/api/?name=Ameyaa+Media&background=random",
    tags: ["Design", "UI/UX", "Minimalism"],
  },
  {
    id: "modern-seo-strategies",
    title: "Core Web Vitals & Modern SEO",
    excerpt:
      "Why performance is now the biggest ranking factor and how to optimize your frontend for the latest search engine algorithms.",
    content: `
      <p class="mb-4">Search Engine Optimization (SEO) has evolved from keyword stuffing to user experience optimization. Google's Core Web Vitals (CWV) metrics—LCP, INP, and CLS—are now critical factors in determining page rank.</p>
      
      <h3 class="text-2xl font-bold text-gray-900 dark:text-white mt-8 mb-4">Interaction to Next Paint (INP)</h3>
      <p class="mb-4">Replacing FID, INP measures the responsiveness of a page. It tracks how much time elapses between a user interaction (click, key press) and the next visual update. Optimizing INP means minimizing main thread blocking and ensuring efficient event handlers.</p>

      <h3 class="text-2xl font-bold text-gray-900 dark:text-white mt-8 mb-4">Content is still King</h3>
      <p class="mb-4">While technical SEO is vital, helpful content remains paramount. The Helpful Content Update focuses on rewarding content written for humans, not search engines. This means focusing on depth, expertise, and authority (E-E-A-T).</p>
    `,
    date: "Feb 20, 2024",
    readTime: "6 min read",
    category: "SEO",
    imageUrl: "https://picsum.photos/800/600?random=12",
    author: "Ameyaa Media",
    authorImage:
      "https://ui-avatars.com/api/?name=Ameyaa+Media&background=random",
    tags: ["SEO", "Performance", "Web Vitals"],
  },
];
