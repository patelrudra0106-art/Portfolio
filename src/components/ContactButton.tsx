import { ArrowRight } from 'lucide-react';

export const ContactButton = ({ className = '' }: { className?: string }) => {
  return (
    <a
      href="#contact"
      className={`
        relative inline-flex items-center gap-2 rounded-full overflow-hidden
        px-8 py-3 sm:px-10 sm:py-3.5 md:px-12 md:py-4
        text-white font-medium uppercase tracking-widest
        text-xs sm:text-sm md:text-base
        focus:outline-none focus-visible:ring-2 focus-visible:ring-purple-500 focus-visible:ring-offset-2 focus-visible:ring-offset-[#0C0C0C]
        ${className}
      `}
      style={{
        background: 'linear-gradient(123deg, #18011F 7%, #B600A8 37%, #7621B0 72%, #BE4C00 100%)',
        boxShadow: '0px 4px 4px rgba(181, 1, 167, 0.25), 4px 4px 12px #7721B1 inset',
        outline: '2px solid white',
        outlineOffset: '-3px',
      }}
    >
      Contact Me
      <ArrowRight className="w-4 h-4 flex-shrink-0" aria-hidden="true" />
    </a>
  );
};
