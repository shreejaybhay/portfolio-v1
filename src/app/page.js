"use client"

import { ModeToggle } from "@/components/mode-toggle";
import Image from "next/image";
import Link from "next/link";
import { ChevronRight, ExternalLink, Github } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";


export default function Home() {
  return (
    <>
      <motion.div
        className="max-w-2xl mx-auto mt-8 md:mt-16 lg:mt-23.5 p-4 md:p-6"
        initial={{ opacity: 0, filter: "blur(10px)" }}
        animate={{ opacity: 1, filter: "blur(0px)" }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        {/* hero */}
        <div className="flex flex-col md:flex-row items-start md:items-center gap-4 md:gap-2 mb-6 md:mb-8.5">
          <div className="flex gap-1 flex-col order-2 md:order-1">
            <h1 className="font-bold font-sans text-3xl md:text-4xl lg:text-5xl text-foreground">Hi, I&apos;m Shree <span></span></h1>
            <p className="font-sans text-sm md:text-base max-w-full md:max-w-125 text-foreground">I build clean, scalable web apps focused on performance, design, and real-world usability simple, fast, reliable.</p>
          </div>
          <div className="order-1 md:order-2 self-center md:self-auto">
            <Image
              src="https://avatars.githubusercontent.com/u/155870646?s=400&u=870734441b2d80a665a2f734245ba815c0a5b871&v=4"
              alt="Shree's Avatar"
              width={80}
              height={80}
              className="
                   rounded-full
                   grayscale
                   md:w-27.5 md:h-27.5
                   transition-all duration-300 ease-in-out
                  md:hover:grayscale-0"
            />
          </div>

        </div>

        <div className="mb-8.5">
          <h1 className="text-xl font-bold font-sans text-[--foreground]">About</h1>
          <p className="dark:text-[#A3A3A3] text-[#737373]  text-sm">I&apos;m a developer who enjoys turning ideas into well-crafted digital products.
            I care about clean code, thoughtful UI, and systems that scale without complexity.

            Most of my work revolves around full-stack web development — from designing APIs to building smooth user interfaces. I prefer minimal solutions that solve real problems.</p>
        </div>
        <div>
          <h1 className="text-xl font-bold font-sans text-[--foreground] mb-2">Education</h1>

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

        <div>
          <h1 className="text-xl font-bold font-sans text-[--foreground] mb-2 mt-8.5">Work Experience</h1>

          <div className="flex gap-2 items-start mb-3">
            <Link href="https://craftlab.ai/" target="_blank" rel="noopener noreferrer" className="relative w-11.75 h-11.75 overflow-hidden border border-foreground/50 shrink-0">
              <Image
                src="https://media.licdn.com/dms/image/v2/D4D0BAQHx5oB2XiQATA/company-logo_200_200/company-logo_200_200/0/1719256960573/craftlabai_logo?e=1769644800&v=beta&t=2Hv_WxYZfQsoA2v8IyjUUBLEjzAoekfg9tdOspnKBLo"
                alt="Craftlab Logo"
                fill
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

        <div>
          <h1 className="text-xl font-bold font-sans text-[--foreground] mb-2 mt-8.5">Skills</h1>

          <div>
            <Badge className="mr-2 mb-2 rounded-none">JavaScript</Badge>
            <Badge className="mr-2 mb-2 rounded-none">TypeScript</Badge>
            <Badge className="mr-2 mb-2 rounded-none">React</Badge>
            <Badge className="mr-2 mb-2 rounded-none">Next.js</Badge>
            <Badge className="mr-2 mb-2 rounded-none">Node.js</Badge>
            <Badge className="mr-2 mb-2 rounded-none">Express.js</Badge>
            <Badge className="mr-2 mb-2 rounded-none">MongoDB</Badge>
            <Badge className="mr-2 mb-2 rounded-none">Tailwind CSS</Badge>
            <Badge className="mr-2 mb-2 rounded-none">Shadcn UI</Badge>
            <Badge className="mr-2 mb-2 rounded-none">Git</Badge>
            <Badge className="mr-2 mb-2 rounded-none">GitHub</Badge>
            <Badge className="mr-2 mb-2 rounded-none">Figma</Badge>
            <Badge className="mr-2 mb-2 rounded-none">Postman</Badge>
          </div>
        </div>

        <div className="mb-8.5">
          <h1 className="text-xl font-bold font-sans text-[--foreground] mb-2 mt-8.5">My Projects</h1>
          <p className="dark:text-[#A3A3A3] text-[#737373] text-sm mb-6">I&apos;ve worked on a variety of projects, from simple websites to complex web applications. Here are a few of my favorites.</p>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 md:gap-6">
            {/* Jammify Project */}
            <Card className="group overflow-hidden border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-950 hover:border-neutral-300 dark:hover:border-neutral-700 transition-all duration-200 shadow-none p-0 rounded-none">
              <div className="relative h-40 w-full overflow-hidden bg-neutral-50 dark:bg-neutral-900">
                <Image
                  src="https://i.postimg.cc/hjFtyyWv/Screenshot-2026-01-10-063348.jpg"
                  alt="Jammify Project Preview"
                  fill
                  className=" 
                         h-full w-full
                         object-cover object-top
                         grayscale
                         transition-all duration-500 ease-out
                         group-hover:scale-[1.02]
                         group-hover:grayscale-0"
                />
              </div>

              <CardContent className="p-3 pb-2">
                <h3 className="font-semibold text-base text-foreground mb-2">Jammify</h3>
                <p className="text-sm text-[#737373] dark:text-[#A3A3A3] leading-relaxed mb-3">
                  A modern music streaming experience with clean UI, smooth animations, and fast search using the JioSaavn API.
                </p>

                <div className="flex flex-wrap gap-1 mb-3">
                  <Badge className="rounded-none text-xs bg-neutral-100 dark:bg-neutral-800 text-neutral-700 dark:text-neutral-300 border-0">Next.js</Badge>
                  <Badge className="rounded-none text-xs bg-neutral-100 dark:bg-neutral-800 text-neutral-700 dark:text-neutral-300 border-0">MongoDB</Badge>
                  <Badge className="rounded-none text-xs bg-neutral-100 dark:bg-neutral-800 text-neutral-700 dark:text-neutral-300 border-0">Tailwind</Badge>
                  <Badge className="rounded-none text-xs bg-neutral-100 dark:bg-neutral-800 text-neutral-700 dark:text-neutral-300 border-0">shadcn/ui</Badge>
                </div>

                <div className="flex gap-2">
                  <Link
                    href="https://jammify-music.vercel.app"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 flex items-center justify-center gap-1.5 group/btn py-2 px-3 text-sm font-medium bg-primary text-primary-foreground hover:bg-primary/90 transition-all duration-200"
                  >
                    <ExternalLink className="w-3.5 h-3.5" />
                    Website
                  </Link>
                  <Link
                    href="https://github.com/shreejaybhay/jammify"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 flex items-center justify-center gap-1.5 group/btn py-2 px-3 text-sm font-medium text-[#737373] dark:text-[#A3A3A3] hover:text-foreground border border-neutral-200 dark:border-neutral-800 hover:border-neutral-300 dark:hover:border-neutral-700 transition-all duration-200"
                  >
                    <Github className="w-3.5 h-3.5" />
                    Code
                  </Link>
                </div>
              </CardContent>
            </Card>
            {/* Second Project */}
            <Card className="group overflow-hidden border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-950 hover:border-neutral-300 dark:hover:border-neutral-700 transition-all duration-200 shadow-none p-0 rounded-none">
              <div className="relative h-40 w-full overflow-hidden bg-neutral-50 dark:bg-neutral-900">
                <Image
                  src="https://i.postimg.cc/rwKhgg9X/Screenshot-2026-01-10-071647.jpg"
                  alt="Smart Notes Project"
                  fill
                  className="h-full w-full object-cover object-top group-hover:scale-[1.02] transition-all duration-500 grayscale group-hover:grayscale-0 ease-out"
                />
              </div>

              <CardContent className="p-3 pb-2">
                <h3 className="font-semibold text-base text-foreground mb-2">Smart Notes</h3>
                <p className="text-sm text-[#737373] dark:text-[#A3A3A3] leading-relaxed mb-3">
                  NoteFlow is a modern note-taking app with a clean UI and real-time collaboration built using Next.js 15.
                </p>

                <div className="flex flex-wrap gap-1 mb-3">
                  <Badge className="rounded-none text-xs bg-neutral-100 dark:bg-neutral-800 text-neutral-700 dark:text-neutral-300 border-0">Next.js</Badge>
                  <Badge className="rounded-none text-xs bg-neutral-100 dark:bg-neutral-800 text-neutral-700 dark:text-neutral-300 border-0">MongoDB</Badge>
                  <Badge className="rounded-none text-xs bg-neutral-100 dark:bg-neutral-800 text-neutral-700 dark:text-neutral-300 border-0">Tailwind</Badge>
                  <Badge className="rounded-none text-xs bg-neutral-100 dark:bg-neutral-800 text-neutral-700 dark:text-neutral-300 border-0">shadcn/ui</Badge>
                </div>

                <div className="flex gap-2">
                  <Link
                    href="https://smartnotes-me.vercel.app/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 flex items-center justify-center gap-1.5 group/btn py-2 px-3 text-sm font-medium bg-primary text-primary-foreground hover:bg-primary/90 transition-all duration-200"
                  >
                    <ExternalLink className="w-3.5 h-3.5" />
                    Website
                  </Link>
                  <Link
                    href="https://github.com/shreejaybhay/Smart-Notes"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 flex items-center justify-center gap-1.5 group/btn py-2 px-3 text-sm font-medium text-[#737373] dark:text-[#A3A3A3] hover:text-foreground border border-neutral-200 dark:border-neutral-800 hover:border-neutral-300 dark:hover:border-neutral-700 transition-all duration-200"
                  >
                    <Github className="w-3.5 h-3.5" />
                    Code
                  </Link>
                </div>
              </CardContent>
            </Card>

            {/* 3rd Project */}
            <Card className="group overflow-hidden border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-950 hover:border-neutral-300 dark:hover:border-neutral-700 transition-all duration-200 shadow-none p-0 rounded-none">
              <div className="relative h-40 w-full overflow-hidden bg-neutral-50 dark:bg-neutral-900">
                <Image
                  src="https://i.postimg.cc/Pr4xKQ5L/Screenshot-2026-01-10-072819.jpg"
                  alt="Smart Notes Project"
                  fill
                  className="h-full w-full object-cover object-top group-hover:scale-[1.02] transition-all duration-500 grayscale group-hover:grayscale-0 ease-out"
                />
              </div>

              <CardContent className="p-3 pb-2">
                <h3 className="font-semibold text-base text-foreground mb-2">ConnectAid</h3>
                <p className="text-sm text-[#737373] dark:text-[#A3A3A3] leading-relaxed mb-3">
                  ConnectAid is a community platform with secure auth, role-based access, and admin approvals built on Next.js 15.
                </p>

                <div className="flex flex-wrap gap-1 mb-3">
                  <Badge className="rounded-none text-xs bg-neutral-100 dark:bg-neutral-800 text-neutral-700 dark:text-neutral-300 border-0">Next.js</Badge>
                  <Badge className="rounded-none text-xs bg-neutral-100 dark:bg-neutral-800 text-neutral-700 dark:text-neutral-300 border-0">MongoDB</Badge>
                  <Badge className="rounded-none text-xs bg-neutral-100 dark:bg-neutral-800 text-neutral-700 dark:text-neutral-300 border-0">Tailwind</Badge>
                  <Badge className="rounded-none text-xs bg-neutral-100 dark:bg-neutral-800 text-neutral-700 dark:text-neutral-300 border-0">shadcn/ui</Badge>
                </div>

                <div className="flex gap-2">
                  <Link
                    href="https://connectaid-shree.vercel.app/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 flex items-center justify-center gap-1.5 group/btn py-2 px-3 text-sm font-medium bg-primary text-primary-foreground hover:bg-primary/90 transition-all duration-200"
                  >
                    <ExternalLink className="w-3.5 h-3.5" />
                    Website
                  </Link>
                  <Link
                    href="https://github.com/shreejaybhay/ConnectAid"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 flex items-center justify-center gap-1.5 group/btn py-2 px-3 text-sm font-medium text-[#737373] dark:text-[#A3A3A3] hover:text-foreground border border-neutral-200 dark:border-neutral-800 hover:border-neutral-300 dark:hover:border-neutral-700 transition-all duration-200"
                  >
                    <Github className="w-3.5 h-3.5" />
                    Code
                  </Link>
                </div>
              </CardContent>
            </Card>

            {/* 4th Project */}
            <Card className="group overflow-hidden border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-950 hover:border-neutral-300 dark:hover:border-neutral-700 transition-all duration-200 shadow-none p-0 rounded-none">
              <div className="relative h-40 w-full overflow-hidden bg-neutral-50 dark:bg-neutral-900">
                <Image
                  src="https://i.postimg.cc/7hZc440p/Screenshot-2026-01-10-073536.jpg"
                  alt="Smart Notes Project"
                  fill
                  className="h-full w-full object-cover object-top group-hover:scale-[1.02] transition-all duration-500 grayscale group-hover:grayscale-0 ease-out"
                />
              </div>

              <CardContent className="p-3 pb-2">
                <h3 className="font-semibold text-base text-foreground mb-2">Snippets</h3>
                <p className="text-sm text-[#737373] dark:text-[#A3A3A3] leading-relaxed mb-3">
                  CodeSnippets is a personal code library for storing, organizing, and sharing snippets, built with Next.js 15+.
                </p>

                <div className="flex flex-wrap gap-1 mb-3">
                  <Badge className="rounded-none text-xs bg-neutral-100 dark:bg-neutral-800 text-neutral-700 dark:text-neutral-300 border-0">Next.js</Badge>
                  <Badge className="rounded-none text-xs bg-neutral-100 dark:bg-neutral-800 text-neutral-700 dark:text-neutral-300 border-0">MongoDB</Badge>
                  <Badge className="rounded-none text-xs bg-neutral-100 dark:bg-neutral-800 text-neutral-700 dark:text-neutral-300 border-0">Tailwind</Badge>
                  <Badge className="rounded-none text-xs bg-neutral-100 dark:bg-neutral-800 text-neutral-700 dark:text-neutral-300 border-0">shadcn/ui</Badge>
                </div>

                <div className="flex gap-2">
                  <Link
                    href="https://snippets-shree.vercel.app/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 flex items-center justify-center gap-1.5 group/btn py-2 px-3 text-sm font-medium bg-primary text-primary-foreground hover:bg-primary/90 transition-all duration-200"
                  >
                    <ExternalLink className="w-3.5 h-3.5" />
                    Website
                  </Link>
                  <Link
                    href="https://github.com/shreejaybhay/snippets"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 flex items-center justify-center gap-1.5 group/btn py-2 px-3 text-sm font-medium text-[#737373] dark:text-[#A3A3A3] hover:text-foreground border border-neutral-200 dark:border-neutral-800 hover:border-neutral-300 dark:hover:border-neutral-700 transition-all duration-200"
                  >
                    <Github className="w-3.5 h-3.5" />
                    Code
                  </Link>
                </div>
              </CardContent>
            </Card>
            {/* 5th Project */}
            <Card className="group overflow-hidden border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-950 hover:border-neutral-300 dark:hover:border-neutral-700 transition-all duration-200 shadow-none p-0 rounded-none">
              <div className="relative h-40 w-full overflow-hidden bg-neutral-50 dark:bg-neutral-900">
                <Image
                  src="https://i.postimg.cc/YqmRWjrP/Screenshot-2026-01-10-073958.jpg"
                  alt="Smart Notes Project"
                  fill
                  className="h-full w-full object-cover object-top group-hover:scale-[1.02] transition-all duration-500 grayscale group-hover:grayscale-0 ease-out"
                />
              </div>

              <CardContent className="p-3 pb-2">
                <h3 className="font-semibold text-base text-foreground mb-2">Streamvault</h3>
                <p className="text-sm text-[#737373] dark:text-[#A3A3A3] leading-relaxed mb-3">
                  StreamVault is a modern entertainment platform for browsing movies, shows, and anime, built with Next.js.
                </p>

                <div className="flex flex-wrap gap-1 mb-3">
                  <Badge className="rounded-none text-xs bg-neutral-100 dark:bg-neutral-800 text-neutral-700 dark:text-neutral-300 border-0">Next.js</Badge>
                  <Badge className="rounded-none text-xs bg-neutral-100 dark:bg-neutral-800 text-neutral-700 dark:text-neutral-300 border-0">MongoDB</Badge>
                  <Badge className="rounded-none text-xs bg-neutral-100 dark:bg-neutral-800 text-neutral-700 dark:text-neutral-300 border-0">Tailwind</Badge>
                  <Badge className="rounded-none text-xs bg-neutral-100 dark:bg-neutral-800 text-neutral-700 dark:text-neutral-300 border-0">shadcn/ui</Badge>
                </div>

                <div className="flex gap-2">
                  <Link
                    href="https://streamvault-ten.vercel.app/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 flex items-center justify-center gap-1.5 group/btn py-2 px-3 text-sm font-medium bg-primary text-primary-foreground hover:bg-primary/90 transition-all duration-200"
                  >
                    <ExternalLink className="w-3.5 h-3.5" />
                    Website
                  </Link>
                  <Link
                    href="https://github.com/shreejaybhay/streamvault"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 flex items-center justify-center gap-1.5 group/btn py-2 px-3 text-sm font-medium text-[#737373] dark:text-[#A3A3A3] hover:text-foreground border border-neutral-200 dark:border-neutral-800 hover:border-neutral-300 dark:hover:border-neutral-700 transition-all duration-200"
                  >
                    <Github className="w-3.5 h-3.5" />
                    Code
                  </Link>
                </div>
              </CardContent>
            </Card>

            {/* 6th Project */}
            <Card className="group overflow-hidden border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-950 hover:border-neutral-300 dark:hover:border-neutral-700 transition-all duration-200 shadow-none p-0 rounded-none">
              <div className="relative h-40 w-full overflow-hidden bg-neutral-50 dark:bg-neutral-900">
                <Image
                  src="https://i.postimg.cc/rFLj5MK7/Screenshot-2026-01-10-074416.jpg"
                  alt="Smart Notes Project"
                  fill
                  className="h-full w-full object-cover object-top group-hover:scale-[1.02] transition-all duration-500 grayscale group-hover:grayscale-0 ease-out"
                />
              </div>

              <CardContent className="p-3 pb-2">
                <h3 className="font-semibold text-base text-foreground mb-2">luminouslabs</h3>
                <p className="text-sm text-[#737373] dark:text-[#A3A3A3] leading-relaxed mb-3">
                  LuminousLabs is a clean and modern UI/UX website built with Next.js and Tailwind CSS, focused on responsive and intuitive design.
                </p>

                <div className="flex flex-wrap gap-1 mb-3">
                  <Badge className="rounded-none text-xs bg-neutral-100 dark:bg-neutral-800 text-neutral-700 dark:text-neutral-300 border-0">Next.js</Badge>
                  <Badge className="rounded-none text-xs bg-neutral-100 dark:bg-neutral-800 text-neutral-700 dark:text-neutral-300 border-0">MongoDB</Badge>
                  <Badge className="rounded-none text-xs bg-neutral-100 dark:bg-neutral-800 text-neutral-700 dark:text-neutral-300 border-0">Tailwind</Badge>
                  <Badge className="rounded-none text-xs bg-neutral-100 dark:bg-neutral-800 text-neutral-700 dark:text-neutral-300 border-0">shadcn/ui</Badge>
                </div>

                <div className="flex gap-2">
                  <Link
                    href="https://luminouslabs.vercel.app/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 flex items-center justify-center gap-1.5 group/btn py-2 px-3 text-sm font-medium bg-primary text-primary-foreground hover:bg-primary/90 transition-all duration-200"
                  >
                    <ExternalLink className="w-3.5 h-3.5" />
                    Website
                  </Link>
                  <Link
                    href="https://github.com/shreejaybhay/luminouslabs"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 flex items-center justify-center gap-1.5 group/btn py-2 px-3 text-sm font-medium text-[#737373] dark:text-[#A3A3A3] hover:text-foreground border border-neutral-200 dark:border-neutral-800 hover:border-neutral-300 dark:hover:border-neutral-700 transition-all duration-200"
                  >
                    <Github className="w-3.5 h-3.5" />
                    Code
                  </Link>
                </div>
              </CardContent>
            </Card>

            {/* 7th Project */}
            <Card className="group overflow-hidden border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-950 hover:border-neutral-300 dark:hover:border-neutral-700 transition-all duration-200 shadow-none p-0 rounded-none">
              <div className="relative h-40 w-full overflow-hidden bg-neutral-50 dark:bg-neutral-900">
                <Image
                  src="https://i.postimg.cc/5ypXHBHp/Screenshot-2026-01-10-075054.jpg"
                  alt="Smart Notes Project"
                  fill
                  className="h-full w-full object-cover object-top group-hover:scale-[1.02] transition-all duration-500 grayscale group-hover:grayscale-0 ease-out"
                />
              </div>

              <CardContent className="p-3 pb-2">
                <h3 className="font-semibold text-base text-foreground mb-2">LaundryHub</h3>
                <p className="text-sm text-[#737373] dark:text-[#A3A3A3] leading-relaxed mb-3">
                  Laundry Management System is a web app built with Next.js for managing laundry orders, payments, and admin operations.
                </p>

                <div className="flex flex-wrap gap-1 mb-3">
                  <Badge className="rounded-none text-xs bg-neutral-100 dark:bg-neutral-800 text-neutral-700 dark:text-neutral-300 border-0">Next.js</Badge>
                  <Badge className="rounded-none text-xs bg-neutral-100 dark:bg-neutral-800 text-neutral-700 dark:text-neutral-300 border-0">MongoDB</Badge>
                  <Badge className="rounded-none text-xs bg-neutral-100 dark:bg-neutral-800 text-neutral-700 dark:text-neutral-300 border-0">Tailwind</Badge>
                  <Badge className="rounded-none text-xs bg-neutral-100 dark:bg-neutral-800 text-neutral-700 dark:text-neutral-300 border-0">shadcn/ui</Badge>
                </div>

                <div className="flex gap-2">
                  <Link
                    href="https://laundryhub-plum.vercel.app/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 flex items-center justify-center gap-1.5 group/btn py-2 px-3 text-sm font-medium bg-primary text-primary-foreground hover:bg-primary/90 transition-all duration-200"
                  >
                    <ExternalLink className="w-3.5 h-3.5" />
                    Website
                  </Link>
                  <Link
                    href="https://github.com/shreejaybhay/laundry-management"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 flex items-center justify-center gap-1.5 group/btn py-2 px-3 text-sm font-medium text-[#737373] dark:text-[#A3A3A3] hover:text-foreground border border-neutral-200 dark:border-neutral-800 hover:border-neutral-300 dark:hover:border-neutral-700 transition-all duration-200"
                  >
                    <Github className="w-3.5 h-3.5" />
                    Code
                  </Link>
                </div>
              </CardContent>
            </Card>

            {/* 8th Project */}
            <Card className="group overflow-hidden border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-950 hover:border-neutral-300 dark:hover:border-neutral-700 transition-all duration-200 shadow-none p-0 rounded-none">
              <div className="relative h-40 w-full overflow-hidden bg-neutral-50 dark:bg-neutral-900">
                <Image
                  src="https://i.postimg.cc/Xqgspzc9/Screenshot-2026-01-10-080644.jpg"
                  alt="Smart Notes Project"
                  fill
                  className="h-full w-full object-cover object-top group-hover:scale-[1.02] transition-all duration-500 grayscale group-hover:grayscale-0 ease-out"
                />
              </div>

              <CardContent className="p-3 pb-2">
                <h3 className="font-semibold text-base text-foreground mb-2">Campus Link</h3>
                <p className="text-sm text-[#737373] dark:text-[#A3A3A3] leading-relaxed mb-3">
                  QR Code Attendance System is a Next.js app where students mark attendance via QR codes and admins manage sessions securely.              </p>

                <div className="flex flex-wrap gap-1 mb-3">
                  <Badge className="rounded-none text-xs bg-neutral-100 dark:bg-neutral-800 text-neutral-700 dark:text-neutral-300 border-0">Next.js</Badge>
                  <Badge className="rounded-none text-xs bg-neutral-100 dark:bg-neutral-800 text-neutral-700 dark:text-neutral-300 border-0">MongoDB</Badge>
                  <Badge className="rounded-none text-xs bg-neutral-100 dark:bg-neutral-800 text-neutral-700 dark:text-neutral-300 border-0">Tailwind</Badge>
                  <Badge className="rounded-none text-xs bg-neutral-100 dark:bg-neutral-800 text-neutral-700 dark:text-neutral-300 border-0">shadcn/ui</Badge>
                </div>

                <div className="flex gap-2">
                  <Link
                    href="https://academic-v1.vercel.app/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 flex items-center justify-center gap-1.5 group/btn py-2 px-3 text-sm font-medium bg-primary text-primary-foreground hover:bg-primary/90 transition-all duration-200"
                  >
                    <ExternalLink className="w-3.5 h-3.5" />
                    Website
                  </Link>
                  <Link
                    href="https://github.com/shreejaybhay/academicV1"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 flex items-center justify-center gap-1.5 group/btn py-2 px-3 text-sm font-medium text-[#737373] dark:text-[#A3A3A3] hover:text-foreground border border-neutral-200 dark:border-neutral-800 hover:border-neutral-300 dark:hover:border-neutral-700 transition-all duration-200"
                  >
                    <Github className="w-3.5 h-3.5" />
                    Code
                  </Link>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        <div className="mb-8.5">
          <h1 className="text-xl font-bold font-sans text-[--foreground] mb-2 mt-8.5">Get in Touch</h1>
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
          </div>
        </div>

        <div>
          <p className="text-sm text-[#737373] dark:text-[#A3A3A3]">
            © 2024 Shree Jaybhay. All rights reserved.
          </p>
        </div>
      </motion.div>

      {/* Sticky Mode Toggle Button - Outside motion.div for proper positioning */}
      <div className="fixed bottom-4 left-4 z-50">
        <ModeToggle />
      </div>
    </>
  );
}