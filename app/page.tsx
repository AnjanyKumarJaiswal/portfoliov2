import { Hero } from "../components/Hero";
import { ProjectCard } from "../components/ProjectCard";
import { ResumeCard } from "../components/ResumeCard";
import { Dock } from "../components/Dock";

const PROJECTS = [
  {
    title: "SuperDesign",
    description: "An AI-driven design platform that accelerates UI component creation by 70%. Integrated Model Context Protocol (MCP) to reduce API latency by 40%.",
    date: "Oct 2025",
    githubURL: "https://github.com/AnjanyKumarJaiswal/superdesign",
    liveURL: "https://super-design.vercel.app",
    tags: ["GeminiAPI", "Node.js", "TypeScript", "MCP SDK", "tRPC", "PostgreSQL", "Three.js"]
  },
  {
    title: "ZenViz",
    description: "Visualization platform for complex GitHub repositories. Increased code clarity by 60% using system architecture mapping and Mermaid.js.",
    date: "May 2025",
    githubURL: "https://github.com/AnjanyKumarJaiswal/ZenViz",
    liveURL: "https://www.zenviz.xyz",
    tags: ["Next.js", "Python", "Flask", "Redis", "Docker", "AWS", "GithubAPI", "Mermaid.js", "TailwindCSS"]
  }
];

const EXPERIENCE = [
  {
    company: "SpazorLabs",
    role: "SDE Intern",
    period: "Aug 2025 - Oct 2025",
  },
  {
    company: "Mail0 (YC X25)",
    role: "Full Stack Contributor",
    period: "June 2025 - Aug 2025",
  }
];

const EDUCATION = [
  {
    school: "SRM Institute of Science and Technology",
    degree: "B.Tech in Computer Science Engineering (AI & ML)",
    period: "2023 - 2027",
  }
];

export default function Home() {
  return (
    <div className="space-y-24">
      <Hero />

      <section className="space-y-4">
        <h2 className="text-xl font-bold tracking-tight">About</h2>
        <div className="text-muted leading-relaxed text-sm space-y-4">
          <p>
            I'm a Full Stack Developer and SDE Intern with a passion for building high-performance
            applications. Currently pursuing my B.Tech in CSE (AI & ML) at SRM IST with a CGPA of 8.51.
          </p>
          <p>
            I specialize in the Next.js ecosystem, Go-Lang, and cloud infrastructure. My work
            focuses on performance optimization, scalable architecture, and integrating AI
            into design workflows.
          </p>
        </div>
      </section>

      <section id="experience" className="space-y-8">
        <div>
          <h2 className="text-xl font-bold tracking-tight">Cool Places I Worked At</h2>
        </div>

        <div className="space-y-1">
          {EXPERIENCE.map((item, idx) => (
            <ResumeCard
              key={idx}
              title={item.company}
              subtitle={item.role}
              period={item.period}
              isWork
            />
          ))}
        </div>
      </section>

      <section id="education" className="space-y-8">
        <div>
          <h2 className="text-xl font-bold tracking-tight">Education</h2>
        </div>

        <div className="space-y-1">
          {EDUCATION.map((item, idx) => (
            <ResumeCard
              key={idx}
              title={item.school}
              subtitle={item.degree}
              period={item.period}
            />
          ))}
        </div>
      </section>

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

      <section className="pt-12 pb-24 border-t border-border">
        <p className="text-muted text-xs font-mono">
          © {new Date().getFullYear()} Anjany Kumar Jaiswal.
        </p>
      </section>

      <Dock />
    </div>
  );
}
