// src/components/Icons.jsx
import {
  FaGithub,
  FaLinkedinIn,
  FaExternalLinkAlt,
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaCode,
} from "react-icons/fa";

import { HiOutlineCodeBracket } from "react-icons/hi2";

// --- START: Existing Social & General Icons ---
export const GitHubIcon = () => <FaGithub className="w-6 h-6" />;
export const LinkedInIcon = () => <FaLinkedinIn className="w-6 h-6" />;
export const ExternalLinkIcon = () => <FaExternalLinkAlt className="w-6 h-6" />;
export const FacebookIcon = () => <FaFacebookF className="w-6 h-6" />;
export const TwitterIcon = () => <FaTwitter className="w-6 h-6" />;
export const InstagramIcon = () => <FaInstagram className="w-6 h-6" />;
export const CodeBracketIcon = () => (
  <HiOutlineCodeBracket className="w-6 h-6" />
);
export const CodeIcon = () => <FaCode className="w-6 h-6" />;
// --- END: Existing Social & General Icons ---

// --- START: Added Tech Skill Icons ---
// You can find great SVG icons from sites like https://svgl.app/

const ReactIcon = () => (
  <svg
    fill="currentColor"
    viewBox="0 0 128 128"
    className="w-full h-full text-[#61DAFB]"
  >
    <path d="M64 128c35.346 0 64-28.654 64-64S99.346 0 64 0 0 28.654 0 64s28.654 64 64 64zM32.843 42.483c-2.825-3.097-4.238-5.22-4.238-6.368 0-1.148 1.413-2.296 4.238-3.444-5.65-6.888-14.126-10.332-25.426-10.332-4.238 0-7.788 1.148-10.65 3.444h.001c-2.863 2.296-4.294 5.22-4.294 8.768 0 4.693 2.133 8.768 6.398 12.216-1.414 2.296-2.12 4.936-2.12 7.916 0 3.616 1.414 6.888 4.238 9.812-4.265 3.448-6.398 7.524-6.398 12.216 0 3.548 1.43 6.472 4.294 8.768 2.862 2.296 6.387 3.444 10.65 3.444 11.3 0 19.776-3.444 25.426-10.332-2.825-1.148-4.238-2.296-4.238-3.444 0-1.148 1.413-2.296 4.238-3.444 2.825 3.097 4.238 5.22 4.238 6.368 0 1.148-1.413 2.296-4.238 3.444 5.65 6.888 14.126 10.332 25.426 10.332 4.238 0 7.788-1.148 10.65-3.444 2.863-2.296 4.294-5.22 4.294-8.768 0-4.692-2.133-8.768-6.398-12.216 1.414-2.296 2.12-4.936 2.12-7.916 0-3.616-1.414-6.888-4.238-9.812 4.265-3.448 6.398-7.524 6.398-12.216 0-3.548-1.43-6.472-4.294-8.768-2.862-2.296-6.387-3.444-10.65-3.444-11.3 0-19.776 3.444-25.426 10.332 2.825 1.148 4.238 2.296 4.238 3.444 0 1.148-1.413 2.296-4.238 3.444z" />
    <path d="M64 82.383c-10.16 0-18.44-8.28-18.44-18.44s8.28-18.44 18.44-18.44 18.44 8.28 18.44 18.44-8.28 18.44-18.44 18.44zm0-31.944c-7.458 0-13.5 6.042-13.5 13.5s6.042 13.5 13.5 13.5 13.5-6.042 13.5-13.5-6.042-13.5-13.5-13.5z" />
  </svg>
);

const ViteIcon = () => (
  <svg fill="none" viewBox="0 0 256 257" className="w-full h-full">
    <path
      fill="url(#vite-grad)"
      d="M255.421 44.254L137.234 252.274c-2.43 4.208-8.21 4.208-10.64 0L7.96 43.106C5.53 38.898 8.42 33 13.78 33h228.327c5.36 0 8.25 5.898 5.894 10.106l-1.58 1.148z"
    />
    <path
      fill="url(#vite-grad-2)"
      d="M185.313 32.128l-54.032-28.47c-3.446-1.817-7.617-1.817-11.063 0l-54.032 28.47C62.74 33.945 61 37.5 61 41.343V151.77c0 3.842 1.74 7.397 5.187 9.214l54.032 28.47c3.446 1.817 7.617 1.817 11.063 0l54.032-28.47c3.446-1.817 5.187-5.372 5.187-9.214V41.343c0-3.842-1.74-7.398-5.187-9.215z"
    />
    <defs>
      <linearGradient
        id="vite-grad"
        x1="131.691"
        x2="131.691"
        y1="242.348"
        y2="33"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#41D1FF" />
        <stop offset="1" stopColor="#BD34FE" />
      </linearGradient>
      <linearGradient
        id="vite-grad-2"
        x1="126.781"
        x2="120.368"
        y1="184.053"
        y2="9.24"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#FFEA83" />
        <stop offset="0.08" stopColor="#FFDD35" />
        <stop offset="1" stopColor="#FFA800" />
      </linearGradient>
    </defs>
  </svg>
);

