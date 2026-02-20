import { Hero } from "../components/Hero";
import { ProjectCard } from "../components/ProjectCard";
import { ResumeCard } from "../components/ResumeCard";
import { Dock } from "../components/Dock";

const PROJECTS = [
  {
    title: "SuperDesign",
    description: "An AI-driven design platform using React-Vite and Three.js, resulting in 70% faster UI component creation. Integrated Figma and Framer plugins via MCP SDK, reducing API latency by 40%.",
    date: "Oct 2025",
    githubURL: "https://github.com/AnjanyKumarJaiswal/superdesign",
    liveURL: "https://super-design.vercel.app",
    tags: ["React-Vite", "TypeScript", "Node.js", "MCP SDK", "tRPC", "PostgreSQL", "Three.js", "Prisma"],
    image: "/images/superdesign_project.png"
  },
  {
    title: "ZenViz",
    description: "Visualization platform for complex GitHub repositories. Increased code clarity by 60% using system architecture mapping and Mermaid.js.",
    date: "May 2025",
    githubURL: "https://github.com/AnjanyKumarJaiswal/ZenViz",
    liveURL: "https://www.zenviz.xyz",
    tags: ["Next.js", "Python", "Flask", "Redis", "Docker", "AWS", "GithubAPI", "Mermaid.js", "TailwindCSS"],
    image: "/images/zenviz_project.png"
  },
  {
    title: "LightBolt",
    description: "The create-react-app for Python backends — LightBolt makes starting a FastAPI, Flask, or Django project as simple as one command.",
    date: "Feb 2026",
    githubURL: "https://github.com/AnjanyKumarJaiswal/lightBolt",
    liveURL: "https://light-bolt.vercel.app",
    tags: ["Python", "TypeScript", "FastAPI", "Flask", "Django", "CLI"],
    image: "/images/lightbolt_project.png"
  }
];

const EXPERIENCE = [
  {
    company: "ViksaAI",
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

const EDUCATION = [
  {
    school: "SRM Institute of Science and Technology",
    logo: "/images/srm.png",
    degree: "B.Tech in Computer Science Engineering (AI & ML)",
    period: "2023 - 2027",
  }
];

export default function Home() {
  return (
    <div className="relative z-10 min-h-screen max-w-[690px] mx-auto px-6 pt-24 pb-32 border-l border-r border-border">
      <div className="space-y-12">
        <Hero />

        <hr className="-mx-6 border-border" />

        <section className="space-y-4">
          <h2 className="text-xl font-bold tracking-tight">About</h2>
          <div className="text-muted leading-relaxed text-sm space-y-4">
            <p>
              I'm a Full Stack Developer and AI Engineer Intern with a passion for building high-performance
              applications. Currently pursuing my B.Tech in CSE (AI & ML) at SRM IST with a CGPA of 8.59.
            </p>
            <p>
              I specialize in the Next.js ecosystem, Go-Lang, Python, and cloud infrastructure. My work
              focuses on production-grade AI agents (MCP SDK), scalable architecture, and performance
              optimization across the full stack.
            </p>
          </div>
        </section>

        <hr className="-mx-6 border-border" />

        <section id="experience" className="space-y-6">
          <div>
            <h2 className="text-xl font-bold tracking-tight">Cool Places I Worked At</h2>
          </div>

          <div>
            {EXPERIENCE.map((item, idx) => (
              <ResumeCard
                key={idx}
                title={item.company}
                subtitle={item.role}
                period={item.period}
                location={item.location}
                logo={item.logo}
                descriptions={item.descriptions}
                tags={item.tags}
                isWork
              />
            ))}
          </div>
        </section>

        <hr className="-mx-6 border-border" />

        <section id="education" className="space-y-6">
          <div>
            <h2 className="text-xl font-bold tracking-tight">Education</h2>
          </div>

          <div>
            {EDUCATION.map((item, idx) => (
              <ResumeCard
                key={idx}
                title={item.school}
                subtitle={item.degree}
                period={item.period}
                logo={item.logo}
              />
            ))}
          </div>
        </section>

        <hr className="-mx-6 border-border" />

        <section id="projects" className="space-y-12">
          <div className="space-y-4 text-center sm:text-left">
            <h2 className="text-4xl font-bold tracking-tight">Check out my latest work.</h2>
            <p className="text-muted text-base max-w-lg leading-relaxed">
              I've worked on a variety of projects, from simple websites to complex web applications.
              Here are a few of my favorites.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {PROJECTS.map((project, idx) => (
              <ProjectCard key={idx} {...project} />
            ))}
          </div>
        </section>

        <section className="pt-12 pb-24 border-t border-border -mx-6 px-6">
          <p className="text-muted text-xs font-mono">
            © {new Date().getFullYear()} Anjany Kumar Jaiswal.
          </p>
        </section>

        <Dock />
      </div>
    </div>
  );
}
