import AceTernityLogo from "@/components/logos/aceternity";
import SlideShow from "@/components/slide-show";
import { Button } from "@/components/ui/button";
import { TypographyH3, TypographyP } from "@/components/ui/typography";
import { ArrowUpRight, ExternalLink, Link2, MoveUpRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { ReactNode } from "react";
import { RiNextjsFill, RiNodejsFill, RiReactjsFill } from "react-icons/ri";
import {
  SiChakraui,
  SiDocker,
  SiExpress,
  SiFirebase,
  SiJavascript,
  SiMongodb,
  SiPostgresql,
  SiPrisma,
  SiPython,
  SiReactquery,
  SiSanity,
  SiShadcnui,
  SiSocketdotio,
  SiSupabase,
  SiTailwindcss,
  SiThreedotjs,
  SiTypescript,
  SiVuedotjs,
  SiHtml5,
  SiCss3,
} from "react-icons/si";
import { TbBrandFramerMotion } from "react-icons/tb";
const BASE_PATH = "/assets/projects-screenshots";

const ProjectsLinks = ({ live, repo }: { live: string; repo?: string }) => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-start gap-3 my-3 mb-8">
      <Link
        className="font-mono underline flex gap-2"
        rel="noopener"
        target="_new"
        href={live}
      >
        <Button variant={"default"} size={"sm"}>
          Visit Website
          <ArrowUpRight className="ml-3 w-5 h-5" />
        </Button>
      </Link>
      {repo && (
        <Link
          className="font-mono underline flex gap-2"
          rel="noopener"
          target="_new"
          href={repo}
        >
          <Button variant={"default"} size={"sm"}>
            Github
            <ArrowUpRight className="ml-3 w-5 h-5" />
          </Button>
        </Link>
      )}
    </div>
  );
};

