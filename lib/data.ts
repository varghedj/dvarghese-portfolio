import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { PiRobot } from "react-icons/pi"
import { MdComputer } from "react-icons/md"
import { LuGraduationCap } from "react-icons/lu";
import corpcommentImg from "@/public/corpcomment.png";
import rmtdevImg from "@/public/rmtdev.png";
import wordanalyticsImg from "@/public/wordanalytics.png";
import portfolioImg from '@/public/dv-portfolio-screenshot.png'

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "Robotics Intern",
    location: "Vienna, VA",
    description:
      "Lead Programming efforts for Advanced Physical Therapy and Rehabilitation Center's robotics wing.",
    icon: React.createElement(PiRobot),
    date: "2020-2021",
  },
  {
    title: "Graduated From JMU",
    location: "Harrisonburg, VA",
    description:
      "Graduated with a BS in Engineering",
    icon: React.createElement(LuGraduationCap),
    date: "2022",
  },
  {
    title: "Front-End Developer",
    location: "Annandale, VA",
    description:
      "Collaboration with Capwell Energy Services to launch a single-page application to guide potential clients and investors to their business",
    icon: React.createElement(MdComputer),
    date: "2022",
  },
  {
    title: "System Administrator",
    location: "Washington, DC",
    description:
      "I'm now a system administrator for CGI Federal's FBI account team. I work with RHEL Linux, IBM AIX, Microsoft Windows, and Windows Server. I'm open to full-time opportunities.",
    icon: React.createElement(CgWorkAlt),
    date: "2022 - present",
  },
] as const;

export const projectsData = [
  {
    title: "Next.js Portfolio",
    description:
      "I made this website to gain experience with next JS while also learning about and utilizing more complex Javascript concepts such as Props, States, and Effects.",
    tags: ["React", "Next.js", "Tailwind", "Framer"],
    imageUrl: portfolioImg,
  },
  {
    title: "Capwell.org",
    description:
      "A commisisoned web-page for Capwell Energy Services. Although simple, this single page web application has put the founders of Capwell in touch with several different clients such as the Pennsylvania Department of Environmental Protection.",
    tags: ["React", "TypeScript", "Next.js", "Tailwind", "Redux"],
    imageUrl: rmtdevImg,
  },
  {
    title: "SkyPrecision",
    description:
      "My Engineering Capstone Project. Skyprecision focused on delivering a cost-effective and less labor intensive precision agriculture solution using drone carried LIDAR imaging to scan for different metrics such as Color, Temperature, and Soil Moisture",
    tags: ["React", "SQL", "Styled Components", "Python", "Firebase"],
    imageUrl: wordanalyticsImg,
  },
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "Git",
  "Tailwind",
  'AWS',
  'Firebase',
  "Python",
  "Django",
  "Framer Motion",
  "AIX",
  "PowerShell",
  "RHEL",
  "TCP",
  "UDP",
  "IP",
  "HTTP",
  "DNS",
  "NAT",
  "Jira",
] as const;