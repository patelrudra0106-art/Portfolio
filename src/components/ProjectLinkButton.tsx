import { Github } from 'lucide-react';

export const linkButtonClass = (extra = '') =>
  `inline-flex items-center justify-center gap-2 rounded-full border-2 border-[#D7E2EA] px-8 py-3 sm:px-10 sm:py-3.5 text-[#D7E2EA] font-medium uppercase tracking-widest text-sm sm:text-base hover:bg-[#D7E2EA]/10 transition-colors duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#D7E2EA] focus-visible:ring-offset-2 focus-visible:ring-offset-[#0C0C0C] ${extra}`.trim();

interface ProjectLinkButtonProps {
  href: string;
  label: string;  // project title, so each button has a unique accessible name
  text: string;   // visible text, e.g. "Live Project" or "Source Code"
  icon?: 'github';
  className?: string;
}

export const ProjectLinkButton = ({ href, label, text, icon, className = '' }: ProjectLinkButtonProps) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    aria-label={`${text}: ${label}`}
    className={linkButtonClass(className)}
  >
    {icon === 'github' && <Github className="h-4 w-4" aria-hidden="true" />}
    {text}
  </a>
);
