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
import {
  SiVite,
  SiJavascript,
  SiTypescript,
  SiRedux,
  SiTailwindcss,
  SiFirebase,
} from "react-icons/si";

// Social & General Icons
export const GitHubIcon = () => <FaGithub className="w-5 h-5" />;
export const LinkedInIcon = () => <FaLinkedinIn className="w-5 h-5" />;
export const ExternalLinkIcon = () => <FaExternalLinkAlt className="w-5 h-5" />;
export const FacebookIcon = () => <FaFacebookF className="w-5 h-5" />;
export const TwitterIcon = () => <FaTwitter className="w-5 h-5" />;
export const InstagramIcon = () => <FaInstagram className="w-5 h-5" />;
export const CodeBracketIcon = () => (
  <HiOutlineCodeBracket className="w-5 h-5" />
);
export const CodeIcon = () => <FaCode className="w-5 h-5" />;

// Tech Stack Icons
export const ReactIcon = () => <FaReact className="w-8 h-8 text-cyan-400" />;
export const ViteIcon = () => <SiVite className="w-8 h-8 text-purple-400" />;
export const JavaScriptIcon = () => (
  <SiJavascript className="w-8 h-8 text-yellow-400" />
);
export const TypeScriptIcon = () => (
  <SiTypescript className="w-8 h-8 text-blue-400" />
);
export const ReduxIcon = () => <SiRedux className="w-8 h-8 text-purple-500" />;
export const TailwindCssIcon = () => (
  <SiTailwindcss className="w-8 h-8 text-cyan-500" />
);
export const NodeJsIcon = () => <FaNodeJs className="w-8 h-8 text-green-500" />;
export const FirebaseIcon = () => (
  <SiFirebase className="w-8 h-8 text-orange-500" />
);
export const GitIcon = () => <FaGitAlt className="w-8 h-8 text-red-500" />;

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