const JavaScriptIcon = () => (
  <svg viewBox="0 0 128 128" className="w-full h-full">
    <path fill="#F7DF1E" d="M0 0h128v128H0z" />
    <path d="M41.59 93.313h10.875V81.375c0-4.875 3.375-7.313 8.25-7.313 4.875 0 8.25 2.438 8.25 7.313v11.938h10.875V80.5c0-4.875 3.375-7.313 8.25-7.313 4.875 0 8.25 2.438 8.25 7.313v12.813h10.875V72.125c0-10.5-5.625-15.75-15.75-15.75-6.375 0-11.25 3-14.25 8.25-2.25-4.875-6.375-8.25-13.125-8.25-9.375 0-15.375 5.625-15.375 15.75v11.188z" />
  </svg>
);
const TypeScriptIcon = () => (
  <svg viewBox="0 0 128 128" className="w-full h-full">
    <path fill="#007ACC" d="M0 0h128v128H0z" />
    <path
      fill="#FFF"
      d="M25.75 93.313h10.875v-48.75h28.125v-10.5H25.75v59.25zm53.625 0h10.875v-48.75h28.125v-10.5H79.375v59.25z"
    />
  </svg>
);
const ReduxIcon = () => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="#764ABC"
    strokeWidth="2"
    className="w-full h-full"
  >
    <circle cx="12" cy="12" r="10" />
    <path d="M12 2a10 10 0 00-7.07 17.07" />
    <path d="M12 22a10 10 0 007.07-17.07" />
  </svg>
);
const TailwindCssIcon = () => (
  <svg viewBox="0 0 24 24" fill="#38BDF8" className="w-full h-full">
    <path d="M12.93,12.93l-2.86,3.77a.69.69,0,0,1-1.14-.56V11.28l-2.86,3.77a.69.69,0,0,1-1.14-.56V8.13a.69.69,0,0,1,1.14.56l2.86,3.77V8.13a.69.69,0,0,1,1.14.56l2.86,3.77V8.13a.69.69,0,0,1,1.14.56l2.86,3.77V8.69a.69.69,0,0,1,1.38,0v6a.69.69,0,0,1-1.14.56Z" />
  </svg>
);
const NodeJsIcon = () => (
  <svg viewBox="0 0 24 24" fill="#68A063" className="w-full h-full">
    <path d="M12,2A10,10,0,0,0,2,12a10,10,0,0,0,10,10,10,10,0,0,0,10-10A10,10,0,0,0,12,2Zm3.82,14.24a2,2,0,0,1-1.42.58,2.33,2.33,0,0,1-1.63-.61L11,14.41V18H9V6h5.45a3.5,3.5,0,0,1,3.5,3.5,3.5,3.5,0,0,1-2.13,3.29l2,5.45ZM11,12.59l1.79,1.8a.42.42,0,0,0,.33.15.54.54,0,0,0,.43-.18.52.52,0,0,0,.15-.41V8H11Z" />
  </svg>
);
const FirebaseIcon = () => (
  <svg viewBox="0 0 24 24" fill="#FFA000" className="w-full h-full">
    <path d="M12,2l-9,4.82V17.18L12,22l9-4.82V6.82L12,2ZM12,12l9-5-9-5-9,5,9,5Z" />
  </svg>
);
const GitIcon = () => (
  <svg viewBox="0 0 24 24" fill="#F05033" className="w-full h-full">
    <path d="M12,2A10,10,0,0,0,2,12a10,10,0,0,0,10,10,10,10,0,0,0,10-10A10,10,0,0,0,12,2Zm1,15H11V11h2v6Zm0-8H11V7h2V9Z" />
  </svg>
);
// --- END: Added Tech Skill Icons ---

// UPDATED: Export a single object containing ALL icons
const Icons = {
  GitHubIcon,
  LinkedInIcon,
  ExternalLinkIcon,
  FacebookIcon,
  TwitterIcon,
  InstagramIcon,
  CodeBracketIcon,
  CodeIcon,
  // Add the new icons to the export object
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
