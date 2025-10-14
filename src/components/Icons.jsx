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

import { HiOutlineCodeBracket } from "react-icons/hi2"; // For the CodeBracketIcon

export const GitHubIcon = () => <FaGithub className="w-6 h-6" />;
export const LinkedInIcon = () => <FaLinkedinIn className="w-6 h-6" />;
export const ExternalLinkIcon = () => <FaExternalLinkAlt className="w-6 h-6" />;
export const FacebookIcon = () => <FaFacebookF className="w-6 h-6" />;
export const TwitterIcon = () => <FaTwitter className="w-6 h-6" />;
export const InstagramIcon = () => <FaInstagram className="w-6 h-6" />;
export const CodeBracketIcon = () => (
  <HiOutlineCodeBracket className="w-6 h-6" />
);

// Or a generic CodeIcon if you prefer
export const CodeIcon = () => <FaCode className="w-6 h-6" />;

export default {
  GitHubIcon,
  LinkedInIcon,
  ExternalLinkIcon,
  FacebookIcon,
  TwitterIcon,
  InstagramIcon,
  CodeBracketIcon,
  CodeIcon, // If you use this one
};
