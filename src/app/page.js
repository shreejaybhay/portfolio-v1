"use client"

import { useState, useEffect } from "react";
import { TextLoop } from "@/components/core/text-loop";
import { TextShimmer } from "@/components/core/text-shimmer";
import { useTheme } from "next-themes";
import { ModeToggle } from "@/components/mode-toggle";
import Image from "next/image";
import Link from "next/link";
import { ChevronRight, ExternalLink, Github, Plus, BadgeCheck, Volume2 } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import ProjectCard, { projectsData } from "@/components/project-card";
import { StackIcons } from "@/components/stack-icons";
import GithubCalendar from "@/components/github-calendar";
import { Testimonials02 } from "@/components/testimonials";
import { Metrics01 } from "@/components/analytics";

const skillsItems = [
  { name: "JavaScript", icon: "javascript", colorClass: "text-[#F7DF1E]" },
  { name: "TypeScript", icon: "typescript", colorClass: "text-[#3178C6]" },
  { name: "React", icon: "react", colorClass: "text-[#61DAFB]" },
  { name: "Next.js", icon: "nextdotjs", colorClass: "text-foreground" },
  { name: "Node.js", icon: "node", colorClass: "text-[#339939]" },
  { name: "Express.js", icon: "express", colorClass: "text-foreground" },
  { name: "MongoDB", icon: "mongodb", colorClass: "text-[#47A248]" },
  { name: "Tailwind CSS", icon: "tailwind", colorClass: "text-[#06B6D4]" },
  { name: "Shadcn UI", icon: "shadcnui", colorClass: "text-foreground" },
  { name: "Git", icon: "git", colorClass: "text-[#F05032]" },
  { name: "GitHub", icon: "github", colorClass: "text-foreground" },
  { name: "Figma", icon: "figma", colorClass: "text-[#F24E1E]" },
  { name: "Postman", icon: "postman", colorClass: "text-[#FF6C37]" },
];

