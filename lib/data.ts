export const PROJECTS = [
  {
    title: "AegisCode",
    slug: "aegiscode",
    description: {
      short: "AegisCode is a real-time AI security guardian designed to live inside your IDE, scanning AI-generated code for vulnerabilities as it is being written.",
      long: [
        "AegisCode monitors AI-generated code in real-time, leveraging a sophisticated pipeline powered by the Model Context Protocol (MCP) to identify security risks before they reach your repository.",
        "Its primary goal is to deliver instant risk summaries and actionable fix recommendations directly into the developer's workflow, bridging the gap between rapid AI generation and secure coding standards."
      ],
      features: [
        "Real-time scanning of AI-generated snippets.",
        "Deep integration with VS Code and JetBrains IDEs.",
        "Context-aware fix recommendations via MCP SDK."
      ]
    },
    date: "March 2026",
    githubURL: "https://github.com/AnjanyKumarJaiswal/AegisCode",
    liveURL: "https://aegis-code.vercel.app/",
    tags: ["TypeScript", "NestJS", "Next.js", "VS Code API", "Prisma", "PostgreSQL", "MCP SDK"],
    image: "/images/aegiscode.png",
    icon: "/images/aegis_icon.png"
  },
  {
    title: "SuperDesign",
    slug: "superdesign",
    description: {
      short: "An AI-driven design platform using React-Vite and Three.js, resulting in 70% faster UI component creation.",
      long: [
        "SuperDesign revolutionizes the UI/UX workflow by combining generative AI with real-time 3D visualization. It allows designers to generate production-ready code from high-level visual descriptions.",
        "By integrating Figma and Framer plugins via the MCP SDK, we've managed to reduce API latency by 40% while maintaining high-fidelity design output."
      ],
      features: [
        "generative UI component creation.",
        "Real-time Three.js preview engine.",
        "Bidirectional Figma-to-Code synchronization."
      ]
    },
    date: "Dec 2025",
    githubURL: "https://github.com/AnjanyKumarJaiswal/superdesign",
    liveURL: "https://super-design.vercel.app",
    tags: ["React-Vite", "TypeScript", "Node.js", "MCP SDK", "tRPC", "PostgreSQL", "Three.js", "Prisma"],
    image: "/images/superdesign_project.png",
    icon: "/images/superdesign_icon.png"
  },
  {
    title: "LightBolt",
    slug: "lightbolt",
    description: {
      short: "The create-react-app for Python backends — starting a FastAPI, Flask, or Django project with one command.",
      long: [
        "LightBolt streamlines the initial setup phase for Python web applications. It provides a CLI tool that scaffolds production-ready backends with pre-configured best practices.",
        "Whether you are building a simple API with FastAPI or a full-scale monolithic application with Django, LightBolt ensures a standardized structure from day one."
      ],
      features: [
        "Instant scaffolding for FastAPI, Flask, and Django.",
        "Pre-configured Docker and CI/CD pipelines.",
        "Standardized project structure for better maintainability."
      ]
    },
    date: "Nov 2025",
    githubURL: "https://github.com/AnjanyKumarJaiswal/lightBolt",
    liveURL: "https://light-bolt.vercel.app",
    tags: ["Python", "TypeScript", "FastAPI", "Flask", "Django", "CLI"],
    image: "/images/lightbolt_project.png",
    icon: "/images/bolt_icon.png"
  },
  {
    title: "ZenViz",
    slug: "zenviz",
    description: {
      short: "Visualization platform for complex GitHub repositories, increasing code clarity by 60%.",
      long: [
        "ZenViz transforms abstract codebase structures into intuitive, interactive maps. It helps developers understand large-scale architecture at a glance, reducing onboarding time significantly.",
        "By addressing the complexities of peer coding, the application provides developers with a structured environment to manage and track collaborative efforts effectively."
      ],
      features: [
        "Interactive repository architecture mapping.",
        "Real-time Mermaid.js diagram generation.",
        "Seamless GitHub API integration for instant scanning."
      ]
    },
    date: "May 2025",
    githubURL: "https://github.com/AnjanyKumarJaiswal/ZenViz",
    liveURL: "https://www.zenviz.xyz",
    tags: ["Next.js", "Python", "Flask", "Redis", "Docker", "AWS", "GithubAPI", "Mermaid.js"],
    image: "/images/zenviz_project.png",
    icon: "/images/zenviz_icon.png"
  }
];

export const EXPERIENCE = [
  {
    company: "ViksaAI",
    logo:"/images/viksaai.png",
    role: "AI Engineer Intern",
    period: "Jan 2026 - Present",
    location: "Remote",
    descriptions: [
      "Architected and deployed production-grade AI agents using the official Python MCP SDK, enabling seamless interoperability between LLMs and third-party communication protocols.",
      "Engineered specialized MCP servers for Gmail and custom SMTP domains, implementing secure authentication flows and standardized tool schemas for real-time email automation.",
    ],
    tags: ["Python", "MCP SDK", "Flask", "Gmail API", "LLMs"],
  },
  {
    company: "SpazorLabs",
    logo: "/images/spazorlabs.png",
    role: "SDE Intern",
    period: "Aug 2025 - Oct 2025",
    location: "Chennai, India",
    descriptions: [
      "Engineered a localized LLM backend service (SPT) by integrating open-source models via Ollama, enabling internal AI capabilities while maintaining model abstraction.",
      "Architected a high-availability inference service running on dedicated GPU infrastructure for 24/7 uptime.",
      "Developed a full-stack usage monitoring and API management tool with session-based token limits and custom rate-limiting logic.",
      "Built a type-safe API layer allowing other product modules to consume the SPT model through a standardized interface.",
    ],
    tags: ["Python", "Ollama", "FastAPI", "TypeScript", "Docker"],
  },
  {
    company: "Mail0 (YC X25)",
    logo: "/images/mail0.png",
    role: "Full Stack Open Source Contributor",
    period: "June 2025 - Aug 2025",
    location: "Remote",
    descriptions: [
      "Reduced potential data loss by 90% by architecting a robust drafts module with auto-save, real-time updates, and dedicated deletion APIs.",
      "Cut API latency by 35% by integrating tRPC, PostgreSQL, and Next.js for seamless, type-safe frontend-backend communication.",
      "Boosted application load efficiency by 40% by deploying production-grade features on Cloudflare's edge network.",
    ],
    tags: ["Next.js", "tRPC", "PostgreSQL", "Cloudflare", "TypeScript"],
  }
];

export const EDUCATION = [
  {
    school: "SRM Institute of Science and Technology",
    logo: "/images/srm.png",
    degree: "B.Tech in Computer Science Engineering (AI & ML)",
    period: "2023 - 2027",
  }
];

export const SKILLS = [
  {
    label: "Languages",
    skills: ["C/C++", "Python", "Java", "JavaScript", "TypeScript", "Go-Lang", "Bash"],
  },
  {
    label: "Frameworks & Libraries",
    skills: ["React", "Next.js", "TailwindCSS", "Node.js", "Express.js", "FastAPI", "Flask", "tRPC", "NestJS", "LangGraph", "LangChain", "MCP SDK"],
  },
  {
    label: "Databases & Storage",
    skills: ["MySQL", "PostgreSQL", "Redis", "NoSQL", "MongoDB", "Firebase", "Supabase"],
  },
  {
    label: "DevOps & Cloud",
    skills: ["Git", "GitHub Actions", "Docker", "Kubernetes", "AWS", "GCP", "Cloudflare Workers", "Vercel", "Render", "Railway", "Streamlit"],
  },
];