export type Skill = {
  title: string;
  bg: string;
  fg: string;
  icon: ReactNode;
};
const PROJECT_SKILLS = {
  next: {
    title: "Next.js",
    bg: "black",
    fg: "white",
    icon: <RiNextjsFill />,
  },
  chakra: {
    title: "Chakra UI",
    bg: "black",
    fg: "white",
    icon: <SiChakraui />,
  },
  node: {
    title: "Node.js",
    bg: "black",
    fg: "white",
    icon: <RiNodejsFill />,
  },
  python: {
    title: "Python",
    bg: "black",
    fg: "white",
    icon: <SiPython />,
  },
  prisma: {
    title: "prisma",
    bg: "black",
    fg: "white",
    icon: <SiPrisma />,
  },
  postgres: {
    title: "PostgreSQL",
    bg: "black",
    fg: "white",
    icon: <SiPostgresql />,
  },
  mongo: {
    title: "MongoDB",
    bg: "black",
    fg: "white",
    icon: <SiMongodb />,
  },
  express: {
    title: "Express",
    bg: "black",
    fg: "white",
    icon: <SiExpress />,
  },
  reactQuery: {
    title: "React Query",
    bg: "black",
    fg: "white",
    icon: <SiReactquery />,
  },
  shadcn: {
    title: "ShanCN UI",
    bg: "black",
    fg: "white",
    icon: <SiShadcnui />,
  },
  aceternity: {
    title: "Aceternity",
    bg: "black",
    fg: "white",
    icon: <AceTernityLogo />,
  },
  tailwind: {
    title: "Tailwind",
    bg: "black",
    fg: "white",
    icon: <SiTailwindcss />,
  },
  docker: {
    title: "Docker",
    bg: "black",
    fg: "white",
    icon: <SiDocker />,
  },
  yjs: {
    title: "Y.js",
    bg: "black",
    fg: "white",
    icon: (
      <span>
        <strong>Y</strong>js
      </span>
    ),
  },
  firebase: {
    title: "Firebase",
    bg: "black",
    fg: "white",
    icon: <SiFirebase />,
  },
  sockerio: {
    title: "Socket.io",
    bg: "black",
    fg: "white",
    icon: <SiSocketdotio />,
  },
  js: {
    title: "JavaScript",
    bg: "black",
    fg: "white",
    icon: <SiJavascript />,
  },
  ts: {
    title: "TypeScript",
    bg: "black",
    fg: "white",
    icon: <SiTypescript />,
  },
  vue: {
    title: "Vue.js",
    bg: "black",
    fg: "white",
    icon: <SiVuedotjs />,
  },
  react: {
    title: "React.js",
    bg: "black",
    fg: "white",
    icon: <RiReactjsFill />,
  },
  sanity: {
    title: "Sanity",
    bg: "black",
    fg: "white",
    icon: <SiSanity />,
  },
  spline: {
    title: "Spline",
    bg: "black",
    fg: "white",
    icon: <SiThreedotjs />,
  },
  gsap: {
    title: "GSAP",
    bg: "black",
    fg: "white",
    icon: "",
  },
  framerMotion: {
    title: "Framer Motion",
    bg: "black",
    fg: "white",
    icon: <TbBrandFramerMotion />,
  },
  supabase: {
    title: "Supabase",
    bg: "black",
    fg: "white",
    icon: <SiSupabase />,
  },
  html: {
    title: "HTML",
    bg: "black",
    fg: "white",
    icon: <SiHtml5 />,
  },
  css: {
    title: "CSS",
    bg: "black",
    fg: "white",
    icon: <SiCss3 />,
  },
};
export type Project = {
  id: string;
  category: string;
  title: string;
  src: string;
  screenshots: string[];
  skills: { frontend: Skill[]; backend: Skill[] };
  content: React.ReactNode | any;
  github?: string;
  live: string;
};
const projects: Project[] = [
  {
    id: "crafted-clipz",
    category: "Video Production",
    title: "Crafted Clipz",
    src: "https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?w=800&q=80",
    screenshots: ["landing.png"],
    live: "https://craftedclipz.in/",
    skills: {
      frontend: [
        PROJECT_SKILLS.html,
        PROJECT_SKILLS.css,
        PROJECT_SKILLS.js,
      ],
      backend: [],
    },
    get content(): JSX.Element {
      return (
        <div>
          <TypographyP className="font-mono ">
            Crafted Clipz is a creative video editing and production website showcasing high-quality cinematic edits. The platform features a stunning portfolio showcase, client inquiry forms, smooth scroll animations, and a sleek dark aesthetic design that captures the essence of professional video production.
          </TypographyP>
          <ProjectsLinks live={this.live} repo={this.github} />
          <p className="font-mono mb-2 mt-8">
            Designed and developed multiple responsive websites as part of a freelance project for Crafted Clipz using HTML, CSS, and JavaScript. Built clean and visually engaging UI layouts aligned with the Crafted Clipz brand identity, following modern design principles and smooth animations.
          </p>
          <p className="font-mono mb-2 mt-4">
            Implemented interactive components such as navigation menus, forms, and animated sections to enhance user engagement. Followed a mobile-first approach and ensured consistency across different browsers and devices.
          </p>
        </div>
      );
    },
  },
  {
    id: "inan-book",
    category: "Web Application",
    title: "Inan Book",
    src: "https://images.unsplash.com/photo-1512820790803-83ca734da794?w=800&q=80",
    screenshots: ["landing.png"],
    live: "#",
    skills: {
      frontend: [
        PROJECT_SKILLS.html,
        PROJECT_SKILLS.css,
        PROJECT_SKILLS.js,
      ],
      backend: [],
    },
    get content(): JSX.Element {
      return (
        <div>
          <TypographyP className="font-mono ">
            Inan Book is a modern digital reading and publishing platform designed for writers and readers. Authors can publish books online, manage chapters, and connect with readers. The platform features secure payments, analytics, and support for multiple genres.
          </TypographyP>
          <ProjectsLinks live={this.live} repo={this.github} />
          <p className="font-mono mb-2 mt-8">
            A comprehensive platform that bridges the gap between authors and readers, providing a seamless experience for digital publishing and reading. Built with modern web technologies to ensure fast performance and intuitive user experience.
          </p>
          <p className="font-mono mb-2 mt-4">
            <strong>Note:</strong> This project is currently in progress as part of the Inan Infinites initiative to create world-changing digital products.
          </p>
        </div>
      );
    },
  },
  {
    id: "resume-builder",
    category: "Frontend Tool",
    title: "Resume Builder",
    src: "https://images.unsplash.com/photo-1586281380349-632531db7ed4?w=800&q=80",
    screenshots: ["landing.png"],
    live: "#",
    skills: {
      frontend: [
        PROJECT_SKILLS.html,
        PROJECT_SKILLS.css,
        PROJECT_SKILLS.js,
      ],
      backend: [],
    },
    get content(): JSX.Element {
      return (
        <div>
          <TypographyP className="font-mono ">
            An interactive resume builder tool that helps users create professional resumes with customizable templates, real-time preview, and export functionality. The tool features a simple, clean, and user-friendly interface that makes resume creation effortless.
          </TypographyP>
          <ProjectsLinks live={this.live} repo={this.github} />
          <p className="font-mono mb-2 mt-8">
            Built with pure HTML, CSS, and JavaScript, this tool provides a straightforward approach to creating professional resumes. Users can customize various sections, see changes in real-time, and export their resumes in different formats.
          </p>
          <p className="font-mono mb-2 mt-4">
            The responsive design ensures the resume builder works seamlessly across all devices, making it accessible for job seekers on the go.
          </p>
        </div>
      );
    },
  },
];
export default projects;
