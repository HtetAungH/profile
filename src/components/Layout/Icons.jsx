import React from "react";
import {
  FaGithub,
  FaLinkedinIn,
  FaExternalLinkAlt,
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaCode,
  FaReact,
  FaNodeJs,
  FaGitAlt,
} from "react-icons/fa";

import { HiOutlineCodeBracket } from "react-icons/hi2";

// Import brand icons from Simple Icons (included in react-icons)
import {
  SiVite,
  SiJavascript,
  SiTypescript,
  SiRedux,
  SiTailwindcss,
  SiFirebase,
} from "react-icons/si";

// --- Social & General Icons ---
export const GitHubIcon = () => <FaGithub className="w-full h-full" />;
export const LinkedInIcon = () => <FaLinkedinIn className="w-full h-full" />;
export const ExternalLinkIcon = () => (
  <FaExternalLinkAlt className="w-full h-full" />
);
export const FacebookIcon = () => <FaFacebookF className="w-full h-full" />;
export const TwitterIcon = () => <FaTwitter className="w-full h-full" />;
export const InstagramIcon = () => <FaInstagram className="w-full h-full" />;
export const CodeBracketIcon = () => (
  <HiOutlineCodeBracket className="w-full h-full" />
);
export const CodeIcon = () => <FaCode className="w-full h-full" />;

// --- Tech Stack Icons (Fixed) ---
export const ReactIcon = () => (
  <FaReact className="w-full h-full text-[#61DAFB]" />
);

export const ViteIcon = () => (
  <SiVite className="w-full h-full text-[#646CFF]" />
);

export const JavaScriptIcon = () => (
  <SiJavascript className="w-full h-full text-[#F7DF1E] bg-black" />
  // bg-black added because JS logo is usually yellow square with black text,
  // or you can just use text-yellow if you prefer the shape.
);

export const TypeScriptIcon = () => (
  <SiTypescript className="w-full h-full text-[#3178C6]" />
);

export const ReduxIcon = () => (
  <SiRedux className="w-full h-full text-[#764ABC]" />
);

export const TailwindCssIcon = () => (
  <SiTailwindcss className="w-full h-full text-[#06B6D4]" />
);

export const NodeJsIcon = () => (
  <FaNodeJs className="w-full h-full text-[#339933]" />
);

export const FirebaseIcon = () => (
  <SiFirebase className="w-full h-full text-[#FFCA28]" />
);

export const GitIcon = () => (
  <FaGitAlt className="w-full h-full text-[#F05032]" />
);

const Icons = {
  GitHubIcon,
  LinkedInIcon,
  ExternalLinkIcon,
  FacebookIcon,
  TwitterIcon,
  InstagramIcon,
  CodeBracketIcon,
  CodeIcon,
  ReactIcon,
  ViteIcon,
  JavaScriptIcon,
  TypeScriptIcon,
  ReduxIcon,
  TailwindCssIcon,
  NodeJsIcon,
  FirebaseIcon,
  GitIcon,
};

export default Icons;
