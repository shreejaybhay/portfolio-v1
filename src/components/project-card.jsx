import React from "react";
import { Card, CardContent } from "./ui/card";
import Image from "next/image";
import Link from "next/link";
import { Badge } from "./ui/badge";
import { ExternalLink, Github, Plus } from "lucide-react";

// Projects data array
const projectsData = [
  {
    id: 1,
    title: "Jammify",
    description:
      "A modern music streaming experience with clean UI, smooth animations, and fast search using the JioSaavn API.",
    image: "https://i.postimg.cc/hjFtyyWv/Screenshot-2026-01-10-063348.jpg",
    technologies: ["Next.js", "MongoDB", "Tailwind", "shadcn/ui"],
    websiteUrl: "https://jammify-music.vercel.app",
    githubUrl: "https://github.com/shreejaybhay/jammify",
  },
  {
    id: 2,
    title: "Smart Notes",
    description:
      "NoteFlow is a modern note-taking app with a clean UI and real-time collaboration built using Next.js 15.",
    image: "https://i.postimg.cc/rwKhgg9X/Screenshot-2026-01-10-071647.jpg",
    technologies: ["Next.js", "MongoDB", "Tailwind", "shadcn/ui"],
    websiteUrl: "https://smartnotes-me.vercel.app/",
    githubUrl: "https://github.com/shreejaybhay/Smart-Notes",
  },
  {
    id: 3,
    title: "ConnectAid",
    description:
      "ConnectAid is a community platform with secure auth, role-based access, and admin approvals built on Next.js 15.",
    image: "https://i.postimg.cc/Pr4xKQ5L/Screenshot-2026-01-10-072819.jpg",
    technologies: ["Next.js", "MongoDB", "Tailwind", "shadcn/ui"],
    websiteUrl: "https://connectaid-shree.vercel.app/",
    githubUrl: "https://github.com/shreejaybhay/ConnectAid",
  },
  {
    id: 4,
    title: "Snippets",
    description:
      "CodeSnippets is a personal code library for storing, organizing, and sharing snippets, built with Next.js 15+.",
    image: "https://i.postimg.cc/7hZc440p/Screenshot-2026-01-10-073536.jpg",
    technologies: ["Next.js", "MongoDB", "Tailwind", "shadcn/ui"],
    websiteUrl: "https://snippets-shree.vercel.app/",
    githubUrl: "https://github.com/shreejaybhay/snippets",
  },
  {
    id: 5,
    title: "Streamvault",
    description:
      "StreamVault is a modern entertainment platform for browsing movies, shows, and anime, built with Next.js.",
    image: "https://i.postimg.cc/YqmRWjrP/Screenshot-2026-01-10-073958.jpg",
    technologies: ["Next.js", "MongoDB", "Tailwind", "shadcn/ui"],
    websiteUrl: "https://streamvault-ten.vercel.app/",
    githubUrl: "https://github.com/shreejaybhay/streamvault",
  },
  {
    id: 6,
    title: "LuminousLabs",
    description:
      "LuminousLabs is a clean and modern UI/UX website built with Next.js and Tailwind CSS, focused on responsive and intuitive design.",
    image: "https://i.postimg.cc/rFLj5MK7/Screenshot-2026-01-10-074416.jpg",
    technologies: ["Next.js", "Tailwind", "shadcn/ui", "Motion"],
    websiteUrl: "https://luminouslabs.vercel.app/",
    githubUrl: "https://github.com/shreejaybhay/luminouslabs",
  },
  {
    id: 7,
    title: "LaundryHub",
    description:
      "Laundry Management System is a web app built with Next.js for managing laundry orders, payments, and admin operations.",
    image: "https://i.postimg.cc/5ypXHBHp/Screenshot-2026-01-10-075054.jpg",
    technologies: ["Next.js", "MongoDB", "Tailwind", "shadcn/ui"],
    websiteUrl: "https://laundryhub-plum.vercel.app/",
    githubUrl: "https://github.com/shreejaybhay/laundry-management",
  },
  {
    id: 8,
    title: "Campus Link",
    description:
      "A secure Next.js platform for real-time attendance tracking via student QR scans and admin session management.",
    image: "https://i.postimg.cc/Xqgspzc9/Screenshot-2026-01-10-080644.jpg",
    technologies: ["Next.js", "MongoDB", "Tailwind", "shadcn/ui"],
    websiteUrl: "https://academic-v1.vercel.app/",
    githubUrl: "https://github.com/shreejaybhay/academicV1",
  },
];

const ProjectCard = ({ project }) => {
  if (!project) {
    // Default project data if no project is passed
    project = projectsData[0];
  }

  return (
    <Card className="relative  group  border border-border bg-card hover:border-ring/80 transition-all duration-300 shadow-none p-0 rounded-none border-dashed">
      {/* Plus corners */}
      <div className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10">
        {/* Top Left */}
        <div className="absolute top-0 left-0 -translate-x-1/2 -translate-y-1/2">
          <Plus className="text-foreground" />
        </div>

        {/* Top Right */}
        <div className="absolute top-0 right-0 translate-x-1/2 -translate-y-1/2">
          <Plus className="text-foreground" />
        </div>

        {/* Bottom Left */}
        <div className="absolute bottom-0 left-0 -translate-x-1/2 translate-y-1/2">
          <Plus className="text-foreground" />
        </div>

        {/* Bottom Right */}
        <div className="absolute bottom-0 right-0 translate-x-1/2 translate-y-1/2">
          <Plus className="text-foreground" />
        </div>
      </div>

      <div className="relative h-40 w-full overflow-hidden bg-muted border-b border-dashed group-hover:border-ring/80 transition-all duration-300">
        <Image
          src={project.image}
          alt={`${project.title} Project Preview`}
          fill
          className="h-full w-full object-cover object-top grayscale transition-all duration-500 ease-out group-hover:scale-[1.02] group-hover:grayscale-0"
        />
      </div>

      <CardContent className="p-3 pb-2">
        <h3 className="font-semibold text-base text-card-foreground mb-2">
          {project.title}
        </h3>

        <p className="text-sm text-muted-foreground leading-relaxed mb-3">
          {project.description}
        </p>

        <div className="flex flex-wrap gap-1 mb-3">
          {project.technologies.map((tech, index) => (
            <Badge
              key={index}
              className="rounded-none text-xs bg-muted text-muted-foreground border-0"
            >
              {tech}
            </Badge>
          ))}
        </div>

        <div className="flex gap-2">
          <Link
            href={project.websiteUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 flex items-center justify-center gap-1.5 py-2 px-3 text-sm font-medium bg-primary text-primary-foreground hover:bg-primary/90 transition-all duration-300"
          >
            <ExternalLink className="w-3.5 h-3.5" />
            Website
          </Link>

          <Link
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 flex items-center justify-center gap-1.5 py-2 px-3 text-sm font-medium
                   text-muted-foreground hover:text-foreground
                   border border-border hover:border-ring
                   transition-all duration-300"
          >
            <Github className="w-3.5 h-3.5" />
            Code
          </Link>
        </div>
      </CardContent>
    </Card>
  );
};

// Export both the component and the data
export default ProjectCard;
export { projectsData };