export default function Home() {
  const [isNightImage, setIsNightImage] = useState(false);
  const { resolvedTheme } = useTheme();

  useEffect(() => {
    setIsNightImage(resolvedTheme === "dark");
  }, [resolvedTheme]);

  const toggleImage = () => {
    setIsNightImage((prev) => !prev);
    try {
      const audio = new Audio('/switch-button.mp3');
      audio.play();
    } catch (e) {
      console.log("Audio not supported");
    }
  };

  return (
    <>
      <motion.div
        className="max-w-3xl mx-auto mt-8 md:mt-16 lg:mt-23.5 border-x border-border bg-background"
        initial={{ opacity: 0, filter: "blur(10px)" }}
        animate={{ opacity: 1, filter: "blur(0px)" }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        {/* hero & about */}
        <div className="relative border-t border-border">

          
          <div className="relative z-10 w-full flex flex-col">
            {/* profile grid block */}
            <div className="flex items-end border-b border-border">
              
              {/* Left: Avatar Box */}
              <div 
                className="shrink-0 flex items-center justify-center border-r border-border p-4 md:p-0 cursor-pointer group"
                onClick={toggleImage}
              >
                <div className="relative w-[110px] h-[110px] md:w-[160px] md:h-[160px]">
                  <Image
                    src="/profile-day.jpg"
                    alt="Shree's Avatar Day"
                    fill
                    sizes="(max-width: 768px) 110px, 160px"
                    className={`rounded-full border border-foreground/10 bg-background object-cover aspect-square transition-opacity duration-500 ease-in-out ${isNightImage ? 'opacity-0' : 'opacity-100'}`}
                  />
                  <Image
                    src="/profile-night.jpg"
                    alt="Shree's Avatar Night"
                    fill
                    sizes="(max-width: 768px) 110px, 160px"
                    className={`rounded-full border border-foreground/10 bg-background object-cover aspect-square transition-opacity duration-500 ease-in-out ${isNightImage ? 'opacity-100' : 'opacity-0'}`}
                  />
                </div>
              </div>
              
              {/* Right: Name + Subtitle as bordered rows */}
              <div className="flex flex-col flex-1 border-t border-border">
                <div className="flex items-center px-4 py-4 border-b border-border">
                  <h1 className="font-bold text-[22px] sm:text-[28px] md:text-[36px] text-foreground tracking-tight leading-none" style={{ fontFamily: 'var(--font-sora)' }}>Shree Jaybhay</h1>
                  <BadgeCheck className="w-[22px] h-[22px] fill-foreground text-background ml-2.5" />
                </div>
                <div className="flex items-center px-4 py-3 overflow-hidden w-full">
                  <TextLoop
                    className="font-mono text-[13px] md:text-[14px] text-muted-foreground truncate w-full block pr-[1px]"
                    interval={4}
                    transition={{
                      type: 'spring',
                      stiffness: 80,
                      damping: 20,
                      mass: 1.5,
                    }}
                    variants={{
                      initial: { y: -16, opacity: 0, filter: 'blur(6px)' },
                      animate: { y: 0, opacity: 1, filter: 'blur(0px)' },
                      exit:    { y: 16,  opacity: 0, filter: 'blur(6px)' },
                    }}
                  >
                    <TextShimmer duration={2.5} spread={1.5}>Full-Stack Developer.</TextShimmer>
                    <TextShimmer duration={2.5} spread={1.5}>Building things for the web.</TextShimmer>
                    <TextShimmer duration={2.5} spread={1.5}>Next.js · React · Node.js</TextShimmer>
                    <TextShimmer duration={2.5} spread={1.5}>Clean code. Thoughtful UI.</TextShimmer>
                  </TextLoop>
                </div>
              </div>
              
            </div>

            {/* About */}
            <div className="p-5 md:p-6 bg-foreground/[0.01]">
              <p className="text-muted-foreground/80 text-[13px] md:text-[15px] leading-relaxed max-w-2xl font-sans">
                I build clean, scalable web apps focused on performance, design, and real-world usability. I enjoy turning ideas into well-crafted digital products, caring deeply about clean code, thoughtful UI, and systems that scale without complexity.
              </p>
            </div>
          </div>
        </div>
        <div className="striped-divider" />

        <div className="p-4 md:p-6">
          <h1 className="text-xl font-bold font-sans text-[--foreground] mb-4">Education</h1>

          <div className="flex gap-2 items-start mb-3">
            <Link href="https://mum.digitaluniversity.ac/" target="_blank" rel="noopener noreferrer" className="relative w-11.75 h-11.75 overflow-hidden border border-foreground/50 bg-white">
              <Image
                src="https://upload.wikimedia.org/wikipedia/en/7/7a/University_of_Mumbai_coat_of_arms.svg"
                alt="IIIT Vadodara Logo"
                fill
                sizes="47px"
                className="object-contain bg-white scale-85"
              />
            </Link>
            <div className="flex items-center justify-between w-full">
              <div>
                <Link
                  href="https://mum.digitaluniversity.ac/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1 group"
                >
                  <h2 className="font-semibold text-sm capitalize">mumbai university</h2>

                  <ChevronRight
                    className="w-3.5 h-3.5
                  opacity-0 -translate-x-1
                  group-hover:opacity-100 group-hover:translate-x-0
                  transition-all duration-300"
                  />
                </Link>

                <p className="text-xs text-[#737373] dark:text-[#A3A3A3]">
                  B.Sc IT (Information Technology)
                </p>
              </div>

              <div>
                <p className="text-[14px] text-[#737373] dark:text-[#A3A3A3]">
                  July 2024 - ongoing
                </p>
              </div>

            </div>

          </div>

          <div className="flex gap-2 items-start">
            <Link href="https://mum.digitaluniversity.ac/" target="_blank" rel="noopener noreferrer" className="relative w-11.75 h-11.75 overflow-hidden border border-foreground/50 ">
              <Image
                src="https://i.postimg.cc/wTjyRvXn/imgi-449-coding-logo-design-template-free-vector.jpg"
                alt="IIIT Vadodara Logo"
                fill
                unoptimized
                sizes="47px"
                className="scale-150 object-contain"
              />
            </Link>
            <div className=" w-full">
              <div>
                <Link
                  href="https://roadmap.sh/full-stack"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1 group"
                >
                  <h2 className="font-semibold text-sm capitalize">Full-Stack Development (Self-Taught)</h2>

                  <ChevronRight
                    className="w-3.5 h-3.5
                  opacity-0 -translate-x-1
                  group-hover:opacity-100 group-hover:translate-x-0
                  transition-all duration-300"
                  />
                </Link>

                <p className="text-xs text-[#737373] dark:text-[#A3A3A3]">
                  Learned through hands-on projects, technical documentation, YouTube, and developer communities.
                </p>
              </div>
            </div>

          </div>
        </div>

        <div className="striped-divider" />

        <div className="p-4 md:p-6">
          <h1 className="text-xl font-bold font-sans text-[--foreground] mb-4">Work Experience</h1>

          <div className="flex gap-2 items-start mb-3">
            <Link href="https://craftlab.ai/" target="_blank" rel="noopener noreferrer" className="relative w-11.75 h-11.75 overflow-hidden border border-foreground/50 shrink-0">
              <Image
                src="https://pbs.twimg.com/profile_images/1795012349000089600/l34lFuR7_400x400.jpg"
                alt="Craftlab Logo"
                fill
                unoptimized
                sizes="47px"
                className="object-contain bg-white"
              />
            </Link>
            <div className="flex items-center justify-between w-full">
              <div>
                <Link
                  href="https://craftlab.ai/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1 group"
                >
                  <h2 className="font-semibold text-sm">Craftlab</h2>

                  <ChevronRight
                    className="w-3.5 h-3.5
                  opacity-0 -translate-x-1
                  group-hover:opacity-100 group-hover:translate-x-0
                  transition-all duration-300"
                  />
                </Link>

                <p className="text-xs text-[#737373] dark:text-[#A3A3A3]">
                  Computer Science & Engineering
                </p>
              </div>

              <div>
                <p className="text-[14px] text-[#737373] dark:text-[#A3A3A3]">
                  June 2024 - July 2024
                </p>
              </div>
            </div>
          </div>

          <div className="flex gap-2 items-start mb-3">
            <Link
              href="https://github.com/shreejaybhay"
              target="_blank"
              rel="noopener noreferrer"
              className="relative w-11.75 h-11.75 overflow-hidden border border-foreground/50 shrink-0"
            >
              <Image
                src="https://i.postimg.cc/C1bP8Jgx/original-cd940b45bbed325d172547e4181e59b2.webp"
                alt="Freelance Logo"
                fill
                unoptimized
                sizes="47px"
                className="object-contain scale-125 bg-white"
              />
            </Link>

            <div className="flex items-center justify-between w-full">
              <div>
                <Link
                  href="https://github.com/shreejaybhay"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1 group"
                >
                  <h2 className="font-semibold text-sm">Freelance Projects</h2>

                  <ChevronRight
                    className="w-3.5 h-3.5
                  opacity-0 -translate-x-1
                  group-hover:opacity-100 group-hover:translate-x-0
                  transition-all duration-300"
                  />
                </Link>

                <p className="text-xs text-[#737373] dark:text-[#A3A3A3]">
                  Full-Stack Developer
                </p>
              </div>

              <div>
                <p className="text-[14px] text-[#737373] dark:text-[#A3A3A3]">
                  January 2024 — ongoing
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="striped-divider" />

        <div className="p-4 md:p-6">
          <h1 className="text-xl font-bold font-sans text-[--foreground] mb-4">Skills</h1>
          <div className="flex flex-wrap md:justify-center gap-2.5">
            {skillsItems.map((item) => {
              const Icon = StackIcons[item.icon];
              return (
                <div
                  key={item.name}
                  className="flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-neutral-200 dark:border-neutral-800/80 bg-neutral-50/50 dark:bg-neutral-900/40 text-sm text-neutral-700 dark:text-neutral-300 transition-all duration-200 hover:bg-neutral-100 dark:hover:bg-neutral-800/60 hover:border-neutral-300 dark:hover:border-neutral-700 cursor-default"
                >
                  {Icon && <Icon className={`w-4.5 h-4.5 ${item.colorClass || ""}`} />}
                  <span className="font-sans font-medium">{item.name}</span>
                </div>
              );
            })}
          </div>
        </div>

        <div className="striped-divider" />

        <div className="p-4 md:p-6">
          <GithubCalendar />
        </div>

        <div className="striped-divider" />

        <Testimonials02 />
        
        <div className="striped-divider" />

        <Metrics01 />

        <div className="striped-divider" />

        <div className="p-4 md:p-6">
          <h1 className="text-xl font-bold font-sans text-[--foreground] mb-2">My Projects</h1>
          <p className="dark:text-[#A3A3A3] text-[#737373] text-sm mb-6">I&apos;ve worked on a variety of projects, from simple websites to complex web applications. Here are a few of my favorites.</p>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 md:gap-6">
            {projectsData.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        </div>

        <div className="striped-divider" />

        <div className="p-4 md:p-6 flex flex-col gap-6">
          <div>
            <h1 className="text-xl font-bold font-sans text-[--foreground] mb-4">Get in Touch</h1>
            <p className="dark:text-[#A3A3A3] text-[#737373] text-sm mb-6">I&apos;m always open to discussing new opportunities, collaborations, or just having a chat about technology and development.</p>

            <div className="space-y-4">
              {/* Email */}
              <div className="flex gap-2 items-start">
                <div className="relative w-11.75 h-11.75 overflow-hidden border border-foreground/50 bg-neutral-50 dark:bg-neutral-900 flex items-center justify-center">
                  <svg className="w-5 h-5 text-foreground" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div className="flex items-center justify-between w-full">
                  <div>
                    <Link
                      href="mailto:shreejayb2004@gmail.com"
                      className="flex items-center gap-1 group"
                    >
                      <h2 className="font-semibold text-sm">shreejaybhay26@gmail.com</h2>
                      <ChevronRight
                        className="w-3.5 h-3.5
                      opacity-0 -translate-x-1
                      group-hover:opacity-100 group-hover:translate-x-0
                      transition-all duration-300"
                      />
                    </Link>
                    <p className="text-xs text-[#737373] dark:text-[#A3A3A3]">
                      Drop me a line for any inquiries
                    </p>
                  </div>
                </div>
              </div>

              {/* LinkedIn */}
              <div className="flex gap-2 items-start">
                <div className="relative w-11.75 h-11.75 overflow-hidden border border-foreground/50 bg-neutral-50 dark:bg-neutral-900 flex items-center justify-center">
                  <svg className="w-5 h-5 text-foreground" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                  </svg>
                </div>
                <div className="flex items-center justify-between w-full">
                  <div>
                    <Link
                      href="https://www.linkedin.com/in/shree-jaybhay-084014316/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1 group"
                    >
                      <h2 className="font-semibold text-sm">LinkedIn</h2>
                      <ChevronRight
                        className="w-3.5 h-3.5
                      opacity-0 -translate-x-1
                      group-hover:opacity-100 group-hover:translate-x-0
                      transition-all duration-300"
                      />
                    </Link>
                    <p className="text-xs text-[#737373] dark:text-[#A3A3A3]">
                      Let&apos;s connect professionally
                    </p>
                  </div>
                </div>
              </div>

              {/* GitHub */}
              <div className="flex gap-2 items-start">
                <div className="relative w-11.75 h-11.75 overflow-hidden border border-foreground/50 bg-neutral-50 dark:bg-neutral-900 flex items-center justify-center">
                  <Github className="w-5 h-5 text-foreground" />
                </div>
                <div className="flex items-center justify-between w-full">
                  <div>
                    <Link
                      href="https://github.com/shreejaybhay"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1 group"
                    >
                      <h2 className="font-semibold text-sm">GitHub</h2>
                      <ChevronRight
                        className="w-3.5 h-3.5
                      opacity-0 -translate-x-1
                      group-hover:opacity-100 group-hover:translate-x-0
                      transition-all duration-300"
                      />
                    </Link>
                    <p className="text-xs text-[#737373] dark:text-[#A3A3A3]">
                      Check out my code and contributions
                    </p>
                  </div>
                </div>
              </div>

              {/* Twitter/X */}
              <div className="flex gap-2 items-start">
                <div className="relative w-11.75 h-11.75 overflow-hidden border border-foreground/50 bg-neutral-50 dark:bg-neutral-900 flex items-center justify-center">
                  <svg className="w-4 h-4 text-foreground" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                  </svg>
                </div>
                <div className="flex items-center justify-between w-full">
                  <div>
                    <Link
                      href="https://twitter.com/shreejaybhay26"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1 group"
                    >
                      <h2 className="font-semibold text-sm">Twitter</h2>
                      <ChevronRight
                        className="w-3.5 h-3.5
                      opacity-0 -translate-x-1
                      group-hover:opacity-100 group-hover:translate-x-0
                      transition-all duration-300"
                      />
                    </Link>
                    <p className="text-xs text-[#737373] dark:text-[#A3A3A3]">
                      Follow me for tech updates and thoughts
                    </p>
                  </div>
                </div>
              </div>
              {/* medium blogs */}
              <div className="flex gap-2 items-start">
                <div className="relative w-11.75 h-11.75 overflow-hidden border border-foreground/50 bg-neutral-50 dark:bg-neutral-900 flex items-center justify-center">
                  <svg className="w-5 h-5 text-foreground" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M13.54 12a6.8 6.8 0 01-6.77 6.82A6.8 6.8 0 010 12a6.8 6.8 0 016.77-6.82A6.8 6.8 0 0113.54 12zM20.96 12c0 3.54-1.51 6.42-3.38 6.42-1.87 0-3.39-2.88-3.39-6.42s1.52-6.42 3.39-6.42 3.38 2.88 3.38 6.42M24 12c0 3.17-.53 5.75-1.19 5.75-.66 0-1.19-2.58-1.19-5.75s.53-5.75 1.19-5.75C23.47 6.25 24 8.83 24 12z" />
                  </svg>
                </div>
                <div className="flex items-center justify-between w-full">
                  <div>
                    <Link
                      href="https://medium.com/@shreejaybhay"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1 group"
                    >
                      <h2 className="font-semibold text-sm">Medium</h2>
                      <ChevronRight
                        className="w-3.5 h-3.5
                      opacity-0 -translate-x-1
                      group-hover:opacity-100 group-hover:translate-x-0
                      transition-all duration-300"
                      />
                    </Link>
                    <p className="text-xs text-[#737373] dark:text-[#A3A3A3]">
                      Read my technical articles and insights
                    </p>
                  </div>
                </div>
              </div>

            </div>
          </div>

          <div className="pt-4 border-t border-border">
            <p className="text-sm text-[#737373] dark:text-[#A3A3A3]">
              © 2024 Shree Jaybhay. All rights reserved.
            </p>
          </div>
        </div>
      </motion.div>

      {/* Sticky Mode Toggle Button - Outside motion.div for proper positioning */}
      <div className="fixed bottom-4 left-4 z-50">
        <ModeToggle />
      </div>
    </>
  );
}