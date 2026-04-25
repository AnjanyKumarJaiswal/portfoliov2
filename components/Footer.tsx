import { Github, Twitter, Linkedin } from "lucide-react";

export function Footer() {
  const socials = [
    {
      name: "GitHub",
      href: "https://github.com/AnjanyKumarJaiswal",
      icon: <Github size={16} />,
    },
    {
      name: "Twitter",
      href: "#",
      icon: <Twitter size={16} />,
    },
    {
      name: "LinkedIn",
      href: "https://linkedin.com/in/anjany5322",
      icon: <Linkedin size={16} />,
    },
  ];

  return (
    <footer className="flex flex-col sm:flex-row items-center justify-between gap-4">
      <p className="text-muted text-[12px] font-sans uppercase tracking-widest">
        © {new Date().getFullYear()} All rights reserved. Anjany
      </p>
      
      <div className="flex items-center gap-4">
        {socials.map((social) => (
          <a
            key={social.name}
            href={social.href}
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted hover:text-foreground transition-colors duration-200"
            aria-label={social.name}
          >
            {social.icon}
          </a>
        ))}
      </div>
    </footer>
  );
}
