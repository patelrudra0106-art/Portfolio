interface LiveProjectButtonProps {
  href: string;
  label: string; // project title, so each button has a unique accessible name
  className?: string;
}

export const LiveProjectButton = ({ href, label, className = '' }: LiveProjectButtonProps) => {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`Live project: ${label}`}
      className={`
        inline-flex items-center justify-center rounded-full border-2 border-[#D7E2EA]
        px-8 py-3 sm:px-10 sm:py-3.5
        text-[#D7E2EA] font-medium uppercase tracking-widest
        text-sm sm:text-base
        hover:bg-[#D7E2EA]/10
        transition-colors duration-200
        focus:outline-none focus-visible:ring-2 focus-visible:ring-[#D7E2EA] focus-visible:ring-offset-2 focus-visible:ring-offset-[#0C0C0C]
        ${className}
      `}
    >
      Live Project
    </a>
  );
};
